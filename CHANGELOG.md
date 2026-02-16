# Changelog

All notable changes to the GTM Codex are documented here. Entries are grouped by date, newest first. Each entry includes the commit hash and a description of what changed and why.

Format: `[hash] Description of change`

---

## 2026-02-16

### Deep Mechanicus Theming

`c71b2d7` Update CLAUDE.md with new Mechanicus icon components, binary-cant-bg class, and updated file tree.

`721ad6b` **Adeptus Mechanicus deep theming: SVG icons, cog dividers, cogitator headers.** Replaced all emoji icons site-wide with hand-crafted Mechanicus SVG components. Created MechanicusIcons.tsx (11 icons: CogMechanicum skull-and-cog, ServoSkull, Aquila two-headed eagle, 6 themed nav icons, CogIcon). Created CogDivider.tsx component replacing all forge-divider instances with a cog-centered gradient divider. Added cogitator data-terminal classification prefixes (`// IMPERIAL RECORD`, `// EQUIPMENT MANIFEST`, etc.) to all section headers across every page. Added binary cant scrolling background (ASCII for "MECHANICUS OMNISSIAH") and binary cant footer decoration. Zero emojis remaining in the codebase.

### Lore Accuracy + Tool Logos

`7ac42f0` **Lore-accurate Mechanicus hierarchy + SVG tool logos for Arsenal.** Fixed 7 of 10 tier names that were using non-Mechanicus terms (Space Marine/Imperial Guard ranks). Canonical hierarchy now: Menial, Acolyte, Tech-Adept, Enginseer, Artisan, Magos, Archmagos, Forge Master, Fabricator Locum, Fabricator-General. Changed subclass from "Pipeline Artificer" to "Pipeline Artisan". Created ToolIcons.tsx with 8 custom monochrome SVG icons for Arsenal page tools (Clay, n8n, Instantly, Sales Navigator, HeyReach, PhantomBuster, Airtable, Cursor + Claude). Changed EquipmentSlot icon prop from string to React.ReactNode.

### Grim-Dark Visual Enhancement

`0b23c52` **Amplify grim-dark effects for visibility on dark background.** Initial CSS values were too conservative for the near-black (#0a0b0d) background. Boosted vignette from 50%/35% to 40%/55%, grain from 2.5% to 7% opacity. Added Mars red color tint to all shadow classes for visibility. Boosted all glow values ~40-50%. Applied more utility classes to components (hazard-stripe, metal-brush, forge-glow).

`3a0c6d2` **Grim-dark enhancement: vignette, grain, industrial panels + page consolidation.** Added body vignette overlay, noise grain texture, enhanced forge-divider with glow halo. Created 11 new CSS utility classes (panel-industrial, shadow-forge, shadow-forge-lg, corner-accents, purity-seal, hazard-stripe, forge-glow-dual, metal-brush, badge-glow, etc.). Enhanced Panel, Badge, CharacterCard, Navigation, and Footer components with new visual classes. Removed /arc (The Crusade) and /vitals (Diagnostics) pages. Merged Crusade 4-act timeline into Service Record as "Campaign History" section. Updated navigation from 8 to 6 links.

### Initial Build

`f5479dc` **Warhammer 40k Adeptus Mechanicus re-theme + CLAUDE.md.** Complete re-theme from BG3 fantasy RPG to Warhammer 40k Adeptus Mechanicus aesthetic. New color system (Mars red, metallic gold, tech teal), gothic industrial typography (Rajdhani, Roboto, Inter), 5-tier rarity classification system (Standard through Archaeotech), RPG progression engine with 10-tier hierarchy. Created CLAUDE.md as single source of truth.

`412c218` **Initial GTM Playbook site with BG3 fantasy RPG aesthetic.** First version of the portfolio site with D&D/Baldur's Gate 3 themed design. 8 pages, CharacterCard, stat blocks, equipment slots, XP progression system.

`4bae81c` Initial commit from Create Next App.
