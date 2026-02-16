import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import { GradeCard } from "@/components/ui/GradeCard";

export const metadata: Metadata = {
  title: "Quest Log",
};

export default function QuestLogPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gold-light gold-glow-strong tracking-wide uppercase">
          Quest Log
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          Daily build log. What shipped, what broke, what I learned. Every entry scored and graded.
        </p>
      </div>

      <div className="gold-divider" />

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
              Shipped the GTM Playbook site. Character sheet, armory, grimoire structure.
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
