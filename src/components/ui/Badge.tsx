import { cn } from "@/lib/utils";

type Rarity = "standard" | "field-tested" | "sanctified" | "relic" | "archaeotech";

interface BadgeProps {
  children: React.ReactNode;
  rarity?: Rarity;
  className?: string;
}

const rarityStyles: Record<Rarity, string> = {
  standard: "border-rarity-common/50 text-rarity-common bg-rarity-common/10",
  "field-tested": "border-rarity-uncommon/50 text-rarity-uncommon bg-rarity-uncommon/10",
  sanctified: "border-rarity-rare/50 text-rarity-rare bg-rarity-rare/10",
  relic: "border-rarity-very-rare/50 text-rarity-very-rare bg-rarity-very-rare/10",
  archaeotech: "border-rarity-legendary/50 text-rarity-legendary bg-rarity-legendary/10",
};

export function Badge({ children, rarity = "standard", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium font-[family-name:var(--font-ui)] uppercase tracking-wider border",
        rarityStyles[rarity],
        className
      )}
    >
      {children}
    </span>
  );
}
