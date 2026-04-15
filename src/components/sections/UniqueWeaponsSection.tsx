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

const normalize = (value: string): string =>
  value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

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
    return normalize(
      `${weapon.nameEs} ${weapon.nameEn} ${weapon.categoryEs} ${weapon.categoryEn} ${weapon.whyBroken}`
    ).includes(normalize(search));
  });

  return (
    <SectionShell
      id="somber"
      title="Armas únicas"
      subtitle="Fichas premium con fortalezas, límites reales, configuración recomendada y ruta de obtención."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((weapon) => {
          const favoriteId = `unique:${weapon.id}`;
          const isFavorite = favorites.includes(favoriteId);

          return (
            <Card key={weapon.id}>
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="title-font text-2xl text-zinc-50">{weapon.nameEs}</h3>
                  <p className="text-xs text-zinc-400">{weapon.nameEn}</p>
                  <p className="mt-1 text-sm text-zinc-300">{weapon.categoryEs}</p>
                  <p className="text-xs text-zinc-500">{weapon.categoryEn}</p>
                </div>
                <div className="flex items-center gap-2">
                  <TierBadge tier={weapon.tier} />
                  <FavoriteToggle
                    active={isFavorite}
                    onToggle={() => onToggleFavorite(favoriteId)}
                    label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
                  />
                </div>
              </div>

              <p className="mb-3 text-sm leading-relaxed text-zinc-200">{weapon.whyBroken}</p>

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
                    label: "Configuración",
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
                          <p className="font-semibold text-zinc-100">Mejoras</p>
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
