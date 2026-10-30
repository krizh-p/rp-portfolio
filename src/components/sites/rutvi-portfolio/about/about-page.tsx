import Image from "next/image";
import Link from "next/link";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";
import styles from "./about-page.module.css";

const facts = [
  "I just recently discovered my love for vegan sushi!",
  "My name, Rutvi means season and speech.",
  "I'm an ambivert - I thrive both in solitude and company.",
  "I was born in India. Raised in Virginia. Lived in California & Washington D.C. and now in Bangalore, IN!",
  "I'm fluent in three languages. Currently learning French.",
];
const jobs = [
  ["UX Designer", "Valtech, India", "Simplified luxury hospitality booking journeys for Kerzner's platforms. Elevated UX and IA for Bab Al Shams & Mazagan, optimizing customer discovery and premium storytelling to drive digital conversions.", "Nov 2025 - Present"],
  ["Product Designer", "ChopDawg, USA", "Solved complex product challenges across 10+ enterprise, commerce, AI, healthcare, SaaS and digital commerce products by leading end-to-end UX strategy from discovery through implementation.", "Feb 2023 - Nov 2025"],
  ["Project Manager", "Thomas Jefferson University, USA", "Designed & collaborated on metrics dashboard for C suite leaders to better analyze college operations. Collaborated with non-profits on website enhancements. Worked on VR based learning modules for nursing college", "Jan 2022 - Dec 2022"],
];
const strengths = [
  ["Psychology & Research", "Given my strong grasp of human psychology and meticulous research, diving into the minds of my audience feels like second nature to me . This allows me to craft products that not only make sense intuitively but also touch people on an emotional level.\n\nBefore UX, I was helping people as a kinesiologist, working with people from all walks of life. The combined experience as a kinesiologist and UX Designer allows me to bring analytical skills combined with empathetic approach towards the users"],
  ["Diverse Experience", "Growing up across countries and multiple cities has fortified my ability to overcome & thrive in any situation. This bleeds into my work as a resourceful designer who is able to extrapolate key information and create opportunities of growth while working with constraints at hand."],
  ["Adaptive + Resourceful + Thrifty", "Working in start up environment, wearing multiple hats has grown my understanding of how interdependent businesses are to its users and vice versa. Building on these experiences has grown my business acumen, empowering my designs to be more viable with measurable growth."],
  ["Balancing Business Goals & User Advocacy", ""],
];
const gallery = portfolioMedia.about.gallery;
const lifestylePhotos = [
  { src: gallery[3], width: 294, height: 454 },
  { src: gallery[2], width: 215, height: 293 },
  { src: gallery[1], width: 259, height: 347 },
  { src: gallery[0], width: 264, height: 330 },
] as const;
const travelPhotos = [
  { src: gallery[6], width: 354, height: 265 },
  { src: gallery[5], width: 463, height: 308 },
  { src: gallery[4], width: 219, height: 281 },
] as const;

export function AboutPage() {
  return (
    <main id="main-content" className={styles.page}>
      <section className={styles.intro} aria-labelledby="about-title">
        <div className={styles.introCopy}><h1 id="about-title">About me</h1><p className={styles.name}>I&apos;m Rutvi!</p><p className={styles.pronunciation}>/roo • T • wee</p><p className={styles.role}>UX Designer. Currently @ Valtech</p><Link href="/#selected-work" className={styles.workLink}>See my work <span aria-hidden="true">→</span></Link></div>
        <Image className={styles.portrait} src={portfolioMedia.about.portrait} alt="" width={680} height={906} priority />
      </section>
      <section className={styles.bio}>
        <div className={styles.bioCopy}><p>As a UX Designer my passion for UX stems from my love for behavioral psychology and delighting people through intentional designs. I take pride in harmonizing business goals and user needs through a strategic design approach that is rooted in research and powered by empathy.</p><p>I am currently shaping digital experiences and driving UX strategy for ultra-luxury brands at Valtech.</p><h2>Fun facts about me</h2><ul>{facts.map((fact, i) => <li key={fact}><span aria-hidden="true">{["❤️", "✨", "🌙", "🌍", "🗣️"][i]}</span>{fact}</li>)}</ul></div>
      </section>
      <section className={styles.strengths}>
        <h2>So what makes me an effective designer?</h2><div className={styles.strengthGrid}>{strengths.map(([title, text]) => <article key={title}><h3>{title}</h3>{text && <p>{text}</p>}</article>)}</div>
      </section>
      <section className={styles.leisure} aria-labelledby="spare-time">
        <h2 className={styles.location}>Vadodara, India</h2>
        <div className={styles.leisureCopy}><h2 id="spare-time">In my spare time,</h2><p>I&apos;m mostly doing something peaceful to recharge myself and keep my creative sharps. Being a tactile, hands-on person, I immerse myself in activities like cooking, DIYs, painting or tending to my plant babies.</p><p>Outside of home, I love hiking, kayaking or just strolling through history or art museums.</p><p>Photography and capturing moments during my travels has also become my favorite and a source of inspiration for me.</p></div>
        <div className={styles.gallery}>{lifestylePhotos.map(({ src, width, height }) => <Image key={src} src={src} alt="" width={width} height={height} />)}</div>
      </section>
      <section className={styles.photoGallery} aria-hidden="true">{travelPhotos.map(({ src, width, height }) => <Image key={src} src={src} alt="" width={width} height={height} />)}</section>
      <section className={styles.work}><div className={styles.workHeading}><h2>Past Work</h2><h2 className={styles.experienceTitle}>Experience</h2><a href={portfolioMedia.resumes.about} target="_blank" rel="noreferrer">Download My Resume <span aria-hidden="true">→</span></a></div><div className={styles.timeline}>{jobs.map(([title, company, description, date]) => <article className={styles.job} key={title}><div className={styles.jobCard}><h3>{title}</h3><p className={styles.company}>{company}</p><p>{description}</p></div><p className={styles.date}>{date}</p></article>)}</div></section>
    </main>
  );
}
