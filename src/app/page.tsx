import Link from "next/link";
import { CharacterCard } from "@/components/CharacterCard";
import { Panel } from "@/components/ui/Panel";

const SECTIONS = [
  {
    href: "/grimoire",
    icon: "📡",
    title: "The Codex",
    description: "8 chapters of GTM engineering knowledge. Cold email, Clay, deliverability, and more.",
  },
  {
    href: "/chronicles",
    icon: "📋",
    title: "Dispatches",
    description: "Long-form reports from the frontlines of outbound and pipeline building.",
  },
  {
    href: "/quest-log",
    icon: "⚔️",
    title: "Mission Log",
    description: "Daily build log. What shipped, what broke, what I learned.",
  },
  {
    href: "/character-sheet",
    icon: "🎖️",
    title: "Service Record",
    description: "Stats, credentials, and the complete service history.",
  },
  {
    href: "/armory",
    icon: "🔧",
    title: "Arsenal",
    description: "The tool stack. Every weapon in the GTM arsenal.",
  },
  {
    href: "/arc",
    icon: "🗺️",
    title: "The Crusade",
    description: "From health science to GTM engineering. The full campaign chain.",
  },
  {
    href: "/vitals",
    icon: "📊",
    title: "Diagnostics",
    description: "Live stats. XP, progression, content metrics.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
            Command Deck
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg text-text-secondary max-w-2xl">
            Every skill, every campaign, every lesson -- documented. The GTM engineering codex,
            built in public.
          </p>
        </div>

        <CharacterCard />
      </section>

      {/* Divider */}
      <div className="forge-divider" />

      {/* Operations Board */}
      <section className="flex flex-col gap-6">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider">
          Operations Board
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map((section) => (
            <Link key={section.href} href={section.href}>
              <Panel variant="default" hover className="h-full">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{section.icon}</span>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-text-primary">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </Panel>
            </Link>
          ))}
        </div>
      </section>

      {/* System Status */}
      <section className="flex flex-col gap-4">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider">
          System Status
        </h2>
        <Panel variant="elevated">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Content Engine", status: "Operational", color: "text-rarity-uncommon" },
              { label: "GTM Pipeline", status: "Operational", color: "text-rarity-uncommon" },
              { label: "Knowledge Base", status: "Building", color: "text-rarity-legendary" },
            ].map((system) => (
              <div key={system.label} className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${system.color} bg-current`} />
                <div>
                  <div className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-text-muted">
                    {system.label}
                  </div>
                  <div className={`text-sm font-[family-name:var(--font-ui)] font-medium ${system.color}`}>
                    {system.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </div>
  );
}
