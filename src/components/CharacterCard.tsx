import { getCharacterStats, CURRENT_XP, CHARACTER_NAME } from "@/lib/rpg";
import { Badge } from "./ui/Badge";
import { XPBar } from "./ui/XPBar";

export function CharacterCard() {
  const stats = getCharacterStats(CURRENT_XP);

  return (
    <div className="relative border border-border-mars bg-bg-panel/90 p-6 sm:p-8 animate-pulse-forge">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-mars-bright" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-mars-bright" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-mars-bright" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-mars-bright" />

      <div className="flex flex-col gap-4">
        {/* Name + Class */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-mars-light forge-glow-strong tracking-wide">
              {CHARACTER_NAME}
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-sm text-text-secondary mt-0.5">
              {stats.className} &middot; {stats.subclass}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge rarity="archaeotech">
              Tier {stats.currentTier.level}
            </Badge>
            <Badge rarity="sanctified">
              {stats.currentTier.title}
            </Badge>
          </div>
        </div>

        {/* Divider */}
        <div className="forge-divider" />

        {/* XP Bar */}
        <XPBar
          currentXP={stats.totalXP}
          tierEnd={stats.nextTier?.xpRequired ?? null}
          tierTitle={stats.currentTier.title}
          nextTierTitle={stats.nextTier?.title ?? null}
          progress={stats.progressToNext}
        />

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
          {[
            { label: "Campaigns Audited", value: "200+" },
            { label: "Contacts Enriched", value: "5M+" },
            { label: "AI Data Points", value: "1.4M+" },
            { label: "Clay Days", value: "187" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-2 border border-border-subtle bg-bg-elevated/50">
              <div className="font-[family-name:var(--font-display)] text-lg font-bold text-mars-base">
                {stat.value}
              </div>
              <div className="text-[10px] font-[family-name:var(--font-ui)] uppercase tracking-widest text-text-muted mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
