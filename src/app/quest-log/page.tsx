import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import { GradeCard } from "@/components/ui/GradeCard";
import { CogDivider } from "@/components/ui/CogDivider";

export const metadata: Metadata = {
  title: "Mission Log",
};

export default function MissionLogPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // FIELD OPERATIONS
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
          Mission Log
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          Daily build log. What shipped, what broke, what I learned. Every entry scored and graded.
        </p>
      </div>

      <CogDivider />

      {/* Preview entry */}
      <Panel variant="bordered">
        <div className="flex items-start gap-4">
          <GradeCard grade="A" label="Today" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary">
                Day 1 -- System Online
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Shipped the GTM Codex site. Service record, arsenal, codex structure.
              The system is live. Everything from here is incremental.
            </p>
            <div className="flex gap-4 mt-3">
              <span className="text-xs font-[family-name:var(--font-ui)] text-text-muted">
                +125 XP
              </span>
              <span className="text-xs font-[family-name:var(--font-ui)] text-text-disabled">
                3 items shipped
              </span>
            </div>
          </div>
        </div>
      </Panel>

      <Panel variant="elevated" className="text-center py-8">
        <p className="font-[family-name:var(--font-heading)] text-text-muted">
          Daily logging system coming in Phase 3.
        </p>
      </Panel>
    </div>
  );
}
