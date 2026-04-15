const links = [
  { id: "home", label: "Inicio" },
  { id: "ranking", label: "Ranking" },
  { id: "somber", label: "Armas únicas" },
  { id: "infusables", label: "Armas infusables" },
  { id: "ashes", label: "Cenizas de guerra" },
  { id: "comparador", label: "Comparador" },
  { id: "obtencion", label: "Localizaciones" },
  { id: "favoritos", label: "Favoritos" }
];

interface StickyNavProps {
  favoritesCount: number;
}

export const StickyNav = ({ favoritesCount }: StickyNavProps) => (
  <header className="sticky top-0 z-40 border-b border-zinc-700/80 bg-abyss/95 backdrop-blur-md">
    <nav className="mx-auto max-w-7xl px-4 py-3 lg:px-6" aria-label="Navegación principal">
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="title-font text-sm font-semibold tracking-wider text-rune md:text-base">
          Elden Ring Meta PvE
        </a>
        <p className="hidden rounded-full border border-zinc-600/90 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-200 md:block">
          Favoritos: <span className="text-rune">{favoritesCount}</span>
        </p>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="whitespace-nowrap rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-xs font-semibold text-zinc-100 transition hover:border-rune/70 hover:text-rune"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  </header>
);
