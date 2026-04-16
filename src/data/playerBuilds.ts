import type { PlayerBuildEntry } from "../types";

export const playerBuilds: PlayerBuildEntry[] = [
  {
    id: "katraka-doble-reduvia",
    slug: "katraka-doble-reduvia",
    author: "Katraka",
    buildName: "Katraka - Doble Reduvia",
    subtitle: "Build de jugador basada en Reduvia / Reduvia",
    buildType: "arcane",
    tags: ["playerBuild", "bleed", "arcane", "bosses", "dex"],
    focus:
      "Build de hemorragia muy agresiva con doble daga Reduvia, orientada a Arcano y daño rápido a corta distancia",
    stage: ["midgame", "late", "endgame"],
    weaponMain: { nameEs: "Reduvia", nameEn: "Reduvia" },
    weaponSecondary: { nameEs: "Reduvia", nameEn: "Reduvia" },
    ashOfWar: { nameEs: "Hoja de sangre de Reduvia", nameEn: "Reduvia Blood Blade" },
    shortDescription:
      "Build de jugador centrada en doble Reduvia, hemorragia explosiva y muchísimo daño a corta distancia. Muy fuerte contra jefes y enemigos que permiten presión constante.",
    longDescription:
      "La build de Katraka apuesta por una configuración de doble Reduvia para maximizar la presión de hemorragia y aprovechar el escalado en Arcano del arma. Es una build muy ofensiva y rápida, ideal para jugadores que quieren entrar, castigar sin parar y activar hemorragia con mucha frecuencia. Destaca especialmente contra jefes vulnerables al sangrado y en combates donde se puede jugar agresivo. Su punto fuerte es la combinación de daño rápido, proc de hemorragia y sinergias de equipo que aumentan el ataque cuando se activa la pérdida de sangre.",
    whenToUse:
      "Muy buena para jefes, enemigos humanoides, objetivos vulnerables a hemorragia y jugadores que disfrutan del combate agresivo a corta distancia.",
    weakerAgainst:
      "Rinde peor contra enemigos inmunes o muy resistentes a hemorragia, contra rivales que castigan mucho el melee cercano o cuando necesitas más alcance y seguridad.",
    recommendation:
      "Build de jugador muy potente para PvE base game sin DLC. Especialmente recomendable si te gusta el estilo rápido, agresivo y centrado en Arcano.",
    notes: [
      "Llevar doble Reduvia requiere una segunda copia del arma, por lo que normalmente hace falta NG+ o intercambio con otro jugador."
    ],
    stats: ["Vigor: 45-55", "Mente: 10-15", "Aguante: 20-25", "Destreza: 18-25", "Arcano: 45-60"],
    talismans: [
      { nameEs: "Exultación del Señor de la Sangre", nameEn: "Lord of Blood's Exultation" },
      { nameEs: "Fragmento de Alejandro", nameEn: "Shard of Alexander" },
      { nameEs: "Prótesis de Millicent", nameEn: "Millicent's Prosthesis" },
      { nameEs: "Insignia de espada alada podrida", nameEn: "Rotten Winged Sword Insignia" },
      { nameEs: "Talismán gran escudo con blasón de dragón", nameEn: "Dragoncrest Greatshield Talisman" }
    ],
    buffs: [
      { nameEs: "Máscara blanca", nameEn: "White Mask" },
      { nameEs: "Voto dorado", nameEn: "Golden Vow" }
    ],
    locations: [
      {
        nameEs: "Reduvia",
        nameEn: "Reduvia",
        howToGet:
          "Se consigue derrotando a Bloody Finger Nerijus junto a la entrada de Murkwater Cave, en Necrolimbo."
      },
      {
        nameEs: "Máscara blanca",
        nameEn: "White Mask",
        howToGet:
          "La suelta uno de los Nameless White Mask invaders en la zona del lago de sangre de Mohgwyn Palace."
      },
      {
        nameEs: "Exultación del Señor de la Sangre",
        nameEn: "Lord of Blood's Exultation",
        howToGet: "Se consigue derrotando a Esgar, Priest of Blood, en las Leyndell Catacombs."
      },
      {
        nameEs: "Fragmento de Alejandro",
        nameEn: "Shard of Alexander",
        howToGet: "Se obtiene al completar la quest de Alexander y derrotarlo al final en Farum Azula en ruinas."
      },
      {
        nameEs: "Prótesis de Millicent",
        nameEn: "Millicent's Prosthesis",
        howToGet: "Se obtiene durante el tramo final de la quest de Millicent."
      }
    ],
    description:
      "Build de jugador basada en doble Reduvia para proc constante de hemorragia, daño explosivo y estilo muy agresivo en PvE.",
    pros: [
      "Proc de hemorragia muy rápido",
      "Daño excelente contra jefes vulnerables a sangrado",
      "Escalado fuerte en Arcano"
    ],
    cons: [
      "Depende de rango corto",
      "Pierde valor contra inmunidad a hemorragia",
      "Requiere segunda Reduvia para el set óptimo"
    ],
    recommendedFor: ["Jugadores agresivos", "PvE de bosses", "Builds de Arcano"]
  },
  {
    id: "player-bloodhound-fang",
    slug: "build-jugador-colmillo-de-sabueso",
    author: "Jugador / Comunidad",
    buildName: "Build de jugador - Colmillo de sabueso",
    subtitle: "Build de jugador basada en Bloodhound's Fang",
    buildType: "dex",
    tags: ["playerBuild", "bosses", "dex", "bleed", "beginner", "todaLaRun"],
    focus:
      "Build física muy fuerte y fácil de usar, ideal para toda la run y especialmente buena para jefes",
    stage: ["early", "midgame", "late", "endgame"],
    weaponMain: { nameEs: "Colmillo de sabueso", nameEn: "Bloodhound's Fang" },
    weaponSecondary: { nameEs: "Sin secundaria obligatoria", nameEn: "No mandatory off-hand" },
    ashOfWar: { nameEs: "Finta de sabueso", nameEn: "Bloodhound's Finesse" },
    shortDescription:
      "Build de jugador muy fuerte, muy estable y perfecta para quien quiere un arma capaz de rendir desde muy pronto hasta el final del juego.",
    longDescription:
      "La build de Colmillo de sabueso es una de las más recomendables del juego base para PvE por lo pronto que se consigue, lo bien que escala y lo cómoda que resulta durante toda la partida. Su daño base es muy sólido, tiene hemorragia innata, gran alcance y una habilidad excelente que combina evasión y castigo. Es una build ideal tanto para jugadores nuevos como para quien quiere una opción fuerte y sencilla para bosses. Además, aunque es un arma única, puede mejorarse mucho con buffs ofensivos como Hoja sangrienta llameante.",
    whenToUse:
      "Muy buena para toda la run, para jefes, para jugadores nuevos y para quien quiere una build fuerte sin complicarse demasiado.",
    weakerAgainst:
      "Rinde peor que builds más especializadas en daño extremo de endgame puro o en setups centradas exclusivamente en hemorragia o postura.",
    recommendation:
      "Build muy recomendable para PvE base game sin DLC. Excelente como opción generalista, fácil de usar y muy fuerte desde el early hasta el endgame.",
    notes: [
      "Colmillo de sabueso tiene una habilidad única y no usa cenizas de guerra intercambiables. Aun así, sí puede potenciarse con ciertos buffs, algo poco habitual en armas únicas.",
      "Atributo principal: Destreza. Atributo secundario: Fuerza."
    ],
    stats: ["Vigor: 45-60", "Mente: 10-15", "Aguante: 20-30", "Fuerza: 18-25", "Destreza: 40-55"],
    talismans: [
      { nameEs: "Fragmento de Alejandro", nameEn: "Shard of Alexander" },
      { nameEs: "Talismán de garra", nameEn: "Claw Talisman" },
      { nameEs: "Talismán gran escudo con blasón de dragón", nameEn: "Dragoncrest Greatshield Talisman" },
      { nameEs: "Exultación del Señor de la Sangre", nameEn: "Lord of Blood's Exultation" },
      { nameEs: "Talismán de espada ritual", nameEn: "Ritual Sword Talisman" }
    ],
    buffs: [
      { nameEs: "Llama, concédeme fuerza", nameEn: "Flame, Grant Me Strength" },
      { nameEs: "Voto dorado", nameEn: "Golden Vow" },
      { nameEs: "Hoja sangrienta llameante", nameEn: "Bloodflame Blade" }
    ],
    locations: [
      {
        nameEs: "Colmillo de sabueso",
        nameEn: "Bloodhound's Fang",
        howToGet:
          "Se consigue derrotando a Bloodhound Knight Darriwil en Forlorn Hound Evergaol, en Necrolimbo."
      },
      {
        nameEs: "Fragmento de Alejandro",
        nameEn: "Shard of Alexander",
        howToGet: "Se obtiene al completar la quest de Alexander y derrotarlo al final en Farum Azula en ruinas."
      },
      {
        nameEs: "Talismán de garra",
        nameEn: "Claw Talisman",
        howToGet: "Se encuentra en Stormveil Castle."
      },
      {
        nameEs: "Exultación del Señor de la Sangre",
        nameEn: "Lord of Blood's Exultation",
        howToGet: "Se consigue derrotando a Esgar, Priest of Blood, en las Leyndell Catacombs."
      },
      {
        nameEs: "Hoja sangrienta llameante",
        nameEn: "Bloodflame Blade",
        howToGet:
          "Se obtiene con el Prayerbook correspondiente y se usa para potenciar la hemorragia del arma."
      }
    ],
    description:
      "Build de jugador generalista basada en Colmillo de sabueso, muy fuerte para toda la run y muy fiable contra jefes.",
    pros: ["Muy estable de early a endgame", "Daño sólido y alcance cómodo", "Ideal para jugadores nuevos"],
    cons: [
      "Menos extrema que builds ultra especializadas de endgame",
      "No permite cenizas intercambiables",
      "Depende del dominio de spacing para exprimirla"
    ],
    recommendedFor: ["Run completa", "Jugadores nuevos", "Bosses PvE"]
  },
  {
    id: "black-knife-frost-faith-build",
    slug: "build-cuchillo-negro-y-escarcha",
    author: "Comunidad",
    buildName: "Build Cuchillo Negro y Escarcha",
    subtitle: "Black Knife Frost Faith Build",
    buildType: "hybrid",
    tags: ["playerBuild", "bosses", "dex", "faith", "unique", "dark", "frost", "bleed", "skillDamage"],
    focus:
      "Build dark de Destreza/Fe centrada en Cuchillo Negro como núcleo de daño y Gran cuchillo con Niebla escalofriante para presión de escarcha y hemorragia",
    stage: ["midgame", "late", "endgame"],
    weaponMain: { nameEs: "Cuchillo Negro", nameEn: "Black Knife" },
    weaponSecondary: { nameEs: "Gran cuchillo", nameEn: "Great Knife" },
    ashOfWar: { nameEs: "Niebla escalofriante", nameEn: "Chilling Mist" },
    shortDescription:
      "Build de Destreza y Fe centrada en Cuchillo Negro como arma principal y Gran cuchillo con Niebla escalofriante como secundaria, mezclando daño sagrado, escarcha y hemorragia.",
    longDescription:
      "La Build Cuchillo Negro y Escarcha combina el daño de skill de Black Knife con una segunda daga mucho más flexible: Great Knife con Ash of War Chilling Mist. El resultado es una build muy agresiva y con mucha personalidad, capaz de aplicar presión constante con Blade of Death, usar escarcha para aumentar el daño y aprovechar la hemorragia natural del Gran cuchillo. Es una build muy atractiva para PvE porque mezcla daño sagrado, daño por skill y estados alterados, todo dentro de una estética oscura de asesina.",
    whenToUse:
      "Bosses, enemigos con mucha vida, jugadores que quieren una build dark de Destreza/Fe y estilos de juego agresivos con doble daga.",
    weakerAgainst:
      "Rinde peor contra enemigos muy resistentes al daño sagrado o a estados alterados, y exige jugar a corta distancia con más precisión que otras builds más cómodas.",
    recommendation:
      "Añadirla como build dark de nicho muy potente para mid-late-endgame, centrada en skill damage, escarcha y presión de daga.",
    notes: [
      "Es una build de Destreza/Fe con bastante peso en Fe para potenciar Black Knife y los conjuros, mientras que Great Knife aporta una capa secundaria de escarcha y hemorragia.",
      "Exultación del Señor de la Sangre funciona como alternativa si quieres empujar más la parte de hemorragia del Gran cuchillo."
    ],
    stats: ["Vigor: 45-55", "Mente: 18-25", "Aguante: 20-25", "Fuerza: mínimos", "Destreza: 20-30", "Fe: 35-55"],
    talismans: [
      { nameEs: "Fragmento de Alejandro", nameEn: "Shard of Alexander" },
      { nameEs: "Talismán del escorpión sagrado", nameEn: "Sacred Scorpion Charm" },
      { nameEs: "Talismán de espada ritual", nameEn: "Ritual Sword Talisman" },
      { nameEs: "Talismán gran escudo con blasón de dragón", nameEn: "Dragoncrest Greatshield Talisman" },
      { nameEs: "Exultación del Señor de la Sangre", nameEn: "Lord of Blood's Exultation" }
    ],
    buffs: [
      { nameEs: "Voto dorado", nameEn: "Golden Vow" },
      { nameEs: "Llama, concédeme fuerza", nameEn: "Flame, Grant Me Strength" },
      { nameEs: "Hoja Negra", nameEn: "Black Blade" }
    ],
    seals: [
      { nameEs: "Sello de dedos", nameEn: "Finger Seal" },
      { nameEs: "Sello Matadioses", nameEn: "Godslayer's Seal" },
      { nameEs: "Sello del Árbol Áureo", nameEn: "Erdtree Seal" }
    ],
    sealNote:
      "El Sello de dedos encaja bien como opción básica, pero si la build evoluciona hacia Fe alta, el Sello Matadioses y sobre todo el Sello del Árbol Áureo suelen rendir mejor.",
    incantations: [
      { nameEs: "Voto dorado", nameEn: "Golden Vow" },
      { nameEs: "Llama, concédeme fuerza", nameEn: "Flame, Grant Me Strength" },
      { nameEs: "Hoja Negra", nameEn: "Black Blade" }
    ],
    incantationNote:
      "La build puede empezar con Sello de dedos, pero gana mucho valor si se apoya con conjuros de Fe y evoluciona a sellos mejores.",
    gameplayLoop: [
      "Abrir con Hoja de la Muerte para marcar el objetivo y bajar su vida máxima.",
      "Usar Cuchillo Negro para castigar a bosses y mantener presión con su skill principal.",
      "Entrar con Gran cuchillo + Niebla escalofriante para activar escarcha y sumar presión de hemorragia.",
      "Complementar con conjuros de Fe cuando convenga según ventana y distancia.",
      "Reaplicar buffs antes de peleas largas o fases nuevas de boss."
    ],
    weaponSetupNotes: [
      "Cuchillo Negro es el arma principal y la pieza central de la build.",
      "Gran cuchillo funciona como secundaria infusable para adaptar la presión.",
      "Gran cuchillo con Niebla escalofriante aporta escarcha y presión adicional de estado."
    ],
    armorSet: { nameEs: "Set de Cuchillo Negro", nameEn: "Black Knife Set" },
    armorNote: "La build gana mucha identidad visual con el Set de Cuchillo Negro, reforzando la fantasía de asesina oscura.",
    cardTheme: "darkAssassin",
    locations: [
      {
        nameEs: "Cuchillo Negro",
        nameEn: "Black Knife",
        howToGet:
          "Lo suelta una Black Knife Assassin en la entrada de Sainted Hero's Grave, en Altus Plateau."
      },
      {
        nameEs: "Gran cuchillo",
        nameEn: "Great Knife",
        howToGet:
          "Es una daga con hemorragia base que puede conseguirse según clase inicial o como drop de ciertos enemigos."
      },
      {
        nameEs: "Niebla escalofriante",
        nameEn: "Chilling Mist",
        howToGet:
          "La suelta un escarabajo lágrima invisible en Three Sisters (Liurnia), en la zona de Caria Manor."
      },
      {
        nameEs: "Sello de dedos",
        nameEn: "Finger Seal",
        howToGet: "Es el sello básico para conjuros de Fe y sirve muy bien como opción inicial."
      },
      {
        nameEs: "Sello Matadioses",
        nameEn: "Godslayer's Seal",
        howToGet:
          "Se encuentra en Stormveil Castle tras una puerta con estatua de diablillos que requiere Stonesword Key."
      },
      {
        nameEs: "Sello del Árbol Áureo",
        nameEn: "Erdtree Seal",
        howToGet: "Se encuentra en Volcano Manor, en la zona bajo Prison Town Church."
      }
    ],
    description:
      "Build de Destreza/Fe temática oscura con doble daga, enfocada en Blade of Death, presión agresiva y estados alterados.",
    pros: [
      "Gran daño de habilidad con Blade of Death",
      "Combina daño sagrado, escarcha y hemorragia",
      "Muy fuerte en bosses con ventanas cortas",
      "Estética dark muy marcada"
    ],
    cons: [
      "Exige jugar muy cerca del objetivo",
      "Pierde valor contra resistencias altas a sagrado o estados",
      "Requiere buena gestión de buffs y timings"
    ],
    recommendedFor: ["Build oscura", "Jefes", "Destreza / Fe", "Estilo agresivo de doble daga"]
  }
];
