import { gsap } from "gsap";
import { DURATION, EASE_GSAP, SCROLL_START, TOGGLE_PLAY } from "./constants";

export function animateSectionHeading(heading: HTMLElement) {
  const parts = heading.querySelectorAll(
    ".gsap-sec-badge, .gsap-sec-title, .gsap-sec-desc"
  );
  if (!parts.length) return;

  gsap.set(parts, { opacity: 1, visibility: "visible" });

  gsap.fromTo(
    parts,
    { y: 18, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: DURATION.base,
      stagger: 0.08,
      ease: EASE_GSAP,
      clearProps: "opacity,transform",
      scrollTrigger: {
        trigger: heading,
        start: SCROLL_START,
        toggleActions: TOGGLE_PLAY,
      },
    }
  );
}

export function initFeatureStoryScroll(
  section: HTMLElement,
  panelSelector: string,
  getDirection: (index: number) => "left" | "right"
) {
  const panels = gsap.utils.toArray<HTMLElement>(panelSelector);
  const mm = gsap.matchMedia();

  const build = (scrub: boolean | number) => {
    panels.forEach((panel, i) => {
      const ill = panel.querySelector<HTMLElement>(".ft-ill-inner");
      const content = panel.querySelector<HTMLElement>(".ft-content");
      const fromLeft = getDirection(i) === "left";
      const enterX = fromLeft ? -56 : 56;

      if (ill) {
        gsap.fromTo(
          ill,
          { x: enterX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: EASE_GSAP,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "center 58%",
              scrub,
            },
          }
        );

        gsap.to(ill, {
          y: -6,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });
      }

      if (content) {
        gsap.fromTo(
          content,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: EASE_GSAP,
            scrollTrigger: {
              trigger: panel,
              start: "top 74%",
              end: "center 52%",
              scrub,
            },
          }
        );
      }
    });
  };

  mm.add("(min-width: 768px)", () => build(0.35));
  mm.add("(max-width: 767px)", () => {
    panels.forEach((panel) => {
      const els = panel.querySelectorAll(".ft-ill-inner, .ft-content");
      if (!els.length) return;
      gsap.from(els, {
        scrollTrigger: {
          trigger: panel,
          start: "top 85%",
          toggleActions: TOGGLE_PLAY,
        },
        y: 18,
        opacity: 0,
        duration: DURATION.base,
        stagger: 0.1,
        ease: EASE_GSAP,
      });
    });
  });

  return () => mm.revert();
}
