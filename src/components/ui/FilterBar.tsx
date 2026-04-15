import type { FilterOption, FilterKey } from "../../types";

interface FilterBarProps {
  options: FilterOption[];
  activeFilters: FilterKey[];
  onToggle: (filter: FilterKey) => void;
  onClear: () => void;
  title: string;
  clearLabel: string;
}

export const FilterBar = ({ options, activeFilters, onToggle, onClear, title, clearLabel }: FilterBarProps) => (
  <div className="premium-card p-4">
    <div className="mb-3 flex items-center justify-between gap-3">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-300">{title}</p>
      <button
        type="button"
        onClick={onClear}
        className="rounded-full border border-zinc-600 px-3 py-1 text-xs font-semibold text-zinc-100 transition hover:border-rune/60 hover:text-rune"
      >
        {clearLabel}
      </button>
    </div>

    <div className="flex flex-wrap gap-2">
      {options.map((filter) => {
        const active = activeFilters.includes(filter.key);
        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => onToggle(filter.key)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              active
                ? "border-rune bg-rune/20 text-rune"
                : "border-zinc-600 bg-zinc-800/55 text-zinc-100 hover:border-zinc-400"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  </div>
);
