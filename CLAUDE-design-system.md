# Design System

> Read when writing new UI components, editing colors, or working with the design token system.

---

## Color Tokens

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

## Rarity Classification System

5-tier classification used by Badge, EquipmentSlot, and page content:

| Tier Name | Type Value | Color Token | Hex |
|-----------|-----------|-------------|-----|
| Standard | `"standard"` | `rarity-common` | `#9e9e9e` |
| Field-Tested | `"field-tested"` | `rarity-uncommon` | `#26a69a` |
| Sanctified | `"sanctified"` | `rarity-rare` | `#5c6bc0` |
| Relic | `"relic"` | `rarity-very-rare` | `#ab47bc` |
| Archaeotech | `"archaeotech"` | `rarity-legendary` | `#d4af37` |

TypeScript type: `type Rarity = "standard" | "field-tested" | "sanctified" | "relic" | "archaeotech"`

## Typography

| Variable | Font | Usage |
|----------|------|-------|
| `--font-display` | Rajdhani | Page titles, large headings |
| `--font-heading` | Rajdhani | Section headings, subheadings |
| `--font-body` | Roboto | Body text, descriptions |
| `--font-ui` | Inter | Labels, badges, navigation, small text |

**Usage pattern in Tailwind:** `font-[family-name:var(--font-display)]`

## Spacing

- **Grid**: 8px base
- **Container**: `max-w-6xl mx-auto px-4 sm:px-6`
- **Main padding**: `py-10`
- **Panel padding**: `p-6`
- **Section gaps**: `gap-10` between major sections
- **Card gaps**: `gap-4` in grids

## Utility Classes

| Class | Effect |
|-------|--------|
| `.forge-glow` | Mars red text-shadow (8px blur, 40% opacity) |
| `.forge-glow-strong` | Stronger Mars red text-shadow (12px + 24px dual blur) |
| `.forge-panel-glow` | Hover: Mars red + teal box-shadow on panels |
| `.metal-overlay` | Pseudo-element with repeating teal scanlines (2% opacity) |
| `.forge-divider` | 2px horizontal gradient with glow halo: transparent -> Mars dark -> Mars red -> gold -> Mars red -> Mars dark -> transparent |
| `.tech-grid` | Pseudo-element with 20x20px teal grid (5% opacity) |
| `.animate-pulse-forge` | 3s infinite Mars red + teal pulsing box-shadow |
| `.animate-fade-in` | 0.5s ease-out fade-in with 8px Y-translate |
| `.panel-industrial` | Double-border (outline + offset 3px), inset top-light/bottom-dark, deeper drop shadow |
| `.shadow-forge` | Triple-layer box-shadow (2/8/16px) for elevated panels |
| `.shadow-forge-lg` | Extra-deep shadow (4/12/24px) for hero elements |
| `.corner-accents` | Mars red 12px corner brackets (top-left, top-right) via ::before/::after |
| `.corner-accents-bottom` | Mars red 12px corner brackets (bottom-left, bottom-right) |
| `.purity-seal` | Small gold cog seal circle, positioned top-right |
| `.hazard-stripe` | Diagonal gold stripes at 6% opacity |
| `.forge-glow-dual` | Combined Mars red + teal text-shadow |
| `.forge-panel-glow-strong` | Stronger hover glow (dual red + teal) |
| `.metal-brush` | Faint diagonal brushed-metal sheen (1.5-2% white corners) |
| `.badge-glow` | Subtle currentColor glow halo via ::after (auto-applied to non-standard rarities) |
| `.binary-cant-bg` | Faint scrolling binary text background (ASCII "MECHANICUS OMNISSIAH"), Mars red at 1.8% opacity, 120s scroll animation |
