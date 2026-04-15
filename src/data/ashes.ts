import type { AshOfWarEntry } from "../types";

export const topAshesOfWar: AshOfWarEntry[] = [
  {
    id: "cragblade",
    nameEs: "Hoja pétrea",
    nameEn: "Cragblade",
    typeEs: "Mejora ofensiva física",
    typeEn: "Physical offensive buff",
    bestWeapons: [
      { nameEs: "Puño estelar", nameEn: "Star Fist" },
      { nameEs: "Aplastagigantes", nameEn: "Giant-Crusher" },
      { nameEs: "Espadón", nameEn: "Greatsword" },
      { nameEs: "Ancla oxidada", nameEn: "Rusted Anchor" }
    ],
    excelsAt: "Jefes",
    advantages: [
      "Aumenta daño físico y daño de postura",
      "Sinergia excelente con builds de Fuerza",
      "Ejecución muy simple"
    ],
    disadvantages: ["No aporta movilidad", "Necesita refrescar el buff con frecuencia"],
    location: "Scarab al oeste de Impassable Greatbridge (Caelid)."
  },
  {
    id: "wild-strikes",
    nameEs: "Golpes salvajes",
    nameEn: "Wild Strikes",
    typeEs: "Presión continua",
    typeEn: "Sustained pressure",
    bestWeapons: [
      { nameEs: "Gran estrella", nameEn: "Great Stars" },
      { nameEs: "Gran maza", nameEn: "Large Club" },
      { nameEs: "Martillo de batalla", nameEn: "Battle Hammer" }
    ],
    excelsAt: "Área",
    advantages: [
      "Mantiene presión constante en grupos",
      "Muy permisiva con el timing",
      "Excelente para jugadores nuevos"
    ],
    disadvantages: ["Te puede exponer si agotas stamina", "Menos burst puntual que Garra de león"],
    location: "Scarab en el camino de Stormhill Shack hacia Castleward Tunnel."
  },
  {
    id: "unsheathe",
    nameEs: "Desenvainar",
    nameEn: "Unsheathe",
    typeEs: "Ráfaga técnica",
    typeEn: "Technical burst",
    bestWeapons: [
      { nameEs: "Nagakiba", nameEn: "Nagakiba" },
      { nameEs: "Uchigatana", nameEn: "Uchigatana" }
    ],
    excelsAt: "Híbrido",
    advantages: [
      "Daño alto en ventana corta",
      "Buena rotura de postura en variante pesada",
      "Escala bien en builds de Destreza"
    ],
    disadvantages: ["Requiere spacing correcto", "Pierde valor si se abusa sin timing"],
    location: "Disponible desde inicio para Samurai y transferible con Whetstone."
  },
  {
    id: "double-slash",
    nameEs: "Doble tajo",
    nameEn: "Double Slash",
    typeEs: "Cadena rápida",
    typeEn: "Fast chain",
    bestWeapons: [
      { nameEs: "Nagakiba", nameEn: "Nagakiba" },
      { nameEs: "Uchigatana", nameEn: "Uchigatana" },
      { nameEs: "Doble hoja", nameEn: "Twinblade" }
    ],
    excelsAt: "Jefes",
    advantages: [
      "Gran aplicación de hemorragia con armas adecuadas",
      "DPS sostenido alto",
      "Muy buena sinergia con talismanes de multi-hit"
    ],
    disadvantages: ["Castiga errores por animación comprometida", "Menor stagger que opciones de Fuerza"],
    location: "Scarab en Sellia, Town of Sorcery."
  },
  {
    id: "lions-claw",
    nameEs: "Garra de león",
    nameEn: "Lion's Claw",
    typeEs: "Golpe pesado con hiperarmadura",
    typeEn: "Heavy hyperarmor slam",
    bestWeapons: [
      { nameEs: "Espadón", nameEn: "Greatsword" },
      { nameEs: "Mandoble", nameEn: "Claymore" },
      { nameEs: "Gran hacha", nameEn: "Great Axe" }
    ],
    excelsAt: "Jefes",
    advantages: ["Daño de postura altísimo", "Hiperarmadura fiable para tradear", "Funciona en muchas armas de Fuerza"],
    disadvantages: ["Animación evidente", "Consume bastante stamina"],
    location: "Drop del león guardián en Fort Gael (Caelid)."
  },
  {
    id: "impaling-thrust",
    nameEs: "Estocada perforante",
    nameEn: "Impaling Thrust",
    typeEs: "Punción perforante",
    typeEn: "Piercing thrust",
    bestWeapons: [
      { nameEs: "Mandoble", nameEn: "Claymore" },
      { nameEs: "Lanza", nameEn: "Lance" },
      { nameEs: "Gran estoque", nameEn: "Great Epee" }
    ],
    excelsAt: "Híbrido",
    advantages: [
      "Excelente para castigar escudos y defensas",
      "Alcance sólido",
      "Muy estable para PvE general"
    ],
    disadvantages: ["Menos explosiva en área", "No aplica estados por sí sola"],
    location: "Vendida por Bernahl en Warmaster's Shack (Limgrave)."
  },
  {
    id: "giant-hunt",
    nameEs: "Caza de gigantes",
    nameEn: "Giant Hunt",
    typeEs: "Impulso vertical",
    typeEn: "Vertical launcher thrust",
    bestWeapons: [
      { nameEs: "Alabarda del Jinete Nocturno", nameEn: "Nightrider Glaive" },
      { nameEs: "Mandoble", nameEn: "Claymore" },
      { nameEs: "Espadón", nameEn: "Greatsword" }
    ],
    excelsAt: "Jefes",
    advantages: ["Gran castigo en vertical", "Muy buena en enemigos humanoides", "Escala bien en Fuerza"],
    disadvantages: ["No limpia área tan rápido", "Necesita buen posicionamiento"],
    location: "Drop de Night's Cavalry en Bellum Highway (Liurnia)."
  },
  {
    id: "sword-dance",
    nameEs: "Danza de espadas",
    nameEn: "Sword Dance",
    typeEs: "Cadena móvil",
    typeEn: "Mobile combo chain",
    bestWeapons: [
      { nameEs: "Alabarda del Jinete Nocturno", nameEn: "Nightrider Glaive" },
      { nameEs: "Nagakiba", nameEn: "Nagakiba" },
      { nameEs: "Mandoble", nameEn: "Claymore" }
    ],
    excelsAt: "Híbrido",
    advantages: ["Buena movilidad ofensiva", "DPS consistente", "Versátil en varias categorías de arma"],
    disadvantages: ["Exige control de spacing", "Menor poise break que Garra de león"],
    location: "Scarab al norte de Caelid Highway South."
  },
  {
    id: "ice-spear",
    nameEs: "Lanza de hielo",
    nameEn: "Ice Spear",
    typeEs: "Proyectil de escarcha",
    typeEn: "Frost projectile",
    bestWeapons: [
      { nameEs: "Nagakiba", nameEn: "Nagakiba" },
      { nameEs: "Lanza de guerra", nameEn: "Partisan" },
      { nameEs: "Lanza", nameEn: "Spear" }
    ],
    excelsAt: "Área",
    advantages: ["Alcance seguro", "Aplica escarcha con fiabilidad", "Buen control de grupos"],
    disadvantages: ["Menos burst en jefes resistentes", "Depende de distancia media"],
    location: "Escarabajo lágrima al sudeste de Caria Manor (Liurnia)."
  }
];
