# Rutvi Purohit portfolio handoff

Editable Next.js rebuild of Rutvi Purohit's portfolio. The site reproduces the six accessible source routes; Fullbowl remains an NDA/upon-request item because no public case-study page was available.

## Routes

| Source page | Wix path | Local route |
| --- | --- | --- |
| Home | `/design` | `/` |
| About | `/design/about` | `/about` |
| Valtech × Kerzner | `/design/currentrole-projects-1` | `/currentrole-projects-1` |
| ChopDawg | `/design/currentrole-projects` | `/currentrole-projects` |
| Big Picture Philadelphia | `/design/edtech-casestudy` | `/edtech-casestudy` |
| Starling Assist | `/design/productstrategy-casestudy` | `/productstrategy-casestudy` |

## Local development

Use Node.js 24+ and pnpm 12.16.1:

```sh
pnpm install
pnpm dev
pnpm run check
```

## Last recorded verification

The last recorded `pnpm run check` passed lint without warnings, typecheck, and the production build; all six routes were generated. A production smoke covered all six routes at 1432×768 and 390×844 CSS pixels at DPR 2 (12 combinations), with no horizontal overflow, visible broken images, or Wix branding. Targeted checks covered the complete pointer-responsive home badge, home title reveals and project transitions, the About intro/bio boundary and route re-entry, reduced motion, and visible-entry Starling/BPP media playback. This verification was recorded before the current repository grooming and has not been rerun here.

**Fresh smoke caveat:** A local development smoke loaded the Home badge image, but at scrollY 0 its box began at y=810 in the 1432×768 viewport, so the badge was outside the initial view. This does not reproduce the saved badge-containment result above; treat initial badge visibility and pointer response as unverified until rechecked.

## Known limits

- Mobile checks use viewport emulation; they do not certify physical touch behavior.
- The audit did not certify every browser, scroll velocity, browser-history/BFCache state, external destination, or resume-file equivalence.
- Fullbowl's public case-study content and supporting assets were inaccessible; its NDA/upon-request message is retained rather than inventing a page.
- Some local mobile layouts intentionally remain readable where the source clips or overlaps content; the local navigation also remains readable over source pages with white-on-white navigation.

The source/local screenshot, video, and machine-readable audit archives were deleted during repository cleanup. The detailed portfolio-fidelity ticket remains locally as work history, but links to deleted captures are historical and no longer resolve. A future agent can recreate comparison evidence by capturing fresh source and local states at matching viewports; the exact deleted files cannot be restored.
