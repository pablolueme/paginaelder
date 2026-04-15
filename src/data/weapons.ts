import type { InfusableSetup, UniqueWeapon } from "../types";

export const uniqueWeapons: UniqueWeapon[] = [
  {
    id: "blasphemous-blade",
    name: "Blasphemous Blade",
    tier: "S+",
    category: "Greatsword (Unique/Somber)",
    whyBroken:
      "Weapon Skill muy eficiente, daño alto por uso y sustain en cada eliminación para mantener ritmo sin consumir recursos.",
    bestUses: [
      "Bosses single target de fases largas",
      "PvE general sin depender de mecánicas complejas",
      "Builds STR/FTH orientadas a consistencia"
    ],
    limitations: [
      "Menos explosiva que setups puras de bleed en algunos bosses",
      "Depende de castigar ventanas concretas del boss para exprimir al máximo"
    ],
    recommendedStats: ["50-60 VIG", "22 STR", "15 DEX", "50-60 FTH"],
    talismans: [
      "Shard of Alexander",
      "Fire Scorpion Charm",
      "Ritual Sword Talisman",
      "Dragoncrest Greatshield Talisman"
    ],
    buffs: ["Golden Vow", "Flame, Grant Me Strength"],
    howToGet: "Intercambia el recuerdo de Rykard en Roundtable Hold.",
    quickNotes: [
      "Excelente opción generalista para prácticamente todo el juego base.",
      "Permite jugar seguro y mantener daño alto sin microgestión excesiva."
    ],
    badges: ["Boss Killer", "Beginner Friendly", "Hyper Carry"]
  },
  {
    id: "mohgwyn-sacred-spear",
    name: "Mohgwyn's Sacred Spear",
    tier: "S+",
    category: "Great Spear (Unique/Somber)",
    whyBroken:
      "El skill cubre área amplia, aplica presión continua y aprovecha estados de sangrado en packs y bosses vulnerables.",
    bestUses: [
      "Limpieza de mobs agrupados",
      "Bosses con hitbox grande",
      "Builds con ARC alta para bleed"
    ],
    limitations: [
      "Animaciones largas si se usa mal en jefes agresivos",
      "Pierde valor frente a enemigos resistentes a hemorragia"
    ],
    recommendedStats: ["60 VIG", "24 STR", "14 DEX", "50-60 ARC"],
    talismans: [
      "Lord of Blood's Exultation",
      "Shard of Alexander",
      "Ritual Sword Talisman",
      "Erdtree's Favor +2"
    ],
    buffs: ["Golden Vow", "Flame, Grant Me Strength"],
    howToGet: "Intercambia el recuerdo de Mohg en Roundtable Hold.",
    quickNotes: [
      "Top para daño en área en base game.",
      "Si el enemigo sangra, escala de forma absurda."
    ],
    badges: ["AoE Monster", "Bleed", "Hyper Carry"]
  },
  {
    id: "sacred-relic-sword",
    name: "Sacred Relic Sword",
    tier: "S",
    category: "Greatsword (Unique/Somber)",
    whyBroken:
      "Wave of Gold barre líneas completas de enemigos con coste razonable, perfecta para limpieza y farmeo.",
    bestUses: [
      "Farm de runas",
      "Limpieza de zonas amplias",
      "NG+ con enfoque de velocidad"
    ],
    limitations: [
      "No es el pico máximo de daño single target contra bosses duros",
      "Depende bastante del Weapon Skill para destacar"
    ],
    recommendedStats: ["55 VIG", "24 DEX", "40-50 FTH"],
    talismans: [
      "Sacred Scorpion Charm",
      "Shard of Alexander",
      "Ritual Sword Talisman",
      "Carian Filigreed Crest"
    ],
    buffs: ["Golden Vow"],
    howToGet: "Intercambia el recuerdo final (Elden Remembrance) en Roundtable Hold.",
    quickNotes: [
      "Mejor herramienta de limpieza masiva del juego base.",
      "Muy cómoda para sesiones de farmeo."
    ],
    badges: ["AoE Monster", "Beginner Friendly"]
  },
  {
    id: "giant-crusher",
    name: "Giant-Crusher",
    tier: "S",
    category: "Colossal Weapon (Infusable)",
    whyBroken:
      "Tiene uno de los picos de daño físico y de ruptura de postura más altos del base game cuando va a Heavy + Cragblade.",
    bestUses: [
      "Stance break en bosses grandes",
      "Builds STR puras con daño explosivo",
      "Runes de desafío de alto riesgo/alta recompensa"
    ],
    limitations: [
      "Muy exigente en stamina y gestión de frames",
      "Castiga errores de posicionamiento"
    ],
    recommendedStats: ["60 VIG", "35 END", "60-80 STR"],
    talismans: [
      "Axe Talisman",
      "Shard of Alexander",
      "Great-Jar's Arsenal",
      "Bull-Goat's Talisman"
    ],
    buffs: ["Golden Vow", "Flame, Grant Me Strength"],
    howToGet: "Cofre de carruaje al sur de Outer Wall Phantom Tree (Altus Plateau).",
    quickNotes: [
      "No es para principiantes, pero su techo de rendimiento es altísimo.",
      "Con Cragblade se convierte en máquina de stagger."
    ],
    badges: ["Stance Breaker", "Hyper Carry"]
  },
  {
    id: "dark-moon-greatsword",
    name: "Dark Moon Greatsword",
    tier: "S",
    category: "Greatsword (Unique/Somber)",
    whyBroken:
      "Excelente alcance con ondas de proyectil en heavy buffeado, daño sólido y control de distancia.",
    bestUses: [
      "Builds INT/Frost PvE",
      "Bosses con ventanas seguras a media distancia",
      "Jugadores que quieren control de tempo"
    ],
    limitations: [
      "Requiere inversión en INT y ruta de Ranni",
      "No compite en sustain puro con Blasphemous Blade"
    ],
    recommendedStats: ["50+ VIG", "25 MND", "16 STR", "11 DEX", "60+ INT"],
    talismans: [
      "Shard of Alexander",
      "Magic Scorpion Charm",
      "Godfrey Icon",
      "Carian Filigreed Crest"
    ],
    buffs: ["Terra Magica", "Golden Vow (si híbrida)"],
    howToGet: "Finaliza la questline de Ranni y reclama el arma en Cathedral of Manus Celes.",
    quickNotes: [
      "No es la más sencilla, pero ofrece control premium y gran daño sostenido.",
      "Muy buena alternativa a setups físicas."
    ],
    badges: ["Boss Killer", "Hyper Carry"]
  }
];

