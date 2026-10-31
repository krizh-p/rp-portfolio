import Image from "next/image";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";
import styles from "./kerzner-page.module.css";
import { MotionVideo } from "@/components/sites/rutvi-portfolio/motion-video";

const motifByImageIndex: Record<number, string> = {
  4: "/sites/rutvi-portfolio/kerzner/discovery-motif-lobed.svg",
  5: "/sites/rutvi-portfolio/kerzner/discovery-motif-three-circles.svg",
  6: "/sites/rutvi-portfolio/kerzner/discovery-motif-four-circles.svg",
};
const images = portfolioMedia.cases.kerzner;
const videoByImageIndex: Record<number, { src: string; label: string }> = {
  3: { src: portfolioMedia.caseVideos.kerzner[0], label: "Nature Shadow Play" },
  4: { src: portfolioMedia.caseVideos.kerzner[1], label: "Underwater Tranquility Scene" },
  5: { src: portfolioMedia.caseVideos.kerzner[2], label: "7639979-hd_1080_1920_30fps.mp4" },
  6: { src: portfolioMedia.caseVideos.kerzner[3], label: "7606112-hd_1080_1920_30fps.mp4" },
  19: { src: portfolioMedia.caseVideos.kerzner[4], label: "MAZ tabbed carousel" },
  20: { src: portfolioMedia.caseVideos.kerzner[5], label: "Room types tabbed carousel" },
};
const imageDimensions = [
  [204, 45], [1542, 892], [1440, 729], [1350, 898], [112, 118],
  [112, 118], [112, 118], [576, 618], [571, 620], [571, 617],
  [571, 620], [571, 617], [1101, 435], [1091, 633], [601, 370],
  [357, 503], [1387, 628], [1296, 1082], [1190, 967], [1059, 661],
  [1059, 661], [1024, 525], [1029, 498], [1129, 1226], [1296, 1599],
];
const imageAlts = [
  "Valtech_white_logo.png",
  "Property Selection Hero Banner (1).png",
  "Inspirational Page Hero Banner.png",
  "",
  "",
  "",
  "",
  "Artifact_Discovery1_Maz Stay IA.png",
  "Artifact_Discovery1_BAS IA.png",
  "Artifact_Discovery1_Maz IA.png",
  "Artifact_Discovery2_Maz IA.png",
  "Artifact_Discovery2_BAS IA.png",
  "Artifact_Discovery2_KidsClub_CS.png",
  "Tailored for every age - Kids Club 1.png",
  "Artifact_Discovery3_BAS1.png",
  "Artifact_Discovery3_BAS2.png",
  "image and video aspect ratio.png",
  "l1 to l3.png",
  "Brand side-by-side 1.png",
  "",
  "",
  "Golf IA Draft.png",
  "Golf IA FInal.png",
  "MAZ Casino Flow.png",
  "BAS Dining.png",
];
function CaseImage({
  index,
  className = "",
  autoPlay = false,
  controls = true,
  decorative = false,
  motifIndex,
}: {
  index: number;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  decorative?: boolean;
  motifIndex?: number;
}) {
  const [width, height] = imageDimensions[index];
  const video = videoByImageIndex[index];
  const motif = motifIndex === undefined ? undefined : motifByImageIndex[motifIndex];
  return (
    <figure className={`${styles.figure} ${className}`}>
      {video ? (
        <MotionVideo
          src={video.src}
          poster={images[index]}
          label={video.label}
          aspectRatio={`${width} / ${height}`}
          autoPlay={autoPlay}
          controls={controls}
          decorative={decorative}
        />
      ) : (
        <Image src={images[index]} alt={imageAlts[index]} width={width} height={height} sizes="(max-width: 760px) 100vw, 80vw" />
      )}
      {motif && <Image src={motif} alt="" aria-hidden="true" width={200} height={200} className={styles.motif} />}
    </figure>
  );
}

