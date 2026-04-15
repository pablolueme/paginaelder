import type { PropsWithChildren } from "react";
import { sectionText, uiText } from "../../data/meta";
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
    eyebrow={sectionText.favoritos.eyebrow}
    title={sectionText.favoritos.title}
    subtitle={sectionText.favoritos.subtitle}
  >
    {items.length === 0 ? (
      <EmptyState>{uiText.favoritesEmpty}</EmptyState>
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
              {uiText.goToSection}
            </a>
          </Card>
        ))}
      </div>
    )}
  </SectionShell>
);
