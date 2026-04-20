# n8n Workflow Handoff Spec: Career-Ops Daily Discovery

**For:** CC-n8n-builder (or any n8n workflow specialist project)
**From:** CC-GTM-portfolio
**Date:** 2026-04-19
**Goal:** Build and deploy an n8n workflow that runs daily, scrapes GTM Engineer jobs from 6 sources, dedups, evaluates each via Claude API, writes to Airtable, and posts a Slack summary.

---

## 0. Context (read first)

Erik is a GTM Engineer job-hunting. A parallel Claude Code project (`CC-GTM-portfolio/career-ops/`) has 6 Claude Code skills (`/scan`, `/pipeline`, `/evaluate`, `/cv-gen`, `/apply`, `/prep`) that work manually. This n8n workflow replaces the daily discovery + evaluation loop so it runs without Erik having to trigger it.

**Scope for V1:** Discovery + auto-evaluation + Slack notification. CV generation stays manual in Claude Code (Erik runs `/cv-gen` when he decides to apply).

**Scope explicitly excluded from V1:** CV PDF generation, cover letter generation, auto-apply. These stay in the Claude Code skills for human-in-loop.

---

## 1. Credentials (confirmed available in Erik's n8n instance)

All of these are already configured with credentials in n8n:

| Credential | Purpose |
|------------|---------|
| Apify API | Job board scrapers |
| Firecrawl API | Career page scraping |
| Airtable PAT | Job Pipeline table writes |
| Anthropic API | Claude evaluation calls |
| Slack Bot | Daily summary notifications |

**No new credentials needed.** If the bot token for Slack isn't set up with the new `Career-Ops` app, add it:
- Slack Bot token prefix: `xoxb-`
- Bot name: `Career-Ops`
- Must be invited to channel `C0ATH006BLP` in the Agentic workspace

---

## 2. Workflow Architecture

```
[Schedule Trigger: Daily 09:00 PT]
         ↓
[Node 1: Apify LinkedIn scraper (run-sync-get-dataset-items)]
         ↓
[Node 2: Apify Indeed scraper]
         ↓
[Node 3: Apify Glassdoor scraper]
         ↓
[Node 4: Apify Wellfound scraper]
         ↓
[Node 5: Firecrawl Built In search page]
         ↓
[Node 6: Loop -- Firecrawl 17 target career pages]
         ↓
[Node 7: Merge all source results]
         ↓
[Node 8: Normalize (strip URL query params, lowercase)]
         ↓
[Node 9: Airtable list_records -- get all existing URLs]
         ↓
[Node 10: Filter -- keep only NEW URLs]
         ↓
[Node 11: Filter -- title matches "GTM Engineer" variants]
         ↓
[Node 12: Loop -- for each new job]
         ↓
   [Node 12a: Claude API POST /v1/messages for evaluation]
         ↓
   [Node 12b: Parse JSON score]
         ↓
   [Node 12c: Airtable create_record with score+status]
         ↓
[Node 13: Aggregate -- count discoveries, count 4.0+ roles]
         ↓
[Node 14: Slack chat.postMessage with summary]
```

---

## 3. Node Specifications

### Node 0: Schedule Trigger

- **Type:** `n8n-nodes-base.scheduleTrigger`
- **Rule:** Cron
- **Expression:** `0 9 * * *`
- **Timezone:** `America/Los_Angeles` (set on workflow settings, not per-node)

---

### Node 1: Apify LinkedIn Scraper

- **Type:** `n8n-nodes-base.httpRequest`
- **Method:** POST
- **URL:** `https://api.apify.com/v2/acts/valig~linkedin-jobs-scraper/run-sync-get-dataset-items`
- **Query params:** `token={{$credentials.apify.token}}`
- **Body (JSON):**
  ```json
  {
    "title": "GTM Engineer",
    "location": "United States",
    "datePosted": "r604800",
    "remote": ["2", "3"],
    "contractType": ["F"],
    "experienceLevel": ["3", "4"],
    "limit": 25
  }
  ```
