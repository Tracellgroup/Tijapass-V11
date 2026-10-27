# V11 responsive design system

This is the visual guideline for **all** customer, FI, supplier, administrator and reporting views.

| Token | Value | Usage |
|---|---|---|
| Navy | `#071B3D` | Sidebar, hero and premium login visual |
| Orange | `#F86C12` | Primary actions, accents, focus cues |
| Page background | `#F5F7FB` | Workspace background |
| Text | `#14283E` | Main page text |
| Surface | `#FFFFFF` | Forms, report panels and KPI cards |
| Border | `#E2E8EF` | Panels and table boundaries |
| Font stack | Inter/system UI/Segoe UI | Use local fonts; no external CDN |
| Main body | 16px base | Scales down only where needed on compact controls |
| Minimum interactive height | ~44px | Forms and key actions |
| Navigation | 272px expanded, 84px compact | Drawer below 960px |

**Responsive reference widths:** 320, 375, 390, 680, 960, 1024, 1366, 1440, 1920px. Dashboard KPI cards 4-up on wide monitors, 2-up on smaller screens. A content-width container query prevents narrow two-column forms inside half-width cards. Data tables scroll *inside their cards*, not across the page. Reports show a single financial statement at a time.

**Logos:** `tijapass-logo-dark-transparent.png` is the **white-and-orange version on navy**. `tijapass-logo-light-transparent.png` is the **navy-and-orange version on white**. The asset filenames are historically misleading: choose them by visible lettering/background, not by name.

**Status visibility:** Never convey status by colour alone; display the text as well. Keep the demo/test-data marker visible on all real views. Use a visible keyboard focus ring, button labelling and reduced-motion support.

**Outstanding:** Complete human bilingual translation review, production UX/device user testing, detailed mobile table/card audit, a tested print/PDF style for all three reports, screen-reader audit and responsive screenshots of actual React application (not only static HTML mock-ups).
