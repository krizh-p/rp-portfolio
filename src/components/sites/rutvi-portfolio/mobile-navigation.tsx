"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { portfolioMedia } from "@/components/sites/rutvi-portfolio/media";

const linkedIn = "https://www.linkedin.com/in/rutvi-purohit121/";
const email = "mailto:rish121yb@gmail.com?subject=Let's%20collaborate%20on%20something%20exciting!";

export function MobileNavigation() {
  function closeMenu(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element && event.target.closest("a")) {
      event.currentTarget.closest("details")?.removeAttribute("open");
    }
  }

  return (
    <details className="menu-details">
      <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
      <div className="mobile-nav" onClick={closeMenu}>
        <Link href="/">Work</Link>
        <Link href="/about">About</Link>
        <a href={email}>Contact</a>
        <a href={portfolioMedia.resumes.header} target="_blank" rel="noreferrer">Resume</a>
        <a href={linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </details>
  );
}
