export type Tier = "S+" | "S" | "A";

export type RoleBadge =
  | "Boss Killer"
  | "AoE Monster"
  | "Stance Breaker"
  | "Bleed"
  | "Beginner Friendly"
  | "Hyper Carry";

export type BuildFocus = "bosses" | "area" | "stagger" | "bleed" | "general";

export type BuildAttribute = "strength" | "dex" | "faith" | "arcane";

export type FilterKey =
  | "bosses"
  | "area"
  | "bleed"
  | "stagger"
  | "strength"
  | "dex"
  | "faith"
  | "arcane"
  | "infusable"
  | "unique/somber";

export interface BuildScore {
  bosses: number;
  area: number;
  stagger: number;
  bleed: number;
  ease: number;
}

export interface BuildLoadout {
  stats: string[];
  talismans: string[];
  buffs: string[];
  obtain: string;
}

export interface BuildEntry {
  id: string;
  rank: number;
  name: string;
  tier: Tier;
  type: string;
  focus: BuildFocus[];
  attributes: BuildAttribute[];
  difficulty: "Baja" | "Media" | "Alta";
  summary: string;
  badges: RoleBadge[];
  isInfusable: boolean;
  isUniqueSomber: boolean;
  scaling: string;
  idealGameStage: string;
  score: BuildScore;
  loadout: BuildLoadout;
}

export interface HomeHighlight {
  label: string;
  value: string;
  reason: string;
}

export interface UniqueWeapon {
  id: string;
  name: string;
  tier: Tier;
  category: string;
  whyBroken: string;
  bestUses: string[];
  limitations: string[];
  recommendedStats: string[];
  talismans: string[];
  buffs: string[];
  howToGet: string;
  quickNotes: string[];
  badges: RoleBadge[];
}

export interface InfusableSetup {
  id: string;
  baseWeapon: string;
  bestAshes: string[];
  recommendedAffinity: string;
  recommendedBuild: string;
  whyBroken: string;
  playstyle: string;
  weaponLocation: string;
  ashLocation: string;
  variants: string[];
  badges: RoleBadge[];
}

export interface AshOfWarEntry {
  id: string;
  name: string;
  type: string;
  bestWeapons: string[];
  excelsAt: "Bosses" | "Área" | "Híbrido";
  advantages: string[];
  disadvantages: string[];
  location: string;
}

export interface RegionItem {
  name: string;
  kind: "Arma" | "Ash of War" | "Talismán" | "Buff" | "Hechizo";
  note: string;
}

export interface RegionGuide {
  region: string;
  items: RegionItem[];
}
