import type { BuildEntry, FilterKey, HomeHighlight } from "../types";

export const filterOptions: { key: FilterKey; label: string }[] = [
  { key: "bosses", label: "Jefes" },
  { key: "area", label: "Área" },
  { key: "bleed", label: "Hemorragia" },
  { key: "stagger", label: "Rompepostura" },
  { key: "strength", label: "Fuerza" },
  { key: "dex", label: "Destreza" },
  { key: "faith", label: "Fe" },
  { key: "arcane", label: "Arcano" },
  { key: "infusable", label: "Infusables" },
  { key: "unique/somber", label: "Armas únicas" }
];

export const homeHighlights: HomeHighlight[] = [
  {
    label: "Mejor en general",
    valueEs: "Hoja blasfema",
    valueEn: "Blasphemous Blade",
    reason: "Consistencia altísima, sustain constante y daño real sobresaliente contra jefes PvE."
  },
  {
    label: "Mejor para jefes",
    valueEs: "Hoja blasfema",
    valueEn: "Blasphemous Blade",
    reason: "Su habilidad de arma resuelve fases largas con margen de error bajo."
  },
  {
    label: "Mejor para área",
    valueEs: "Lanza sagrada de Mohgwyn",
    valueEn: "Mohgwyn's Sacred Spear",
    reason: "Su presión en área limpia grupos enteros de forma muy rápida."
  },
  {
    label: "Mejor infusable",
    valueEs: "Puño estelar + Hoja pétrea",
    valueEn: "Star Fist + Cragblade",
    reason: "Rompe postura en segundos y mantiene DPS de jefe extremadamente alto."
  },
  {
    label: "Mejor ceniza de guerra",
    valueEs: "Hoja pétrea",
    valueEn: "Cragblade",
    reason: "Mejora directa de daño físico y postura con ejecución simple."
  }
];

export const roleWinners: HomeHighlight[] = [
  {
    label: "Objetivo único",
    valueEs: "Hoja blasfema",
    valueEn: "Blasphemous Blade",
    reason: "Sustain y daño sostenido muy fiables para encuentros largos."
  },
  {
    label: "Limpieza de área",
    valueEs: "Lanza sagrada de Mohgwyn",
    valueEn: "Mohgwyn's Sacred Spear",
    reason: "Barre grupos rápido y escala muy bien frente a enemigos sangrables."
  },
  {
    label: "Rotura de postura",
    valueEs: "Puño estelar + Hoja pétrea",
    valueEn: "Star Fist + Cragblade",
    reason: "Una de las combinaciones más fuertes del juego base para stagger."
  },
  {
    label: "Hemorragia",
    valueEs: "Nagakiba + Doble tajo",
    valueEn: "Nagakiba + Double Slash",
    reason: "Aplicación muy sólida de sangrado con alcance y flexibilidad."
  },
  {
    label: "Versatilidad total",
    valueEs: "Hoja blasfema",
    valueEn: "Blasphemous Blade",
    reason: "Rinde en casi cualquier escenario PvE con ejecución simple."
  }
];

export const methodologyText =
  "Este ranking combina consenso de comunidad PvE, utilidad real en partidas normales, daño efectivo en jefes y mobs, facilidad de uso, coste de ejecución y consistencia durante todo el juego base sin DLC.";

