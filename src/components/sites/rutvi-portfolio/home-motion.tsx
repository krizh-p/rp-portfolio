"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const home = document.querySelector<HTMLElement>('main[data-page="home"]');
    if (!home) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    if (!("IntersectionObserver" in window)) return;
    home.classList.add("home-motion-ready");
    const observer = new IntersectionObserver(
      (entries, intersectionObserver) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const reveal = target.querySelector<HTMLElement>("[data-home-reveal]") ?? target;
            reveal.classList.add("is-revealed");
            intersectionObserver.unobserve(target);
          }
        }
      },
      { rootMargin: "0px", threshold: 0 },
    );

    home.querySelectorAll<HTMLElement>("[data-home-reveal]").forEach((layer) => {
      // Observe the section for 3D titles so the edge-on start can't hide them from intersection detection.
      const observationTarget = layer.dataset.homeReveal === "tilt" ? layer.parentElement : layer;
      if (observationTarget) observer.observe(observationTarget);
    });

    const heroContent = home.querySelector<HTMLElement>(".hero-content");
    const hero = heroContent?.closest<HTMLElement>(".home-hero");
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      if (!hero || !heroContent || window.innerWidth < 901 || reducedMotion.matches) return;

      const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / hero.offsetHeight));
      heroContent.style.transform = `translate3d(0, ${-window.innerHeight * 0.125 + progress * window.innerHeight * 0.135}px, 0)`;
    };
    const scheduleParallax = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    if (hero && heroContent && window.innerWidth >= 901) {
      window.addEventListener("scroll", scheduleParallax, { passive: true });
      window.addEventListener("resize", scheduleParallax);
      updateParallax();
    }

    const badge = home.querySelector<HTMLElement>(".intro-portrait-frame");
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let badgeCenterDocumentY = 0;
    const updateBadgeCenter = () => {
      if (!badge) return;

      let top = 0;
      for (let element: HTMLElement | null = badge; element; element = element.offsetParent as HTMLElement | null) {
        top += element.offsetTop;
      }
      badgeCenterDocumentY = top + badge.offsetHeight / 2;
    };
    let pointerLeftBadge = false;
    const moveBadge = (event: PointerEvent) => {
      if (!badge || reducedMotion.matches || pointerLeftBadge) return;

      const centerY = badgeCenterDocumentY - window.scrollY;
      const rotateX = ((centerY - event.clientY) / (window.innerHeight / 2)) * 10.44;
      badge.style.transform = `perspective(940px) translateX(0%) translateY(-50%) rotateX(${rotateX}deg) translateX(0%) translateY(50%) rotateZ(5deg)`;
    };
    const enterBadge = () => { pointerLeftBadge = false; };
    const leaveBadge = (event: PointerEvent) => {
      moveBadge(event);
      pointerLeftBadge = true;
    };

    if (badge && hasFinePointer) {
      updateBadgeCenter();
      window.addEventListener("resize", updateBadgeCenter);
      badge.style.transform = "perspective(940px) translateX(0%) translateY(-50%) rotateX(0deg) translateX(0%) translateY(50%) rotateZ(5deg)";
      badge.addEventListener("pointerenter", enterBadge);
      badge.addEventListener("pointerleave", leaveBadge);
      window.addEventListener("pointermove", moveBadge, { passive: true });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleParallax);
      window.removeEventListener("resize", scheduleParallax);
      window.removeEventListener("resize", updateBadgeCenter);
      window.removeEventListener("pointermove", moveBadge);
      badge?.removeEventListener("pointerenter", enterBadge);
      badge?.removeEventListener("pointerleave", leaveBadge);
      if (frame) window.cancelAnimationFrame(frame);
      home.classList.remove("home-motion-ready");
    };

  }, []);

  return null;
}
