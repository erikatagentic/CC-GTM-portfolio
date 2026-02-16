import { cn } from "@/lib/utils";
import type { Grade } from "@/lib/rpg";

interface GradeCardProps {
  grade: Grade;
  label?: string;
  className?: string;
}

const gradeStyles: Record<Grade, string> = {
  S: "text-rarity-legendary border-rarity-legendary/50 bg-rarity-legendary/10",
  A: "text-rarity-uncommon border-rarity-uncommon/50 bg-rarity-uncommon/10",
  B: "text-rarity-rare border-rarity-rare/50 bg-rarity-rare/10",
  C: "text-text-secondary border-border-default bg-bg-elevated/50",
  D: "text-text-muted border-border-subtle bg-bg-panel/50",
};

export function GradeCard({ grade, label, className }: GradeCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center border p-3 w-16",
        gradeStyles[grade],
        className
      )}
    >
      <span className="font-[family-name:var(--font-display)] text-2xl font-bold">{grade}</span>
      {label && (
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-widest opacity-70 mt-0.5">
          {label}
        </span>
      )}
    </div>
  );
}
