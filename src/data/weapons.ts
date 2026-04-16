import type { WeaponEntry } from "../types";
import { rankingBuilds } from "./builds";

const fromRanking = (id: string, override: Partial<WeaponEntry> = {}): WeaponEntry => {
  const source = rankingBuilds.find((entry) => entry.id === id);

  if (!source) {
    throw new Error(`No existe entrada de ranking para ${id}`);
  }

  const { rank, score, ...weapon } = source;
  return { ...weapon, ...override };
};

type InfusableSeed = Pick<
  WeaponEntry,
  | "id"
  | "slug"
  | "nameEs"
  | "nameEn"
  | "shortDescription"
  | "longDescription"
  | "stage"
  | "tags"
  | "bestFor"
  | "weakerAgainst"
  | "recommendation"
  | "howToGet"
  | "stats"
  | "affinity"
  | "bestAshes"
  | "region"
  | "weaponType"
  | "playstyle"
  | "scaling"
> &
  Partial<WeaponEntry>;

const makeInfusableSetup = (seed: InfusableSeed): WeaponEntry => ({
  tier: "A",
  badges: ["generalist"],
  category: "armaInfusable",
  talismans: ["Fragmento de Alexander", "Favor del Árbol Áureo +2"],
  buffs: ["Voto dorado"],
  difficulty: "Media",
  pros: ["Buen rendimiento en PvE general"],
  cons: ["Depende del dominio de la ceniza de guerra"],
  ...seed
});

export const uniqueWeapons: WeaponEntry[] = [
  fromRanking("blasphemous-blade"),
  fromRanking("mohgwyn-sacred-spear"),
  fromRanking("sacred-relic-sword"),
  fromRanking("bloodhounds-fang"),
  fromRanking("moonveil"),
  fromRanking("wing-of-astel"),
  fromRanking("dark-moon-greatsword")
];

