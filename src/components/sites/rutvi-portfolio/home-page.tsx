import Image from "next/image";
import Link from "next/link";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";
import { MotionVideo } from "@/components/sites/rutvi-portfolio/motion-video";

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
    alt: "Valtech portfolio project",
    href: "/currentrole-projects-1",
    action: "VIEW CASE STUDY",
  },
  {
    title: "CHOPDAWG",
    description: "Led 12+ end to end product design for start-ups and enterprises across diverse domains",
    detail: [
      "As a Product Designer at ChopDawg, I played a key role in designing impactful solutions for various products, including mobile and web apps, admin apps, SAAS, and websites. Leading user research and creating detailed product plans, I empowered clients to enhance their businesses.",
      "As the lead designer involved in product planning and scoping, I championed user advocacy in the early stages of development, ensuring alignment with stakeholders and clients. Through my efficient design process, I've achieved a remarkable 15% reduction in development times and successfully streamlined my project timelines by 20%. Additionally, I contributed to the growth of our design team by mentoring junior designers in stakeholder management and enhancing design efficiency.",
    ],
    width: 784,
    height: 540,
    image: portfolioMedia.homeProjects[1],
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
    metric: { number: "38%", description: "Students Formed A Habit In Less Than 5 Days" },
    image: portfolioMedia.homeProjects[4],
    alt: "Fullbowl healthy eating app screens",
    action: "CASE STUDY AVAILABLE UPON REQUEST",
    tall: true,
  },
];

const testimonials = [
  {
    quote: "Rutvi has a sharp eye for design. She doesn't just make things look good, she asks why something works and backs her choices with solid reasoning. She listens well and always keeps the user's experience first.",
    role: "Sr. UX Designer",
    company: "Valtech",
  },
  {
    quote: "She possesses a rare combination of creativity, attention to detail, and critical problem-solving skills. Her user-centered approach not only enhances aesthetic appeal but significantly improves usability and effectiveness.",
    role: "Project Manager",
    company: "ChopDawg",
  },
  {
    quote: "She takes feedback in stride, pushes ideas forward without ego, and elevates every team she's part of. Working with her, you always know the user's experience comes first. Any team would be lucky to have her.",
    role: "Product Designer",
    company: "ChopDawg",
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
    <main id="main-content">
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
          <Link className="button-yellow" href="#selected-work">VIEW MY WORK <span aria-hidden="true">⟶</span></Link>
        </div>
      </section>

      <section className="intro-section" aria-labelledby="intro-title">
        <div className="intro-main">
          <div className="intro-copy">
            <h2 className="section-kicker" id="intro-title">HI, I&apos;M RUTVI PUROHIT</h2>
            <p>I design at the intersection of behavioral science and enterprise scale. Before product design, I studied human behavior, and that instinct still shapes every project I take on: not just what a screen should look like, but why people actually behave the way they do within it.</p>
            <p>I gravitate toward the hard problems, the ones with dense business logic and tight technical guardrails, systems too complex to fake your way through. I anchor my work in research and strategy, mapping the invisible blueprints that make heavy platforms feel effortless to the people using them.</p>
            <Link className="text-link" href="/about">GET TO KNOW ME <span aria-hidden="true">⟶</span></Link>
          </div>
          <Image
            className="intro-portrait"
            src={portfolioMedia.homeIntro}
            alt="Rutvi Purohit wearing her magenta portfolio ID badge"
            width={499}
            height={718}
            sizes="(max-width: 680px) 90vw, (max-width: 1000px) 40vw, 32vw"
          />
        </div>
        <div className="stats-grid" aria-label="Experience at a glance">
          {stats.map((stat) => (
            <div className="stat" key={stat.title}>
              <strong>{stat.number}</strong>
              <h3>{stat.title}</h3>
              <p>{stat.note}</p>
            </div>
          ))}
        </div>
        <div className="intro-quote">
          <h2 id="intro-quote-title">Every project starts the same way: with <em>curiosity</em>, not pixels.</h2>
        </div>
      </section>

      <section className="quote-band" aria-hidden="true">
        <h2 className="quote-band-mark">W</h2>
      </section>

      <section className="work-section" id="selected-work" aria-label="Selected work">
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.detail &&
                  (Array.isArray(project.detail) ? project.detail : [project.detail]).map((paragraph) => (
                    <p className="project-description" key={paragraph}>{paragraph}</p>
                  ))}
                {project.metric && (
                  <div className="project-metric">
                    <strong>{project.metric.number}</strong>
                    <span>{project.metric.description}</span>
                  </div>
                )}
                {project.href ? (
                  <Link className="project-link" href={project.href}>{project.action} <span aria-hidden="true">⟶</span></Link>
                ) : (
                  <span className="project-link">{project.action}</span>
                )}
              </div>
              <div className="project-image-wrap">
                <Image
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
      <section className="quote-band quote-band-divider" aria-hidden="true" />

      <section className="testimonials" aria-labelledby="testimonial-title">
        <h2 id="testimonial-title">Working With Me</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure className="testimonial" key={item.role}>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption><cite>{item.role}</cite><span>{item.company}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

    </main>
  );
}
