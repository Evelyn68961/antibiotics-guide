# Spec — The Antimicrobial Apothecary

Technical reference for maintaining the app. The user-facing README is
deliberately brief; this file holds the setup, architecture, sync
details, theming, and i18n notes.

## Tech stack

- React 19 + Vite 7 + plain CSS
- `@notionhq/client` and `notion-to-md` for syncing
- `react-markdown` + `remark-gfm` for rendering monographs (incl. tables)
- No state-management library — `useState` + a small React context for
  language

## Architecture

Notion is the single source of truth. The sync script reads from Notion
and writes a flat JS file (`src/data/antibiotics.js`) that the app
imports at build time. The browser never talks to Notion — the app is a
static build.

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
  App.jsx                    # search, filters, shelves layout
  App.css                    # all styles, including witchy atmosphere
  main.jsx                   # entry; wraps App in <LanguageProvider>
  components/
    AntibioticBottle.jsx     # the powder-jar SVG (per-category color)
    AntibioticDetail.jsx     # parchment monograph + tag rows
    CupboardDecor.jsx        # candles, skulls, crystal balls, cobwebs,
                             #   hanging garlic/herbs/bat, fireflies
    LanguageToggle.jsx       # EN / 中 button in the header
    PracticeQuestions.jsx    # MCQ self-quiz UI
  data/
    antibiotics.js           # auto-generated from Notion
    abbreviations.js         # short-label → English-name map
  i18n/
    strings.js               # EN/ZH UI dictionary + format() helper
    LanguageContext.jsx      # provider, useLanguage() hook, persistence
  utils/
    generateQuestions.js     # builds MCQs from a drug record
.env.example                 # template; copy to .env
```

`AntibioticCard.jsx` and `MonographModal.jsx` under `components/` are
legacy from the pre-cupboard layout. They are no longer imported and
can be removed in a future cleanup.

## Visual theme — "the witch's cupboard"

The app intentionally leans into the witch-apothecary metaphor. Swap
the theme by editing `App.css` and `CupboardDecor.jsx`; the data layer
is theme-agnostic.

- **Background** — dusky plum → mauve → rusty rose twilight gradient
  with a soft moon (`body::after`) and twinkling stars (`body::before`)
- **Cupboard frame** — gnarled-wood gradients with knot pseudo-elements
  (`.cupboard-frame::before`)
- **Bottles** — each drug renders as an `<svg>` powder jar in
  `AntibioticBottle.jsx`. Color is keyed to the drug's `category`
  (Carbapenem → purple, Cephalosporin → green, etc.). The grain pattern
  inside is seeded from the drug's id so it's stable but unique.
- **Curios** — `CupboardDecor.jsx` exports a small set of SVG props
  (Candle, Skull, CrystalBall, Mushroom, EyeJar, Mortar, Spider, Vial)
  plus `Cobwebs`, `HangingClutter`, and `Atmosphere` (firefly motes).
  `CurioFor({ shelf, slot })` picks one deterministically by `(shelf, slot)`
  so the layout is stable across renders.
- **Animations** — flickering candle flame, pulsing crystal ball, slow
  bobbing eye-jar, swaying hanging clutter, drifting fireflies. All CSS
  keyframes; no JS animation loop.

## Internationalization

The app supports English and 繁體中文 via a small custom i18n layer —
no library.

- `src/i18n/strings.js` — flat dictionary keyed by language. Most
  entries are template strings with `{name}`, `{list}`, `{value}`,
  `{category}` placeholders; a few are functions for cases where an
  inline `<strong>` needs to split the sentence.
- `src/i18n/LanguageContext.jsx` — `LanguageProvider` reads
  `localStorage['apothecary.lang']`, falls back to
  `navigator.language`. Exposes `{ lang, setLang, t, tf }` via
  `useLanguage()`. `t(key)` looks up a string; `tf(key, vars)`
  substitutes placeholders or calls the function entry.
- `LanguageToggle.jsx` — single button in `App.jsx` top-row; flips
  between EN and ZH. Persisted across reloads and reflected on
  `<html lang>` so the Chinese serif (Noto Serif TC) takes effect.
- Practice question stems are translated; `generateQuestions.js`
  accepts an `i18n` parameter and uses it for prompts and explanations.

### What is intentionally **not** translated

These stay in their international forms in both languages so filters,
quiz answers, and Notion data remain consistent:

- Drug generic and brand names (Vancomycin, Cubicin, …)
- Drug class / category labels (Carbapenem, Cephalosporin, …)
- Organism names and acronyms (MRSA, MSSA, VRE, ESBL, *Pseudomonas*, …)
- Indication acronyms (UTI, CAP, HAP, VAP, IAI, SSTI, CDI, FN, …)
- Side-effect labels (AKI, LFT↑, QTc prolong, …)
- Full monograph body rendered from Notion

Translating these inline would either duplicate well-known terms or
produce non-standard renderings that diverge from the filter dropdowns
and quiz answer keys. The Chinese view reads as Chinese narrative
shell + English clinical terms — matching how this content is
typically written in practice.

### Adding a new translation key

1. Add the key to **both** `en` and `zh` blocks of
   `src/i18n/strings.js`.
2. Use `{name}`-style placeholders for variables, or a function entry
   if you need inline JSX in the consumer.
3. Call `t('myKey')` or `tf('myKey', { name })` in the component.

### Adding a new abbreviation

When Notion gets new abbreviations, add them to the relevant map in
`src/data/abbreviations.js`. Anything not in the map falls back to the
short label as-is, so new tags don't break — they just show un-expanded
until added.

## UI conventions

- **Brand prominent, generic in parens** ("Cubicin (Daptomycin)") when
  Notion title has both. Generic-only entries render bare.
- **Tag pills** show short Notion labels; full terms appear in the
  `title=` tooltip via `expand()` from `abbreviations.js`.
- **Filter dropdowns** are derived from data, so adding a new
  category/indication/coverage value in Notion doesn't require code.
- **Shelf grouping** — bottles are sorted by category then generic
  name, then chunked 5 per shelf. Each shelf gets two curios (one on
  each end) chosen deterministically from `CupboardDecor.CURIOS`.
