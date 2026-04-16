import type { WeaponEntry } from "../types";

type UniqueSeed = Pick<
  WeaponEntry,
  | "id"
  | "slug"
  | "nameEs"
  | "nameEn"
  | "stage"
  | "tags"
  | "shortDescription"
  | "longDescription"
  | "bestFor"
  | "weakerAgainst"
  | "recommendation"
  | "stats"
  | "talismans"
  | "buffs"
  | "howToGet"
  | "region"
  | "playstyle"
  | "scaling"
  | "difficulty"
  | "tier"
  | "badges"
> &
  Partial<WeaponEntry>;

const makeUniqueHonorable = (seed: UniqueSeed): WeaponEntry => ({
  category: "armaUnica",
  affinity: "Somber (sin afinidad)",
  bestAshes: ["No aplica: habilidad única del arma"],
  weaponType: "Arma única",
  pros: ["Excelente identidad de build"],
  cons: ["Más de nicho que las opciones meta universales"],
  ...seed
});

export const uniqueHonorableWeapons: WeaponEntry[] = [
  makeUniqueHonorable({
    id: "maliketh-black-blade",
    slug: "espada-negra-de-maliketh",
    nameEs: "Espada negra de Maliketh",
    nameEn: "Maliketh's Black Blade",
    stage: ["late", "endgame"],
    tags: ["unique", "bosses", "faith", "strength"],
    shortDescription: "Una de las armas únicas más potentes para builds de Fuerza y Fe en late/endgame.",
    longDescription:
      "La Espada negra de Maliketh es una opción muy seria para builds de Fuerza/Fe centradas en daño pesado y en sacar partido a su habilidad única. No es tan universal como otras armas más cómodas del meta principal, pero tiene potencia de sobra como para merecer una ficha propia. Funciona especialmente bien en personajes de final de partida que quieren un arma con mucho impacto, presencia y daño.",
    bestFor: ["Bosses", "Burst", "Builds de Fuerza/Fe", "Personajes de endgame"],
    weakerAgainst: [
      "No es la opción más cómoda para early o midgame",
      "Menos flexible para jugadores que buscan sencillez"
    ],
    recommendation: "Añadirla como arma fuerte de nicho, muy buena para late/endgame.",
    stats: ["Vigor 50-60", "Mente 20-25", "Aguante 25-30", "Fuerza 34-45", "Fe 35-50"],
    talismans: [
      "Fragmento de Alejandro / Shard of Alexander",
      "Talismán de filigrana cariana / Carian Filigreed Crest",
      "Talismán gran escudo con blasón de dragón / Dragoncrest Greatshield Talisman"
    ],
    buffs: [],
    howToGet: "Intercambia el Recuerdo de la Hoja Negra de Maliketh en Mesa Redonda.",
    region: ["Farum Azula en ruinas", "Mesa Redonda"],
    playstyle: "Golpe pesado FE/FUE centrado en skill de alto impacto.",
    scaling: "FUE/FE",
    difficulty: "Media",
    tier: "S",
    badges: ["bossKiller", "hyperCarry"]
  }),
  makeUniqueHonorable({
    id: "hand-of-malenia",
    slug: "mano-de-malenia",
    nameEs: "Mano de Malenia",
    nameEn: "Hand of Malenia",
    stage: ["late", "endgame"],
    tags: ["unique", "bosses", "dex", "bleed"],
    shortDescription:
      "Katana única de Destreza muy fuerte, técnica y agresiva, ideal para jugadores que quieren una build rápida y de alto nivel.",
    longDescription:
      "La Mano de Malenia es una de las armas más vistosas y técnicas del juego base para builds centradas en Destreza. Rinde especialmente bien cuando se construye alrededor de ataques rápidos, presión agresiva y sinergias con equipo ofensivo. No es la más sencilla para todo el mundo, pero sí una opción muy potente y con identidad propia para final de partida.",
    bestFor: ["Builds de DEX", "Juego agresivo", "Bosses", "Jugadores con estilo técnico"],
    weakerAgainst: [
      "Menos amigable para jugadores nuevos",
      "Menos universal que otras opciones más sencillas"
    ],
    recommendation: "Añadirla como arma top de Destreza avanzada.",
    stats: ["Vigor 45-55", "Mente 15-20", "Aguante 20-25", "Destreza 60-80"],
    talismans: [
      "Prótesis de Millicent / Millicent's Prosthesis",
      "Insignia de espada alada podrida / Rotten Winged Sword Insignia",
      "Fragmento de Alejandro / Shard of Alexander",
      "Talismán de espada ritual / Ritual Sword Talisman"
    ],
    buffs: [],
    howToGet: "Intercambia el Recuerdo de la Diosa de la Podredumbre en Mesa Redonda.",
    region: ["Elphael, Árbol Hierático de Miquella", "Mesa Redonda"],
    playstyle: "Katana de DEX avanzada con presión constante y castigo técnico.",
    scaling: "DES",
    difficulty: "Alta",
    tier: "S",
    badges: ["bossKiller", "bleed"]
  }),
  makeUniqueHonorable({
    id: "axe-of-godrick",
    slug: "hacha-de-godrick",
    nameEs: "Hacha de Godrick",
    nameEn: "Axe of Godrick",
    stage: ["early", "midgame", "late"],
    tags: ["unique", "strength", "area"],
    shortDescription: "Arma única vistosa y divertida, con build sólida para Fuerza y skill de ondas de choque.",
    longDescription:
      "El Hacha de Godrick no está al nivel de las armas más rotas del juego base, pero sí puede rendir muy bien con una build correcta. Su habilidad le da identidad propia y hace que encaje muy bien en una sección de honorables o de armas únicas fuertes fuera del top principal.",
    bestFor: ["Builds de Fuerza", "Daño en área", "Opción temática y vistosa"],
    weakerAgainst: ["Tiene menos consistencia y menos techo de daño que las armas más meta"],
    recommendation: "Añadirla como honorable y build divertida perfectamente viable.",
    stats: ["Vigor 40-55", "Mente 15-20", "Aguante 25-30", "Fuerza 34-45"],
    talismans: [
      "Fragmento de Alejandro / Shard of Alexander",
      "Talismán del hacha / Axe Talisman",
      "Talismán gran escudo con blasón de dragón / Dragoncrest Greatshield Talisman"
    ],
    buffs: ["Llama, concédeme fuerza / Flame, Grant Me Strength"],
    howToGet: "Intercambia el Recuerdo del Injertado en Mesa Redonda.",
    region: ["Castillo Velo Tormentoso", "Mesa Redonda"],
    playstyle: "Fuerza frontal con habilidad de control en área.",
    scaling: "FUE/DES",
    difficulty: "Media",
    tier: "A",
    badges: ["aoeMonster", "generalist"]
  }),
  makeUniqueHonorable({
    id: "eleonoras-poleblade",
    slug: "hoja-doble-de-eleonora",
    nameEs: "Hoja doble de Eleonora",
    nameEn: "Eleonora's Poleblade",
    stage: ["midgame", "late", "endgame"],
    tags: ["unique", "bleed", "arcane", "dex", "bosses", "area"],
    shortDescription: "Twinblade muy fuerte de hemorragia, ideal para builds agresivas de Arcano/Destreza.",
    longDescription:
      "La Hoja doble de Eleonora es una de las armas más interesantes para builds de hemorragia en el juego base. Destaca por su velocidad, su presión ofensiva y por lo bien que encaja en personajes de Arcano/Destreza que quieren un estilo muy agresivo. Tiene mucha personalidad y merece estar en la web como arma bleed fuerte fuera del núcleo más repetido.",
    bestFor: ["Builds de hemorragia", "Bosses vulnerables a bleed", "Juego ofensivo rápido"],
    weakerAgainst: ["Pierde mucho valor frente a enemigos muy resistentes o inmunes a hemorragia"],
    recommendation: "Añadirla como arma bleed muy potente y visual.",
    stats: ["Vigor 45-55", "Mente 12-18", "Aguante 20-25", "Destreza 30-40", "Arcano 40-55"],
    talismans: [
      "Máscara blanca / White Mask",
      "Exultación del Señor de la Sangre / Lord of Blood's Exultation",
      "Prótesis de Millicent / Millicent's Prosthesis",
      "Insignia de espada alada podrida / Rotten Winged Sword Insignia"
    ],
    buffs: [],
    howToGet: "Derrota a Eleonora en la Segunda Iglesia de Márika.",
    region: ["Meseta Altus"],
    playstyle: "Twinblade ARC/DES de presión continua y procs rápidos.",
    scaling: "DES/ARC",
    difficulty: "Media",
    tier: "S",
    badges: ["bleed", "bossKiller"]
  }),
  makeUniqueHonorable({
    id: "marais-executioners-sword",
    slug: "espada-ejecutora-de-marais",
    nameEs: "Espada ejecutora de Marais",
    nameEn: "Marais Executioner's Sword",
    stage: ["midgame", "late", "endgame"],
    tags: ["unique", "strength", "arcane", "bosses"],
    shortDescription:
      "Arma única muy buena para builds centradas en habilidad y daño giratorio, con identidad muy marcada.",
    longDescription:
      "La Espada ejecutora de Marais funciona especialmente bien cuando se construye alrededor de su habilidad y de talismanes que potencian skills y ataques sucesivos. No es una opción universal, pero sí una build muy reconocible y potente que merece una ficha propia dentro de las armas únicas fuertes.",
    bestFor: ["Bosses", "Builds de skill damage", "Personajes que quieren algo distinto"],
    weakerAgainst: ["No es tan sencilla ni tan estable como otras armas top más generales"],
    recommendation: "Añadirla como arma fuerte de nicho con build muy marcada.",
    stats: ["Vigor 45-55", "Mente 15-20", "Aguante 20-25", "Fuerza 35-45", "Arcano 25-40"],
    talismans: [
      "Fragmento de Alejandro / Shard of Alexander",
      "Insignia de espada alada podrida / Rotten Winged Sword Insignia",
      "Prótesis de Millicent / Millicent's Prosthesis",
      "Talismán gran escudo con blasón de dragón / Dragoncrest Greatshield Talisman"
    ],
    buffs: [],
    howToGet: "Derrota a Elemer del Zarzal en El Castillo Sombrío.",
    region: ["Meseta Altus"],
    playstyle: "Skill-centric de FUE/ARC con daño giratorio sostenido.",
    scaling: "FUE/ARC",
    difficulty: "Media",
    tier: "S",
    badges: ["bossKiller", "generalist"]
  }),
  makeUniqueHonorable({
    id: "envoys-long-horn",
    slug: "trompa-larga-del-enviado",
    nameEs: "Trompa larga del enviado",
    nameEn: "Envoy's Long Horn",
    stage: ["late", "endgame"],
    tags: ["unique", "faith", "strength", "area", "bosses"],
    shortDescription:
      "Build rara pero sorprendentemente fuerte en PvE, especialmente cuando se construye alrededor de su skill de burbujas.",
    longDescription:
      "La Trompa larga del enviado es una de esas armas que parecen meme hasta que se juega bien. Su habilidad puede hacer muchísimo daño en PvE y encaja muy bien en personajes de Fe/Fuerza que buscan algo diferente, llamativo y realmente potente en determinadas situaciones.",
    bestFor: ["Daño por habilidad", "Enemigos grandes", "Builds raras pero fuertes", "Juego diferente en endgame"],
    weakerAgainst: ["Es más de nicho y menos universal que las grandes armas meta del juego base"],
    recommendation: "Añadirla como build rara pero muy interesante y fuerte.",
    stats: ["Vigor 45-55", "Mente 20-25", "Aguante 20-30", "Fuerza 20-30", "Fe 40-60"],
    talismans: [
      "Fragmento de Alejandro / Shard of Alexander",
      "Talismán de filigrana cariana / Carian Filigreed Crest",
      "Talismán del escorpión sagrado / Sacred Scorpion Charm",
      "Talismán gran escudo con blasón de dragón / Dragoncrest Greatshield Talisman"
    ],
    buffs: [],
    howToGet: "Drop de Grandes Enviados en zonas tardías del juego base.",
    region: ["Elphael, Árbol Hierático de Miquella", "Leyndell, Capital Cenicienta"],
    playstyle: "FE/FUE de skill burst orientado a objetivos grandes.",
    scaling: "FE/FUE",
    difficulty: "Alta",
    tier: "S",
    badges: ["aoeMonster", "bossKiller"]
  })
];
