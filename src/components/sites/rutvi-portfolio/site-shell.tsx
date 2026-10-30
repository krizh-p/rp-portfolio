import Image from "next/image";
import Link from "next/link";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";
import { MobileNavigation } from "./mobile-navigation";

const linkedIn = "https://www.linkedin.com/in/rutvi-purohit121/";
const email = "mailto:rish121yb@gmail.com?subject=Let's%20collaborate%20on%20something%20exciting!";

export function SiteHeader() {
  return (
    <>
      <div className="studio-strip" aria-label="Built on Wix Studio">Built on <strong>WIX STUDIO</strong></div>
      <header className="site-header">
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="nav-work">Work</Link>
          <Link href="/about">About</Link>
          <a href={email}>Contact</a>
          <Link href="/" className="brand-link" aria-label="Rutvi Purohit home">
            <Image src={portfolioMedia.logo} alt="Rutvi Purohit portfolio logo" width={42} height={42} priority />
          </Link>
          <a href={portfolioMedia.resumes.header} target="_blank" rel="noreferrer">Resume<span className="nav-arrow" aria-hidden="true">→</span></a>
          <a href={linkedIn} target="_blank" rel="noreferrer">LinkedIn<span className="nav-arrow" aria-hidden="true">→</span></a>
          <MobileNavigation />
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <h2>Let&apos;s build something <em>human</em></h2>
        <div className="footer-contact">
          <a href={email}>EMAIL ME AT RISH121YB@GMAIL.COM</a>
        </div>
      </div>
      <div className="footer-bottom">
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">HOME</Link>
          <Link href="/#selected-work">WORK</Link>
          <Link href="/about">ABOUT</Link>
          <a href={linkedIn} target="_blank" rel="noreferrer">LINKEDIN</a>
        </nav>
        <div className="footer-name">
          <Link href="/">RUTVI PUROHIT</Link>
          
        </div>
        <p className="copyright">© 2026 Rutvi Purohit.</p>
      </div>
    </footer>
  );
}
