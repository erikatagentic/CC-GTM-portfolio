# CLAUDE.md -- GTM Codex Blueprint

> Single source of truth for AI agents working on the GTM Codex portfolio site.
> Every design decision, code convention, and content reference lives here. Follow this file exactly.

---

## Workflow Rules

- **Auto-commit**: Commit after every meaningful change. Do not batch unrelated changes.
- **Auto-update docs**: After making changes, update this CLAUDE.md without being asked. Keep all sections (file tree, navigation, utility classes, component interfaces) in sync with actual code.
- **Auto-changelog**: After every commit, append an entry to `CHANGELOG.md` with the date, commit hash, and a brief description of what changed and why. Group entries by date. Use the format defined at the top of CHANGELOG.md.
- **Plans before execution**: For multi-step or ambiguous tasks, present a plan before writing code. Get approval first.
- **Push + verify**: After committing, always push to remote and confirm the push succeeded.

---

## 1. Project Overview

| Field | Value |
|-------|-------|
| **Site name** | GTM Codex |
| **Owner** | Erik Hernal |
| **Purpose** | Personal GTM engineering portfolio with Warhammer 40k Adeptus Mechanicus aesthetic |
| **Theme** | Cold metallics, Mars red accents, gothic industrial fonts, tech-priest terminology. Medium lore depth: evocative but accessible to non-40k fans. |
| **Character** | "Tech-Adept" / "Pipeline Artificer" |
| **Current XP** | 3,250 (Specialist tier) |

### External Links
- LinkedIn: `https://linkedin.com/in/erikhernal/`
- Lumos: `https://lumosco.ai`
- Hey Agentic: `https://heyagentic.ai`

### RPG Progression
The site uses a gamified progression system that tracks real work output (blog posts, chapters, commits, campaigns audited) as XP. This drives tier advancement, character stats, and the Service Record page.

---

## 2. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.6 |
| Language | TypeScript (strict mode) | 5.x |
| Styling | Tailwind CSS (CSS-first config) | v4 |
| Class Merging | clsx | 2.1.1 |
| Animation | Framer Motion | 12.x |
| Fonts | Google Fonts (Rajdhani, Roboto, Inter) | via @import |
| Package Manager | npm | -- |
| UI Components | Custom (no shadcn/ui) | -- |
| Deployment | Vercel | -- |

### Key Files
- `src/app/globals.css` -- All design tokens, utility classes, animations
- `src/app/layout.tsx` -- Root layout, metadata, fonts
- `src/lib/rpg.ts` -- RPG progression engine (tiers, XP, grades)
- `src/lib/utils.ts` -- `cn()`, `formatNumber()`, `formatDate()`

> **Companion files (load on demand):** [CLAUDE-design-system.md](CLAUDE-design-system.md) | [CLAUDE-rpg-engine.md](CLAUDE-rpg-engine.md) | [CLAUDE-career-ops.md](CLAUDE-career-ops.md)

---

## 3. Site Architecture

### Navigation

Single-page site with anchor-linked sticky nav:

| Section | Anchor | Nav Icon | Content |
|---------|--------|----------|---------|
| Hero | `#hero` | (logo) | Value prop + CharacterCard |
| War Campaigns | `#work` | NavScrollIcon | 5 full case studies |
| Arsenal | `#arsenal` | NavOmniIcon | 8 tools with rarity + legend |
| Service Record | `#service-record` | NavAquilaIcon | Ability Scores + Campaign History timeline |
| Social Proof | `#social-proof` | -- | TestimonialCards |
| Contact | `#contact` | NavCogIcon | CTASection (LinkedIn, Email, Hey Agentic) |

Redirects: `/grimoire`, `/work`, `/chronicles`, `/quest-log`, `/character-sheet`, `/armory` all -> `/`

### Section Content Summary

**Hero** -- CogMechanicum icon + "Command Deck" heading + value prop sentence + credential blurb + CharacterCard with stats and XP bar.

**War Campaigns** -- 5 project case studies (full mode): Clay Enrichment Pipeline (Archaeotech), Cold Email Infrastructure (Relic), n8n Automation Stack (Relic), LinkedIn Outbound System (Sanctified), Honey Product Work (Sanctified). Each with problem/solution/outcome sections.

**Arsenal** -- 8 tools with rarity classifications: Clay (Archaeotech), n8n (Relic), Instantly (Sanctified), Sales Navigator (Sanctified), HeyReach (Sanctified), PhantomBuster (Field-Tested), Airtable (Field-Tested), Cursor + Claude (Relic). Each links to its case study anchor. Includes classification legend.

**Service Record** -- 6 ability scores (STR/DEX/CON/INT/WIS/CHA mapped to career achievements) + Campaign History timeline (4 acts from Initiate to Arch-Mechanicus).

