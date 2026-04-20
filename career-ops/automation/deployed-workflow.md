# Career-Ops Automation — Deployed Workflows

**Last updated:** 2026-04-20 (V2 shipped)
**n8n instance:** https://n8n-tlkm.onrender.com
**Slack channel:** `C0ATH006BLP`
**Airtable base:** `appP3XYuyhYRTmEDv` / table `Job Pipeline` (`tblRswSXb3uJQy371`)

Three active workflows form the Career-Ops automation stack.

## 1. Career-Ops Daily Discovery

- **Workflow ID:** `zY89dVddfvtMPEri`
- **Editor:** https://n8n-tlkm.onrender.com/workflow/zY89dVddfvtMPEri
- **Schedule:** 09:00 PT daily (cron `0 9 * * *`)
- **Webhook (manual trigger):** `https://n8n-tlkm.onrender.com/webhook/career-ops-run-now`
- **Node count:** 25
- **Status:** ACTIVE
- **Repo export:** [career-ops-daily-discovery.json](../../../CC-n8n-builder/workflows/active/career-ops-daily-discovery.json)

### Pipeline (V2)

```
Schedule 09:00 PT / Webhook ─► [LinkedIn / Indeed / Glassdoor Apify scrapers in parallel]
                                └─► [17 career pages via Firecrawl, strict URL filter]
                                                                │
                            Merge All Sources ─► Normalize URLs ─► Get Existing URLs (Airtable)
                                                                │
                            Filter New URLs (dedup + GTM variants regex + heartbeat sentinel)
                                                                │
                            Has New Items? ─┬─ TRUE  ─► Cap to First 50 ─► Claude Evaluate (sonnet-4-5, prompt-cache)
                                             │                                        │
                                             │                                Parse Claude Response
                                             │                                        │
                                             │                                Score ≥ 4.0? ─┬─ TRUE  ─► Q&A + Enrich (Claude + web_search_20250305)
                                             │                                               │                          │
                                             │                                               │                   Parse Q&A + Enrich
                                             │                                               │                          │
                                             │                                               └─ FALSE ────────────┐      │
                                             │                                                                    ▼      ▼
                                             │                                                              Create Airtable Row
                                             │                                                                     │
                                             └─ FALSE (heartbeat sentinel) ────────────────────────────────────► Aggregate Summary ─► Slack Daily Summary
```

### What it writes to Airtable

For every evaluated role:
- Company, Role, URL, Score, Status="Evaluated", Archetype, Source, Date, Eval Summary

For 4.0+ scoring roles (Apply now + Strong), additionally:
- **Custom Q&A** (Track E) — 6 tailored application Q&A pairs, human-readable markdown
- **Funding Stage** (Track H) — from web_search
- **Headcount** (Track H)
- **Glassdoor Rating** (Track H)

### V2 additions
- Score ≥ 4.0 branch with Q&A drafting + company enrichment via `web_search_20250305` tool (~$0.10-0.15 per 4.0+ role)
- Q&A follows anti-AI writing rules enforced in the prompt (banned words, contractions, specificity)
- Enrichment uses Claude's server-side web_search (3-5 searches per company)

## 2. Career-Ops Housekeeping

- **Workflow ID:** `FTBSDtNsneW51je2`
- **Editor:** https://n8n-tlkm.onrender.com/workflow/FTBSDtNsneW51je2
- **Schedule:** 10:00 PT daily (cron `0 10 * * *`, 1h after Daily Discovery)
- **Webhook:** `https://n8n-tlkm.onrender.com/webhook/career-ops-housekeeping`
- **Node count:** 7
- **Status:** ACTIVE
- **Repo export:** [career-ops-housekeeping.json](../../../CC-n8n-builder/workflows/active/career-ops-housekeeping.json)

### Pipeline

```
Schedule 10:00 PT / Webhook ─► Get Nudge Queue (Status=CV Sent AND age>14d)
                              ─► Get Stale Queue (Status=Evaluated AND age>30d)
                              ─► Mark Expired (Airtable update, Status→Expired)
                              ─► Format Digest (combines both + heartbeat on empty)
                              ─► Slack Housekeeping Digest
```

### Tracks

- **Track C — Follow-up nudges:** posts a Slack digest listing CV-Sent rows older than 14 days so Erik can nudge follow-ups.
- **Track D — Stale-row pruning:** sets Status=Expired on Evaluated rows older than 30 days to keep the board readable. First run auto-creates the `Expired` Status option via Airtable typecast.
- **Heartbeat:** when both queues are empty, posts "All clean today. (heartbeat — workflow is healthy)" so Erik always knows the workflow ran.

