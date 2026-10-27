# V11 — UI / UX Overhaul Release Notes

## Confirmed source-level fixes

1. **Logo:** Dark-side UI now uses `tijapass-logo-dark-transparent.png` with white-and-orange text. Light-side UI uses `tijapass-logo-light-transparent.png` with navy-and-orange text. Logo width no longer relies on stretched fixed dimensions.
2. **Sign-in:** Desktop split layout, mobile single-column layout, language selector, hidden-by-default credentials and clearly identified fictional demo data.
3. **Navigation:** Adaptive 272px sidebar, 84px compact option, drawer below 960px, icons, active-state marker, accessible close/open controls, corrected Officer default route.
4. **Responsive financial interface:** Consistent spacing and typography, 16px foundation, better table overflow, reflowing statistic cards and narrow-screen form controls.
5. **Enterprise:** Retained the V10 recording, daily count, finance and onboarding functions; improved home presentation and financial statements (one statement at a time).
6. **Financial institution:** Dashboard metrics are scoped to dashboard, loan requests/products/directory each retain their dedicated functions, simulated FI-funding edit appears in Wallet only.
7. **Supplier:** Individual menu views for dashboard, products, quotations, orders/deliveries, messages, payment status and profile. Existing quote/order state transitions retained; money settlement remains simulated.
8. **TijaPass Admin:** Business workspace, records rating, transaction exceptions, ledger and external-loan controls no longer all appear on the same menu page. Super User October batch loader/remover retained in Settings.
9. **BOT reporting:** Grouped priority KPIs, recorded-account inclusion, rating status, age and gender distribution; removed repeated female-count row. Minimum group-size suppression continues to apply to the whole dashboard.
10. **Date:** Corrected the default business-day date from UTC to the Tanzania local calendar date.
11. **Accessibility:** Visible keyboard focus, labelled tabs and control buttons, text-plus-colour statuses, reduced-motion rules and minimum 320px layout target.

## Technical boundaries — NOT production ready

The role sign-in and permissions remain browser-demo controls, not server-side authorization. The app retains local storage and fictional credentials. Wallets, disbursements and FI funding are simulated. A connected AI backend, bank/statement integrations, real message delivery, final Kiswahili content review, user-data protection controls and legal/regulatory approvals are outside this UI revision.

## Evidence recorded at packaging

- 28 inherited accounting/control tests passed.
- Seven inherited loan lifecycle tests passed.
- October data validation passed (10 MSMEs, 100 entries, eight sample quality reviews, demographic splits, selective deletion).
- 11 UI-source contract checks passed.
- All six JS/JSX source modules parsed with TypeScript.
- CSS parsed using PostCSS.
- **Not executed:** full Vite build (`vite: not found`, npm registry not available) and live Chrome screenshots (local browser navigation restricted). The static HTML mock-ups are illustrative only and do not substantiate end-to-end visual QA.

## Required remaining work

Complete all live-browser acceptance checks in `V11_UAT_CHECKLIST.md`, especially login, every role menu, 320–1920px responsive layouts, 125–200% zoom, print/PDF output, keyboard navigation and the October sample-data lifecycle. Treat any defect found as a release blocker before pushing V11 onto an existing V10 site.
