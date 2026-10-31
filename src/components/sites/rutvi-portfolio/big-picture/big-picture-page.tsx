import Image from "next/image";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";
import styles from "./big-picture-page.module.css";
import { MotionVideo } from "@/components/sites/rutvi-portfolio/motion-video";

const images = portfolioMedia.cases.bigPicture;
const imageAlts = [
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
  "wireframes.png", "ui style guide.png", "Home Page - B.png", "Get Involved.png",
  "Home Page - B.png", "Home Page - B.png", "",
];
const imageSizes = [
  [946, 663], [1352, 594], [992, 1053], [1578, 598], [1578, 823], [1578, 785],
  [1578, 827], [1578, 785], [674, 408], [674, 408], [674, 408], [510, 309],
  [510, 309], [510, 309], [510, 309], [1669, 758], [1672, 510], [484, 483],
  [1025, 805], [891, 1183], [1655, 1427], [775, 525], [775, 649], [775, 525],
  [775, 525], [1514, 1451],
];
const imageDisplayWidths = [940.5, 787, 495, 787, 789, 789, 789, 789, 335, 335, 335, 335, 335, 335, 335, 787, 833, 242, 563, 713, 787, 620, 620, 620, 620, 1211];
function CaseImage({ index, className = "" }: { index: number; className?: string }) {
  const [width, height] = imageSizes[index];
  return (
    <figure className={`${styles.figure} ${className}`} style={{ maxWidth: imageDisplayWidths[index] }}>
      {index === 0 ? (
        <MotionVideo
          src={portfolioMedia.caseVideos.bigPicture}
          poster={images[index]}
          label="Big Picture Philadelphia prototype video"
          aspectRatio={`${width} / ${height}`}
          controls={false}
          autoPlay
          reducedMotionControl
        />
      ) : (
        <Image
          src={images[index]}
          alt={imageAlts[index]}
          width={width}
          height={height}
          sizes={`(max-width: 760px) 100vw, ${imageDisplayWidths[index]}px`}
        />
      )}
    </figure>
  );
}

