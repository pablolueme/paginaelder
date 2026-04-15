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

1. Ejecuta `npm run build`.
2. Publica el contenido de `dist/` en la rama/pages del sitio.
3. Alternativamente, usa una GitHub Action para desplegar `dist`.

### Cloudflare Pages

1. Conecta el repositorio.
2. Build command: `npm run build`
3. Build output directory: `dist`

## Nota

Proyecto totalmente **frontend only**: no backend, no auth, no base de datos.
