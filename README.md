# Guía Meta PvE de Elden Ring Base (Frontend Only)

Proyecto en **React + Vite + TypeScript + Tailwind CSS** centrado en **Elden Ring base game sin DLC**.

## Qué incluye

- Portada renovada con metodología y highlights meta.
- Ranking general ampliado a **20 entradas potentes**.
- Sección de **armas únicas** (somber) en español con nombre inglés secundario.
- Sección de **armas infusables + cenizas recomendadas**.
- Sección de **cenizas de guerra top** con ventajas, desventajas y localización.
- **Búsqueda global** por español/inglés/tags/etapa/tipo.
- **Filtros combinables** (early, midgame, late, endgame, toda la run, atributos y roles).
- **Comparador visual multibuild**.
- **Favoritos con localStorage**.
- Sección separada de **Builds de jugadores** con placeholder inicial.
- Guía por regiones: Necrolimbo, Liurnia, Caelid, Meseta Altus, Leyndell, Cimas de los Gigantes, Farum Azula en ruinas, Palacio de Mohgwyn.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Preview local del build

```bash
npm run preview
```

## Estructura principal

```text
src/
  components/
    layout/
    sections/
    ui/
  data/
    ashes.ts
    builds.ts
    locations.ts
    meta.ts
    playerBuilds.ts
    weapons.ts
  hooks/
  types/
  utils/
```

## GitHub Pages

El proyecto mantiene despliegue automático desde `main` con `.github/workflows/deploy.yml`.

- En GitHub: `Settings > Pages > Source: GitHub Actions`.
- La web pública queda en:
  - `https://pablolueme.github.io/paginaelder/`

`vite.config.ts` conserva base dinámica para repositorio de proyecto y genera `/paginaelder/` en GitHub Actions.

## Nota

Proyecto **frontend only**: sin backend, sin auth y sin base de datos.
