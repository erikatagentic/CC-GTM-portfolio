// RPG Progression Engine

export interface Tier {
  level: number;
  title: string;
  xpRequired: number;
}

export const TIERS: Tier[] = [
  { level: 1, title: "Menial", xpRequired: 0 },
  { level: 2, title: "Acolyte", xpRequired: 1000 },
  { level: 3, title: "Tech-Adept", xpRequired: 2500 },
  { level: 4, title: "Enginseer", xpRequired: 5000 },
  { level: 5, title: "Artisan", xpRequired: 10000 },
  { level: 6, title: "Magos", xpRequired: 20000 },
  { level: 7, title: "Archmagos", xpRequired: 35000 },
  { level: 8, title: "Forge Master", xpRequired: 55000 },
  { level: 9, title: "Fabricator Locum", xpRequired: 80000 },
  { level: 10, title: "Fabricator-General", xpRequired: 100000 },
];

export const XP_VALUES = {
  blogPost: 100,
  playbookChapter: 200,
  dailyLog: 25,
  campaignAudited: 50,
  toolMastered: 150,
  commitPushed: 5,
} as const;

export type Grade = "S" | "A" | "B" | "C" | "D";

export interface CharacterStats {
  totalXP: number;
  currentTier: Tier;
  nextTier: Tier | null;
  progressToNext: number; // 0-1
  className: string;
  subclass: string;
  grade: Grade;
}

export function getCurrentTier(xp: number): Tier {
  let current = TIERS[0];
  for (const tier of TIERS) {
    if (xp >= tier.xpRequired) {
      current = tier;
    } else {
      break;
    }
  }
  return current;
}

export function getNextTier(currentTier: Tier): Tier | null {
  const idx = TIERS.findIndex((t) => t.level === currentTier.level);
  return idx < TIERS.length - 1 ? TIERS[idx + 1] : null;
}

export function getProgressToNext(xp: number, current: Tier, next: Tier | null): number {
  if (!next) return 1;
  const range = next.xpRequired - current.xpRequired;
  const progress = xp - current.xpRequired;
  return Math.min(progress / range, 1);
}

export function calculateGrade(itemsShipped: number, wordsWritten: number): Grade {
  const score = itemsShipped * 10 + wordsWritten / 100;
  if (score >= 80) return "S";
  if (score >= 50) return "A";
  if (score >= 30) return "B";
  if (score >= 15) return "C";
  return "D";
}

export function getCharacterStats(xp: number): CharacterStats {
  const currentTier = getCurrentTier(xp);
  const nextTier = getNextTier(currentTier);
  const progressToNext = getProgressToNext(xp, currentTier, nextTier);

  return {
    totalXP: xp,
    currentTier,
    nextTier,
    progressToNext,
    className: "Tech-Adept",
    subclass: "Pipeline Artisan",
    grade: "A",
  };
}

// Erik's current stats -- update these as you progress
export const CURRENT_XP = 3250;
export const CHARACTER_NAME = "Erik Hernal";
