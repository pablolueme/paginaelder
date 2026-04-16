import { filterLabelMap, sectionText, uiText } from "../../data/meta";
import type { PlayerBuildEntry } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { BadgePill, SimpleBadge, StageBadge } from "../ui/Badge";
import { Card } from "../ui/Card";

interface PlayerBuildsSectionProps {
  builds: PlayerBuildEntry[];
}

export const PlayerBuildsSection = ({ builds }: PlayerBuildsSectionProps) => (
  <SectionShell
    id="builds-jugadores"
    eyebrow={sectionText.playerBuilds.eyebrow}
    title={sectionText.playerBuilds.title}
    subtitle={sectionText.playerBuilds.subtitle}
  >
    <div className="grid gap-4 md:grid-cols-2">
      {builds.map((build) => (
        <Card key={build.id}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{build.author}</p>
            <BadgePill badge="playerBuild" />
          </div>

          <h3 className="title-font text-2xl text-zinc-50">{build.buildName}</h3>
          <p className="text-xs text-zinc-400">{build.subtitle}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {build.tags.map((tag) => (
              <SimpleBadge key={`${build.id}-tag-${tag}`} label={filterLabelMap[tag]} />
            ))}
            {build.stage.map((stage) => (
              <StageBadge key={`${build.id}-${stage}`} stage={stage} />
            ))}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-200">{build.shortDescription}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">{build.longDescription}</p>

          <div className="mt-4 space-y-3 text-sm text-zinc-200">
            <p>
              <span className="font-semibold text-zinc-100">{uiText.build}: </span>
              {build.focus}
            </p>
            <p>
              <span className="font-semibold text-zinc-100">{uiText.mainWeapon}: </span>
              {build.weaponMain.nameEs}
              <span className="ml-2 text-xs text-zinc-400">{build.weaponMain.nameEn}</span>
            </p>
            <p>
              <span className="font-semibold text-zinc-100">{uiText.secondaryWeapon}: </span>
              {build.weaponSecondary.nameEs}
              <span className="ml-2 text-xs text-zinc-400">{build.weaponSecondary.nameEn}</span>
            </p>
            <p>
              <span className="font-semibold text-zinc-100">{uiText.ashOfWar}: </span>
              {build.ashOfWar.nameEs}
              <span className="ml-2 text-xs text-zinc-400">{build.ashOfWar.nameEn}</span>
            </p>
            <p>
              <span className="font-semibold text-zinc-100">{uiText.bestUseCases}: </span>
              {build.whenToUse}
            </p>
            <p>
              <span className="font-semibold text-zinc-100">{uiText.weakMatchups}: </span>
              {build.weakerAgainst}
            </p>
            <p>
              <span className="font-semibold text-zinc-100">{uiText.recommendation}: </span>
              {build.recommendation}
            </p>
          </div>

          <div className="mt-4 space-y-3 text-sm text-zinc-200">
            <div>
              <p className="font-semibold text-zinc-100">{uiText.recommendedStats}</p>
              <ul className="list-disc space-y-1 pl-4">
                {build.stats.map((stat) => (
                  <li key={`${build.id}-stat-${stat}`}>{stat}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-zinc-100">{uiText.recommendedTalismans}</p>
              <ul className="list-disc space-y-1 pl-4">
                {build.talismans.map((tal) => (
                  <li key={`${build.id}-tal-${tal.nameEn}`}>
                    {tal.nameEs}
                    <span className="ml-2 text-xs text-zinc-400">{tal.nameEn}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-zinc-100">{uiText.recommendedBuffs}</p>
              <ul className="list-disc space-y-1 pl-4">
                {build.buffs.map((buff) => (
                  <li key={`${build.id}-buff-${buff.nameEn}`}>
                    {buff.nameEs}
                    <span className="ml-2 text-xs text-zinc-400">{buff.nameEn}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-zinc-100">{uiText.howToGet}</p>
              <ul className="list-disc space-y-2 pl-4">
                {build.locations.map((item) => (
                  <li key={`${build.id}-loc-${item.nameEn}`}>
                    <p>
                      {item.nameEs}
                      <span className="ml-2 text-xs text-zinc-400">{item.nameEn}</span>
                    </p>
                    <p className="text-zinc-300">{item.howToGet}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-rune/40 bg-rune/10 p-3">
              <p className="font-semibold text-rune">{uiText.notesTitle}</p>
              <ul className="list-disc space-y-1 pl-4 text-zinc-100">
                {build.notes.map((note) => (
                  <li key={`${build.id}-note-${note}`}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </SectionShell>
);
