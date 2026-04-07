import Link from "next/link";
import { cn } from "@/lib/utils";
import { Panel } from "./Panel";
import { Badge } from "./Badge";
import type { ProjectData } from "@/lib/projects";
import { TOOL_RARITY } from "@/lib/projects";

interface ProjectCardProps extends ProjectData {
  compact?: boolean;
}

export function ProjectCard({
  designation,
  title,
  context,
  summary,
  problem,
  solution,
  outcome,
  tools,
  rarity,
  slug,
  compact = false,
}: ProjectCardProps) {
  const content = (
    <Panel hover={compact} className={cn(compact && "h-full")}>
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-border-subtle bg-bg-darkest font-[family-name:var(--font-display)] text-lg font-bold text-mars-base">
            {designation}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary">
                {title}
              </h3>
              <Badge rarity={rarity}>{rarity.replace("-", " ")}</Badge>
            </div>
            <span className="text-xs font-[family-name:var(--font-ui)] text-text-muted">
              {context}
            </span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-text-secondary leading-relaxed">{summary}</p>

        {/* Full case study sections (non-compact only) */}
        {!compact && (
          <div className="flex flex-col gap-4 mt-2">
            {problem && (
              <div>
                <span className="text-[10px] font-[family-name:var(--font-ui)] uppercase tracking-widest text-gold-muted block mb-1">
                  // PROBLEM
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">{problem}</p>
              </div>
            )}
            {solution && (
              <div>
                <span className="text-[10px] font-[family-name:var(--font-ui)] uppercase tracking-widest text-gold-muted block mb-1">
                  // SOLUTION
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">{solution}</p>
              </div>
            )}
            {outcome && (
              <div>
                <span className="text-[10px] font-[family-name:var(--font-ui)] uppercase tracking-widest text-gold-muted block mb-1">
                  // OUTCOME
                </span>
                <p className="text-sm text-mars-light leading-relaxed font-medium">{outcome}</p>
              </div>
            )}
          </div>
        )}

        {/* Tool badges */}
        {tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {tools.map((tool) => (
              <Badge key={tool} rarity={TOOL_RARITY[tool] ?? "standard"}>
                {tool}
              </Badge>
            ))}
          </div>
        )}

        {/* Compact: link to full case study */}
        {compact && (
          <span className="text-xs font-[family-name:var(--font-ui)] text-mars-base group-hover:text-mars-bright transition-colors mt-1">
            Read field report &rarr;
          </span>
        )}
      </div>
    </Panel>
  );

  if (compact) {
    return (
      <Link href={`/work#${slug}`} className="group block">
        {content}
      </Link>
    );
  }

  return <div id={slug}>{content}</div>;
}
