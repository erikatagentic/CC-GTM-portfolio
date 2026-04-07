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
    context: "[PLACEHOLDER: Client context, e.g. 'Agency Client -- B2B SaaS']",
    summary: "Built waterfall enrichment system processing 5M+ contacts across dozens of data providers.",
    problem: "[PLACEHOLDER: 2-3 sentences on what was broken. What did the client's enrichment process look like before? Manual? Unreliable? Expensive?]",
    solution: "[PLACEHOLDER: 2-3 sentences on what you built. Waterfall logic, signal stacking, provider routing, credit optimization.]",
    outcome: "[PLACEHOLDER: Hard metrics. e.g. '68% valid email rate (up from 34%), $0.03/contact (down from $0.12)']",
    tools: ["Clay", "Airtable"],
    rarity: "archaeotech",
    slug: "clay-enrichment",
  },
  {
    designation: "II",
    title: "Cold Email Infrastructure",
    context: "[PLACEHOLDER: Client context]",
    summary: "Designed deliverability-first email systems across 200+ campaigns with consistent inbox placement.",
    problem: "[PLACEHOLDER: What deliverability issues existed? Landing in spam? Low reply rates? No infrastructure?]",
    solution: "[PLACEHOLDER: Domain infrastructure, warming protocols, A/B testing methodology, send scheduling.]",
    outcome: "[PLACEHOLDER: Hard metrics. e.g. 'Reply rates from 1.2% to 4.8%, inbox placement above 92%']",
    tools: ["Instantly", "Smartlead", "Clay"],
    rarity: "relic",
    slug: "cold-email",
  },
  {
    designation: "III",
    title: "n8n Automation Stack",
    context: "[PLACEHOLDER: Client context]",
    summary: "GTM workflow automation: CRM syncs, Slack approvals, intent detection, multi-step orchestration.",
    problem: "[PLACEHOLDER: What manual processes were eating time? What broke when things weren't synced?]",
    solution: "[PLACEHOLDER: What workflows you built. CRM sync, lead routing, Slack alerts, intent-based triggers.]",
    outcome: "[PLACEHOLDER: Hard metrics. e.g. '12 hours/week saved, zero missed follow-ups, 3-minute lead response time']",
    tools: ["n8n", "Airtable", "HubSpot"],
    rarity: "relic",
    slug: "n8n-automation",
  },
  {
    designation: "IV",
    title: "LinkedIn Outbound System",
    context: "[PLACEHOLDER: Client context]",
    summary: "Multi-account LinkedIn automation with targeted connection campaigns and DM sequences.",
    problem: "[PLACEHOLDER: What was the LinkedIn outreach process before? Manual? Unscalable? No tracking?]",
    solution: "[PLACEHOLDER: Multi-account setup, connection targeting, DM frameworks, cadence design.]",
    outcome: "[PLACEHOLDER: Hard metrics. e.g. '32% connection acceptance, 8% reply rate, 47 meetings/quarter']",
    tools: ["HeyReach", "Sales Navigator", "PhantomBuster"],
    rarity: "sanctified",
    slug: "linkedin-outbound",
  },
  {
    designation: "V",
    title: "Honey Product Work",
    context: "Honey (acquired by PayPal for $4B)",
    summary: "Product management at Honey pre-acquisition. Shipping features that drove growth.",
    problem: "[PLACEHOLDER: What product challenges were you solving? Growth, engagement, conversion?]",
    solution: "[PLACEHOLDER: What features you built, what decisions you drove, what shipped.]",
    outcome: "[PLACEHOLDER: Hard metrics. Growth contribution, feature adoption, anything quantifiable.]",
    tools: [],
    rarity: "sanctified",
    slug: "honey-product",
  },
];
