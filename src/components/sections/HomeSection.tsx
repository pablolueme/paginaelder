import { fieldOrder } from "../../data/meta";
import type { HomeSummaryItem } from "../../types";
import { Card } from "../ui/Card";

interface HomeSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaRanking: string;
  ctaWeapons: string;
  ctaAshes: string;
  methodologyTitle: string;
  methodology: string;
  highlights: HomeSummaryItem[];
}

export const HomeSection = ({
  eyebrow,
  title,
  subtitle,
  ctaRanking,
  ctaWeapons,
  ctaAshes,
  methodologyTitle,
  methodology,
  highlights
}: HomeSectionProps) => (
  <section id="home" className="scroll-mt-28 py-12 md:py-16">
    <div className="premium-card relative overflow-hidden p-6 md:p-10">
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-rune/14 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 left-0 h-48 w-48 rounded-full bg-blood/24 blur-3xl" aria-hidden="true" />

      <div className="relative space-y-5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-200">{eyebrow}</p>
        <h1 className="title-font max-w-4xl text-3xl leading-tight text-zinc-50 md:text-5xl">{title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-zinc-200 md:text-lg">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#ranking"
            className="rounded-xl border border-rune bg-rune/20 px-4 py-2 text-sm font-semibold text-rune transition hover:bg-rune/30"
          >
            {ctaRanking}
          </a>
          <a
            href="#armas"
            className="rounded-xl border border-zinc-600 bg-zinc-900/70 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-rune/70"
          >
            {ctaWeapons}
          </a>
          <a
            href="#ashes"
            className="rounded-xl border border-zinc-600 bg-zinc-900/70 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-rune/70"
          >
            {ctaAshes}
          </a>
        </div>
      </div>
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {highlights.map((item) => (
        <Card key={item.id} className="h-full">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{item.label}</p>
          <h3 className="title-font mt-2 text-xl text-rune">{item.valueEs}</h3>
          <p className="text-xs text-zinc-400">{item.valueEn}</p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-200">{item.reason}</p>
        </Card>
      ))}
    </div>

    <Card className="mt-6">
      <h2 className="title-font text-xl text-zinc-50">{methodologyTitle}</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-200 md:text-base">{methodology}</p>
      <p className="mt-2 text-xs text-zinc-400">{fieldOrder.summary}</p>
    </Card>
  </section>
);
