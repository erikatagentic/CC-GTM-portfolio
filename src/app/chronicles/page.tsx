import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";
import { CogDivider } from "@/components/ui/CogDivider";

export const metadata: Metadata = {
  title: "Dispatches",
};

export default function DispatchesPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // VOX TRANSMISSIONS
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
          Dispatches
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          Long-form reports from the frontlines of outbound and pipeline building.
        </p>
      </div>

      <CogDivider />

      <Panel variant="elevated" className="text-center py-12">
        <p className="font-[family-name:var(--font-heading)] text-lg text-text-muted">
          The first dispatch is being written...
        </p>
        <p className="text-sm text-text-disabled mt-2 font-[family-name:var(--font-ui)]">
          Check back soon.
        </p>
      </Panel>
    </div>
  );
}
