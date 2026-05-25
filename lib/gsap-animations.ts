import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "@/lib/gsap-config";

export const EASE = "power2.out";
export const SCROLL_START = "top 88%";
export const TOGGLE_PLAY = "play none none none";

export function animateSectionHeading(heading: HTMLElement) {
  const parts = heading.querySelectorAll(
    ".gsap-sec-badge, .gsap-sec-title, .gsap-sec-desc"
  );
  if (!parts.length) return;

  gsap.from(parts, {
    scrollTrigger: {
      trigger: heading,
      start: SCROLL_START,
      toggleActions: TOGGLE_PLAY,
    },
    y: 22,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: EASE,
  });
}

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
      y: options?.y ?? 24,
      opacity: 0,
      scale: options?.scale ?? 0.97,
      duration: 0.7,
      stagger: options?.stagger ?? 0.08,
      ease: EASE,
    });
  }, scope);

  return () => ctx.revert();
}

export function initHeroEntrance(scope: HTMLElement | null) {
  registerGsap();
  if (!scope) return () => {};

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: EASE } });
    tl.from(".hero-badge", { y: 14, opacity: 0, duration: 0.55 }, 0.15)
      .from(
        ".hero-title",
        { y: 32, opacity: 0, duration: 0.8 },
        0.28
      )
      .from(".hero-desc", { y: 18, opacity: 0, duration: 0.65 }, 0.42)
      .from(
        ".hero-cta > *",
        { y: 14, opacity: 0, duration: 0.5, stagger: 0.09 },
        0.55
      )
      .from(
        ".hero-visual",
        { scale: 0.92, opacity: 0, duration: 0.95, transformOrigin: "50% 50%" },
        0.32
      );
  }, scope);

  return () => ctx.revert();
}

export function initNavbarEntrance(header: HTMLElement | null) {
  registerGsap();
  if (!header) return () => {};

  const ctx = gsap.context(() => {
    gsap.from(header, {
      y: -20,
      opacity: 0,
      duration: 0.75,
      ease: EASE,
      delay: 0.08,
    });
    gsap.from(header.querySelectorAll(".nav-item"), {
      y: -10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: EASE,
      delay: 0.22,
    });
  }, header);

  return () => ctx.revert();
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
      y: 36,
      opacity: 0,
      scale: 0.98,
      duration: 0.85,
      ease: EASE,
    });

    gsap.from(".dash-metric", {
      scrollTrigger: {
        trigger: scope,
        start: "top 78%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 16,
      opacity: 0,
      duration: 0.55,
      stagger: 0.07,
      ease: EASE,
      delay: 0.15,
    });

    gsap.from(".dash-bar", {
      scrollTrigger: {
        trigger: ".dash-chart",
        start: "top 82%",
        toggleActions: TOGGLE_PLAY,
      },
      scaleY: 0,
      transformOrigin: "bottom center",
      duration: 0.65,
      stagger: 0.06,
      ease: EASE,
      delay: 0.2,
    });

    gsap.from(".dash-ai-panel", {
      scrollTrigger: {
        trigger: ".dash-ai-panel",
        start: "top 88%",
        toggleActions: TOGGLE_PLAY,
      },
      x: 16,
      opacity: 0,
      duration: 0.6,
      ease: EASE,
    });
  }, scope);

  return () => ctx.revert();
}

export function initFeatureTimelineAnimations(
  section: HTMLElement,
  panelSelector: string,
  getDirection: (index: number) => "left" | "right"
) {
  registerGsap();
  const panels = gsap.utils.toArray<HTMLElement>(panelSelector);
  const mm = gsap.matchMedia();

  const build = (scrub: boolean | number) => {
    panels.forEach((panel, i) => {
      const ill = panel.querySelector<HTMLElement>(".ft-ill-inner");
      const content = panel.querySelector<HTMLElement>(".ft-content");
      const fromLeft = getDirection(i) === "left";
      const enterX = fromLeft ? -72 : 72;

      if (ill) {
        gsap.fromTo(
          ill,
          { x: enterX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: EASE,
            scrollTrigger: {
              trigger: panel,
              start: "top 78%",
              end: "center 55%",
              scrub: scrub,
            },
          }
        );
      }

      if (content) {
        gsap.fromTo(
          content,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: EASE,
            scrollTrigger: {
              trigger: panel,
              start: "top 72%",
              end: "center 50%",
              scrub: scrub,
            },
          }
        );
      }
    });
  };

  mm.add("(min-width: 768px)", () => build(0.45));
  mm.add("(max-width: 767px)", () => build(false));

  return () => {
    mm.revert();
  };
}

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
        y: 28,
        opacity: 0,
        scale: 0.98,
        duration: 0.75,
        ease: EASE,
      });
    });

    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: "#faq .faq-list",
        start: "top 86%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 14,
      opacity: 0,
      duration: 0.55,
      stagger: 0.07,
      ease: EASE,
    });

    gsap.from(".contact-field", {
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 86%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 12,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: EASE,
    });

    gsap.from(".contact-submit", {
      scrollTrigger: {
        trigger: ".contact-submit",
        start: "top 92%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 10,
      opacity: 0,
      duration: 0.45,
      ease: EASE,
    });

    gsap.from(".footer-block", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 92%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 18,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: EASE,
    });

    gsap.from(".video-clip-card", {
      scrollTrigger: {
        trigger: ".video-clip-grid",
        start: "top 88%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 16,
      opacity: 0,
      scale: 0.96,
      duration: 0.55,
      stagger: 0.08,
      ease: EASE,
    });
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  });

  return () => ctx.revert();
}
