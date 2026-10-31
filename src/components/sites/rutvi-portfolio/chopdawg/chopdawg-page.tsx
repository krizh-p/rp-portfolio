import { MotionVideo } from "@/components/sites/rutvi-portfolio/motion-video";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";
import styles from "./chopdawg-page.module.css";

const projects = [
  {
    number: "01",
    label: "A MARKETPLACE FOR HOBBYISTS & COLLECTORS",
    status: "In Development",
    title: "Re-establishing client trust",
    image: portfolioMedia.cases.chopdawg[2],
    video: portfolioMedia.caseVideos.chopdawg[0],
    width: 866,
    height: 559,
    paragraphs: [
      { lead: "My role", copy: " as a UX/UI Designer for this project was to realign the deliverables with the project timeline while identifying gaps in the user journey. I joined this project mid-development, focusing on creating a seamless marketplace experience for hobbyists and collectors." },
      { lead: "Key challenges", copy: " included acclimating to a new organization, maintaining client satisfaction despite frequent team changes, and preventing delays amidst multiple client-driven design pivots. Despite these hurdles, I identified and refined user flow gaps, creating a smoother experience." },
      { lead: "As an outcome", copy: ", I delivered high-quality design assets that better reflected the brand, which helped re-establish client trust. Additionally, I took on the mentorship of a junior designer, improving their design efficiency and stakeholder management skills. This project not only enhanced the product but also strengthened our team's capabilities and client relationships." },
    ],
    nda: true,
  },
  {
    number: "02",
    label: "MINDFUL DRIVING NAVIGATION APP",
    status: "In Development",
    title: "Aligning user needs with client vision",
    image: portfolioMedia.cases.chopdawg[0],
    video: portfolioMedia.caseVideos.chopdawg[1],
    width: 866,
    height: 520,
    paragraphs: [
      { lead: "My role", copy: " spanned from concept to reality, developing a mobile app with CarPlay and Android Auto compatibility. I was involved from inception, participating in client consultations, scoping, and proposal writing for a unique navigation app encouraging mindful driving." },
      { lead: "Key challenges", copy: " included translating the clients' abstract vision into tangible design and balancing innovative features with road safety. Despite these hurdles, we crafted a seamless navigation experience with personalized audio prompts and situation-specific cues." },
      { lead: "As a outcome", copy: ", the project successfully merged spiritual mindfulness with practical navigation, creating a distinctive product in the market. The app's effectiveness was validated through moderated usability tests, achieving a 92% success rate." },
    ],
    nda: true,
  },
  {
    number: "03",
    label: "ED-TECH VIRTUAL LEARNING WEB APP",
    status: "In Testing & QA",
    title: "Reimagining virtual circle-time for kids",
    image: portfolioMedia.cases.chopdawg[1],
    video: portfolioMedia.caseVideos.chopdawg[2],
    width: 866,
    height: 507,
    paragraphs: [
      { lead: "My role", copy: " as Lead Product Designer for Storyo encompassed product design and strategy, transforming a vision for family-friendly content into a responsive web app. I led all aspects of design from wireframes to high-fidelity mockups, creating a scalable platform with a credit-based subscription model." },
      { lead: "Key challenges", copy: " included designing an intuitive credit system and crafting a responsive interface that appealed to both parents and children. We balanced flexibility with simplicity while ensuring engaging content discovery for all ages." },
      { lead: "As a outcome", copy: ", the final product successfully merged entertainment with accessibility We also identified ways to help students leverage government education aid to further their learning on Storyo. Storyo will soon be launching as a unique offering in the family entertainment market, providing a customizable platform for diverse content consumption." },
    ],
    nda: false,
  },
] as const;

const learnings = [
  {
    number: "01",
    title: "UX Research without access to users",
    copy: "In startup projects, limited time and budget often constrained user research. This taught me to adapt, using desk research & available feedback to minimize assumptions. Stakeholder testing also proved valuable, offering insights while building empathy for the target audience—a win-win approach.",
  },
  {
    number: "02",
    title: "Annotate. Annotate. Annotate.",
    copy: "To resolve friction and misinterpretations during developer hand-offs, I introduced detailed screen annotations and dev notes. This simple addition streamlined alignment and significantly reduced back-and-forth communication.",
  },
  {
    number: "03",
    title: "Anticipating needs & being proactive",
    copy: "Working on multiple projects, PMs & stakeholders, being able to anticipate next steps was a game changer. By being self-aware & stepping up to facilitate collaboration and proposing solutions before being asked, I learned to UX the process itself, enhance team efficiency and project outcomes. ",
  },
];

