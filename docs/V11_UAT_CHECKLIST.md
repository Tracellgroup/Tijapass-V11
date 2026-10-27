# TijaPass V11 — Browser Acceptance Checklist

**Environment:** new test Netlify deployment, isolated from V10 production demonstration. Start with empty demo data and then load the 10 fictional October profiles. Record actual **PASS / FAIL / NOT TESTED**, Chrome version, device width, tester and date.

| ID | View / role | Check | Pass criteria |
|---|---|---|---|
| UI-01 | Sign-in | Logo on dark desktop sign-in | Tija text and TRUST ACCESS GROW are visible, no stretching or overlap |
| UI-02 | Sign-in | Mobile | No horizontal page scrolling at 320, 375 and 390px; inputs usable |
| UI-03 | Sign-in | Test account list | Collapsed by default; expands; correct credentials |
| UI-04 | Shared shell | Desktop | At 1024, 1366, 1440 and 1920px all content stays within the application |
| UI-05 | Shared shell | Sidebar | Compact/expand button works; active page is highlighted |
| UI-06 | Shared shell | Mobile drawer | Opens, navigates and closes; no backdrop persists after switching pages |
| UI-07 | Shared shell | Chrome zoom | At 100%, 125%, 150% and 200%, no clipped buttons or inaccessible controls |
| UI-08 | Shared shell | Accessibility | Focus visible; keyboard can operate menus, tabs and modal; reduced-motion works |
| UI-09 | Business | Home | Clear receipt/payment actions, four responsive KPIs, money/credit descriptions do not mislead |
| UI-10 | Business | Profile | Five-step onboarding form reflows, no overlapping fields |
| UI-11 | Business | Record | Description, amount and confirmation remain usable; posted sale correctly updates statement |
| UI-12 | Business | Daily close | All channels accessible; overdue/catch-up behaviour matches V10 core |
| UI-13 | Business | Statements | Date filters recalculate; tabs switch; print/PDF shows one correctly formatted statement |
| UI-14 | Business | Finance | Score/gates readable; no loan qualification from 10 historical entries |
| UI-15 | FI | Directory | Only consenting business evidence is shown; lender can revoke viewing via customer consent flow |
| UI-16 | FI | Products / loans | Separate screens; quote, offer and disbursement validation continues working |
| UI-17 | Supplier | Dashboard | Request/quote/order/delivery counts match seeded supplier data |
| UI-18 | Supplier | Products / requests | Adding product, quoting and changing order status work independently |
| UI-19 | Supplier | Messages / wallet / profile | Correct user-specific content; simulations labelled |
| UI-20 | Officer | First login | Opens "My businesses" without a page-reset loop |
| UI-21 | Admin | Approvals / ledger / reviews | Each page displays the relevant controls only; no unrelated control clutter |
| UI-22 | Super User | Sample load | Load yields 10 profiles, 100 journal transactions, eight simulated Records Ratings |
| UI-23 | Super User | Sample cleanup | Removes ONLY generated October sample records; reload does not duplicate profiles |
| UI-24 | BOT reports | Aggregates | Five women/five men; five aged ≤35/five aged >35 (as of Oct 2026); eight reviewed/two pending |
| UI-25 | BOT reports | Suppression | Small datasets below configurable minimum do not show individual or breakdown metrics |
| UI-26 | Language | EN/SW | Menu and login switch cleanly; list and record untranslated labels as open defects |
| UI-27 | Browser safety | Storage | No production customer data/identity used; refresh behaviour understood |
| UI-28 | Release | Build | Netlify `npm run build` passes; published site loads without a blank screen or JS console exception |

## Regression suite

Run `npm test`: 28 core tests + seven loan lifecycle tests + October sample dataset checks + 11 V11 UI-source contract checks. These do not replace browser acceptance or a security audit.

## Limitations and sign-off

This is a **demonstration build**. Do not interpret `test` sign-in and in-browser role controls as secure data separation. Do not use real KYC, personal data, lender customer records, payments or regulatory filings until the backend, independent controls and permissions are implemented and assessed. Live Chrome screenshots and Netlify build sign-off are outstanding as of source delivery.
