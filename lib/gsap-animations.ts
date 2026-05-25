import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "@/lib/gsap-config";
import {
  DURATION,
  EASE_GSAP,
  SCROLL_START,
  TOGGLE_PLAY,
  animateSectionHeading,
  initVerticalTimeline,
} from "@/lib/animations";

export const EASE = EASE_GSAP;
export { SCROLL_START, TOGGLE_PLAY };

export { animateSectionHeading };

export function initScrollReveals(
  scope: HTMLElement | null,
  selector: string,
  options?: { y?: number; stagger?: number; start?: string; scale?: number }
) {
  registerGsap();
  if (!scope) return () => {};

  const ctx = gsap.context(() => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: scope,
        start: options?.start ?? "top 85%",
        toggleActions: TOGGLE_PLAY,
      },
      y: options?.y ?? 18,
      opacity: 0,
      scale: options?.scale ?? 0.98,
      duration: DURATION.base,
      stagger: options?.stagger ?? 0.08,
      ease: EASE_GSAP,
    });
  }, scope);

  return () => ctx.revert();
}

export function initHeroEntrance(scope: HTMLElement | null) {
  registerGsap();
  if (!scope) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: EASE_GSAP },
      delay: 0.08,
    });

    tl.from(".hero-badge", { y: 12, opacity: 0, duration: 0.55 })
      .from(
        ".hero-line-inner",
        {
          y: "110%",
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
        },
        0.12
      )
      .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, 0.38)
      .from(
        ".hero-cta > *",
        { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 },
        0.5
      )
      .from(
        ".hero-trust li",
        { y: 10, opacity: 0, duration: 0.45, stagger: 0.06 },
        0.62
      )
      .from(
        ".hero-visual-inner",
        {
          opacity: 0,
          scale: 0.94,
          duration: DURATION.slow,
          transformOrigin: "50% 50%",
        },
        0.28
      );

    if (!reduced) {
      gsap.to(".hero-grid", {
        opacity: 0.6,
        duration: 2,
        ease: "none",
      });
    }
  }, scope);

  return () => ctx.revert();
}

export function initNavbarEntrance(header: HTMLElement | null) {
  registerGsap();
  if (!header) return () => {};

  const ctx = gsap.context(() => {
    gsap.from(header, {
      y: -16,
      opacity: 0,
      duration: 0.7,
      ease: EASE_GSAP,
    });
    gsap.from(header.querySelectorAll(".nav-item"), {
      y: -8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: EASE_GSAP,
      delay: 0.15,
    });
  }, header);

  return () => ctx.revert();
}

export function initNavbarScroll(header: HTMLElement | null) {
  registerGsap();
  if (!header) return () => {};

  const st = ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      header.classList.toggle("nav-scrolled", self.scroll() > 48);
    },
  });

  return () => st.kill();
}

export function initDashboardAnimations(scope: HTMLElement | null) {
  registerGsap();
  if (!scope) return () => {};

  const ctx = gsap.context(() => {
    gsap.from(scope, {
      scrollTrigger: {
        trigger: scope,
        start: "top 85%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 28,
      opacity: 0,
      duration: DURATION.slow,
      ease: EASE_GSAP,
    });

    gsap.from(".dash-metric", {
      scrollTrigger: {
        trigger: scope,
        start: "top 78%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 14,
      opacity: 0,
      duration: 0.55,
      stagger: 0.07,
      ease: EASE_GSAP,
      delay: 0.12,
    });

    gsap.from(".dash-bar", {
      scrollTrigger: {
        trigger: ".dash-chart",
        start: "top 82%",
        toggleActions: TOGGLE_PLAY,
      },
      scaleY: 0,
      transformOrigin: "bottom center",
      duration: 0.75,
      stagger: 0.07,
      ease: EASE_GSAP,
      delay: 0.18,
    });

    gsap.from(".dash-ai-panel", {
      scrollTrigger: {
        trigger: ".dash-ai-panel",
        start: "top 88%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 12,
      opacity: 0,
      duration: 0.6,
      ease: EASE_GSAP,
    });

    gsap.to(scope, {
      y: -8,
      ease: "none",
      scrollTrigger: {
        trigger: scope,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  }, scope);

  return () => ctx.revert();
}

export const initFeatureTimelineAnimations = initVerticalTimeline;

export function initPagePremiumAnimations() {
  registerGsap();

  const ctx = gsap.context(() => {
    gsap.utils
      .toArray<HTMLElement>(".gsap-sec-heading")
      .forEach(animateSectionHeading);

    gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: SCROLL_START,
          toggleActions: TOGGLE_PLAY,
        },
        y: 22,
        opacity: 0,
        duration: DURATION.base,
        ease: EASE_GSAP,
      });
    });

    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: "#faq .faq-list",
        start: "top 86%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 12,
      opacity: 0,
      duration: 0.55,
      stagger: 0.06,
      ease: EASE_GSAP,
    });

    gsap.from(".contact-field", {
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 86%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: EASE_GSAP,
    });

    gsap.from(".contact-submit", {
      scrollTrigger: {
        trigger: ".contact-submit",
        start: "top 92%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 8,
      opacity: 0,
      duration: 0.45,
      ease: EASE_GSAP,
    });

    gsap.from(".footer-block", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 92%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 16,
      opacity: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: EASE_GSAP,
    });

  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  });

  return () => ctx.revert();
}