- **Response format:** JSON array of job objects with fields: `id, url, title, location, postedDate, companyName, salary, description, applyType, applyUrl`
- **Output transformation:** Add field `source: "LinkedIn"` to each item

**Verified working:** this exact actor + input returned 20 items in CC-GTM-portfolio testing on 2026-04-19.

---

### Node 2: Apify Indeed Scraper

- **Actor:** Search `search-actors` for "indeed jobs scraper" and pick the highest-rated current actor. Suggested fallback: `misceres/indeed-scraper` or `epctex/indeed-scraper`.
- **Same pattern as Node 1** -- POST to `run-sync-get-dataset-items`
- **Input:** `{"query": "GTM Engineer", "location": "United States", "limit": 25, "maxDaysOld": 7}`
- **Output field mapping:** Actor outputs vary -- normalize to `{title, companyName, url, location, description, postedDate}`
- **Set `source: "Indeed"`**

---

### Node 3: Apify Glassdoor Scraper

- **Actor:** `bebity/glassdoor-jobs-scraper` (verified in Apify Store)
- **Input:** `{"searchKeyword": "GTM Engineer", "searchLocation": "United States", "maxItems": 25}`
- **Normalize to same output shape as Node 1**
- **Set `source: "Glassdoor"`**

---

### Node 4: Apify Wellfound Scraper

- **Actor:** Search Apify for a current Wellfound actor. If none reliable, **skip this node in V1** and fall through with empty array.
- **Input:** `{"query": "GTM Engineer", "location": "Remote", "limit": 25}`
- **Set `source: "Wellfound"`**

---

### Node 5: Firecrawl Built In

- **Type:** `n8n-nodes-base.httpRequest`
- **Method:** POST
- **URL:** `https://api.firecrawl.dev/v1/scrape`
- **Headers:** `Authorization: Bearer {{$credentials.firecrawl.apiKey}}`
- **Body:**
  ```json
  {
    "url": "https://builtin.com/jobs/remote?search=GTM+Engineer&country=USA",
    "formats": ["markdown", "links"]
  }
  ```
- **Post-processing:** Extract job cards from markdown. Use regex or a Code node:
  ```javascript
  const markdown = $input.first().json.data.markdown;
  const links = $input.first().json.data.links || [];
  const jobLinks = links.filter(l => l.includes('/job/'));
  return jobLinks.map(url => ({
    url,
    source: "Built In",
    // title + companyName need secondary scrape or regex from markdown context
  }));
  ```
- **Note:** Built In's markdown structure may require iteration. If extraction is unreliable, skip in V1.

---

### Node 6: Loop Firecrawl for 17 Target Career Pages

- **Type:** SplitInBatches or custom loop over this array:

