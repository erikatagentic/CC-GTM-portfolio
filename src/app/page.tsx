import { CharacterCard } from "@/components/CharacterCard";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";
import { CogMechanicum } from "@/components/ui/MechanicusIcons";
import { CogDivider } from "@/components/ui/CogDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTASection } from "@/components/ui/CTASection";
import { EquipmentSlot } from "@/components/ui/EquipmentSlot";
import { StatBlock } from "@/components/ui/StatBlock";
import {
  ClayIcon,
  N8nIcon,
  InstantlyIcon,
  SalesNavIcon,
  HeyReachIcon,
  PhantomBusterIcon,
  AirtableIcon,
  CursorClaudeIcon,
} from "@/components/ui/ToolIcons";
import { PROJECTS } from "@/lib/projects";
import { TESTIMONIALS } from "@/lib/testimonials";

const STATS = [
  { name: "Strength", abbreviation: "STR", value: 18, description: "200+ campaigns audited" },
  { name: "Dexterity", abbreviation: "DEX", value: 16, description: "Clay Top 1% (5M+ contacts)" },
  { name: "Constitution", abbreviation: "CON", value: 15, description: "3yr Head of Growth @ Cleverly" },
  { name: "Intelligence", abbreviation: "INT", value: 17, description: "GTM Engineer @ Hey Agentic" },
  { name: "Wisdom", abbreviation: "WIS", value: 14, description: "4,500+ meetings booked" },
  { name: "Charisma", abbreviation: "CHA", value: 13, description: "Founder @ Lumos" },
];

const ACTS = [
  {
    act: "I",
    title: "The Foundation",
    period: "Pre-2018",
    description: "Health science background. Learning how systems work at the biological level. Developing the analytical mindset that would later define every campaign audit.",
    lesson: "Complex systems have patterns. Find the pattern, find the lever.",
    rarity: "standard" as const,
  },
  {
    act: "II",
    title: "Product Management",
    period: "2018 - 2020",
    description: "Product management at GrowthPhysics and Medely. Building products, understanding users, learning what makes people act. Developing the product thinking that would later shape every GTM system.",
    lesson: "Users don't care about features. They care about outcomes.",
    rarity: "field-tested" as const,
  },
  {
    act: "III",
    title: "Growth Leadership",
    period: "2020 - 2023",
    description: "Head of Growth at Cleverly for 3 years. Running outbound at scale. 200+ campaigns audited. Learning what actually moves pipeline vs. what just looks good on a slide.",
    lesson: "Most outbound fails because of targeting, not copy. Fix the list first.",
    rarity: "sanctified" as const,
  },
  {
    act: "IV",
    title: "GTM Engineering",
    period: "2023 - Present",
    description: "Founded Lumos. GTM Engineer at Hey Agentic. Building systems that replace SDR headcount with automation. Clay, n8n, cold email, LinkedIn -- the full stack.",
    lesson: "The best GTM teams don't need more people. They need better plumbing.",
    rarity: "archaeotech" as const,
  },
];

