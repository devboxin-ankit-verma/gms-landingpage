import { gsap } from "gsap";
import { registerGsap } from "@/lib/gsap-config";
import { DURATION, EASE_GSAP, TOGGLE_PLAY } from "./constants";

export function initVerticalTimeline(section: HTMLElement): () => void {
  registerGsap();

  const line = section.querySelector<HTMLElement>(".tl-line-fill");
  const panels = gsap.utils.toArray<HTMLElement>(".tl-panel");

  const ctx = gsap.context(() => {
    const lineScroll = {
      trigger: section,
      start: "top 70%",
      end: "bottom 30%",
      scrub: 0.4,
    };

    if (line) {
      gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: lineScroll });
    }

    panels.forEach((panel, i) => {
      const flip = i % 2 === 1;
      const dot = panel.querySelector(".tl-dot");
      const content = panel.querySelector(".tl-content");
      const visual = panel.querySelector(".tl-visual-inner");
      const svg = panel.querySelector(".tl-svg");

      const trigger = {
        trigger: panel,
        start: "top 82%",
        toggleActions: TOGGLE_PLAY,
      };

      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, ease: EASE_GSAP, scrollTrigger: trigger }
        );
      }

      if (content) {
        gsap.fromTo(
          content,
          {
            y: 32,
            x: flip ? 40 : -40,
            opacity: 0,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            duration: DURATION.base,
            ease: EASE_GSAP,
            scrollTrigger: trigger,
          }
        );
      }

      if (visual) {
        gsap.fromTo(
          visual,
          {
            y: 24,
            x: flip ? -36 : 36,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            duration: DURATION.slow,
            ease: EASE_GSAP,
            scrollTrigger: { ...trigger, start: "top 80%" },
          }
        );
      }

      if (svg) {
        gsap.fromTo(
          svg,
          { scale: 0.85, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
            ease: "back.out(1.35)",
            scrollTrigger: { ...trigger, start: "top 78%" },
          }
        );
      }
    });
  }, section);

  return () => ctx.revert();
}