```json
[
  {"name": "Clay", "careers_url": "https://www.clay.com/careers", "keywords": ["GTM", "engineering", "growth", "sales", "data"]},
  {"name": "Apollo.io", "careers_url": "https://www.apollo.io/careers", "keywords": ["GTM", "engineer", "automation", "growth", "sales"]},
  {"name": "Instantly", "careers_url": "https://instantly.ai/careers", "keywords": ["GTM", "engineer", "automation", "outbound", "growth"]},
  {"name": "Outreach", "careers_url": "https://www.outreach.io/company/working-at-outreach", "keywords": ["GTM", "engineer", "automation", "sales", "RevOps"]},
  {"name": "Gong", "careers_url": "https://www.gong.io/careers", "keywords": ["GTM", "engineer", "revenue", "sales", "automation"]},
  {"name": "Anthropic", "careers_url": "https://www.anthropic.com/careers", "keywords": ["solutions", "applied", "GTM", "product", "growth"]},
  {"name": "OpenAI", "careers_url": "https://openai.com/careers", "keywords": ["solutions", "applied", "GTM", "growth", "sales"]},
  {"name": "Ramp", "careers_url": "https://ramp.com/careers", "keywords": ["GTM", "engineer", "growth", "RevOps", "automation"]},
  {"name": "Rippling", "careers_url": "https://www.rippling.com/careers", "keywords": ["GTM", "engineer", "RevOps", "growth", "automation"]},
  {"name": "Attio", "careers_url": "https://attio.com/careers", "keywords": ["GTM", "solutions", "engineer", "CRM", "automation"]},
  {"name": "Wiz", "careers_url": "https://www.wiz.io/careers", "keywords": ["GTM", "systems", "engineer", "RevOps", "sales"]},
  {"name": "Clari", "careers_url": "https://www.clari.com/careers", "keywords": ["GTM", "RevOps", "engineer", "revenue", "automation"]},
  {"name": "6sense", "careers_url": "https://6sense.com/company/careers", "keywords": ["GTM", "engineer", "ABM", "RevOps", "automation"]},
  {"name": "ZoomInfo", "careers_url": "https://www.zoominfo.com/about/careers", "keywords": ["GTM", "engineer", "RevOps", "data", "automation"]},
  {"name": "Salesloft", "careers_url": "https://www.salesloft.com/company/careers", "keywords": ["GTM", "engineer", "RevOps", "automation", "sales"]},
  {"name": "Braze", "careers_url": "https://www.braze.com/company/careers", "keywords": ["GTM", "engineer", "growth", "automation", "marketing"]},
  {"name": "HubSpot", "careers_url": "https://www.hubspot.com/careers", "keywords": ["GTM", "engineer", "RevOps", "automation", "growth"]}
]
```

- For each: Firecrawl `scrape` the `careers_url`
- Extract job listings containing "GTM Engineer" in title (case-insensitive)
- Set `source: "Career Page"`, `companyName: {name from array}`

**Error handling:** If Firecrawl 403s or times out, log failure and continue to next company. Don't stop the workflow.

---

### Node 7: Merge All Sources

- **Type:** `n8n-nodes-base.merge` with mode "Combine" / "Append"
- Input: outputs from Nodes 1-6
- Output: single flat array of jobs with unified shape:
  ```typescript
  {
    title: string,
    companyName: string,
    url: string,
    location: string,
    description: string, // may be empty for career-page finds -- fetch in Node 12
    postedDate: string,
    salary: string | null,
    source: "LinkedIn" | "Indeed" | "Glassdoor" | "Wellfound" | "Built In" | "Career Page"
  }
  ```

---

### Node 8: Normalize URLs

- **Type:** Code node (JavaScript)
  ```javascript
  return $input.all().map(item => {
    const url = new URL(item.json.url);
    url.search = ''; // strip query params
    url.hash = '';
    return {
      ...item.json,
      normalizedUrl: url.toString().toLowerCase(),
      normalizedCompanyRole: `${item.json.companyName.trim().toLowerCase()}|${item.json.title.trim().toLowerCase()}`
    };
  }).map(json => ({ json }));
  ```

---

### Node 9: Airtable List Existing URLs

- **Type:** Airtable node, `list_records`
- **Base ID:** `appP3XYuyhYRTmEDv`
- **Table:** `Job Pipeline` (ID: `tblRswSXb3uJQy371`)
- **Fields:** Only return `URL` and `Date` fields to minimize payload
- **Max records:** all (pagination if >100)

---

### Node 10: Filter New URLs Only

- **Type:** Code node
  ```javascript
  const scraped = $('Node 8').all();
  const existing = $('Node 9').all().map(i => i.json.URL?.toLowerCase().trim()).filter(Boolean);
  const existingSet = new Set(existing);

  return scraped
    .filter(item => !existingSet.has(item.json.normalizedUrl))
    .map(item => ({ json: item.json }));
  ```

---

### Node 11: Filter Title Matches

