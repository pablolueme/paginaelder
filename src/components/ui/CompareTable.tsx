import { useMemo, useState } from "react";
import { fieldOrder, uiText, stageLabelMap } from "../../data/meta";
import type { RankingBuild } from "../../types";

interface CompareTableProps {
  builds: RankingBuild[];
  onSelectBuild: (build: RankingBuild) => void;
}

const MAX_SELECTION = 4;

export const CompareTable = ({ builds, onSelectBuild }: CompareTableProps) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => builds.slice(0, 3).map((build) => build.id));

  const selectedBuilds = useMemo(
    () => builds.filter((build) => selectedIds.includes(build.id)).sort((a, b) => selectedIds.indexOf(a.id) - selectedIds.indexOf(b.id)),
    [builds, selectedIds]
  );

  const toggleSelected = (id: string) => {
    setSelectedIds((current) => {
      if (current.includes(id)) {
        return current.filter((entry) => entry !== id);
      }

      if (current.length >= MAX_SELECTION) {
        return current;
      }

      return [...current, id];
    });
  };

  return (
    <div className="space-y-4">
      <div className="premium-card p-4">
        <p className="mb-3 text-sm text-zinc-200">{uiText.compareSelectHint}</p>
        <div className="flex flex-wrap gap-2">
          {builds.map((build) => {
            const active = selectedIds.includes(build.id);
            return (
              <button
                key={build.id}
                type="button"
                onClick={() => toggleSelected(build.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "border-rune bg-rune/20 text-rune"
                    : "border-zinc-600 bg-zinc-800/60 text-zinc-100 hover:border-zinc-400"
                }`}
              >
                {active ? uiText.compareRemove : uiText.compareAdd} {build.nameEs}
              </button>
            );
          })}
        </div>
      </div>

      {selectedBuilds.length === 0 ? (
        <div className="premium-card p-4 text-sm text-zinc-300">{uiText.compareNoItems}</div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-zinc-700 bg-zinc-950/70">
          <table className="min-w-[940px] w-full border-collapse text-left text-sm">
            <thead className="border-b border-zinc-700 bg-zinc-900/90 text-xs uppercase tracking-[0.12em] text-zinc-200">
              <tr>
                <th className="px-4 py-3">{uiText.compareMetric}</th>
                {selectedBuilds.map((build) => (
                  <th key={build.id} className="px-4 py-3">
                    <button type="button" onClick={() => onSelectBuild(build)} className="text-left hover:text-rune">
                      <p className="font-semibold normal-case text-zinc-50">{build.nameEs}</p>
                      <p className="normal-case text-[11px] text-zinc-400">{build.nameEn}</p>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-800/70">
                <td className="px-4 py-3 text-zinc-300">{fieldOrder.comparisonStage}</td>
                {selectedBuilds.map((build) => (
                  <td key={`stage-${build.id}`} className="px-4 py-3 text-zinc-100">
                    {build.stage.map((stage) => stageLabelMap[stage]).join(", ")}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-zinc-800/70">
                <td className="px-4 py-3 text-zinc-300">{fieldOrder.comparisonBosses}</td>
                {selectedBuilds.map((build) => (
                  <td key={`boss-${build.id}`} className="px-4 py-3 text-zinc-100">{build.score.bosses}/10</td>
                ))}
              </tr>
              <tr className="border-b border-zinc-800/70">
                <td className="px-4 py-3 text-zinc-300">{fieldOrder.comparisonArea}</td>
                {selectedBuilds.map((build) => (
                  <td key={`area-${build.id}`} className="px-4 py-3 text-zinc-100">{build.score.area}/10</td>
                ))}
              </tr>
              <tr className="border-b border-zinc-800/70">
                <td className="px-4 py-3 text-zinc-300">{fieldOrder.comparisonPosture}</td>
                {selectedBuilds.map((build) => (
                  <td key={`posture-${build.id}`} className="px-4 py-3 text-zinc-100">{build.score.postura}/10</td>
                ))}
              </tr>
              <tr className="border-b border-zinc-800/70">
                <td className="px-4 py-3 text-zinc-300">{fieldOrder.comparisonBleed}</td>
                {selectedBuilds.map((build) => (
                  <td key={`bleed-${build.id}`} className="px-4 py-3 text-zinc-100">{build.score.hemorragia}/10</td>
                ))}
              </tr>
              <tr className="border-b border-zinc-800/70">
                <td className="px-4 py-3 text-zinc-300">{fieldOrder.comparisonEase}</td>
                {selectedBuilds.map((build) => (
                  <td key={`ease-${build.id}`} className="px-4 py-3 text-zinc-100">{build.score.facilidad}/10</td>
                ))}
              </tr>
              <tr className="border-b border-zinc-800/70">
                <td className="px-4 py-3 text-zinc-300">{fieldOrder.comparisonScaling}</td>
                {selectedBuilds.map((build) => (
                  <td key={`scaling-${build.id}`} className="px-4 py-3 text-zinc-100">{build.scaling}</td>
                ))}
              </tr>
              <tr>
                <td className="px-4 py-3 text-zinc-300">{fieldOrder.comparisonRecommendation}</td>
                {selectedBuilds.map((build) => (
                  <td key={`rec-${build.id}`} className="px-4 py-3 text-zinc-100">{build.recommendation}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
