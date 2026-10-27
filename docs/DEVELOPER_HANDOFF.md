# V10 production implementation plan

**Fastest viable route:** retain React/Vite + Netlify as the PWA; connect a secured PostgreSQL backend (e.g. Supabase) with audited RPC/Edge Functions. A native app is not initially required.

## Delivery gates

1. Identity / user roles: OTP/passkeys, MFA for Admin, sessions, tenant-aware RLS, verified FI/Supplier, officer assignment, FI-consent grants with revocation. All permissions enforced server-side, not only navigation.
2. Database: customers, parties, organisations, balances and opening journal, accounts, immutable journal/lines, statement-import batches/source evidence, daily close/counts/exceptions, stock records, audit trail, review cases, admin approvals, lender products, loan requests, offers, loans, schedules and receipts, FI billable assessments, support conversations.
3. Journal: transactions created atomically; idempotent provider reference; balanced postings; linked reversal entries; double-entry credit and payment posting; separate money movement from noncash purchases; statement/loan/report reconciliation tests.
4. External statements: authorised provider APIs where available; locally supplied CSV/Excel/PDF extraction, issuer/ownership validation, bank balance reconciliation, duplicate-evidence linking and error queues; never mark a PDF independently verified on appearance alone.
5. AI: consented server-side LLM inference using a strict schema (`direction, amount, counterparty, purpose, proposed accounts, questions, confidence`). Fallback deterministic classification. Only user-approved, deterministic balanced accounting can be posted. Admin escalation for material exceptions.
6. Cash close/stock: support offline drafts and eventual sync, original count evidence, explained and unresolved differences, accountant adjustments; no auto profit-changing suspense postings.
7. Credit: configure approved policy version and store full feature snapshots; one response for every user view; lender-specific price/tenor cap; actual borrower cashflow calculation; external debt and collections reconciliation. Verify on request, offer and disbursement.
8. Payment: segregated regulated provider settlement, signed callbacks, reconciled custodial accounts, wallet limits, refund and reversal policies, customer protection and license review. Browser changes must never constitute money movement.
9. Commercial: fee contracts, sponsorship discount/usage caps, invoicing, payment idempotency, complaint escalation, messages and notifications with explicit privacy rights.
10. Release: testing against attached acceptance matrix; unit, E2E, property tests, load and security; supervised field QA; fallback/manual operations; regulator-approved scope.

### Key requirement: secure posting

No browser may directly insert a completed accounting journal, modify balances, verify KYC or approve a loan. Implement server-validated transactions and journal entries with actor ID, policy version, source evidence hash, idempotency key, timestamp, and reversal linkage. Data should be encrypted at rest and in transit, backed up, retention-controlled and protected by row-level policies.

### Suggested pilot

First validate workflow using fictional test data; then scoped 10–30 MSMEs (no customer-held money), expanding only after controls pass. Validate score/limit, monthly close, staff review, data quality and support burden before 100-MSME controlled pilot.
