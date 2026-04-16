import { filterLabelMap, stageLabelMap } from "../data/meta";
import type { AshOfWarEntry, FilterKey, GuideEntryBase, PlayerBuildEntry, RankingBuild, StageKey } from "../types";

const stageValues: StageKey[] = ["early", "midgame", "late", "endgame", "todaLaRun"];

const normalize = (value: string): string => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const toSearchBlob = (entry: GuideEntryBase): string => {
  const stageText = entry.stage.map((stage) => stageLabelMap[stage]).join(" ");
  const tagText = entry.tags.map((tag) => filterLabelMap[tag]).join(" ");

  return normalize(
    [
      entry.nameEs,
      entry.nameEn,
      entry.slug,
      entry.category,
      entry.weaponType,
      entry.shortDescription,
      entry.longDescription,
      entry.playstyle,
      entry.scaling,
      entry.affinity,
      entry.recommendation,
      entry.howToGet,
      stageText,
      tagText,
      entry.bestFor.join(" "),
      entry.weakerAgainst.join(" "),
      entry.bestAshes.join(" "),
      entry.stats.join(" "),
      entry.region.join(" ")
    ].join(" ")
  );
};

const matchesSearch = (entry: GuideEntryBase, search: string): boolean => {
  if (!search.trim()) {
    return true;
  }

  return toSearchBlob(entry).includes(normalize(search));
};

const matchesFilters = (entry: GuideEntryBase, filters: FilterKey[]): boolean => {
  if (filters.length === 0) {
    return true;
  }

  return filters.every((filter) => {
    if (stageValues.includes(filter as StageKey)) {
      return entry.stage.includes(filter as StageKey);
    }

    return entry.tags.includes(filter);
  });
};

export const getFilteredCollection = <T extends GuideEntryBase>(
  entries: T[],
  search: string,
  filters: FilterKey[]
): T[] => entries.filter((entry) => matchesSearch(entry, search)).filter((entry) => matchesFilters(entry, filters));

const ashSearchBlob = (ash: AshOfWarEntry): string =>
  normalize(
    [
      toSearchBlob(ash),
      ash.location,
      ash.bestWeapons.map((weapon) => `${weapon.nameEs} ${weapon.nameEn}`).join(" ")
    ].join(" ")
  );

export const getFilteredAshes = (ashes: AshOfWarEntry[], search: string, filters: FilterKey[]): AshOfWarEntry[] =>
  ashes
    .filter((ash) => {
      if (!search.trim()) {
        return true;
      }
      return ashSearchBlob(ash).includes(normalize(search));
    })
    .filter((ash) => matchesFilters(ash, filters));

export const getFilteredBuilds = (builds: RankingBuild[], search: string, filters: FilterKey[]): RankingBuild[] =>
  getFilteredCollection(builds, search, filters).sort((a, b) => a.rank - b.rank);

const playerBuildSearchBlob = (build: PlayerBuildEntry): string => {
  const stageText = build.stage.map((stage) => stageLabelMap[stage]).join(" ");
  const tagText = build.tags.map((tag) => filterLabelMap[tag]).join(" ");

  return normalize(
    [
      build.author,
      build.buildName,
      build.subtitle,
      build.slug,
      build.focus,
      build.buildType,
      build.weaponMain.nameEs,
      build.weaponMain.nameEn,
      build.weaponSecondary.nameEs,
      build.weaponSecondary.nameEn,
      build.ashOfWar.nameEs,
      build.ashOfWar.nameEn,
      build.shortDescription,
      build.longDescription,
      build.whenToUse,
      build.weakerAgainst,
      build.recommendation,
      build.notes.join(" "),
      build.stats.join(" "),
      build.talismans.map((item) => `${item.nameEs} ${item.nameEn}`).join(" "),
      build.buffs.map((item) => `${item.nameEs} ${item.nameEn}`).join(" "),
      build.locations.map((item) => `${item.nameEs} ${item.nameEn} ${item.howToGet}`).join(" "),
      build.pros.join(" "),
      build.cons.join(" "),
      build.recommendedFor.join(" "),
      stageText,
      tagText
    ].join(" ")
  );
};

const playerBuildMatchesSearch = (build: PlayerBuildEntry, search: string): boolean => {
  if (!search.trim()) {
    return true;
  }

  return playerBuildSearchBlob(build).includes(normalize(search));
};

const playerBuildMatchesFilters = (build: PlayerBuildEntry, filters: FilterKey[]): boolean => {
  if (filters.length === 0) {
    return true;
  }

  return filters.every((filter) => {
    if (stageValues.includes(filter as StageKey)) {
      return build.stage.includes(filter as StageKey);
    }

    return build.tags.includes(filter);
  });
};

export const getFilteredPlayerBuilds = (
  builds: PlayerBuildEntry[],
  search: string,
  filters: FilterKey[]
): PlayerBuildEntry[] =>
  builds
    .filter((build) => playerBuildMatchesSearch(build, search))
    .filter((build) => playerBuildMatchesFilters(build, filters));
