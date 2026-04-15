import { stageLabelMap, uiText } from "../../data/meta";
import type { RankingBuild } from "../../types";
import { BadgePill, SimpleBadge, StageBadge, TierBadge } from "./Badge";

interface BuildDrawerProps {
  build?: RankingBuild;
  onClose: () => void;
}

export const BuildDrawer = ({ build, onClose }: BuildDrawerProps) => {
  if (!build) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <button type="button" className="absolute inset-0 bg-black/70" onClick={onClose} aria-label={uiText.closePanel} />

      <aside
        className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-zinc-700 bg-zinc-950 p-6 shadow-2xl"
        aria-label={`${uiText.rankingDetail} ${build.nameEs}`}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{uiText.rankingDetail}</p>
            <h3 className="title-font mt-1 text-2xl text-zinc-50">{build.nameEs}</h3>
            <p className="text-xs text-zinc-400">{build.nameEn}</p>
            <p className="mt-1 text-sm text-zinc-300">{build.weaponType}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-zinc-600 p-2 text-zinc-300 transition hover:border-rune/70 hover:text-rune"
            aria-label={uiText.closePanel}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <TierBadge tier={build.tier} />
          <SimpleBadge label={`#${build.rank}`} />
          {build.badges.map((badge) => (
            <BadgePill key={badge} badge={badge} />
          ))}
          {build.stage.map((stage) => (
            <StageBadge key={stage} stage={stage} />
          ))}
        </div>

        <div className="space-y-5 text-sm">
          <section className="rounded-xl border border-zinc-700/70 bg-zinc-900/60 p-4">
            <h4 className="mb-2 text-xs uppercase tracking-[0.16em] text-rune">{uiText.notesTitle}</h4>
            <p className="text-zinc-200">{build.shortDescription}</p>
            <p className="mt-2 text-zinc-200">{build.longDescription}</p>
          </section>

          <section className="rounded-xl border border-zinc-700/70 bg-zinc-900/60 p-4">
            <h4 className="mb-2 text-xs uppercase tracking-[0.16em] text-rune">{uiText.bestUseCases}</h4>
            <ul className="list-disc space-y-1 pl-4 text-zinc-200">
              {build.bestFor.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <p className="mb-1 mt-3 font-semibold text-zinc-100">{uiText.weakMatchups}</p>
            <ul className="list-disc space-y-1 pl-4 text-zinc-200">
              {build.weakerAgainst.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-zinc-700/70 bg-zinc-900/60 p-4">
            <h4 className="mb-2 text-xs uppercase tracking-[0.16em] text-rune">{uiText.recommendedStats}</h4>
            <ul className="mb-3 list-disc space-y-1 pl-4 text-zinc-200">
              {build.stats.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <p className="mb-1 font-semibold text-zinc-100">{uiText.recommendedTalismans}</p>
            <ul className="mb-3 list-disc space-y-1 pl-4 text-zinc-200">
              {build.talismans.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <p className="mb-1 font-semibold text-zinc-100">{uiText.recommendedBuffs}</p>
            <ul className="list-disc space-y-1 pl-4 text-zinc-200">
              {build.buffs.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-zinc-700/70 bg-zinc-900/60 p-4">
            <p className="font-semibold text-zinc-100">{uiText.howToGet}</p>
            <p className="mt-1 text-zinc-200">{build.howToGet}</p>
            <p className="mt-3 font-semibold text-zinc-100">{uiText.recommendation}</p>
            <p className="mt-1 text-zinc-200">{build.recommendation}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <SimpleBadge label={`${uiText.scaling}: ${build.scaling}`} />
              <SimpleBadge label={`${uiText.difficulty}: ${build.difficulty}`} />
              <SimpleBadge label={`${uiText.affinity}: ${build.affinity}`} />
              <SimpleBadge label={`${uiText.stage}: ${build.stage.map((stage) => stageLabelMap[stage]).join(", ")}`} />
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
};
