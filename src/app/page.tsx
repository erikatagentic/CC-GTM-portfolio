import Link from "next/link";
import { CharacterCard } from "@/components/CharacterCard";
import { Panel } from "@/components/ui/Panel";
import { CogMechanicum, ServoSkull } from "@/components/ui/MechanicusIcons";
import { CogDivider } from "@/components/ui/CogDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/ui/CTASection";
import { PROJECTS } from "@/lib/projects";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <CogMechanicum className="w-10 h-10 sm:w-12 sm:h-12 text-mars-base" />
            <div>
              <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
                // TRANSMISSION INCOMING
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
                Command Deck
              </h1>
            </div>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-lg sm:text-xl text-text-primary max-w-2xl">
            I build outbound systems that replace SDR headcount with automation.
          </p>
          <p className="text-sm text-text-muted font-[family-name:var(--font-ui)]">
            200+ campaigns. 5M+ contacts enriched. Clay Top 1%. Ex-PM at Honey (PayPal $4B).
          </p>
        </div>

        <CharacterCard />
      </section>

      {/* Divider */}
      <CogDivider size="lg" />

      {/* Projects Preview */}
      <section className="flex flex-col gap-6">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // WAR CAMPAIGNS
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider forge-glow">
            Field Reports
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} {...project} compact />
          ))}
        </div>
        <Link
          href="/work"
          className="text-sm font-[family-name:var(--font-ui)] text-mars-base hover:text-mars-bright transition-colors uppercase tracking-wider"
        >
          View all campaigns &rarr;
        </Link>
      </section>

      {/* Divider */}
      <CogDivider />

      {/* Social Proof */}
      <section className="flex flex-col gap-6">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // COMMENDATIONS FROM THE FIELD
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider forge-glow">
            Field Commendations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <CogDivider />

      {/* CTA */}
      <section>
        <CTASection />
      </section>

      {/* Divider */}
      <CogDivider size="sm" />

      {/* System Status (moved to bottom) */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <ServoSkull className="w-6 h-6 text-mars-base/50" />
          <div>
            <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
              // DIAGNOSTICS
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider forge-glow">
              System Status
            </h2>
          </div>
        </div>
        <Panel variant="elevated" className="hazard-stripe">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Content Engine", status: "Operational", color: "text-rarity-uncommon" },
              { label: "GTM Pipeline", status: "Operational", color: "text-rarity-uncommon" },
              { label: "Knowledge Base", status: "Building", color: "text-rarity-legendary" },
            ].map((system) => (
              <div key={system.label} className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${system.color} bg-current shadow-[0_0_6px_currentColor]`} />
                <div>
                  <div className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-text-muted">
                    {system.label}
                  </div>
                  <div className={`text-sm font-[family-name:var(--font-ui)] font-medium ${system.color}`}>
                    {system.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </section>
    </div>
  );
}
