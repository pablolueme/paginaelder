import type { PropsWithChildren, ReactNode } from "react";

interface SectionShellProps extends PropsWithChildren {
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  actions?: ReactNode;
}

export const SectionShell = ({ id, title, subtitle, eyebrow, actions, children }: SectionShellProps) => (
  <section id={id} className="scroll-mt-28 py-12 md:py-16" aria-labelledby={`${id}-title`}>
    <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2.5">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-rune/90">{eyebrow}</p> : null}
        <h2 id={`${id}-title`} className="title-font text-2xl text-zinc-50 md:text-3xl lg:text-4xl">
          {title}
        </h2>
        {subtitle ? <p className="max-w-3xl text-sm leading-relaxed text-zinc-200 md:text-base">{subtitle}</p> : null}
      </div>
      {actions ? <div className="w-full md:w-auto">{actions}</div> : null}
    </div>
    {children}
  </section>
);
