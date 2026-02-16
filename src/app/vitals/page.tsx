import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import { XPBar } from "@/components/ui/XPBar";
import { getCharacterStats, CURRENT_XP, TIERS } from "@/lib/rpg";
import { formatNumber } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Diagnostics",
};

export default function DiagnosticsPage() {
  const stats = getCharacterStats(CURRENT_XP);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
          Diagnostics
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          Live system metrics. XP, progression, and content stats.
        </p>
      </div>

      <div className="forge-divider" />

      {/* Current Tier */}
      <Panel variant="bordered">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-text-muted">
                Current Rank
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-mars-light">
                {stats.currentTier.title}
              </h2>
            </div>
            <div className="text-right">
              <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-mars-bright">
                {formatNumber(stats.totalXP)}
              </span>
              <span className="text-sm text-text-muted ml-1">XP</span>
            </div>
          </div>
          <XPBar
            currentXP={stats.totalXP}
            tierEnd={stats.nextTier?.xpRequired ?? null}
            tierTitle={stats.currentTier.title}
            nextTierTitle={stats.nextTier?.title ?? null}
            progress={stats.progressToNext}
          />
        </div>
      </Panel>

      {/* Stats Grid */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
          Campaign Stats
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Campaigns Audited", value: "200+" },
            { label: "Contacts Enriched", value: "5M+" },
            { label: "AI Data Points", value: "1.4M+" },
            { label: "Days in Clay", value: "187" },
          ].map((stat) => (
            <Panel key={stat.label} variant="elevated" className="text-center">
              <div className="font-[family-name:var(--font-display)] text-xl font-bold text-mars-base">
                {stat.value}
              </div>
              <div className="text-[10px] font-[family-name:var(--font-ui)] uppercase tracking-widest text-text-muted mt-1">
                {stat.label}
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* Tier Progression Map */}
      <section>
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
          Rank Progression
        </h2>
        <div className="flex flex-col gap-2">
          {TIERS.map((tier) => {
            const isCurrentOrPast = CURRENT_XP >= tier.xpRequired;
            const isCurrent = tier.level === stats.currentTier.level;
            return (
              <div
                key={tier.level}
                className={`flex items-center gap-4 px-4 py-3 border transition-all ${
                  isCurrent
                    ? "border-border-mars bg-bg-elevated/80"
                    : isCurrentOrPast
                    ? "border-border-subtle bg-bg-panel/60"
                    : "border-border-subtle/50 bg-bg-panel/30 opacity-50"
                }`}
              >
                <span className={`font-[family-name:var(--font-display)] text-sm font-bold w-6 ${
                  isCurrent ? "text-mars-bright" : isCurrentOrPast ? "text-gold-muted" : "text-text-disabled"
                }`}>
                  {tier.level}
                </span>
                <span className={`font-[family-name:var(--font-heading)] font-bold flex-1 ${
                  isCurrent ? "text-mars-light" : isCurrentOrPast ? "text-text-primary" : "text-text-disabled"
                }`}>
                  {tier.title}
                </span>
                <span className="text-xs font-[family-name:var(--font-ui)] text-text-muted">
                  {formatNumber(tier.xpRequired)} XP
                </span>
                {isCurrent && (
                  <span className="text-xs font-[family-name:var(--font-ui)] text-mars-bright uppercase tracking-wider">
                    Current
                  </span>
                )}
                {isCurrentOrPast && !isCurrent && (
                  <span className="text-xs font-[family-name:var(--font-ui)] text-rarity-uncommon">
                    &#10003;
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
