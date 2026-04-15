import { badgeLabelMap, stageLabelMap } from "../../data/meta";
import type { BadgeKey, StageKey, Tier } from "../../types";

const badgeStyles: Record<BadgeKey, string> = {
  bossKiller: "border-rose-300/70 bg-rose-500/20 text-rose-100",
  aoeMonster: "border-sky-300/70 bg-sky-500/20 text-sky-100",
  stanceBreaker: "border-amber-300/75 bg-amber-500/20 text-amber-100",
  bleed: "border-red-300/70 bg-red-600/20 text-red-100",
  beginnerFriendly: "border-emerald-300/70 bg-emerald-500/20 text-emerald-100",
  hyperCarry: "border-rune/80 bg-rune/25 text-amber-100",
  generalist: "border-zinc-400/70 bg-zinc-700/55 text-zinc-100",
  bestOverall: "border-rune/80 bg-rune/25 text-amber-100",
  bestForBosses: "border-rose-300/70 bg-rose-500/20 text-rose-100",
  bestForArea: "border-sky-300/70 bg-sky-500/20 text-sky-100",
  bestInfusible: "border-cyan-300/70 bg-cyan-500/20 text-cyan-100",
  topAshOfWar: "border-violet-300/70 bg-violet-500/20 text-violet-100",
  playerBuild: "border-frost/70 bg-frost/25 text-blue-100"
};

const tierStyles: Record<Tier, string> = {
  "S+": "border-rune/80 bg-rune/25 text-amber-100",
  S: "border-cyan-300/70 bg-cyan-500/20 text-cyan-100",
  A: "border-zinc-500/80 bg-zinc-700/55 text-zinc-100"
};

interface BadgePillProps {
  badge: BadgeKey;
}

export const BadgePill = ({ badge }: BadgePillProps) => (
  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[badge]}`}>
    {badgeLabelMap[badge]}
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

interface StageBadgeProps {
  stage: StageKey;
}

export const StageBadge = ({ stage }: StageBadgeProps) => (
  <span className="inline-flex items-center rounded-full border border-zinc-600 bg-zinc-800/65 px-2.5 py-1 text-xs font-medium text-zinc-100">
    {stageLabelMap[stage]}
  </span>
);

interface SimpleBadgeProps {
  label: string;
}

export const SimpleBadge = ({ label }: SimpleBadgeProps) => (
  <span className="inline-flex items-center rounded-full border border-zinc-600 bg-zinc-800/65 px-2.5 py-1 text-xs font-medium text-zinc-100">
    {label}
  </span>
);
