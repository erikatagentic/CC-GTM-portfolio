# Scan Career Pages

Check target company career pages for new job openings that match Erik's profile.

## Trigger

User says "scan for jobs", "check career pages", or "run a scan."

## Instructions

### Step 1: Load Context (mandatory)

Read these files:
1. `career-ops/config/targets.yml` -- companies and career page URLs
2. `career-ops/config/profile.yml` -- target roles and keywords
3. `career-ops/data/pipeline.md` -- existing pipeline (for dedup)

### Step 2: Scan Each Company

For each company in targets.yml:
- Use WebFetch to load their careers page
- Extract job titles and URLs from the page content
- Filter: only keep roles that match Erik's target_roles keywords or the company's keyword list

### Step 3: Dedup

Compare found roles against what's already in pipeline.md. Skip anything already listed.

### Step 4: Append New Finds

For each new match, append to the Inbox section of `career-ops/data/pipeline.md`:

```markdown
- [ ] [{Company} -- {Role Title}]({URL})
```

### Step 5: Report

Tell Erik what was found:
```
## Scan Results -- {date}
Scanned: {N} companies
New matches: {N}

| Company | Role | URL |
|---------|------|-----|
| ... | ... | ... |

Added to pipeline.md for evaluation.
```

## Rules

- Don't scan more than 20 companies per run
- If a careers page can't be fetched (403, timeout), skip it and note the failure
- Don't evaluate roles during scan. That's the evaluate skill's job.
- If targets.yml is empty or all entries are commented out, tell Erik to add companies first
