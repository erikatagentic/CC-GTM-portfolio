import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "The Crusade",
};

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
    title: "The Arch-Mechanicus",
    period: "2023 - Present",
    description: "Founded Lumos. GTM Engineer at Hey Agentic. Building systems that replace SDR headcount with automation. Clay, n8n, cold email, LinkedIn -- the full stack.",
    lesson: "The best GTM teams don't need more people. They need better plumbing.",
    rarity: "archaeotech" as const,
  },
];

export default function CrusadePage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
          The Crusade
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          From health science to GTM engineering. The full campaign chain.
        </p>
      </div>

      <div className="forge-divider" />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border-mars via-border-default to-transparent" />

        <div className="flex flex-col gap-8">
          {ACTS.map((act) => (
            <div key={act.act} className="relative pl-16">
              {/* Act number on the line */}
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center border border-border-mars bg-bg-darkest">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-mars-base">
                  {act.act}
                </span>
              </div>

              <Panel variant="default" hover>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-primary">
                      {act.title}
                    </h3>
                    <Badge rarity={act.rarity}>{act.period}</Badge>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{act.description}</p>
                  <div className="border-t border-border-subtle pt-3 mt-1">
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
    </div>
  );
}
