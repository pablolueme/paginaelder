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
  fromRanking("nagakiba-unsheathe-double-slash"),
  fromRanking("claymore-lions-claw-impaling-thrust"),
  fromRanking("greatsword-lions-claw"),
  fromRanking("giant-crusher-cragblade"),
  fromRanking("nightrider-glaive", {
    id: "nightrider-glaive-giant-hunt",
    slug: "alabarda-jinete-nocturno-caza-de-gigantes",
    nameEs: "Alabarda del Jinete Nocturno + Caza de gigantes",
    nameEn: "Nightrider Glaive + Giant Hunt",
    bestAshes: ["Caza de gigantes"],
    shortDescription: "Versión recomendada de Nightrider para bosses humanoides y control vertical.",
    recommendation: "Usa Caza de gigantes como ceniza principal para castigo seguro en PvE."
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