export function BigPicturePage() {
  return <main id="main-content" data-page-theme="light" className={styles.page}>
    <header className={styles.hero}>
      <h1>Big Picture Philadelphia</h1>
      <p className={styles.subtitle}>Revitalizing school-community partnerships</p>
    </header>
    <section className={styles.details}>
      <div className={styles.detailsContent}>
        <div className={styles.facts}>
          <div><strong>My Role</strong><span>UX Design Lead<br/>UX Research</span></div>
          <div><strong>Tools</strong><span>Figma<br/>Miro<br/>SemRush</span></div>
          <div><strong>Timeline</strong><span>24 Weeks</span></div>
        </div>
        <div className={styles.summary}>
          <h2>Overview</h2>
          <p>Leading a team of three designers, I redesigned the BPP&apos;s website, overhauling the information architecture, resolving usability issues, and crafting a content strategy for improved clarity. My particular emphasis was on stakeholder management &amp; aligning our strategy and designs with the broader vision, ensuring a harmonious balance between the organization&apos;s objectives and the needs of its users.</p>
          <h2>Outcome</h2>
          <p>The overall revamped website design and IA resulted in a significant, 89% increase in usability and website engagement and a 30% increase in direct success rate for key task completion. We also proposed an AR based service extension for the schools to increase student learning outcomes.</p>
        </div>
      </div>
    </section>
    <CaseImage index={0} className={styles.heroVideo}/>
    <section className={styles.overview}>
      <p className={styles.eyebrow}>OVERVIEW</p>
      <h2>Reimagining mentor &amp; donor engagement flow at Philadelphia schools</h2>
    </section>
    <section className={styles.challenge}>
      <div>
        <h3>CHALLENGE</h3>
        <p>Big Picture Philadelphia (BPP) is a nonprofit educational organization dedicated to achieving educational equity and accessibility for more than 400 students in the Philadelphia area. Central to their approach is offering students real-world, project-based opportunities coupled with professional mentorship and hands-on experience.</p>
        <p>While the school offers a unique learning model through community engagement, the key touchpoints such as website &amp; intake forms proved to be major friction points. This was a serious problem as it directly impacted student learning outcomes &amp; missed opportunities of growth for students &amp; organization.</p>
      </div>
      <div>
        <h3>WHAT I DID</h3>
        <p>Leading a team of three designers, I set out to redesign the BPP&apos;s website, overhauling the information architecture, resolving usability issues, and crafting a content strategy for improved clarity. My particular emphasis was on stakeholder management &amp; aligning our strategy and designs with the broader vision, ensuring a harmonious balance between the organization&apos;s objectives and the needs of its users.</p>
        <p>The overall revamped website design and IA resulted in a significant, 89% increase in usability and website engagement. We also proposed an AR based service extension for the schools to increase student learning outcomes.</p>
        <a className={styles.button} href="#final-design">View final design</a>
      </div>
    </section>
    <section className={styles.process}>
      <p className={styles.eyebrow}>DESIGN PROCESS</p>
      <div className={styles.steps}>
        <article><span>01</span><h2>Problem Discovery</h2><p className={styles.method}>Current State Usability Test / Current State Analysis / Stakeholder Interview / User Journey / User Persona</p><p>New to the non-profit organization, I started off with learning the school&apos;s background and how it functions. This helped me ask the write questions for stakeholder interview and get insight on the purpose of the website &amp; its target users. Doing a content audit also highlighted what was working &amp; not working on the existing website.</p></article>
        <article><span>02</span><h2>Problem Definition</h2><p className={styles.method}>Content Strategy / Ideation methods / Competitive Analysis</p><p>After gathering insights from research synthesis and journey maps, the pain points &amp; issues such as confusing content &amp; areas of usability failures were clear to me. The next step was to hone in on the content strategy statement and collaborate with team on establishing clear design goals to guide us.</p></article>
        <article><span>03</span><h2>Solution Discovery &amp; Scoping</h2><p className={styles.method}>Scoping &amp; Strategy / Information Arch / Card Sorting / AB Testing</p><p>Guided by data &amp; research insights, I initiated salvaging the website and proposing the new information architecture &amp; content strategy. These elements combined guided the final design and set realistic benchmarks to assess project success.</p></article>
        <article><span>04</span><h2>Execution &amp; Testing</h2><p className={styles.method}>Wireframes / Visual &amp; Brand Strategy / Usability Testing</p><p>At this stage, it was time to bring the product to life. Based on all the insights and data gathered I began designing the new website in collaboration with the team. This stage was also the moment of truth as we ran usability tests and gathered stakeholder &amp; user feedback on the redesign.</p></article>
      </div>
    </section>
    <section className={`${styles.chapter} ${styles.discovery}`}>
      <h2>Diving deep into Big Picture Philadelphia</h2>
      <p>Stepping into the project, we first needed to understand the organization, how it works and what role the website plays for the org. Spearheading the research plan, I gathered detailed overview of the BPP&apos;s mission &amp; values. Performing a content audit for the website &amp; insights gathered from interviewing 3 stakeholders formed the foundation of our next steps.</p>
      <p className={styles.eyebrow}>PROBLEM DISCOVERY</p>
      <span className={styles.number}>01</span>
      <h3>USABILITY TEST - TREE TEST &amp; TASK ANALYSIS</h3>
      <p>To gain a comprehensive understanding of how users interact with Big Picture Philadelphia&apos;s website, we conducted a series of targeted usability tests with 3 users. Our focus was on identifying user pain points, assessing ease of use, and evaluating overall user experience. These findings laid the groundwork for our problem definition and subsequent redesign strategy, ensuring our solutions directly addressed real user needs and challenges.</p>
      <h3>Tree Test - Key Findings &amp; Takeaways</h3>
      <p>We began with a tree test to evaluate the website&apos;s information architecture. This method helped us understand how easily users could find specific information within the site&apos;s structure.</p>
      <CaseImage index={1}/>
      <h3>Usability Test &amp; User Interview- Key Findings &amp; Takeaways</h3>
      <p>Following the tree test, we conducted in-depth task analyses with three participants from our target user group: working professionals. This approach allowed us to observe real-time interactions and gather qualitative data on user behavior. Here are the main takeaways.</p>
      <div className={styles.metrics}>
        <article><strong>Only 30%</strong><p>of users were able to successfully complete &quot;make a donation&quot; &amp; &quot;become a mentor&quot; task</p></article>
        <p>Talking to users revealed that besides confusing IA, the information failed to build trust &amp; left them with lot of unanswered questions - eventually turning them away.</p>
        <article><strong>Clutter &amp; confusion</strong><p>and confusion terms were frequently used by users to describe their website experience</p></article>
        <p>The website seemed to have information overload where the user was unable to walk away with any meaningful information.</p>
        <CaseImage index={2}/>
      </div>
      <h3>Stakeholder Interviews - Key Findings &amp; Takeaways</h3>
      <p>Upon talking with the stakeholders - the Associate Director of Grants &amp; Strategic Communications and Director of School Systems and Supports, I was able to extrapolate the below insights and understand BPP&apos;s vision and purpose for the website.</p>
      <CaseImage index={3}/>
      <div className={styles.columns}>
        <article><h3>CHALLENGE</h3><p>Stakeholder interviews reflected that contrary to our assumptions, the website was not aimed at students or new parents, in fact it aimed to bring in more mentors &amp; attract new donors</p></article>
        <article><h3>SOLUTION</h3><p>With this new information, we quickly pivoted to the new target user &amp; reassessed our research insights from donor &amp; mentor perspective. It also helped that our user group were working professionals who fit donor &amp; mentor persona</p></article>
      </div>
      <h3>VISZUALIZING THE PAIN POINTS</h3>
      <p>In this phase, we synthesized our user research to form a comprehensive picture of the overall user experience. We created two user personas representing our target audience: Donors &amp; Mentors along with two user journeys to represent each user&apos;s experience. By mapping these journeys, we gained valuable insights into areas needing improvement and opportunities for enhancing the website&apos;s functionality for both donors and mentors.</p>
      <p className={styles.caption}>Persona - Generous George / Goal: to donate to a non-profit</p>
      <CaseImage index={4}/>
      <p className={styles.caption}>User Journey / Goal: to donate to a non-profit</p>
      <CaseImage index={5}/>
      <p className={styles.caption}>Persona - Activist Andy / Goal: To volunteer &amp; mentor students</p>
      <CaseImage index={6}/>
      <p className={styles.caption}>User Journey / Goal: to sign up as a mentor</p>
      <CaseImage index={7}/>
    </section>
    <section className={`${styles.chapter} ${styles.priorities}`}>
      <h2>Pinpointing priorities &amp; strategies</h2>
      <p>Having a deeper understanding of the organization&apos;s goals for the website, target audience and the pain points of user&apos;s journey through the website, we were able to hone down on the key problem areas and a design statement that guided the content strategy &amp; the new information architecture.</p>
      <p className={styles.eyebrow}>PROBLEM DISCOVERY</p><span className={styles.number}>02</span>
      <h3>SALVAGING THE WEBSITE - THE GOOD &amp; THE BAD</h3>
      <p>While research reflected that the website fails to cater to its target audience - Donors &amp; Mentors, we also felt that there were things that did work. The team &amp; I analyzed the existing site to identify effective and ineffective elements, ensuring efficient use of resources and providing research-backed justification for changes to clients.</p>
      <h3 className={styles.insightHeading}>THE GOOD</h3>
      <div className={styles.insightGrid}>
        <article><CaseImage index={8}/><div className={styles.insightCopy}><span>1.</span><p>Easy to find Donate button, just needs to be more prominent</p></div></article>
        <article><CaseImage index={9}/><div className={styles.insightCopy}><span>2.</span><p>Student&apos;s success stories highlighting the impact mentors have on their learning</p></div></article>
        <article><CaseImage index={10}/><div className={styles.insightCopy}><span>3.</span><p>Easy to find mission &amp; values of the organization</p></div></article>
      </div>
      <h3 className={`${styles.insightHeading} ${styles.improvementHeading}`}>AREAS OF IMPROVEMENT</h3>
      <div className={styles.insightGrid}>
        <article><CaseImage index={11}/><div className={styles.insightCopy}><span>1.</span><p>Need secured payments page with options.</p></div></article>
        <article><CaseImage index={12}/><div className={styles.insightCopy}><span>2.</span><p>Lacks clear instructions on mentor intake, process &amp; requirements</p></div></article>
        <article><CaseImage index={13}/><div className={styles.insightCopy}><span>3.</span><p>Very text heavy content with some sections failing to pass AAA accessibility standards such as contrast</p></div></article>
        <article><CaseImage index={14}/><div className={styles.insightCopy}><span>4.</span><p>Important info is hidden under smaller FAQ sections with unclear info</p></div></article>
      </div>
      <h3 className={styles.goalsHeading}>DESIGN GOALS</h3>
      <div className={styles.goals}><span>Preserving brand identity</span><span>Visually pleasing</span><span>Interactive &amp; easy flowing</span><span>Precise &amp; focused</span></div>
      <h3 className={styles.contentStrategyHeading}>CONTENT STRATEGY</h3>
      <p>Our content should help our users/customers understand the mission and values, find testimonials from previous volunteers and get latest updates on events happening from the organization community.</p>
    </section>
    <section className={`${styles.chapter} ${styles.blueprint}`}>
      <h2>Shaping the blueprint for redesign</h2>
      <p>We iterated on the new information architecture and content strategy through open card sorting exercises with 8 users followed by a follow up tree test for proposed IA. These revealed users&apos; mental schemas, informing our design decisions. The result is a proposed information architecture that aligns with user expectations and sets the foundation for an intuitive website structure.</p>
      <p className={styles.eyebrow}>SOLUTION DISCOVERY &amp; SCOPING</p><span className={styles.number}>03</span>
      <h3>OPEN CARD SORTING - TAKEAWAYS</h3>
      <p>Given the confusing navigation of the existing website, the team &amp; I performed an open card sort activity with 8 users to further define the pages into relatable buckets. I was able to extrapolate the key themes and patterns that helped define the new navigation for BPP.</p>
      <CaseImage index={15}/>
      <p className={styles.caption}>Key design decisions based on results</p>
      <div className={styles.decisionGrid}>
        <article><span>01</span><p>Dividing the Get To Know Us section in to two parts</p></article>
        <article><span>02</span><p>Keeping the Get Involved header same and creating a separate header for Contact Us.</p></article>
        <article><span>03</span><p>Removing the For Families header and placing the content under relevant sections.</p></article>
        <article><span>04</span><p>Creating a separate highlighted button for Donate Now.</p></article>
      </div>
      <h3>THE PROPOSED NAV BAR</h3>
      <CaseImage index={16}/>
      <h3>TREE TESTING THE UPDATED NAVIGATION</h3>
      <p>I decided to validate the new nav bar and information architecture through a tree test - excitingly, it turned out to be a great success! The new nav bar was 89.8% effective in wayfinding and resonating with users mental schemas.</p>
      <div className={styles.treeImages}><CaseImage index={17}/><CaseImage index={18}/></div>
    </section>
    <section className={`${styles.chapter} ${styles.execution}`}><h2>Bringing it all together</h2><p>The team &amp; I focused on combining all the information gathered into an effective redesign for the website. Our main focus was to keep the design clean &amp; easy to navigate while also keeping the branding alive with a little bit of playfulness of a student focused organization. Take a look at the final designs below.</p><p className={styles.eyebrow}>EXECUTION &amp; FEEDBACK</p><span className={styles.number}>04</span><h3>MID-FI WIREFRAMES</h3><CaseImage index={19}/><h3>REFRESHED STYLE GUIDE &amp; BRANDING</h3><p>The team &amp; I collaborated on the style guide and nailing down a refreshed look for the website. The existing website had an overpowered green UI which left the user overwhelmed and confused with content vs. CTA vs. key highlights. Our goal was to simplify the feel while keeping the elements unique and easily recognizable for users.</p><p>My main focus for this phase was to assure the styling adhered to our design goals and the existing branding of BPP while putting together a cohesive UI guide with the team.&nbsp;</p><CaseImage index={20}/></section>
    <section id="final-design" tabIndex={-1} className={`${styles.chapter} ${styles.finalDesign}`}>
      <h2>Final Design &amp; Decisions</h2>
      <div className={styles.columns}>
        <article><CaseImage index={24} /></article>
        <article><h3>INTERACTIVE HERO SECTION</h3><p>The initial website presented a slideshow of student experiences at BPP which gave users a good first insight on the organization. We decided to take it a step further from static pictures and leverage BPP&apos;s large library of student experience videos and highlight it as an interactive hero section.</p></article>
      </div>
      <div className={styles.columns}>
        <article><h3>CLEAR CTA WITH CONVERSATIONAL HEADINGS</h3><p>There was so much information to be shared that it ended up making the users overwhelmed and leaving the website without any actionable step. To simplify this, I incorporated question headings like &quot;How we spend your donations&quot; based on common questions users had. Pairing this with clear call-to-actions led to significant increase in user engagement &amp; trust.</p></article>
        <article><CaseImage index={21} /></article>
      </div>
      <div className={styles.columns}>
        <article><CaseImage index={22} /></article>
        <article><h3>GUIDING USERS WITH BITE-SIZED INFORMATION</h3><p>During task analysis &amp; usability testing, we observed how users often felt unsure of what was the best way for them to get involved with the org. To reduce this decision fatigue we decided to guide them through bite-sized overview for ways to get involved and easily picking the right fit for them. We also chose to highlight mentoring as that was one of the key needs for the org.</p></article>
      </div>
      <div className={styles.columns}>
        <article><h3>FUNCTIONAL FOOTER + SITE MAP</h3><p>Testing revealed users seeking a sitemap in the footer for quick navigation. As a result, we added a comprehensive sitemap to improve usability and also incorporated a newsletter signup to boost user retention.</p></article>
        <article><CaseImage index={23} /></article>
      </div>
      <CaseImage index={25} />
    </section>
    <section className={`${styles.chapter} ${styles.reflection}`}><h2>Reflecting on project outcomes</h2><p>This project was a great challenge that allowed me to expand my skills as a designer. Not only did I have to focus on UX &amp; the design but also hit the ground running with project managing skills and keeping the team on the same page.&nbsp;</p><span className={styles.number}>05</span><p className={styles.eyebrow}>DESIGNER LEARNINGS</p><div className={styles.reflectionGrid}><article><span>01</span><h3>Leading with empathy and adaptability</h3><p>This project taught me the value of empathetic leadership and flexible management. With my team juggling other jobs and stakeholders managing multiple responsibilities, I learned to create a supportive environment, prioritize effectively, and maintain clear communication. I found that adapting to team constraints while maintaining project quality was key to achieving successful outcomes.</p></article><article><span>02</span><h3>Efficiency in redesign&nbsp;</h3><p>I had to quickly learn the value of strategic resource allocation in redesign. By analyzing the existing website to identify effective elements, I focused our efforts on areas truly needing improvement. This approach allowed us to maintain consistency for current users while efficiently addressing pain points, proving that a targeted redesign can be more impactful and cost-effective than a complete overhaul.</p></article></div></section>
  </main>;
}
