import type { InfusableSetup, UniqueWeapon } from "../types";

export const uniqueWeapons: UniqueWeapon[] = [
  {
    id: "blasphemous-blade",
    nameEs: "Hoja blasfema",
    nameEn: "Blasphemous Blade",
    tier: "S+",
    categoryEs: "Espadón (arma única)",
    categoryEn: "Greatsword (Unique/Somber)",
    whyBroken:
      "Su habilidad de arma ofrece daño alto por uso y sustain por eliminación, ideal para mantener ritmo.",
    bestUses: [
      "Jefes de objetivo único con fases largas",
      "PvE general sin mecánicas complejas",
      "Builds de Fuerza/Fe orientadas a consistencia"
    ],
    limitations: [
      "Menos explosiva que setups puras de hemorragia en algunos jefes",
      "Necesita castigar ventanas concretas para su máximo rendimiento"
    ],
    recommendedStats: ["50-60 VIG", "22 FUE", "15 DES", "50-60 FE"],
    talismans: [
      "Shard of Alexander",
      "Fire Scorpion Charm",
      "Ritual Sword Talisman",
      "Dragoncrest Greatshield Talisman"
    ],
    buffs: ["Golden Vow", "Flame, Grant Me Strength"],
    howToGet: "Intercambia el recuerdo de Rykard en Roundtable Hold.",
    quickNotes: [
      "Excelente opción generalista para casi todo el juego base.",
      "Permite juego seguro con daño alto sostenido."
    ],
    badges: ["Matabosses", "Fácil de usar", "Muy dominante"]
  },
  {
    id: "mohgwyn-sacred-spear",
    nameEs: "Lanza sagrada de Mohgwyn",
    nameEn: "Mohgwyn's Sacred Spear",
    tier: "S+",
    categoryEs: "Gran lanza (arma única)",
    categoryEn: "Great Spear (Unique/Somber)",
    whyBroken:
      "Cubre área amplia, mantiene presión continua y escala muy bien con hemorragia en packs y jefes.",
    bestUses: ["Limpieza de mobs agrupados", "Jefes con hitbox grande", "Builds de Arcano alto"],
    limitations: [
      "Animaciones largas si se usa mal contra jefes agresivos",
      "Pierde valor contra enemigos resistentes a hemorragia"
    ],
    recommendedStats: ["60 VIG", "24 FUE", "14 DES", "50-60 ARC"],
    talismans: [
      "Lord of Blood's Exultation",
      "Shard of Alexander",
      "Ritual Sword Talisman",
      "Erdtree's Favor +2"
    ],
    buffs: ["Golden Vow", "Flame, Grant Me Strength"],
    howToGet: "Intercambia el recuerdo de Mohg en Roundtable Hold.",
    quickNotes: ["Top para daño en área en juego base.", "Si el enemigo sangra, escala de forma absurda."],
    badges: ["Monstruo de área", "Hemorragia", "Muy dominante"]
  },
  {
    id: "sacred-relic-sword",
    nameEs: "Espada de la reliquia sagrada",
    nameEn: "Sacred Relic Sword",
    tier: "S",
    categoryEs: "Espadón (arma única)",
    categoryEn: "Greatsword (Unique/Somber)",
    whyBroken:
      "Wave of Gold limpia líneas completas de enemigos con coste razonable, ideal para farmeo y rutas largas.",
    bestUses: ["Farmeo de runas", "Limpieza de zonas amplias", "NG+ orientado a velocidad"],
    limitations: [
      "No es el mayor daño de objetivo único contra jefes exigentes",
      "Depende bastante de su habilidad para destacar"
    ],
    recommendedStats: ["55 VIG", "24 DES", "40-50 FE"],
    talismans: [
      "Sacred Scorpion Charm",
      "Shard of Alexander",
      "Ritual Sword Talisman",
      "Carian Filigreed Crest"
    ],
    buffs: ["Golden Vow"],
    howToGet: "Intercambia el recuerdo final (Elden Remembrance) en Roundtable Hold.",
    quickNotes: ["La mejor herramienta de limpieza masiva del juego base.", "Muy cómoda para sesiones de farmeo."],
    badges: ["Monstruo de área", "Fácil de usar"]
  },
  {
    id: "giant-crusher",
    nameEs: "Aplastagigantes",
    nameEn: "Giant-Crusher",
    tier: "S",
    categoryEs: "Arma colosal (infusable)",
    categoryEn: "Colossal Weapon (Infusable)",
    whyBroken:
      "Tiene uno de los picos más altos de daño físico y ruptura de postura con afinidad Pesada + Hoja pétrea.",
    bestUses: [
      "Stance break contra jefes grandes",
      "Builds de Fuerza pura con daño explosivo",
      "Runs de alto riesgo y alta recompensa"
    ],
    limitations: ["Exigente en stamina y posicionamiento", "Castiga errores de ejecución"],
    recommendedStats: ["60 VIG", "35 END", "60-80 FUE"],
    talismans: ["Axe Talisman", "Shard of Alexander", "Great-Jar's Arsenal", "Bull-Goat's Talisman"],
    buffs: ["Golden Vow", "Flame, Grant Me Strength"],
    howToGet: "Cofre de carruaje al sur de Outer Wall Phantom Tree (Altus Plateau).",
    quickNotes: [
      "No es para principiantes, pero su techo de rendimiento es altísimo.",
      "Con Hoja pétrea se vuelve una máquina de stagger."
    ],
    badges: ["Rompepostura", "Muy dominante"]
  },
  {
    id: "dark-moon-greatsword",
    nameEs: "Mandoble de luna oscura",
    nameEn: "Dark Moon Greatsword",
    tier: "S",
    categoryEs: "Espadón (arma única)",
    categoryEn: "Greatsword (Unique/Somber)",
    whyBroken:
      "Ofrece gran alcance con proyectiles en ataques pesados potenciados y excelente control de distancia.",
    bestUses: [
      "Builds de Inteligencia con escarcha",
      "Jefes con ventanas seguras a media distancia",
      "Jugadores que prefieren controlar el tempo"
    ],
    limitations: [
      "Requiere inversión alta en Inteligencia y quest de Ranni",
      "No compite en sustain puro con Hoja blasfema"
    ],
    recommendedStats: ["50+ VIG", "25 MND", "16 FUE", "11 DES", "60+ INT"],
    talismans: ["Shard of Alexander", "Magic Scorpion Charm", "Godfrey Icon", "Carian Filigreed Crest"],
    buffs: ["Terra Magica", "Golden Vow (si híbrida)"],
    howToGet: "Finaliza la questline de Ranni y reclama el arma en Cathedral of Manus Celes.",
    quickNotes: [
      "No es la más sencilla, pero ofrece control premium y gran daño sostenido.",
      "Muy buena alternativa a setups físicas."
    ],
    badges: ["Matabosses", "Muy dominante"]
  }
];

