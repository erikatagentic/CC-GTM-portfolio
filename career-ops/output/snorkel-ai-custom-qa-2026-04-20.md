# Custom Q&A -- Snorkel AI / GTM Engineer

## Why are you interested in Snorkel AI specifically?

The data thesis. Every GTM stack I've built fails the same way -- not because the tools are wrong, but because the data feeding them is. Snorkel productizes the part of the AI pipeline most teams handwave through, which is also the part that decides whether the AI actually works. That's a problem worth working on. And the GTM team there gets to apply your own product to itself, which is the kind of forcing function I want to be inside of.

## Walk us through an automated workflow you built end-to-end.

At Hey Agentic, I built an account-research and outbound-prep pipeline for a B2B client. The trigger: when a target account hits a buying signal (job change, funding event, product launch), an n8n workflow pulls account context from their CRM, enriches contacts via Clay's waterfall, asks Claude to draft a personalized outreach hook based on the signal, scores the result against the client's voice rubric, and either routes to the AE for a one-click send or sends back to Claude for a rewrite. It replaced about 6 hours of weekly SDR research time per rep and doubled reply rate vs. the prior templated cadence. The architecture: signal source → n8n orchestration → Salesforce read/write → Clay enrichment → Claude generation + eval loop → AE review → Outreach sequence.

## How do you think about build vs. buy?

I default to "buy until the gap shows up." Most GTM problems have an off-the-shelf tool that gets you 80% there. The mistake teams make is custom-building before they understand the actual gap. I'll buy a tool, run it for a quarter, document where it breaks, and only then build the wrapper or replacement. The exception: anything that touches data quality or attribution -- those compound, so I'll invest custom code earlier because the cost of a bad foundation is permanent.

## Salary expectations?

$170-200K base feels right for the role's seniority. I'm flexible on the mix of base and equity for a company at Snorkel's stage.

## Why are you leaving your current role?

I'm not leaving -- I'm joining. I've spent three years building the GTM playbook independently across agency clients. I'm ready to apply it at scale inside a company with a real team, real resources, and bigger problems worth solving. Snorkel sits in the AI layer I want to spend the next 5-10 years building inside.

## Anything else we should know?

I keep a portfolio site at gtm-codex.vercel.app that walks through some of the systems I've built. The "War Campaigns" section has the deeper case studies. Happy to walk through any of them on a call.
