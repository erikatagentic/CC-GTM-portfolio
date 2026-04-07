# Changelog

All notable changes to the GTM Codex are documented here. Entries are grouped by date, newest first. Each entry includes the commit hash and a description of what changed and why.

Format: `[hash] Description of change`

---

## 2026-04-07

### Terminology Pass

`pending` **Translate 40k jargon to recruiter-readable labels.** Kept all visual effects (forge-glow, rarity borders, CogDividers, metal-brush) but swapped confusing labels: War Campaigns→Projects, Arsenal→Tools, Service Record→Experience, Command Deck→GTM Engineer. Equipment slots now describe actual functions (Core Platform, Automation, Email Infrastructure). Timeline acts use career stages instead of 40k ranks. CTA changed from "VOX CHANNEL OPEN" to "Let's Work Together". CharacterCard class/subclass now shows "GTM Engineer · Outbound Systems" instead of "Tech-Adept · Pipeline Artisan".

### Single-Page Conversion

`9957b74` **Convert 4-page site to single-page with anchor navigation.** Consolidated all content into one scrollable page: Hero, War Campaigns (5 full case studies), Arsenal (8 tools), Service Record (ability scores + campaign timeline), Social Proof, and CTA. Navigation converted from route links to anchor links with smooth scrolling. Removed System Status section, Name Plate (redundant with CharacterCard), Proficiencies (covered by Arsenal), and Service History panels (covered by timeline). Deleted work, character-sheet, and armory page files. All old routes redirect to /.

---

## 2026-04-06

### Portfolio Restructure (santifer.io-inspired)

`79e9afa` **Arsenal project links + Service Record social proof.** Added projectLink, projectLabel, deployments props to EquipmentSlot. Each Arsenal tool now links to its case study on /work with deployment counts. Service Record: added Field Commendations section with TestimonialCards, replaced Connect section with CTASection component.

`476f5aa` **Site restructure: 6 pages to 4, conversion-focused layout.** Consolidated from 6 pages (2 empty placeholders) to 4 content-rich pages. Homepage rewritten from nav hub to conversion page: hero with value prop, project previews, social proof, CTA. Created War Campaigns page (/work) replacing The Codex with 5 project case studies. Deleted Dispatches (/chronicles) and Mission Log (/quest-log) placeholders. Added redirects for old URLs. Navigation reduced from 6 to 4 items. New components: ProjectCard (compact + full modes), TestimonialCard, CTASection. New data files: projects.ts (with TOOL_RARITY map), testimonials.ts. All case study content uses [PLACEHOLDER:] markers for Erik to fill in.

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
