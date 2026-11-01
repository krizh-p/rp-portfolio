"use client";

import Link from "next/link";
import type { KeyboardEvent, MouseEvent } from "react";
import { portfolioMedia, publicAsset } from "@/components/sites/rutvi-portfolio/media";

const linkedIn = "https://www.linkedin.com/in/rutvi-purohit121/";
const email = "mailto:rish121yb@gmail.com?subject=Let's%20collaborate%20on%20something%20exciting!";

export function MobileNavigation() {
  function closeMenu(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element && event.target.closest("a")) {
      const menu = event.currentTarget.closest("details");
      menu?.removeAttribute("open");
      menu?.querySelector<HTMLElement>("summary")?.focus();
    }
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
    const menu = event.currentTarget;
    if (event.key === "Escape" && menu.open) {
      event.preventDefault();
      menu.open = false;
      menu.querySelector<HTMLElement>("summary")?.focus();
      return;
    }

    if (event.key !== "Tab" || !menu.open) return;

    const focusable = menu.querySelectorAll<HTMLElement>("summary, .mobile-nav a[href]");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <details className="menu-details" onKeyDown={handleMenuKeyDown}>
      <summary aria-label="Toggle navigation menu"><span /><span /><span /></summary>
      <div className="mobile-nav" onClick={closeMenu}>
        <Link href="/">Work</Link>
        <Link href="/about">About</Link>
        <a href={email}>Contact</a>
        <a href={linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={publicAsset(portfolioMedia.resumes.header)} target="_blank" rel="noreferrer">Resume</a>
      </div>
    </details>
  );
}
