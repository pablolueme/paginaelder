import { filterOptions } from "../../data/builds";
import type { FilterKey } from "../../types";

interface FilterBarProps {
  activeFilters: FilterKey[];
  onToggle: (filter: FilterKey) => void;
  onClear: () => void;
}

export const FilterBar = ({ activeFilters, onToggle, onClear }: FilterBarProps) => (
  <div className="premium-card p-4">
    <div className="mb-3 flex items-center justify-between gap-3">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Filtros</p>
      <button
        type="button"
        onClick={onClear}
        className="rounded-full border border-zinc-600 px-3 py-1 text-xs text-zinc-200 transition hover:border-rune/60 hover:text-rune"
      >
        Limpiar
      </button>
    </div>

    <div className="flex flex-wrap gap-2">
      {filterOptions.map((filter) => {
        const active = activeFilters.includes(filter.key);
        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => onToggle(filter.key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              active
                ? "border-rune bg-rune/20 text-rune"
                : "border-zinc-600 bg-zinc-800/40 text-zinc-200 hover:border-zinc-400"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  </div>
);
