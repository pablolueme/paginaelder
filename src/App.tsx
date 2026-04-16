import { useMemo, useState } from "react";
import { topAshesOfWar } from "./data/ashes";
import { rankingBuilds } from "./data/builds";
import { footerText, homeHighlights, sectionText, uiText } from "./data/meta";
import { playerBuilds } from "./data/playerBuilds";
import { regionGuides } from "./data/locations";
import { infusableSetups, uniqueWeapons } from "./data/weapons";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Footer } from "./components/layout/Footer";
import { StickyNav } from "./components/layout/StickyNav";
import { BackToTopButton } from "./components/layout/BackToTopButton";
import { AshesSection } from "./components/sections/AshesSection";
import { CompareSection } from "./components/sections/CompareSection";
import { FavoritesSection } from "./components/sections/FavoritesSection";
import { HomeSection } from "./components/sections/HomeSection";
import { InfusableSection } from "./components/sections/InfusableSection";
import { LocationsSection } from "./components/sections/LocationsSection";
import { PlayerBuildsSection } from "./components/sections/PlayerBuildsSection";
import { RankingSection } from "./components/sections/RankingSection";
import { UniqueWeaponsSection } from "./components/sections/UniqueWeaponsSection";
import { WeaponsIntroSection } from "./components/sections/WeaponsIntroSection";
import { BuildDrawer } from "./components/ui/BuildDrawer";
import type { FilterKey, RankingBuild } from "./types";
import { getFilteredAshes, getFilteredBuilds, getFilteredCollection, getFilteredPlayerBuilds } from "./utils/filters";

interface FavoriteViewItem {
  id: string;
  titleEs: string;
  titleEn: string;
  subtitle: string;
  href: string;
}

const App = () => {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterKey[]>([]);
  const [favorites, setFavorites] = useLocalStorage<string[]>("elden-base-favorites", []);
  const [selectedBuild, setSelectedBuild] = useState<RankingBuild | undefined>();

  const filteredBuilds = useMemo(
    () => getFilteredBuilds(rankingBuilds, search, activeFilters),
    [search, activeFilters]
  );

  const filteredUniqueWeapons = useMemo(
    () => getFilteredCollection(uniqueWeapons, search, activeFilters),
    [search, activeFilters]
  );

  const filteredInfusableSetups = useMemo(
    () => getFilteredCollection(infusableSetups, search, activeFilters),
    [search, activeFilters]
  );

  const filteredAshes = useMemo(
    () => getFilteredAshes(topAshesOfWar, search, activeFilters),
    [search, activeFilters]
  );

  const filteredPlayerBuilds = useMemo(
    () => getFilteredPlayerBuilds(playerBuilds, search, activeFilters),
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
        titleEs: build.nameEs,
        titleEn: build.nameEn,
        subtitle: sectionText.ranking.title,
        href: "#ranking"
      })
    );

    uniqueWeapons.forEach((weapon) =>
      sourceMap.set(`unique:${weapon.id}`, {
        id: `unique:${weapon.id}`,
        titleEs: weapon.nameEs,
        titleEn: weapon.nameEn,
        subtitle: sectionText.somber.title,
        href: "#somber"
      })
    );

    infusableSetups.forEach((setup) =>
      sourceMap.set(`infusable:${setup.id}`, {
        id: `infusable:${setup.id}`,
        titleEs: setup.nameEs,
        titleEn: setup.nameEn,
        subtitle: sectionText.infusables.title,
        href: "#infusables"
      })
    );

    topAshesOfWar.forEach((ash) =>
      sourceMap.set(`ash:${ash.id}`, {
        id: `ash:${ash.id}`,
        titleEs: ash.nameEs,
        titleEn: ash.nameEn,
        subtitle: sectionText.ashes.title,
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
        {uiText.skipToContent}
      </a>

      <StickyNav favoritesCount={favorites.length} />

      <main id="main-content" className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
        <HomeSection
          eyebrow={sectionText.home.eyebrow}
          title={sectionText.home.title}
          subtitle={sectionText.home.subtitle}
          ctaRanking={sectionText.home.ctaRanking}
          ctaWeapons={sectionText.home.ctaWeapons}
          ctaAshes={sectionText.home.ctaAshes}
          methodologyTitle={uiText.methodologyTitle}
          methodology={sectionText.home.methodology}
          highlights={homeHighlights}
        />

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

        <WeaponsIntroSection />

        <UniqueWeaponsSection weapons={filteredUniqueWeapons} favorites={favorites} onToggleFavorite={toggleFavorite} />

        <InfusableSection setups={filteredInfusableSetups} favorites={favorites} onToggleFavorite={toggleFavorite} />

        <AshesSection ashes={filteredAshes} favorites={favorites} onToggleFavorite={toggleFavorite} />

        <CompareSection builds={rankingBuilds} onOpenBuild={setSelectedBuild} />

        <LocationsSection regions={regionGuides} />

        <PlayerBuildsSection builds={filteredPlayerBuilds} />

        <FavoritesSection items={favoriteItems} />
      </main>

      <Footer title={footerText.title} description={footerText.description} note={footerText.note} />
      <BackToTopButton />
      <BuildDrawer build={selectedBuild} onClose={() => setSelectedBuild(undefined)} />
    </div>
  );
};

export default App;
