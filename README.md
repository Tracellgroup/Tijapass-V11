# TijaPass V11 — Premium Responsive UI Overhaul (Demonstration)

**Platform operator:** Tracell Finance Limited  
**Version:** 11.0.0 — user-interface redesign built on the V10 accounting, credit and fictional October 2026 test-data modules.

## What this version contains

- Redesigned two-panel sign-in on desktop, clear single-column sign-in on mobile and a discreet expandable demo-credentials section.
- Correct white/orange logo on navy surfaces and navy/orange logo on white surfaces.
- Adaptive desktop navigation, compact-sidebar option, mobile drawer, labelled icons and dedicated navigation headings.
- Responsive typography, forms, statistics, buttons and scroll-contained financial tables.
- New tabbed financial statements with reporting dates and print/save-PDF option.
- Dedicated Supplier dashboard, catalogue, quotation, order/delivery, messaging, wallet-status and profile screens.
- Reduced repeated Admin panels and corrected Officer initial navigation.
- Reworked read-only aggregated BOT dashboard, including gender/age diversity and records-review status.
- Tanzania (EAT)-local business date selection.
- Retained V10 double-entry, credit, loan, daily-close and October fictional test-data modules.

**Not included:** production authentication, real payment processing, live AI, remote data synchronisation, true PDF statement extraction, certified accounting, completed bilingual proofing, verified regulatory reporting or live-user security controls. Data and test credentials are stored in this browser. **Use fabricated data only.**

## Run locally (developer)

Requires Node.js 20 or newer and an internet connection for the first `npm install`.

```sh
npm install
npm run dev
npm test
npm run build
```

For Netlify: **build command** `npm run build`; **publish directory** `dist`. `netlify.toml` contains those values.

## Demo sign-in

| Role | Username | Test password |
| --- | --- | --- |
| Super User | `super@tijapass.demo` | `123456` |
| Data Admin / Accountant | `admin@tijapass.demo` | `123456` |
| Field Officer | `officer@tijapass.demo` | `123456` |
| FI | `fi@tijapass.demo` | `123456` |
| Supplier | `supplier@tijapass.demo` | `123456` |
| Aggregated Reports | `reports@tijapass.demo` | `123456` |

To add sample data: Super User → **Settings** → **October 2026 fictional MSME test data** → **Load**. Sign in as a sample business using its telephone number in `demo_samples/V10_sample_profiles.csv` and PIN `246810`.

The test batch contains 10 fictional MSMEs, 100 recorded transactions and eight **simulated records reviews** (not statutory audits). It includes five women and five men; five age 35 or younger and five older than 35. Only fictional test results appear in reports. Each profile has 10 transactions in October 2026, therefore none should meet the 3-month loan evidence requirement. Super User → Settings also includes a selective **Remove October sample data** operation; verify that the batch is no longer displayed before introducing other records.

**Storage warning:** browser demo data are scoped to the website origin. A fresh V11 Netlify hostname starts with an empty business list; sample records from a V10 hostname do not transfer automatically. Browser storage is not suitable for a real shared pilot.

## Browser-only GitHub deployment

Read `docs/V11_BROWSER_UPDATE_GUIDE.md` for safe branch → browser-editor → pull request steps and for the seven files that changed compared with the October V10 package. No GitHub Desktop installation is required.

## Important verification note

The source passed 28 V10 accounting/control tests, seven loan lifecycle tests, the October sample-dataset checks, and 11 V11 UI-source contract checks. TypeScript parsed all JS/JSX modules and PostCSS parsed the stylesheet. **A full Vite production build and rendered Chrome browser test could not be executed in the authoring environment**, because npm packages were not available locally and browser navigation was restricted. The GitHub/Netlify build and device acceptance tests in `docs/V11_UAT_CHECKLIST.md` are required prior to considering this release visually verified.

## File structure

- `src/App.jsx`: V11 interface and role-specific views
- `src/styles.css`: V11 design system and responsive layouts
- `src/v10Core.js`: retained accounting/credit engine; local-date formatting update
- `src/v10Loan.js`: retained loan lifecycle
- `src/v10DemoSeed.js`: fictional October sample-data loader/remover
- `docs/`: functional specification, V11 changes and acceptance checklist
- `design_previews/`: optional **static HTML layout mock-ups**, not interactive app screenshots
- `tests/`: inherited financial tests and V11 UI-source checks
