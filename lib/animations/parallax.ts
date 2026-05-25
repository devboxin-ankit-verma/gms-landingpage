import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE_GSAP } from "./constants";

export function parallaxY(
  element: Element | string,
  amount: number,
  options?: { start?: string; end?: string; scrub?: number }
) {
  const { start = "top bottom", end = "bottom top", scrub = 0.6 } = options ?? {};

  return gsap.to(element, {
    y: amount,
    ease: EASE_GSAP,
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub,
    },
  });
}

export function parallaxFloat(
  element: Element | string,
  yRange = 12,
  scrub = 0.8
) {
  return parallaxY(element, -yRange, {
    start: "top bottom",
    end: "bottom top",
    scrub,
  });
}
