import type { BuildEntry, FilterKey, HomeHighlight } from "../types";

export const filterOptions: { key: FilterKey; label: string }[] = [
  { key: "bosses", label: "Bosses" },
  { key: "area", label: "Área" },
  { key: "bleed", label: "Bleed" },
  { key: "stagger", label: "Stagger" },
  { key: "strength", label: "Strength" },
  { key: "dex", label: "Dex" },
  { key: "faith", label: "Faith" },
  { key: "arcane", label: "Arcane" },
  { key: "infusable", label: "Infusable" },
  { key: "unique/somber", label: "Unique/Somber" }
];

export const homeHighlights: HomeHighlight[] = [
  {
    label: "Mejor arma general",
    value: "Blasphemous Blade",
    reason: "Consistencia altísima, sustain constante y daño real sobresaliente contra bosses PvE."
  },
  {
    label: "Mejor para bosses",
    value: "Blasphemous Blade",
    reason: "El Weapon Skill resuelve fases largas con margen de error bajo."
  },
  {
    label: "Mejor para área",
    value: "Mohgwyn's Sacred Spear",
    reason: "Trident + bleed convierte packs grandes en limpiezas muy rápidas."
  },
  {
    label: "Mejor arma infusable",
    value: "Star Fist + Cragblade",
    reason: "Stance break demoledor y DPS de jefe absurdamente alto."
  },
  {
    label: "Mejor Ash of War",
    value: "Cragblade",
    reason: "Boost directo de daño + postura para setups STR y Quality."
  }
];

export const roleWinners: HomeHighlight[] = [
  {
    label: "Single Target Bosses",
    value: "Blasphemous Blade",
    reason: "Sustain + daño consistente en peleas largas y fases complicadas."
  },
  {
    label: "Daño en Área",
    value: "Mohgwyn's Sacred Spear",
    reason: "Limpia grupos rápido y escala increíble contra enemigos sangrables."
  },
  {
    label: "Stance Break",
    value: "Star Fist + Cragblade",
    reason: "Probablemente la setup más fuerte para romper postura en base game."
  },
  {
    label: "Bleed",
    value: "Nagakiba + Double Slash (Occult)",
    reason: "Aplicación muy sólida de hemorragia con rango y versatilidad."
  },
  {
    label: "Generalista",
    value: "Blasphemous Blade",
    reason: "Rinde en casi cualquier escenario PvE con ejecución simple."
  }
];

export const methodologyText =
  "Este ranking mezcla consenso de comunidad PvE, utilidad real en partidas normales, daño efectivo en jefes y mobs, facilidad de uso, coste de ejecución y consistencia a lo largo del juego base sin DLC.";

