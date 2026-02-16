import { cn, formatNumber } from "@/lib/utils";

interface XPBarProps {
  currentXP: number;
  tierEnd: number | null;
  tierTitle: string;
  nextTierTitle: string | null;
  progress: number;
  className?: string;
}

export function XPBar({
  currentXP,
  tierEnd,
  tierTitle,
  nextTierTitle,
  progress,
  className,
}: XPBarProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-gold-base">
          {tierTitle}
        </span>
        {nextTierTitle && (
          <span className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-text-muted">
            {nextTierTitle}
          </span>
        )}
      </div>
      <div className="relative h-3 w-full overflow-hidden border border-border-default bg-bg-darkest">
        <div
          className="h-full bg-gradient-to-r from-gold-muted via-gold-base to-gold-bright transition-all duration-700 ease-out"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-[11px] font-[family-name:var(--font-ui)] text-text-muted">
          {formatNumber(currentXP)} XP
        </span>
        {tierEnd && (
          <span className="text-[11px] font-[family-name:var(--font-ui)] text-text-disabled">
            {formatNumber(tierEnd)} XP
          </span>
        )}
      </div>
    </div>
  );
}
