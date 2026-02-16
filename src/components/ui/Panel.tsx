import { cn } from "@/lib/utils";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered";
  hover?: boolean;
}

export function Panel({ children, className, variant = "default", hover = false }: PanelProps) {
  return (
    <div
      className={cn(
        "relative p-6 panel-industrial",
        variant === "default" && "bg-bg-panel/90 border border-border-subtle",
        variant === "elevated" && "bg-bg-elevated/90 border border-border-default shadow-forge",
        variant === "bordered" && "bg-bg-panel/90 border border-border-gold shadow-forge",
        hover && "forge-panel-glow transition-all duration-300 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
