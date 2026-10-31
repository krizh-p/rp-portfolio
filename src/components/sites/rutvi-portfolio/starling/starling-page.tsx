import Image from "next/image";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";
import styles from "./starling-page.module.css";
import { MotionVideo } from "@/components/sites/rutvi-portfolio/motion-video";
const images = portfolioMedia.cases.starling;
const dimensions = [[1030,596],[1620,703],[373,248],[373,248],[373,248],[373,248],[924,543],[1006,665],[276,598],[276,482],[263,568],[263,568],[276,598],[144,586],[775,525],[781,250],[779,257],[769,251],[504,320],[503,320],[1029,334],[2903,336],[1010,484]] as const;
function Figure({ index, className = "" }: { index: number; className?: string }) {
  const [width, height] = dimensions[index];
  return (
    <figure className={`${styles.figure} ${className}`}>
      {index === 0 ? (
        <MotionVideo
          src={portfolioMedia.caseVideos.starling}
          poster={images[index]}
          label="Starling Assist showreel"
          aspectRatio={`${width} / ${height}`}
          controls={false}
          autoPlay
          reducedMotionControl
        />
      ) : (
        <Image src={images[index]} alt="" width={width} height={height} sizes={index === 21 ? "(max-width: 760px) 100vw, 2309px" : "(max-width: 760px) 100vw, 1100px"} />
      )}
    </figure>
  );
}
function ChapterRail({ number, label }: { number: string; label: string }) {
  return <aside className={styles.chapterRail}><span>{number}</span><p>{label}</p></aside>;
}

