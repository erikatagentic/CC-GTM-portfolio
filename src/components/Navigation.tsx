"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  CogMechanicum,
  NavCogIcon,
  NavVoxIcon,
  NavScrollIcon,
  NavForgeIcon,
  NavAquilaIcon,
  NavOmniIcon,
} from "@/components/ui/MechanicusIcons";

const NAV_LINKS = [
  { href: "/", label: "Command Deck", icon: <NavCogIcon /> },
  { href: "/grimoire", label: "The Codex", icon: <NavScrollIcon /> },
  { href: "/chronicles", label: "Dispatches", icon: <NavVoxIcon /> },
  { href: "/quest-log", label: "Mission Log", icon: <NavForgeIcon /> },
  { href: "/character-sheet", label: "Service Record", icon: <NavAquilaIcon /> },
  { href: "/armory", label: "Arsenal", icon: <NavOmniIcon /> },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-border-default bg-bg-dark/95 backdrop-blur-md shadow-[0_2px_12px_rgba(163,25,25,0.15),0_1px_3px_rgba(0,0,0,0.4)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <CogMechanicum className="w-7 h-7 text-mars-base group-hover:text-mars-bright transition-colors" />
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-mars-base group-hover:text-mars-bright transition-colors forge-glow">
              GTM CODEX
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 text-sm font-[family-name:var(--font-ui)] transition-colors border-b",
                    isActive
                      ? "text-mars-base border-mars-base/50"
                      : "text-text-muted hover:text-text-primary border-transparent"
                  )}
                >
                  <span className="opacity-70">{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation"
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-text-secondary transition-all",
                mobileOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-text-secondary transition-all",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-text-secondary transition-all",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border-subtle py-3 pb-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-[family-name:var(--font-ui)]",
                    isActive
                      ? "text-mars-base bg-bg-elevated/50"
                      : "text-text-muted hover:text-text-primary hover:bg-bg-elevated/30"
                  )}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
