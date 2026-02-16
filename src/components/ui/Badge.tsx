import { cn } from "@/lib/utils";

type Rarity = "common" | "uncommon" | "rare" | "very-rare" | "legendary";

interface BadgeProps {
  children: React.ReactNode;
  rarity?: Rarity;
  className?: string;
}

const rarityStyles: Record<Rarity, string> = {
  common: "border-rarity-common/50 text-rarity-common bg-rarity-common/10",
  uncommon: "border-rarity-uncommon/50 text-rarity-uncommon bg-rarity-uncommon/10",
  rare: "border-rarity-rare/50 text-rarity-rare bg-rarity-rare/10",
  "very-rare": "border-rarity-very-rare/50 text-rarity-very-rare bg-rarity-very-rare/10",
  legendary: "border-rarity-legendary/50 text-rarity-legendary bg-rarity-legendary/10",
};

export function Badge({ children, rarity = "common", className }: BadgeProps) {
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
