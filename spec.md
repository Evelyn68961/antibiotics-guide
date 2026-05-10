# Spec — Antibiotics Guide

Technical reference for maintaining the app. The user-facing README is
deliberately brief; this file holds the setup, architecture, and sync
details.

## Tech stack

- React 19 + Vite 7 + plain CSS
- `@notionhq/client` and `notion-to-md` for syncing
- `react-markdown` + `remark-gfm` for rendering monographs (incl. tables)

## Architecture

Notion is the single source of truth. The sync script reads from Notion
and writes a flat JS file (`src/data/antibiotics.js`) that the app imports
at build time. The browser never talks to Notion — the app is a static
build.

```
Notion DB  ──[ npm run sync-notion ]──>  src/data/antibiotics.js  ──>  React app
```

This means: Notion can be down and the app still works; secrets never
ship to the browser; sync diffs are visible in git before deploy.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle
npm run lint
```

The repo ships with placeholder data so the app runs before any sync.

## Notion sync

### One-time setup

1. **Create an internal Notion integration** at
   <https://www.notion.so/my-integrations>. Copy its secret (`ntn_…` or
   `secret_…`).
2. **Connect the integration** to the "🦠 Antimicrobial List" database:
   open the database → "···" menu → Connections → add the integration.
3. **Configure env vars**: copy `.env.example` to `.env` and fill in
   `NOTION_TOKEN`. `NOTION_DATABASE_ID` is already set to the production
   database; change it to point at a different one if needed.

`.env` is gitignored. Never commit it.

### Run a sync

```bash
npm run sync-notion
```

What it does:

1. Loads `NOTION_TOKEN` and `NOTION_DATABASE_ID` from `.env`
2. Pages through the database (`databases.query`, 100 rows per page)
3. For each page: extracts properties, fetches all blocks, converts the
   body to Markdown via `notion-to-md`
4. Sorts records alphabetically by generic name
5. Overwrites `src/data/antibiotics.js` with a banner + JSON-as-JS array

Sync is read-only. It never writes to Notion.

### Day-to-day workflow

```
edit in Notion  →  npm run sync-notion  →  git commit  →  git push
```

Sync is full-replace, not incremental — additions, deletions, and edits
all flow through automatically.

## Data shape

Each record in `src/data/antibiotics.js`:

| field              | type       | source in Notion                  |
|--------------------|------------|-----------------------------------|
| `id`               | string     | Notion page ID                    |
| `name`             | string     | "Abx" title (full text)           |
| `brandName`        | string?    | parsed from "Brand (Generic)"     |
| `genericName`      | string     | parsed; fallback = full name      |
| `category`         | string     | Category                          |
| `coverage`         | string[]   | Coverage multi-select             |
| `indications`      | string[]   | Indications multi-select          |
| `adultDose`        | string     | Adult dose                        |
| `pediatricDose`    | string     | Pediatric dose                    |
| `renalDose`        | string     | Renal dose, HD, CRRT              |
| `hepaticDose`      | string     | Hepatic dose                      |
| `pregnancy`        | string     | Pregnancy                         |
| `breastfeeding`    | string     | Breastfeeding                     |
| `mechanism`        | string     | Mechanism                         |
| `drugInteractions` | string     | Drug Interactions                 |
| `sideEffects`      | string[]   | Side Effects multi-select         |
| `monitor`          | string[]   | Monitor multi-select              |
| `notes`            | string     | Notes                             |
| `renewedDate`      | string?    | Renewed date (ISO date)           |
| `monograph`        | string     | full page body, rendered Markdown |
| `url`              | string     | Notion page URL                   |

## Project structure

```
scripts/
  sync-from-notion.mjs       # Notion → JS sync
src/
  App.jsx                    # search, filters, grid
  components/
    AntibioticCard.jsx       # compact card with expandable details
    MonographModal.jsx       # full monograph viewer
  data/
    antibiotics.js           # auto-generated from Notion
    abbreviations.js         # short-label → English-name map
.env.example                 # template; copy to .env
```

## UI conventions

- **Brand prominent, generic in parens** ("Cubicin (Daptomycin)") when
  Notion title has both. Generic-only entries render bare.
- **Tag pills** show short Notion labels; full terms appear in the
  `title=` tooltip via `expand()` from `abbreviations.js`.
- **Filter dropdowns** are derived from data, so adding a new
  category/indication/coverage value in Notion doesn't require code.

## Adding new translations

When Notion gets new abbreviations, add them to the relevant map in
`src/data/abbreviations.js`. Anything not in the map falls back to the
short label as-is, so new tags don't break — they just show un-expanded
until added.
