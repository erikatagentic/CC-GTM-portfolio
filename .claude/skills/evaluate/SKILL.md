# Evaluate Job Opportunity

Score a job opportunity against Erik's profile using the career-ops scoring rubric.

## Trigger

User provides a job URL, job description text, or says "evaluate this role."

## Instructions

### Step 1: Load Context (mandatory)

Read these files before doing anything:
1. `career-ops/config/profile.yml` -- Erik's candidate profile
2. `career-ops/cv.md` -- Erik's full CV
3. `career-ops/config/shared.md` -- scoring rubric, archetypes, ethical rules

### Step 2: Get the Job Description

- If the user provided a URL: use WebFetch to get the page content. Save the JD to `career-ops/jds/{company}-{role-slug}.md`
- If the user pasted text: save it to `career-ops/jds/{company}-{role-slug}.md`
- Extract: company name, role title, location, remote policy, salary (if listed), requirements, responsibilities

### Step 3: Detect Archetype

Compare the JD against the 6 archetypes in shared.md. Pick the best fit. If it's ambiguous between two, pick the one where Erik is strongest.

### Step 4: Score Across 6 Dimensions

For each dimension (CV Match, North Star, Compensation, Culture Signals, Red Flags, Growth Potential):
- Score 1.0-5.0
- Write 1-2 sentences justifying the score
- Be honest. Don't inflate scores to make roles look better than they are.

Calculate the weighted average per the rubric in shared.md.

### Step 5: Generate Report (Blocks A-F)

Write the full evaluation report following the Block A-F format in shared.md. Save to:
`career-ops/reports/{NNN}-{company}-{date}.md`

Where NNN is the next sequential report number (001, 002, etc.) and date is YYYY-MM-DD.

### Step 6: Compensation Research

Use WebSearch to find salary data for this role + company + location. Include 2-4 sources. Compare against Erik's target range from profile.yml.

### Step 7: Interview Strategy

Check `career-ops/interview-prep/story-bank.md` for existing stories that map to this role. Suggest 2-4 STAR+R stories (new or existing). If creating new story suggestions, append them to the story bank.

### Step 8: Update Pipeline

Present the evaluation summary to Erik with the overall score and recommendation.

If Airtable MCP is available, create or update a row in the Job Pipeline table:
- Company, Role, URL, Score, Status: "Evaluated", Archetype, Date, Notes

### Output Format

Present a clean summary:
```
## {Company} -- {Role Title}
Score: {X.X}/5.0 | Recommendation: {Apply Now / Strong / Consider / Skip}
Archetype: {detected archetype}

### Dimension Scores
| Dimension | Score | Notes |
|-----------|-------|-------|
| CV Match | X.X | ... |
| North Star | X.X | ... |
| Compensation | X.X | ... |
| Culture Signals | X.X | ... |
| Red Flags | X.X | ... |
| Growth Potential | X.X | ... |

### Key Gaps
- ...

### Why Apply / Why Skip
...

Full report saved to: career-ops/reports/{NNN}-{company}-{date}.md
```

## Rules

- Follow all ethical rules from shared.md
- Never inflate scores. Honest evaluation saves time.
- Anti-AI writing rules apply to all generated text in the report
- If score is below 3.5, recommend Skip and don't generate a CV customization plan