export function ChopDawgPage() {
  return (
    <main id="main-content" data-page="chopdawg" data-page-theme="light" className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroTitle}>
          <h1>ChopDawg</h1>
          <p className={styles.eyebrow}>Consulting clients on product strategy &amp; design for success</p>
        </div>
        <dl className={styles.facts}>
          <div><dt>My Role</dt><dd><span className={styles.desktopFact}>Lead Product Design<br />Strategy<br />UX/UI Design</span><span className={styles.mobileFact}>Product Discovery &amp; Strategy<br />UX Design</span></dd></div>
          <div><dt>Tools</dt><dd><span className={styles.desktopFact}>Figma + AI<br />JIRA<br />Miro</span><span className={styles.mobileFact}>Figma<br />Miro<br />Qualtrics</span></dd></div>
          <div><dt>Timeline</dt><dd><span className={styles.desktopFact}>Feb 2022 - Present</span><span className={styles.mobileFact}>24 Weeks</span></dd></div>
        </dl>
      </header>

      <section className={styles.overview}>
        <div>
          <h2>Overview</h2>
          <p>ChopDawg is a design agency that has partnered with startups and enterprises around the world to launch 400+ next-generation apps. As a Product Designer at ChopDawg, I&apos;ve played a key role in designing impactful solutions for 10+ digital products across mobile apps, web apps, admin apps, SAAS, and websites. Leading user research and creating detailed product plans, I empower clients to enhance their businesses. </p>
        </div>
        <div>
          <h2>Outcome</h2>
          <p>Working at ChopDawg across 10+ projects has been an exciting endeavor that has helped my diversify my skills from end to end product development. Specifically, I was able to hone into my design process &amp; helped the team reduce development time by 15% and successfully streamlined my project timelines by 20%. Over the year, I&apos;ve also leveraged AI tools to empower my design process &amp; took on mentoring junior designers on stakeholder management &amp; design efficiencies. </p>
        </div>
      </section>
      <section className={styles.mobileOverview}>
        <div>
          <h2>Problem</h2>
          <p>Travelling to the airport with children is often a nightmare for most parents, this becomes a bigger challenge when its a solo parent handling kids along with multiple priorities single handedly. How can we support &amp; assist solo traveling parents at the airport and help them decompress without the stress of kids or baggage.</p>
        </div>
        <div>
          <h2>Outcome</h2>
          <p>92% parents shared they would be more confident and assured travelling with a personalized concierge</p>
          <p>5/5 NPS rating from real parents during service simulation</p>
          <p>Instead of expected 1%, 4% of website visitors signed up for early access to service</p>
        </div>
      </section>

      <section className={styles.projects}>
        {projects.map((project) => (
          <article className={styles.project} key={project.number}>
            <div className={styles.projectLabel}>
              <span>{project.number}</span>
              <h2>{project.label}</h2>
              <p>{project.status}</p>
            </div>
            <div className={styles.projectContent}>
              <MotionVideo className={styles.projectImage} src={project.video} poster={project.image} label={`Video preview: ${project.title}`} aspectRatio={`${project.width} / ${project.height}`} autoPlay controls={false} />
              <div className={styles.projectCopy}>
                <h3>{project.title}</h3>
                {project.paragraphs.map(({ lead, copy }) => <p key={lead}><strong>{lead}</strong>{copy}</p>)}
                {project.nda && <p className={styles.nda}>**Project details including name/branding have been modified due to NDA**</p>}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.learnings}>
        <div className={styles.learningIntro}>
          <p className={styles.learningLabel}><span className={styles.learningNumber}>04</span><span className={styles.learningLabelText}>DESIGNER LEARNINGS</span></p>
          <div>
            <h2>Reflecting on project outcomes</h2>
            <p>Over the span of my time at ChopDawg, I&apos;ve put on multiple hats while working in a fast paced setting. It would be difficult to put into words the various ways I&apos;ve grown as a designer &amp; a professional but here are some of the key learnings.</p>
          </div>
        </div>
        <div className={styles.learningList}>
          {learnings.map((learning) => (
            <article className={styles.learning} key={learning.number}>
              <span>{learning.number}</span>
              <h3>{learning.title}</h3>
              <p>{learning.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
