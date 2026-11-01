export type PublicAssetPath = `/sites/rutvi-portfolio/${string}`;

export function publicAsset(path: PublicAssetPath): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}


export const portfolioMedia = {
  "logo": "/sites/rutvi-portfolio/home/logo.png",
  "heroVideo": "/sites/rutvi-portfolio/home/hero.mp4",
  "heroPoster": "/sites/rutvi-portfolio/home/02-11062b-fd6ac5a378394c4db4ab3fcb0bae0a47f000.jpg",
  "homeIntro": "/sites/rutvi-portfolio/home/03-magenta-lanyard-id-badge-with-charms.png",
  "homeProjects": [
    "/sites/rutvi-portfolio/home/04-valtech.png",
    "/sites/rutvi-portfolio/home/05-background-4.png",
    "/sites/rutvi-portfolio/home/06-cs1-3.png",
    "/sites/rutvi-portfolio/home/07-cs2-4.png",
    "/sites/rutvi-portfolio/home/08-cs3-1.png"
  ],
  "about": {
    "portrait": "/sites/rutvi-portfolio/about/03-about-me2.png",
    "gallery": [
      "/sites/rutvi-portfolio/about/04-70b4dc-cc89035ed79c48f2b2ae5ae1ff538b14-mv2.png",
      "/sites/rutvi-portfolio/about/05-70b4dc-8ecf205bb95e44bea76bd95e5647a954-mv2.png",
      "/sites/rutvi-portfolio/about/06-photo5.png",
      "/sites/rutvi-portfolio/about/07-group-2249.png",
      "/sites/rutvi-portfolio/about/14-photo7.png",
      "/sites/rutvi-portfolio/about/15-photo1.png",
      "/sites/rutvi-portfolio/about/16-photo8.png"
    ]
  },
  "cases": {
    "kerzner": [
      "/sites/rutvi-portfolio/kerzner/02-valtech-white-logo.png",
      "/sites/rutvi-portfolio/kerzner/03-property-selection-hero-banner-1.png",
      "/sites/rutvi-portfolio/kerzner/04-inspirational-page-hero-banner.png",
      "/sites/rutvi-portfolio/kerzner/05-11062b-e55321c53b02478b9bafa28958160488f000.jpg",
      "/sites/rutvi-portfolio/kerzner/06-11062b-41148c6b0dca4f42b8380089fd183012f000.jpg",
      "/sites/rutvi-portfolio/kerzner/07-c837a6-fa88fcd4281f4a2e9c198b43bbad67b2f000.jpg",
      "/sites/rutvi-portfolio/kerzner/08-c837a6-5f728b37e4f5427ca6c5c3d54e0a336af000.jpg",
      "/sites/rutvi-portfolio/kerzner/09-artifact-discovery1-maz-stay-ia.png",
      "/sites/rutvi-portfolio/kerzner/10-artifact-discovery1-bas-ia.png",
      "/sites/rutvi-portfolio/kerzner/11-artifact-discovery1-maz-ia.png",
      "/sites/rutvi-portfolio/kerzner/12-artifact-discovery2-maz-ia.png",
      "/sites/rutvi-portfolio/kerzner/13-artifact-discovery2-bas-ia.png",
      "/sites/rutvi-portfolio/kerzner/14-artifact-discovery2-kidsclub-cs.png",
      "/sites/rutvi-portfolio/kerzner/15-tailored-for-every-age-kids-club-1.png",
      "/sites/rutvi-portfolio/kerzner/16-artifact-discovery3-bas1.png",
      "/sites/rutvi-portfolio/kerzner/17-artifact-discovery3-bas2.png",
      "/sites/rutvi-portfolio/kerzner/18-70b4dc-757f2d577a254418854f3197990d90d7-mv2.png",
      "/sites/rutvi-portfolio/kerzner/19-l1-to-l3.png",
      "/sites/rutvi-portfolio/kerzner/20-brand-side-by-side-1.png",
      "/sites/rutvi-portfolio/kerzner/21-70b4dc-458443c7ab9a4a8198a285ae43a17098f000.jpg",
      "/sites/rutvi-portfolio/kerzner/22-70b4dc-58a89489034f4cf9aae385de4434872df000.jpg",
      "/sites/rutvi-portfolio/kerzner/23-golf-ia-draft.png",
      "/sites/rutvi-portfolio/kerzner/24-golf-ia-final.png",
      "/sites/rutvi-portfolio/kerzner/25-maz-casino-flow.png",
      "/sites/rutvi-portfolio/kerzner/26-bas-dining.png"
    ],
    "chopdawg": [
      "/sites/rutvi-portfolio/chopdawg/02-70b4dc-f92df09268704726b1918615a5e08b89f000.jpg",
      "/sites/rutvi-portfolio/chopdawg/03-70b4dc-c0135b430f3b4a528a18b20f5c3fe14cf000.jpg",
      "/sites/rutvi-portfolio/chopdawg/04-70b4dc-c3bdfaea639f4b10b7d35bf901014fd5f000.jpg"
    ],
    "starling": [
      "/sites/rutvi-portfolio/starling/02-70b4dc-d62f1be9930d44d59f1c926ab5911eb2f001.jpg",
      "/sites/rutvi-portfolio/starling/03-70b4dc-d5f05e43d16d45ba81b40d788941f49c-mv2.avif",
      "/sites/rutvi-portfolio/starling/04-sa4.png",
      "/sites/rutvi-portfolio/starling/05-sa3.png",
      "/sites/rutvi-portfolio/starling/06-sa5.png",
      "/sites/rutvi-portfolio/starling/07-sa6.png",
      "/sites/rutvi-portfolio/starling/08-70b4dc-cb21eb77d02344eaafdd17a7d6dcfc9f-mv2.png",
      "/sites/rutvi-portfolio/starling/09-sa-empathy.png",
      "/sites/rutvi-portfolio/starling/10-13-pro-97.png",
      "/sites/rutvi-portfolio/starling/11-parent-notes.png",
      "/sites/rutvi-portfolio/starling/12-13-pro-78.png",
      "/sites/rutvi-portfolio/starling/13-13-pro-87.png",
      "/sites/rutvi-portfolio/starling/14-13-pro-126.png",
      "/sites/rutvi-portfolio/starling/15-safety-bands.png",
      "/sites/rutvi-portfolio/starling/16-dynamic.png",
      "/sites/rutvi-portfolio/starling/17-sa-story1.png",
      "/sites/rutvi-portfolio/starling/18-sa-story-2.png",
      "/sites/rutvi-portfolio/starling/19-sa-story-3.png",
      "/sites/rutvi-portfolio/starling/20-70b4dc-a7d7d17b79264c9787d67f18670f2f65-mv2.png",
      "/sites/rutvi-portfolio/starling/21-sa-5.png",
      "/sites/rutvi-portfolio/starling/22-sa-4.png",
      "/sites/rutvi-portfolio/starling/23-70b4dc-9d17c88623394b76869b6974647d9c76-mv2.png",
      "/sites/rutvi-portfolio/starling/24-70b4dc-ce6dccef7a09454ab382918a84e4f317-mv2.png"
    ],
    "bigPicture": [
      "/sites/rutvi-portfolio/big-picture/02-70b4dc-3935cdabcbb64933a0a93657ff058914f000.jpg",
      "/sites/rutvi-portfolio/big-picture/03-task-analysis.png",
      "/sites/rutvi-portfolio/big-picture/04-usability-insights.png",
      "/sites/rutvi-portfolio/big-picture/05-stakeholder-insights.png",
      "/sites/rutvi-portfolio/big-picture/06-user-persona-donor.png",
      "/sites/rutvi-portfolio/big-picture/07-user-journey-donor.png",
      "/sites/rutvi-portfolio/big-picture/08-user-persona-mentor.png",
      "/sites/rutvi-portfolio/big-picture/09-user-journey-mentor.png",
      "/sites/rutvi-portfolio/big-picture/10-bpp-whats-workingv.png",
      "/sites/rutvi-portfolio/big-picture/11-bpp-whats-workingv.png",
      "/sites/rutvi-portfolio/big-picture/12-bpp-whats-workingv.png",
      "/sites/rutvi-portfolio/big-picture/13-bpp-whats-not-working.png",
      "/sites/rutvi-portfolio/big-picture/14-bpp-whats-not-working.png",
      "/sites/rutvi-portfolio/big-picture/15-bpp-whats-not-working.png",
      "/sites/rutvi-portfolio/big-picture/16-bpp-whats-not-working.png",
      "/sites/rutvi-portfolio/big-picture/17-70b4dc-1e86bdfb299f4d498330fa790e3f6585-mv2.png",
      "/sites/rutvi-portfolio/big-picture/18-new-ia.png",
      "/sites/rutvi-portfolio/big-picture/19-tree-test-overall.png",
      "/sites/rutvi-portfolio/big-picture/20-new-ia-tree-test.png",
      "/sites/rutvi-portfolio/big-picture/21-wireframes.png",
      "/sites/rutvi-portfolio/big-picture/22-70b4dc-7f456332640c4a19a4ebcac3c5b7a67a-mv2.png",
      "/sites/rutvi-portfolio/big-picture/23-home-page-b.png",
      "/sites/rutvi-portfolio/big-picture/24-get-involved.png",
      "/sites/rutvi-portfolio/big-picture/25-home-page-b.png",
      "/sites/rutvi-portfolio/big-picture/26-home-page-b.png",
      "/sites/rutvi-portfolio/big-picture/27-70b4dc-e44d264ca31442329a546940f8ab66ea-mv2.png"
    ]
  },
  "caseVideos": {
    "kerzner": [
      "/sites/rutvi-portfolio/kerzner/nature-shadow-play.mp4",
      "/sites/rutvi-portfolio/kerzner/underwater-tranquility.mp4",
      "/sites/rutvi-portfolio/kerzner/7639979-hd_1080_1920_30fps.mp4",
      "/sites/rutvi-portfolio/kerzner/7606112-hd_1080_1920_30fps.mp4",
      "/sites/rutvi-portfolio/kerzner/mazagan-tabbed-carousel.mp4",
      "/sites/rutvi-portfolio/kerzner/room-types-tabbed-carousel.mp4"
    ],
    "chopdawg": [
      "/sites/rutvi-portfolio/chopdawg/animated-web-screens.mp4",
      "/sites/rutvi-portfolio/chopdawg/new-file.mp4",
      "/sites/rutvi-portfolio/chopdawg/storyo-overview.mp4"
    ],
    "starling": "/sites/rutvi-portfolio/starling/showreel-grid-mobile.mp4",
    "bigPicture": "/sites/rutvi-portfolio/big-picture/prototype.mp4"
  },
  "resumes": {
    "home": "/sites/rutvi-portfolio/resumes/home.pdf",
    "header": "/sites/rutvi-portfolio/resumes/header.pdf",
    "about": "/sites/rutvi-portfolio/resumes/about.pdf"
  }
} as const;