**Social Proof** -- TestimonialCards grid (placeholder content).

**Contact** -- CTASection with LinkedIn (primary), Email, Hey Agentic links.

---

## 4. Component Architecture

### File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (metadata, fonts, nav, footer)
│   ├── page.tsx                # Single-page site (all sections)
│   └── globals.css             # Design tokens, utilities, animations
├── components/
│   ├── Navigation.tsx          # Sticky nav + mobile hamburger ("use client"), anchor links
│   ├── Footer.tsx              # CogMechanicum logo + Aquila seal + binary cant (server)
│   ├── CharacterCard.tsx       # Hero card with stats + XP ("use client")
│   └── ui/
│       ├── Badge.tsx           # Rarity-classified labels (5 tiers)
│       ├── Panel.tsx           # Container (3 variants: default/elevated/bordered)
│       ├── XPBar.tsx           # Progression bar (Mars red gradient)
│       ├── StatBlock.tsx       # D&D-style ability score grid
│       ├── EquipmentSlot.tsx   # Tool cards with rarity borders/glows
│       ├── GradeCard.tsx       # S-D performance grade display
│       ├── MechanicusIcons.tsx # 11 Mechanicus SVG icons (CogMechanicum, ServoSkull, Aquila, 6 nav icons, CogIcon)
│       ├── CogDivider.tsx      # Cog-centered divider (replaces forge-divider), size: sm/md/lg
│       ├── ToolIcons.tsx       # 8 tool-specific SVG icons for Arsenal page
│       ├── ProjectCard.tsx     # Case study card (compact + full modes)
│       ├── TestimonialCard.tsx # Quote card for social proof
│       └── CTASection.tsx      # Reusable CTA block with contact links
└── lib/
    ├── utils.ts                # cn(), formatNumber(), formatDate()
    ├── rpg.ts                  # Tier system, XP values, character stats
    ├── projects.ts             # Project case study data + TOOL_RARITY map
    └── testimonials.ts         # Testimonial data (placeholder)
```

### Key Component Interfaces

**Panel** -- 3 variants:
- `default`: `bg-bg-panel/90 border-border-subtle`
- `elevated`: `bg-bg-elevated/90 border-border-default`
- `bordered`: `bg-bg-panel/90 border-border-gold`
- Optional `hover` prop adds `forge-panel-glow` effect

**Badge** -- 5 rarity tiers: `standard`, `field-tested`, `sanctified`, `relic`, `archaeotech`. Each maps to border + text + bg color from rarity tokens.

**XPBar** -- Props: `currentXP`, `tierEnd`, `tierTitle`, `nextTierTitle`, `progress`. Mars red gradient bar.

**StatBlock** -- Array of `{ name, abbreviation, value, description }`. Displays D&D-style scores with modifiers.

**EquipmentSlot** -- Props: `slot`, `name`, `description`, `rarity`, `icon`. Rarity-colored borders with glow on hover.

### Client vs. Server Components

**ProjectCard** -- Case study card with two modes:
- `compact: true`: designation + title + summary + tool badges + link to full case study. Used on homepage preview.
- `compact: false`: full case study with problem/solution/outcome sections. Used on /work page.
- Props: `ProjectCardProps extends ProjectData { compact?: boolean }`

**TestimonialCard** -- Quote card for social proof:
- Props: `quote`, `name`, `title`, `company`
- Uses Panel variant="bordered" with decorative quotation mark

**CTASection** -- Reusable CTA block:
- Props: optional `heading` (default "VOX CHANNEL OPEN"), optional `subtext`
- Three contact links: LinkedIn (primary mars-base), Email (secondary), Hey Agentic (secondary)

### Client vs. Server Components

- **Server (default)**: All page files, Footer, UI components (Badge, Panel, StatBlock, GradeCard, ProjectCard, TestimonialCard, CTASection)
- **Client (`"use client"`)**: Navigation (uses `usePathname`, `useState`), CharacterCard (uses Framer Motion)

---

## 5. Code Standards

### Component Rules

1. One component per file
2. Named exports: `export function ComponentName() {}`. No default exports (except page components).
3. Props interface defined in the same file, above the component
4. Use `cn()` for conditional class merging
5. Destructure props in the function signature

### TypeScript Rules

1. `strict: true`. No `any` type.
2. All props must have explicit interfaces
3. Use `React.ReactNode` for children

### Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Component files | PascalCase | `CharacterCard.tsx` |
| Component names | PascalCase | `CharacterCard` |
| Prop interfaces | PascalCase + Props | `PanelProps` |
| Utility functions | camelCase | `formatNumber()` |
| Constants | SCREAMING_SNAKE | `CURRENT_XP` |
| CSS variables | kebab-case | `--color-mars-base` |

### Import Order

```typescript
// 1. React / Next.js
import type { Metadata } from "next";

