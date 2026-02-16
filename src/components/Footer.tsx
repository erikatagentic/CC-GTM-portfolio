import Link from "next/link";
import { CogMechanicum, Aquila } from "@/components/ui/MechanicusIcons";
import { CogDivider } from "@/components/ui/CogDivider";

export function Footer() {
  return (
    <footer className="border-t-2 border-border-default bg-bg-dark/50 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <CogDivider size="lg" className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2">
              <CogMechanicum className="w-5 h-5 text-gold-muted" />
              <span className="font-[family-name:var(--font-display)] text-sm text-gold-muted tracking-wider">
                GTM CODEX
              </span>
              <CogMechanicum className="w-5 h-5 text-gold-muted" />
            </div>
            <Aquila className="w-10 h-6 text-gold-muted/40" />
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
        {/* Binary cant decoration */}
        <div className="mt-6 overflow-hidden text-[7px] font-mono tracking-[0.2em] text-mars-base/[0.04] leading-tight select-none" aria-hidden="true">
          01001101 01000101 01000011 01001000 01000001 01001110 01001001 01000011 01010101 01010011 00100000 01001101 01000101 01000011 01001000 01000001 01001110 01001001 01000011 01010101 01010011
        </div>
      </div>
    </footer>
  );
}
