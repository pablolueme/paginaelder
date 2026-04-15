import type { BuildEntry, FilterKey } from "../../types";
import { RoleBadgePill, SimpleBadge, TierBadge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";
import { FilterBar } from "../ui/FilterBar";
import { SearchBar } from "../ui/SearchBar";
import { SectionShell } from "../layout/SectionShell";

interface RankingSectionProps {
  builds: BuildEntry[];
  search: string;
  onSearchChange: (value: string) => void;
  activeFilters: FilterKey[];
  onToggleFilter: (filter: FilterKey) => void;
  onClearFilters: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenBuild: (build: BuildEntry) => void;
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
    title="Ranking General (Top 12)"
    subtitle="Ordenado por rendimiento real en PvE del juego base: consistencia, daño, utilidad y facilidad."
  >
    <div className="mb-5 grid gap-3 lg:grid-cols-[2fr,1fr]">
      <SearchBar value={search} onChange={onSearchChange} />
      <FilterBar activeFilters={activeFilters} onToggle={onToggleFilter} onClear={onClearFilters} />
    </div>

    <p className="mb-4 text-sm text-zinc-300">
      Resultados: <span className="font-semibold text-rune">{builds.length}</span>
    </p>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {builds.map((build) => {
        const favoriteId = `build:${build.id}`;
        const isFavorite = favorites.includes(favoriteId);

        return (
          <Card key={build.id}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rune/70 bg-rune/15 text-sm font-bold text-rune">
                  #{build.rank}
                </span>
                <div>
                  <h3 className="title-font text-lg text-zinc-100">{build.name}</h3>
                  <p className="text-sm text-zinc-300">{build.type}</p>
                </div>
              </div>
              <FavoriteToggle
                active={isFavorite}
                onToggle={() => onToggleFavorite(favoriteId)}
                label={isFavorite ? "Quitar de favoritas" : "Añadir a favoritas"}
              />
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              <TierBadge tier={build.tier} />
              <SimpleBadge label={`Dificultad: ${build.difficulty}`} />
            </div>
            <p className="mb-4 text-sm text-zinc-200">{build.summary}</p>

            <div className="mb-4 flex flex-wrap gap-2">
              {build.badges.map((badge) => (
                <RoleBadgePill key={badge} badge={badge} />
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
              {build.attributes.map((attribute) => (
                <SimpleBadge key={attribute} label={attribute.toUpperCase()} />
              ))}
              {build.isInfusable ? <SimpleBadge label="Infusable" /> : null}
              {build.isUniqueSomber ? <SimpleBadge label="Unique/Somber" /> : null}
            </div>

            <button
              type="button"
              onClick={() => onOpenBuild(build)}
              className="mt-4 rounded-xl border border-rune/70 bg-rune/15 px-4 py-2 text-sm font-semibold text-rune transition hover:bg-rune/25"
            >
              Ver build detallada
            </button>
          </Card>
        );
      })}
    </div>
  </SectionShell>
);