- **Type:** Filter node (or Code node)
- Keep items where `title` matches `/gtm\s*engineer/i` OR `/go[-\s]?to[-\s]?market\s*engineer/i`
- Drop: "Demand Generation Engineer", "Sales Engineer" without GTM modifier, "Solutions Engineer" without GTM modifier, "Systems Engineer" without GTM

---

### Node 12: Loop Over New Jobs for Evaluation

For each new job, run Nodes 12a-12c sequentially:

#### 12a: Fetch JD if missing

If `description` is empty (common for career-page finds), use Firecrawl to scrape the `url` and extract JD text. Otherwise, skip.

#### 12b: Claude API Evaluation

- **Type:** `n8n-nodes-base.httpRequest`
- **Method:** POST
- **URL:** `https://api.anthropic.com/v1/messages`
- **Headers:**
  - `x-api-key: {{$credentials.anthropic.apiKey}}`
  - `anthropic-version: 2023-06-01`
  - `content-type: application/json`
- **Body:**
  ```json
  {
    "model": "claude-sonnet-4-6",
    "max_tokens": 2000,
    "system": [
      {
        "type": "text",
        "text": "<SYSTEM_PROMPT_A_SEE_SECTION_4>",
        "cache_control": {"type": "ephemeral"}
      }
    ],
    "messages": [
      {
        "role": "user",
        "content": "Evaluate this job for Erik. Return ONLY valid JSON matching the schema in the system prompt. No prose.\n\nJOB DESCRIPTION:\n{{$json.description}}\n\nMETADATA:\nCompany: {{$json.companyName}}\nTitle: {{$json.title}}\nLocation: {{$json.location}}\nSalary: {{$json.salary || 'not disclosed'}}\nURL: {{$json.url}}"
      }
    ]
  }
  ```

**Prompt caching:** the system prompt is cached for 5 minutes. Batch evaluations should run within that window to cut costs ~90%.

#### 12c: Parse + Write to Airtable

Parse `response.content[0].text` as JSON. Shape:

```json
{
  "scores": {
    "cv_match": 4.5,
    "north_star": 4.8,
    "compensation": 4.0,
    "culture": 4.7,
    "red_flags": 4.2,
    "growth": 4.8
  },
  "weighted_average": 4.52,
  "archetype": "gtm-engineer",
  "recommendation": "Apply now",
  "eval_summary": "2-sentence why this role scored where it did"
}
```

Write to Airtable `Job Pipeline` table:
- `Company`: from scraper
- `Role`: from scraper title
- `URL`: from scraper url
- `Score`: `weighted_average`
- `Status`: `"Evaluated"`
- `Archetype`: from response
- `Source`: from scraper source
- `Date`: today ISO YYYY-MM-DD
- `Eval Summary`: from response
- `Notes`: empty

---

### Node 13: Aggregate for Summary

- **Type:** Code node
  ```javascript
  const evaluated = $('Node 12').all();
  const all = evaluated.map(i => i.json);
  const applyNow = all.filter(j => j.weighted_average >= 4.5);
  const strong = all.filter(j => j.weighted_average >= 4.0 && j.weighted_average < 4.5);
  return [{ json: {
    total: all.length,
    applyNow: applyNow.length,
    strong: strong.length,
    highScorers: [...applyNow, ...strong]
  }}];
  ```

---

### Node 14: Slack Notification

- **Type:** Slack node (or HTTP Request to Slack API)
- **Method:** `chat.postMessage`
- **Bot token:** `{{$credentials.slack.botToken}}` -- **reference via n8n Slack credential**; do NOT commit the raw token to git. The actual token lives in Erik's n8n credentials store (already configured in the `Career-Ops` Slack app).
- **Channel:** `C0ATH006BLP`
- **Message (blocks or plain text):**
  ```
  *Career-Ops Daily Scan -- {{date}}*

  Discovered: {{total}} new GTM Engineer roles
  • Apply now (4.5+): {{applyNow}}
  • Strong (4.0-4.4): {{strong}}

  Top matches:
  {{#each highScorers}}
  • *{{companyName}}* -- {{title}} -- {{weighted_average}} -- <{{url}}|view>
  {{/each}}

  Airtable: https://airtable.com/appP3XYuyhYRTmEDv/tblRswSXb3uJQy371
  ```

