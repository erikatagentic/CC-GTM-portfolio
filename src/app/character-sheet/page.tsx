import type { Metadata } from "next";
import { StatBlock } from "@/components/ui/StatBlock";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { XPBar } from "@/components/ui/XPBar";
import { getCharacterStats, CURRENT_XP, CHARACTER_NAME } from "@/lib/rpg";

export const metadata: Metadata = {
  title: "Character Sheet",
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

const BACKSTORY = [
  {
    title: "Origin",
    text: "Started in health science, pivoted to product management. Spent years at Honey (acquired by PayPal), GrowthPhysics, and Medely learning how products grow.",
  },
  {
    title: "The Growth Arc",
    text: "Became Head of Growth at Cleverly for 3 years. Ran outbound at scale. Learned what works and what doesn't through 200+ campaign audits and millions of data points.",
  },
  {
    title: "Current Quest",
    text: "Founded Lumos, a GTM engineering agency. Building outbound systems that replace SDR headcount with automation. Clay, n8n, cold email, LinkedIn -- the full stack. Also serving as GTM Engineer at Hey Agentic.",
  },
];

export default function CharacterSheetPage() {
  const stats = getCharacterStats(CURRENT_XP);

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gold-light gold-glow-strong tracking-wide uppercase">
          Character Sheet
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary">
          The full stat block. Credentials, skills, and backstory.
        </p>
      </div>

      {/* Name plate */}
      <Panel variant="bordered">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gold-light tracking-wide">
              {CHARACTER_NAME}
            </h2>
            <p className="text-sm text-text-secondary font-[family-name:var(--font-heading)] mt-1">
              Level {stats.currentTier.level} {stats.className} &middot; {stats.subclass}
            </p>
          </div>
          <div className="flex gap-2">
            <Badge rarity="legendary">Tier {stats.currentTier.level}</Badge>
            <Badge rarity="rare">{stats.currentTier.title}</Badge>
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
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold-base uppercase tracking-wider mb-4">
          Ability Scores
        </h2>
        <StatBlock stats={STATS} />
      </section>

      <div className="gold-divider" />

      {/* Proficiencies */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold-base uppercase tracking-wider mb-4">
          Proficiencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PROFICIENCIES.map((prof) => (
            <div
              key={prof}
              className="flex items-center gap-2 px-3 py-2 border border-border-subtle bg-bg-panel/60"
            >
              <span className="text-gold-base text-sm">&#9670;</span>
              <span className="text-sm text-text-primary font-[family-name:var(--font-body)]">
                {prof}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />

      {/* Backstory */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold-base uppercase tracking-wider mb-4">
          Backstory
        </h2>
        <div className="flex flex-col gap-4">
          {BACKSTORY.map((section) => (
            <Panel key={section.title} variant="default">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gold-light mb-2">
                {section.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{section.text}</p>
            </Panel>
          ))}
        </div>
      </section>

      <div className="gold-divider" />

      {/* Connect */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gold-base uppercase tracking-wider mb-4">
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
              className="px-4 py-2 border border-border-default bg-bg-elevated/60 text-sm font-[family-name:var(--font-ui)] text-text-primary hover:border-border-gold hover:text-gold-base transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
