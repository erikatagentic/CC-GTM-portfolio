# Application Assistant

Generate form answers and application materials for a specific job.

## Trigger

User says "apply to {company}", "fill out the application for {role}", or "help me apply."

## Instructions

### Step 1: Load Context (mandatory)

Read these files:
1. `career-ops/config/profile.yml` -- Erik's profile
2. `career-ops/cv.md` -- Erik's CV
3. `career-ops/config/shared.md` -- ethical rules
4. `career-ops/interview-prep/story-bank.md` -- STAR+R stories
5. The evaluation report for this company from `career-ops/reports/`
6. The saved JD from `career-ops/jds/`

If no evaluation report exists, tell Erik to run `/evaluate` first.

### Step 2: Check Score Threshold

If the evaluation score is below 3.5, stop and tell Erik this role was flagged as a Skip. Don't generate application materials for low-fit roles unless Erik explicitly overrides.

### Step 3: Generate Application Materials

Based on what the application requires, generate:

**Cover Letter** (if needed):
- 3-4 paragraphs max
- Lead with the strongest archetype match
- Reference 2-3 specific proof points from cv.md
- Mention something specific about the company (not generic flattery)
- Close with a clear ask
- MUST follow anti-AI writing rules. Contractions. No banned words. Casual where appropriate.

**Common Form Fields**:
- "Why are you interested in this role?" -- Draw from evaluation Block C
- "Why this company?" -- Draw from company research in prep
- "Describe a relevant project" -- Draw from story bank, pick the best-fit story
- "Salary expectations" -- Use profile.yml compensation data
- "Anything else?" -- Use this for a specific, memorable detail

**LinkedIn Message** (if reaching out to hiring manager):
- 2-3 sentences max
- One specific thing that connects Erik to the role or company
- Clear, low-pressure ask

### Step 4: Present for Review

Show Erik everything generated. DO NOT submit anything. Erik reviews and makes edits.

Format:
```
## Application Materials: {Company} -- {Role}
Score: {X.X} | Archetype: {archetype}

### Cover Letter
[generated text]

### Form Answers
**Q: Why are you interested?**
[answer]

**Q: ...**
[answer]

### LinkedIn Message (optional)
[message]

---
Ready for your review. Edit anything, then submit manually.
```

### Step 5: Update Status

After Erik confirms he's submitted, update:
- pipeline.md status
- Airtable row status to "Applied" (if MCP available)

## Rules

- NEVER submit applications automatically. Present for review only.
- NEVER invent experience or metrics not in cv.md
- Anti-AI writing rules are mandatory for all generated text
- Cover letters must sound like Erik, not a bot. Read his narrative in profile.yml for voice.
- If the application asks for something Erik can't honestly answer, flag it instead of making something up
