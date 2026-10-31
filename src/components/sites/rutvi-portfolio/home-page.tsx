import Image from "next/image";
import Link from "next/link";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";
import { MotionVideo } from "@/components/sites/rutvi-portfolio/motion-video";
import { HomeMotion } from "@/components/sites/rutvi-portfolio/home-motion";

const projects = [
  {
    title: "VALTECH x KERZNER",
    description: "Scaled one enterprise system into two distinct luxury brand identities.",
    detail: [
      "As a UX Designer at Valtech, I collaborate within cross-functional teams to architect digital ecosystems for premier hospitality and tourism brands. I bridge the gap between global business objectives and intuitive user journeys through strategic information architecture, detailed wireframing, and narrative-driven UX copywriting for clients like the Kerzner Group (Bab Al Shams, Mazagan) and AlUla",
      "Specializing in the structural foundation of product design, I work strictly within established luxury design systems to translate complex stakeholder requirements into robust UX frameworks. By partnering closely with UI designers to bring these wireframes to life, and spearheading empathy-driven accessibility strategies, I ensure that these high-end digital platforms are both visually cohesive and authentically inclusive.",
    ],
    width: 785,
    height: 541,
    image: portfolioMedia.homeProjects[0],
    reveal: "clip-left",
    alt: "Valtech portfolio project",
    href: "/currentrole-projects-1",
    action: "VIEW CASE STUDY",
  },
  {
    title: "CHOPDAWG",
    description: "Led 12+ end to end product design for start-ups and enterprises across diverse domains",
    detail: [
      "As a Product Designer at ChopDawg, I played a key role in designing impactful solutions for various products, including mobile and web apps, admin apps, SAAS, and websites. Leading user research and creating detailed product plans, I empowered clients to enhance their businesses.",
      <>
        As the lead designer involved in product planning and scoping, I championed user advocacy in the early stages of development, ensuring alignment with stakeholders and clients. Through my efficient design process, I&apos;ve achieved a remarkable <strong>15%</strong> reduction in development times and successfully streamlined my project timelines by <strong>20%</strong>. Additionally, I contributed to the growth of our design team by mentoring junior designers in stakeholder management and enhancing design efficiency.
      </>,
    ],
    width: 784,
    height: 540,
    image: portfolioMedia.homeProjects[1],
    reveal: "clip-left",
    alt: "ChopDawg portfolio project",
    href: "/currentrole-projects",
    action: "READ MORE",
  },
  {
    title: "STARLING ASSIST",
    description: "An in-airport service based app that makes travelling easier for parents & children.",
    detail: "Product Strategy / Product Design / UI & Branding",
    width: 786,
    height: 1012,
    metric: { number: "5/5", description: "Net Promotor Score" },
    image: portfolioMedia.homeProjects[2],
    reveal: "clip-top",
    tall: true,
    alt: "Starling Assist mobile app screens",
    href: "/productstrategy-casestudy",
    action: "VIEW CASE STUDY",
  },
  {
    title: "BIG PICTURE PHILADELPHIA",
    description: "Website redesign for non-profit organization to enhance mentor & donor engagement",
    detail: "Information Architecture / Content Statregy / UX Design",
    width: 786,
    height: 1004,
    metric: { number: "89%", description: "Improved Usability & Navigation" },
    image: portfolioMedia.homeProjects[3],
    reveal: "clip-left",
    alt: "Big Picture Philadelphia website redesign",
    href: "/edtech-casestudy",
    action: "VIEW CASE STUDY",
    tall: true,
  },
  {
    title: "FULLBOWL APP",
    description: "A habit forming app that encourages college students to have a holistic & balanced diet",
    detail: "UX Design / UI & Branding / Prototyping",
    width: 786,
    height: 1012,
    metric: { number: "38%", description: "Students Formed A Habit In Less Than 5 Days" },
    image: portfolioMedia.homeProjects[4],
    reveal: "clip-top",
    alt: "Fullbowl healthy eating app screens",
    action: "CASE STUDY AVAILABLE UPON REQUEST",
    tall: true,
  },
];

const testimonials = [
  {
    quote: "Rutvi has a sharp eye for design. She doesn't just make things look good, she asks why something works and backs her choices with solid reasoning. She listens well and always keeps the user's experience first.",
    emphasis: "asks why something works and backs her choices with solid reasoning.",
    role: "Sr. UX Designer",
    company: "Valtech",
  },
  {
    quote: "She possesses a rare combination of creativity, attention to detail, and critical problem-solving skills. Her user-centered approach not only enhances aesthetic appeal but significantly improves usability and effectiveness.",
    role: "Project Manager",
    emphasis: "creativity, attention to detail, and critical problem-solving skills.",
    company: "ChopDawg",
  },
  {
    quote: "She takes feedback in stride, pushes ideas forward without ego, and elevates every team she's part of. Working with her, you always know the user's experience comes first. Any team would be lucky to have her.",
    role: "Product Designer",
    company: "ChopDawg",
    emphasis: "pushes ideas forward without ego, and elevates every team she's part of.",
  },
];