## 3. Career-Ops Weekly Digest

- **Workflow ID:** `lni0ahmsMz9eRIkK`
- **Editor:** https://n8n-tlkm.onrender.com/workflow/lni0ahmsMz9eRIkK
- **Schedule:** Friday 16:00 PT (cron `0 16 * * 5`)
- **Webhook:** `https://n8n-tlkm.onrender.com/webhook/career-ops-weekly-digest`
- **Node count:** 5
- **Status:** ACTIVE
- **Repo export:** [career-ops-weekly-digest.json](../../../CC-n8n-builder/workflows/active/career-ops-weekly-digest.json)

### Pipeline

```
Schedule Fri 16:00 PT / Webhook ─► Get Week's Rows (age≤7d)
                                 ─► Compute Metrics (by Status, Source, Archetype; avg score; top 5)
                                 ─► Slack Weekly Digest
```

### Track G — Weekly digest metrics

Slack output includes: total rows, avg score, breakdown by Status / Source / Archetype, and top 5 by Score. Heartbeat message if no activity.

## Airtable schema (V2 additions)

Added to `tblRswSXb3uJQy371`:

| Field | Type | Purpose |
|---|---|---|
| `Funding Stage` | singleSelect (Bootstrapped → Acquired + Unknown) | Track H |
| `Headcount` | number (integer) | Track H |
| `Glassdoor Rating` | number (1 decimal) | Track H |
| `Expired` option on Status | singleSelect | Track D |

## Credentials

All three workflows reuse existing credentials — no new ones needed:

| Credential | ID | Used by |
|---|---|---|
| Airtable — `Agentic` | `BFjBY9HrE33xf76h` | All 3 workflows |
| Slack — `Agentic - Bot` | `JIUv4g1uIYVcNUrl` | All 3 workflows |
| Apify, Firecrawl, Anthropic | hardcoded in Daily Discovery node parameters | Daily Discovery only |

## Validation status (V2 shipped 2026-04-20)

- Pre-deploy `validate_workflow()`: all 3 pass with 0 errors (Daily Discovery has 43 stylistic warnings — typeVersion updates + continueOnFail deprecation, non-blocking).
- Daily Discovery end-to-end: exec 7664 verified the Score≥4.0 branch end-to-end with Harmonic Security (4.5, Series A, 75 headcount, full Q&A markdown in Airtable). Prompt caching activates (`cache_read_input_tokens: 15765` per enrichment call).
- Housekeeping end-to-end: exec 7654 heartbeat verified — Slack posted "All clean today. (heartbeat — workflow is healthy)".
- Weekly Digest end-to-end: exec 7658 — 32 rows aggregated, top 5 posted with scores + links.

## V2 decisions (Erik picked)

- **Track E Q&A format:** human-readable Q/A markdown (`## Q1: ...\n{answer}\n\n## Q2: ...`).
- **Track H enrichment source:** Claude with server-side `web_search_20250305` tool (3-5 searches per 4.0+ role). Avg cost ~$0.15 per enrichment.
- **Score threshold for Q&A + enrichment:** 4.0 (covers both Apply Now and Strong bands). Can raise to 4.5 by editing the `Score >= 4.0?` IF node.
- **Schedule times:** Daily Discovery 09:00 PT, Housekeeping 10:00 PT (1h after), Weekly Digest Friday 16:00 PT.

## Deferred tracks

Not shipped in V2; revisit after 2+ weeks of production data:
- **A** — Auto-CV PDF + cover letter generation for 4.5+ roles (needs HTML→PDF service)
- **B** — Gmail response tracking → Airtable Status updates
- **F** — Smart re-scoring when profile.yml changes

## How Erik uses this

1. **Morning check (09:10 PT):** Slack post arrives in `#career-ops`. If scores ≥4.5 appear, click through to Airtable. Q&A draft is already there for the apply flow. Funding Stage + Headcount + Glassdoor visible as apply/skip signal.
2. **Housekeeping post (10:05 PT):** read nudge list, ping recruiters on roles aged >14d. Expired rows auto-cleaned.
3. **Friday afternoon (16:05 PT):** week digest summarizes throughput and top roles.
4. **Manual `/apply` + `/cv-gen` in Claude Code:** Erik runs these when ready to apply to a specific row. Custom Q&A field is already populated; copy-paste into the form.
