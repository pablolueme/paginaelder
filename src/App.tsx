import { useMemo, useState } from "react";
import { rankingBuilds, homeHighlights, methodologyText, roleWinners } from "./data/builds";
import { uniqueWeapons, infusableSetups } from "./data/weapons";
import { topAshesOfWar } from "./data/ashes";
import { regionGuides } from "./data/locations";
import type { BuildEntry, FilterKey } from "./types";
import { getFilteredBuilds } from "./utils/filters";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { StickyNav } from "./components/layout/StickyNav";
import { HomeSection } from "./components/sections/HomeSection";
import { RankingSection } from "./components/sections/RankingSection";
import { UniqueWeaponsSection } from "./components/sections/UniqueWeaponsSection";
import { InfusableSection } from "./components/sections/InfusableSection";
import { AshesSection } from "./components/sections/AshesSection";
import { CompareSection } from "./components/sections/CompareSection";
import { LocationsSection } from "./components/sections/LocationsSection";
import { FavoritesSection } from "./components/sections/FavoritesSection";
import { Footer } from "./components/layout/Footer";
import { BuildDrawer } from "./components/ui/BuildDrawer";
import { BackToTopButton } from "./components/layout/BackToTopButton";

interface FavoriteViewItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
}

const App = () => {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterKey[]>([]);
  const [favorites, setFavorites] = useLocalStorage<string[]>("elden-base-favorites", []);
  const [selectedBuild, setSelectedBuild] = useState<BuildEntry | undefined>();

  const filteredBuilds = useMemo(
    () => getFilteredBuilds(rankingBuilds, search, activeFilters),
    [search, activeFilters]
  );

  const toggleFilter = (filter: FilterKey) => {
    setActiveFilters((current) =>
      current.includes(filter) ? current.filter((entry) => entry !== filter) : [...current, filter]
    );
  };

  const toggleFavorite = (id: string) => {
    setFavorites((current) => (current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]));
  };

  const favoriteItems = useMemo<FavoriteViewItem[]>(() => {
    const sourceMap = new Map<string, FavoriteViewItem>();

    rankingBuilds.forEach((build) =>
      sourceMap.set(`build:${build.id}`, {
        id: `build:${build.id}`,
        title: build.name,
        subtitle: "Build / ranking meta PvE",
        href: "#ranking"
      })
    );
    uniqueWeapons.forEach((weapon) =>
      sourceMap.set(`unique:${weapon.id}`, {
        id: `unique:${weapon.id}`,
        title: weapon.name,
        subtitle: "Arma única o somber",
        href: "#somber"
      })
    );
    infusableSetups.forEach((setup) =>
      sourceMap.set(`infusable:${setup.id}`, {
        id: `infusable:${setup.id}`,
        title: `${setup.baseWeapon} + ${setup.bestAshes.join(" / ")}`,
        subtitle: "Setup infusable",
        href: "#infusables"
      })
    );
    topAshesOfWar.forEach((ash) =>
      sourceMap.set(`ash:${ash.id}`, {
        id: `ash:${ash.id}`,
        title: ash.name,
        subtitle: "Ash of War",
        href: "#ashes"
      })
    );

    return favorites.map((id) => sourceMap.get(id)).filter((item): item is FavoriteViewItem => Boolean(item));
  }, [favorites]);

  return (
    <div className="min-h-screen bg-ring-pattern">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-sm"
      >
        Saltar al contenido
      </a>

      <StickyNav favoritesCount={favorites.length} />

      <main id="main-content" className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
        <HomeSection highlights={homeHighlights} roleWinners={roleWinners} methodology={methodologyText} />

        <RankingSection
          builds={filteredBuilds}
          search={search}
          onSearchChange={setSearch}
          activeFilters={activeFilters}
          onToggleFilter={toggleFilter}
          onClearFilters={() => setActiveFilters([])}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onOpenBuild={setSelectedBuild}
        />

        <UniqueWeaponsSection
          weapons={uniqueWeapons}
          search={search}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        <InfusableSection
          setups={infusableSetups}
          search={search}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        <AshesSection ashes={topAshesOfWar} search={search} favorites={favorites} onToggleFavorite={toggleFavorite} />

        <CompareSection builds={rankingBuilds} onOpenBuild={setSelectedBuild} />

        <LocationsSection regions={regionGuides} />

        <FavoritesSection items={favoriteItems} />
      </main>

      <Footer />
      <BackToTopButton />
      <BuildDrawer build={selectedBuild} onClose={() => setSelectedBuild(undefined)} />
    </div>
  );
};

export default App;