const process = [
  ["01", "Problem Discovery", "Desk Research / User Surveys / Interviews / Current State Analysis / Empathy Maps", "Forming the foundation of defining the right problem, I focused on learning as much as I can about the different facets of the problem by discovering the Whats, Whys & Whos. I was also looking to inform my big picture view on the space as well as looking for any co-dependent areas that could impact the problem."],
  ["02", "Problem Definition", "Problem Statement / Ideation methods", "Equipped with the answers of my Whats & Whys and an arsenal of knowledge about the problem space from several aspects, I began untangling the complexities down to the root cause of the issue. This became my lighthouse in keeping the solution process focused and clear."],
  ["03", "Solution Discovery & Scoping", "Storyboarding / Scoping & Strategy / Information Arch / Success Metrics (KPIs & KEIs)", "Guided by the clear vision of the problem at hand, I began reimagining the experience to be empathetic & delightful for users. My goal was to ideate a solution that is feasible, viable and impactful enough to move the needle. I was focused on answering the “What ifs” and setting realistic objectives & vision for the product to be successful."],
  ["04", "Execution & Testing", "Wireframes / Visual & Brand Strategy / Prototyping / User Simulation / Usability Testing", "At this stage, it was time to bring the product to life. Based on all the insights and data gathered I began designing the mobile app for Starling Assist as well as non-gui aspects of the product. This stage was also the moment of truth as I began testing the product in the market and gathering feedback from parents, caregivers & stakeholders."]
];
const stories = [
  ["01", "Allows parents greater flexibility", "to move around and attend to various needs - such as freshening up, getting food, or handling other tasks - with less restriction"],
  ["02", "Parent Notes", "or parent preferences prior to session start were crucial in having clear expectations & keeping the assistants informed"],
  ["03", "Movement flexibility for assistants", "proved to be important to better engage kids - this can be challenging with luggage"],
  ["04", "Future opportunities", "of leveraging partnerships with airports for stroller, carts and toys can further improve the user experience"]
];
const learnings = [
  ["01", "Staying rooted in reality", "As a designer we can often feel like our solutions should be a catch all ideal take but that is not always feasible. Through this project I learned that sometimes what matters is where we can move the needle even at the slightest - that is enough for start!"],
  ["02", "Learning backend & dev planning", "In order to maintain product's feasibility, I had to quickly educate myself on different backend functionalities & tools such as APIs, SDKs, & database modeling. While this was challenging, it was fun and made it easier to scope strategically & plan for development."],
  ["03", "Navigating ambiguity", "Working in such a broad problem space with so many uncertainties has honed in my ability to navigate ambiguity through strategy of prioritization and being adaptable to situations as they evolve."],
  ["04", "Designing beyond screens", "Due to the service nature of the app, I had to keep the big picture of the users experience in mind at all steps. The overlap of digital, spatial and service design were great learnings on complex design solutions."]
];
const items = (data: string[][]) => data.map(([number, title, copy]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p></article>);
export function StarlingPage() {
  return <main id="main-content" data-page-theme="light" className={styles.page}>
    <header className={styles.hero}><p className={styles.brand}>Starling Assist</p><h1>Empowering parents to travel confidently &amp; efficiently</h1>
      <div className={styles.meta}><div><b>My Role</b><span>Product Strategy<br/>UX Design<br/>UI &amp; Branding</span></div><div><b>Tools</b><span>Figma<br/>Miro<br/>Qualtrics</span></div><div><b>Timeline</b><span>24 Weeks</span></div></div>
      <section className={styles.overview}><div><h2>Overview</h2><p>Starling Assist is an in-airport concierge assistance that aims to help parents take a break, navigate easier at the airport and bring focus back to the family. It is powered by a mobile app and a sleek, NFC based safety band to assure parents throughout their journey. As a solo designer on this masters thesis project, I spearheaded both the strategic direction and product design.</p></div><div><h2>Outcome</h2><ul><li>Humanized airport experience for 62% of millennial parents travelling with kids 5 years or younger.</li><li>Significantly decreased parents anxiety about handling kids at the airport.</li><li>92% parents felt more confident and assured in their travel due to Starling Assist.</li><li>Instead of expected 1%, 4% of website visitors signed up for early access to service.</li></ul></div></section><Figure index={0}/>
    </header>
    <section className={styles.intro}><p className={styles.eyebrow}>OVERVIEW</p><h2>Goodbye to airport hassles and hello to stress-free family travel! 🌟✈️</h2><div className={styles.split}><article><h3>CHALLENGE</h3><blockquote>“Traveling solo with kids is really intimidating &amp; anxiety provoking for me, I&apos;m never doing that again!” - A Parent</blockquote><p>One of the largest group of audience airports cater to are family travelers. Despite this, parents are also the largest group to have a traumatic &amp; dreaded experience at the airports. I was curious to explore this discrepancy and figure out the hows, whats &amp; whys. With more families planning to travel frequently, it presents a huge opportunity of growth for airports as well. The challenge was to identify why parents tend to have such an anxious experience and how I can offer a solution that is viable for airports and desirable for parents.</p></article><article><h3>WHAT I DID</h3><p>I spearheaded this challenge as a part of my masters thesis project over a timeline of 24 weeks consisting of thorough user research, product discovery and product development.</p><p>Navigating the ambiguity, I employed rigorous design processes to deeply understand user experiences and pinpoint key opportunities. Through extensive research, ideation and iterative prototyping, I crafted Starling Assist - a scalable, human-centered solution revolutionizing the airport ordeal for families, especially solo parents with children. This innovative design garnered high praise for empathetically enhancing one of life&#39;s most stressful journeys within the complex airport environment.</p><a href="#final-design">View final design</a></article></div></section>
    <section className={styles.process} data-no-scroll-reveal><p className={styles.eyebrow}>DESIGN PROCESS</p>{process.map(([number,title,methods,copy],index)=><article key={number} data-scroll-reveal-item><strong>{number}</strong><div><h2><a href={`#${["problem-discovery","problem-definition","solution-discovery","execution-testing"][index]}`}>{title}</a></h2><p>{methods}</p><p>{copy}</p></div></article>)}</section>
    <Figure index={1} className={styles.processLeadFigure}/>
    <section id="problem-discovery" className={`${styles.content} ${styles.problemDiscovery}`}>
      <aside className={styles.chapterRail}><span>01</span><p>PROBLEM DISCOVERY</p></aside>
      <div className={styles.chapterContent}>
      <h2>The who, what, &amp; why</h2>
      <p>I started off with desk research and exploring the inner dynamic of the airports and what are the existing services provided to travelers. I explored several social media forums, articles and blogs to gain a perspective on parents journey and current state - what is working vs. what is not. This formed the foundation of forming a big picture and understanding the various factors I was working with.</p>
      <h3>PARENT CURRENT STATE AT THE AIRPORT</h3>
      <p>To further understand why the experience is so intimidating I looked at several different parent travel forums, articles &amp; blogs that shared some of the experiences parents continue to have. Here are the key findings</p>
      <div className={styles.quotes}>
        {([
          { index: 2, label: "It's a one-man army situation", quote: "“We were standing in line in security, on the verge of tears because Wyatt was screaming & James was exhausted!”" },
          { index: 3, label: "Lack of empathy from staff", quote: "“I was so upset and shocked! So rude, insensitive and inhuman!! ”" },
          { index: 4, label: "Emotionally & physically draining", quote: "“It was disastrous and involved several meltdowns from both children & me. The long hours on first flight were enough to completely drain the life out of me but the stop at Philadelphia airport really did me in”" },
          { index: 5, label: "Existing services are ineffective", quote: "“I had to walk for what felt like several miles, with a crying infant in my arms, to get her pushchair from baggage reclaim...I sobbed for the whole two hours car ride home.”" },
        ] as const).map(({ index, label, quote }) => (
          <article key={label} className={styles.quoteCard}>
            <Figure index={index}/>
            <div className={styles.quoteCaption}><b>{label}</b><p>{quote}</p></div>
          </article>
        ))}
      </div>
      <h3>USER RESEARCH - FINDINGS &amp; INSIGHTS</h3>
      <p>To get a better understanding on parents behaviors on airport &amp; the challenges faced, I conducted 2 semi- structured interviews with parents who had recently traveled solo with their children &amp; compared that to parents travelling together. Additionally, 50+ individuals completed the survey. Here are the key takeaways.</p>
      <div className={styles.researchGrid}>
        <blockquote className={styles.researchQuote}>“Why does it have to be so hard, Why are there no service available when it comes to the tiniest humans &amp; their caregivers”<cite>- one of the parents during interview</cite></blockquote>
        <div className={styles.metrics}>
          <div><b>Top 3 stressors</b><p>for parents at the airport were handling luggage, cranky kids &amp; security checks</p><small>Prioritizing children&apos;s happiness above all can strain parents&apos; mental and physical health, potentially impacting tasks such as navigating immigration checks.</small></div>
          <div><b>69%</b><p>of parents felt stressed more than usual when travelling alone with children</p><small>A major reason for this is due to the overwhelming amount of tasks a parents takes on single handedly amidst the 15+ hours of travel. Simple tasks like going to the washroom becomes a mammoth task requiring mental planning &amp; preparation</small></div>
          <div><b>60%</b><p>of parents do not find airport play areas to be helpful</p><small>This is primarily because there are often just 1 - 2 play areas on the entire airport. Which means if its not close to the boarding gates, its never used.</small></div>
        </div>
      </div>
      <h3>VISZUALIZING THE PAIN POINTS</h3>
      <p>I knew the numbers alone feel dry &amp; ineffective in building empathy or conveying the challenges parents face. So, to make the concepts more relatable to stakeholders, I combined key takeaways from user research and developed a persona for &quot;Struggling Sara&quot; and an empathy map reflecting her journey. This storytelling approach helped bring the data points to life in a meaningful way.</p>
      <p className={styles.figureCaption}>Persona - Struggling Sara</p>
      <Figure index={6}/>
      <p className={styles.figureCaption}>Empathy map takeaways</p>
      <Figure index={7}/>
      </div>
    </section>
    <section id="problem-definition" className={`${styles.dark} ${styles.chapter} ${styles.problemDefinition}`}>
      <ChapterRail number="02" label="PROBLEM DEFINITION"/>
      <div className={styles.chapterContent}>
        <h2>Honing down on the problem</h2>
        <p>Honing down on the pain points, I established my problem statement as the guiding statement towards the solution. On the business front, I expanded my perspective to the big picture and why airports should even look out for family travelers.</p>
        <h3>PROBLEM STATEMENT</h3>
        <blockquote>Layovers leave solo travelling parents frazzled - torn between seizing precious downtime and remaining hyper-vigilant over kids and baggage. How can we provide parents with peaceful respite during layovers?</blockquote>
        <h3>WHY SHOULD AIRPORTS CARE? -<br/>THE BIG PICTURE</h3>
        <p>On the flip side of the coin, it was important to understand how unhappy family travelers affect airports &amp; its business goals.</p>
        <p>I found that public airports are held accountable by ratings &amp; a good reputation can help them achieve a global benchmark of Airport Excellence such as <a href="https://skytraxratings.com/about">Skytrax</a>. An example of this is the Changi Airport in Singapore. The quality of airport, ratings &amp; reputation directly impact the traveler flow as well as the revenue an airport can generate</p>
        <div className={`${styles.split} ${styles.airportCards}`}>
          <article><Image src="/sites/rutvi-portfolio/starling/challenge.svg" alt="" width={40} height={40} sizes="40px"/><h3>CHALLENGE</h3><p>50% of airport revenue comes from retail &amp; airport service. With family travel making up for 376 million trips globally, unhappy families could significantly impact an airport&apos;s reputation and its revenue generation.</p></article>
          <article><Image src="/sites/rutvi-portfolio/starling/opportunity.svg" alt="" width={40} height={40} sizes="40px"/><h3>OPPORTUNITY</h3><p>Airport success relies on revenue, ratings, and catering to family travelers. To enhance passenger trust, loyalty, and overall airport reputation, it&apos;s crucial for airports to better assist solo parents during layovers, ultimately boosting revenue.</p></article>
        </div>
      </div>
    </section>
    <section id="solution-discovery" className={`${styles.content} ${styles.chapter} ${styles.solutionDiscovery}`}>
      <ChapterRail number="03" label="SOLUTION DISCOVERY & SCOPING"/>
      <div className={styles.chapterContent}>
        <h2>Scoping &amp; Strategizing</h2>
        <p>My goal was to ask &quot;Is this the right It?&quot; at every step of brainstorming and strategy, while exploring the varied range of solutions and its effectiveness in moving the needle. I believe this is the most important step that requires careful consideration &amp; plays a key factor in determining allocation of resources and feasibility of the solution.</p>
        <h3>Designing for trust was the biggest challenge</h3>
        <p>As I began ideating and reflecting back on the key issues of users from research, I soon realized any solution will require a mechanism for gaining trust - a parent&apos;s trust! Getting some creative brains together, I decided to do multiple brainstorming session.</p>
        <p>Unfortunately however, none of the brainstorming ideas were the way to go. They did however spark creativity and inspiration that led me to the final solution.</p>
        <h3>Visualizing the conception of solution</h3>
        <p>Being a visual person, I find that storyboarding the solution is one of the most helpful methods to play out how the solution functions. I also find it helpful for figuring out the needs &amp; considerations to keep in mind while designing</p>
        <p>Take a look at the journey of Struggling Sara, a mom, planning to travel solo with her child. Her airport journey becomes relaxed with the help of an expert assistant that allows her to take a break without having to worry about her child.</p>
        <div className={styles.screens}>{[15,16,17].map(index=><Figure key={index} index={index} className={styles.storyboardFigure}/>)}</div>
        <h3>Scoping the key features &amp; service flow</h3>
        <p>Upon validating the solution concept with the peers through storyboard, I began scoping out the details further. Specifically, I utilized the MoSCoW Method for features. I also began determining the key experience indicators using the HEART Model. This proved to be critical in understanding product&apos;s impact.</p>
        <div className={styles.flowPair}><Figure index={18} className={styles.flowFigure}/><Figure index={19} className={styles.flowFigure}/><p>Moscow method</p><p>Information Architecture for the app</p></div>
        <Figure index={20} className={styles.blueprintFigure}/><p className={styles.blueprintCaption}>Service Blueprint</p>
        <Figure index={21} className={styles.wireframeFigure}/><p className={styles.wireframeCaption}>Mid-fi wireframes</p>
      </div>
    </section>
    <section id="execution-testing" className={`${styles.dark} ${styles.chapter} ${styles.executionTesting}`}>
      <ChapterRail number="04" label="EXECUTION & TESTING"/>
      <div className={styles.chapterContent}>
        <h2>Early testing = reduced risk, higher success rate</h2>
        <p>As I approached towards final product design, I decided to put it to test early and get real feedback from parents &amp; childcare assistants by performing a service simulation and mechanical turk. The results provided valuable feedback that enhanced and improved the MVP of Startling Assist. Upon feedback from the testing brought the product to life with UI &amp; branding, turning wireframes into hi-fidelity prototypes.</p>
        <div className={`${styles.split} ${styles.testingCards}`}>
          <article><h3>CHALLENGE</h3><p>How do you test for an in-airport service without being in an airport?</p><p>An accurate testing environment is key to producing accurate &amp; reliable results but due to security reasons, it was impossible for me to run this simulation at the airport.</p></article>
          <article><h3>SOLTUTION</h3><p>The crowds of the mall sparked an idea! Mimicking the airport environment at a super mall setting was the closest way to observe and get feedback on effectiveness of Starling Assist for parents. This resulted in valuable insights that would further enhance the service.</p></article>
        </div>
        <h3>SERVICE SIMULATION</h3>
        <p>In order to test early and get practical insights from the in-airport interaction between parents and assistant, I ran a simulation with 3 parents with children and experienced childcare assistant at a local mall. The parents were asked to drop their children with assistants with the ability to check in through text and even extend the service up to 10 mins if needed.</p>
        <p aria-hidden="true">​</p>
        <p>Hypothesis: The service will receive a minimum of 3.5 NPS rating from participants. Additionally, the participant will wear the safety bands for the entire session.</p>
        <h3>RESULTS</h3>
        <div className={styles.metrics}><div><b>5/5 Net Promotor Score</b><p>from happy parents &amp; assistants</p><small>Despite the short time frame of the service, parents felt assured &amp; confident when taking a break away from their child. Parents also mentioned increased efficiency in task completions due to reduced childcare stress.</small></div><div><b>2/3 parents opted-in</b><p>to extend their Starling sessions</p><small>Parent exit interviews showed constant communication during sessions was crucial for reassurance. &quot;I could work guilt-free, knowing my son was cared for and happy.&quot;</small></div></div>
        <h3>TAKEAWAYS</h3>
        <div className={styles.learningGrid}>{items(stories)}</div>
        <blockquote>&quot;It was comforting &amp; allowed me to relax. Having touchpoints with the assistant through texts &amp; photos was assuring.&quot;<span>- Isha (parent)</span></blockquote>
        <Figure index={22}/>
      </div>
    </section>
    <section id="final-design" tabIndex={-1} className={`${styles.content} ${styles.finalDesignTitle}`}><h2>Final Design &amp; Decisions</h2></section>
    <section className={`${styles.content} ${styles.finalDesignContent}`}>
      <div className={styles.dynamicDashboard}>
        <div className={styles.dynamicVisual}>
          <div className={styles.dynamicCaptions}><p>Initial onboarding screen with no bookings</p><p>Pre-trip screen with upcoming session</p><p>In-session screen</p></div>
          <Figure index={14}/>
        </div>
        <div className={styles.dynamicCopy}><h3>DYNAMIC DASHBOARD</h3><p>The home screen dynamically changes depending on where the user is in their journey. This helps simplify the app and avoid overwhelming user with multiple flows &amp; navigation challenges.</p></div>
      </div>
      <div className={styles.personalizedRow}>
        <div className={styles.personalizedCopy}><h3>PERSONALIZED SESSIONS</h3><p>Research reflected that parents often doubt generic services can meet their children&apos;s needs. We solve this by pairing families with assistants who have relevant experience and interests, ensuring a better connection with kids.</p></div>
        <div className={styles.profileVisualOne}><p>Connecting parents with assistants suitable to their needs.</p><Figure index={8}/></div>
        <div className={styles.profileVisualTwo}><p>Assistants receive ‘Parent notes’ with special considerations &amp; preferences for the session.</p><Figure index={9}/></div>
      </div>
      <div className={styles.earlyInteractionRow}>
        <Figure index={10} className={styles.earlyFigureOne}/>
        <Figure index={11} className={styles.earlyFigureTwo}/>
        <p className={styles.ratingCaption}>Assistants maintain a 4 star rating - assuring a high quality service</p>
        <div className={styles.earlyInteractionCopy}><h3>EARLY INTERACTION</h3><p className={styles.earlyLead}>Building trust with detailed assistant profiles</p><p className={styles.earlyDetail}>Experience summary: Each assistant&apos;s profile shows their skills and past work.</p><p className={styles.earlyDetail}>Parent reviews: Feedback from other families builds trust and keeps assistants accountable.</p><p className={styles.earlyDetail}>In-app chat: Parents/assistants can talk directly to build rapport &amp; get acquainted before sessions.</p></div>
      </div>
      <div className={styles.safetyBandsRow}>
        <div className={styles.safetyBandsCopy}><h3>SAFETY BANDS FOR ADVANCED SECURITY</h3><p>The safety band serves to verify parent - assistant identities at the airport through unique RFID sensors that are linked to their profiles. The bands also enable iBeacon based location tracking inside airports for increased transparency &amp; safety.</p></div>
        <Figure index={12} className={styles.safetyFigureOne}/>
        <p className={styles.safetyCaption}>safe zone keeps everyone within a safe/accessible distance</p>
        <Figure index={13} className={styles.safetyFigureTwo}/>
      </div>
    </section>
    <section className={`${styles.dark} ${styles.chapter} ${styles.outcomesReflection}`}>
      <ChapterRail number="05" label="DESIGNER LEARNINGS"/>
      <div className={styles.chapterContent}><h2>Reflecting on project outcomes</h2><p>Airports have always been an intriguing design study so the project was a fun challenge while helping me grow as a designer &amp; strategist. I gained insight on the nuances that must be dealt with when designing in a restricted landscape such as airports. Here&apos;s some of my key learnings.</p><div className={styles.learningGrid}>{items(learnings)}</div></div>
    </section>
  </main>;
}
