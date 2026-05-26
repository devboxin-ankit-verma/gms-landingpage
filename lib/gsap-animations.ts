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

/** Scroll glow for How it works timeline line only */
function initHowItWorksLineGlow() {
  const section = document.querySelector<HTMLElement>("#features");
  if (!section) return () => {};

  const st = ScrollTrigger.create({
    trigger: section,
    start: "top 88%",
    end: "bottom 12%",
    onEnter: () => section.classList.add("is-tl-active"),
    onLeave: () => section.classList.remove("is-tl-active"),
    onEnterBack: () => section.classList.add("is-tl-active"),
    onLeaveBack: () => section.classList.remove("is-tl-active"),
  });

  return () => {
    section.classList.remove("is-tl-active");
    st.kill();
  };
}

function formatDashMetricValue(
  el: HTMLElement,
  raw: number
): string {
  const prefix = el.dataset.prefix ?? "";
  const suffix = el.dataset.suffix ?? "";
  const decimals = parseInt(el.dataset.decimals ?? "0", 10);
  const useSeparator = el.dataset.separator === "true";

  let body: string;
  if (decimals > 0) {
    body = raw.toFixed(decimals);
  } else if (useSeparator) {
    body = Math.round(raw).toLocaleString("en-US");
  } else {
    body = String(Math.round(raw));
  }

  return `${prefix}${body}${suffix}`;
}

export function initDashboardAnimations(scope: HTMLElement | null) {
  registerGsap();
  if (!scope) return () => {};

  const ctx = gsap.context(() => {
    const reveal = {
      trigger: scope,
      start: "top 82%",
      toggleActions: TOGGLE_PLAY,
    };

    gsap.from(scope, {
      scrollTrigger: reveal,
      y: 32,
      opacity: 0,
      scale: 0.98,
      duration: DURATION.slow,
      ease: EASE_GSAP,
    });

    gsap.from(".dash-chrome", {
      scrollTrigger: reveal,
      y: -8,
      opacity: 0,
      duration: 0.5,
      ease: EASE_GSAP,
      delay: 0.08,
    });

    gsap.from(".dash-metric", {
      scrollTrigger: reveal,
      y: 20,
      opacity: 0,
      scale: 0.96,
      duration: 0.6,
      stagger: 0.08,
      ease: EASE_GSAP,
      delay: 0.14,
    });

    scope.querySelectorAll<HTMLElement>(".dash-metric-value").forEach((el) => {
      const target = parseFloat(el.dataset.value ?? "0");
      const counter = { val: 0 };

      gsap.to(counter, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: TOGGLE_PLAY,
        },
        val: target,
        duration: 1.15,
        ease: "power2.out",
        delay: 0.2,
        onUpdate: () => {
          el.textContent = formatDashMetricValue(el, counter.val);
        },
      });
    });

    gsap.from(".dash-chart", {
      scrollTrigger: {
        trigger: ".dash-chart",
        start: "top 85%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 16,
      opacity: 0,
      duration: 0.65,
      ease: EASE_GSAP,
      delay: 0.1,
    });

    gsap.from(".dash-bar", {
      scrollTrigger: {
        trigger: ".dash-chart",
        start: "top 82%",
        toggleActions: TOGGLE_PLAY,
      },
      scaleY: 0,
      opacity: 0.4,
      transformOrigin: "bottom center",
      duration: 0.85,
      stagger: 0.06,
      ease: "back.out(1.4)",
      delay: 0.22,
    });

    gsap.from(".dash-ai-panel", {
      scrollTrigger: {
        trigger: ".dash-ai-panel",
        start: "top 86%",
        toggleActions: TOGGLE_PLAY,
      },
      x: 16,
      opacity: 0,
      duration: 0.7,
      ease: EASE_GSAP,
      delay: 0.18,
    });

    gsap.from(".dash-footer", {
      scrollTrigger: {
        trigger: ".dash-footer",
        start: "top 92%",
        toggleActions: TOGGLE_PLAY,
      },
      y: 8,
      opacity: 0,
      duration: 0.5,
      ease: EASE_GSAP,
    });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bars = scope.querySelectorAll<HTMLElement>(".dash-bar-fill");
    if (!reduced && bars.length) {
      gsap.to(bars[bars.length - 1], {
        scrollTrigger: {
          trigger: ".dash-chart",
          start: "top 75%",
          toggleActions: TOGGLE_PLAY,
        },
        boxShadow: "0 -4px 16px rgba(139, 92, 246, 0.35)",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.1,
      });
    }
  }, scope);

  return () => ctx.revert();
}

export const initFeatureTimelineAnimations = initVerticalTimeline;

export function initPagePremiumAnimations() {
  registerGsap();

  const cleanupTimelineGlow = initHowItWorksLineGlow();

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

  return () => {
    cleanupTimelineGlow();
    ctx.revert();
  };
}
