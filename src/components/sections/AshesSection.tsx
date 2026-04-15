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

const normalize = (value: string): string => value.toLowerCase();

export const AshesSection = ({ ashes, search, favorites, onToggleFavorite }: AshesSectionProps) => {
  const filtered = ashes.filter((ash) => {
    if (!search.trim()) {
      return true;
    }
    return normalize(`${ash.name} ${ash.type} ${ash.bestWeapons.join(" ")} ${ash.location}`).includes(
      normalize(search)
    );
  });

  return (
    <SectionShell
      id="ashes"
      title="Top Ashes of War para PvE"
      subtitle="Selección meta para bosses y limpieza con ventajas, desventajas y localización."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((ash) => {
          const favoriteId = `ash:${ash.id}`;
          const isFavorite = favorites.includes(favoriteId);
          return (
            <Card key={ash.id}>
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="title-font text-xl text-zinc-100">{ash.name}</h3>
                  <p className="text-sm text-zinc-300">{ash.type}</p>
                </div>
                <FavoriteToggle
                  active={isFavorite}
                  onToggle={() => onToggleFavorite(favoriteId)}
                  label={isFavorite ? "Quitar favorita" : "Añadir favorita"}
                />
              </div>

              <div className="mb-3 flex flex-wrap gap-2">
                <SimpleBadge label={`Enfoque: ${ash.excelsAt}`} />
              </div>

              <div className="space-y-3 text-sm text-zinc-200">
                <div>
                  <p className="font-semibold text-zinc-100">Mejores armas</p>
                  <p>{ash.bestWeapons.join(", ")}</p>
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
