import Image from "next/image";
import Link from "next/link";
import { portfolioMedia, publicAsset } from "@/components/sites/rutvi-portfolio/media";
import styles from "./about-page.module.css";

const facts = [
  { icon: "/sites/rutvi-portfolio/about/fact-india.svg", text: "I was born in India. Raised in Virginia. Lived in California & Washington D.C. and now in Bangalore, IN!" },
  { icon: "/sites/rutvi-portfolio/about/fact-languages.svg", text: "I'm fluent in three languages. Currently learning French." },
  { icon: "/sites/rutvi-portfolio/about/fact-ambivert.svg", text: "I'm an ambivert - I thrive both in solitude and company." },
  { icon: "/sites/rutvi-portfolio/about/fact-name.svg", text: "My name, Rutvi means season and speech." },
  { icon: "/sites/rutvi-portfolio/about/fact-sushi.svg", text: "I just recently discovered my love for vegan sushi!" },
] as const;
const jobs = [
  ["UX Designer", "Valtech, India", "Simplified luxury hospitality booking journeys for Kerzner's platforms. Elevated UX and IA for Bab Al Shams & Mazagan, optimizing customer discovery and premium storytelling to drive digital conversions.", "Nov 2025 - Present"],
  ["Product Designer", "ChopDawg, USA", "Solved complex product challenges across 10+ enterprise, commerce, AI, healthcare, SaaS and digital commerce products by leading end-to-end UX strategy from discovery through implementation.", "Feb 2023 - Nov 2025"],
  ["Project Manager", "Thomas Jefferson University, USA", "Designed & collaborated on metrics dashboard for C suite leaders to better analyze college operations. Collaborated with non-profits on website enhancements. Worked on VR based learning modules for nursing college", "Jan 2022 - Dec 2022"],
];
const timelineMarkerPath = "M179.569 85.804c-1.746-9.126-8.459-16.136-16.889-18.83 2.316-8.357-.005-17.681-6.868-24.111-7.374-6.908-17.921-8.538-26.761-4.993-3.003-8.906-11.117-15.723-21.252-16.741-9.437-.947-18.154 3.379-23.114 10.54-7.561-4.546-17.347-5.006-25.542-.377S46.48 44.431 46.747 53.097c-8.831.629-17.019 5.851-20.88 14.309-3.863 8.457-2.394 17.94 2.998 24.843-6.765 5.563-10.267 14.502-8.339 23.594 1.926 9.094 8.78 15.972 17.264 18.504-2.149 8.4.357 17.677 7.347 23.977s16.639 7.976 25.011 5.182c3.281 8.066 10.848 14.184 20.264 15.311 9.413 1.127 18.219-3.031 23.323-10.095 7.471 4.689 17.243 5.337 25.53.869 8.285-4.47 12.923-12.893 12.831-21.563 8.843-.458 17.134-5.523 21.165-13.904 4.031-8.38 2.752-17.889-2.502-24.892 6.875-5.432 10.556-14.3 8.81-23.428";
const mobileJobs = [
  ["UX/UI Designer", "ChopDawg", "Creating some amazing and fun digital products for clients across the globe & from various industries like e-commerce, marketplace, health tech, & non-profits"],
  ["Lead Designer", "Big Picture Philadelphia", "Led the redesign of organization’s website with a revamped information architecture & content strategy. Designed an innovative AR based learning app for students."],
  ["UX/UI Designer", "TennisFit", "Championed the branding and e-commerce website design that led to expansion of client base & increased client engagement"],
];
const strengthIcons = {
  diverse: {
    viewBox: "32 32 136 136",
    path: "M66 32c18.778 0 34 15.222 34 34 0-18.778 15.222-34 34-34s34 15.222 34 34-15.222 34-34 34c18.778 0 34 15.222 34 34s-15.222 34-34 34-34-15.222-34-34c0 18.778-15.222 34-34 34s-34-15.222-34-34 15.222-34 34-34C47.222 100 32 84.778 32 66s15.222-34 34-34Z",
  },
  research: {
    viewBox: "37 20.283 126 160",
    path: "M130.308 67.463a32.451 32.451 0 0 0-13.622 2.986V20.283c-44.01 0-79.686 35.817-79.686 80s35.677 80 79.686 80v-50.166a32.451 32.451 0 0 0 13.622 2.986c18.055 0 32.692-14.694 32.692-32.821s-14.637-32.819-32.692-32.819z",
  },
  goals: {
    viewBox: "25 28 150 144",
    path: "M126.188 73.902V28C103.96 28 84.98 47.044 77.375 73.902V28C48.449 28 25 60.235 25 100s23.449 72 52.375 72v-45.902C84.98 152.956 103.96 172 126.188 172v-45.902C133.793 152.956 152.773 172 175 172V28c-22.227 0-41.207 19.044-48.812 45.902z",
  },
  adaptive: {
    viewBox: "26.5 26.206 147 147",
    path: "M125.167 26.206H26.5v98.666h48.333v48.334H173.5V74.539h-48.333V26.206z",
  },
} as const;
const strengths = [
  { icon: "diverse", title: "Diverse Experience", text: "Before UX, I was helping people as a kinesiologist, working with people from all walks of life. The combined experience as a kinesiologist and UX Designer allows me to bring analytical skills combined with empathetic approach towards the users" },
  { icon: "research", title: "Psychology & Research", text: "Given my strong grasp of human psychology and meticulous research, diving into the minds of my audience feels like second nature to me . This allows me to craft products that not only make sense intuitively but also touch people on an emotional level." },
  { icon: "goals", title: "Balancing Business Goals & User Advocacy", text: "Working in start up environment, wearing multiple hats has grown my understanding of how interdependent businesses are to its users and vice versa. Building on these experiences has grown my business acumen, empowering my designs to be more viable with measurable growth." },
  { icon: "adaptive", title: "Adaptive + Resourceful + Thrifty", text: "Growing up across countries and multiple cities has fortified my ability to overcome & thrive in any situation. This bleeds into my work as a resourceful designer who is able to extrapolate key information and create opportunities of growth while working with constraints at hand." },
] as const;
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
        <div className={styles.introCopy}><h1 id="about-title">About me</h1><p className={styles.name}>I&apos;m Rutvi!</p><p className={styles.pronunciation}>/roo • T • wee</p><p className={styles.role}>UX Designer. Currently @ Valtech</p><Link href="/" className={styles.workLink}>See my work <span aria-hidden="true">→</span></Link></div>
        <div className={styles.portraitTrack}>
          <div className={styles.portraitSticky}>
            <Image className={styles.portrait} src={publicAsset(portfolioMedia.about.portrait)} alt="" width={680} height={906} priority />
          </div>
        </div>
      </section>
      <section className={styles.bio}>
        <div className={styles.bioCopy}>
          <p>As a UX Designer my passion for UX stems from my love for behavioral psychology and delighting people through intentional designs. I take pride in harmonizing business goals and user needs through a strategic design approach that is rooted in research and powered by empathy.</p>
          <p>I am currently shaping digital experiences and driving UX strategy for ultra-luxury brands at Valtech.</p>
          <h2>Fun facts about me</h2>
          <ul>{facts.map(({ icon, text }) => <li key={text}><Image src={publicAsset(icon)} alt="" aria-hidden="true" width={36} height={36} />{text}</li>)}</ul>
        </div>
      </section>
      <section className={styles.strengths}>
        <h2>So what makes me an effective designer?</h2>
        <div className={styles.strengthGrid}>
          {strengths.map(({ icon, title, text }) => (
            <article className={styles.strengthCard} key={title}>
              <h3 data-icon={icon}>
                <svg className={styles.strengthIcon} data-icon={icon} viewBox={strengthIcons[icon].viewBox} aria-hidden="true">
                  <path d={strengthIcons[icon].path} />
                </svg>
                <span>{title}</span>
              </h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.leisure} aria-labelledby="spare-time">
        <h2 className={styles.location}>Vadodara, India</h2>
        <div className={styles.leisureCopy}>
          <h2 id="spare-time">In my spare time,</h2>
          <Image className={styles.leisureIcon} src={publicAsset("/sites/rutvi-portfolio/about/leisure-icon-plant.svg")} alt="" aria-hidden="true" width={57} height={57} />
          <p>I&apos;m mostly doing something peaceful to recharge myself and keep my creative sharps. Being a tactile, hands-on person, I immerse myself in activities like cooking, DIYs, painting or tending to my plant babies.</p>
          <Image className={styles.leisureIcon} src={publicAsset("/sites/rutvi-portfolio/about/leisure-icon-mountain.svg")} alt="" aria-hidden="true" width={40} height={40} />
          <p>Outside of home, I love hiking, kayaking or just strolling through history or art museums.</p>
          <Image className={styles.leisureIcon} src={publicAsset("/sites/rutvi-portfolio/about/leisure-icon-camera.svg")} alt="" aria-hidden="true" width={33} height={33} />
          <p>Photography and capturing moments during my travels has also become my favorite and a source of inspiration for me.</p>
        </div>
        <div className={styles.gallery}>{lifestylePhotos.map(({ src, width, height }) => <Image key={src} src={publicAsset(src)} alt="" width={width} height={height} />)}</div>
      </section>
      <section className={styles.photoGallery} aria-hidden="true">{travelPhotos.map(({ src, width, height }) => <Image key={src} src={publicAsset(src)} alt="" width={width} height={height} />)}</section>
      <section className={styles.work}>
        <div className={styles.workHeading}>
          <h2>Past Work</h2>
          <h2 className={styles.experienceTitle}>Experience</h2>
          <a href={publicAsset(portfolioMedia.resumes.about)} target="_blank" rel="noreferrer">Download My Resume <svg viewBox="0 0 200 200" aria-hidden="true"><path fill="currentColor" d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z" /></svg></a>
        </div>
        <div className={`${styles.timeline} ${styles.desktopTimeline}`}>
          {jobs.map(([title, company, description, date]) => (
            <article className={styles.job} key={title}>
              <div className={styles.jobCard}>
                <h3>{title}</h3>
                <p className={styles.company}>{company}</p>
                <p>{description}</p>
              </div>
              <span className={styles.timelineMarker} aria-hidden="true">
                <svg viewBox="20 21 160 158.001"><path d={timelineMarkerPath} /></svg>
              </span>
              <p className={styles.date}>{date}</p>
            </article>
          ))}
        </div>
        <div className={`${styles.timeline} ${styles.mobileTimeline}`}>
          {mobileJobs.map(([title, company, description]) => <article className={styles.job} key={`${title}-${company}`}><div className={styles.jobCard}><h3>{title}</h3><p className={styles.company}>{company}</p><p>{description}</p></div></article>)}
        </div>
      </section>
    </main>
  );
}
