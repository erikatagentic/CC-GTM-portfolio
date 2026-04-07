type Rarity = "standard" | "field-tested" | "sanctified" | "relic" | "archaeotech";

export interface ProjectData {
  designation: string;
  title: string;
  context: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  tools: string[];
  rarity: Rarity;
  slug: string;
}

export const TOOL_RARITY: Record<string, Rarity> = {
  Clay: "archaeotech",
  n8n: "relic",
  Instantly: "sanctified",
  "Sales Navigator": "sanctified",
  HeyReach: "sanctified",
  PhantomBuster: "field-tested",
  Airtable: "field-tested",
  "Cursor + Claude": "relic",
  Smartlead: "sanctified",
  HubSpot: "field-tested",
  Salesforce: "field-tested",
  Firecrawl: "relic",
};

export const PROJECTS: ProjectData[] = [
  {
    designation: "I",
    title: "Clay Enrichment Pipeline",
    context: "B2B SaaS and Agency Clients",
    summary: "Built waterfall enrichment system processing 5M+ contacts across dozens of data providers with automated verification gates.",
    problem: "Clients were enriching leads one provider at a time. Hit rates sat around 30-40% on any single source, so half the list went out with bad emails or missing data. Manual dedup was eating hours every week, and catch-all domains were tanking deliverability.",
    solution: "Designed a 4-provider waterfall in Clay with automatic fallback logic. If the first provider returns null, it cascades to the next. Built catch-all filtering, dual email verification gates, and spend caps per provider to prevent credit burn. Added signal stacking so enrichment only triggers on prospects showing buying intent.",
    outcome: "Valid email rate from 34% to 68%. Cost per enriched contact dropped from $0.12 to $0.03. Became Clay Top 1% user with 187 consecutive days on the platform and 5M+ contacts processed.",
    tools: ["Clay", "Airtable"],
    rarity: "archaeotech",
    slug: "clay-enrichment",
  },
  {
    designation: "II",
    title: "Cold Email Infrastructure",
    context: "B2B Clients Across 47 Industries",
    summary: "Designed deliverability-first email systems across 200+ campaigns with 98%+ inbox placement at scale.",
    problem: "Clients were sending cold email from their primary domains with no warming, no rotation, and no monitoring. Emails landed in spam. Reply rates hovered below 1%. One client was paying $4,200/month across two tools and booking 5 meetings total.",
    solution: "Built dedicated sending infrastructure: separate domains, SPF/DKIM/DMARC authentication, inbox warming protocols, and send scheduling tuned to natural patterns. Wrote campaign copy informed by 10,000+ campaigns of performance data. Set up A/B testing on every sequence from day one with real-time deliverability monitoring.",
    outcome: "Average reply rates from sub-1% to 4-5%. One client went from 0.8% to 4.7% reply rate and 2 meetings/month to 14. 98%+ inbox placement across all campaigns. $26M+ in closed revenue generated from cold email leads across the client base.",
    tools: ["Instantly", "Smartlead", "Clay"],
    rarity: "relic",
    slug: "cold-email",
  },
  {
    designation: "III",
    title: "n8n Automation Stack",
    context: "B2B Outreach Agency Operations",
    summary: "GTM workflow automation replacing manual campaign management. CRM syncs, channel routing, signal scoring, and intelligent sequencing.",
    problem: "Campaign managers were toggling between 6 tools and 100 tabs. Launching a new client campaign was a 4-hour manual grind: targeting, list building, sequence QA, CRM updates. LinkedIn and email ran as separate blind systems with zero coordination. Prospects got a connection request AND a cold email on the same day.",
    solution: "Built an orchestration layer in n8n that connects Clay enrichment to channel routing logic. Prospects enter the system, get scored on LinkedIn activity, job tenure, and tech stack fit, then route to the right channel automatically. LinkedIn-first for active profiles, email-first for inactive ones. Every touchpoint logs to CRM. Added Slack approval flows so humans stay in the loop on high-value prospects.",
    outcome: "Campaign launch time from 4 hours to 15 minutes. One client went from 5 meetings/month to 14 with the same audience and same two channels. Cost per meeting dropped from $840 to $14. Duplicate outreach eliminated entirely.",
    tools: ["n8n", "Airtable", "HubSpot"],
    rarity: "relic",
    slug: "n8n-automation",
  },
  {
    designation: "IV",
    title: "LinkedIn Outbound System",
    context: "200+ B2B Clients",
    summary: "Multi-account LinkedIn automation with targeted connection campaigns, DM sequences, and integrated reply management at scale.",
    problem: "Clients were doing LinkedIn outreach by hand or with basic tools that got their accounts flagged. No targeting beyond job title filters. No tracking. No way to know what was working. One client was getting 3-10 inconsistent leads per month through networking and referrals alone.",
    solution: "Built multi-account LinkedIn infrastructure with connection targeting based on ICP signal scoring. Designed DM sequences that read like peer conversations, not pitches. Integrated with CRM for automatic lead routing and reply management. Set up A/B testing on connection messages and follow-up cadences.",
    outcome: "30%+ average reply rate across 200+ clients. 35%+ connection acceptance rate. 4,500+ total meetings booked. 105K+ connections managed with 28.1% reply rate across all active campaigns. One client went from networking-only to 5 new clients in 2 months.",
    tools: ["HeyReach", "Sales Navigator", "PhantomBuster"],
    rarity: "sanctified",
    slug: "linkedin-outbound",
  },
];
