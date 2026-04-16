import type { AshOfWarEntry } from "../types";

type AshSeed = Pick<
  AshOfWarEntry,
  "id" | "slug" | "nameEs" | "nameEn" | "shortDescription" | "longDescription" | "bestWeapons" | "excelsAt" | "location"
> &
  Partial<AshOfWarEntry>;

const makeAsh = (seed: AshSeed): AshOfWarEntry => ({
  tier: "S",
  category: "cenizaDeGuerra",
  stage: ["midgame", "late", "endgame"],
  tags: ["bosses", "infusable"],
  bestFor: ["PvE general"],
  weakerAgainst: ["No aplica en todas las armas"],
  recommendation: "Úsala en armas compatibles con tu atributo principal.",
  howToGet: seed.location,
  stats: ["Depende de la build"],
  talismans: ["Fragmento de Alexander"],
  buffs: ["Voto dorado"],
  affinity: "Variable",
  bestAshes: [seed.nameEs],
  region: ["Necrolimbo"],
  weaponType: "Ceniza de guerra",
  playstyle: "Depende del arma equipada",
  scaling: "Variable",
  difficulty: "Media",
  pros: ["Mejora directa de daño o utilidad"],
  cons: ["No todas sirven para todos los enemigos"],
  badges: ["topAshOfWar"],
  ...seed
});

