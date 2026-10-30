"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "main > header, main > section, main > figure, main .project-card, main .job";

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const observer = new IntersectionObserver((entries, activeObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      }
    }, { threshold: 0.05, rootMargin: "0px 0px -5% 0px" });

    targets.forEach((target) => target.setAttribute("data-scroll-reveal", ""));

    const syncMotionPreference = () => {
      const enabled = !preference.matches;
      document.documentElement.classList.toggle("has-scroll-motion", enabled);

      if (enabled) {
        targets.forEach((target) => {
          if (!target.classList.contains("is-visible")) observer.observe(target);
        });
      } else {
        observer.disconnect();
        header?.classList.remove("is-hidden");
      }
    };

    let previousY = window.scrollY;
    let scrollScheduled = false;
    const handleScroll = () => {
      if (scrollScheduled) return;
      scrollScheduled = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        if (preference.matches || currentY < 80) {
          header?.classList.remove("is-hidden");
        } else if (Math.abs(currentY - previousY) > 4) {
          header?.classList.toggle("is-hidden", currentY > previousY);
        }
        previousY = currentY;
        scrollScheduled = false;
      });
    };

    syncMotionPreference();
    preference.addEventListener("change", syncMotionPreference);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncMotionPreference);
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.classList.remove("has-scroll-motion");
      header?.classList.remove("is-hidden");
    };
  }, [pathname]);

  return null;
}
