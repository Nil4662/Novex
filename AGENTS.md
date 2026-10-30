# ZAGROS — working notes for agents

Non-obvious facts about running and editing this repository. Feature docs live in
`README.md` (Persian) and `IMAGE_GUIDE.md` (Persian).

## Runtime in the Base44 sandbox

- `docker-compose.base44.yml` runs the Vite dev server from the bind-mounted repo
  (`/app`) in `node:22-alpine`; dependencies live in the `node_modules` named volume.
  The container runs `npm install` before `npm run dev` on every start (~10–30s), so a
  cold `up` needs ~a minute before port 3000 answers.
- Healthcheck probes `http://127.0.0.1:3000/src/main.tsx`, i.e. an actual module
  transform — a compile error fails the check, an open port alone does not pass it.
- `vite.config.ts` only widens `server.allowedHosts` (sandbox domain wildcard + the
  `3000-<public suffix>` origin) and enables `watch.usePolling` when
  `BASE44_PREVIEW_MODE === '1'`. Unset → plain local defaults (`localhost:3000`).
- No database, backend, secrets or API keys. Nothing to migrate or seed.
- Local/VSCode flow: `npm install` then `npm run dev` → http://localhost:3000.

## What to run before claiming a change works

```bash
# types
docker compose -f docker-compose.base44.yml exec -T web npx tsc --noEmit
# production build
docker compose -f docker-compose.base44.yml exec -T web npm run build
# routes exist on hard refresh (SPA fallback)
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/menu
curl -s -o /dev/null -w '%{http_code}\n' 'http://localhost:3000/demo-purchase?item=fesenjan'
```

There is no automated test suite.

## Code shape that matters

- Menu data: `src/data/{iranian,fastfood,seafood,drinks}.ts` hold `MenuSeed` objects;
  ingredients are plain strings split on `,` (en) / `،` (fa). `src/data/index.ts`
  normalizes them into `MenuItem[]` (181 items), derives `image` from `id`, and owns
  `filterMenu` (search + filters used by the menu page and the header search).
- Image paths never appear inside components: `src/config/images.ts` owns hero,
  category, section, promotion and gallery paths plus `itemImagePath()`.
- **No image binaries are committed on purpose.** `src/components/FoodImage.tsx`
  renders a designed placeholder showing the expected filename until the file exists.
  Keep that behaviour; do not add random stock photos.
- UI copy lives in `src/i18n/translations.ts` (both dictionaries share one key type, so
  a missing translation fails `tsc`). Brand name, demo contact data and designer credit
  live in `src/config/brand.ts`; the designer is always Latin `Nila`.
- The menu page mirrors its state into the URL (`?q`, `category`, `sub`, `featured`) and
  reads it back on mount, so header links, the browser back button and refresh all agree.
  Category switches must not resurrect an old search term.
- Persian is the default language (`localStorage['zagros-lang']`), and `LanguageProvider`
  sets `<html lang/dir>` plus `document.title`; RTL is layout-driven (logical CSS
  properties), so new components need `inset-inline-*` / `margin-inline-*`, not `left/right`.
