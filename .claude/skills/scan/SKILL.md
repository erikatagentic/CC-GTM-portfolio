# Scan for Jobs (Multi-Source)

Discover new GTM Engineer jobs across LinkedIn, Indeed, Glassdoor, Wellfound, Built In, and 17 target company career pages. Dedup against Airtable. Append new finds to the pipeline inbox.

## Trigger

User says "scan for jobs", "check career pages", "run a scan", or "/scan."

## Instructions

### Step 1: Load Context (mandatory)

Read these files:
1. `career-ops/config/targets.yml` -- companies and career page URLs
2. `career-ops/config/profile.yml` -- target roles, keywords, comp min
3. `career-ops/data/pipeline.md` -- existing pipeline (local dedup)

Then query the Airtable Job Pipeline table (`appP3XYuyhYRTmEDv` / `tblRswSXb3uJQy371`) via `mcp__airtable__list_records` to get all URLs already tracked (primary dedup source).

### Step 2: Scan All Sources

**Query:** always use `"GTM Engineer"` (exact phrase). No secondary queries.

#### 2A. LinkedIn via Apify

Call `mcp__apify__call-actor` with:
- Actor: `valig/linkedin-jobs-scraper`
- Input: `{"title": "GTM Engineer", "location": "United States", "datePosted": "r604800", "remote": ["2", "3"], "contractType": ["F"], "experienceLevel": ["3", "4"], "limit": 25}`

Then `mcp__apify__get-actor-output` with fields: `title,companyName,url,location,salary,description` to retrieve results.

#### 2B. Indeed via Apify

Call `mcp__apify__search-actors` with query "indeed jobs" to find the current best Indeed actor (actor names change). Use it with query "GTM Engineer" + US + remote filter + last 7 days.

#### 2C. Glassdoor via Apify

Similar: search for glassdoor-jobs-scraper, run with GTM Engineer query.

#### 2D. Wellfound via Apify

Similar: search for wellfound or angellist-jobs actor.

#### 2E. Built In via Firecrawl

Call `mcp__firecrawl__firecrawl_scrape` on `https://builtin.com/jobs/remote/search?search=GTM+Engineer` (or similar search URL). Extract job listings from the markdown.

#### 2F. Target Company Career Pages

For each company in `targets.yml`, call `mcp__firecrawl__firecrawl_scrape` on the `careers_url`. Look for job listings matching "GTM Engineer" keyword.

### Step 3: Normalize & Dedup

For each candidate result:
1. Normalize URL: strip query params, lowercase host
2. Check against Airtable URLs (primary) -- skip if already present
3. Check `pipeline.md` (local cache) -- skip if already listed
4. Check by normalized (company, role) pair within last 30 days -- skip cross-posts
5. Filter for "GTM Engineer" or close variants ("Go-to-Market Engineer", "GTM Engineering") in the title

### Step 4: Write New Finds

For each surviving candidate:
1. Append to `career-ops/data/pipeline.md` Inbox section:
   ```markdown
   - [ ] [{Company} -- {Role}]({URL})
   ```
2. Create Airtable row via `mcp__airtable__batch_create_records`:
   ```json
   {
     "Company": "...", "Role": "...", "URL": "...",
     "Status": "Inbox", "Source": "LinkedIn|Indeed|...",
     "Date": "YYYY-MM-DD", "Notes": "Discovered via /scan"
   }
   ```

### Step 5: Report

```
## Scan Results -- {date}

Sources scanned: {N}
Total results: {N}
After dedup: {N}
New finds added to pipeline: {N}

| Source | Company | Role | URL |
|--------|---------|------|-----|
| LinkedIn | ... | ... | ... |
| Built In | ... | ... | ... |

Added {N} rows to Airtable Job Pipeline with Status=Inbox.
```

## Rules

- **Only "GTM Engineer" queries** -- no "Revenue Operations", "Solutions Engineer", "Sales Automation". Those variants create noise.
- **US + remote/hybrid only** unless Erik is open to onsite (he's not, per profile.yml).
- **Skip below-min-comp jobs early** -- if a result has disclosed salary and the ceiling is below Erik's `target_min` ($150K), skip it at the source and don't even add to inbox.
- **Max 25 results per source per run** to keep costs bounded.
- **Airtable is the source of truth for dedup.** Pipeline.md is a local convenience file.
- **Skip career pages that 403 or timeout.** Note the failure in the report.
- **Don't evaluate during scan.** That's `/pipeline`'s job.
