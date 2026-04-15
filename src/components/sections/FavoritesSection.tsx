import type { PropsWithChildren } from "react";
import { SectionShell } from "../layout/SectionShell";
import { Card } from "../ui/Card";

interface FavoriteViewItem {
  id: string;
  titleEs: string;
  titleEn: string;
  subtitle: string;
  href: string;
}

interface FavoritesSectionProps {
  items: FavoriteViewItem[];
}

const EmptyState = ({ children }: PropsWithChildren) => (
  <Card>
    <p className="text-sm leading-relaxed text-zinc-200">{children}</p>
  </Card>
);

export const FavoritesSection = ({ items }: FavoritesSectionProps) => (
  <SectionShell
    id="favoritos"
    title="Favoritos"
    subtitle="Sección local sin backend. Tus favoritos quedan guardados en este navegador."
  >
    {items.length === 0 ? (
      <EmptyState>
        Todavía no añadiste favoritos. Usa la estrella en cualquier ficha para crear tu lista personal.
      </EmptyState>
    ) : (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id}>
            <p className="title-font text-xl text-zinc-50">{item.titleEs}</p>
            <p className="text-xs text-zinc-400">{item.titleEn}</p>
            <p className="mt-1 text-sm text-zinc-300">{item.subtitle}</p>
            <a
              href={item.href}
              className="mt-4 inline-flex rounded-lg border border-rune/70 bg-rune/20 px-3 py-1.5 text-xs font-semibold text-rune transition hover:bg-rune/30"
            >
              Ir a sección
            </a>
          </Card>
        ))}
      </div>
    )}
  </SectionShell>
);