const EQUIPMENT = [
  {
    slot: "Core Platform",
    name: "Clay",
    description: "Data enrichment engine. Waterfall logic, signal stacking, 5M+ contacts enriched. The core weapon in every GTM system I build.",
    rarity: "archaeotech" as const,
    icon: <ClayIcon />,
    projectLink: "#clay-enrichment",
    projectLabel: "Clay Enrichment Pipeline",
    deployments: 47,  },
  {
    slot: "Automation",
    name: "n8n",
    description: "Workflow automation. CRM syncs, Slack approvals, intent detection, multi-step orchestration. The connective tissue.",
    rarity: "relic" as const,
    icon: <N8nIcon />,
    projectLink: "#n8n-automation",
    projectLabel: "n8n Automation Stack",
    deployments: 32,  },
  {
    slot: "Email Infrastructure",
    name: "Instantly",
    description: "Cold email sending infrastructure. Domain rotation, warming, deliverability monitoring. The outbound backbone.",
    rarity: "sanctified" as const,
    icon: <InstantlyIcon />,
    projectLink: "#cold-email",
    projectLabel: "Cold Email Infrastructure",
    deployments: 85,  },
  {
    slot: "Prospecting",
    name: "Sales Navigator",
    description: "Targeting and lead list building. Boolean search, saved searches, account lists. Precision targeting.",
    rarity: "sanctified" as const,
    icon: <SalesNavIcon />,
    projectLink: "#linkedin-outbound",
    projectLabel: "LinkedIn Outbound System",
    deployments: 60,  },
  {
    slot: "LinkedIn Automation",
    name: "HeyReach",
    description: "LinkedIn automation at scale. Connection requests, messaging sequences, multi-account management.",
    rarity: "sanctified" as const,
    icon: <HeyReachIcon />,
    projectLink: "#linkedin-outbound",
    projectLabel: "LinkedIn Outbound System",
    deployments: 28,  },
  {
    slot: "Data Extraction",
    name: "PhantomBuster",
    description: "Scraping and LinkedIn data extraction. Profile scraping, post scraping, search scraping. The data harvester.",
    rarity: "field-tested" as const,
    icon: <PhantomBusterIcon />,
    deployments: 15,  },
  {
    slot: "CRM & Ops",
    name: "Airtable",
    description: "CRM, content OS, campaign tracking. The single source of truth for everything that matters.",
    rarity: "field-tested" as const,
    icon: <AirtableIcon />,
    deployments: 40,  },
  {
    slot: "AI Development",
    name: "Cursor + Claude",
    description: "AI-assisted development and content creation. Building systems, analyzing data, writing at machine speed.",
    rarity: "relic" as const,
    icon: <CursorClaudeIcon />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* ===== HERO ===== */}
      <section id="hero" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <CogMechanicum className="w-10 h-10 sm:w-12 sm:h-12 text-mars-base" />
            <div>
              <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
                // ERIK HERNAL
              </span>
              <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
                GTM Engineer
              </h1>
            </div>
          </div>
          <p className="font-[family-name:var(--font-heading)] text-lg sm:text-xl text-text-primary max-w-2xl">
            I build outbound systems that replace SDR headcount with automation.
          </p>
          <p className="text-sm text-text-muted font-[family-name:var(--font-ui)]">
            200+ campaigns. 5M+ contacts enriched. Clay Top 1%. 4,500+ meetings booked.
          </p>
        </div>

        <CharacterCard />
      </section>

      <CogDivider size="lg" />

      {/* ===== WAR CAMPAIGNS ===== */}
      <section id="work" className="flex flex-col gap-6">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // CASE STUDIES
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
            Projects
          </h2>
          <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
            Real systems built for real pipelines. Each one below is a project with outcomes,
            not a slide deck.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <div key={project.slug}>
              <ProjectCard {...project} compact={false} />
              {i < PROJECTS.length - 1 && <CogDivider size="sm" className="mt-8" />}
            </div>
          ))}
        </div>
      </section>

      <CogDivider size="lg" />

      {/* ===== ARSENAL ===== */}
      <section id="arsenal" className="flex flex-col gap-6">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // TECH STACK
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
            Tools
          </h2>
          <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary max-w-2xl">
            The GTM stack. Every tool I use daily, ranked by how much I rely on it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {EQUIPMENT.map((item) => (
            <EquipmentSlot key={item.slot} {...item} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 p-4 border border-border-subtle bg-bg-panel/50">
          <span className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-text-muted mr-2">
            Proficiency:
          </span>
          {[
            { label: "Basic", color: "text-rarity-common" },
            { label: "Familiar", color: "text-rarity-uncommon" },
            { label: "Proficient", color: "text-rarity-rare" },
            { label: "Expert", color: "text-rarity-very-rare" },
            { label: "Mastered", color: "text-rarity-legendary" },
          ].map((r) => (
            <span key={r.label} className={`text-xs font-[family-name:var(--font-ui)] ${r.color}`}>
              {r.label}
            </span>
          ))}
        </div>
      </section>

      <CogDivider size="lg" />

      {/* ===== SERVICE RECORD ===== */}
      <section id="service-record" className="flex flex-col gap-6">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // EXPERIENCE
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
            Experience
          </h2>
          <p className="mt-2 font-[family-name:var(--font-heading)] text-text-secondary">
            Skills, credentials, and career history.
          </p>
        </div>

        {/* Ability Scores */}
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // SKILLS
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
            Skills
          </h3>
          <StatBlock stats={STATS} />
        </div>

        <CogDivider size="sm" />

        {/* Campaign History Timeline */}
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // CAREER TIMELINE
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-mars-base uppercase tracking-wider mb-4">
            Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-border-mars via-border-default to-transparent" />

            <div className="flex flex-col gap-6">
              {ACTS.map((act) => (
                <div key={act.act} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center border border-border-mars bg-bg-darkest">
                    <span className="font-[family-name:var(--font-display)] text-sm font-bold text-mars-base">
                      {act.act}
                    </span>
                  </div>

                  <Panel variant="default" hover>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-primary">
                          {act.title}
                        </h4>
                        <Badge rarity={act.rarity}>{act.period}</Badge>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">{act.description}</p>
                      <div className="border-t border-border-subtle pt-2 mt-1">
                        <span className="text-xs font-[family-name:var(--font-ui)] uppercase tracking-wider text-gold-muted">
                          Takeaway:
                        </span>
                        <p className="text-sm text-mars-light font-[family-name:var(--font-heading)] italic mt-1">
                          &ldquo;{act.lesson}&rdquo;
                        </p>
                      </div>
                    </div>
                  </Panel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CogDivider size="lg" />

      {/* ===== SOCIAL PROOF ===== */}
      <section id="social-proof" className="flex flex-col gap-6">
        <div>
          <span className="text-[9px] font-[family-name:var(--font-ui)] uppercase tracking-[0.3em] text-text-muted/60 block mb-1">
            // TESTIMONIALS
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-mars-light forge-glow-strong tracking-wide uppercase">
            Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </section>

      <CogDivider size="lg" />

      {/* ===== CTA ===== */}
      <section id="contact">
        <CTASection />
      </section>
    </div>
  );
}
