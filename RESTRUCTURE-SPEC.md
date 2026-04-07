# GTM Codex Restructure Spec

> Handoff document for restructuring the GTM Codex portfolio site.
> Inspired by santifer.io's content strategy. Keeping the Warhammer 40k Adeptus Mechanicus aesthetic.

---

## Problem

The site looks great but doesn't convert. A hiring manager or potential client lands on the homepage and sees a nav hub with RPG terminology. They don't know what Erik does, what he's built, or why they should talk to him. Two pages (Dispatches, Mission Log) are empty placeholders. The Codex has 8 chapters, all marked "classified." The actual pitch (200+ campaigns, 5M+ contacts, Clay Top 1%, Honey/PayPal PM) is buried across the Service Record page.

The 40k theme is a differentiator. The problem is substance, not style.

## Goal

A visitor should understand what Erik does, see proof he's good at it, and know how to reach him within 15 seconds of landing. The RPG progression system and Mechanicus aesthetic stay. The content strategy changes.

---

## Site Architecture (Before vs After)

### Before (6 pages, 2 empty)

| Route | Page | Status |
|-------|------|--------|
| `/` | Command Deck | Nav hub, no pitch |
| `/grimoire` | The Codex | 8 chapters, all "classified" |
| `/chronicles` | Dispatches | Empty placeholder |
| `/quest-log` | Mission Log | Empty placeholder |
| `/character-sheet` | Service Record | Complete but buried |
| `/armory` | Arsenal | Tool list, no context |

### After (4 pages, 0 empty)

| Route | Page | 40k Name | Purpose |
|-------|------|----------|---------|
| `/` | Home | Command Deck | Hero pitch + key metrics + projects preview + CTA |
| `/work` | Projects | War Campaigns | Case studies with outcomes (replaces grimoire) |
| `/character-sheet` | About/Resume | Service Record | Experience timeline + skills + social proof |
| `/armory` | Tools | Arsenal | Tool stack with project context |

**Removed**: `/chronicles` (Dispatches) and `/quest-log` (Mission Log). Empty pages hurt credibility. Add them back when there's real content to fill them.

**Renamed**: `/grimoire` becomes `/work`. The Codex concept (8 knowledge chapters) can return later as blog content. Right now Erik needs a projects/case studies page, not an empty knowledge base.

---

## Page-by-Page Spec

### 1. Command Deck (Home) — `/`

**Current**: CharacterCard hero + 5 section cards (Operations Board) + System Status indicators.

**New structure** (top to bottom):

#### Section 1: Hero
Keep the CharacterCard component but add a human-readable value prop above it.

```
// TRANSMISSION INCOMING

I build outbound systems that replace SDR headcount with automation.

[CharacterCard component -- keep as-is, it has the key metrics]
```

The CharacterCard already shows 200+ campaigns, 5M+ contacts, 1.4M+ AI data points, 187 Clay days. That's the proof. But above it, there needs to be one sentence that tells a non-40k-fan what Erik actually does.

#### Section 2: What I Build (Projects Preview)
Replace the Operations Board (which is just nav cards) with 3-4 project cards showing real work with outcomes. Each card links to the full case study on `/work`.

```
// WAR CAMPAIGNS -- FIELD REPORTS

[Card] Clay Enrichment Pipeline
       Built waterfall enrichment system processing 5M+ contacts...
       → Read field report

[Card] Cold Email Infrastructure
       Designed deliverability-first email systems across 200+ campaigns...
       → Read field report

[Card] n8n Automation Stack
       CRM syncs, Slack approvals, intent detection...
       → Read field report
```

Use the existing Panel component with `hover` variant. Each card should have:
- Project name (bold, mars-light)
- One sentence with a metric
- Archetype badge (e.g., Badge rarity="archaeotech" for the most impressive ones)
- Link to `/work#project-slug`

#### Section 3: Social Proof (NEW)
2-3 testimonials or client results. If Erik doesn't have testimonial quotes ready, use metric-based proof instead:

```
// COMMENDATIONS FROM THE FIELD

[Panel] "Erik rebuilt our entire outbound stack in 3 weeks..."
        -- Client Name, Company

[Panel] 200+ campaigns audited across B2B SaaS, fintech, and recruiting
```

Placeholder content is fine here if Erik needs to collect quotes. But the section should exist in the layout.

#### Section 4: CTA
Clear, prominent call to action. Replace the current System Status section.

```
// VOX CHANNEL OPEN

Looking for a GTM engineer? Let's talk.

[Button: LinkedIn]  [Button: Email]  [Button: Hey Agentic]
```

Use a bordered Panel with forge-glow effect. Mars red primary button for LinkedIn (most important CTA). The buttons should be large enough to tap on mobile (44x44px min, already in the design system).

