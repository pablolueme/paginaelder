import { sectionText, uiText } from "../../data/meta";
import type { WeaponEntry } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { BadgePill, SimpleBadge, StageBadge, TierBadge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { FavoriteToggle } from "../ui/FavoriteToggle";

interface InfusableSectionProps {
  setups: WeaponEntry[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const InfusableSection = ({ setups, favorites, onToggleFavorite }: InfusableSectionProps) => (
  <SectionShell
    id="infusables"
    eyebrow={sectionText.infusables.eyebrow}
    title={sectionText.infusables.title}
    subtitle={sectionText.infusables.subtitle}
  >
    <div className="grid gap-4 md:grid-cols-2">
      {setups.map((setup) => {
        const favoriteId = `infusable:${setup.id}`;
        const isFavorite = favorites.includes(favoriteId);

        return (
          <Card key={setup.id}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h3 className="title-font text-2xl text-zinc-50">{setup.nameEs}</h3>
                <p className="text-xs text-zinc-400">{setup.nameEn}</p>
                <p className="mt-1 text-sm text-zinc-300">{setup.weaponType}</p>
              </div>
              <FavoriteToggle
                active={isFavorite}
                onToggle={() => onToggleFavorite(favoriteId)}
                label={isFavorite ? uiText.removeFavorite : uiText.addFavorite}
              />
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              <TierBadge tier={setup.tier} />
              {setup.badges.map((badge) => (
                <BadgePill key={badge} badge={badge} />
              ))}
              {setup.highlightLabel ? <SimpleBadge label={setup.highlightLabel} /> : null}
            </div>

            <div className="mb-3 flex flex-wrap gap-2">
              {setup.stage.map((stage) => (
                <StageBadge key={stage} stage={stage} />
              ))}
            </div>

            <p className="mb-3 text-sm text-zinc-200">
              <span className="font-semibold text-zinc-100">{uiText.whyBroken}: </span>
              {setup.shortDescription}
            </p>
            <p className="mb-3 text-sm leading-relaxed text-zinc-300">{setup.longDescription}</p>

            <div className="space-y-3 text-sm text-zinc-200">
              <div>
                <p className="font-semibold text-zinc-100">{uiText.bestUseCases}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {setup.bestFor.map((item) => (
                    <li key={`${setup.id}-best-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{uiText.weakMatchups}</p>
                <ul className="list-disc space-y-1 pl-4">
                  {setup.weakerAgainst.map((item) => (
                    <li key={`${setup.id}-weak-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <p>
                <span className="font-semibold text-zinc-100">{uiText.affinity}: </span>
                {setup.affinity}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">{uiText.playstyle}: </span>
                {setup.playstyle}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">{uiText.recommendation}: </span>
                {setup.recommendation}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">{uiText.region}: </span>
                {setup.region.join(", ")}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">{uiText.howToGet}: </span>
                {setup.howToGet}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">{uiText.recommendedStats}: </span>
                {setup.stats.join(" • ")}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">{uiText.recommendedTalismans}: </span>
                {setup.talismans.join(" • ")}
              </p>
              <p>
                <span className="font-semibold text-zinc-100">{uiText.recommendedBuffs}: </span>
                {setup.buffs.join(" • ")}
              </p>
              <div>
                <p className="mb-1 font-semibold text-zinc-100">{uiText.ashOfWar}</p>
                <div className="flex flex-wrap gap-2">
                  {setup.bestAshes.map((ash) => (
                    <SimpleBadge key={`${setup.id}-${ash}`} label={ash} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  </SectionShell>
);
