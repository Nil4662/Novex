# Fire & Saffron — Restaurant Website

## Stack
- React 18 + TypeScript + Vite 5
- React Router (routes: `/`, `/demo-purchase`)
- No backend, no database, no external API keys needed
- Bilingual (Persian RTL default / English LTR) via LanguageContext + localStorage

## Setup (sandbox / local)
- Dev server: `docker compose -f docker-compose.base44.yml up -d` (Vite on host port 3000, container 5173)
- Local without Docker: `npm install && npm run dev` → http://localhost:5173

## Key architecture
- `src/config.ts` — brand name, color palette, image base path, designer name (single source of truth)
- `src/data/foods.ts` — all 132 food items with bilingual names/descriptions/ingredients, prices (Toman + USD)
- `src/data/categories.ts` — 3 categories + subcategories
- `src/i18n/translations.ts` — all UI strings (fa/en). Default language is Persian.
- `src/context/LanguageContext.tsx` — sets `html` lang/dir, persists to localStorage key `fs-lang`
- `src/components/SmartImage.tsx` — image with graceful SVG fallback (no infinite error loop)

## Images
- All images live under `public/images/<category>/<slug>.jpg`. The `image` field in foods.ts holds the relative path.
- Missing images show `public/images/icons/placeholder.svg` automatically.
- See IMAGE_GUIDE.md (Persian) for the beginner image-replacement workflow.

## Notes
- No external secrets required. `.base44/environment.json` has an empty secrets list.
- Vite host allowlist handled via `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` env var in compose.
- Designer credit "Nila" must always stay in Latin characters.
