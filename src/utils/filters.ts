import type { BuildEntry, FilterKey } from "../types";

const normalize = (value: string): string => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const buildMatchesSearch = (build: BuildEntry, search: string): boolean => {
  if (!search.trim()) {
    return true;
  }

  const content = normalize(
    `${build.name} ${build.type} ${build.summary} ${build.focus.join(" ")} ${build.attributes.join(" ")}`
  );
  return content.includes(normalize(search));
};

export const buildMatchesFilters = (build: BuildEntry, filters: FilterKey[]): boolean => {
  if (filters.length === 0) {
    return true;
  }

  return filters.every((filter) => {
    switch (filter) {
      case "bosses":
      case "area":
      case "bleed":
      case "stagger":
        return build.focus.includes(filter);
      case "strength":
      case "dex":
      case "faith":
      case "arcane":
        return build.attributes.includes(filter);
      case "infusable":
        return build.isInfusable;
      case "unique/somber":
        return build.isUniqueSomber;
      default:
        return true;
    }
  });
};

export const getFilteredBuilds = (
  builds: BuildEntry[],
  search: string,
  filters: FilterKey[]
): BuildEntry[] =>
  builds
    .filter((build) => buildMatchesSearch(build, search))
    .filter((build) => buildMatchesFilters(build, filters))
    .sort((a, b) => a.rank - b.rank);
