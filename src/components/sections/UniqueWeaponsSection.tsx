import { sectionText, uiText } from "../../data/meta";
import type { WeaponEntry } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { BadgePill, SimpleBadge, StageBadge, TierBadge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";

interface UniqueWeaponsSectionProps {
  weapons: WeaponEntry[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const UniqueWeaponsSection = ({ weapons, favorites, onToggleFavorite }: UniqueWeaponsSectionProps) => (
  <SectionShell
    id="somber"
    eyebrow={sectionText.somber.eyebrow}
    title={sectionText.somber.title}
    subtitle={sectionText.somber.subtitle}
  >
    <div className="grid gap-4 md:grid-cols-2">
      {weapons.map((weapon) => {
        const favoriteId = `unique:${weapon.id}`;
        const isFavorite = favorites.includes(favoriteId);

        return (
          <Card key={weapon.id}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="title-font text-2xl text-zinc-50">{weapon.nameEs}</h3>
                <p className="text-xs text-zinc-400">{weapon.nameEn}</p>
                <p className="mt-1 text-sm text-zinc-300">{weapon.weaponType}</p>
              </div>
              <FavoriteToggle
                active={isFavorite}
                onToggle={() => onToggleFavorite(favoriteId)}
                label={isFavorite ? uiText.removeFavorite : uiText.addFavorite}
              />
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              <TierBadge tier={weapon.tier} />
              {weapon.badges.map((badge) => (
                <BadgePill key={badge} badge={badge} />
              ))}
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              {weapon.stage.map((stage) => (
                <StageBadge key={stage} stage={stage} />
              ))}
            </div>

            <p className="mb-3 text-sm text-zinc-200">
              <span className="font-semibold text-zinc-100">{uiText.whyBroken}: </span>
              {weapon.shortDescription}
            </p>
            <p className="mb-3 text-sm leading-relaxed text-zinc-300">{weapon.longDescription}</p>

            <div className="space-y-3 text-sm text-zinc-200">
              <div>
                <p className="font-semibold text-zinc-100">{uiText.bestUseCases}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {weapon.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.weakMatchups}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {weapon.weakerAgainst.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                <SimpleBadge label={`${uiText.scaling}: ${weapon.scaling}`} />
                <SimpleBadge label={`${uiText.difficulty}: ${weapon.difficulty}`} />
                <SimpleBadge label={`${uiText.affinity}: ${weapon.affinity}`} />
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.recommendedStats}</p>
                <p>{weapon.stats.join(" • ")}</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.recommendedTalismans}</p>
                <p>{weapon.talismans.join(" • ")}</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.recommendedBuffs}</p>
                <p>{weapon.buffs.join(" • ")}</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.howToGet}</p>
                <p>{weapon.howToGet}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  </SectionShell>
);
