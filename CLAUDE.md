# CLAUDE.md — GTM Codex Blueprint

> Single source of truth for AI agents working on the GTM Codex portfolio site.
> Every design decision, code convention, and content reference lives here. Follow this file exactly.

---

## Workflow Rules

- **Auto-commit**: Commit after every meaningful change. Do not batch unrelated changes.
- **Auto-update docs**: After making changes, update this CLAUDE.md without being asked.
- **Plans before execution**: For multi-step or ambiguous tasks, present a plan before writing code. Get approval first.

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
The site uses a gamified progression system that tracks real work output (blog posts, chapters, commits, campaigns audited) as XP. This drives tier advancement, character stats, and the Diagnostics page.

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
| Package Manager | npm | — |
| UI Components | Custom (no shadcn/ui) | — |
| Deployment | Vercel | — |

### Key Files
- `src/app/globals.css` — All design tokens, utility classes, animations
- `src/app/layout.tsx` — Root layout, metadata, fonts
- `src/lib/rpg.ts` — RPG progression engine (tiers, XP, grades)
- `src/lib/utils.ts` — `cn()`, `formatNumber()`, `formatDate()`

---

## 3. Design System

### 3.1 Color Tokens

All colors defined as CSS custom properties in `src/app/globals.css` via `@theme inline {}`.

**Backgrounds (cold dark metallics):**
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-darkest` | `#0a0b0d` | Page background, body |
| `bg-dark` | `#12141a` | Navigation, footer |
| `bg-panel` | `#1a1c24` | Content panels |
| `bg-elevated` | `#20242e` | Hover states, elevated cards |
| `bg-surface` | `#2a2f3d` | Surface elements |

**Mars Red (primary accent):**
| Token | Hex | Usage |
|-------|-----|-------|
| `mars-dark` | `#5c1a1a` | XP bar gradient start |
| `mars-base` | `#a31919` | Default accent, active links, logo |
| `mars-bright` | `#d32f2f` | Hover states, glow effects |
| `mars-light` | `#e57373` | Text highlights, stat values |

**Metallic Gold (secondary, cooler/industrial):**
| Token | Hex | Usage |
|-------|-----|-------|
| `gold-muted` | `#6b6347` | Subtle accents |
| `gold-base` | `#b8a869` | Secondary accent |
| `gold-bright` | `#d4af37` | Bright accents, archaeotech rarity |
| `gold-light` | `#e8d69a` | Light gold |
| `gold-cream` | `#d8d4c8` | Off-white text tone |

**Tech Teal (HUD/data elements):**
| Token | Hex | Usage |
|-------|-----|-------|
| `tech-dark` | `#1a4d4d` | Dark teal accents |
| `tech-base` | `#26a69a` | Data readouts, field-tested rarity |
| `tech-bright` | `#4dd0e1` | Scanlines, grid overlays |

**Text (cool greys):**
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#d8d4c8` | Main body text |
| `text-secondary` | `#b4aea0` | Descriptions, subtitles |
| `text-muted` | `#8a8578` | Labels, inactive nav |
| `text-disabled` | `#605c52` | Disabled, future items |
| `text-dark` | `#4a4640` | Darkest text |

**Borders:**
| Token | Hex | Usage |
|-------|-----|-------|
| `border-subtle` | `#2a2f3d` | Panel borders, nav border |
| `border-default` | `#3d4252` | Elevated card borders |
| `border-gold` | `#b8a869` | "Bordered" panel variant |
| `border-bright` | `#d4af37` | Bright accent borders |
| `border-mars` | `#a31919` | Active/current item borders |

### 3.2 Rarity Classification System

5-tier classification used by Badge, EquipmentSlot, and page content:

| Tier Name | Type Value | Color Token | Hex |
|-----------|-----------|-------------|-----|
| Standard | `"standard"` | `rarity-common` | `#9e9e9e` |
| Field-Tested | `"field-tested"` | `rarity-uncommon` | `#26a69a` |
| Sanctified | `"sanctified"` | `rarity-rare` | `#5c6bc0` |
| Relic | `"relic"` | `rarity-very-rare` | `#ab47bc` |
| Archaeotech | `"archaeotech"` | `rarity-legendary` | `#d4af37` |

TypeScript type: `type Rarity = "standard" | "field-tested" | "sanctified" | "relic" | "archaeotech"`

### 3.3 Typography

| Variable | Font | Usage |
|----------|------|-------|
| `--font-display` | Rajdhani | Page titles, large headings |
| `--font-heading` | Rajdhani | Section headings, subheadings |
| `--font-body` | Roboto | Body text, descriptions |
| `--font-ui` | Inter | Labels, badges, navigation, small text |

