import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 border-border-default bg-bg-dark/50 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="forge-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-[family-name:var(--font-display)] text-sm text-gold-muted tracking-wider">
              ⚙ GTM CODEX ⚙
            </span>
            <span className="text-xs text-text-disabled font-[family-name:var(--font-ui)]">
              Built by Erik Hernal
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="https://linkedin.com/in/erikhernal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-[family-name:var(--font-ui)] text-text-muted hover:text-mars-base transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://lumosco.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-[family-name:var(--font-ui)] text-text-muted hover:text-mars-base transition-colors"
            >
              Lumos
            </Link>
            <Link
              href="https://heyagentic.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-[family-name:var(--font-ui)] text-text-muted hover:text-mars-base transition-colors"
            >
              Hey Agentic
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