If `total == 0`: post "No new GTM Engineer roles today."

---

## 4. The Claude Evaluation System Prompt

Paste this verbatim into Node 12b's `system` block:

```
You are evaluating a job opportunity for Erik Hernal using his career-ops scoring rubric.

# Erik's Profile

Name: Erik Hernal
Location: Los Angeles, CA (America/Los_Angeles timezone)
Remote preferred. No relocation.

Target roles (primary first):
1. GTM Engineer
2. AI Solutions Architect
3. AI/GTM Consultant
4. AI Transformation Lead
5. AI Product Manager (secondary)
6. AI Forward Deployed Engineer (secondary)

Exit story: Built the GTM automation playbook independently across agency clients for 3 years. Ready to apply it at scale inside a company with a real team, real resources, and bigger problems worth solving.

Superpowers:
- Built outbound systems replacing SDR headcount with automation
- Clay Top 1% -- 5M+ contacts enriched
- 200+ campaigns audited across 3 years as Head of Growth
- Full-stack GTM: cold email, LinkedIn, n8n, Clay, CRM design

Proof points:
- 200+ campaigns audited @ Cleverly (2020-2023)
- Clay Top 1% (5M+ contacts)
- PM at Honey pre-$4B PayPal acquisition (2018-2019)
- Founded Lumos GTM engineering agency (current)

Compensation: $150,000 USD hard minimum. No upper ceiling. Open to equity.

Experience:
- GTM Engineer @ Hey Agentic (2023-Present): Clay, n8n, cold email, LinkedIn automation, CRM integrations
- Founder @ Lumos (2023-Present): GTM engineering agency
- Head of Growth @ Cleverly (2020-2023): 200+ campaign audits, Clay mastery
- PM @ Medely (2019-2020): Healthcare staffing platform
- PM @ Honey (2018-2019): Pre-$4B PayPal acquisition
- PM @ GrowthPhysics (2018): Early-career growth PM

Core skills: Clay, n8n, Instantly, HeyReach, Sales Navigator, PhantomBuster, Airtable, Salesforce (working), HubSpot (working), cold email deliverability, LinkedIn automation, data enrichment waterfalls, Claude/Cursor AI-assisted dev, product management.

Education: Syracuse University, B.S. Health and Exercise Science, 2018.

# Scoring Rubric (6 weighted dimensions)

Score each dimension 1.0-5.0 with one decimal place.

| Dimension | Weight | What It Measures |
|-----------|--------|-----------------|
| cv_match | 25% | How well Erik's skills and experience align with JD requirements |
| north_star | 20% | How well the role fits Erik's target archetype and career direction |
| compensation | 20% | Salary range match. Below $150K floor = max 2.0. Not disclosed = 3.8 default. |
| culture | 15% | Remote policy, team size, growth stage, values alignment. LA-compatible remote = high, required onsite elsewhere = low. |
| red_flags | 10% | Blockers: location mismatch, agency-hamster-wheel (conflicts with exit story), unrealistic requirements, backend-dev-role mislabeled as GTM |
| growth | 10% | Career trajectory fit, learning opportunity, title progression |

Weighted average = sum(score * weight).

# Archetypes

Detect which best fits based on JD signals:
- gtm-engineer: automation, outbound, pipeline, RevOps, Clay, n8n, Salesforce
- ai-gtm-consultant: strategy, consulting, advisory, transformation
- ai-solutions-architect: systems design, enterprise, platform integration
- ai-transformation-lead: change management, adoption, enablement
- ai-product-manager: roadmap, discovery, product strategy
- ai-forward-deployed: field delivery, prototyping, client-facing engineering

# Recommendation Thresholds

- 4.5+: "Apply now"
- 4.0-4.4: "Strong -- worth applying"
- 3.5-3.9: "Only with a specific reason"
- Below 3.5: "Skip"

# Ethical Calibration

- Never inflate scores to create more matches. Be honest.
- Roles explicitly labeled "GTM Engineer" but that actually want a backend dev (TypeScript/Node production code, Supabase full-stack) score low on cv_match and red_flags -- Erik is not a backend engineer.
- Agency client-delivery roles (like 2X) conflict with Erik's exit story -- penalize north_star and red_flags.
- LinkedIn job titles lie. Read the JD carefully, not just the title.

# Output Format

Return ONLY valid JSON matching this schema. No prose, no markdown, no explanation:

{
  "scores": {
    "cv_match": number,
    "north_star": number,
    "compensation": number,
    "culture": number,
    "red_flags": number,
    "growth": number
  },
  "weighted_average": number,
  "archetype": "gtm-engineer" | "ai-gtm-consultant" | "ai-solutions-architect" | "ai-transformation-lead" | "ai-product-manager" | "ai-forward-deployed",
  "recommendation": "Apply now" | "Strong -- worth applying" | "Only with a specific reason" | "Skip",
  "eval_summary": "2-sentence string explaining the score"
}
```

