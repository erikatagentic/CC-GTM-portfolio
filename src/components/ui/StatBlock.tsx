import { cn } from "@/lib/utils";

interface Stat {
  name: string;
  abbreviation: string;
  value: number;
  description: string;
}

interface StatBlockProps {
  stats: Stat[];
  className?: string;
}

function getModifier(value: number): string {
  const mod = Math.floor((value - 10) / 2);
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function StatBlock({ stats, className }: StatBlockProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-3 sm:grid-cols-6", className)}>
      {stats.map((stat) => (
        <div
          key={stat.abbreviation}
          className="group relative flex flex-col items-center border border-border-default bg-bg-elevated/80 p-3 text-center transition-all duration-300 hover:border-border-mars"
        >
          <span className="text-[10px] font-[family-name:var(--font-ui)] uppercase tracking-widest text-text-muted">
            {stat.abbreviation}
          </span>
          <span className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold text-mars-light">
            {stat.value}
          </span>
          <span className="text-xs font-[family-name:var(--font-ui)] text-mars-base">
            {getModifier(stat.value)}
          </span>
          {/* Tooltip */}
          <div className="pointer-events-none absolute -bottom-12 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap bg-bg-darkest/95 px-3 py-1.5 text-xs text-text-secondary opacity-0 border border-border-subtle transition-opacity group-hover:opacity-100">
            <span className="font-semibold text-text-primary">{stat.name}:</span>{" "}
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  );
}
