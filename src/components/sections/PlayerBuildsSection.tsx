import { sectionText, uiText } from "../../data/meta";
import type { PlayerBuildEntry } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { BadgePill, StageBadge } from "../ui/Badge";
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
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {builds.map((build) => (
        <Card key={build.id}>
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{build.author}</p>
            <BadgePill badge="playerBuild" />
          </div>
          <h3 className="title-font text-xl text-zinc-50">{build.buildName}</h3>
          <p className="mt-1 text-sm text-zinc-300">{build.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {build.stage.map((stage) => (
              <StageBadge key={`${build.id}-${stage}`} stage={stage} />
            ))}
          </div>

          <div className="mt-4 space-y-2 text-sm text-zinc-200">
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
            {build.isPlaceholder ? <p className="text-rune">{uiText.playerBuildPlaceholder}</p> : null}
          </div>
        </Card>
      ))}
    </div>
  </SectionShell>
);
