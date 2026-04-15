# Elden Ring Base Game Meta PvE Guide (Frontend Only)

Guía visual premium en **React + Vite + TypeScript + Tailwind CSS** centrada en **Elden Ring base game (sin DLC)**:

- Ranking general top 12
- Armas únicas/somber
- Armas infusables + Ashes of War
- Ashes of War top PvE
- Comparador ordenable de builds
- Guía de obtención por regiones
- Favoritas en estado local (sin backend)

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+

## Arranque local

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```

Preview local del build:

```bash
npm run preview
```

## Estructura

```text
src/
  components/
    layout/
    sections/
    ui/
  data/
    builds.ts
    weapons.ts
    ashes.ts
    locations.ts
  hooks/
  types/
  utils/
```

## Despliegue gratis

### Netlify

1. Conecta el repositorio.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Importa el proyecto.
2. Framework: `Vite` (auto-detect).
3. Build command: `npm run build`
4. Output directory: `dist`

### GitHub Pages

1. Ya incluye workflow automatico en `.github/workflows/deploy.yml`.
2. Sube el repo a GitHub y haz push a `main`.
3. En GitHub: `Settings > Pages > Build and deployment > Source: GitHub Actions`.
4. Cada push a `main` construye y publica `dist` automaticamente.

### Cloudflare Pages

1. Conecta el repositorio.
2. Build command: `npm run build`
3. Build output directory: `dist`

## Nota

Proyecto totalmente **frontend only**: no backend, no auth, no base de datos.