---

## 5. Airtable Table Schema

**Base ID:** `appP3XYuyhYRTmEDv`
**Table ID:** `tblRswSXb3uJQy371`
**Table name:** `Job Pipeline`

| Field | Type | Notes |
|-------|------|-------|
| Company | singleLineText | |
| Role | singleLineText | |
| URL | url | Dedup key |
| Score | number (1 decimal) | Weighted average from evaluation |
| Status | singleSelect | Options: Inbox, Evaluated, CV Sent, Applied, Interview, Offer, Rejected, Withdrawn |
| Archetype | singleSelect | Options: gtm-engineer, ai-gtm-consultant, ai-solutions-architect, ai-transformation-lead, ai-product-manager, ai-forward-deployed |
| PDF | url | (used manually by /cv-gen skill, not by workflow) |
| Report | url | (used manually) |
| Date | date (ISO) | |
| Notes | multilineText | |
| Cover Letter | multilineText | (used manually) |
| Custom Q&A | multilineText | (used manually) |
| Source | singleSelect | Options: LinkedIn, Indeed, Glassdoor, Wellfound, Built In, Career Page, Referral, Other |
| Eval Summary | multilineText | Auto-written by workflow |

**Workflow writes:** Company, Role, URL, Score, Status (="Evaluated"), Archetype, Date, Source, Eval Summary
**Workflow does NOT touch:** PDF, Report, Cover Letter, Custom Q&A, Notes (those are for manual CV/apply skills)

---

## 6. Known Gotchas (from Open Brain memories)

### n8n validator vs n8n itself
- The MCP tool `n8n_update_partial_workflow` is stricter than n8n's own validator
- If it rejects "disconnected nodes" (terminal alert nodes without outputs), use n8n REST API directly via curl
- Reference: Open Brain memory "n8n API direct access bypasses MCP validator" (2026-02-22)

### Connection type phantom bug
- `addConnection` via MCP can create `"type": "0"` instead of `"type": "main"`
- Phantom dashed connections in UI that don't work
- Workaround: After any `addConnection` ops, do a GET+PUT cycle via n8n REST API to force proper serialization
- Reference: Open Brain memory "MCP addConnection creates phantom connections" (2026-03-16)

### Connection index rules
- Always `"type": "main"`, never numeric
- Valid indices: most nodes only 0, IF has 0 (true) and 1 (false), Switch has 0-N matching rules + fallback
- Never duplicate connections to same target/index
- Reference: Open Brain memory "n8n connection rules — preventing phantom connections"

### LinkedIn Apify scraper rate
- `valig/linkedin-jobs-scraper` at 99.6% success rate
- If it starts failing, fall back to `worldunboxer/rapid-linkedin-scraper` (free, 98.5% success)

