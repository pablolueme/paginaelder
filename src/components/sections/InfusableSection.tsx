import type { InfusableSetup } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { RoleBadgePill, SimpleBadge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";
import { Tabs } from "../ui/Tabs";

interface InfusableSectionProps {
  setups: InfusableSetup[];
  search: string;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const normalize = (value: string): string =>
  value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const formatAshes = (setups: InfusableSetup["bestAshes"], language: "es" | "en"): string =>
  setups.map((ash) => (language === "es" ? ash.nameEs : ash.nameEn)).join(" / ");

export const InfusableSection = ({
  setups,
  search,
  favorites,
  onToggleFavorite
}: InfusableSectionProps) => {
  const filtered = setups.filter((setup) => {
    if (!search.trim()) {
      return true;
    }

    return normalize(
      `${setup.nameEs} ${setup.nameEn} ${setup.baseWeapon.nameEs} ${setup.baseWeapon.nameEn} ${setup.bestAshes
        .map((ash) => `${ash.nameEs} ${ash.nameEn}`)
        .join(" ")} ${setup.whyBroken}`
    ).includes(normalize(search));
  });

  return (
    <SectionShell
      id="infusables"
      title="Armas infusables"
      subtitle="Configuraciones fuertes con afinidad recomendada y estilo de juego claro para el juego base."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((setup) => {
          const favoriteId = `infusable:${setup.id}`;
          const isFavorite = favorites.includes(favoriteId);

          return (
            <Card key={setup.id}>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="title-font text-2xl text-zinc-50">{setup.nameEs}</h3>
                  <p className="text-xs text-zinc-400">{setup.nameEn}</p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Mejor ceniza de guerra:{" "}
                    <span className="font-semibold text-zinc-100">{formatAshes(setup.bestAshes, "es")}</span>
                  </p>
                  <p className="text-xs text-zinc-500">{formatAshes(setup.bestAshes, "en")}</p>
                </div>
                <FavoriteToggle
                  active={isFavorite}
                  onToggle={() => onToggleFavorite(favoriteId)}
                  label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                />
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {setup.badges.map((badge) => (
                  <RoleBadgePill key={badge} badge={badge} />
                ))}
                <SimpleBadge label={`Afinidad: ${setup.recommendedAffinity}`} />
              </div>

              <p className="mb-4 text-sm leading-relaxed text-zinc-200">{setup.whyBroken}</p>

              <Tabs
                tabs={[
                  {
                    id: "setup",
                    label: "Configuración",
                    content: (
                      <div className="space-y-2">
                        <p>
                          <span className="font-semibold text-zinc-100">Configuración recomendada:</span>{" "}
                          {setup.recommendedBuild}
                        </p>
                        <p>
                          <span className="font-semibold text-zinc-100">Estilo de juego:</span> {setup.playstyle}
                        </p>
                      </div>
                    )
                  },
                  {
                    id: "routes",
                    label: "Obtención",
                    content: (
                      <div className="space-y-2">
                        <p>
                          <span className="font-semibold text-zinc-100">Dónde conseguir el arma:</span>{" "}
                          {setup.weaponLocation}
                        </p>
                        <p>
                          <span className="font-semibold text-zinc-100">Dónde conseguir la ceniza:</span>{" "}
                          {setup.ashLocation}
                        </p>
                      </div>
                    )
                  },
                  {
                    id: "variants",
                    label: "Variantes",
                    content: (
                      <ul className="list-disc space-y-1 pl-4">
                        {setup.variants.map((variant) => (
                          <li key={variant}>{variant}</li>
                        ))}
                      </ul>
                    )
                  }
                ]}
              />
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
};
