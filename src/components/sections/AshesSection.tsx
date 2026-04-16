import { excelsAtLabelMap, sectionText, uiText } from "../../data/meta";
import type { AshOfWarEntry } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { BadgePill, SimpleBadge, StageBadge, TierBadge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";

interface AshesSectionProps {
  ashes: AshOfWarEntry[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const AshesSection = ({ ashes, favorites, onToggleFavorite }: AshesSectionProps) => (
  <SectionShell
    id="ashes"
    eyebrow={sectionText.ashes.eyebrow}
    title={sectionText.ashes.title}
    subtitle={sectionText.ashes.subtitle}
  >
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {ashes.map((ash) => {
        const favoriteId = `ash:${ash.id}`;
        const isFavorite = favorites.includes(favoriteId);

        return (
          <Card key={ash.id}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h3 className="title-font text-2xl text-zinc-50">{ash.nameEs}</h3>
                <p className="text-xs text-zinc-400">{ash.nameEn}</p>
              </div>
              <FavoriteToggle
                active={isFavorite}
                onToggle={() => onToggleFavorite(favoriteId)}
                label={isFavorite ? uiText.removeFavorite : uiText.addFavorite}
              />
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              <TierBadge tier={ash.tier} />
              <SimpleBadge label={`Enfoque: ${excelsAtLabelMap[ash.excelsAt]}`} />
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              {ash.badges.map((badge) => (
                <BadgePill key={badge} badge={badge} />
              ))}
              {ash.stage.map((stage) => (
                <StageBadge key={`${ash.id}-${stage}`} stage={stage} />
              ))}
            </div>

            <p className="mb-3 text-sm text-zinc-200">
              <span className="font-semibold text-zinc-100">{uiText.whyBroken}: </span>
              {ash.shortDescription}
            </p>
            <p className="mb-3 text-sm leading-relaxed text-zinc-300">{ash.longDescription}</p>

            <div className="space-y-3 text-sm text-zinc-200">
              <div>
                <p className="font-semibold text-zinc-100">{uiText.buildType}</p>
                <p>{ash.playstyle}</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.bestUseCases}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {ash.bestFor.map((item) => (
                    <li key={`${ash.id}-best-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.bestWeapons}</p>
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
                <p className="font-semibold text-zinc-100">{uiText.pros}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {ash.pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.cons}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {ash.cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.location}</p>
                <p>{ash.location}</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.recommendation}</p>
                <p>{ash.recommendation}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  </SectionShell>
);
