# Generate Tailored CV

Create an ATS-optimized PDF resume tailored to a specific job opportunity.

## Trigger

User says "generate CV for {company}" or "make a resume for this role" after an evaluation exists.

## Instructions

### Step 1: Load Context (mandatory)

Read these files:
1. `career-ops/cv.md` -- Erik's full CV (source of truth for all claims)
2. `career-ops/config/profile.yml` -- candidate profile
3. `career-ops/config/shared.md` -- ethical rules
4. The evaluation report for this role from `career-ops/reports/`
5. The saved JD from `career-ops/jds/`
6. `career-ops/templates/cv-template.html` -- the HTML template

### Step 2: Extract Keywords

From the JD, extract 15-20 keywords and phrases that an ATS would scan for. Categorize:
- Hard skills (tools, technologies, methodologies)
- Soft skills (leadership, communication, collaboration)
- Domain terms (industry-specific language)

### Step 3: Customize CV Content

Using Block E (CV Customization Plan) from the evaluation report:
- Reorder experience bullets to lead with the most relevant ones
- Weave JD keywords into existing experience descriptions (never invent new experience)
- Adjust the professional summary to target this specific role and archetype
- Emphasize proof points that match JD requirements
- De-emphasize irrelevant experience (keep it, just move it down)

### Step 4: Generate HTML

Take cv-template.html and fill in all placeholder sections with the customized content. The HTML should be a complete, self-contained file with inline CSS.

Write the filled HTML to `career-ops/output/{company}-{role-slug}-{date}.html`

### Step 5: Generate PDF

Run: `node career-ops/generate-pdf.mjs career-ops/output/{company}-{role-slug}-{date}.html career-ops/output/{company}-{role-slug}-{date}.pdf`

### Step 6: Confirm

Tell Erik the PDF is ready and where to find it. Mention which keywords were woven in and what was emphasized.

## Rules

- NEVER invent experience, metrics, or skills not in cv.md
- NEVER add skills Erik doesn't have to pass ATS filters
- Keywords must be woven into real experience, not keyword-stuffed
- Anti-AI writing rules apply to all CV text
- One page strongly preferred. Two pages max.
- Use straight quotes, not curly