// 2. Third-party libraries
import { motion } from "framer-motion";

// 3. Internal components
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";

// 4. Lib / utils
import { cn } from "@/lib/utils";
import { getCharacterStats, CURRENT_XP } from "@/lib/rpg";
```

### Tailwind Rules

1. Use design tokens: `text-mars-base`, `bg-bg-panel`, `border-border-subtle`. Never hardcode hex in Tailwind classes.
2. Use `cn()` for conditional classes
3. Responsive: always mobile-first. Base = mobile, then `sm:`, `md:`, `lg:`.
4. Never use `@apply`. Write Tailwind classes in JSX.
5. Fonts: use `font-[family-name:var(--font-display)]` pattern

---

## 6. Responsive Design

### Breakpoints (Tailwind defaults)

| Prefix | Min-width | Target |
|--------|-----------|--------|
| (base) | 0px | Mobile |
| `sm` | 640px | Large phone |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |

### Mobile-First Rules

1. Base styles for mobile. Layer `sm:`, `md:`, `lg:` overrides.
2. Container: `max-w-6xl mx-auto px-4 sm:px-6`
3. Navigation: hamburger menu on mobile, full links on `md:` and up

### Component Behavior

| Component | Mobile | Desktop |
|-----------|--------|---------|
| Navigation | Hamburger menu | Full horizontal links |
| Stats grid | 2-col | 4-col |
| Equipment grid | 1-col | 2-col (`lg:grid-cols-2`) |
| Proficiencies | 1-col | 2-col (`sm:grid-cols-2`) |
| Stat block | 3-col | 6-col (`sm:grid-cols-6`) |

### Touch Targets

- Minimum: 44x44px
- Nav links in mobile menu: `py-2.5` with `gap-3`

---

## 7. Content Rules

- Page content is co-located in each page file (no shared `constants.ts`)
- RPG data (tiers, XP, character) lives in `src/lib/rpg.ts`
- Never hardcode hex colors in components. Use Tailwind token classes.
- Badge rarity must use the 5-tier type: `"standard" | "field-tested" | "sanctified" | "relic" | "archaeotech"`
- No invented stats or testimonials. All numbers reflect real work.

---

## 8. User Preferences

- **"Co-Founder"** not "Co-founder" (capitalize both words)
- **Limit em dashes**. Prefer periods or commas.
- **Concise copy**. Every word must earn its place.
- **Plans before execution** for multi-step work
- **Re-audit gate** -- before presenting plans or making code/config changes, re-read key files, verify assumptions, and list what you checked (file paths, field names, data confirmed). Confidence claims without specifics = gate failure. Full rule in `~/.claude/CLAUDE.md`.
- **No invented data**. Never fabricate stats, testimonials, or numbers.

---

## 9. What NOT To Do

| Anti-Pattern | Do Instead |
|-------------|-----------|
| Add `dark:` variants | Dark-only site. Use token colors directly. |
| Hardcode hex in Tailwind classes | Use semantic tokens (`text-mars-base`, `bg-bg-panel`) |
| Use `@apply` | Write Tailwind classes in JSX |
| Add barrel `index.ts` exports | Import components directly |
| Use default exports | Named exports (except page components) |
| Add unused dependencies | Only install what's needed |
| Use `any` type | Define proper interfaces |
| Add features not requested | Keep changes focused on the task |
| Use BG3/fantasy terminology | Use 40k Adeptus Mechanicus terms (see Theme section) |

---

## 10. Gotchas & Known Issues

- **Tailwind v4 `@theme inline`**: Color tokens must be registered in the `@theme inline {}` block in `globals.css` to be usable as Tailwind classes (e.g., `bg-bg-panel`, `text-mars-base`).
- **Framer Motion + SSR**: Components using `motion.*` must be in `"use client"` files. Server Components cannot use Framer Motion directly.
- **robots.txt in dev**: Next.js metadata API `robots.ts` only works in production builds. Dev server returns 404.
- **Dev server lock file**: If `.next/dev/lock` exists from a previous instance, kill the old process first. Running two `next dev` instances causes conflicts.
- **Font syntax**: Fonts are loaded via Google Fonts `@import` in globals.css, not `next/font`. Reference in Tailwind as `font-[family-name:var(--font-display)]`.
- **`cn()` uses clsx only**: Unlike other projects, this repo uses `clsx` directly without `tailwind-merge`. Conflicting classes are not auto-resolved.

---

*End of CLAUDE.md*
