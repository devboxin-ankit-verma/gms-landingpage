import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DURATION,
  EASE_GSAP,
  REVEAL_Y,
  SCROLL_START,
  STAGGER_BASE,
  TOGGLE_PLAY,
} from "./constants";

export type StaggerRevealOptions = {
  trigger?: Element | string;
  start?: string;
  stagger?: number;
  y?: number;
  duration?: number;
  scale?: number;
  scrub?: boolean | number;
};

export function staggerReveal(
  scope: Element | Document | null,
  selector: string,
  options: StaggerRevealOptions = {}
) {
  const {
    trigger,
    start = "top 85%",
    stagger = STAGGER_BASE,
    y = REVEAL_Y,
    duration = DURATION.base,
    scale,
    scrub,
  } = options;

  const vars: gsap.TweenVars = {
    y,
    opacity: 0,
    duration,
    stagger,
    ease: EASE_GSAP,
  };

  if (scale !== undefined) vars.scale = scale;

  if (scrub !== undefined) {
    return gsap.from(selector, {
      ...vars,
      scrollTrigger: {
        trigger: trigger ?? selector,
        start,
        end: "center 55%",
        scrub,
      },
    });
  }

  return gsap.from(selector, {
    ...vars,
    scrollTrigger: {
      trigger: (trigger as Element) ?? selector,
      start,
      toggleActions: TOGGLE_PLAY,
    },
  });
}

export function staggerRevealInstant(
  targets: gsap.TweenTarget,
  stagger = STAGGER_BASE,
  delay = 0
) {
  return gsap.from(targets, {
    y: REVEAL_Y,
    opacity: 0,
    duration: DURATION.base,
    stagger,
    delay,
    ease: EASE_GSAP,
  });
}