export const rankingBuilds: BuildEntry[] = [
  {
    id: "blasphemous-blade",
    rank: 1,
    name: "Blasphemous Blade",
    tier: "S+",
    type: "Greatsword (Unique/Somber)",
    focus: ["bosses", "general"],
    attributes: ["faith", "strength"],
    difficulty: "Baja",
    summary:
      "Mejor opción general para bosses PvE por consistencia, sustain y daño. Casi siempre rinde bien.",
    badges: ["Boss Killer", "Beginner Friendly", "Hyper Carry"],
    isInfusable: false,
    isUniqueSomber: true,
    scaling: "STR/FTH",
    idealGameStage: "Mid-Late",
    score: { bosses: 10, area: 8, stagger: 7, bleed: 2, ease: 9 },
    loadout: {
      stats: ["55-60 VIG", "22-25 MND", "30+ END", "22 STR", "15 DEX", "50-60 FTH"],
      talismans: [
        "Shard of Alexander",
        "Fire Scorpion Charm",
        "Ritual Sword Talisman",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Intercambio del recuerdo de Rykard (Roundtable Hold)."
    }
  },
  {
    id: "mohgwyn-sacred-spear",
    rank: 2,
    name: "Mohgwyn's Sacred Spear",
    tier: "S+",
    type: "Great Spear (Unique/Somber)",
    focus: ["area", "bleed"],
    attributes: ["arcane", "strength"],
    difficulty: "Media",
    summary:
      "Top para daño en área y muy fuerte en enemigos que sangran; limpia salas enteras con seguridad.",
    badges: ["AoE Monster", "Bleed", "Hyper Carry"],
    isInfusable: false,
    isUniqueSomber: true,
    scaling: "STR/ARC",
    idealGameStage: "Late",
    score: { bosses: 9, area: 10, stagger: 7, bleed: 10, ease: 7 },
    loadout: {
      stats: ["60 VIG", "20+ MND", "30 END", "24 STR", "14 DEX", "50-60 ARC"],
      talismans: [
        "Lord of Blood's Exultation",
        "Shard of Alexander",
        "Ritual Sword Talisman",
        "Erdtree's Favor +2"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Intercambio del recuerdo de Mohg (Roundtable Hold)."
    }
  },
  {
    id: "star-fist-cragblade",
    rank: 3,
    name: "Star Fist + Cragblade",
    tier: "S+",
    type: "Fist Weapon (Infusable)",
    focus: ["bosses", "stagger"],
    attributes: ["strength"],
    difficulty: "Media",
    summary: "Una de las setups más rotas para stance break y bosses de vida alta en el base game.",
    badges: ["Boss Killer", "Stance Breaker", "Hyper Carry"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Heavy STR",
    idealGameStage: "Mid-Late",
    score: { bosses: 10, area: 7, stagger: 10, bleed: 3, ease: 7 },
    loadout: {
      stats: ["55-60 VIG", "25+ END", "40-60 STR"],
      talismans: [
        "Axe Talisman",
        "Claw Talisman",
        "Shard of Alexander",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Star Fist: Leyndell, cerca del coliseo, zona West Capital Rampart."
    }
  },
  {
    id: "great-stars-wild-strikes",
    rank: 4,
    name: "Great Stars + Wild Strikes",
    tier: "S",
    type: "Great Hammer (Infusable)",
    focus: ["area", "bosses", "general"],
    attributes: ["strength"],
    difficulty: "Baja",
    summary: "Set comodísima con sustain natural, presión continua y rendimiento brutal en PvE general.",
    badges: ["AoE Monster", "Beginner Friendly", "Hyper Carry"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Heavy STR",
    idealGameStage: "Mid",
    score: { bosses: 8, area: 9, stagger: 8, bleed: 6, ease: 9 },
    loadout: {
      stats: ["55+ VIG", "25 END", "50-60 STR"],
      talismans: [
        "Shard of Alexander",
        "Axe Talisman",
        "Bull-Goat's Talisman",
        "Erdtree's Favor +2"
      ],
      buffs: ["Flame, Grant Me Strength", "Golden Vow"],
      obtain: "Great Stars: carro en Altus Plateau entre Road of Iniquity Side Path y Writheblood Ruins."
    }
  },
  {
    id: "sacred-relic-sword",
    rank: 5,
    name: "Sacred Relic Sword",
    tier: "S",
    type: "Greatsword (Unique/Somber)",
    focus: ["area"],
    attributes: ["faith", "dex"],
    difficulty: "Baja",
    summary:
      "La mejor para limpiar hordas y farmear runas; no es la más eficiente para bosses exigentes.",
    badges: ["AoE Monster", "Beginner Friendly"],
    isInfusable: false,
    isUniqueSomber: true,
    scaling: "DEX/FTH",
    idealGameStage: "Late / NG+",
    score: { bosses: 6, area: 10, stagger: 5, bleed: 1, ease: 10 },
    loadout: {
      stats: ["55 VIG", "25 END", "24 DEX", "40-50 FTH"],
      talismans: [
        "Sacred Scorpion Charm",
        "Shard of Alexander",
        "Ritual Sword Talisman",
        "Carian Filigreed Crest"
      ],
      buffs: ["Golden Vow"],
      obtain: "Intercambio del recuerdo final (Elden Remembrance)."
    }
  },
  {
    id: "nagakiba-unsheathe-double-slash",
    rank: 6,
    name: "Nagakiba + Unsheathe / Double Slash",
    tier: "S",
    type: "Katana (Infusable)",
    focus: ["bosses", "bleed", "general"],
    attributes: ["dex", "arcane"],
    difficulty: "Media",
    summary: "Mejor katana infusable por alcance y versatilidad real en casi todo el juego base.",
    badges: ["Bleed", "Boss Killer"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Keen DEX / Occult ARC",
    idealGameStage: "Early-Late",
    score: { bosses: 8, area: 7, stagger: 5, bleed: 9, ease: 7 },
    loadout: {
      stats: ["50-60 VIG", "30+ DEX", "45+ ARC (si Occult)"],
      talismans: [
        "Lord of Blood's Exultation",
        "Millicent's Prosthesis",
        "Rotten Winged Sword Insignia",
        "Shard of Alexander"
      ],
      buffs: ["Seppuku (situacional)", "Golden Vow"],
      obtain: "Quest de Yura o al derrotarlo; la ubicación final depende del progreso de la quest."
    }
  },
  {
    id: "claymore-lions-claw-impaling-thrust",
    rank: 7,
    name: "Claymore + Lion's Claw / Impaling Thrust",
    tier: "S",
    type: "Greatsword (Infusable)",
    focus: ["bosses", "stagger", "general"],
    attributes: ["strength", "dex"],
    difficulty: "Baja",
    summary: "Arma súper sólida por moveset y flexibilidad; siempre tiene respuesta en PvE.",
    badges: ["Stance Breaker", "Beginner Friendly"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Quality / Heavy",
    idealGameStage: "Early-Late",
    score: { bosses: 8, area: 8, stagger: 8, bleed: 2, ease: 9 },
    loadout: {
      stats: ["50+ VIG", "28+ END", "40 STR / 25 DEX (Quality)"],
      talismans: [
        "Axe Talisman",
        "Shard of Alexander",
        "Bull-Goat's Talisman",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Claymore: Castle Morne (cofre en la muralla principal)."
    }
  },
  {
    id: "greatsword-lions-claw",
    rank: 8,
    name: "Greatsword + Lion's Claw",
    tier: "S",
    type: "Colossal Sword (Infusable)",
    focus: ["bosses", "stagger"],
    attributes: ["strength"],
    difficulty: "Media",
    summary: "Top STR pura con Lion's Claw: daño bruto altísimo y postura destrozada en bosses.",
    badges: ["Stance Breaker", "Hyper Carry"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Heavy STR",
    idealGameStage: "Early-Late",
    score: { bosses: 8, area: 8, stagger: 9, bleed: 1, ease: 6 },
    loadout: {
      stats: ["60 VIG", "32+ END", "54-66 STR"],
      talismans: [
        "Shard of Alexander",
        "Axe Talisman",
        "Great-Jar's Arsenal",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Greatsword: carro escoltado por perros gigantes en Caelid."
    }
  },
  {
    id: "ancient-dragons-lightning-strike",
    rank: 9,
    name: "Ancient Dragons' Lightning Strike",
    tier: "S",
    type: "Incantation Burst",
    focus: ["bosses", "area"],
    attributes: ["faith"],
    difficulty: "Alta",
    summary: "Burst top contra bosses grandes, especialmente cuando encajan múltiples rayos.",
    badges: ["Boss Killer", "AoE Monster"],
    isInfusable: false,
    isUniqueSomber: false,
    scaling: "Pure FTH",
    idealGameStage: "Late",
    score: { bosses: 9, area: 8, stagger: 4, bleed: 0, ease: 5 },
    loadout: {
      stats: ["50+ VIG", "30 MND", "70-80 FTH"],
      talismans: [
        "Godfrey Icon",
        "Lightning Scorpion Charm",
        "Flock's Canvas Talisman",
        "Ritual Sword Talisman"
      ],
      buffs: ["Golden Vow", "Howl of Shabriri (riesgo alto)"],
      obtain: "Recompensa de Ancient Dragon Prayerbook (late game)."
    }
  },
  {
    id: "giant-crusher-cragblade",
    rank: 10,
    name: "Giant-Crusher + Cragblade",
    tier: "A",
    type: "Colossal Weapon (Infusable)",
    focus: ["bosses", "stagger"],
    attributes: ["strength"],
    difficulty: "Alta",
    summary: "Monstruosa para stagger y daño bruto, pero exige timing y stamina.",
    badges: ["Stance Breaker", "Hyper Carry"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Heavy STR",
    idealGameStage: "Mid-Late",
    score: { bosses: 8, area: 7, stagger: 10, bleed: 0, ease: 5 },
    loadout: {
      stats: ["60 VIG", "35 END", "60-80 STR"],
      talismans: [
        "Axe Talisman",
        "Shard of Alexander",
        "Great-Jar's Arsenal",
        "Bull-Goat's Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Giant-Crusher: cofre en carruaje al sur de Outer Wall Phantom Tree (Altus)."
    }
  },
  {
    id: "nightrider-glaive-giant-hunt",
    rank: 11,
    name: "Nightrider Glaive + Giant Hunt",
    tier: "A",
    type: "Halberd (Infusable)",
    focus: ["bosses", "stagger", "general"],
    attributes: ["strength"],
    difficulty: "Media",
    summary: "Muy versátil y fuerte con Giant Hunt; gran alcance para controlar encuentros.",
    badges: ["Stance Breaker", "Beginner Friendly"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Heavy STR",
    idealGameStage: "Mid-Late",
    score: { bosses: 7, area: 8, stagger: 8, bleed: 1, ease: 8 },
    loadout: {
      stats: ["55 VIG", "28 END", "55+ STR"],
      talismans: [
        "Spear Talisman",
        "Shard of Alexander",
        "Erdtree's Favor +2",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Nightrider Glaive: drop del Night's Cavalry en Bellum Highway (Liurnia)."
    }
  },
  {
    id: "rusted-anchor",
    rank: 12,
    name: "Rusted Anchor",
    tier: "A",
    type: "Greataxe (Infusable)",
    focus: ["bosses", "stagger"],
    attributes: ["strength"],
    difficulty: "Media",
    summary: "Excelente opción STR por daño de counter y presión constante con hits pesados.",
    badges: ["Stance Breaker"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Heavy STR",
    idealGameStage: "Early-Mid",
    score: { bosses: 7, area: 6, stagger: 8, bleed: 0, ease: 7 },
    loadout: {
      stats: ["50+ VIG", "25 END", "50+ STR"],
      talismans: [
        "Spear Talisman",
        "Axe Talisman",
        "Shard of Alexander",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Flame, Grant Me Strength"],
      obtain: "Rusted Anchor: Morne Tunnel (Weeping Peninsula)."
    }
  }
];