export const infusableSetups: InfusableSetup[] = [
  {
    id: "star-fist-cragblade",
    nameEs: "Puño estelar + Hoja pétrea",
    nameEn: "Star Fist + Cragblade",
    baseWeapon: { nameEs: "Puño estelar", nameEn: "Star Fist" },
    bestAshes: [{ nameEs: "Hoja pétrea", nameEn: "Cragblade" }],
    recommendedAffinity: "Pesada",
    recommendedBuild: "Fuerza pura con saltos ofensivos y pesados cargados.",
    whyBroken: "Ruptura de postura extrema en poco tiempo, ideal para jefes de objetivo único.",
    playstyle: "Entrar agresivo, mantener presión a corta distancia y forzar stance breaks.",
    weaponLocation: "Leyndell, cerca del coliseo, en West Capital Rampart.",
    ashLocation: "Hoja pétrea: scarab al oeste de Impassable Greatbridge (Caelid).",
    variants: ["Pesada + mejoras físicas", "Oculta situacional con Arcano secundario"],
    badges: ["Matabosses", "Rompepostura", "Muy dominante"]
  },
  {
    id: "great-stars-wild-strikes",
    nameEs: "Gran estrella + Golpes salvajes",
    nameEn: "Great Stars + Wild Strikes",
    baseWeapon: { nameEs: "Gran estrella", nameEn: "Great Stars" },
    bestAshes: [{ nameEs: "Golpes salvajes", nameEn: "Wild Strikes" }],
    recommendedAffinity: "Pesada",
    recommendedBuild: "Fuerza con poise media o alta para intercambios.",
    whyBroken: "Gran presión continua, sustain por golpe y daño estable en PvE.",
    playstyle: "Mantener spam controlado de habilidad y castigar intercambios favorables.",
    weaponLocation: "Carro en Altus Plateau entre Road of Iniquity Side Path y Writheblood Ruins.",
    ashLocation: "Golpes salvajes: scarab entre Stormhill Shack y Castleward Tunnel.",
    variants: ["Fría para mezcla con escarcha", "Llama sacra híbrida con Fe"],
    badges: ["Monstruo de área", "Fácil de usar"]
  },
  {
    id: "nagakiba-unsheathe-double-slash",
    nameEs: "Nagakiba + Desenvainar / Doble tajo",
    nameEn: "Nagakiba + Unsheathe / Double Slash",
    baseWeapon: { nameEs: "Nagakiba", nameEn: "Nagakiba" },
    bestAshes: [
      { nameEs: "Desenvainar", nameEn: "Unsheathe" },
      { nameEs: "Doble tajo", nameEn: "Double Slash" }
    ],
    recommendedAffinity: "Aguda (DES) u Oculta (ARC)",
    recommendedBuild: "Destreza rápida o Destreza/Arcano orientada a sangrado.",
    whyBroken: "Alcance sobresaliente para katana y gran flexibilidad ofensiva.",
    playstyle: "Pokes a media distancia, castigo por ventana y hemorragia constante.",
    weaponLocation: "Quest de Yura o derrota directa, según progreso.",
    ashLocation: "Doble tajo: scarab en Sellia. Desenvainar: disponible desde clase Samurai.",
    variants: ["Aguda + buffs", "Oculta + Arcano para hemorragia estable"],
    badges: ["Hemorragia", "Matabosses"]
  },
  {
    id: "claymore-lions-claw-impaling-thrust",
    nameEs: "Mandoble + Garra de león / Estocada perforante",
    nameEn: "Claymore + Lion's Claw / Impaling Thrust",
    baseWeapon: { nameEs: "Mandoble", nameEn: "Claymore" },
    bestAshes: [
      { nameEs: "Garra de león", nameEn: "Lion's Claw" },
      { nameEs: "Estocada perforante", nameEn: "Impaling Thrust" }
    ],
    recommendedAffinity: "Pesada o Calidad",
    recommendedBuild: "Fuerza/Destreza flexible según etapa del juego.",
    whyBroken: "Moveset limpio y adaptable en jefes y exploración.",
    playstyle: "Combinar pokes, pesados cargados y habilidad según enfrentamiento.",
    weaponLocation: "Castle Morne.",
    ashLocation: "Garra de león: león guardián de Fort Gael. Estocada perforante: Bernahl en Limgrave.",
    variants: ["Calidad para versatilidad", "Pesada para stagger puro"],
    badges: ["Fácil de usar", "Rompepostura"]
  },
  {
    id: "greatsword-lions-claw",
    nameEs: "Espadón + Garra de león",
    nameEn: "Greatsword + Lion's Claw",
    baseWeapon: { nameEs: "Espadón", nameEn: "Greatsword" },
    bestAshes: [{ nameEs: "Garra de león", nameEn: "Lion's Claw" }],
    recommendedAffinity: "Pesada",
    recommendedBuild: "Fuerza pura de alto impacto.",
    whyBroken: "Daño bruto muy alto y excelente ruptura de postura con setup simple.",
    playstyle: "Rotación directa de saltos, pesados y habilidad para burst.",
    weaponLocation: "Carro escoltado por perros gigantes en Caelid.",
    ashLocation: "Garra de león: Fort Gael (Caelid).",
    variants: ["Hoja pétrea para postura", "Caza de gigantes para verticalidad"],
    badges: ["Rompepostura", "Muy dominante"]
  },
  {
    id: "giant-crusher-cragblade",
    nameEs: "Aplastagigantes + Hoja pétrea",
    nameEn: "Giant-Crusher + Cragblade",
    baseWeapon: { nameEs: "Aplastagigantes", nameEn: "Giant-Crusher" },
    bestAshes: [{ nameEs: "Hoja pétrea", nameEn: "Cragblade" }],
    recommendedAffinity: "Pesada",
    recommendedBuild: "Fuerza extrema con poise alta.",
    whyBroken: "Setup extrema para stagger y críticos en jefes grandes.",
    playstyle: "Juego metódico: castigar huecos claros y romper postura rápido.",
    weaponLocation: "Cofre de carruaje al sur de Outer Wall Phantom Tree (Altus).",
    ashLocation: "Hoja pétrea: scarab al oeste de Impassable Greatbridge (Caelid).",
    variants: ["Royal Knight's Resolve para burst puntual", "Doble colosal en NG+"],
    badges: ["Rompepostura", "Muy dominante"]
  },
  {
    id: "nightrider-glaive-giant-hunt",
    nameEs: "Alabarda del Jinete Nocturno + Caza de gigantes",
    nameEn: "Nightrider Glaive + Giant Hunt",
    baseWeapon: { nameEs: "Alabarda del Jinete Nocturno", nameEn: "Nightrider Glaive" },
    bestAshes: [{ nameEs: "Caza de gigantes", nameEn: "Giant Hunt" }],
    recommendedAffinity: "Pesada",
    recommendedBuild: "Fuerza con alcance seguro.",
    whyBroken: "Muy versátil en spacing y excelente contra humanoides y enemigos grandes.",
    playstyle: "Control de distancia y castigo vertical con Caza de gigantes.",
    weaponLocation: "Drop de Night's Cavalry en Bellum Highway (Liurnia).",
    ashLocation: "Caza de gigantes: Night's Cavalry de Bellum Highway.",
    variants: ["Danza de espadas para presión", "Phantom Slash para duelos de rango"],
    badges: ["Rompepostura", "Fácil de usar"]
  }
];
