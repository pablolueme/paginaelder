import type { PlayerBuildEntry } from "../types";

export const playerBuilds: PlayerBuildEntry[] = [
  {
    id: "player-build-placeholder-1",
    author: "Comunidad",
    buildName: "Próximamente: build de jugador destacada",
    focus: "Build de jugador",
    stage: ["todaLaRun"],
    weaponMain: { nameEs: "Por anunciar", nameEn: "Coming Soon" },
    weaponSecondary: { nameEs: "Por anunciar", nameEn: "Coming Soon" },
    ashOfWar: { nameEs: "Por anunciar", nameEn: "Coming Soon" },
    stats: ["Vigor —", "Mente —", "Resistencia —", "Fuerza —", "Destreza —", "Inteligencia —", "Fe —", "Arcano —"],
    talismans: ["Pendiente de publicación"],
    buffs: ["Pendiente de publicación"],
    description:
      "Esta tarjeta está preparada para añadir builds manuales de jugadores de la comunidad sin mezclarse con el ranking meta principal.",
    pros: ["Espacio reservado para contenido real", "Diseño listo para crecer"],
    cons: ["Sin datos de combate todavía"],
    recommendedFor: ["Jugadores que quieran compartir su setup cuando se habilite"],
    isPlaceholder: true
  }
];
