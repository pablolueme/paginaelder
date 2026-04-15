import type { RoleBadge, Tier } from "../../types";

const roleStyles: Record<RoleBadge, string> = {
  "Boss Killer": "border-rose-400/50 bg-rose-500/15 text-rose-200",
  "AoE Monster": "border-frost/60 bg-frost/20 text-blue-100",
  "Stance Breaker": "border-amber-400/60 bg-amber-500/15 text-amber-100",
  Bleed: "border-red-700/70 bg-red-900/40 text-red-100",
  "Beginner Friendly": "border-emerald-400/60 bg-emerald-500/15 text-emerald-100",
  "Hyper Carry": "border-rune/70 bg-rune/20 text-amber-50"
};

const tierStyles: Record<Tier, string> = {
  "S+": "border-rune/70 bg-rune/20 text-amber-100",
  S: "border-cyan-400/40 bg-cyan-500/10 text-cyan-100",
  A: "border-zinc-500/70 bg-zinc-700/50 text-zinc-100"
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
    Tier {tier}
  </span>
);

interface SimpleBadgeProps {
  label: string;
}

export const SimpleBadge = ({ label }: SimpleBadgeProps) => (
  <span className="inline-flex items-center rounded-full border border-zinc-600 bg-zinc-700/40 px-2.5 py-1 text-xs text-zinc-100">
    {label}
  </span>
);
