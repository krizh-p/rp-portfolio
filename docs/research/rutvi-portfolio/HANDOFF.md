# Rutvi Purohit portfolio handoff

## Routes and commands

| Source page | Wix path | Local route |
| --- | --- | --- |
| Home | `/design` | `/` |
| About | `/design/about` | `/about` |
| Valtech × Kerzner | `/design/currentrole-projects-1` | `/currentrole-projects-1` |
| ChopDawg | `/design/currentrole-projects` | `/currentrole-projects` |
| Big Picture Philadelphia | `/design/edtech-casestudy` | `/edtech-casestudy` |
| Starling Assist | `/design/productstrategy-casestudy` | `/productstrategy-casestudy` |

Use Node.js 24+ and pnpm 12.16.1. Run `pnpm install`, then `pnpm dev`; `pnpm check` runs lint, typecheck, and build. **Current verification:** `pnpm check` passed lint, typecheck, and production build; Next.js statically generated all six portfolio routes.

## Screenshots and reference evidence

- Wix source captures: `docs/research/rutvi-portfolio/source-screenshots/`
- Local captures: `docs/research/rutvi-portfolio/local-screenshots/`
- Useful source captures include `home-desktop.png`, `home-desktop-settled.png`, `home-full.png`, `about-desktop.png`, `about-full.png`, `chopdawg-desktop.png`, `starling-desktop.png`, `big-picture-desktop.png`, `big-picture-full.png`, and `big-picture-final-design.png`.
- Local captures include `home-desktop.png`, `home-mobile.png`, `about-desktop.png`, `about-mobile.png`, `mobile-navigation-open.png`, `chopdawg-desktop.png`, `kerzner-desktop.png`, `starling-desktop.png`, `big-picture-desktop.png`, `big-picture-tablet.png`, `big-picture-mobile.png`, `big-picture-final-design.png`, `big-picture-final-design-mobile.png`, and `big-picture-reflection.png`.

**Supplied viewport evidence:** Wix laptop/source screenshots were captured at 1440×900 CSS pixels. Local responsive checks covered 1440×900, 820×1180, and 390×844; the final BPP mobile capture was 390×844 with reduced motion enabled. Local screenshot filenames indicate the corresponding device/layout; the supplied record does not provide exact per-image viewport dimensions for every capture.

## Behavior and responsive results

**Current browser smoke:** all six routes rendered `<main>` content and a title at 1440×900, 820×1180, and 390×844. Document and body widths equaled the viewport at all 18 route/size combinations; forcing lazy image decoding found no broken or pending images.

**Interactions checked:** homepage project cards reached their intended routes: Valtech → `/currentrole-projects-1`, ChopDawg → `/currentrole-projects`, Starling → `/productstrategy-casestudy`, and BPP → `/edtech-casestudy`. The mobile menu opened, navigated through Work/About, and closed. The resume PDF returned HTTP 200 with `application/pdf`; mailto and LinkedIn targets were verified. The BPP CTA reached `#final-design`; its video played and paused on input. The homepage hero autoplays muted in normal mode, pauses under reduced motion, and remains manually controllable. Normal scrolling hid/revealed the header by direction; reduced motion kept it visible and disabled scroll motion.

## Differences and content limits

The Wix BPP source video player failed to load during inspection (error 4); the downloaded local media is playable. Wix's custom video-player UI differs from the local native controls. The local final-design BPP screenshot was recaptured from the rebuilt production preview; its heading computed as SF Pro Display, weight 700, 45px, rgb(8, 44, 50). The final BPP mobile screenshot had 0px overflow.

The public Fullbowl homepage/card only states that its case study is available upon request/NDA. No public Fullbowl case-study page or supporting case assets were accessible. Preserve that availability message; do not invent case-study details.