#### Section 5: System Status (keep, move to bottom)
The operational status indicators are a fun 40k touch. Move them to the very bottom above the footer. They're not conversion-critical.

---

### 2. War Campaigns (Projects) — `/work`

**Replaces**: `/grimoire` (The Codex)

This is the most important new page. It shows what Erik has built with real outcomes. Think of it as Santiago's "What I build" section but in Mechanicus style.

#### Content: 4-6 Project Case Studies

Each case study is a Panel with:
- **Campaign designation** (roman numeral, like the current Codex chapters)
- **Project title**
- **Client/context** (if shareable, otherwise "Agency Client -- B2B SaaS")
- **Problem**: 2-3 sentences on what was broken
- **Solution**: 2-3 sentences on what Erik built
- **Outcome**: 1-2 hard metrics (reply rate improvement, pipeline generated, time saved)
- **Tools used**: Badge components showing the tools (Clay, n8n, Instantly, etc.)
- **Archetype badge**: Rarity classification based on complexity/impact

**Suggested case studies** (Erik fills in real details):

1. **Clay Enrichment Pipeline** (Archaeotech)
   Building the waterfall enrichment system that processed 5M+ contacts. Signal stacking, provider routing, credit optimization.

2. **Cold Email Infrastructure** (Relic)
   Deliverability engineering across 200+ campaigns. Domain infrastructure, warming protocols, A/B testing methodology.

3. **n8n Automation Stack** (Relic)
   GTM workflow automation. CRM syncs, Slack approvals, intent detection, multi-step orchestration.

4. **LinkedIn Outbound System** (Sanctified)
   Multi-account LinkedIn automation. Connection targeting, DM frameworks, cadence design.

5. **Honey Product Work** (Sanctified)
   PM at Honey pre-$4B PayPal acquisition. Features built, growth contribution.

If Erik doesn't have enough detail for full case studies yet, use the current Codex chapter format but with real content instead of "classified." Even a paragraph per project is better than "classified."

#### Layout

Same vertical layout as the current Codex page but with richer cards. Each project gets its own Panel with an anchor ID for deep linking (`/work#clay-enrichment`).

---

### 3. Service Record (About/Resume) — `/character-sheet`

**Current page is solid.** Keep the structure but add two new sections:

#### Addition 1: Social Proof Section
After the Specializations section, before Service History. Same testimonial/proof pattern as the homepage but can include more quotes here.

```
// FIELD COMMENDATIONS

[Testimonial panels]
```

#### Addition 2: Client Logos (if available)
If Erik has permission to show client logos, add a row of logos after social proof. Use muted/grayscale versions that fit the metallic theme.

```
// ALLIED FORCES

[Logo row -- grayscale, metallic treatment]
```

#### Minor change: Connect section
Move the Connect links (LinkedIn, Lumos, Hey Agentic) into a more prominent CTA panel instead of the current small text links. Same pattern as the homepage CTA.

Everything else on this page stays as-is. The stats, proficiencies, campaign history timeline are all good.

---

### 4. Arsenal (Tools) — `/armory`

**Current page is good but lacks context.** Each tool shows name, description, and rarity. But it doesn't show what Erik built with it.

#### Change: Add project links to each tool

For each EquipmentSlot, add an optional `projectLink` prop that links to the relevant case study on `/work`.

Example:
```
Clay (Archaeotech)
Data enrichment engine. Waterfall logic, signal stacking, 5M+ contacts enriched.
→ See: Clay Enrichment Pipeline (/work#clay-enrichment)
```

This connects the tools to real work, which is what a recruiter actually cares about.

#### Change: Add a "field deployment count" to each tool

Next to each tool, show how many projects/campaigns used it. Even rough numbers help.

```
Clay (Archaeotech) -- 47 deployments
n8n (Relic) -- 32 deployments
```

---

## Navigation Changes

### Before (6 items)
Command Deck, The Codex, Dispatches, Mission Log, Service Record, Arsenal

### After (4 items)
Command Deck, War Campaigns, Service Record, Arsenal

Update `NAV_LINKS` in `src/components/Navigation.tsx`:

```typescript
const NAV_LINKS = [
  { href: "/", label: "Command Deck", icon: <NavCogIcon /> },
  { href: "/work", label: "War Campaigns", icon: <NavScrollIcon /> },
  { href: "/character-sheet", label: "Service Record", icon: <NavAquilaIcon /> },
  { href: "/armory", label: "Arsenal", icon: <NavOmniIcon /> },
];
```

Remove NavVoxIcon and NavForgeIcon imports if no longer used.

---

## File Changes Summary

