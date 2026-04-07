import type { Metadata } from "next";
import { CogDivider } from "@/components/ui/CogDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "War Campaigns",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <div>
        <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
          // FIELD REPORTS
        </span>
        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
          War Campaigns
        </h1>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
          Real systems built for real pipelines. Each campaign below is a project with outcomes,
          not a slide deck.
        </p>
      </div>

      <CogDivider />

      {/* Case Studies */}
      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <div key={project.slug}>
            <ProjectCard {...project} compact={false} />
            {i < PROJECTS.length - 1 && <CogDivider size="sm" className="mt-8" />}
          </div>
        ))}
      </div>
    </div>
  );
}
