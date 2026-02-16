import type { Metadata } from "next";
import { EquipmentSlot } from "@/components/ui/EquipmentSlot";
import {
  ClayIcon,
  N8nIcon,
  InstantlyIcon,
  SalesNavIcon,
  HeyReachIcon,
  PhantomBusterIcon,
  AirtableIcon,
  CursorClaudeIcon,
} from "@/components/ui/ToolIcons";
import { CogDivider } from "@/components/ui/CogDivider";

export const metadata: Metadata = {
  title: "Arsenal",
};

const EQUIPMENT = [
  {
    slot: "Primary Weapon",
    name: "Clay",
    description: "Data enrichment engine. Waterfall logic, signal stacking, 5M+ contacts enriched. The core weapon in every GTM system I build.",
    rarity: "archaeotech" as const,
    icon: <ClayIcon />,
  },
  {
    slot: "Secondary System",
    name: "n8n",
    description: "Workflow automation. CRM syncs, Slack approvals, intent detection, multi-step orchestration. The connective tissue.",
    rarity: "relic" as const,
    icon: <N8nIcon />,
  },
  {
    slot: "Armor Plating",
    name: "Instantly",
    description: "Cold email sending infrastructure. Domain rotation, warming, deliverability monitoring. The outbound backbone.",
    rarity: "sanctified" as const,
    icon: <InstantlyIcon />,
  },
  {
    slot: "Tactical Helm",
    name: "Sales Navigator",
    description: "Targeting and lead list building. Boolean search, saved searches, account lists. Precision targeting.",
    rarity: "sanctified" as const,
    icon: <SalesNavIcon />,
  },
  {
    slot: "Interface Gauntlets",
    name: "HeyReach",
    description: "LinkedIn automation at scale. Connection requests, messaging sequences, multi-account management.",
    rarity: "sanctified" as const,
    icon: <HeyReachIcon />,
  },
  {
    slot: "Servo-Boots",
    name: "PhantomBuster",
    description: "Scraping and LinkedIn data extraction. Profile scraping, post scraping, search scraping. The data harvester.",
    rarity: "field-tested" as const,
    icon: <PhantomBusterIcon />,
  },
  {
    slot: "Augmetic Implant",
    name: "Airtable",
    description: "CRM, content OS, campaign tracking. The single source of truth for everything that matters.",
    rarity: "field-tested" as const,
    icon: <AirtableIcon />,
  },
  {
    slot: "Reliquary",
    name: "Cursor + Claude",
    description: "AI-assisted development and content creation. Building systems, analyzing data, writing at machine speed.",
    rarity: "relic" as const,
    icon: <CursorClaudeIcon />,
  },
];

export default function ArsenalPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // EQUIPMENT MANIFEST
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
          Arsenal
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          Every tool in the GTM arsenal. Equipped, battle-tested, and ranked by classification.
        </p>
      </div>

      <CogDivider />

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {EQUIPMENT.map((item) => (
          <EquipmentSlot key={item.slot} {...item} />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-4 p-4 border border-border-subtle bg-bg-panel/50">
        <span className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-text-muted mr-2">
          Classification:
        </span>
        {[
          { label: "Standard", color: "text-rarity-common" },
          { label: "Field-Tested", color: "text-rarity-uncommon" },
          { label: "Sanctified", color: "text-rarity-rare" },
          { label: "Relic", color: "text-rarity-very-rare" },
          { label: "Archaeotech", color: "text-rarity-legendary" },
        ].map((r) => (
          <span key={r.label} className={`text-xs font-[family-name:var(--font-ui)] ${r.color}`}>
            {r.label}
          </span>
        ))}
      </div>
    </div>
  );
}
