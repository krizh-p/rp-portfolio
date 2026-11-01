import Image from "next/image";
import Link from "next/link";
import { portfolioMedia, publicAsset } from "@/components/sites/rutvi-portfolio/media";
import { MobileNavigation } from "./mobile-navigation";

const linkedIn = "https://www.linkedin.com/in/rutvi-purohit121/";
const email = "mailto:rish121yb@gmail.com?subject=Let's%20collaborate%20on%20something%20exciting!";

export function SiteHeader() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" className="nav-work">Work</Link>
        <Link href="/about">About</Link>
        <a href={email}>Contact</a>
        <Link href="/" className="brand-link" aria-label="Rutvi Purohit home">
          <Image src={publicAsset(portfolioMedia.logo)} alt="Rutvi Purohit portfolio logo" width={42} height={42} priority />
        </Link>
        <a href={publicAsset(portfolioMedia.resumes.header)} target="_blank" rel="noreferrer">Resume<span className="nav-arrow" aria-hidden="true">→</span></a>
        <a href={linkedIn} target="_blank" rel="noreferrer">LinkedIn<span className="nav-arrow" aria-hidden="true">→</span></a>
        <MobileNavigation />
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-wave" aria-hidden="true" />
      <div className="footer-main">
        <h2>Let&apos;s build something<br /><em>human</em></h2>
        <div className="footer-contact">
          <a href={email}>EMAIL ME AT RISH121YB@GMAIL.COM <svg className="footer-arrow" viewBox="0 0 200 200" aria-hidden="true"><path fill="currentColor" d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z" /></svg></a>
        </div>
      </div>
      <div className="footer-bottom">
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">HOME</Link>
          <Link href="/#selected-work">WORK</Link>
          <Link href="/about">ABOUT</Link>
          <a href={linkedIn} target="_blank" rel="noreferrer">LINKEDIN</a>
        </nav>
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Rutvi Purohit home">
            <Image src={publicAsset(portfolioMedia.logo)} alt="" width={55} height={55} />
          </Link>
          <Link href="/" className="footer-name">RUTVI PUROHIT</Link>
          <p className="copyright">© 2026 Rutvi Purohit.</p>
        </div>
      </div>
    </footer>
  );
}