export function KerznerPage() {
  return <main id="main-content" data-page-theme="light" className={styles.page}>
    <header className={styles.hero}>
      <CaseImage index={0} />
      <h1>Scaled one enterprise system into two distinct luxury identities.</h1>
      <dl className={styles.facts}>{[["Client", "Kerzner / Bab Al Shams, Mazagan"], ["Role", "UX Designer"], ["Duration", "10 Months"], ["Team", "UX, UI, PM, Developers, Stakeholders"], ["Deliverables", "Research, IA, UX Strategy, User Flows, Responsive Experience"]].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </header>
    <CaseImage index={1} className={styles.wide} />
    <section className={styles.intro}>
      <p className={styles.eyebrow}>SETTING THE STAGE</p>
      <h2>Helping guests discover what makes every destination unique.</h2>
    </section>
    <section className={styles.introBody}>
      <div>
        <p>Luxury hospitality websites do more than showcase rooms—they shape how guests imagine, compare, and ultimately choose a destination.</p>
        <p>Kerzner partnered with Valtech to modernize the digital experience for Bab Al Shams and Mazagan, two established luxury resorts with distinct brand identities and business priorities. Rather than redesigning from scratch, the challenge was to evolve existing experiences into intuitive guest journeys that improved discoverability, strengthened each property&apos;s identity, and respected the realities of an enterprise platform.</p>
        <p>The strategy focused around guest intent, making luxury experiences easier to discover while preserving each property&apos;s unique identity and working within enterprise constraints.</p>
        <p>**Project details have been modified due to NDA restrictions**</p>
      </div>
    </section>
    <CaseImage index={2} className={`${styles.wide} ${styles.introWide}`} />
    <section className={styles.chapter}><span className={styles.number}>01</span><div><p className={styles.eyebrow}>UNDERSTANDING THE LANDSCAPE</p><h2>Understanding the landscape</h2><p>Before exploring solutions, I needed to understand why the existing digital experience no longer reflected the quality and complexity of the destinations themselves.</p><p>Rather than approaching Bab Al Shams and Mazagan as two website redesigns, I viewed them as two hospitality products with distinct guest expectations, business priorities, and brand narratives. Through stakeholder workshops, UX audits, competitor analysis, and information architecture reviews, three strategic discoveries emerged that shaped every design decision that followed.</p></div></section>
    <section className={styles.discovery} aria-labelledby="discovery-title" data-kerzner-discovery="true">
      <div className={styles.discoveryHeading}>
        <h2 id="discovery-title">Three discoveries guided the solution</h2>
      </div>
      <div className={styles.discoveryStage}>
        <CaseImage index={3} className={styles.discoveryHero} autoPlay controls={false} decorative />
        <div className={styles.cards}>
          <article data-discovery-card="1">
            <h3>Guests explored destinations through intentions</h3>
            <div className={styles.cardBody}>
              <CaseImage index={4} motifIndex={4} className={styles.discoveryArtwork} autoPlay controls={false} decorative />
              <p>Identifying guest motivations molded the website flow from inventory run to curious exploration</p>
            </div>
          </article>
          <article data-discovery-card="2">
            <h3>Opportunity lies in presenting right information at right time</h3>
            <div className={styles.cardBody}>
              <CaseImage index={5} motifIndex={5} className={styles.discoveryArtwork} autoPlay controls={false} decorative />
              <p>The value already existed. The opportunity wasn&apos;t adding information, it was helping guest identify the value and reducing uncertainty.</p>
            </div>
          </article>
          <article data-discovery-card="3">
            <h3>Not every experience deserved equal visibility.</h3>
            <div className={styles.cardBody}>
              <CaseImage index={6} motifIndex={6} className={styles.discoveryArtwork} autoPlay controls={false} decorative />
              <p>The website needed to strategically elevate the experiences that mattered most, both to guests and to the resort&apos;s commercial priorities.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section className={`${styles.story} ${styles.discoveryStory}`}>
      <div className={styles.storyIndex}>
        <span className={styles.number}>01</span>
        <p className={styles.eyebrow}>UNDERSTANDING THE LANDSCAPE</p>
      </div>
      <div className={styles.storyIntro}>
        <h2>Discovery 01</h2>
        <h3 className={styles.storyTitle}>Guests explored destinations through intentions, not inventories.</h3>
      </div>
      <p>Although both resorts belonged to Kerzner, they served fundamentally different guest motivations. Mazagan attracted families balancing leisure, golf, dining, and activities, while Bab Al Shams appealed to travelers seeking immersive desert experiences and slow luxury. Yet both websites presented their offerings in ways that reflected the resort&apos;s structure rather than how guests naturally planned their stay.</p>
      <p>Understanding these different motivations became the foundation for the redesign. Instead of organizing information around operational categories, I reframed the experience around guest intent to help visitors quickly recognize experiences most relevant to their purpose.</p>
      <CaseImage index={7}/>
      <h3>Contextual information that guides user decision</h3>
      <p>Designing the information hierarchy became an exercise in curating attention, ensuring the experiences with the greatest value to both guests and the business received the prominence they deserved.</p>
      <div className={styles.storyPairGroup}>
        <div className={styles.storyPair}><CaseImage index={8}/><CaseImage index={9}/></div>
        <p>Regrouped by what guests are looking for</p>
      </div>
      <div className={styles.storyPairGroup}>
        <div className={styles.storyPair}><CaseImage index={10}/><CaseImage index={11}/></div>
        <p>Deprioritized logistics content</p>
      </div>
      <div className={styles.storyIntro}>
        <h2>Discovery 02</h2>
        <h3 className={styles.storyTitle}>The opportunity wasn&apos;t adding information, it was reducing uncertainty.</h3>
      </div>
      <p>Many of the resort&apos;s strongest experiences already existed, but they were difficult to evaluate. Parents considering the Kids Club (Kidz Club &amp; Rush Club), for example, had little understanding of what their children would actually experience because activity details were buried within downloadable schedules.</p>
      <CaseImage index={12} className={`${styles.storyWideImage} ${styles.kidsClubState}`}/>
      <p>Mazagan / Current State</p>
      <p>Surfacing the Kids Club activities wasn&apos;t simply an information architecture improvement, it addressed a trust gap. Parents evaluating the experience lacked enough context to judge its value because the details were buried in a PDF. Reframing those activities as part of the core experience reduced ambiguity and supported more confident decision-making.</p>
      <CaseImage index={13} className={`${styles.storyWideImage} ${styles.kidsClubSolution}`}/>
      <p>Mazagan / Designed Solution</p>
    </section>
    <section className={`${styles.story} ${styles.discoveryThird}`}>
      <div className={styles.storyIntro}>
        <h2>Discovery 03</h2>
        <h3 className={styles.storyTitle}>Not every experience deserved equal visibility.</h3>
      </div>
      <p>Luxury resorts offer far more than accommodation, yet treating every experience with equal prominence diluted what made each destination unique. With stakeholder discussions and business analysis, we understood that the business ecosystem shifted the redesign from optimizing individual pages to shaping how guests experienced the destination as a whole.</p>
      <p>The challenge here was to balance commercial priorities while maintaining a naturally explorative experience for guests</p>
      <p>Rather than exposing the resort&apos;s internal structure, I restructured information hierarchy to intentionally guide attention. Experiences like Day Offers vs. Stay Offers, Desert Experiences, Golf, and Villa stays were repositioned based on guest intent, business value, and the role they played in shaping each property&apos;s identity.</p>
      <div className={`${styles.storyPair} ${styles.storyPairWide}`}><CaseImage index={14}/><CaseImage index={15}/></div>
    </section>
    <CaseImage index={16} className={styles.wide} />
    <section className={styles.decisions}>
      <div className={styles.storyIndex}>
        <span className={styles.number}>02</span>
        <p className={styles.eyebrow}>TRADE OFFS &amp; DECISIONS</p>
      </div>
      <h2>Trade-offs &amp; decisions</h2>
      <p>Discovery told us what guests needed. Turning that into something that could actually ship required real trade-offs between two brands that needed distinct identities - one enterprise design system they both had to live within, and business priorities that had to feel like part of the story, not a sales pitch. Here are the three decisions that shaped the redesign, and what each one cost to get there.</p>
      <aside><strong>CONSTRAINT</strong><p>Bab Al Shams and Mazagan needed unmistakably different digital personalities, yet both had to be built from the same enterprise design system, the same component library, and the same technical foundation used across Kerzner&apos;s broader portfolio. Differentiation couldn&apos;t come from custom components. It had to come from how those components were used.</p></aside>
    </section>
    <section className={`${styles.story} ${styles.decisionOne}`}>
      <div className={styles.storyIntro}>
        <h2>Decision 01</h2>
        <h3 className={styles.storyTitle}>Design the destination before the transaction</h3>
      </div>
      <p>Luxury hospitality is chosen through emotion, not specifications. Instead of leading with rooms and rates, I collaborated with our senior designer to build a three-layer progressive information architecture for Bab Al Shams and Mazagan:</p>
      <ul><li>L1 (Inspiration): Immersive, landscape-led storytelling.</li><li>L2 (Context): Category overviews (e.g., Villas, Activities) to guide exploration.</li><li>L3 (Details): Specific offerings (e.g., a two-bedroom villa or a camel ride).</li></ul>
      <h3>The Trade-Off</h3>
      <p>We kept the global &quot;Book&quot; CTA for decisive guests but intentionally moved the room-level booking deeper into the journey. For such a unique destination, preserving an immersive experience was worth prioritizing over a fast, and generic flow.</p>
      <div className={`${styles.storyFigureGroup} ${styles.destinationArchitecture}`}>
        <CaseImage index={17} className={styles.storyWideImage}/>
        <p className={styles.caption}>Home &gt; Stays &gt; Villas &gt; Two Bedroom Villa<br/>Bab Al Shams</p>
      </div>
    </section>
    <section className={`${styles.story} ${styles.decisionTwo}`}>
      <div className={styles.storyIntro}>
        <h2>Decision 02</h2>
        <h3 className={styles.storyTitle}>Solve it once, express it twice</h3>
      </div>
      <p>Since differentiation couldn&apos;t come from new components, we solved two patterns once and applied them differently for each brand.</p>
      <p>The first was a hero anchor pattern: small line icons with quiet labels that preview what&apos;s below and jump straight to it, without breaking the luxe feel. At Mazagan, anchors carried through to deeper pages too, like L1 Golf (The Course, Stay &amp; Play, Beyond the Course) and L2 Action Activities (Quad &amp; Buggy, Go-Karting, Paintball).</p>
      <p>At Bab Al Shams, they appeared on the top-level overview pages, like Experiences (Desert, Nature, Culture, Family) and Stays (Villas, Suites, Rooms), while the individual villa and experience pages were left unanchored to keep them quiet and immersive.</p>
      <div className={`${styles.storyFigureGroup} ${styles.brandComparison}`}>
        <CaseImage index={18} className={styles.storyWideImage}/>
        <p className={styles.caption}>Side by SIde Brand Comparison</p>
      </div>
      <p>The immersive carousel with a tabbed switcher was another component reused across brands. At Mazagan, it let guests browse activity types before committing to any one detail page. At Bab Al Shams, it replaced a separate listing and detail page for every room view with one page where guests could compare Desert, Garden and Pool views side by side. One component, two expressions: clearer comparison for guests, fewer screens to design and build, and a faster path through development.</p>
      <div className={`${styles.storyFigureGroup} ${styles.activitiesCarousel}`}>
        <CaseImage index={19} className={styles.storyWideImage} autoPlay controls={false}/>
        <p className={styles.caption}>Mazagan / Designed Solution</p>
      </div>
      <div className={`${styles.storyFigureGroup} ${styles.roomTypesCarousel}`}>
        <CaseImage index={20} className={styles.storyWideImage} autoPlay controls={false}/>
        <p className={styles.caption}>Mazagan / Designed Solution</p>
      </div>
    </section>
    <section className={`${styles.story} ${styles.decisionThree}`}>
      <div className={styles.storyIntro}>
        <h2>Decision 03</h2>
        <h3 className={styles.storyTitle}>Letting business priorities<br/>shape the experiences,<br/>subtly.</h3>
      </div>
      <p>Not every experience carried equal weight for guests or for the business. At Mazagan, Golf was initially placed within the Experiences page as its first activity section. Conversations with stakeholders surfaced how much weight golf actually carried commercially. Mazagan is positioned as a beach and golf resort, and golf drove a meaningful share of both revenue and incoming guests.</p>
      <div className={`${styles.storyFigureGroup} ${styles.golfIA}`}>
        <CaseImage index={21} className={styles.storyWideImage}/>
        <p className={styles.caption}>Mazagan / IA Iteration</p>
      </div>
      <h3>The Pivot</h3>
      <p>Rather than nesting it inside Experiences, Golf became its own top-level category, parallel to Experiences rather than a section within it. We also renamed Experiences to Activities for better distinction. This gave golfers clear recognition while reflecting how central the offering was to the business.</p>
      <div className={`${styles.storyFigureGroup} ${styles.updatedIA}`}>
        <CaseImage index={22} className={styles.storyWideImage}/>
        <p className={styles.caption}>Mazagan / Updated IA</p>
      </div>
      <p>Mazagan&apos;s Casino carried a different kind of tension, it was a meaningful revenue driver, but given its distinct audience and tonal sensitivity, it couldn&apos;t dominate the brand narrative or sit alongside beach or golf offering the way a standard amenity would. I proposed a single, clear entry point from the homepage into a dedicated Casino page: findable without competing for space inside a generic &quot;Experiences&quot; section, and kept separate from the family and golf journeys so neither overshadowed the other. Working with our senior designer and stakeholders, we landed on a structure close to this.</p>
      <p>Not every business priority called for the same solution. Golf needed elevation to be taken seriously; Casino needed containment to avoid distorting the brand.</p>
      <div className={`${styles.storyFigureGroup} ${styles.casinoFlow}`}>
        <CaseImage index={23} className={styles.storyWideImage}/>
        <p className={styles.caption}>Mazagan / Casino Flow</p>
      </div>
    </section>
    <section className={`${styles.story} ${styles.decisionSummary}`}>
      <p>Enterprise constraints didn&apos;t limit these decisions - they sharpened them.</p>
      <p>Every choice above had to hold up across Kerzner&apos;s broader portfolio, not just these two resorts: as content teams added new experiences, as other properties adopted the same system, and as the design evolved beyond this project. The result was less about designing two websites, and more about giving two distinct luxury brands a shared language flexible enough to keep telling their own story.</p>
    </section>
    <section className={styles.impact}>
      <div className={styles.storyIndex}>
        <span className={styles.number}>03</span>
        <p className={styles.eyebrow}>OUTCOME &amp; IMPACT</p>
      </div>
      <h2>Outcome &amp; Impact</h2>
      <p>A successful UX strategy must bridge the gap between high-level vision and technical feasibility. As the project moved into implementation, our structural trade-offs proved their value by balancing two competing needs: accelerating development through shared enterprise components, while successfully preserving the bespoke, narrative-first luxury experience of each destination</p>
      <article><h3>Impact 01</h3><h4>A shared system that shipped faster, without diluting either brand.</h4><p>By adapting components within Kerzner’s established design system, we avoided custom builds and accelerated implementation. For example as seen above, contextually repurposing a tabbed component allowed us to merge 21 disjointed room-view pages into a single seamless carousel, significantly reducing user cognitive load and overall development debt.</p></article>
      <article><h3>Impact 02</h3><h4>Leading with story instead of specifications resonated the way it was meant to.</h4><p>During final review sessions, stakeholders resonated with the design and that it successfully translated the physical luxury experience into the digital space. User testing with a small group also mentioned they got a better sense of the stay experience and felt more confident in their room choices compared to current state flow. The narrative-first sequencing achieved its strategic goal: ensuring users and stakeholders engaged with the resorts as premium destinations first, rather than mere transactional booking forms.</p></article>
      <article><h3>Impact 03</h3><h4>Optimized for customization and standardization</h4><p>The structural redesign successfully scaled into a broader content architecture and editorial strategy. Rather than forcing identical templates across all restaurants and experiences, the proposed system utilized layouts that adapted to the unique nature of each offering while maintaining a cohesive underlying framework.</p></article>
      <div className={`${styles.storyFigureGroup} ${styles.impactDining}`}>
        <CaseImage index={24} className={styles.storyWideImage}/>
        <p className={styles.caption}>Bab Al Shams/ / Dining</p>
      </div>
    </section>
    <section className={styles.learnings}>
      <div className={styles.storyIndex}>
        <span className={styles.number}>04</span>
        <p className={styles.eyebrow}>DESIGNER LEARNINGS</p>
      </div>
      <h2>Reflecting on the project</h2>
      <p>Working on Bab Al Shams and Mazagan pushed me to think beyond individual screens toward how a shared system serves an entire portfolio and how much of senior-level UX work happens in conversations with stakeholders, not in Figma. Here&apos;s what stayed with me.</p>
      <article><span>01</span><div><h3>Differentiation lives in how you use a system, not just building new one</h3><p>Bab Al Shams and Mazagan needed to feel like distinct brands, but neither project added a single new component. Every point of differentiation came from hierarchy, pacing, imagery and knowing when to depart from the template entirely, like Al Hadheerah. That&apos;s a harder constraint than a blank canvas, and a more useful skill to carry forward.</p></div></article>
      <article><span>02</span><div><h3>Grounding decisions in the business, not just the user.</h3><p>The Golf and Day Offers decisions didn&apos;t come from user research alone — they came from understanding Mazagan&apos;s identity as a golf resort and Bab Al Shams&apos;s day-guest revenue well enough to make the case to stakeholders directly. Being credible in the room turned out to matter as much as being right on the screen.</p></div></article>
      <article><span>03</span><div><h3>Cultural context shapes decisions as much as user data does</h3><p>Working with a Dubai-based team from afar meant navigating more than time zones, cultural context, differing user behaviors, and legal or tonal sensitivities shaped real decisions, like how Casino needed to be findable without ever feeling like the center of the brand. That kind of nuance takes deliberate listening, not assumption.</p></div></article>
      <article><span>04</span><div><h3>Knowing when to lead and when to align.</h3><p>Working remotely within a larger team meant learning where full ownership moved things forward fastest and where staying closely aligned with our senior designer mattered more</p></div></article>
    </section>
  </main>;
}