const stats = [
  { number: "15+", title: "Products Shipped", note: "From startups, enterprise platforms to digital ecosystems" },
  { number: "5+", title: "Years in UX", note: "Grounded in behavioral science and psychology" },
  { number: "6+", title: "Domains", note: "Including luxury hospitality and healthcare" },
  { number: "3+", title: "Global Markets", note: "Designed digital experiences across US, Canadian, and Middle Eastern markets" },
];

export function HomePage() {
  return (
    <main id="main-content" className="home-page" data-page="home">
      <section className="home-hero" aria-labelledby="hero-title">
        <MotionVideo
          className="home-hero-video-frame"
          videoClassName="hero-video"
          src={portfolioMedia.heroVideo}
          poster={portfolioMedia.heroPoster}
          label="Portfolio background video"
          controls={false}
          autoPlay
          decorative
          reducedMotionControl
        />
        <div className="hero-content">
          <h1 id="hero-title">Making complex systems feel simple, intuitive, and distinctly <em>human</em></h1>
          <p>Product Designer with 5+ years of experience shaping product strategy, systems, and complex workflows across enterprise products and digital experiences.</p>
          <Link className="button-yellow" href="#selected-work">
            VIEW MY WORK
            <span className="home-cta-arrow" aria-hidden="true">
              <svg viewBox="0 0 200 200" focusable="false">
                <path d="M162 105H34v-10h128v10Z" />
                <path d="M141.036 132.536l-7.071-7.071 25.464-25.464-25.464-25.464 7.071-7.071 32.536 32.536-32.536 32.536Z" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div className="intro-main">
          <div className="intro-copy">
            <h2 className="section-kicker" id="intro-title"><span>HI, I&apos;M </span><span className="intro-name">RUTVI PUROHIT</span></h2>
            <p>I design at the intersection of behavioral science and enterprise scale. Before product design, I studied human behavior, and that instinct still shapes every project I take on: not just what a screen should look like, but why people actually behave the way they do within it.</p>
            <p>I gravitate toward the hard problems, the ones with dense business logic and tight technical guardrails, systems too complex to fake your way through. I anchor my work in research and strategy, mapping the invisible blueprints that make heavy platforms feel effortless to the people using them.</p>
            <Link className="text-link" href="/about">
              Get to know me
              <svg viewBox="0 0 200 200" focusable="false" aria-hidden="true">
                <path d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z" />
              </svg>
            </Link>
          </div>
          <div className="intro-portrait-frame">
            <Image
              className="intro-portrait"
              src="/sites/rutvi-portfolio/home/03-magenta-lanyard-id-badge-with-charms-highres.png"
              alt="Rutvi Purohit wearing her magenta portfolio ID badge"
              width={1022}
              height={1472}
              sizes="(max-width: 680px) 90vw, 32vw"
            />
          </div>
        </div>
        <div className="stats-grid" aria-label="Experience at a glance">
          {stats.map((stat) => (
            <div className="stat" key={stat.title}>
              <strong>{stat.number}</strong>
              <h3>{stat.title}</h3>
              <span className="stat-rule" aria-hidden="true" />
              <p>{stat.note}</p>
            </div>
          ))}
        </div>
        <div className="intro-quote">
          <h2 id="intro-quote-title">Every project starts the same way: with <em>curiosity</em>, not pixels.</h2>
        </div>
      </section>

      <section className="work-entry" aria-labelledby="work-title">
        <div className="entry-progress" aria-hidden="true"><span /></div>
        <h2 id="work-title" data-home-reveal="tilt">Selected Work</h2>
      </section>
      <section className="work-section" id="selected-work" aria-label="Selected work">
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title} data-home-scene={project.title}>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <div className="project-summary" data-home-reveal="slide"><p>{project.description}</p></div>
                {project.metric && (
                  <div className="project-metric">
                    <strong>{project.metric.number}</strong>
                    <span>{project.metric.description}</span>
                  </div>
                )}
                {project.detail &&
                  (Array.isArray(project.detail) ? project.detail.map((paragraph, index) => (
                    <p className="project-description" key={`${project.title}-${index}`}>{paragraph}</p>
                  )) : (
                    <p className="project-disciplines">{project.detail}</p>
                  ))}
                {project.href ? (
                  <Link className="project-link" href={project.href}><span className="project-link-label">{project.action}</span><svg aria-hidden="true" focusable="false" viewBox="0 0 200 200"><path d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z" /></svg></Link>
                ) : (
                  <span className="project-link"><span className="project-link-label">{project.action}</span></span>
                )}
              </div>
              <div className="project-image-wrap" data-home-reveal={project.reveal}>
                <Image
                  className={project.tall ? "project-tall" : undefined}
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 680px) 88vw, (max-width: 900px) 42vw, 44vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="testimonial-entry" aria-labelledby="testimonial-title">
        <div className="entry-progress" aria-hidden="true"><span /></div>
        <h2 id="testimonial-title" data-home-reveal="tilt">Working With Me</h2>
      </section>

      <section className="testimonials" aria-label="Testimonials">
        <div className="testimonial-grid">
          {testimonials.map((item) => {
            const [before, after] = item.quote.split(item.emphasis);
            return (
              <figure className="testimonial" key={item.role}>
                <blockquote>“{before}<strong>{item.emphasis}</strong>{after}”</blockquote>
                <figcaption><cite>{item.role}</cite><span>{item.company}</span></figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <HomeMotion />
    </main>
  );
}
