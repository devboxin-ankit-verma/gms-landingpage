import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DURATION,
  EASE_GSAP,
  REVEAL_Y,
  SCROLL_START,
  TOGGLE_PLAY,
} from "./constants";

export type SmoothRevealOptions = {
  y?: number;
  duration?: number;
  scale?: number;
  start?: string;
};

export function smoothReveal(
  element: Element | string,
  options: SmoothRevealOptions = {}
) {
  const {
    y = REVEAL_Y,
    duration = DURATION.base,
    scale = 0.98,
    start = SCROLL_START,
  } = options;

  return gsap.from(element, {
    y,
    opacity: 0,
    scale,
    duration,
    ease: EASE_GSAP,
    scrollTrigger: {
      trigger: element,
      start,
      toggleActions: TOGGLE_PLAY,
    },
  });
}

export function revealChildren(
  parent: Element,
  childSelector: string,
  options: SmoothRevealOptions & { stagger?: number } = {}
) {
  const { stagger = 0.08, ...rest } = options;
  const children = parent.querySelectorAll(childSelector);
  if (!children.length) return;

  return gsap.from(children, {
    y: rest.y ?? REVEAL_Y,
    opacity: 0,
    duration: rest.duration ?? DURATION.base,
    stagger,
    ease: EASE_GSAP,
    scrollTrigger: {
      trigger: parent,
      start: rest.start ?? SCROLL_START,
      toggleActions: TOGGLE_PLAY,
    },
  });
}
