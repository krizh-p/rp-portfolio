"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "main > header, main > section:not([data-no-scroll-reveal]), main > figure, main .project-card, main .job, main [data-scroll-reveal-item]";

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter((target) => {
      const page = target.closest<HTMLElement>("main")?.dataset.page;
      return page !== "home" && page !== "chopdawg" && !target.hasAttribute("data-kerzner-discovery");
    });
    const observer = new IntersectionObserver((entries, activeObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      }
    }, { threshold: 0.05, rootMargin: "0px 0px -5% 0px" });

    targets.forEach((target) => target.setAttribute("data-scroll-reveal", ""));

    let previousY = window.scrollY;
    const syncHeaderState = () => {
      const currentY = window.scrollY;
      header?.classList.toggle("is-scrolled", currentY > 0);

      if (preference.matches || currentY <= 80 || currentY < previousY) {
        header?.classList.remove("is-hidden");
      } else if (currentY > previousY) {
        header?.classList.add("is-hidden");
      }

      previousY = currentY;
    };

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

    syncMotionPreference();
    syncHeaderState();
    preference.addEventListener("change", syncMotionPreference);
    window.addEventListener("scroll", syncHeaderState, { passive: true });
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncMotionPreference);
      window.removeEventListener("scroll", syncHeaderState);
      document.documentElement.classList.remove("has-scroll-motion");
      header?.classList.remove("is-scrolled", "is-hidden");
    };
  }, [pathname]);

  return null;
}
