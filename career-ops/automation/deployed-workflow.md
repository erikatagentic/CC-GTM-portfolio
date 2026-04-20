# Career-Ops Daily Discovery — Deployed Workflow

**Date deployed:** 2026-04-20
**n8n instance:** https://n8n-tlkm.onrender.com
**Workflow ID:** `zY89dVddfvtMPEri`
**Editor URL:** https://n8n-tlkm.onrender.com/workflow/zY89dVddfvtMPEri
**Executions URL:** https://n8n-tlkm.onrender.com/workflow/zY89dVddfvtMPEri/executions
**Status:** Deployed INACTIVE (schedule not yet running). Erik activates manually.
**Repo export:** `CC-n8n-builder/workflows/active/career-ops-daily-discovery.json`

## What it does

Runs daily at 09:00 America/Los_Angeles:

1. Scrapes 4 sources in parallel:
   - Apify `valig~linkedin-jobs-scraper` (25 results)
   - Apify `misceres~indeed-scraper` (25 results)
   - Apify `bebity~glassdoor-jobs-scraper` (25 results)
   - Firecrawl against 17 company career pages (Clay, Apollo, Anthropic, Ramp, etc.) — per-item HTTP iteration
2. Normalizes each source into a unified `{title, companyName, url, location, description, postedDate, salary, source}` shape
3. Merges all sources → strips URL query params + lowercases
4. Dedups against existing URLs in Airtable `Job Pipeline` (`appP3XYuyhYRTmEDv/tblRswSXb3uJQy371`)
5. Filters to actual "GTM Engineer" titles (regex: `gtm\s*engineer` OR `go[-\s]?to[-\s]?market\s*engineer`)
6. For each new role: sends to Claude Sonnet 4.6 with the career-ops scoring rubric (prompt-cached `ephemeral`)
7. Parses the JSON response (scores, weighted_average, archetype, recommendation, eval_summary)
8. Writes an Airtable row with `Status=Evaluated`, `Date`, `Source`, all scoring fields
9. After the loop, aggregates totals (applyNow / strong / total) and posts a Slack summary to channel `C0ATH006BLP`

## V1 scope boundaries

**Included:** discovery + auto-evaluation + Airtable write + Slack summary.
**Excluded (manual via `/cv-gen`, `/apply`):** CV PDF generation, cover-letter generation, custom Q&A, application submission.

## Spec trims (both explicitly permitted by the spec)

- **Wellfound scraper** skipped — no reliable Apify actor found. Spec §4: "If none reliable, skip this node in V1."
- **Built In Firecrawl search** skipped — markdown extraction too brittle. Spec §5: "If extraction is unreliable, skip in V1."

## Validation status

- Pre-deploy compound validation: PASSED (23 warnings, 0 errors; warnings are stylistic — typeVersion upgrades available, `continueOnFail` deprecated in favor of `onError`).
- Calibration gate (§7C) on Claude Sonnet 4.6: **PASS**
  | Company | Phase-1 | Auto | Drift | Direction |
  |---|---|---|---|---|
  | Snorkel AI GTM Engineer | 4.59 | 4.16 | 0.43 | Strong (correct) |
  | 2X GTM Engineer | 3.33 | 2.84 | 0.49 | Skip (correct — agency penalty) |
  | OXOS Medical GTM Engineer | 2.83 | 2.84 | 0.01 | Skip (correct — demand-gen mislabel) |
  All within the 0.5 drift tolerance. No prompt tuning required.
- Apify LinkedIn scraper smoke test (token valid, endpoint returns jobs): PASS
- Firecrawl smoke test on Clay careers (token valid, scrape returns markdown + links): PASS

## Pending

- **Integration test (§7B)**: Erik runs "Execute Workflow" in the n8n UI once with schedule disabled, verifies:
  - Slack message lands in `C0ATH006BLP`
  - New Airtable rows created with `Status=Evaluated`, non-null Score/Archetype/Eval Summary
  - No duplicate URLs
  - Second run same day = zero new rows (dedup works)
- **Activation**: Erik toggles the workflow active via the n8n UI after integration test passes.

## Credentials used

| Purpose | Credential | ID | Notes |
|---|---|---|---|
| Airtable (Job Pipeline) | `Agentic` | `BFjBY9HrE33xf76h` | existing |
| Slack (post to `C0ATH006BLP`) | `Agentic - Bot` | `JIUv4g1uIYVcNUrl` | existing; Erik confirmed bot invited |
| Apify (3 actors) | hardcoded header | — | private repo, OK per decision |
| Firecrawl | hardcoded header | — | same |
| Anthropic | hardcoded header | — | same |

## Node inventory (20 nodes)

`Schedule 9am PT` → [LinkedIn+Normalize, Indeed+Normalize, Glassdoor+Normalize, Career Pages Array → Firecrawl → Extract GTM Engineer Links] → `Merge All Sources` (4 inputs, append) → `Normalize URLs` → `Get Existing URLs (Airtable)` → `Filter New URLs` → `Filter GTM Engineer Title` → `Claude Evaluate` → `Parse Claude Response` → `Create Airtable Row` → `Aggregate Summary` → `Slack Daily Summary`

## Known caveats

- Career Page Firecrawl step relies on regex-based markdown extraction for "GTM Engineer" mentions. If a company uses a SPA careers page that hides jobs behind JS, Firecrawl may return empty markdown; those companies will silently yield 0 results that day. Monitor Slack volume; if career-page contributions are always 0, revisit extraction strategy.
- `continueOnFail: true` is set on all HTTP nodes — if Apify or Firecrawl errors transiently, the workflow keeps going with partial data. Errors are visible in the n8n Executions view.
- Prompt caching: system prompt is cached `ephemeral` (5-min TTL). N evaluations per daily run finish well within 5 min → ~90% token savings after the first call.

## V2+ (out of scope)

Per spec §9, future enhancements NOT in this workflow:
- Auto-generate CV PDF + cover letter for 4.0+ scores (HTML→PDF service)
- Custom Q&A generation
- Response tracking (email parsing, status updates)
