import type { Metadata } from "next";
import { Panel } from "@/components/ui/Panel";

export const metadata: Metadata = {
  title: "Chronicles",
};

export default function ChroniclesPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-gold-light gold-glow-strong tracking-wide uppercase">
          Chronicles
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          Long-form dispatches from the frontlines of outbound and pipeline building.
        </p>
      </div>

      <div className="gold-divider" />

      <Panel variant="elevated" className="text-center py-12">
        <p className="font-[family-name:var(--font-heading)] text-lg text-text-muted">
          The first chronicle is being written...
        </p>
        <p className="text-sm text-text-disabled mt-2 font-[family-name:var(--font-ui)]">
          Check back soon.
        </p>
      </Panel>
    </div>
  );
}
