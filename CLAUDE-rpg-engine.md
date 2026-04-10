# RPG Progression Engine

> Read when updating XP, tier progression, character stats, or the Service Record page section.

---

**File:** `src/lib/rpg.ts`

## Tier System (10 levels)

| Level | Title | XP Required |
|-------|-------|-------------|
| 1 | Menial | 0 |
| 2 | Acolyte | 1,000 |
| 3 | Tech-Adept | 2,500 |
| 4 | Enginseer | 5,000 |
| 5 | Artisan | 10,000 |
| 6 | Magos | 20,000 |
| 7 | Archmagos | 35,000 |
| 8 | Forge Master | 55,000 |
| 9 | Fabricator Locum | 80,000 |
| 10 | Fabricator-General | 100,000 |

## XP Values

| Activity | XP |
|----------|-----|
| Blog post | 100 |
| Playbook chapter | 200 |
| Daily log | 25 |
| Campaign audited | 50 |
| Tool mastered | 150 |
| Commit pushed | 5 |

## Character

- **Class**: Tech-Adept
- **Subclass**: Pipeline Artisan
- **Current XP**: 3,250 (update `CURRENT_XP` in rpg.ts as progress is made)
- **Character Name**: Erik Hernal

## Key Functions

- `getCurrentTier(xp)` -- Returns current tier based on XP
- `getNextTier(tier)` -- Returns next tier or null at max
- `getProgressToNext(xp, current, next)` -- Returns 0-1 progress fraction
- `getCharacterStats(xp)` -- Returns full CharacterStats object
- `calculateGrade(itemsShipped, wordsWritten)` -- Returns S/A/B/C/D grade