### New files
- `src/app/work/page.tsx` -- War Campaigns (projects/case studies)

### Modified files
- `src/app/page.tsx` -- Restructure homepage (hero + projects preview + social proof + CTA)
- `src/app/character-sheet/page.tsx` -- Add social proof section and stronger CTA
- `src/app/armory/page.tsx` -- Add project links and deployment counts to tools
- `src/components/Navigation.tsx` -- Update NAV_LINKS (4 items instead of 6)
- `src/components/Footer.tsx` -- No changes needed
- `src/components/CharacterCard.tsx` -- No changes needed (it's already great)
- `src/components/ui/EquipmentSlot.tsx` -- Add optional `projectLink` and `deployments` props
- `CLAUDE.md` -- Update site architecture section (Section 4), navigation table, page content summary

### Deleted files
- `src/app/chronicles/page.tsx` -- Remove Dispatches placeholder
- `src/app/quest-log/page.tsx` -- Remove Mission Log placeholder
- `src/app/grimoire/page.tsx` -- Replace with `/work` (can delete or redirect)

### Redirects (optional but nice)
Add redirects in `next.config.ts` so old URLs don't 404:
```typescript
async redirects() {
  return [
    { source: '/grimoire', destination: '/work', permanent: true },
    { source: '/chronicles', destination: '/', permanent: true },
    { source: '/quest-log', destination: '/', permanent: true },
  ];
}
```

---

## Components Needed

### New: ProjectCard
A card component for case studies on the homepage preview and `/work` page.

Props:
```typescript
interface ProjectCardProps {
  designation: string;       // "I", "II", etc.
  title: string;
  context: string;           // "Agency Client -- B2B SaaS" or company name
  summary: string;           // One-sentence outcome
  tools: string[];           // ["Clay", "n8n", "Instantly"]
  rarity: Rarity;            // Existing type from Badge
  slug: string;              // For anchor linking
  problem?: string;          // Full case study (work page only)
  solution?: string;
  outcome?: string;
}
```

Use existing Panel, Badge components. No new design tokens needed.

### New: TestimonialCard
Simple quote card for social proof sections.

Props:
```typescript
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}
```

Use Panel variant="bordered" with italic text. Gold-muted attribution.

### New: CTASection
Reusable CTA block used on homepage and character-sheet.

Props:
```typescript
interface CTASectionProps {
  heading?: string;
  subtext?: string;
}
```

Large bordered Panel with forge-glow. Mars red primary button + secondary buttons.

### Modified: EquipmentSlot
Add optional props:
```typescript
interface EquipmentSlotProps {
  // ...existing props
  projectLink?: string;      // URL to case study
  projectLabel?: string;     // "Clay Enrichment Pipeline"
  deployments?: number;      // 47
}
```

---

## Content Erik Needs to Provide

This spec handles structure. Erik needs to fill in the actual content:

1. **3-4 project case studies** with real metrics (problem, solution, outcome). Even rough drafts work. The structure is there, it just needs the stories.

2. **2-3 testimonial quotes** from clients, colleagues, or partners. If none are available yet, use metric-based proof panels instead ("200+ campaigns audited across B2B SaaS, fintech, and recruiting").

3. **Client logos** (optional). If Erik has permission to show logos from Cleverly clients or Lumos clients.

4. **Deployment counts** for each tool in the Arsenal (rough numbers are fine: "used Clay in ~47 client engagements").

5. **One-sentence value prop** for the homepage hero. Suggested: "I build outbound systems that replace SDR headcount with automation." Erik should make this his own.

---

## Design Rules (unchanged)

All existing design system rules from CLAUDE.md Section 3 still apply:
- Dark-only site (no `dark:` variants)
- Use design tokens (`text-mars-base`, `bg-bg-panel`, etc.)
- No hardcoded hex in Tailwind classes
- Mobile-first responsive
- Rajdhani for display, Roboto for body, Inter for UI
- Existing utility classes (forge-glow, metal-overlay, etc.)
- 40k Adeptus Mechanicus terminology throughout
- No BG3/fantasy terminology

---

## Priority Order

1. **Homepage restructure** -- Biggest impact. Hero pitch + projects preview + CTA.
2. **War Campaigns page** -- Even with stub content, having a projects page with real titles beats 8 "classified" chapters.
3. **Remove placeholder pages** -- Delete Dispatches and Mission Log. Update nav.
4. **Arsenal updates** -- Add project links to tools.
5. **Service Record social proof** -- Add testimonials when Erik has quotes.

Steps 1-3 can ship as one commit. Steps 4-5 are follow-ups.

---

*Spec written 2026-04-06. Reference santifer.io/en for content strategy inspiration. Keep the Mechanicus aesthetic.*
