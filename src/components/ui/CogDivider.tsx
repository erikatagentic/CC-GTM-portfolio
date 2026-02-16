import { cn } from "@/lib/utils";
import { CogIcon } from "./MechanicusIcons";

interface CogDividerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const cogSizes = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export function CogDivider({ size = "md", className }: CogDividerProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-mars-dark to-mars-base" />
      <CogIcon className={cn(cogSizes[size], "text-mars-base opacity-60")} />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-mars-dark to-mars-base" />
    </div>
  );
}
