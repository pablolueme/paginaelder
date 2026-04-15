import type { UniqueWeapon } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { RoleBadgePill, TierBadge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";
import { Tabs } from "../ui/Tabs";

interface UniqueWeaponsSectionProps {
  weapons: UniqueWeapon[];
  search: string;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const normalize = (value: string): string => value.toLowerCase();

export const UniqueWeaponsSection = ({
  weapons,
  search,
  favorites,
  onToggleFavorite
}: UniqueWeaponsSectionProps) => {
  const filtered = weapons.filter((weapon) => {
    if (!search.trim()) {
      return true;
    }
    return normalize(`${weapon.name} ${weapon.category} ${weapon.whyBroken}`).includes(normalize(search));
  });

  return (
    <SectionShell
      id="somber"
      title="Mejores Armas Únicas / Somber"
      subtitle="Fichas premium con puntos fuertes, límites reales, setup recomendado y ruta de obtención."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((weapon) => {
          const favoriteId = `unique:${weapon.id}`;
          const isFavorite = favorites.includes(favoriteId);

          return (
            <Card key={weapon.id}>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="title-font text-xl text-zinc-100">{weapon.name}</h3>
                  <p className="text-sm text-zinc-300">{weapon.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  <TierBadge tier={weapon.tier} />
                  <FavoriteToggle
                    active={isFavorite}
                    onToggle={() => onToggleFavorite(favoriteId)}
                    label={isFavorite ? "Quitar favorita" : "Añadir favorita"}
                  />
                </div>
              </div>

              <p className="mb-3 text-sm text-zinc-200">{weapon.whyBroken}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {weapon.badges.map((badge) => (
                  <RoleBadgePill key={badge} badge={badge} />
                ))}
              </div>

              <Tabs
                tabs={[
                  {
                    id: "uses",
                    label: "Usos",
                    content: (
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-zinc-100">Mejores usos</p>
                          <ul className="mt-1 list-disc space-y-1 pl-4">
                            {weapon.bestUses.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-zinc-100">Limitaciones</p>
                          <ul className="mt-1 list-disc space-y-1 pl-4">
                            {weapon.limitations.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "setup",
                    label: "Setup",
                    content: (
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-zinc-100">Stats recomendados</p>
                          <ul className="mt-1 list-disc space-y-1 pl-4">
                            {weapon.recommendedStats.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-zinc-100">Talismanes</p>
                          <ul className="mt-1 list-disc space-y-1 pl-4">
                            {weapon.talismans.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-zinc-100">Buffs</p>
                          <ul className="mt-1 list-disc space-y-1 pl-4">
                            {weapon.buffs.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "loot",
                    label: "Obtención",
                    content: (
                      <div className="space-y-3">
                        <div>
                          <p className="font-semibold text-zinc-100">Cómo conseguirla</p>
                          <p className="mt-1">{weapon.howToGet}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-zinc-100">Notas rápidas</p>
                          <ul className="mt-1 list-disc space-y-1 pl-4">
                            {weapon.quickNotes.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
