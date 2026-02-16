import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

type Rarity = "standard" | "field-tested" | "sanctified" | "relic" | "archaeotech";

interface EquipmentSlotProps {
  slot: string;
  name: string;
  description: string;
  rarity: Rarity;
  icon: React.ReactNode;
  className?: string;
}

const rarityBorders: Record<Rarity, string> = {
  standard: "border-rarity-common/30 hover:border-rarity-common/60",
  "field-tested": "border-rarity-uncommon/30 hover:border-rarity-uncommon/60",
  sanctified: "border-rarity-rare/30 hover:border-rarity-rare/60",
  relic: "border-rarity-very-rare/30 hover:border-rarity-very-rare/60",
  archaeotech: "border-rarity-legendary/30 hover:border-rarity-legendary/60",
};

const rarityGlow: Record<Rarity, string> = {
  standard: "",
  "field-tested": "hover:shadow-[0_0_12px_rgba(38,166,154,0.15)]",
  sanctified: "hover:shadow-[0_0_12px_rgba(92,107,192,0.15)]",
  relic: "hover:shadow-[0_0_12px_rgba(171,71,188,0.15)]",
  archaeotech: "hover:shadow-[0_0_16px_rgba(212,175,55,0.2)]",
};

export function EquipmentSlot({
  slot,
  name,
  description,
  rarity,
  icon,
  className,
}: EquipmentSlotProps) {
  return (
    <div
      className={cn(
        "group flex gap-4 border bg-bg-panel/80 p-4 transition-all duration-300",
        rarityBorders[rarity],
        rarityGlow[rarity],
        className
      )}
    >
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border border-border-subtle bg-bg-darkest text-2xl">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-[family-name:var(--font-ui)] uppercase tracking-widest text-text-muted">
            {slot}
          </span>
          <Badge rarity={rarity}>{rarity.replace("-", " ")}</Badge>
        </div>
        <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary group-hover:text-mars-light transition-colors">
          {name}
        </span>
        <span className="text-sm text-text-secondary leading-relaxed">{description}</span>
      </div>
    </div>
  );
}
