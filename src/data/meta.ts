import type { BadgeKey, FilterKey, FilterOption, HomeSummaryItem, NavLink, StageKey } from "../types";

export const navLinks: NavLink[] = [
  { id: "home", label: "Inicio" },
  { id: "ranking", label: "Ranking" },
  { id: "armas", label: "Armas" },
  { id: "somber", label: "Armas únicas" },
  { id: "unicas-fuertes", label: "Únicas muy fuertes" },
  { id: "infusables", label: "Armas infusables" },
  { id: "ashes", label: "Cenizas de guerra" },
  { id: "comparador", label: "Comparador" },
  { id: "localizaciones", label: "Localizaciones" },
  { id: "builds-jugadores", label: "Builds de jugadores" },
  { id: "favoritos", label: "Favoritos" }
];

export const filterOptions: FilterOption[] = [
  { key: "early", label: "Early" },
  { key: "midgame", label: "Midgame" },
  { key: "late", label: "Late" },
  { key: "endgame", label: "Endgame" },
  { key: "todaLaRun", label: "Toda la run" },
  { key: "playerBuild", label: "Build de jugador" },
  { key: "beginner", label: "Fácil de usar" },
  { key: "bosses", label: "Jefes" },
  { key: "area", label: "Área" },
  { key: "stanceBreak", label: "Rompepostura" },
  { key: "bleed", label: "Hemorragia" },
  { key: "magic", label: "Magia" },
  { key: "faith", label: "Fe" },
  { key: "strength", label: "Fuerza" },
  { key: "dex", label: "Destreza" },
  { key: "arcane", label: "Arcano" },
  { key: "infusable", label: "Infusable" },
  { key: "unique", label: "Única" }
];

export const filterLabelMap: Record<FilterKey, string> = filterOptions.reduce((acc, item) => {
  acc[item.key] = item.label;
  return acc;
}, {} as Record<FilterKey, string>);

export const stageLabelMap: Record<StageKey, string> = {
  early: "Early",
  midgame: "Midgame",
  late: "Late",
  endgame: "Endgame",
  todaLaRun: "Toda la run"
};

export const badgeLabelMap: Record<BadgeKey, string> = {
  bossKiller: "Matabosses",
  aoeMonster: "Monstruo de área",
  stanceBreaker: "Rompepostura",
  bleed: "Hemorragia",
  beginnerFriendly: "Fácil de usar",
  hyperCarry: "Muy dominante",
  generalist: "Generalista",
  bestOverall: "Mejor en general",
  bestForBosses: "Mejor para jefes",
  bestForArea: "Mejor para área",
  bestInfusible: "Mejor infusable",
  topAshOfWar: "Mejor ceniza de guerra",
  playerBuild: "Build de jugador"
};

export const excelsAtLabelMap: Record<"bosses" | "area" | "hibrido", string> = {
  bosses: "Jefes",
  area: "Área",
  hibrido: "Híbrido"
};

export const uiText = {
  globalSearchPlaceholder: "Buscar por español, inglés, tags, etapa o tipo de build...",
  globalSearchAria: "Buscar por nombre, tags y etapa",
  clearFilters: "Limpiar filtros",
  results: "Resultados",
  favoritesCounter: "Favoritos",
  addFavorite: "Añadir a favoritos",
  removeFavorite: "Quitar de favoritos",
  openDetail: "Ver ficha detallada",
  compareSelectHint: "Selecciona hasta 4 builds para comparar",
  compareNoItems: "Selecciona al menos una build para abrir el comparador visual",
  compareRemove: "Quitar",
  compareAdd: "Añadir",
  compareMetric: "Métrica",
  backToTop: "Volver arriba",
  skipToContent: "Saltar al contenido",
  stickyBrand: "Guía Meta PvE Elden Ring Base",
  favoritesEmpty:
    "Todavía no tienes favoritos. Marca fichas con la estrella para guardar tu selección en este navegador.",
  goToSection: "Ir a sección",
  playerBuildPlaceholder: "Próximamente: build de jugador destacada",
  playerBuildAuthor: "Comunidad",
  rankingDetail: "Detalle de build",
  closePanel: "Cerrar panel",
  compareTitle: "Comparador",
  filtersTitle: "Filtros",
  searchLabel: "Buscar",
  methodologyTitle: "Metodología",
  notesTitle: "Notas",
  whyBroken: "Por qué está rota",
  bestUseCases: "Cuándo usarla",
  weakMatchups: "Cuándo rinde peor",
  recommendedStats: "Atributos recomendados",
  recommendedTalismans: "Talismanes recomendados",
  recommendedBuffs: "Mejoras recomendadas",
  howToGet: "Cómo conseguirla",
  difficulty: "Dificultad",
  scaling: "Escalado",
  playstyle: "Estilo de juego",
  weaponType: "Tipo de arma",
  affinity: "Afinidad",
  region: "Región",
  build: "Build",
  pros: "Ventajas",
  cons: "Desventajas",
  stage: "Etapa",
  recommendation: "Recomendación",
  bestWeapons: "Mejores armas",
  location: "Localización",
  mainWeapon: "Arma principal",
  secondaryWeapon: "Arma secundaria",
  ashOfWar: "Ceniza de guerra",
  buildType: "Tipo de build",
  recommendedGear: "Equipo recomendado"
};