export const rankingBuilds: BuildEntry[] = [
  {
    id: "blasphemous-blade",
    rank: 1,
    nameEs: "Hoja blasfema",
    nameEn: "Blasphemous Blade",
    tier: "S+",
    typeEs: "Espadón (arma única)",
    typeEn: "Greatsword (Unique/Somber)",
    focus: ["bosses", "general"],
    attributes: ["faith", "strength"],
    difficulty: "Baja",
    summary: "La mejor opción general para jefes PvE por consistencia, sustain y daño.",
    badges: ["Matabosses", "Fácil de usar", "Muy dominante"],
    isInfusable: false,
    isUniqueSomber: true,
    scaling: "FUE/FE",
    idealGameStage: "Mitad y final de partida",
    score: { bosses: 10, area: 8, stagger: 7, bleed: 2, ease: 9 },
    loadout: {
      stats: ["55-60 VIG", "22-25 MND", "30+ END", "22 FUE", "15 DES", "50-60 FE"],
      talismans: [
        "Shard of Alexander",
        "Fire Scorpion Charm",
        "Ritual Sword Talisman",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Intercambia el recuerdo de Rykard en Roundtable Hold."
    }
  },
  {
    id: "mohgwyn-sacred-spear",
    rank: 2,
    nameEs: "Lanza sagrada de Mohgwyn",
    nameEn: "Mohgwyn's Sacred Spear",
    tier: "S+",
    typeEs: "Gran lanza (arma única)",
    typeEn: "Great Spear (Unique/Somber)",
    focus: ["area", "bleed"],
    attributes: ["arcane", "strength"],
    difficulty: "Media",
    summary: "Top para daño en área y muy fuerte contra enemigos vulnerables a hemorragia.",
    badges: ["Monstruo de área", "Hemorragia", "Muy dominante"],
    isInfusable: false,
    isUniqueSomber: true,
    scaling: "FUE/ARC",
    idealGameStage: "Final de partida",
    score: { bosses: 9, area: 10, stagger: 7, bleed: 10, ease: 7 },
    loadout: {
      stats: ["60 VIG", "20+ MND", "30 END", "24 FUE", "14 DES", "50-60 ARC"],
      talismans: [
        "Lord of Blood's Exultation",
        "Shard of Alexander",
        "Ritual Sword Talisman",
        "Erdtree's Favor +2"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Intercambia el recuerdo de Mohg en Roundtable Hold."
    }
  },
  {
    id: "star-fist-cragblade",
    rank: 3,
    nameEs: "Puño estelar + Hoja pétrea",
    nameEn: "Star Fist + Cragblade",
    tier: "S+",
    typeEs: "Arma de puños (infusable)",
    typeEn: "Fist Weapon (Infusable)",
    focus: ["bosses", "stagger"],
    attributes: ["strength"],
    difficulty: "Media",
    summary: "Configuración brutal para romper postura y derretir barras de vida de jefes.",
    badges: ["Matabosses", "Rompepostura", "Muy dominante"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Pesada FUE",
    idealGameStage: "Mitad y final de partida",
    score: { bosses: 10, area: 7, stagger: 10, bleed: 3, ease: 7 },
    loadout: {
      stats: ["55-60 VIG", "25+ END", "40-60 FUE"],
      talismans: [
        "Axe Talisman",
        "Claw Talisman",
        "Shard of Alexander",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Puño estelar: Leyndell, zona de West Capital Rampart."
    }
  },
  {
    id: "great-stars-wild-strikes",
    rank: 4,
    nameEs: "Gran estrella + Golpes salvajes",
    nameEn: "Great Stars + Wild Strikes",
    tier: "S",
    typeEs: "Gran martillo (infusable)",
    typeEn: "Great Hammer (Infusable)",
    focus: ["area", "bosses", "general"],
    attributes: ["strength"],
    difficulty: "Baja",
    summary: "Configuración muy cómoda con sustain por golpe, presión constante y rendimiento estable.",
    badges: ["Monstruo de área", "Fácil de usar", "Muy dominante"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Pesada FUE",
    idealGameStage: "Mitad de partida",
    score: { bosses: 8, area: 9, stagger: 8, bleed: 6, ease: 9 },
    loadout: {
      stats: ["55+ VIG", "25 END", "50-60 FUE"],
      talismans: [
        "Shard of Alexander",
        "Axe Talisman",
        "Bull-Goat's Talisman",
        "Erdtree's Favor +2"
      ],
      buffs: ["Flame, Grant Me Strength", "Golden Vow"],
      obtain: "Gran estrella: carro de Altus Plateau, cerca de Writheblood Ruins."
    }
  },
  {
    id: "sacred-relic-sword",
    rank: 5,
    nameEs: "Espada de la reliquia sagrada",
    nameEn: "Sacred Relic Sword",
    tier: "S",
    typeEs: "Espadón (arma única)",
    typeEn: "Greatsword (Unique/Somber)",
    focus: ["area"],
    attributes: ["faith", "dex"],
    difficulty: "Baja",
    summary: "La mejor para limpieza masiva y farmeo, pero menos eficiente en jefes duros.",
    badges: ["Monstruo de área", "Fácil de usar"],
    isInfusable: false,
    isUniqueSomber: true,
    scaling: "DES/FE",
    idealGameStage: "Final de partida / NG+",
    score: { bosses: 6, area: 10, stagger: 5, bleed: 1, ease: 10 },
    loadout: {
      stats: ["55 VIG", "25 END", "24 DES", "40-50 FE"],
      talismans: [
        "Sacred Scorpion Charm",
        "Shard of Alexander",
        "Ritual Sword Talisman",
        "Carian Filigreed Crest"
      ],
      buffs: ["Golden Vow"],
      obtain: "Intercambia el recuerdo final (Elden Remembrance)."
    }
  },
  {
    id: "nagakiba-unsheathe-double-slash",
    rank: 6,
    nameEs: "Nagakiba + Desenvainar / Doble tajo",
    nameEn: "Nagakiba + Unsheathe / Double Slash",
    tier: "S",
    typeEs: "Katana (infusable)",
    typeEn: "Katana (Infusable)",
    focus: ["bosses", "bleed", "general"],
    attributes: ["dex", "arcane"],
    difficulty: "Media",
    summary: "Katana infusable de referencia por alcance, ritmo y versatilidad real.",
    badges: ["Hemorragia", "Matabosses"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Aguda DES / Oculta ARC",
    idealGameStage: "Inicio a final",
    score: { bosses: 8, area: 7, stagger: 5, bleed: 9, ease: 7 },
    loadout: {
      stats: ["50-60 VIG", "30+ DES", "45+ ARC (si Oculta)"],
      talismans: [
        "Lord of Blood's Exultation",
        "Millicent's Prosthesis",
        "Rotten Winged Sword Insignia",
        "Shard of Alexander"
      ],
      buffs: ["Seppuku (situacional)", "Golden Vow"],
      obtain: "Quest de Yura o al derrotarlo, según progreso de historia."
    }
  },
  {
    id: "claymore-lions-claw-impaling-thrust",
    rank: 7,
    nameEs: "Mandoble + Garra de león / Estocada perforante",
    nameEn: "Claymore + Lion's Claw / Impaling Thrust",
    tier: "S",
    typeEs: "Espadón (infusable)",
    typeEn: "Greatsword (Infusable)",
    focus: ["bosses", "stagger", "general"],
    attributes: ["strength", "dex"],
    difficulty: "Baja",
    summary: "Arma muy sólida por moveset y flexibilidad; siempre responde bien en PvE.",
    badges: ["Rompepostura", "Fácil de usar"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Calidad / Pesada",
    idealGameStage: "Inicio a final",
    score: { bosses: 8, area: 8, stagger: 8, bleed: 2, ease: 9 },
    loadout: {
      stats: ["50+ VIG", "28+ END", "40 FUE / 25 DES (Calidad)"],
      talismans: [
        "Axe Talisman",
        "Shard of Alexander",
        "Bull-Goat's Talisman",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Mandoble: cofre en Castle Morne."
    }
  },
  {
    id: "greatsword-lions-claw",
    rank: 8,
    nameEs: "Espadón + Garra de león",
    nameEn: "Greatsword + Lion's Claw",
    tier: "S",
    typeEs: "Espada colosal (infusable)",
    typeEn: "Colossal Sword (Infusable)",
    focus: ["bosses", "stagger"],
    attributes: ["strength"],
    difficulty: "Media",
    summary: "Top STR pura con presión alta de postura y daño bruto muy elevado.",
    badges: ["Rompepostura", "Muy dominante"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Pesada FUE",
    idealGameStage: "Inicio a final",
    score: { bosses: 8, area: 8, stagger: 9, bleed: 1, ease: 6 },
    loadout: {
      stats: ["60 VIG", "32+ END", "54-66 FUE"],
      talismans: [
        "Shard of Alexander",
        "Axe Talisman",
        "Great-Jar's Arsenal",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Espadón: carro escoltado por perros gigantes en Caelid."
    }
  },
  {
    id: "ancient-dragons-lightning-strike",
    rank: 9,
    nameEs: "Golpe de relámpago de dragones antiguos",
    nameEn: "Ancient Dragons' Lightning Strike",
    tier: "S",
    typeEs: "Encantamiento de ráfaga",
    typeEn: "Incantation Burst",
    focus: ["bosses", "area"],
    attributes: ["faith"],
    difficulty: "Alta",
    summary: "Daño explosivo contra enemigos grandes cuando conectan múltiples rayos.",
    badges: ["Matabosses", "Monstruo de área"],
    isInfusable: false,
    isUniqueSomber: false,
    scaling: "FE pura",
    idealGameStage: "Final de partida",
    score: { bosses: 9, area: 8, stagger: 4, bleed: 0, ease: 5 },
    loadout: {
      stats: ["50+ VIG", "30 MND", "70-80 FE"],
      talismans: [
        "Godfrey Icon",
        "Lightning Scorpion Charm",
        "Flock's Canvas Talisman",
        "Ritual Sword Talisman"
      ],
      buffs: ["Golden Vow", "Howl of Shabriri (alto riesgo)"],
      obtain: "Recompensa vinculada al Ancient Dragon Prayerbook."
    }
  },
  {
    id: "giant-crusher-cragblade",
    rank: 10,
    nameEs: "Aplastagigantes + Hoja pétrea",
    nameEn: "Giant-Crusher + Cragblade",
    tier: "A",
    typeEs: "Arma colosal (infusable)",
    typeEn: "Colossal Weapon (Infusable)",
    focus: ["bosses", "stagger"],
    attributes: ["strength"],
    difficulty: "Alta",
    summary: "Monstruosa para stagger y crítico, pero exige timing y control de stamina.",
    badges: ["Rompepostura", "Muy dominante"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Pesada FUE",
    idealGameStage: "Mitad y final de partida",
    score: { bosses: 8, area: 7, stagger: 10, bleed: 0, ease: 5 },
    loadout: {
      stats: ["60 VIG", "35 END", "60-80 FUE"],
      talismans: [
        "Axe Talisman",
        "Shard of Alexander",
        "Great-Jar's Arsenal",
        "Bull-Goat's Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Aplastagigantes: cofre en carruaje al sur de Outer Wall Phantom Tree."
    }
  },
  {
    id: "nightrider-glaive-giant-hunt",
    rank: 11,
    nameEs: "Alabarda del Jinete Nocturno + Caza de gigantes",
    nameEn: "Nightrider Glaive + Giant Hunt",
    tier: "A",
    typeEs: "Alabarda (infusable)",
    typeEn: "Halberd (Infusable)",
    focus: ["bosses", "stagger", "general"],
    attributes: ["strength"],
    difficulty: "Media",
    summary: "Muy versátil, gran alcance y castigos seguros en múltiples situaciones.",
    badges: ["Rompepostura", "Fácil de usar"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Pesada FUE",
    idealGameStage: "Mitad y final de partida",
    score: { bosses: 7, area: 8, stagger: 8, bleed: 1, ease: 8 },
    loadout: {
      stats: ["55 VIG", "28 END", "55+ FUE"],
      talismans: [
        "Spear Talisman",
        "Shard of Alexander",
        "Erdtree's Favor +2",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Golden Vow", "Flame, Grant Me Strength"],
      obtain: "Alabarda del Jinete Nocturno: drop de Night's Cavalry en Bellum Highway."
    }
  },
  {
    id: "rusted-anchor",
    rank: 12,
    nameEs: "Ancla oxidada",
    nameEn: "Rusted Anchor",
    tier: "A",
    typeEs: "Gran hacha (infusable)",
    typeEn: "Greataxe (Infusable)",
    focus: ["bosses", "stagger"],
    attributes: ["strength"],
    difficulty: "Media",
    summary: "Opción STR muy eficiente por daño de contraataque y presión constante.",
    badges: ["Rompepostura"],
    isInfusable: true,
    isUniqueSomber: false,
    scaling: "Pesada FUE",
    idealGameStage: "Inicio y mitad de partida",
    score: { bosses: 7, area: 6, stagger: 8, bleed: 0, ease: 7 },
    loadout: {
      stats: ["50+ VIG", "25 END", "50+ FUE"],
      talismans: [
        "Spear Talisman",
        "Axe Talisman",
        "Shard of Alexander",
        "Dragoncrest Greatshield Talisman"
      ],
      buffs: ["Flame, Grant Me Strength"],
      obtain: "Ancla oxidada: Morne Tunnel (Weeping Peninsula)."
    }
  }
];
