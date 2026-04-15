import type { PropsWithChildren, ReactNode } from "react";

interface SectionShellProps extends PropsWithChildren {
  id: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export const SectionShell = ({ id, title, subtitle, actions, children }: SectionShellProps) => (
  <section id={id} className="scroll-mt-28 py-10 md:py-14" aria-labelledby={`${id}-title`}>
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-rune/80">Elden Ring PvE</p>
        <h2 id={`${id}-title`} className="title-font text-2xl text-zinc-100 md:text-3xl">
          {title}
        </h2>
        {subtitle ? <p className="max-w-3xl text-sm text-zinc-300 md:text-base">{subtitle}</p> : null}
      </div>
      {actions ? <div className="w-full md:w-auto">{actions}</div> : null}
    </div>
    {children}
  </section>
);