export const topAshesOfWar: AshOfWarEntry[] = [
  makeAsh({
    id: "cragblade",
    slug: "hoja-petrea",
    nameEs: "Hoja pétrea",
    nameEn: "Cragblade",
    shortDescription: "Buff ofensivo top para daño físico y postura.",
    longDescription: "Potencia daño físico y stagger. Perfecta para puños, colosales y armas STR.",
    tags: ["bosses", "stanceBreak", "strength", "infusable"],
    bestFor: ["Bosses", "Romper postura"],
    weakerAgainst: ["Builds puramente mágicas"],
    bestWeapons: [
      { nameEs: "Puño estelar", nameEn: "Star Fist" },
      { nameEs: "Aplastagigantes", nameEn: "Giant-Crusher" },
      { nameEs: "Espadón", nameEn: "Greatsword" }
    ],
    excelsAt: "bosses",
    location: "Escarabajo al oeste de Impassable Greatbridge en Caelid.",
    region: ["Caelid"]
  }),
  makeAsh({
    id: "wild-strikes",
    slug: "golpes-salvajes",
    nameEs: "Golpes salvajes",
    nameEn: "Wild Strikes",
    shortDescription: "Presión continua muy fácil de ejecutar en PvE.",
    longDescription: "Mantiene DPS constante y encaja genial en armas pesadas con sustain.",
    tags: ["area", "strength", "beginner", "infusable"],
    bestFor: ["Área", "PvE general"],
    bestWeapons: [
      { nameEs: "Gran estrella", nameEn: "Great Stars" },
      { nameEs: "Ancla oxidada", nameEn: "Rusted Anchor" }
    ],
    excelsAt: "area",
    location: "Escarabajo entre Stormhill Shack y Castleward Tunnel.",
    region: ["Necrolimbo"]
  }),
  makeAsh({
    id: "unsheathe",
    slug: "desenvainar",
    nameEs: "Desenvainar",
    nameEn: "Unsheathe",
    shortDescription: "Castigo rápido de katanas con gran eficiencia.",
    longDescription: "Ofrece daño instantáneo y buena postura en versiones pesadas de katana.",
    tags: ["bosses", "dex", "infusable"],
    bestFor: ["Bosses", "Castigo técnico"],
    bestWeapons: [
      { nameEs: "Nagakiba", nameEn: "Nagakiba" },
      { nameEs: "Uchigatana", nameEn: "Uchigatana" }
    ],
    excelsAt: "hibrido",
    location: "Ceniza base de katana; transferible en herrería.",
    region: ["Necrolimbo"]
  }),
  makeAsh({
    id: "double-slash",
    slug: "doble-tajo",
    nameEs: "Doble tajo",
    nameEn: "Double Slash",
    shortDescription: "Cadena rápida ideal para aplicar hemorragia.",
    longDescription: "Golpea en ráfaga y combina muy bien con katanas de sangrado.",
    tags: ["bosses", "bleed", "dex", "arcane", "infusable"],
    bestFor: ["Bosses", "Bleed"],
    bestWeapons: [
      { nameEs: "Nagakiba", nameEn: "Nagakiba" },
      { nameEs: "Uchigatana", nameEn: "Uchigatana" }
    ],
    excelsAt: "bosses",
    location: "Se obtiene en Sellia, Town of Sorcery.",
    region: ["Caelid"]
  }),
  makeAsh({
    id: "lions-claw",
    slug: "garra-de-leon",
    nameEs: "Garra de león",
    nameEn: "Lion's Claw",
    shortDescription: "Golpe pesado con hiperarmadura y postura enorme.",
    longDescription: "Excelente en espadones y colosales para castigar jefes.",
    tags: ["bosses", "stanceBreak", "strength", "infusable"],
    bestFor: ["Bosses", "Rompepostura"],
    bestWeapons: [
      { nameEs: "Espadón", nameEn: "Greatsword" },
      { nameEs: "Mandoble", nameEn: "Claymore" }
    ],
    excelsAt: "bosses",
    location: "Drop del león guardián en Fort Gael.",
    region: ["Caelid"]
  }),
  makeAsh({
    id: "impaling-thrust",
    slug: "estocada-perforante",
    nameEs: "Estocada perforante",
    nameEn: "Impaling Thrust",
    shortDescription: "Una de las cenizas más fiables para castigo lineal en PvE sin depender de animaciones largas.",
    longDescription:
      "Rompe ritmo de enemigos con escudo y castiga ventanas cortas con mucha seguridad. Brilla en builds STR/DEX de arma media-larga y sigue siendo útil durante toda la run.",
    tags: ["bosses", "stanceBreak", "strength", "dex", "infusable"],
    bestFor: ["Bosses con castigo frontal", "Setups de control técnico", "Runs estables sin riesgo alto"],
    weakerAgainst: ["Tiene menos limpieza de área que otras cenizas de cadena"],
    bestWeapons: [
      { nameEs: "Alabarda del Jinete Nocturno", nameEn: "Nightrider Glaive" },
      { nameEs: "Mandoble", nameEn: "Claymore" },
      { nameEs: "Gran estoque", nameEn: "Great Epee" }
    ],
    excelsAt: "hibrido",
    playstyle: "Build STR/DEX técnica orientada a castigo seguro.",
    recommendation: "Excelente como ceniza principal o alternativa para armas con buen alcance.",
    location: "La vende Bernahl en Warmaster's Shack.",
    region: ["Necrolimbo"]
  }),
  makeAsh({
    id: "giant-hunt",
    slug: "caza-de-gigantes",
    nameEs: "Caza de gigantes",
    nameEn: "Giant Hunt",
    shortDescription: "Castigo vertical muy fuerte en humanoides y bosses.",
    longDescription: "Gran daño de postura y excelente alcance vertical.",
    tags: ["bosses", "stanceBreak", "strength", "infusable"],
    bestFor: ["Bosses", "Control de espacio"],
    bestWeapons: [
      { nameEs: "Alabarda del Jinete Nocturno", nameEn: "Nightrider Glaive" },
      { nameEs: "Mandoble", nameEn: "Claymore" }
    ],
    excelsAt: "bosses",
    location: "Drop de Night's Cavalry en Bellum Highway.",
    region: ["Liurnia"]
  }),
  makeAsh({
    id: "sword-dance",
    slug: "danza-de-espadas",
    nameEs: "Danza de espadas",
    nameEn: "Sword Dance",
    shortDescription: "Cadena móvil excelente para presión continua con armas de alcance medio-largo.",
    longDescription:
      "Aporta agresión, movilidad y daño consistente. Funciona muy bien en builds de DEX y setups híbridos que quieren combinar área con buen castigo de boss.",
    tags: ["area", "bosses", "dex", "infusable"],
    bestFor: ["Área", "PvE dinámico", "Builds de destreza agresivas"],
    weakerAgainst: ["No tiene el stagger bruto de cenizas pesadas como Caza de gigantes"],
    bestWeapons: [
      { nameEs: "Lanza-espada del guardián", nameEn: "Guardian's Swordspear" },
      { nameEs: "Nagakiba", nameEn: "Nagakiba" },
      { nameEs: "Alabarda del Jinete Nocturno", nameEn: "Nightrider Glaive" }
    ],
    excelsAt: "hibrido",
    playstyle: "Build DEX de presión continua con reposicionamiento activo.",
    recommendation: "Muy buena ceniza secundaria para alternar con opciones de mayor burst.",
    location: "Escarabajo al norte de Caelid Highway South.",
    region: ["Caelid"]
  }),
  makeAsh({
    id: "ice-spear",
    slug: "lanza-de-hielo",
    nameEs: "Lanza de hielo",
    nameEn: "Ice Spear",
    shortDescription: "Proyectil de escarcha top para jugar seguro, castigar a media distancia y controlar exploración.",
    longDescription:
      "Combina daño decente, alcance y aplicación de escarcha. En armas como Guardian's Swordspear se vuelve una opción premium para PvE por consistencia en bosses y zonas largas.",
    tags: ["magic", "dex", "bosses", "area", "infusable"],
    bestFor: ["Exploración segura", "Builds DEX/INT", "Bosses donde se puede castigar a media distancia"],
    weakerAgainst: ["Pierde valor si no tienes espacio para lanzar la skill"],
    bestWeapons: [
      { nameEs: "Lanza-espada del guardián", nameEn: "Guardian's Swordspear" },
      { nameEs: "Naginata cruzada", nameEn: "Cross-Naginata" },
      { nameEs: "Lanza", nameEn: "Spear" }
    ],
    excelsAt: "area",
    playstyle: "Build híbrida de frío con foco en control de distancia.",
    recommendation: "Nueva recomendación de ceniza para builds fuera del núcleo típico de katanas.",
    location: "Escarabajo lágrima al sudeste de Caria Manor.",
    region: ["Liurnia"]
  }),
  makeAsh({
    id: "black-flame-tornado",
    slug: "tornado-de-llama-negra",
    nameEs: "Tornado de llama negra",
    nameEn: "Black Flame Tornado",
    stage: ["late", "endgame"],
    shortDescription: "Ceniza brutal para bosses de mucha vida por daño sostenido y componente de llama negra.",
    longDescription:
      "Destaca especialmente en Godskin Peeler y otras armas compatibles cuando el combate permite ejecutar la animación completa. Es una de las mejores opciones de skill damage en base game para objetivos de alta vida.",
    tags: ["bosses", "area", "dex", "faith", "infusable"],
    bestFor: ["Bosses de vida alta", "Builds DEX/FE", "Daño sostenido por habilidad"],
    weakerAgainst: ["Puede sentirse lenta en peleas con poco espacio o jefes extremadamente móviles"],
    bestWeapons: [
      { nameEs: "Pelador sacrodermo", nameEn: "Godskin Peeler" },
      { nameEs: "Twinblade", nameEn: "Twinblade" }
    ],
    excelsAt: "bosses",
    playstyle: "Build de destreza con apoyo de fe orientada a skill damage.",
    recommendation: "Nueva recomendación de ceniza para ampliar el bloque de infusables fuertes contra jefes.",
    location: "Viene de base en el Pelador sacrodermo (Godskin Peeler) y puede transferirse.",
    region: ["Meseta Altus"]
  }),
  makeAsh({
    id: "glintblade-phalanx",
    slug: "falange-de-hojas-relucientes",
    nameEs: "Falange de hojas relucientes",
    nameEn: "Glintblade Phalanx",
    shortDescription: "Ceniza técnica excelente para abrir postura y preparar críticos.",
    longDescription:
      "Se integra de forma sobresaliente con Misericordia/Misericorde y otras armas ligeras cuando el plan es romper postura, forzar ripostes y maximizar daño crítico.",
    tags: ["bosses", "magic", "stanceBreak", "dex", "infusable"],
    bestFor: ["Builds INT técnicas", "Postura + crítico", "Bosses con ventanas claras"],
    weakerAgainst: ["Menos cómoda para limpieza masiva de área"],
    bestWeapons: [
      { nameEs: "Misericordia", nameEn: "Misericorde" },
      { nameEs: "Espada corta", nameEn: "Short Sword" }
    ],
    excelsAt: "bosses",
    playstyle: "Build mágica de precisión orientada a postura y riposte.",
    recommendation: "Ideal como ceniza de nicho para jugadores que prefieren ejecución técnica.",
    location: "La vende Rogier en Mesa Redonda tras avanzar Stormveil.",
    region: ["Mesa Redonda", "Necrolimbo"]
  }),
  makeAsh({
    id: "seppuku",
    slug: "seppuku",
    nameEs: "Seppuku",
    nameEn: "Seppuku",
    shortDescription: "La ceniza más fuerte para builds de hemorragia en melee.",
    longDescription: "Incrementa enormemente la acumulación de bleed en katanas y naginatas.",
    tags: ["bosses", "bleed", "dex", "arcane", "infusable"],
    bestFor: ["Bosses", "Bleed extremo"],
    bestWeapons: [
      { nameEs: "Uchigatana", nameEn: "Uchigatana" },
      { nameEs: "Nagakiba", nameEn: "Nagakiba" },
      { nameEs: "Naginata cruzada", nameEn: "Cross-Naginata" }
    ],
    excelsAt: "bosses",
    location: "Se obtiene en Mountaintops of the Giants, zona del lago helado.",
    region: ["Cimas de los Gigantes"]
  }),
  makeAsh({
    id: "square-off",
    slug: "square-off",
    nameEs: "Square Off",
    nameEn: "Square Off",
    stage: ["early", "midgame", "late", "endgame", "todaLaRun"],
    shortDescription: "Ceniza top para espadas rectas: limpia, fuerte y extremadamente fiable durante toda la run.",
    longDescription:
      "Square Off sobresale por coste bajo, ejecución clara y daño de postura excelente. Es de las mejores elecciones para builds beginner-friendly y runs completas de base game.",
    tags: ["bosses", "stanceBreak", "strength", "dex", "beginner", "infusable", "todaLaRun"],
    bestFor: ["Bosses", "Postura", "Runs completas con espada recta"],
    weakerAgainst: ["Tiene menos explosión visual que cenizas de alto riesgo"],
    bestWeapons: [
      { nameEs: "Espada larga", nameEn: "Longsword" },
      { nameEs: "Espadón ancho", nameEn: "Broadsword" },
      { nameEs: "Espada recta noble", nameEn: "Noble's Slender Sword" }
    ],
    excelsAt: "bosses",
    playstyle: "Build flexible FUE o DES con castigo rápido y postura constante.",
    recommendation: "Si quieres una run simple y efectiva, Square Off es una apuesta segura.",
    location: "Disponible en espadas rectas base y transferible.",
    region: ["Necrolimbo"]
  }),
  makeAsh({
    id: "bloodhounds-step",
    slug: "paso-de-sabueso",
    nameEs: "Paso de sabueso",
    nameEn: "Bloodhound's Step",
    shortDescription: "Movilidad defensiva top para sobrevivir y reposicionar.",
    longDescription: "No es de daño directo, pero mejora muchísimo la consistencia en peleas difíciles.",
    tags: ["beginner", "bosses", "dex", "infusable"],
    bestFor: ["Supervivencia", "Bosses agresivos"],
    bestWeapons: [
      { nameEs: "Uchigatana", nameEn: "Uchigatana" },
      { nameEs: "Mandoble", nameEn: "Claymore" }
    ],
    excelsAt: "hibrido",
    location: "Drop de Night's Cavalry en Dragonbarrow, puente de Lenne's Rise.",
    region: ["Caelid"]
  })
];
