# Update existing GitHub repository in the browser — V11

Use the **V11 Update Files Only ZIP**. These are paths relative to the repository root, not to another outer directory.

## Recommended safe path

1. Sign in at GitHub and open the existing `Tijapass-V10` repository. Download a `Code → Download ZIP` backup of the current `main` first.
2. From the branch menu, create `v11-ui-overhaul` from `main`.
3. While on the new branch, press `.` to open GitHub's browser editor (`github.dev`).
4. Extract the V11 Update Files ZIP to a folder on your computer. Copy updated files into their matching folder in the browser editor. **Replace matching paths; do not create `src/src` or upload the outer ZIP itself.**
5. On the browser editor Source Control panel, review the changes. Commit with message `Redesign TijaPass V11 responsive UI` and sync/push if prompted.
6. Back on GitHub, create a pull request comparing `v11-ui-overhaul` with `main`. Review the changed files.
7. If your existing Netlify site supports deploy previews, inspect the pull-request preview. Do **not** merge until the preview passes basic login, role navigation and test-data checks. Alternatively connect a fresh Netlify site to this V11 branch for isolated testing.
8. After visual and financial regression tests pass, merge to `main`. The existing GitHub-connected Netlify deployment will pick up that commit if automatic deploys are configured.

**Updated source paths:**

- `src/App.jsx`
- `src/styles.css`
- `src/v10Core.js` (date handling only)
- `package.json`
- `index.html`
- `public/manifest.webmanifest`
- `README.md`

**New paths:** `tests/v11-ui-contract.test.mjs`, `docs/V11_RELEASE_NOTES.md`, `docs/V11_UAT_CHECKLIST.md`, `docs/V11_BROWSER_UPDATE_GUIDE.md`, optional `design_previews` static mock-ups.

The V10 October dataset module (`src/v10DemoSeed.js`) and sample CSV/JSON files have been retained **unchanged**. You need not upload them again if they are already present in the repo. Do not delete `src/v10Loan.js`, other tests, or other project folders.

## First login after update

- Super User: `super@tijapass.demo` / `123456`.
- Go to **Settings** and load fictional October businesses if this is a brand-new website hostname. The browser cannot read data previously saved on a different Netlify hostname.
- To test removal, use the matching **Remove October sample data** action in Settings.

**No GitHub Desktop is needed.** See `V11_UAT_CHECKLIST.md` before merging.
