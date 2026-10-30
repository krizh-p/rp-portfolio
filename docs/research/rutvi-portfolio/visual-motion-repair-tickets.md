# Portfolio clone: visual and motion repair tickets

## Goal and evidence

Bring the local portfolio closer to the live [Wix source](https://rnpurohit121.wixstudio.com/design), particularly its scroll-driven storytelling, without losing existing content, working links, accessibility, or basic responsive behavior. Follow the clone-website skill and inspect the live source before implementing; the prior comparison sampled the desktop heroes of all six pages, the Valtech scroll scene, and the home and Valtech mobile heroes, not every page state.

Reference: [existing handoff](HANDOFF.md), `source-screenshots/`, `local-screenshots/`, and the source-to-local route map in the handoff. **Capture caveat:** the archived source `chopdawg-desktop.png` shows Valtech and `kerzner-desktop.png` shows ChopDawg; do not use those files as their labeled references. Capture fresh, settled source and local views at matching sizes and states. Do not infer visible content from hidden Wix DOM alone.

## Parallel work and ownership

Tickets 1–5 are independent page-owned slices and can run concurrently. Each owner should inspect, implement and document their own page; avoid edits to shared components and global styles. If a shared change is needed, record the requirement for Ticket 6 rather than making conflicting edits. Ticket 6 integrates the slices, owns shared files, and runs final cross-site verification after the page work. Ticket 7 is an additional comparison pass; its page-specific fixes can be split among the same owners, but integration and final verification follow all fixes.

### Ticket 1 — Valtech: scroll-driven discovery and pacing

**Source:** `/design/currentrole-projects-1` → **local:** `/currentrole-projects-1`  
**Owned files:** `src/components/sites/rutvi-portfolio/kerzner/kerzner-page.tsx`, `src/components/sites/rutvi-portfolio/kerzner/kerzner-page.module.css`; add a page-scoped component only if needed.

- [ ] Inspect the discovery sequence with wheel/touch input, including entry, active, exit, and reverse scroll; measure card positions, rotation, layering, timing, media playback and section dimensions at desktop and mobile. At 1440×900 the first source card was observed over the media moving from approximately x=857 at scrollY 4950 to x=579 at scrollY 5300, returning on reverse; treat this as a reference sample, not the entire motion specification.
- [ ] Recreate the source's overlapping, tilted discovery cards and continuous reversible scroll movement rather than static cards below separate media. Match the centered sans-serif discovery heading, surrounding whitespace, media sizing and story pacing to observed source states.
- [ ] Determine whether the source media actually autoplays or pauses when in view and whether controls are exposed. Match the observed behavior and presentation; do not assume autoplay from a still image. Preserve an accessible reduced-motion experience and usable media controls where needed.
- [ ] Compare the rest of the page section-by-section, including captions, image placement and vertical rhythm; correct confirmed mismatches without deleting real content.
- [ ] Verify source and local at matching desktop positions through the full scene in both scroll directions, plus a mobile view and reduced-motion mode. Save labeled comparisons and record any source behavior that could not be established.

### Ticket 2 — ChopDawg: hero and page rhythm

**Source:** `/design/currentrole-projects` → **local:** `/currentrole-projects`  
**Owned files:** `src/components/sites/rutvi-portfolio/chopdawg/chopdawg-page.tsx`, `src/components/sites/rutvi-portfolio/chopdawg/chopdawg-page.module.css`.

- [ ] Restore the observed desktop hero hierarchy: source project name above the upright headline, with facts and overview in the corresponding first-screen composition. Match source typography, wrapping, spacing and card treatment rather than the local italic headline and reversed order.
- [ ] Compare the full page's project sections, media, spacing and scroll-triggered behavior against the live source; fix confirmed differences while preserving content and destinations.
- [ ] Check desktop and mobile, including media playback and reduced motion; save labeled source/local comparisons.

### Ticket 3 — Starling: hero and page rhythm

**Source:** `/design/productstrategy-casestudy` → **local:** `/productstrategy-casestudy`  
**Owned files:** `src/components/sites/rutvi-portfolio/starling/starling-page.tsx`, `src/components/sites/rutvi-portfolio/starling/starling-page.module.css`.

- [ ] Match the observed desktop hero: upright source headline and wrapping, project-name placement, metadata cards and compact overview composition, rather than the local italic three-line headline and different overview layout.
- [ ] Compare the entire case study's section order, typography, media, scroll behavior and pacing to the live source; correct confirmed differences. Exercise the final-design CTA and process links on both sites before deciding whether their destinations or behavior need changes; archived `href` values alone do not establish click behavior.
- [ ] Check desktop and mobile, media and reduced motion; save labeled source/local comparisons.

### Ticket 4 — About: hero portrait and layout

**Source:** `/design/about` → **local:** `/about`  
**Owned files:** `src/components/sites/rutvi-portfolio/about/about-page.tsx`, `src/components/sites/rutvi-portfolio/about/about-page.module.css`.

- [ ] Match the desktop source portrait's lower placement, rounded corners, visibility and crop, and the source name size and hero spacing. The local portrait currently starts higher and is heavily faded into the background.
- [ ] Compare the remaining visible sections, image arrangements, typography, scroll effects and mobile layout against settled source states; fix confirmed differences while preserving visible experience content.
- [ ] Do not add roles merely because they occur in hidden source DOM. Check actual visibility and interaction states first. Save desktop/mobile comparisons and verify reduced motion.

### Ticket 5 — Home and BPP: verify and repair confirmed differences

**Source:** `/design` and `/design/edtech-casestudy` → **local:** `/` and `/edtech-casestudy`  
**Owned files:** `src/components/sites/rutvi-portfolio/home-page.tsx`, `src/components/sites/rutvi-portfolio/big-picture/big-picture-page.tsx`, `src/components/sites/rutvi-portfolio/big-picture/big-picture-page.module.css`. Record any home global-style needs for Ticket 6.

- [ ] Preserve the relatively close desktop home and BPP heroes while checking BPP metadata-card styling against the source. Inspect both pages beyond the hero for layout, assets, motion, content and interactions; repair confirmed discrepancies.
- [ ] Compare settled mobile behavior, but do not reproduce source clipping or inaccessible content merely for visual parity. Preserve readable content and a working mobile menu.
- [ ] Exercise BPP's final-design CTA and video on both sites; the prior handoff recorded source video error 4, so distinguish an unavailable source player from a local defect. Preserve playable local media and document any unobservable source behavior.
- [ ] Save representative source/local desktop and mobile comparisons, including the BPP final-design section and any changed interactions.

### Ticket 6 — Shared motion, integration and regression verification

**Depends on:** Tickets 1–5 and any fixes discovered by Ticket 7.  
**Owned files:** `src/components/sites/rutvi-portfolio/site-motion.tsx`, `src/components/sites/rutvi-portfolio/motion-video.tsx`, `src/components/sites/rutvi-portfolio/motion-video.module.css`, `src/app/globals.css`, and shared shell/navigation files only where required.

- [ ] Integrate page work and resolve shared motion/media needs based on observed behavior. The existing one-shot `IntersectionObserver` reveal is not equivalent to reversible scroll-linked movement; do not replace distinct page-specific effects with a generic fade or break other pages.
- [ ] Preserve reduced-motion behavior, keyboard access, working media and existing navigation. Check scrolling in both directions and navigation away/back so effects do not leave content hidden or stuck.
- [ ] Run `pnpm check` once after integration. Exercise the actual local site at 1440×900, 820×1180 and 390×844: all six routes, project links, mobile menu, resume, contact/LinkedIn targets, CTAs and media; check for broken images, runtime errors and horizontal overflow.
- [ ] Review source/local captures at matching viewport and state, including Valtech initial, active, settled and reverse-scroll states. Save comparison evidence and update `HANDOFF.md` with checks actually run, remaining differences and source limitations.

### Ticket 7 — Complete the unverified comparison surface

**Can begin in parallel with Tickets 1–5;** assign page-specific repairs to the relevant page owner and finish before Ticket 6's final verification.

- [ ] Inspect every accessible source and local route top-to-bottom at desktop and mobile, plus a wider desktop viewport. Use real scrolling and exercise visible hover, click, keyboard, media and navigation states; distinguish scroll-, time- and input-driven motion. Capture source/local evidence at matching states.
- [ ] Triage and fix any additional confirmed visual, content, animation, scroll, asset or interaction differences within the relevant page-owned slice; coordinate shared changes through Ticket 6. Do not treat hidden DOM, unverified link `href`s, or unsettled captures as proof of a visible bug.
- [ ] Record exact inaccessible or unobservable source behavior rather than inventing it. Fullbowl remains an NDA/available-upon-request item unless an actual public case study is accessible.

## Done when

All confirmed issues above and additional discrepancies found in the comparison pass are repaired, the source/local evidence and handoff are saved, the cross-site interaction and responsive checks pass, and `pnpm check` succeeds. Report any genuinely inaccessible source behavior explicitly rather than claiming unverified parity.
