import { filterOptions, sectionText, uiText } from "../../data/meta";
import type { FilterKey, RankingBuild } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { BadgePill, SimpleBadge, StageBadge, TierBadge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";
import { FilterBar } from "../ui/FilterBar";
import { SearchBar } from "../ui/SearchBar";

interface RankingSectionProps {
  builds: RankingBuild[];
  search: string;
  onSearchChange: (value: string) => void;
  activeFilters: FilterKey[];
  onToggleFilter: (filter: FilterKey) => void;
  onClearFilters: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenBuild: (build: RankingBuild) => void;
}

export const RankingSection = ({
  builds,
  search,
  onSearchChange,
  activeFilters,
  onToggleFilter,
  onClearFilters,
  favorites,
  onToggleFavorite,
  onOpenBuild
}: RankingSectionProps) => (
  <SectionShell
    id="ranking"
    eyebrow={sectionText.ranking.eyebrow}
    title={sectionText.ranking.title}
    subtitle={sectionText.ranking.subtitle}
  >
    <div className="mb-5 grid gap-3 lg:grid-cols-[2fr,1fr]">
      <SearchBar
        value={search}
        onChange={onSearchChange}
        placeholder={uiText.globalSearchPlaceholder}
        ariaLabel={uiText.globalSearchAria}
      />
      <FilterBar
        options={filterOptions}
        activeFilters={activeFilters}
        onToggle={onToggleFilter}
        onClear={onClearFilters}
        title={uiText.filtersTitle}
        clearLabel={uiText.clearFilters}
      />
    </div>

    <p className="mb-5 text-sm text-zinc-200">
      {uiText.results}: <span className="font-semibold text-rune">{builds.length}</span>
    </p>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {builds.map((build) => {
        const favoriteId = `build:${build.id}`;
        const isFavorite = favorites.includes(favoriteId);

        return (
          <Card key={build.id}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-rune/70 bg-rune/15 text-sm font-bold text-rune">
                  #{build.rank}
                </span>
                <div>
                  <h3 className="title-font text-xl text-zinc-50">{build.nameEs}</h3>
                  <p className="text-xs text-zinc-400">{build.nameEn}</p>
                  <p className="mt-1 text-sm text-zinc-300">{build.weaponType}</p>
                </div>
              </div>
              <FavoriteToggle
                active={isFavorite}
                onToggle={() => onToggleFavorite(favoriteId)}
                label={isFavorite ? uiText.removeFavorite : uiText.addFavorite}
              />
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              <TierBadge tier={build.tier} />
              <SimpleBadge label={`${uiText.difficulty}: ${build.difficulty}`} />
              <SimpleBadge label={`${uiText.scaling}: ${build.scaling}`} />
            </div>

            <p className="mb-4 text-sm leading-relaxed text-zinc-200">{build.shortDescription}</p>

            <div className="mb-3 flex flex-wrap gap-2">
              {build.badges.map((badge) => (
                <BadgePill key={badge} badge={badge} />
              ))}
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              {build.stage.map((stage) => (
                <StageBadge key={stage} stage={stage} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => onOpenBuild(build)}
              className="mt-1 rounded-xl border border-rune/70 bg-rune/15 px-4 py-2 text-sm font-semibold text-rune transition hover:bg-rune/25"
            >
              {uiText.openDetail}
            </button>
          </Card>
        );
      })}
    </div>
  </SectionShell>
);
