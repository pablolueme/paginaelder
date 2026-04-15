import type { BuildEntry } from "../../types";
import { RoleBadgePill, TierBadge } from "./Badge";

interface BuildDrawerProps {
  build?: BuildEntry;
  onClose: () => void;
}

export const BuildDrawer = ({ build, onClose }: BuildDrawerProps) => {
  if (!build) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Cerrar detalles de build"
      />

      <aside
        className="absolute right-0 top-0 h-full w-full max-w-xl overflow-y-auto border-l border-zinc-700 bg-zinc-950 p-6 shadow-2xl"
        aria-label={`Detalles de ${build.name}`}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Build Detail</p>
            <h3 className="title-font mt-1 text-2xl text-zinc-100">{build.name}</h3>
            <p className="mt-1 text-sm text-zinc-300">{build.type}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-zinc-600 p-2 text-zinc-300 transition hover:border-rune/70 hover:text-rune"
            aria-label="Cerrar panel"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <TierBadge tier={build.tier} />
          {build.badges.map((badge) => (
            <RoleBadgePill key={badge} badge={badge} />
          ))}
        </div>

        <div className="space-y-5 text-sm">
          <section className="rounded-xl border border-zinc-700/70 bg-zinc-900/50 p-4">
            <h4 className="mb-2 text-xs uppercase tracking-[0.16em] text-rune">Resumen</h4>
            <p className="text-zinc-200">{build.summary}</p>
            <p className="mt-2 text-zinc-300">
              Escalado recomendado: <span className="font-semibold text-zinc-100">{build.scaling}</span>
            </p>
            <p className="text-zinc-300">
              Momento ideal: <span className="font-semibold text-zinc-100">{build.idealGameStage}</span>
            </p>
          </section>

          <section className="rounded-xl border border-zinc-700/70 bg-zinc-900/50 p-4">
            <h4 className="mb-2 text-xs uppercase tracking-[0.16em] text-rune">Stats y Talismanes</h4>
            <p className="mb-1 font-semibold text-zinc-100">Stats</p>
            <ul className="mb-3 list-disc space-y-1 pl-4 text-zinc-200">
              {build.loadout.stats.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <p className="mb-1 font-semibold text-zinc-100">Talismanes</p>
            <ul className="list-disc space-y-1 pl-4 text-zinc-200">
              {build.loadout.talismans.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-zinc-700/70 bg-zinc-900/50 p-4">
            <h4 className="mb-2 text-xs uppercase tracking-[0.16em] text-rune">Buffs y Obtención</h4>
            <p className="mb-1 font-semibold text-zinc-100">Buffs recomendados</p>
            <ul className="mb-3 list-disc space-y-1 pl-4 text-zinc-200">
              {build.loadout.buffs.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <p className="font-semibold text-zinc-100">Dónde conseguirlo</p>
            <p className="text-zinc-200">{build.loadout.obtain}</p>
          </section>
        </div>
      </aside>
    </div>
  );
};
