import Link from "next/link";
import { CharacterCard } from "@/components/CharacterCard";
import { Panel } from "@/components/ui/Panel";
import {
  CogMechanicum,
  ServoSkull,
  NavScrollIcon,
  NavVoxIcon,
  NavForgeIcon,
  NavAquilaIcon,
  NavOmniIcon,
} from "@/components/ui/MechanicusIcons";
import { CogDivider } from "@/components/ui/CogDivider";

const SECTIONS = [
  {
    href: "/grimoire",
    icon: <NavScrollIcon className="w-5 h-5" />,
    title: "The Codex",
    description: "8 chapters of GTM engineering knowledge. Cold email, Clay, deliverability, and more.",
  },
  {
    href: "/chronicles",
    icon: <NavVoxIcon className="w-5 h-5" />,
    title: "Dispatches",
    description: "Long-form reports from the frontlines of outbound and pipeline building.",
  },
  {
    href: "/quest-log",
    icon: <NavForgeIcon className="w-5 h-5" />,
    title: "Mission Log",
    description: "Daily build log. What shipped, what broke, what I learned.",
  },
  {
    href: "/character-sheet",
    icon: <NavAquilaIcon className="w-5 h-5" />,
    title: "Service Record",
    description: "Stats, credentials, campaign history, and the complete service record.",
  },
  {
    href: "/armory",
    icon: <NavOmniIcon className="w-5 h-5" />,
    title: "Arsenal",
    description: "The tool stack. Every weapon in the GTM arsenal.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <CogMechanicum className="w-10 h-10 sm:w-12 sm:h-12 text-mars-base" />
            <div>
              <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
                // COMMAND TERMINAL
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
                Command Deck
              </h1>
            </div>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-lg text-text-secondary max-w-2xl">
            Every skill, every campaign, every lesson -- documented. The GTM engineering codex,
            built in public.
          </p>
        </div>

        <CharacterCard />
      </section>

      {/* Divider */}
      <CogDivider size="lg" />

      {/* Operations Board */}
      <section className="flex flex-col gap-6">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // ACTIVE DEPLOYMENTS
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider forge-glow">
            Operations Board
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map((section) => (
            <Link key={section.href} href={section.href}>
              <Panel variant="default" hover className="h-full">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-mars-base/70">{section.icon}</span>
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
        <div className="flex items-center gap-3">
          <ServoSkull className="w-6 h-6 text-mars-base/50" />
          <div>
            <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
              // DIAGNOSTICS
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider forge-glow">
              System Status
            </h2>
          </div>
        </div>
        <Panel variant="elevated" className="hazard-stripe">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Content Engine", status: "Operational", color: "text-rarity-uncommon" },
              { label: "GTM Pipeline", status: "Operational", color: "text-rarity-uncommon" },
              { label: "Knowledge Base", status: "Building", color: "text-rarity-legendary" },
            ].map((system) => (
              <div key={system.label} className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${system.color} bg-current shadow-[0_0_6px_currentColor]`} />
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
