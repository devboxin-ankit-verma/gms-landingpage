import { gsap } from "gsap";
import { DURATION, EASE_GSAP, REVEAL_Y } from "./constants";

export type FadeUpOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  opacity?: number;
  ease?: string;
};

export function fadeUp(
  targets: gsap.TweenTarget,
  options: FadeUpOptions = {}
) {
  const {
    y = REVEAL_Y,
    duration = DURATION.base,
    delay = 0,
    opacity = 0,
    ease = EASE_GSAP,
  } = options;

  return gsap.from(targets, {
    y,
    opacity,
    duration,
    delay,
    ease,
  });
}

export function fadeUpTo(
  targets: gsap.TweenTarget,
  from: gsap.TweenVars,
  to: gsap.TweenVars
) {
  return gsap.fromTo(targets, from, { ease: EASE_GSAP, ...to });
}
