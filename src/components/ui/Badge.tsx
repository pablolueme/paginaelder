import type { RoleBadge, Tier } from "../../types";

const roleStyles: Record<RoleBadge, string> = {
  Matabosses: "border-rose-300/70 bg-rose-500/20 text-rose-100",
  "Monstruo de área": "border-sky-300/70 bg-sky-500/18 text-sky-100",
  Rompepostura: "border-amber-300/75 bg-amber-500/22 text-amber-50",
  Hemorragia: "border-red-300/70 bg-red-600/22 text-red-100",
  "Fácil de usar": "border-emerald-300/70 bg-emerald-500/18 text-emerald-100",
  "Muy dominante": "border-rune/80 bg-rune/24 text-amber-50"
};

const tierStyles: Record<Tier, string> = {
  "S+": "border-rune/80 bg-rune/24 text-amber-100",
  S: "border-cyan-300/60 bg-cyan-500/15 text-cyan-100",
  A: "border-zinc-500/80 bg-zinc-700/55 text-zinc-100"
};

interface RoleBadgePillProps {
  badge: RoleBadge;
}

export const RoleBadgePill = ({ badge }: RoleBadgePillProps) => (
  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${roleStyles[badge]}`}>
    {badge}
  </span>
);

interface TierBadgeProps {
  tier: Tier;
}

export const TierBadge = ({ tier }: TierBadgeProps) => (
  <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${tierStyles[tier]}`}>
    Nivel {tier}
  </span>
);

interface SimpleBadgeProps {
  label: string;
}

export const SimpleBadge = ({ label }: SimpleBadgeProps) => (
  <span className="inline-flex items-center rounded-full border border-zinc-500 bg-zinc-800/70 px-2.5 py-1 text-xs font-medium text-zinc-100">
    {label}
  </span>
);
