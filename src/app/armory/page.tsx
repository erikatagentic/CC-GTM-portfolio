import type { Metadata } from "next";
import { EquipmentSlot } from "@/components/ui/EquipmentSlot";

export const metadata: Metadata = {
  title: "The Armory",
};

const EQUIPMENT = [
  {
    slot: "Main Hand",
    name: "Clay",
    description: "Data enrichment engine. Waterfall logic, signal stacking, 5M+ contacts enriched. The core weapon in every GTM system I build.",
    rarity: "legendary" as const,
    icon: "🏺",
  },
  {
    slot: "Off Hand",
    name: "n8n",
    description: "Workflow automation. CRM syncs, Slack approvals, intent detection, multi-step orchestration. The connective tissue.",
    rarity: "very-rare" as const,
    icon: "🔗",
  },
  {
    slot: "Armor",
    name: "Instantly",
    description: "Cold email sending infrastructure. Domain rotation, warming, deliverability monitoring. The outbound backbone.",
    rarity: "rare" as const,
    icon: "📧",
  },
  {
    slot: "Helm",
    name: "Sales Navigator",
    description: "Targeting and lead list building. Boolean search, saved searches, account lists. Precision targeting.",
    rarity: "rare" as const,
    icon: "🔍",
  },
  {
    slot: "Gauntlets",
    name: "HeyReach",
    description: "LinkedIn automation at scale. Connection requests, messaging sequences, multi-account management.",
    rarity: "rare" as const,
    icon: "🤝",
  },
  {
    slot: "Boots",
    name: "PhantomBuster",
    description: "Scraping and LinkedIn data extraction. Profile scraping, post scraping, search scraping. The data harvester.",
    rarity: "uncommon" as const,
    icon: "👻",
  },
  {
    slot: "Ring",
    name: "Airtable",
    description: "CRM, content OS, campaign tracking. The single source of truth for everything that matters.",
    rarity: "uncommon" as const,
    icon: "💍",
  },
  {
    slot: "Amulet",
    name: "Cursor + Claude",
    description: "AI-assisted development and content creation. Building systems, analyzing data, writing at machine speed.",
    rarity: "very-rare" as const,
    icon: "🔮",
  },
];

export default function ArmoryPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gold-light gold-glow-strong tracking-wide uppercase">
          The Armory
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          Every tool in the GTM arsenal. Equipped, battle-tested, and ranked by rarity.
        </p>
      </div>

      <div className="gold-divider" />

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {EQUIPMENT.map((item) => (
          <EquipmentSlot key={item.slot} {...item} />
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-4 p-4 border border-border-subtle bg-bg-panel/50">
        <span className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-text-muted mr-2">
          Rarity:
        </span>
        {[
          { label: "Common", color: "text-rarity-common" },
          { label: "Uncommon", color: "text-rarity-uncommon" },
          { label: "Rare", color: "text-rarity-rare" },
          { label: "Very Rare", color: "text-rarity-very-rare" },
          { label: "Legendary", color: "text-rarity-legendary" },
        ].map((r) => (
          <span key={r.label} className={`text-xs font-[family-name:var(--font-ui)] ${r.color}`}>
            {r.label}
          </span>
        ))}
      </div>
    </div>
  );
}
