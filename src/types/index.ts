export type Tier = "S+" | "S" | "A";

export type StageKey = "early" | "midgame" | "late" | "endgame" | "todaLaRun";

export type FilterKey =
  | StageKey
  | "beginner"
  | "bosses"
  | "area"
  | "stanceBreak"
  | "bleed"
  | "magic"
  | "faith"
  | "strength"
  | "dex"
  | "arcane"
  | "infusable"
  | "unique";

export type EntryCategory =
  | "buildMeta"
  | "armaUnica"
  | "armaInfusable"
  | "cenizaDeGuerra"
  | "hechizo"
  | "buildJugador";

export type DifficultyLevel = "Baja" | "Media" | "Alta";

export type BadgeKey =
  | "bossKiller"
  | "aoeMonster"
  | "stanceBreaker"
  | "bleed"
  | "beginnerFriendly"
  | "hyperCarry"
  | "generalist"
  | "bestOverall"
  | "bestForBosses"
  | "bestForArea"
  | "bestInfusible"
  | "topAshOfWar"
  | "playerBuild";

export interface LocalizedName {
  nameEs: string;
  nameEn: string;
}

export interface FilterOption {
  key: FilterKey;
  label: string;
}

export interface ComparisonScore {
  bosses: number;
  area: number;
  postura: number;
  hemorragia: number;
  facilidad: number;
}

export interface GuideEntryBase {
  id: string;
  slug: string;
  nameEs: string;
  nameEn: string;
  category: EntryCategory;
  stage: StageKey[];
  tags: FilterKey[];
  shortDescription: string;
  longDescription: string;
  bestFor: string[];
  weakerAgainst: string[];
  recommendation: string;
  howToGet: string;
  stats: string[];
  talismans: string[];
  buffs: string[];
  affinity: string;
  bestAshes: string[];
  region: string[];
  weaponType: string;
  playstyle: string;
  scaling: string;
  difficulty: DifficultyLevel;
  pros: string[];
  cons: string[];
}

export interface RankingBuild extends GuideEntryBase {
  rank: number;
  tier: Tier;
  badges: BadgeKey[];
  score: ComparisonScore;
}

export interface WeaponEntry extends GuideEntryBase {
  tier: Tier;
  badges: BadgeKey[];
}

export interface AshOfWarEntry extends GuideEntryBase {
  tier: Tier;
  badges: BadgeKey[];
  bestWeapons: LocalizedName[];
  excelsAt: "bosses" | "area" | "hibrido";
  location: string;
}

export interface HomeSummaryItem {
  id: string;
  label: string;
  valueEs: string;
  valueEn: string;
  reason: string;
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

export interface PlayerBuildEntry {
  id: string;
  author: string;
  buildName: string;
  focus: string;
  stage: StageKey[];
  weaponMain: LocalizedName;
  weaponSecondary: LocalizedName;
  ashOfWar: LocalizedName;
  stats: string[];
  talismans: string[];
  buffs: string[];
  description: string;
  pros: string[];
  cons: string[];
  recommendedFor: string[];
  isPlaceholder?: boolean;
}

export interface NavLink {
  id: string;
  label: string;
}