export const infusableSetups: InfusableSetup[] = [
  {
    id: "star-fist-cragblade",
    baseWeapon: "Star Fist",
    bestAshes: ["Cragblade"],
    recommendedAffinity: "Heavy",
    recommendedBuild: "STR pura con jump attacks y charged heavies",
    whyBroken: "Ruptura de postura extrema en muy poco tiempo, ideal para bosses single target.",
    playstyle: "Entrar agresivo, mantener presión corta distancia y forzar stance breaks.",
    weaponLocation: "Leyndell, cerca del coliseo / West Capital Rampart.",
    ashLocation: "Cragblade: Scarab al oeste de Impassable Greatbridge (Caelid).",
    variants: ["Heavy + buffs físicos", "Occult situacional con ARC secundaria"],
    badges: ["Boss Killer", "Stance Breaker", "Hyper Carry"]
  },
  {
    id: "great-stars-wild-strikes",
    baseWeapon: "Great Stars",
    bestAshes: ["Wild Strikes"],
    recommendedAffinity: "Heavy",
    recommendedBuild: "STR con poise media/alta para tradear",
    whyBroken: "Gran presión continua, sustain por hit y daño muy estable en PvE.",
    playstyle: "Mantener spam controlado de skill y castigar intercambios favorables.",
    weaponLocation:
      "Carro en Altus Plateau entre Road of Iniquity Side Path y Writheblood Ruins.",
    ashLocation: "Wild Strikes: Scarab en el camino de Stormhill Shack hacia Castleward Tunnel.",
    variants: ["Cold para mix de frost", "Flame Art híbrida con FTH"],
    badges: ["AoE Monster", "Beginner Friendly"]
  },
  {
    id: "nagakiba-unsheathe-double-slash",
    baseWeapon: "Nagakiba",
    bestAshes: ["Unsheathe", "Double Slash"],
    recommendedAffinity: "Keen (DEX) u Occult (ARC)",
    recommendedBuild: "Dex rápida o Dex/Arc bleed",
    whyBroken: "Rango sobresaliente para una katana y gran flexibilidad ofensiva.",
    playstyle: "Pokes a media distancia, castigos de ventana y bleed constante.",
    weaponLocation: "Quest de Yura o derrota directa; cambia según progreso.",
    ashLocation: "Double Slash: Scarab en Sellia, Town of Sorcery. Unsheathe: inicio de clase Samurai.",
    variants: ["Keen + buffs", "Occult + Arcane para bleed estable"],
    badges: ["Bleed", "Boss Killer"]
  },
  {
    id: "claymore-lions-claw-impaling-thrust",
    baseWeapon: "Claymore",
    bestAshes: ["Lion's Claw", "Impaling Thrust"],
    recommendedAffinity: "Heavy o Quality",
    recommendedBuild: "STR/DEX flexible según etapa",
    whyBroken: "Moveset limpio y adaptable; rinde tanto en duelos de boss como en exploración.",
    playstyle: "Combinar pokes, heavies cargados y skill según match-up.",
    weaponLocation: "Castle Morne.",
    ashLocation: "Lion's Claw: drop del león guardián en Fort Gael. Impaling Thrust: Bernahl en Warmaster's Shack.",
    variants: ["Quality para versatilidad", "Heavy para stagger puro"],
    badges: ["Beginner Friendly", "Stance Breaker"]
  },
  {
    id: "greatsword-lions-claw",
    baseWeapon: "Greatsword",
    bestAshes: ["Lion's Claw"],
    recommendedAffinity: "Heavy",
    recommendedBuild: "STR pura de alto impacto",
    whyBroken: "Daño bruto muy alto y excelente postura break con configuración simple.",
    playstyle: "Rotación directa de jumps/heavies + skill para burst.",
    weaponLocation: "Carro escoltado por perros gigantes en Caelid.",
    ashLocation: "Lion's Claw: Fort Gael (Caelid).",
    variants: ["Cragblade en fights de postura", "Giant Hunt para verticalidad"],
    badges: ["Stance Breaker", "Hyper Carry"]
  },
  {
    id: "giant-crusher-cragblade",
    baseWeapon: "Giant-Crusher",
    bestAshes: ["Cragblade"],
    recommendedAffinity: "Heavy",
    recommendedBuild: "STR extrema + poise alta",
    whyBroken: "Probablemente la setup más salvaje para stagger y golpes críticos.",
    playstyle: "Gameplay metódico: castigar huecos claros y romper postura rápido.",
    weaponLocation: "Cofre en carruaje al sur de Outer Wall Phantom Tree (Altus).",
    ashLocation: "Cragblade: Scarab al oeste de Impassable Greatbridge en Caelid.",
    variants: ["Royal Knight's Resolve para burst puntual", "Dual colossal en NG+"],
    badges: ["Stance Breaker", "Hyper Carry"]
  },
  {
    id: "nightrider-glaive-giant-hunt",
    baseWeapon: "Nightrider Glaive",
    bestAshes: ["Giant Hunt"],
    recommendedAffinity: "Heavy",
    recommendedBuild: "STR con alcance seguro",
    whyBroken: "Muy versátil en spacing y excelente contra humanoides/grandes enemigos.",
    playstyle: "Control de distancia con halberd y castigo vertical con Giant Hunt.",
    weaponLocation: "Drop del Night's Cavalry en Bellum Highway (Liurnia).",
    ashLocation: "Giant Hunt: Night's Cavalry de Liurnia (Bellum Highway).",
    variants: ["Sword Dance para presión", "Phantom Slash para duelos de rango"],
    badges: ["Stance Breaker", "Beginner Friendly"]
  }
];
