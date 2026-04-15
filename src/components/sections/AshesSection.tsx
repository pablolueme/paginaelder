import type { AshOfWarEntry } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";
import { SimpleBadge } from "../ui/Badge";

interface AshesSectionProps {
  ashes: AshOfWarEntry[];
  search: string;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const normalize = (value: string): string =>
  value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export const AshesSection = ({ ashes, search, favorites, onToggleFavorite }: AshesSectionProps) => {
  const filtered = ashes.filter((ash) => {
    if (!search.trim()) {
      return true;
    }

    return normalize(
      `${ash.nameEs} ${ash.nameEn} ${ash.typeEs} ${ash.typeEn} ${ash.bestWeapons
        .map((weapon) => `${weapon.nameEs} ${weapon.nameEn}`)
        .join(" ")} ${ash.location}`
    ).includes(normalize(search));
  });

  return (
    <SectionShell
      id="ashes"
      title="Cenizas de guerra"
      subtitle="Selección meta para jefes y limpieza con ventajas, desventajas y localización."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((ash) => {
          const favoriteId = `ash:${ash.id}`;
          const isFavorite = favorites.includes(favoriteId);

          return (
            <Card key={ash.id}>
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="title-font text-2xl text-zinc-50">{ash.nameEs}</h3>
                  <p className="text-xs text-zinc-400">{ash.nameEn}</p>
                  <p className="mt-1 text-sm text-zinc-300">{ash.typeEs}</p>
                  <p className="text-xs text-zinc-500">{ash.typeEn}</p>
                </div>
                <FavoriteToggle
                  active={isFavorite}
                  onToggle={() => onToggleFavorite(favoriteId)}
                  label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                />
              </div>

              <div className="mb-3 flex flex-wrap gap-2">
                <SimpleBadge label={`Enfoque: ${ash.excelsAt}`} />
              </div>

              <div className="space-y-3 text-sm text-zinc-200">
                <div>
                  <p className="font-semibold text-zinc-100">Mejores armas</p>
                  <ul className="mt-1 space-y-1">
                    {ash.bestWeapons.map((weapon) => (
                      <li key={`${ash.id}-${weapon.nameEn}`}>
                        <span className="font-medium text-zinc-100">{weapon.nameEs}</span>
                        <span className="ml-2 text-xs text-zinc-400">{weapon.nameEn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-zinc-100">Ventajas</p>
                  <ul className="list-disc space-y-1 pl-4">
                    {ash.advantages.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-zinc-100">Desventajas</p>
                  <ul className="list-disc space-y-1 pl-4">
                    {ash.disadvantages.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-zinc-100">Localización</p>
                  <p>{ash.location}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
};
