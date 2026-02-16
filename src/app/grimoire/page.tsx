import type { Metadata } from "next";
import Link from "next/link";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "The Grimoire",
};

const CHAPTERS = [
  {
    slug: "cold-email-fundamentals",
    number: "I",
    title: "Cold Email Fundamentals",
    description: "Subject lines, body copy, testing methodology, and what actually moves reply rates.",
    category: "Outbound Foundations",
    status: "coming soon",
  },
  {
    slug: "deliverability",
    number: "II",
    title: "Deliverability",
    description: "Domain infrastructure, warming protocols, catch-all handling, and diagnostics.",
    category: "Outbound Foundations",
    status: "coming soon",
  },
  {
    slug: "clay-data-enrichment",
    number: "III",
    title: "Clay & Data Enrichment",
    description: "Waterfall enrichment, provider routing, credit optimization, and signal-before-spend.",
    category: "Data & Enrichment",
    status: "coming soon",
  },
  {
    slug: "campaign-architecture",
    number: "IV",
    title: "Campaign Architecture",
    description: "System design, multi-channel orchestration, sequencing, and metrics that matter.",
    category: "Systems",
    status: "coming soon",
  },
  {
    slug: "linkedin-outbound",
    number: "V",
    title: "LinkedIn Outbound",
    description: "Connection targeting, DM frameworks, cadence, and content as distribution.",
    category: "Systems",
    status: "coming soon",
  },
  {
    slug: "automation-n8n",
    number: "VI",
    title: "Automation with n8n",
    description: "Common GTM workflows, Slack approvals, CRM sync, and intent detection.",
    category: "Systems",
    status: "coming soon",
  },
  {
    slug: "gtm-engineering",
    number: "VII",
    title: "GTM Engineering",
    description: "What it is, the SDR cost math, signal processing, and the era of the GTM Architect.",
    category: "Strategy",
    status: "coming soon",
  },
  {
    slug: "icp-targeting",
    number: "VIII",
    title: "ICP & Targeting",
    description: "ICP framework, signal stacking, account tiering, and why targeting beats copy.",
    category: "Strategy",
    status: "coming soon",
  },
];

export default function GrimoirePage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gold-light gold-glow-strong tracking-wide uppercase">
          The Grimoire
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          8 chapters of GTM engineering knowledge. Frameworks, systems, and hard-won lessons from 200+ campaign audits.
        </p>
      </div>

      <div className="gold-divider" />

      <div className="flex flex-col gap-4">
        {CHAPTERS.map((chapter) => (
          <div key={chapter.slug}>
            <Panel variant="default" hover>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-border-gold bg-bg-darkest">
                  <span className="font-[family-name:var(--font-display)] text-lg font-bold text-gold-base">
                    {chapter.number}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary">
                      {chapter.title}
                    </h3>
                    <Badge rarity="common">{chapter.status}</Badge>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{chapter.description}</p>
                  <span className="text-[10px] font-[family-name:var(--font-ui)] uppercase tracking-widest text-text-disabled mt-2 inline-block">
                    {chapter.category}
                  </span>
                </div>
              </div>
            </Panel>
          </div>
        ))}
      </div>
    </div>
  );
}
