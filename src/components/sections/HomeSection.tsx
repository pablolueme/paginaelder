import type { HomeHighlight } from "../../types";
import { Card } from "../ui/Card";

interface HomeSectionProps {
  highlights: HomeHighlight[];
  roleWinners: HomeHighlight[];
  methodology: string;
}

export const HomeSection = ({ highlights, roleWinners, methodology }: HomeSectionProps) => (
  <section id="home" className="scroll-mt-28 py-10 md:py-14">
    <div className="premium-card relative overflow-hidden p-6 md:p-10">
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-rune/12 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 left-0 h-48 w-48 rounded-full bg-blood/20 blur-3xl" aria-hidden="true" />

      <div className="relative space-y-5">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-300">Guía premium PvE</p>
        <h1 className="title-font max-w-4xl text-3xl leading-tight text-zinc-100 md:text-5xl">
          Elden Ring Base Game Meta PvE Guide
        </h1>
        <p className="max-w-3xl text-base text-zinc-200 md:text-lg">
          Solo juego base, sin DLC. Builds, armas y Ashes of War más rotas para progresión real en PvE.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#ranking"
            className="rounded-xl border border-rune bg-rune/20 px-4 py-2 text-sm font-semibold text-rune transition hover:bg-rune/30"
          >
            Ver Ranking
          </a>
          <a
            href="#somber"
            className="rounded-xl border border-zinc-600 bg-zinc-900/70 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-rune/70"
          >
            Ver Armas
          </a>
          <a
            href="#ashes"
            className="rounded-xl border border-zinc-600 bg-zinc-900/70 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-rune/70"
          >
            Ver Ashes of War
          </a>
        </div>
      </div>
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {highlights.map((item) => (
        <Card key={item.label} className="h-full">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{item.label}</p>
          <h3 className="title-font mt-2 text-lg text-rune">{item.value}</h3>
          <p className="mt-2 text-sm text-zinc-200">{item.reason}</p>
        </Card>
      ))}
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {roleWinners.map((item) => (
        <Card key={item.label} className="h-full">
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">{item.label}</p>
          <h3 className="title-font mt-2 text-lg text-rune">{item.value}</h3>
          <p className="mt-2 text-sm text-zinc-200">{item.reason}</p>
        </Card>
      ))}
    </div>

    <Card className="mt-6">
      <h2 className="title-font text-xl text-zinc-100">Metodología del ranking</h2>
      <p className="mt-2 text-sm text-zinc-200 md:text-base">{methodology}</p>
    </Card>
  </section>
);
