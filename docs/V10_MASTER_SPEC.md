# V10 Master Functional Specification & Reconciled Decisions

Source basis: the two user-provided V10 plan documents (`Tijapass V10 updates.docx`, `TijaPass V9 to V10 Gaps, Fixes and Upgrades.docx`), plus agreed refinements. This file is the developer's functional baseline; the actual working test build covers the demonstrative subset described in V10_RELEASE_STATUS.

## Product intent

TijaPass helps informal MSMEs turn simple daily activity into explainable business statements and an **indicative** finance-readiness passport. It connects enterprises, participating financial institutions, suppliers, TijaPass operations and aggregated reporting. The core accounting journal must be consistent with loan disbursement, repayment, external debt and FI underwriting.

## Reconciled rules (accepted planning recommendations)

1. **Roles:** Business/Mjasiriamali; FI; Supplier; TijaPass Officer; Data Admin/Accountant; System Admin; Super User; Reporting/BOT. Each signs in separately; server checks every query. UI hiding alone is insufficient.
2. **Onboarding:** owner, ID, phone/second contact, business classification, sector, GPS/location, staff, inclusion baseline, cash/bank/mobile accounts, starting assets and debt, consent and optional officer assignment. Starting equity = starting assets − starting liabilities; Admin approves and locks opening position.
3. **Recording:** a single guided record screen (money in/out/transfer) plus statement import. No accounting codes are required from the enterprise. Payer is optional for anonymous walk-in sales. Purpose is required, and a simple interpretation is shown before posting.
4. **AI and evidence:** AI (once connected securely) interprets Kiswahili/English and suggests clarifications; deterministic rules allocate debit/credit; low-confidence and material inconsistencies are routed to the Data Admin. AI cannot silently modify money amounts or approved entries. Self-declared data is not provider-confirmed.
5. **Duplicates:** identical TZS amounts alone are not duplicates. Exact account/reference/amount/date collisions are blocked or linked as supporting evidence; fuzzy matches prompt investigation rather than automatic deletion.
6. **Daily close:** one channel-by-channel count at the chosen closing time, with guided explanations. An unexplained discrepancy creates a review case, never automatic revenue/profit. Do not block legitimate recording of future entries; withhold assured/verified eligibility until necessary reconciliations are completed.
7. **Personal/group money:** drawings and capital bypass business profit; group savings and group loans require purpose-based classification; group distributions are not automatically sales or retained earnings. Transfers between own accounts never create income/expense.
8. **Financial statements:** single journal feeds income statement, balance sheet and direct cash flow. Customers see only these plus plain-language activity; technical journal and trial balance are restricted to accountant roles. Inventory requires stock-count/COGS evidence for defensible profit.
9. **Records Rating:** five dimensions, 100 points: cash accuracy 25; completeness 25; correctness 20; timeliness 15; stock/assets 15. Minimum normal automated finance gate **70/100** and recent assessment (45 days); score is not an external audit.
10. **Credit:** one indicative qualification score 0–100; KYC >=80%, reliable evidenced coverage >=70%, 30+ unique posted records with 300 earning full volume points, 3+ activity months, rating >=70, no material arrears, score >=70 and positive repayment cash capacity. First-time and repeat borrower weights differ and retain prior-payment performance for repeat borrowers. Score factors are configurable only under policy-approved governance.
11. **Affordability:** conservative monthly distributable profit/cash proxy × 80% buffer × 25% / 30% / 35% maturity cap − existing monthly debt instalments; offer/disbursement checks use actual lender rate, fees and periods. A real pilot must independently verify working-capital and cash-collection quality. Daily <=90 instalments, weekly first <=26 and later <=52, monthly first <=12 and later <=36 subject to product restrictions.
12. **External loans:** customer declares, TijaPass Admin verifies/amends/archives with reason and complete history; outside debts reduce affordability immediately. Borrower cannot directly amend a submitted declaration.
13. **Loan workflow:** request -> FI review/decline -> priced offer -> customer acceptance -> eligibility recheck -> disbursement -> schedule/tracker -> repayment -> closure. Asset finance must have an eligible supplier quotation and direct supplier settlement through authorised rails in production. No simulated funds described as real money.
14. **FI access:** separate FI consent, revocable; FI sees only permissioned evidence and never the internal accounting editor. FI self-registration requires institutional verification.
15. **Supplier workflow:** registration and admin approval -> product list -> requested quotation -> order -> invoice -> delivery -> business receipt; FI finance references supplier and quote IDs.
16. **Monetisation:** MSME Basic free (recording always free), day 500, week 1,500, month 5,000, Premium 10,000. FI Starter 500k/month +3k/assessment, Growth 2m +1.5k, Enterprise 6m +500; annual subscription 10% off. Sponsorship proposed as one VIP 180m, up to two Partners 90m, conditions negotiated. Any FI origination/collection fees require explicit contractual configuration and cannot be duplicated on the same finance event.
17. **BOT reports:** read-only aggregate reporting; inclusion, readiness, requested vs funded finance, lending access, PAR30, transaction adoption, women/youth, productive assets and business growth. Suppress small cohorts; avoid disclosing identities through correlated filters or exports. Pilot data quality must be clear.
18. **Support:** bilingual FAQs, AI when connected, case/ticket escalation, contextual learning. Official WhatsApp/phone contacts configured only after confirmation.
19. **Design:** navy #071B3D / orange #F86C12; proper transparent logo scaling; simple role-specific menus; common Kiswahili and English across all screens; mobile-first; remove technical labels and obsolete version strings from the customer experience.
20. **Security:** server auth, MFA for admins, RLS, separation of duties, immutable financial posting/reversals, encrypted evidence, signed provider messages, data minimisation, privacy compliance, backups, audit logs and regulated payment integration before real-life operations.

## Explicit unresolved production decisions

- Final entitlement matrix for daily/weekly/monthly/premium packages and limits for FI assessments.
- Statistically validated credit weights, Records Rating reliability, arrears thresholds and seasonal repayment patterns after real pilot observation.
- Which licensed payment provider and the exact custodial/legal wallet model.
- Which data ingestion agreements/API/statement templates are authorised for each bank/mobile provider.
- Formal support number/hours, escalation SLAs, approved Kiswahili legal translations and signed-off consent text.
- Applicable BOT pilot/sandbox pathway, data-controller arrangements and audit/control sign-offs.
