export type Tier = "S+" | "S" | "A";

export type RoleBadge =
  | "Matabosses"
  | "Monstruo de área"
  | "Rompepostura"
  | "Hemorragia"
  | "Fácil de usar"
  | "Muy dominante";

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

export interface LocalizedName {
  nameEs: string;
  nameEn: string;
}

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
  nameEs: string;
  nameEn: string;
  tier: Tier;
  typeEs: string;
  typeEn: string;
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
  valueEs: string;
  valueEn: string;
  reason: string;
}

export interface UniqueWeapon {
  id: string;
  nameEs: string;
  nameEn: string;
  tier: Tier;
  categoryEs: string;
  categoryEn: string;
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
  nameEs: string;
  nameEn: string;
  baseWeapon: LocalizedName;
  bestAshes: LocalizedName[];
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
  nameEs: string;
  nameEn: string;
  typeEs: string;
  typeEn: string;
  bestWeapons: LocalizedName[];
  excelsAt: "Jefes" | "Área" | "Híbrido";
  advantages: string[];
  disadvantages: string[];
  location: string;
}

export interface RegionItem {
  nameEs: string;
  nameEn: string;
  kind: "Arma" | "Ceniza de guerra" | "Talismán" | "Mejora" | "Hechizo";
  note: string;
}

export interface RegionGuide {
  region: string;
  items: RegionItem[];
}
