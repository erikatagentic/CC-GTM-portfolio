import type { Metadata } from "next";
import { StatBlock } from "@/components/ui/StatBlock";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { XPBar } from "@/components/ui/XPBar";
import { getCharacterStats, CURRENT_XP, CHARACTER_NAME } from "@/lib/rpg";
import { CogDivider } from "@/components/ui/CogDivider";

export const metadata: Metadata = {
  title: "Service Record",
};

const STATS = [
  { name: "Strength", abbreviation: "STR", value: 18, description: "200+ campaigns audited" },
  { name: "Dexterity", abbreviation: "DEX", value: 16, description: "Clay Top 1% (5M+ contacts)" },
  { name: "Constitution", abbreviation: "CON", value: 15, description: "3yr Head of Growth @ Cleverly" },
  { name: "Intelligence", abbreviation: "INT", value: 17, description: "GTM Engineer @ Hey Agentic" },
  { name: "Wisdom", abbreviation: "WIS", value: 14, description: "PM @ Medely, Honey (PayPal)" },
  { name: "Charisma", abbreviation: "CHA", value: 13, description: "Founder @ Lumos" },
];

const PROFICIENCIES = [
  "Cold Email Architecture",
  "Clay Waterfall Enrichment",
  "Deliverability Engineering",
  "n8n Workflow Automation",
  "LinkedIn Outbound Systems",
  "ICP Signal Stacking",
  "Campaign A/B Testing",
  "CRM Pipeline Design",
];

const ACTS = [
  {
    act: "I",
    title: "The Initiate",
    period: "Pre-2018",
    description: "Health science background. Learning how systems work at the biological level. Developing the analytical mindset that would later define every campaign audit.",
    lesson: "Complex systems have patterns. Find the pattern, find the lever.",
    rarity: "standard" as const,
  },
  {
    act: "II",
    title: "The Forge Apprentice",
    period: "2018 - 2020",
    description: "Product Management at Honey (acquired by PayPal for $4B), GrowthPhysics, and Medely. Building products, understanding users, learning what makes people act.",
    lesson: "Users don't care about features. They care about outcomes.",
    rarity: "field-tested" as const,
  },
  {
    act: "III",
    title: "The Campaign Marshal",
    period: "2020 - 2023",
    description: "Head of Growth at Cleverly for 3 years. Running outbound at scale. 200+ campaigns audited. Learning what actually moves pipeline vs. what just looks good on a slide.",
    lesson: "Most outbound fails because of targeting, not copy. Fix the list first.",
    rarity: "sanctified" as const,
  },
  {
    act: "IV",
    title: "The Archmagos",
    period: "2023 - Present",
    description: "Founded Lumos. GTM Engineer at Hey Agentic. Building systems that replace SDR headcount with automation. Clay, n8n, cold email, LinkedIn -- the full stack.",
    lesson: "The best GTM teams don't need more people. They need better plumbing.",
    rarity: "archaeotech" as const,
  },
];

const SERVICE_HISTORY = [
  {
    title: "Recruitment",
    text: "Started in health science, pivoted to product management. Spent years at Honey (acquired by PayPal), GrowthPhysics, and Medely learning how products grow.",
  },
  {
    title: "Campaign History",
    text: "Became Head of Growth at Cleverly for 3 years. Ran outbound at scale. Learned what works and what doesn't through 200+ campaign audits and millions of data points.",
  },
  {
    title: "Current Deployment",
    text: "Founded Lumos, a GTM engineering agency. Building outbound systems that replace SDR headcount with automation. Clay, n8n, cold email, LinkedIn -- the full stack. Also serving as GTM Engineer at Hey Agentic.",
  },
];

export default function ServiceRecordPage() {
  const stats = getCharacterStats(CURRENT_XP);

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // IMPERIAL RECORD
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
          Service Record
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary">
          The complete service record. Credentials, skills, and deployment history.
        </p>
      </div>

      {/* Name plate */}
      <Panel variant="bordered">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-mars-light tracking-wide">
              {CHARACTER_NAME}
            </h2>
            <p className="text-sm text-text-secondary font-[family-name:var(--font-heading)] mt-1">
              Level {stats.currentTier.level} {stats.className} &middot; {stats.subclass}
            </p>
          </div>
          <div className="flex gap-2">
            <Badge rarity="archaeotech">Tier {stats.currentTier.level}</Badge>
            <Badge rarity="sanctified">{stats.currentTier.title}</Badge>
          </div>
        </div>
        <div className="mt-4">
          <XPBar
            currentXP={stats.totalXP}
            tierEnd={stats.nextTier?.xpRequired ?? null}
            tierTitle={stats.currentTier.title}
            nextTierTitle={stats.nextTier?.title ?? null}
            progress={stats.progressToNext}
          />
        </div>
      </Panel>

      {/* Ability Scores */}
      <section>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // APTITUDE ASSESSMENT
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
          Ability Scores
        </h2>
        <StatBlock stats={STATS} />
      </section>

      <CogDivider />

      {/* Proficiencies */}
      <section>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // CERTIFIED COMPETENCIES
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
          Specializations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PROFICIENCIES.map((prof) => (
            <div
              key={prof}
              className="flex items-center gap-2 px-3 py-2 border border-border-subtle bg-bg-panel/60"
            >
              <span className="text-mars-base text-sm">&#9670;</span>
              <span className="text-sm text-text-primary font-[family-name:var(--font-body)]">
                {prof}
              </span>
            </div>
          ))}
        </div>
      </section>

      <CogDivider />

      {/* Service History */}
      <section>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // DEPLOYMENT RECORDS
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
          Service History
        </h2>
        <div className="flex flex-col gap-4">
          {SERVICE_HISTORY.map((section) => (
            <Panel key={section.title} variant="default">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-mars-light mb-2">
                {section.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{section.text}</p>
            </Panel>
          ))}
        </div>
      </section>

      <CogDivider />

      {/* Campaign History */}
      <section>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // TEMPORAL LOG
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
          Campaign History
        </h2>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border-mars via-border-default to-transparent" />

          <div className="flex flex-col gap-6">
            {ACTS.map((act) => (
              <div key={act.act} className="relative pl-16">
                {/* Act number node */}
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center border border-border-mars bg-bg-darkest">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold text-mars-base">
                    {act.act}
                  </span>
                </div>

                <Panel variant="default" hover>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary">
                        {act.title}
                      </h3>
                      <Badge rarity={act.rarity}>{act.period}</Badge>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{act.description}</p>
                    <div className="border-t border-border-subtle pt-2 mt-1">
                      <span className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-gold-muted">
                        Intel gathered:
                      </span>
                      <p className="text-sm text-mars-light font-[family-name:var(--font-heading)] italic mt-1">
                        &ldquo;{act.lesson}&rdquo;
                      </p>
                    </div>
                  </div>
                </Panel>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CogDivider />

      {/* Connect */}
      <section>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // VOX CHANNELS
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
          Connect
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/erikhernal/" },
            { label: "Lumos", href: "https://lumosco.ai" },
            { label: "Hey Agentic", href: "https://heyagentic.ai" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-border-default bg-bg-elevated/60 text-sm font-[family-name:var(--font-ui)] text-text-primary hover:border-border-mars hover:text-mars-base transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
