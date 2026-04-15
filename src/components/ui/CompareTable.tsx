import { useMemo, useState } from "react";
import type { BuildEntry } from "../../types";

type SortableField = "name" | "bosses" | "area" | "stagger" | "bleed" | "ease";
type SortDirection = "asc" | "desc";

interface CompareTableProps {
  builds: BuildEntry[];
  onSelectBuild: (build: BuildEntry) => void;
}

const sortableHeaders: { label: string; field: SortableField }[] = [
  { label: "Configuración", field: "name" },
  { label: "Jefes", field: "bosses" },
  { label: "Área", field: "area" },
  { label: "Postura", field: "stagger" },
  { label: "Hemorragia", field: "bleed" },
  { label: "Facilidad", field: "ease" }
];

export const CompareTable = ({ builds, onSelectBuild }: CompareTableProps) => {
  const [sortField, setSortField] = useState<SortableField>("bosses");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedBuilds = useMemo(() => {
    return [...builds].sort((a, b) => {
      if (sortField === "name") {
        const result = a.nameEs.localeCompare(b.nameEs);
        return sortDirection === "asc" ? result : -result;
      }

      const result = a.score[sortField] - b.score[sortField];
      return sortDirection === "asc" ? result : -result;
    });
  }, [builds, sortDirection, sortField]);

  const onSort = (field: SortableField) => {
    if (field === sortField) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }
    setSortField(field);
    setSortDirection(field === "name" ? "asc" : "desc");
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-700 bg-zinc-950/70">
      <table className="min-w-[980px] w-full border-collapse text-left text-sm">
        <thead className="border-b border-zinc-700 bg-zinc-900/90 text-xs uppercase tracking-[0.12em] text-zinc-200">
          <tr>
            {sortableHeaders.map((header) => {
              const active = header.field === sortField;
              return (
                <th key={header.field} className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => onSort(header.field)}
                    className={`inline-flex items-center gap-2 transition ${active ? "text-rune" : "hover:text-zinc-100"}`}
                  >
                    {header.label}
                    <span className="text-[10px]">{active ? (sortDirection === "asc" ? "▲" : "▼") : "↕"}</span>
                  </button>
                </th>
              );
            })}
            <th className="px-4 py-3">Escalado</th>
            <th className="px-4 py-3">Etapa ideal</th>
          </tr>
        </thead>
        <tbody>
          {sortedBuilds.map((build) => (
            <tr
              key={build.id}
              className="cursor-pointer border-b border-zinc-800/80 text-zinc-200 transition hover:bg-zinc-800/45"
              onClick={() => onSelectBuild(build)}
            >
              <td className="px-4 py-3">
                <p className="font-semibold text-zinc-50">{build.nameEs}</p>
                <p className="text-xs text-zinc-400">{build.nameEn}</p>
              </td>
              <td className="px-4 py-3">{build.score.bosses}/10</td>
              <td className="px-4 py-3">{build.score.area}/10</td>
              <td className="px-4 py-3">{build.score.stagger}/10</td>
              <td className="px-4 py-3">{build.score.bleed}/10</td>
              <td className="px-4 py-3">{build.score.ease}/10</td>
              <td className="px-4 py-3">{build.scaling}</td>
              <td className="px-4 py-3">{build.idealGameStage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
