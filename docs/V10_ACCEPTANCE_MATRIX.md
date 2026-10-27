# V10 user journeys & acceptance matrix

| Scenario | Mandatory acceptance outcome | V10 pilot status |
|---|---|---|
| New business sign-up | Business can start without old seeded records; old role switcher removed | UI implemented, insecure demo-only login |
| Role isolation | FI/supplier never get accounting editor; FI sees consented businesses | UI implemented; backend security pending |
| Five-step onboarding | Essential contact, business details, opening balances, consent | UI implemented; photo/GPS verification pending |
| Opening position | Debit-credit balanced, equity auto-calculated; Admin approval | Core tested; server verification pending |
| Anonymous small sales | Two identical TZS 20,000 legitimate sales not auto-rejected | Automated test passed |
| Duplicate statement reference | One source record should not create second income | Exact-reference test passed; fuzzy matching pending |
| Cash vs sales | Sales in cash increases cash and revenue together | Automated test passed |
| Buy stock | Inventory rises, no immediate expense until COGS | Automated test passed |
| Debtor pays | Cash rises, receivable falls, not a new sale | Automated test passed |
| Capital/group savings | Correct asset/equity/loan allocations | Core rules; extended interpretation pending |
| Posted error correction | Original + offsetting reversal with audit reason | Automated test passed |
| Imported statement | All lines extracted, duplicate matching, issuer verification | CSV staging demo; real verification/PDF/Excel pending |
| Daily reconciliation | Count every channel, record variance, do not fabricate profit | Automated test passed; notifications pending |
| Monthly Records Rating | 25+25+20+15+15, latest band; human evidence | Scoring tested; evidence capture pending |
| Three statements | Balance sheet balances; income and cash flow sync | Core tests passed; independent accounting certification pending |
| External debt | Customer declares; Data Admin amends, records reason | UI and workflow demo; server control pending |
| Qualification score | One 0–100 engine with threshold, history, data, rating and repayments | Core test passed; predictive validation pending |
| Affordability | All instalments counted; product-specific priced offer limit | Automated tests passed |
| Loan lifecycle | Request → review → offer → accept → simulate disburse → repay | Automated test passed |
| Consent revoked | New lender disbursement must stop | Automated test passed |
| Supplier quote | Asset financing requires eligible supplier quotation | Automated test passed |
| Actual money | No real payment can be caused by browser simulation | By design; payment rails not implemented |
| Bot dashboard | Aggregate metrics not identifying single businesses | Small-group gating UI; robust suppression pending |
| Pricing/billing | Basic free; paid plans and FI tariffs; no unintended charges | Price display only; live billing pending |
| Full EN/SW | Every user screen, FAQ, report and error translated | Draft incomplete; language QA pending |
| Support AI | Bilingual questions, phone/WhatsApp human escalation | FAQ/ticket demo; live chat pending |
| Production sign-in | MFA, RLS, encrypted storage, cross-device | Not implemented — BLOCKS live pilot |
| Cross-device sync | Same entries and permissions on separate phones | Not implemented — BLOCKS live pilot |
| Build & mobile | `npm run build` passes; phone sizes 320px+ verified | Static JSX/CSS parsed; Netlify build & device QA pending |
