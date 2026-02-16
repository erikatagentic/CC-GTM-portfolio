import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

type Rarity = "common" | "uncommon" | "rare" | "very-rare" | "legendary";

interface EquipmentSlotProps {
  slot: string;
  name: string;
  description: string;
  rarity: Rarity;
  icon: string;
  className?: string;
}

const rarityBorders: Record<Rarity, string> = {
  common: "border-rarity-common/30 hover:border-rarity-common/60",
  uncommon: "border-rarity-uncommon/30 hover:border-rarity-uncommon/60",
  rare: "border-rarity-rare/30 hover:border-rarity-rare/60",
  "very-rare": "border-rarity-very-rare/30 hover:border-rarity-very-rare/60",
  legendary: "border-rarity-legendary/30 hover:border-rarity-legendary/60",
};

const rarityGlow: Record<Rarity, string> = {
  common: "",
  uncommon: "hover:shadow-[0_0_12px_rgba(26,159,60,0.15)]",
  rare: "hover:shadow-[0_0_12px_rgba(74,134,200,0.15)]",
  "very-rare": "hover:shadow-[0_0_12px_rgba(155,89,182,0.15)]",
  legendary: "hover:shadow-[0_0_16px_rgba(230,168,0,0.2)]",
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
        <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary group-hover:text-gold-light transition-colors">
          {name}
        </span>
        <span className="text-sm text-text-secondary leading-relaxed">{description}</span>
      </div>
    </div>
  );
}
