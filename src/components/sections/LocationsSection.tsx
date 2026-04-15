import type { RegionGuide } from "../../types";
import { SectionShell } from "../layout/SectionShell";
import { Card } from "../ui/Card";

interface LocationsSectionProps {
  regions: RegionGuide[];
}

const kindStyle: Record<string, string> = {
  Arma: "border-rune/70 bg-rune/20 text-amber-100",
  "Ceniza de guerra": "border-frost/70 bg-frost/20 text-blue-100",
  Talismán: "border-emerald-400/70 bg-emerald-500/15 text-emerald-100",
  Mejora: "border-rose-400/70 bg-rose-500/15 text-rose-100",
  Hechizo: "border-violet-400/70 bg-violet-500/15 text-violet-100"
};

export const LocationsSection = ({ regions }: LocationsSectionProps) => (
  <SectionShell
    id="obtencion"
    title="Localizaciones"
    subtitle="Ruta rápida con armas, cenizas de guerra, talismanes y mejoras clave para avanzar sin perder tiempo."
  >
    <div className="relative space-y-4 pl-5 before:absolute before:left-1 before:top-1 before:h-[99%] before:w-px before:bg-zinc-700">
      {regions.map((region) => (
        <Card key={region.region} className="relative">
          <span
            className="absolute -left-[1.65rem] top-7 h-3 w-3 rounded-full border border-rune bg-abyss"
            aria-hidden="true"
          />
          <h3 className="title-font text-xl text-zinc-50">{region.region}</h3>
          <div className="mt-3 space-y-3">
            {region.items.map((item) => (
              <div
                key={`${region.region}-${item.nameEn}`}
                className="rounded-xl border border-zinc-700/70 bg-zinc-900/60 p-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-zinc-100">{item.nameEs}</p>
                  <p className="text-xs text-zinc-400">{item.nameEn}</p>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${
                      kindStyle[item.kind] ?? "border-zinc-600 bg-zinc-800 text-zinc-200"
                    }`}
                  >
                    {item.kind}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-200">{item.note}</p>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </SectionShell>
);
