interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  ariaLabel: string;
}

export const SearchBar = ({ value, onChange, placeholder, ariaLabel }: SearchBarProps) => (
  <label className="relative block w-full">
    <span className="sr-only">{ariaLabel}</span>
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-zinc-500 bg-zinc-900/80 py-3 pl-10 pr-4 text-sm font-medium text-zinc-100 placeholder:text-zinc-400 focus:border-rune focus:outline-none focus:ring-2 focus:ring-rune/40"
    />
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
    >
      <path
        fill="currentColor"
        d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 14 15.5l.27.28v.79L20 22.5 22.5 20zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"
      />
    </svg>
  </label>
);
