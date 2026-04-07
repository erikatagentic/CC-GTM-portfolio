import { Panel } from "./Panel";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
}

export function CTASection({
  heading = "Let's Work Together",
  subtext = "Looking for a GTM engineer? Let's talk.",
}: CTASectionProps) {
  return (
    <Panel variant="bordered" className="forge-panel-glow">
      <div className="flex flex-col items-center text-center gap-4">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // GET IN TOUCH
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider forge-glow">
            {heading}
          </h2>
        </div>
        <p className="text-text-secondary font-[family-name:var(--font-heading)] max-w-lg">
          {subtext}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <a
            href="https://linkedin.com/in/erikhernal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-mars-base hover:bg-mars-bright text-text-primary font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:erik@heyagentic.ai"
            className="inline-flex items-center px-6 py-3 border border-border-default bg-bg-elevated/60 hover:border-border-mars text-text-primary font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm font-medium transition-colors"
          >
            Email
          </a>
          <a
            href="https://heyagentic.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-border-default bg-bg-elevated/60 hover:border-border-mars text-text-primary font-[family-name:var(--font-ui)] uppercase tracking-wider text-sm font-medium transition-colors"
          >
            Hey Agentic
          </a>
        </div>
      </div>
    </Panel>
  );
}
