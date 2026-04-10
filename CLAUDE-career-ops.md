# Career-Ops (Job Search Automation)

> Read when working on Career-Ops job search automation (the career-ops/ directory).

---

The `career-ops/` directory contains an AI-powered job search system with 6 Claude Code skills. The portfolio site itself is unchanged. Career-ops just lives alongside it.

## Data Contract

**User files (never auto-update):** These belong to Erik. Skills read them but don't overwrite without asking.
- `career-ops/cv.md` -- CV source of truth
- `career-ops/config/profile.yml` -- candidate profile, comp targets, narrative
- `career-ops/interview-prep/story-bank.md` -- STAR+R narratives
- `career-ops/data/pipeline.md` -- job URL inbox
- `career-ops/reports/*` -- evaluation reports
- `career-ops/output/*` -- generated PDFs
- `career-ops/jds/*` -- saved job descriptions

**System files (safe to update):** Skills can modify these.
- `.claude/skills/*/SKILL.md` -- skill definitions
- `career-ops/config/shared.md` -- scoring rubric and archetypes
- `career-ops/config/targets.yml` -- company career page URLs
- `career-ops/templates/*` -- CV template
- `career-ops/generate-pdf.mjs` -- PDF generation script

## Before Any Evaluation

Every evaluation skill MUST read these 3 files first:
1. `career-ops/config/profile.yml`
2. `career-ops/cv.md`
3. `career-ops/config/shared.md`

## Airtable Integration

- Base: `appP3XYuyhYRTmEDv`
- Table: `Job Pipeline`
- Fields: Company, Role, URL, Score, Status, Archetype, PDF, Report, Date, Notes
- Status values: Inbox, Evaluated, CV Sent, Applied, Interview, Offer, Rejected, Withdrawn

## Ethical Rules

1. Never invent metrics or claims not in cv.md
2. Never auto-submit applications. Always present for Erik's review first.
3. Never apply to roles scoring below 3.5
4. Anti-AI writing rules apply to all generated text (cover letters, form answers, messages)
5. Quality over quantity. No spray-and-pray.

## Skills

| Skill | Trigger | What It Does |
|-------|---------|-------------|
| `/evaluate` | Job URL or JD | Scores role across 6 dimensions, generates A-F report |
| `/cv-gen` | After evaluation | Generates ATS-optimized PDF tailored to the role |
| `/scan` | "scan for jobs" | Checks target company career pages for new openings |
| `/pipeline` | "run pipeline" | Processes URL inbox, fetches JDs, runs evaluations |
| `/prep` | "prep for {company}" | Interview preparation with story mapping |
| `/apply` | "apply to {company}" | Generates form answers and cover letter for review |