**Usage pattern in Tailwind:** `font-[family-name:var(--font-display)]`

### 3.4 Spacing

- **Grid**: 8px base
- **Container**: `max-w-6xl mx-auto px-4 sm:px-6`
- **Main padding**: `py-10`
- **Panel padding**: `p-6`
- **Section gaps**: `gap-10` between major sections
- **Card gaps**: `gap-4` in grids

### 3.5 Utility Classes

| Class | Effect |
|-------|--------|
| `.forge-glow` | Mars red text-shadow (8px blur, 40% opacity) |
| `.forge-glow-strong` | Stronger Mars red text-shadow (12px + 24px dual blur) |
| `.forge-panel-glow` | Hover: Mars red + teal box-shadow on panels |
| `.metal-overlay` | Pseudo-element with repeating teal scanlines (2% opacity) |
| `.forge-divider` | 1px horizontal gradient: transparent → Mars red → gold → Mars red → transparent |
| `.tech-grid` | Pseudo-element with 20x20px teal grid (5% opacity) |
| `.animate-pulse-forge` | 3s infinite Mars red + teal pulsing box-shadow |
| `.animate-fade-in` | 0.5s ease-out fade-in with 8px Y-translate |

---

## 4. Site Architecture

### Navigation

8 pages accessible via sticky top navbar:

| Route | Label | Icon | Status |
|-------|-------|------|--------|
| `/` | Command Deck | ⚙️ | Complete |
| `/grimoire` | The Codex | 📡 | Scaffolded (chapters listed, content "classified") |
| `/chronicles` | Dispatches | 📋 | Placeholder |
| `/quest-log` | Mission Log | ⚔️ | Placeholder |
| `/character-sheet` | Service Record | 🎖️ | Complete |
| `/armory` | Arsenal | 🔧 | Complete |
| `/arc` | The Crusade | 🗺️ | Complete |
| `/vitals` | Diagnostics | 📊 | Complete |

### Page Content Summary

**Command Deck** (`/`) — CharacterCard hero + Operations Board (7 section cards) + System Status indicators.

**The Codex** (`/grimoire`) — 8 GTM knowledge chapters: Cold Email Fundamentals, Deliverability, Clay & Data Enrichment, Campaign Architecture, LinkedIn Outbound, Automation with n8n, GTM Engineering, ICP & Targeting. All marked "classified" pending content.

**Service Record** (`/character-sheet`) — Nameplate with tier badges, XP bar, 6 ability scores (STR/DEX/CON/INT/WIS/CHA mapped to career achievements), 8 specializations, service history (Recruitment / Campaign History / Current Deployment), connect links.

**Arsenal** (`/armory`) — 8 tools with rarity classifications: Clay (Archaeotech), n8n (Relic), Instantly (Sanctified), Sales Navigator (Sanctified), HeyReach (Sanctified), PhantomBuster (Field-Tested), Airtable (Field-Tested), Cursor + Claude (Relic). Includes classification legend.

**The Crusade** (`/arc`) — 4-act career timeline: The Initiate (Pre-2018), The Forge Apprentice (2018-2020), The Campaign Marshal (2020-2023), The Arch-Mechanicus (2023-Present). Each with description and "Intel gathered" lesson.

**Diagnostics** (`/vitals`) — Current rank display, XP bar, campaign stats grid (4 metrics), rank progression ladder (all 10 tiers with current/past indicators).

---

## 5. Component Architecture

### File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (metadata, fonts, nav, footer)
│   ├── page.tsx                # Command Deck (home)
│   ├── globals.css             # Design tokens, utilities, animations
│   ├── grimoire/page.tsx       # The Codex
│   ├── chronicles/page.tsx     # Dispatches
│   ├── quest-log/page.tsx      # Mission Log
│   ├── character-sheet/page.tsx # Service Record
│   ├── armory/page.tsx         # Arsenal
│   ├── arc/page.tsx            # The Crusade
│   └── vitals/page.tsx         # Diagnostics
├── components/
│   ├── Navigation.tsx          # Sticky nav + mobile hamburger ("use client")
│   ├── Footer.tsx              # Brand + external links (server)
│   ├── CharacterCard.tsx       # Hero card with stats + XP ("use client")
│   └── ui/
│       ├── Badge.tsx           # Rarity-classified labels (5 tiers)
│       ├── Panel.tsx           # Container (3 variants: default/elevated/bordered)
│       ├── XPBar.tsx           # Progression bar (Mars red gradient)
│       ├── StatBlock.tsx       # D&D-style ability score grid
│       ├── EquipmentSlot.tsx   # Tool cards with rarity borders/glows
│       └── GradeCard.tsx       # S-D performance grade display
└── lib/
    ├── utils.ts                # cn(), formatNumber(), formatDate()
    └── rpg.ts                  # Tier system, XP values, character stats
