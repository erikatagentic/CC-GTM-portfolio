# Resume Research 2026: What Actually Wins for Senior/Technical GTM Roles

> Produced 2026-08-06 via /deep-research (16+ sources, 4 passes). Feeds the master resume and all future /cv-gen tailoring. Condensed checklist at bottom.

## 1. The screening reality: three layers, not one

**Layer 1: ATS parsing + knockout questions.** The "75% of resumes are auto-rejected by ATS" claim traces to a 2012 sales pitch by Preptel (defunct 2013); no credible research supports it. Recruiter data shows 90-95%+ of applications get human review [theinterviewguys.com]. An HR.com survey found only 8% of recruiters have their ATS configured to auto-reject on content or match scores [hr.com, 2026-04]. Greenhouse does no automatic content filtering; the only true auto-reject anywhere is knockout questions (work authorization, location, licenses), which 100% of recruiters use [hireflow.net]. Practical implication: application form questions matter more than keyword density.

**Layer 2: Ranking and search.** ATS scoring affects visibility, not rejection: low match score = lower in the recruiter's queue [hiration.com]. Recruiters also source by searching keywords inside their ATS. Keywords matter for ranking, and modern tools (Eightfold, Phenom) use semantic matching; keyword stuffing actively lowers scores [applygoat.com].

**Layer 3: LLM screening (the 2026 shift).** ~70% of businesses use AI in hiring, 82% for resume sifting [happypeopleai.com]. LLM screeners read the resume like a human: career narrative, context, consistency against the JD, suitability score. One source cites an 80%+ match threshold to advance where AI screening is configured [theinterviewguys.com]. The optimization target: a coherent, quantified story that semantically matches the role. Writing for the LLM and the human converge.

Contradiction flagged: the "8% auto-reject" survey and "80% threshold" claim come from different populations (traditional ATS config vs. AI-screening adopters). Both can be true; treat AI-score ranking as the growing risk, hard auto-reject as the rare one.

## 2. Format: boring wins, mechanically

Benchmarks from jobscan.co, resumeadapter.com, atsverification.com:
- Single column, linear layout. Two-column layouts are the highest-frequency structural breaker (parse score 100 -> 85).
- Standard section headers: "Work Experience", "Skills", "Education". Creative headers lose the parser.
- No tables, text boxes, icons, or graphics. Icons parse as garbage.
- PDF from a text-based renderer parses reliably; Canva/InDesign PDFs (image-layer text) are the danger. Orosz's hiring-manager panel: PDF, full stop [thetechresume.com].
- Omit photo, mailing address, birth date [thetechresume.com via sandordargo.com].
- No sub-bullets, flat bullets only [Orosz].

## 3. Length: two pages for senior

ResumeGo field study (n=482 hiring professionals): recruiters prefer two-page resumes, 2.9x more strongly for managerial roles; spent 4:05 on two-pagers vs 2:24 on one-pagers; rated two-pagers 21% higher [cnbc.com/ResumeGo 2018]. 54-90% of hiring managers prefer two pages for 10+ years of experience [thehumancapitalhub.com]. Triage scan is still ~7 seconds [Ladders eye-tracking]: make the entire case in the top third of page one. (Erik's call for the master resume: GTM-only focus, 1 page achieved.)

## 4. Bullet writing: accomplishment grammar

- Formula: action verb + task/context + measurable result [resume.io, resumeworded.com].
- Tense test: present tense = responsibility, past tense = accomplishment.
- 2-3 numbers per bullet for senior roles: scale/scope, delta, business outcome [resumetemplates.com].
- Estimates allowed: ranges, frequency, scale, when exact data unavailable [resumeoptimizerpro.com].
- Quantified resumes get materially more interviews (2.5x per LinkedIn Talent Report 2023; 40% more shortlists per TalentWorks; secondary-cited, directional).

## 5. Metrics framing for GTM specifically

Revenue-role recruiters read the summary as a scorecard: revenue/pipeline band, attainment or conversion lift, team or client count, stack [resumetemplates.com]. For GTM engineers (1,000-posting analysis [ayautomate.com]): the signal is specificity and ownership, the exact workflow built, tools used, results, what you'd change [clay.com, syncgtm.com]. Stack keywords by posting frequency: Clay (most-cited), HubSpot 52%, Outreach 49%, Salesforce 45%, 6sense/Apollo 43%, Zapier 39%, SQL and Python 38% each; deliverability (SPF/DKIM/DMARC) "non-negotiable" [theremotereps.com]. Name real tools verbatim.

## 6. The 2026 differentiator: don't smell like AI

91% of recruiters claim they can spot AI-generated resumes; 49% would auto-reject one [getpruf.ai, kraftcv.com]. Tells: spearheaded/leveraged/pivotal/robust/showcasing/synergy, uniform tone, interchangeable content, heavy em dashes (~10x human rate) [enhancv.com, hirelytica.com]. Inoculation: oddly specific, tool-and-obstacle-level detail. "Fixed the 48-hour lag in the Shopify-to-ERP sync" reads human. Dovetails with Erik's anti-AI canon.

## 7. Beyond the resume: proof of work is the meta-lever

"A portfolio of working workflows beats a resume of job titles" [gofractional.com]. Hiring managers want Clay tables, scoring models, automation architectures, before/after metrics; Loom walkthroughs and anonymized case studies (context -> problem -> architecture -> results -> lessons) are the standard format [apollo.io, fueler.io]. The resume's job is to earn the click to the portfolio; portfolio link goes in the header.

Blind spot no source addressed: framing agency/consulting work (multiple clients, no single quota) for in-house senior roles. Best synthesis [~ inference]: clients as the scope metric, 2-3 deepest engagements as named case studies, not a client laundry list.

## Checklist (for /cv-gen)

1. Single column, standard headers, text-based PDF, no icons/tables/photo. 1 page for the GTM-focused master; 2 allowed when a JD warrants depth.
2. Top third of page one = summary-as-scorecard: role identity + 2-3 scope numbers + stack.
3. Every bullet: past-tense verb + named system/tool + 2-3 numbers (scope, delta, outcome).
4. Mirror the JD's actual tool nouns verbatim where true.
5. Answer application knockout questions with full care; they are the only real auto-reject.
6. Zero AI-vocab, zero em dashes, at least one oddly specific obstacle-level detail per role.
7. Tailor per application; one-resume-for-all measurably loses under LLM screening.
8. Portfolio link in the header; the resume optimizes for the click.
9. NO hidden white-text keyword blocks: semantic ATS penalizes stuffing (template's ats-keywords div retired 2026-08-06).
