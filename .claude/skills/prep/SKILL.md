# Interview Preparation

Generate targeted interview prep for a specific company and role.

## Trigger

User says "prep for {company}", "interview prep", or "help me prepare for {role}."

## Instructions

### Step 1: Load Context (mandatory)

Read these files:
1. `career-ops/config/profile.yml` -- Erik's profile
2. `career-ops/cv.md` -- Erik's CV
3. `career-ops/interview-prep/story-bank.md` -- existing STAR+R stories
4. The evaluation report for this company from `career-ops/reports/`
5. The saved JD from `career-ops/jds/`

If no evaluation report exists for this company, tell Erik to run `/evaluate` first.

### Step 2: Map Stories to Questions

Based on the role, archetype, and JD requirements:
- Identify 8-12 likely interview questions
- Map existing story-bank stories to each question
- Flag questions that don't have a good story yet

### Step 3: Generate New Stories

For any gaps (questions without stories), draft STAR+R story outlines using Erik's cv.md experience. Mark them as drafts that Erik should review and fill in with real details.

Append new stories to `career-ops/interview-prep/story-bank.md`.

### Step 4: Red Flag Prep

Identify 2-4 questions an interviewer might ask to probe weaknesses or gaps identified in the evaluation (Block B gaps). Draft honest, well-framed responses.

### Step 5: Company Research

Use WebSearch to find:
- Recent company news (last 6 months)
- Key people Erik might interview with (hiring manager, team leads)
- Company culture signals (Glassdoor, LinkedIn posts, blog)
- Technical stack or methodologies the team uses

### Step 6: Case Study Prep

If the role likely involves a case study or take-home:
- Suggest a framework for approaching it
- Identify which of Erik's past work could be referenced
- Draft an outline for a relevant case study presentation

### Step 7: Output

Present the full prep package:
```
## Interview Prep: {Company} -- {Role}

### Likely Questions & Stories
| Question Theme | Story | Status |
|---------------|-------|--------|
| ... | ... | Ready / Draft / Gap |

### Red Flag Questions
1. Q: ...
   A: ...

### Company Intel
- ...

### Case Study Framework
- ...
```

## Rules

- Never invent experiences. Stories must be based on real cv.md content.
- Draft stories are clearly marked as needing Erik's input
- Anti-AI writing rules apply to all drafted answers
- Be direct in red flag answers. Don't dodge the question, reframe it honestly.
