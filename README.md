# TijaPass V10 — Integrated MSME Financial Management & Credit Ecosystem

A **browser-based, non-production demonstration** of a simplified Kiswahili/English business-recording experience, a deterministic double-entry ledger, daily reconciliation, records assessment, financial statements, multi-role workflows, FI loan products, customer consent, supplier quotations, loan offers and repayments.

**Never use this build to store real NIDA/ID details, personal documents, bank credentials, sensitive financial records or move real money.** Demo PINs, browser-held data, role-based navigation and simulated financing are not security controls.

## Quick demo deployment

1. Create a NEW GitHub repository `Tijapass-V10` so your V9 site remains untouched.
2. Extract the ZIP; upload the **contents of this folder** to the root of the repository. Commit.
3. Netlify → Add new project → Import from GitHub → select the new repository.
4. Build command: `npm run build`; publish: `dist` (also set in netlify.toml).
5. Open the new Netlify URL; confirm the build says Published.
6. On the login screen, select English or Kiswahili. Use the documented demo accounts or register a fictional enterprise. Never use real personal data in this browser demo.
7. To demonstrate eligibility: register a fictional enterprise → sign out → sign in as Data Admin → approve its profile and opening balances → generate **synthetic** activity for 95 days and submit a Records Rating → sign back in as enterprise → grant FI consent in Profile → request eligible finance → sign in as FI → assess and offer → enterprise accepts → FI simulates disbursement → enterprise simulates repayment. Source and FI actions read from the same test data in that browser.

### Demo sign-ins

- Super user: `super@tijapass.demo` / `123456`
- Data Admin / Accountant: `admin@tijapass.demo` / `123456`
- Officer: `officer@tijapass.demo` / `123456`
- FI: `fi@tijapass.demo` / `123456`
- Supplier: `supplier@tijapass.demo` / `123456`
- Reports: `reports@tijapass.demo` / `123456`

Business signs up with a fictional phone and a 6-character test PIN. FI and Supplier self-registration creates pending test organisations that must be approved by TijaPass Admin. These test logins **are not production authentication**.

## V10 design principles

- One posting engine and one trial balance; income statements, business positions and the cash flow are derived from the same double-entry journal.
- Daily closing never silently changes profit. Differences remain follow-up items; do not auto-create sales or expenses.
- Reversals preserve original entries plus balancing reversal entries; no deletion of posted financial evidence.
- Description-first transaction entry with simple English/Kiswahili phrase recognition. Unknown purposes require clarification. **No real large-language-model integration is active.**
- Self-declared, externally supported and TijaPass-reviewed records have distinct labels. A statement upload is not bank authentication.
- Unified scoring weights and fixed policy gates. Credit qualification is indicative, lender approval is separate, and existing instalments reduce available repayment capacity.
- Data starts with **zero businesses, zero transactions and zero loans**. Only explicit synthetic test generation can populate a scenario.
- Role-specific sign-in and menus are **demonstration UI**. Role access, FI consent, approvals and money movements must be enforced in the server/database before a real pilot.

## Files

- `src/App.jsx`: business, admin, FI, supplier and reports interfaces.
- `src/v10Core.js`: accounting, reconciliation, Records Rating, loan scoring/affordability, statement generation.
- `src/v10Loan.js`: shared request, appraisal, FI offer, acceptance, disbursement and repayment lifecycle.
- `src/v10Locale.js`: customer-facing Kiswahili/English vocabulary.
- `tests/v10-core.test.mjs`, `tests/v10-lifecycle.test.mjs`: automated reference-domain test scenarios.
- `docs/V10_MASTER_SPEC.md`: requirements, decisions and remaining work.
- `docs/V10_RELEASE_STATUS.md`: detailed implementation status and important limitations.
- `docs/DEVELOPER_HANDOFF.md`: production implementation sequence.

### Local developer checks

`npm install && npm test && npm run build`

Local npm package fetching was unavailable in the authoring environment. The source parser, core/lifecycle automated tests and ZIP were checked, **but the complete Vite production build and device-browser workflows still require validation on Netlify**.

### Payment architecture

The current wallet and loan funds are **simulations only**. For real-money operations: use regulated financial/payment partners for deposits, settlement and withdrawal. Keep provider keys in protected server functions, not Vite client variables.