```

### Key Component Interfaces

**Panel** — 3 variants:
- `default`: `bg-bg-panel/90 border-border-subtle`
- `elevated`: `bg-bg-elevated/90 border-border-default`
- `bordered`: `bg-bg-panel/90 border-border-gold`
- Optional `hover` prop adds `forge-panel-glow` effect

**Badge** — 5 rarity tiers: `standard`, `field-tested`, `sanctified`, `relic`, `archaeotech`. Each maps to border + text + bg color from rarity tokens.

**XPBar** — Props: `currentXP`, `tierEnd`, `tierTitle`, `nextTierTitle`, `progress`. Mars red gradient bar.

**StatBlock** — Array of `{ name, abbreviation, value, description }`. Displays D&D-style scores with modifiers.

**EquipmentSlot** — Props: `slot`, `name`, `description`, `rarity`, `icon`. Rarity-colored borders with glow on hover.

### Client vs. Server Components

- **Server (default)**: All page files, Footer, UI components (Badge, Panel, StatBlock, GradeCard)
- **Client (`"use client"`)**: Navigation (uses `usePathname`, `useState`), CharacterCard (uses Framer Motion)

---

## 6. RPG Progression Engine

**File:** `src/lib/rpg.ts`

### Tier System (10 levels)

| Level | Title | XP Required |
|-------|-------|-------------|
| 1 | Initiate | 0 |
| 2 | Acolyte | 1,000 |
| 3 | Specialist | 2,500 |
| 4 | Veteran | 5,000 |
| 5 | Battle-Tested | 10,000 |
| 6 | Forge Master | 20,000 |
| 7 | Arch-Magos | 35,000 |
| 8 | Fabricator | 55,000 |
| 9 | Lord Commander | 80,000 |
| 10 | Primarch | 100,000 |

### XP Values

| Activity | XP |
|----------|-----|
| Blog post | 100 |
| Playbook chapter | 200 |
| Daily log | 25 |
| Campaign audited | 50 |
| Tool mastered | 150 |
| Commit pushed | 5 |

### Character

- **Class**: Tech-Adept
- **Subclass**: Pipeline Artificer
- **Current XP**: 3,250 (update `CURRENT_XP` in rpg.ts as progress is made)
- **Character Name**: Erik Hernal

### Key Functions

- `getCurrentTier(xp)` — Returns current tier based on XP
- `getNextTier(tier)` — Returns next tier or null at max
- `getProgressToNext(xp, current, next)` — Returns 0-1 progress fraction
- `getCharacterStats(xp)` — Returns full CharacterStats object
- `calculateGrade(itemsShipped, wordsWritten)` — Returns S/A/B/C/D grade

---

## 7. Code Standards

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

## 8. Responsive Design

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

## 9. Content Rules

- Page content is co-located in each page file (no shared `constants.ts`)
- RPG data (tiers, XP, character) lives in `src/lib/rpg.ts`
- Never hardcode hex colors in components. Use Tailwind token classes.
- Badge rarity must use the 5-tier type: `"standard" | "field-tested" | "sanctified" | "relic" | "archaeotech"`
- No invented stats or testimonials. All numbers reflect real work.

---

## 10. User Preferences

- **"Co-Founder"** not "Co-founder" (capitalize both words)
- **Limit em dashes**. Prefer periods or commas.
- **Concise copy**. Every word must earn its place.
- **Plans before execution** for multi-step work
- **No invented data**. Never fabricate stats, testimonials, or numbers.

---

## 11. What NOT To Do

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

## 12. Gotchas & Known Issues

- **Tailwind v4 `@theme inline`**: Color tokens must be registered in the `@theme inline {}` block in `globals.css` to be usable as Tailwind classes (e.g., `bg-bg-panel`, `text-mars-base`).
- **Framer Motion + SSR**: Components using `motion.*` must be in `"use client"` files. Server Components cannot use Framer Motion directly.
- **robots.txt in dev**: Next.js metadata API `robots.ts` only works in production builds. Dev server returns 404.
- **Dev server lock file**: If `.next/dev/lock` exists from a previous instance, kill the old process first. Running two `next dev` instances causes conflicts.
- **Font syntax**: Fonts are loaded via Google Fonts `@import` in globals.css, not `next/font`. Reference in Tailwind as `font-[family-name:var(--font-display)]`.
- **`cn()` uses clsx only**: Unlike other projects, this repo uses `clsx` directly without `tailwind-merge`. Conflicting classes are not auto-resolved.

---

*End of CLAUDE.md*