### Firecrawl 403s on some career pages
- Anthropic, OpenAI, big enterprise sites may block scraper
- Log failures, continue; don't halt workflow
- Use `proxy: "stealth"` option in Firecrawl request if 403 rate is high

---

## 7. Testing Plan

### 7A. Unit tests (per node)

1. **Node 1 (LinkedIn):** Expect 10-25 items. Verify fields present.
2. **Node 2-4 (other scrapers):** Expect 0-25 items each (some sources may be empty).
3. **Node 5 (Built In):** Expect 5-20 job links if search returns results.
4. **Node 6 (career pages):** Expect 0-3 matches across 17 companies (GTM Engineer is niche).
5. **Node 9 (Airtable):** Should return all 13 rows already in the table from Phase 1 evaluation.
6. **Node 10 (dedup):** On first run, all scraped URLs should be new. On second run same day, zero new.
7. **Node 12b (Claude):** Response should be parseable JSON matching the schema. Test with a known JD (Snorkel AI) -- expect score ~4.59.

### 7B. Integration test

Run the full workflow manually. Verify:
- [ ] Slack posts a message to `C0ATH006BLP`
- [ ] Airtable has N new rows with Status="Evaluated"
- [ ] No duplicate URLs in Airtable
- [ ] All new rows have Score + Archetype + Eval Summary populated

### 7C. Calibration check

Hand-score 3 known jobs and compare to auto-scores:
- Snorkel AI "GTM Engineer" → expected 4.4-4.7 (actual from Phase 1: 4.59)
- 2X "GTM Engineer" → expected 3.2-3.5 (conflicts with exit story; actual: 3.33)
- OXOS Medical "GTM Engineer" → expected 2.6-3.0 (demand gen role mislabeled; actual: 2.83)

If auto-scores drift >0.5 from expected, the Claude prompt needs tuning.

---

## 8. Deployment Checklist

- [ ] Create workflow in Erik's n8n instance (`https://n8n-tlkm.onrender.com`)
- [ ] Name: `Career-Ops Daily Discovery`
- [ ] Connect all 5 credentials
- [ ] Set workflow timezone to `America/Los_Angeles`
- [ ] Run once manually (disable schedule trigger, use "Execute Workflow" button)
- [ ] Verify Slack message posts
- [ ] Verify Airtable rows created
- [ ] Verify no duplicates
- [ ] Enable schedule trigger
- [ ] Save final workflow ID and link in CC-GTM-portfolio/career-ops/automation/deployed-workflow.md

---

## 9. What Comes Next (not in V1 scope)

After V1 validates, future enhancements (NOT part of this handoff):
- **V2:** Auto-generate CV PDF + cover letter for 4.0+ scores (requires HTML-to-PDF service like DocRaptor or a Render function)
- **V3:** Customer Q&A auto-generation, uploaded to Airtable row
- **V4:** Response tracking workflow (parse email replies, update Status)

**Do not build V2+ in this handoff.** Focus on V1 correctness.

---

## 10. Questions to Resolve Before Building

1. Does Erik's n8n instance have a native Apify node installed, or only HTTP Request? (This spec assumes HTTP Request universally.)
2. Are there existing `Career-Ops` or similar workflows that should be deactivated/archived to avoid conflicts?
3. Should the Claude API model be Sonnet 4.6 (cheaper) or Opus 4.7 (smarter)? Default is Sonnet for cost.

---

## Reference

- Source repo: `/Users/erikhernal/CC-GTM-portfolio`
- Original skills: `/Users/erikhernal/CC-GTM-portfolio/.claude/skills/{scan,pipeline,evaluate,cv-gen,apply,prep}`
- Config source: `career-ops/config/{profile.yml, shared.md, targets.yml}`
- Phase 1 evaluations (for calibration): `career-ops/reports/001-013-*.md`
