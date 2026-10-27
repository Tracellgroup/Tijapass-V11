# V10 October 2026 sample data — setup and removal

This is a **fictional, removable data fixture**, not customer records. It does not represent statutory audits, verified bank transactions, regulator returns, real-money wallets or approved loans.

## What is included
- 10 fictional MSME profiles across 10 activities/sectors and multiple Tanzanian regions.
- Exactly 5 female and 5 male owners.
- Exactly 5 owners aged 35 or younger and 5 older than 35 on 27 October 2026.
- 8 SIMULATED records-quality officer reviews and 2 unreviewed profiles. These are **not audited financial statements**.
- Exactly 10 journal transactions per MSME: 1 receipt + 1 business payment on each of 5 dates, 1–27 October 2026. **100 total transactions**.
- Opening balances, cash/bank/mobile channels, inventory cost allocations for trading businesses and sample daily-close records.
- Five previously unbanked businesses for financial-inclusion demonstration.

## Deploy and load using the app
1. Deploy this **updated full V10 source** to a separate GitHub-connected Netlify project or update your TEST V10 GitHub repo. This demo-loader does **not** run in the previous unmodified V10 build.
2. Sign in as **Super user** with `super@tijapass.demo` and password `123456`.
3. Open **Settings** in the sidebar and scroll to **October 2026 fictional MSME test data**.
4. Click **Load 10 sample MSMEs → Confirm** once. Duplicate loads are blocked.
5. To inspect a sample account, sign out and use the sample phone numbers `0700001001` through `0700001010` and shared test PIN `246810`.
6. Open BOT Reporting (`reports@tijapass.demo / 123456`) to see aggregated sample inclusion statistics.

## How to clean up after testing
1. Sign in as **Super user → Settings → Remove October sample data → Confirm**.
2. This removes the **ten sample businesses and all records associated with those sample businesses**, including any extra tests you manually created under those sample profiles. It preserves businesses not tagged as samples.
3. This is a browser-local demonstration. Data stored on another device/browser must be deleted separately there. For an entirely clean demo, clear this site's browser data; **that also deletes all other locally created records**.
4. The fixture is built into the app package; after testing you can remove `src/v10DemoSeed.js` and the loader controls before preparing a real deployment.

## Important expected outcomes
- Loan qualification **will not pass** using only 10 entries over October, since V10 policy requires at least 30 records spread across 3 months, reliable coverage and lender checks.
- Active MSMEs may be **zero** under the existing official pilot definition (records on at least 10 different days in the past 30), because each example has just **five** activity dates. Do not quietly change the KPI just to inflate activity.
- There are **no real loan approvals or payments** in this fixture; revenue/profit, IDs, opening cash and officer ratings are all synthetic.
- Test telephone numbers are fictional and must not be used for calls, messages, identity checks or live KYC.
- Closing balances and stock-cost allocations are synthetic but internally calculated from the same journal.

## Source files
- `src/v10DemoSeed.js`: app-integrated test data loader and remover.
- `demo_samples/V10_sample_profiles.csv`: reviewable profiles and user test credentials.
- `demo_samples/V10_sample_transactions.csv`: 100 labelled journal events.
- `demo_samples/V10_sample_records_ratings.csv`: eight fictional record-quality scores.
- `demo_samples/V10_sample_data.json`: portable fixture for future backend development.
- `tests/v10-sample-dataset.test.mjs`: repeatable fixture validation.
