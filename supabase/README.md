# V10 Backend integration: not deployed

The included V10 application deliberately uses browser-local demo state. A production-grade implementation must use authenticated database tenancy, server-enforced RLS, balanced/idempotent journal RPCs, secure wallet-provider connections, signed import evidence, encrypted ID document storage, role separation and backups. The existing `.env.example` variable names reserve future Supabase integration; setting them in Netlify will **not** connect this version automatically.

Use `docs/DEVELOPER_HANDOFF.md` as the implementation contract. Never run any older V9 demo schema under the assumption it provides V10 production security.
