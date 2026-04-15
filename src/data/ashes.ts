import type { AshOfWarEntry } from "../types";

export const topAshesOfWar: AshOfWarEntry[] = [
  {
    id: "cragblade",
    name: "Cragblade",
    type: "Buff ofensivo físico",
    bestWeapons: ["Star Fist", "Giant-Crusher", "Greatsword", "Rusted Anchor"],
    excelsAt: "Bosses",
    advantages: [
      "Aumenta daño físico y daño de postura",
      "Sinergia excelente con builds STR",
      "Muy simple de ejecutar"
    ],
    disadvantages: ["No aporta movilidad", "Necesita renovar buff de forma activa"],
    location: "Scarab al oeste de Impassable Greatbridge (Caelid)."
  },
  {
    id: "wild-strikes",
    name: "Wild Strikes",
    type: "Presión continua",
    bestWeapons: ["Great Stars", "Large Club", "Battle Hammer"],
    excelsAt: "Área",
    advantages: [
      "Mantiene presión constante en packs",
      "Muy permisiva con timing",
      "Excelente para jugadores nuevos"
    ],
    disadvantages: ["Puede exponerte si te quedas sin stamina", "Menos burst puntual que Lion's Claw"],
    location: "Scarab en el camino de Stormhill Shack hacia Castleward Tunnel."
  },
  {
    id: "unsheathe",
    name: "Unsheathe",
    type: "Burst técnico",
    bestWeapons: ["Nagakiba", "Uchigatana"],
    excelsAt: "Híbrido",
    advantages: [
      "Gran daño en ventana corta",
      "Muy buen castigo de postura con la versión heavy",
      "Escala bien con builds DEX"
    ],
    disadvantages: ["Requiere spacing correcto", "Pierde valor si se abusa sin timing"],
    location: "Disponible desde inicio para clase Samurai y transferable con Whetstone."
  },
  {
    id: "double-slash",
    name: "Double Slash",
    type: "Cadena rápida",
    bestWeapons: ["Nagakiba", "Uchigatana", "Twinblade bleed setups"],
    excelsAt: "Bosses",
    advantages: [
      "Gran aplicación de bleed con armas adecuadas",
      "DPS sostenido alto",
      "Muy buena sinergia con talismanes de multi-hit"
    ],
    disadvantages: ["Castiga errores por animación comprometida", "Menor stagger que opciones de STR"],
    location: "Scarab en Sellia, Town of Sorcery."
  },
  {
    id: "lions-claw",
    name: "Lion's Claw",
    type: "Golpe pesado de hiperarmadura",
    bestWeapons: ["Greatsword", "Claymore", "Great Axe"],
    excelsAt: "Bosses",
    advantages: [
      "Altísimo daño de postura",
      "Hiperarmadura fiable para trades",
      "Funciona con muchas armas STR"
    ],
    disadvantages: ["Animación evidente", "Consume bastante stamina"],
    location: "Drop del león guardián en Fort Gael (Caelid)."
  },
  {
    id: "impaling-thrust",
    name: "Impaling Thrust",
    type: "Punción perforante",
    bestWeapons: ["Claymore", "Lance", "Great Epee"],
    excelsAt: "Híbrido",
    advantages: [
      "Excelente para castigar escudos y defensas",
      "Alcance sólido",
      "Skill muy estable para PvE general"
    ],
    disadvantages: ["Menos explosiva en AoE", "No aplica estados como bleed por sí sola"],
    location: "Vendido por Bernahl en Warmaster's Shack (Limgrave)."
  }
];
