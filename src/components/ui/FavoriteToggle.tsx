interface FavoriteToggleProps {
  active: boolean;
  onToggle: () => void;
  label: string;
}

export const FavoriteToggle = ({ active, onToggle, label }: FavoriteToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={label}
    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${
      active
        ? "border-rune bg-rune/20 text-rune"
        : "border-zinc-600 bg-zinc-800/50 text-zinc-300 hover:border-rune/60 hover:text-rune"
    }`}
  >
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="m12 18.3-5.57 3.02 1.06-6.4L2.9 10.2l6.43-.97L12 3.4l2.67 5.83 6.43.97-4.6 4.72 1.07 6.4z" />
    </svg>
  </button>
);