export const sectionText = {
  home: {
    eyebrow: "Inicio",
    title: "Guía Meta PvE de Elden Ring Base",
    subtitle: "Las builds, armas y cenizas de guerra más rotas del juego base, sin DLC.",
    ctaRanking: "Ir al Ranking",
    ctaWeapons: "Ir a Armas",
    ctaAshes: "Ir a Cenizas de guerra",
    methodology:
      "Ranking basado en consenso de comunidad, utilidad real en PvE, consistencia, daño, facilidad de uso y rendimiento en el juego base sin DLC."
  },
  ranking: {
    eyebrow: "Ranking",
    title: "Ranking general",
    subtitle:
      "Top ampliado con 20 entradas potentes para PvE del juego base. Se ordena por consistencia real en run normal sin DLC."
  },
  weaponsAnchor: {
    eyebrow: "Armas",
    title: "Armas",
    subtitle:
      "Bloque maestro de armas del juego base: separadas en únicas y en infusables para comparar estilos, escalados y obtención.",
    body: "Este bloque separa claramente armas únicas y armas infusables para comparar rutas de obtención, afinidades, cenizas recomendadas y rendimiento real por etapa de partida."
  },
  somber: {
    eyebrow: "Armas",
    title: "Armas únicas",
    subtitle: "Fichas somber con enfoque en daño real, facilidad y rutas de obtención del juego base."
  },
  uniqueHonorable: {
    eyebrow: "Armas",
    title: "Armas únicas muy fuertes",
    subtitle:
      "Honorables y builds potentes fuera del top meta principal: opciones de nicho con mucho daño y personalidad."
  },
  infusables: {
    eyebrow: "Armas",
    title: "Armas infusables",
    subtitle: "Combinaciones con Ashes of War para romper postura, sangrado o consistencia total de run."
  },
  ashes: {
    eyebrow: "Armas",
    title: "Cenizas de guerra",
    subtitle: "Top de cenizas más rotas para PvE base game con ventajas, desventajas y localización."
  },
  comparador: {
    eyebrow: "Comparador",
    title: "Comparador",
    subtitle:
      "Compara varias builds en una vista visual por etapa, bosses, área, postura, hemorragia, facilidad, escalado y recomendación."
  },
  localizaciones: {
    eyebrow: "Ruta",
    title: "Localizaciones",
    subtitle: "Ruta por regiones para conseguir armas, cenizas y piezas clave sin desvíos innecesarios."
  },
  playerBuilds: {
    eyebrow: "Comunidad",
    title: "Builds de jugadores",
    subtitle:
      "Sección separada del ranking meta para compartir builds de comunidad. Lista preparada para crecer con nuevas fichas."
  },
  favoritos: {
    eyebrow: "Local",
    title: "Favoritos",
    subtitle: "Tus elecciones se guardan en localStorage del navegador."
  }
};

export const homeHighlights: HomeSummaryItem[] = [
  {
    id: "best-overall",
    label: "Mejor en general",
    valueEs: "Hoja blasfema",
    valueEn: "Blasphemous Blade",
    reason: "Consistencia altísima en PvE, sustain fuerte y ejecución muy estable en jefes largos."
  },
  {
    id: "best-bosses",
    label: "Mejor para jefes",
    valueEs: "Hoja blasfema",
    valueEn: "Blasphemous Blade",
    reason: "Castiga ventanas seguras sin exigir una ejecución extrema y mantiene daño sostenido."
  },
  {
    id: "best-area",
    label: "Mejor para área",
    valueEs: "Lanza sagrada de Mohgwyn",
    valueEn: "Mohgwyn’s Sacred Spear",
    reason: "Limpia grupos completos en poco tiempo y escala muy bien contra objetivos sangrables."
  },
  {
    id: "best-infusable",
    label: "Mejor infusable",
    valueEs: "Puño estelar + Hoja pétrea",
    valueEn: "Star Fist + Cragblade",
    reason: "Combina daño explosivo y postura brutal, especialmente contra jefes de gran vida."
  },
  {
    id: "best-ash",
    label: "Mejor ceniza de guerra",
    valueEs: "Hoja pétrea",
    valueEn: "Cragblade",
    reason: "Buff directo de daño y postura para un número enorme de armas infusables."
  }
];

export const fieldOrder = {
  summary: "Resumen",
  long: "Notas",
  comparisonBuild: "Build",
  comparisonStage: "Etapa ideal",
  comparisonBosses: "Bosses",
  comparisonArea: "Área",
  comparisonPosture: "Postura",
  comparisonBleed: "Hemorragia",
  comparisonEase: "Facilidad de uso",
  comparisonScaling: "Escalado",
  comparisonRecommendation: "Recomendación"
};

export const footerText = {
  title: "Guía centrada en Elden Ring base game sin DLC.",
  description: "Referencia visual para builds PvE, armas, cenizas de guerra y rutas de obtención.",
  note: "Proyecto frontend-only preparado para despliegue continuo en GitHub Pages."
};
