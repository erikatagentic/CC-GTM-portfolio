# Process Job Pipeline

Process unchecked URLs from the pipeline inbox, fetch JDs, and run evaluations.

## Trigger

User says "process pipeline", "run pipeline", or just "/pipeline."

## Instructions

### Step 1: Load Pipeline

Read `career-ops/data/pipeline.md`. Find all unchecked items (lines starting with `- [ ]`).

If there are no unchecked items, tell Erik the inbox is empty.

### Step 2: Process Each Item

For each unchecked URL:

1. **Fetch the JD**: Use WebFetch to load the job posting page. Extract the job description text.
2. **Save the JD**: Write to `career-ops/jds/{company}-{role-slug}.md`
3. **Run evaluation**: Follow the evaluate skill's logic (Steps 3-7 from evaluate/SKILL.md). Load profile.yml, cv.md, shared.md. Score the role. Generate the report.
4. **Mark as processed**: Change `- [ ]` to `- [x]` in pipeline.md and append the score: `- [x] [{Company} -- {Role}]({URL}) -- Score: {X.X}`

### Step 3: Update Airtable

If Airtable MCP is available, create rows in the Job Pipeline table for each processed role.

### Step 4: Summary

Present results:
```
## Pipeline Run -- {date}
Processed: {N} roles

| # | Company | Role | Score | Recommendation |
|---|---------|------|-------|----------------|
| 1 | ... | ... | X.X | Apply / Skip |

Reports saved to career-ops/reports/
```

## Rules

- Process max 5 roles per run to keep context manageable
- If a URL can't be fetched, mark it with `- [!]` and note the error
- Follow all ethical rules from shared.md
- Don't generate CVs during pipeline processing. Just evaluate.