export const infusableSetups: WeaponEntry[] = [
  fromRanking("star-fist-cragblade"),
  fromRanking("great-stars-wild-strikes"),
  makeInfusableSetup({
    id: "guardians-swordspear-ice-spear",
    slug: "lanza-espada-del-guardian-lanza-de-hielo",
    nameEs: "Lanza-espada del guardián + Lanza de hielo",
    nameEn: "Guardian's Swordspear + Ice Spear",
    highlightLabel: "Combinación destacada",
    stage: ["midgame", "late", "endgame"],
    tags: ["infusable", "dex", "magic", "bosses", "area"],
    shortDescription:
      "Una de las combinaciones más interesantes para Destreza/INT o builds híbridas de frío, con gran alcance y muy buena exploración.",
    longDescription:
      "Guardian's Swordspear destaca por su escalado excelente en Destreza y por lo bien que acepta varias cenizas de guerra. Con Lanza de hielo se convierte en una opción muy fuerte para PvE, capaz de castigar a media distancia, explorar con seguridad y rendir muy bien contra bosses. También es una combinación muy agradecida para quien quiere una build distinta a las clásicas de katana o espadón.",
    bestFor: [
      "Exploración y juego seguro con alcance",
      "Builds híbridas DEX/INT",
      "Bosses donde Lanza de hielo entra con consistencia"
    ],
    weakerAgainst: [
      "Tiene menos burst bruto que las builds más rotas del top principal",
      "Pierde valor si no conectas bien la skill"
    ],
    recommendation:
      "Añadirla como build muy recomendable fuera del núcleo más obvio del meta. Como alternativa corta también funciona muy bien Danza de espadas.",
    howToGet:
      "Lanza-espada del guardián: drop de enemigos guardianes de los árboles menores. Lanza de hielo: escarabajo lágrima al sudeste de Caria Manor en Liurnia.",
    stats: ["Vigor 45-55", "Mente 15-20", "Resistencia 20-25", "Destreza 40-55", "Inteligencia 20-35"],
    talismans: ["Fragmento de Alexander", "Cresta filigranada cariana", "Encanto escorpión mágico", "Talismán de lanza"],
    buffs: ["Voto dorado", "Terra mágica (híbrida)"],
    affinity: "Fría / Mágica",
    bestAshes: ["Lanza de hielo / Ice Spear", "Danza de espadas / Sword Dance (alternativa)"],
    region: ["Liurnia", "Meseta Altus"],
    weaponType: "Alabarda infusable",
    playstyle: "Castigo de media distancia con control de escarcha.",
    scaling: "DES/INT",
    difficulty: "Media",
    badges: ["generalist", "bossKiller", "aoeMonster"],
    pros: ["Alcance excelente", "Muy segura en exploración", "Gran consistencia contra jefes"],
    cons: ["Menor burst que setups S+", "Dependiente de la precisión con la ceniza"]
  }),
  makeInfusableSetup({
    id: "misericordia-glintblade-phalanx",
    slug: "misericordia-falange-de-hojas-relucientes",
    nameEs: "Misericordia + Falange de hojas relucientes",
    nameEn: "Misericorde + Glintblade Phalanx",
    highlightLabel: "Combinación destacada",
    stage: ["midgame", "late", "endgame"],
    tags: ["infusable", "magic", "stanceBreak", "bosses", "dex"],
    shortDescription: "Build técnica centrada en daño de postura y críticos altísimos con Misericordia.",
    longDescription:
      "Misericordia tiene uno de los mejores modificadores de crítico del juego, y por eso combina muy bien con habilidades que rompen postura o facilitan ripostes. Con Falange de hojas relucientes destaca especialmente en setups mágicos o híbridos, donde el objetivo es abrir al enemigo y aprovechar el crítico brutal del arma. Es una build menos universal, pero muy interesante para la web porque aporta un estilo de juego distinto.",
    bestFor: ["Críticos", "Daño de postura", "Setups técnicos en builds de INT"],
    weakerAgainst: ["No es tan cómoda ni tan sencilla como las opciones más generalistas del ranking"],
    recommendation:
      "Añadirla como build de nicho muy interesante dentro de dagas y setups técnicos de postura + crítico.",
    howToGet:
      "Misericordia: en Castillo Velo Tormentoso, junto a la sala con enemigos exiliados. Falange de hojas relucientes: comprada a Rogier en Mesa Redonda tras Godrick.",
    stats: ["Vigor 40-50", "Mente 20-25", "Resistencia 15-20", "Destreza 18-30", "Inteligencia 40-60"],
    talismans: ["Talismán de daga", "Cresta filigranada cariana", "Fragmento de Alexander", "Icono de Godfrey"],
    buffs: ["Terra mágica", "Voto dorado (híbrida)"],
    affinity: "Mágica / Fría",
    bestAshes: ["Falange de hojas relucientes / Glintblade Phalanx"],
    region: ["Necrolimbo", "Mesa Redonda"],
    weaponType: "Daga infusable",
    playstyle: "Abrir postura con la ceniza y convertir cada riposte en daño crítico alto.",
    scaling: "INT/DES",
    difficulty: "Alta",
    badges: ["stanceBreaker", "bossKiller"],
    pros: ["Críticos brutales", "Excelente identidad de nicho", "Muy eficaz en manos precisas"],
    cons: ["Más técnica que una build estándar", "Pierde valor cuando no hay ventanas de crítico"]
  }),
  makeInfusableSetup({
    id: "godskin-peeler-black-flame-tornado",
    slug: "pelador-sacrodermo-tornado-de-llama-negra",
    nameEs: "Pelador sacrodermo + Tornado de llama negra",
    nameEn: "Godskin Peeler + Black Flame Tornado",
    highlightLabel: "Nueva recomendación de ceniza",
    stage: ["late", "endgame"],
    tags: ["infusable", "bosses", "dex", "faith", "area"],
    shortDescription:
      "Una build muy fuerte para bosses gracias al daño de Tornado de llama negra, especialmente en objetivos con mucha vida.",
    longDescription:
      "Godskin Peeler es una twinblade excelente y con Tornado de llama negra gana una identidad muy clara orientada a bosses. La habilidad destaca por su daño y por el componente de llama negra, que resulta especialmente útil contra enemigos con mucha vida. No es la build más temprana ni la más simple, pero sí una opción muy buena para ampliar la sección de armas infusables potentes.",
    bestFor: ["Bosses de mucha vida", "Daño sostenido con skill", "Builds de Destreza con apoyo de Fe"],
    weakerAgainst: [
      "Puede ser más exigente de usar que otras builds directas",
      "Depende del espacio para ejecutar bien la habilidad"
    ],
    recommendation: "Añadirla como build fuerte de bosses y skill damage.",
    howToGet:
      "Pelador sacrodermo: derrota al Apóstol Sacrodermo de Windmill Village (Meseta Altus). Tornado de llama negra: ceniza asociada al propio Pelador sacrodermo.",
    stats: ["Vigor 45-55", "Mente 15-20", "Resistencia 20-25", "Destreza 45-60", "Fe 20-30"],
    talismans: ["Fragmento de Alexander", "Icono de Godfrey", "Encanto escorpión de fuego", "Favor del Árbol Áureo +2"],
    buffs: ["Voto dorado", "Llama, concédeme fuerza"],
    affinity: "Llama / Sagrada / Calidad",
    bestAshes: ["Tornado de llama negra / Black Flame Tornado"],
    region: ["Meseta Altus"],
    weaponType: "Twinblade infusable",
    playstyle: "Castigo de ventana con skill de alto daño sostenido.",
    scaling: "DES/FE",
    difficulty: "Media",
    badges: ["bossKiller", "aoeMonster"],
    pros: ["Muy fuerte en bosses", "Escala bien en híbrida DEX/FE", "Daño sólido en objetivos grandes"],
    cons: ["No es una setup temprana", "Exige buen posicionamiento"]
  }),
  makeInfusableSetup({
    id: "straight-sword-square-off",
    slug: "espada-recta-square-off",
    nameEs: "Espada recta + Square Off",
    nameEn: "Straight Sword + Square Off",
    highlightLabel: "Combinación destacada",
    stage: ["early", "midgame", "late", "todaLaRun"],
    tags: ["infusable", "bosses", "stanceBreak", "beginner", "todaLaRun", "strength", "dex"],
    shortDescription:
      "Una de las combinaciones más limpias, fuertes y fiables para quien quiere una build sencilla y muy efectiva.",
    longDescription:
      "Square Off se repite muchísimo como una de las mejores cenizas para espadas rectas, y con razón. Da postura, castigo rápido y una sensación muy sólida en PvE. No es la combinación más llamativa de la web, pero sí una de las más recomendables para quien busca algo fuerte, simple y válido durante toda la run.",
    bestFor: ["Early y midgame", "Runs limpias", "Jugadores nuevos", "Bosses con ventanas claras"],
    weakerAgainst: ["Tiene menos espectáculo y menos techo explosivo que otras builds más avanzadas"],
    recommendation: "Añadirla como opción beginner-friendly y arma de toda la run.",
    howToGet:
      "Puedes usar Longsword, Broadsword o cualquier espada recta equivalente. Square Off ya está disponible de base en espadas rectas y se puede transferir.",
    stats: [
      "Vigor 40-55",
      "Mente 10-15",
      "Resistencia 20-25",
      "Fuerza o Destreza: según afinidad elegida",
      "Build flexible"
    ],
    talismans: ["Talismán del hacha", "Fragmento de Alexander", "Favor del Árbol Áureo +2", "Talismán granescudo crestadragón"],
    buffs: ["Voto dorado", "Llama, concédeme fuerza"],
    affinity: "Pesada / Aguda / Calidad",
    bestAshes: ["Square Off"],
    region: ["Necrolimbo", "Liurnia"],
    weaponType: "Espada recta infusable",
    playstyle: "Castigo rápido y ruptura de postura fiable con poco coste de FP.",
    scaling: "Flexible (FUE o DES)",
    difficulty: "Baja",
    badges: ["beginnerFriendly", "stanceBreaker", "generalist"],
    pros: ["Muy fácil de ejecutar", "Excelente toda la run", "Gran consistencia en jefes"],
    cons: ["Menos techo explosivo que builds de nicho", "Poco espectacular frente a setups avanzadas"]
  }),
  fromRanking("nagakiba-unsheathe-double-slash"),
  fromRanking("claymore-lions-claw-impaling-thrust"),
  fromRanking("greatsword-lions-claw"),
  fromRanking("giant-crusher-cragblade"),
  fromRanking("nightrider-glaive", {
    id: "nightrider-glaive-giant-hunt",
    slug: "alabarda-jinete-nocturno-caza-de-gigantes",
    nameEs: "Alabarda del Jinete Nocturno + Caza de gigantes",
    nameEn: "Nightrider Glaive + Giant Hunt",
    highlightLabel: "Combinación destacada",
    bestAshes: [
      "Caza de gigantes / Giant Hunt",
      "Estocada perforante / Impaling Thrust (alternativa)",
      "Danza de espadas / Sword Dance (alternativa)"
    ],
    shortDescription:
      "Versión recomendada de Nightrider para bosses humanoides y control vertical, con Estocada perforante como alternativa muy fiable.",
    recommendation:
      "Usa Caza de gigantes como ceniza principal para castigo vertical. Como subvariante corta, Estocada perforante funciona muy bien para castigo lineal seguro."
  }),
  fromRanking("uchigatana", {
    id: "uchigatana-seppuku",
    slug: "uchigatana-seppuku",
    nameEs: "Uchigatana + Seppuku",
    nameEn: "Uchigatana + Seppuku",
    stage: ["midgame", "late", "endgame"],
    tags: ["bosses", "bleed", "dex", "arcane", "infusable"],
    bestAshes: ["Seppuku"],
    shortDescription: "Versión de Uchigatana centrada en proc de hemorragia para bosses.",
    longDescription:
      "Al aplicar Seppuku, Uchigatana gana mucha presión de estado y se convierte en una opción de daño sostenido muy estable para mid/late game.",
    recommendation: "Si no tienes dual katana, esta variante sigue rindiendo muy bien."
  }),
  fromRanking("double-uchigatana-seppuku"),
  fromRanking("uchigatana-nagakiba-seppuku"),
  fromRanking("cross-naginata", {
    id: "cross-naginata-seppuku",
    slug: "naginata-cruzada-seppuku",
    nameEs: "Naginata cruzada + Seppuku / afinidad de hemorragia",
    nameEn: "Cross-Naginata + Seppuku / Bleed Affinity",
    bestAshes: ["Seppuku", "Danza de espadas"],
    recommendation:
      "Alterna entre Seppuku y afinidad de hemorragia según si prefieres burst de estado o mayor consistencia de poke."
  })
];
