import { filterLabelMap, stageLabelMap } from "../data/meta";
import type { AshOfWarEntry, FilterKey, GuideEntryBase, RankingBuild, StageKey } from "../types";

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
