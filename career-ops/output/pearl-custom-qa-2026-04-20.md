# Custom Q&A -- Pearl / Lead GTM Engineer

## Why Pearl?

Two reasons. First, "first-ever GTM Engineer" is the version of this role I'm wired for -- I've been the founding builder on every agency engagement and at Lumos. Greenfield is where I do my best work. Second, dental AI is a legit B2B vertical disguised as a healthcare niche. The buyer is an SMB practice owner. The product is FDA-cleared CV running on real radiographs. The GTM motion has to handle a long tail of solo practitioners and DSO-scale enterprise simultaneously. That's a hard, interesting GTM problem and the kind I want to live inside for the next several years.

## What's your first 90 days?

Days 1-30: ship a v1. I'd start with the specific pipeline gap leadership feels most acutely (probably outbound, given the JD emphasis), pull the existing data out of HubSpot, build the first automated workflow end-to-end on Clay + Apollo + Instantly + n8n + HubSpot. Goal: one production system the SDR/AE team uses daily by week 4, even if it's narrow.

Days 30-60: build the data layer. Lead scoring, lifecycle stages, routing logic, attribution. The boring infrastructure that makes every later automation 5x faster. Document everything as I go because the second hire shouldn't have to reverse-engineer my decisions.

Days 60-90: expand to a second motion. If outbound was V1, this is lifecycle (onboarding, expansion, retention) or partnerships -- whichever has the bigger gap. Start the build-vs-buy work for the next 6-month roadmap.

Throughout: weekly Loom updates to leadership showing what shipped. Monthly retros with Sales/CS on what's working.

## Walk through an automated workflow you built end-to-end.

At Hey Agentic, I built an account-research and outbound-prep pipeline. Trigger: an account hits a buying signal (job change, funding event, product launch). An n8n workflow pulls account context from CRM, enriches contacts via Clay's waterfall, asks Claude to draft a personalized outreach hook based on the signal, scores the result against the client's voice rubric, and either routes to AE for one-click send or sends back to Claude for rewrite. Replaced ~6 hours/week of SDR research time per rep, doubled reply rate vs. the prior templated cadence.

## How do you balance speed vs. maintainability?

Default to speed for v1. Maintainability gets bolted on once the system has earned its keep. The two non-negotiables I won't sacrifice for speed: data quality (because attribution compounds) and observable failure modes (because GTM teams stop trusting automation the moment it lies to them). Everything else can be cleaned up in a v2 sprint.

## Salary expectations?

$180-220K base + equity feels right for a Lead title at Pearl's stage. Flexible on mix.

## Why are you looking?

Built the GTM playbook independently across agency clients for 3 years. Ready to apply it at scale inside a company with a real team, real resources, and bigger problems. Pearl's stage and the founding-role framing are exactly what I want.

## Anything else?

Portfolio at gtm-codex.vercel.app -- War Campaigns section has deeper case studies. Happy to walk through any of them on a call.
