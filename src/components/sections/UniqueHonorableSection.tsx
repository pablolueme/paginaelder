import { filterLabelMap, sectionText, uiText } from "../../data/meta";
import type { FilterKey, WeaponEntry } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { BadgePill, SimpleBadge, StageBadge, TierBadge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";

interface UniqueHonorableSectionProps {
  weapons: WeaponEntry[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const styleTagOrder: FilterKey[] = ["bosses", "area", "strength", "dex", "faith", "arcane", "bleed", "unique"];

export const UniqueHonorableSection = ({ weapons, favorites, onToggleFavorite }: UniqueHonorableSectionProps) => (
  <SectionShell
    id="unicas-fuertes"
    eyebrow={sectionText.uniqueHonorable.eyebrow}
    title={sectionText.uniqueHonorable.title}
    subtitle={sectionText.uniqueHonorable.subtitle}
  >
    <div className="grid gap-4 md:grid-cols-2">
      {weapons.map((weapon) => {
        const favoriteId = `uniqueHonorable:${weapon.id}`;
        const isFavorite = favorites.includes(favoriteId);
        const styleTags = styleTagOrder.filter((tag) => weapon.tags.includes(tag));
        const recommendedGear = [...weapon.talismans, ...weapon.buffs];

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
                <StageBadge key={`${weapon.id}-stage-${stage}`} stage={stage} />
              ))}
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              {styleTags.map((tag) => (
                <SimpleBadge key={`${weapon.id}-tag-${tag}`} label={filterLabelMap[tag]} />
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
                    <li key={`${weapon.id}-best-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.weakMatchups}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {weapon.weakerAgainst.map((item) => (
                    <li key={`${weapon.id}-weak-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.recommendation}</p>
                <p>{weapon.recommendation}</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.recommendedStats}</p>
                <p>{weapon.stats.join(" • ")}</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.recommendedGear}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {recommendedGear.map((item) => (
                    <li key={`${weapon.id}-gear-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  </SectionShell>
);
