import { gsap } from "gsap";
import { DURATION, EASE_GSAP } from "./constants";

export type OrbitAnimationRefs = {
  wrap: HTMLElement;
  ring: HTMLElement | SVGGElement;
  network?: HTMLElement | SVGGElement;
  orbit: HTMLElement;
  hub?: HTMLElement | null;
  pills?: HTMLElement[];
};

export function initOrbitAnimation(
  refs: OrbitAnimationRefs,
  reducedMotion: boolean
): () => void {
  const { wrap, ring, network, orbit, hub, pills = [] } = refs;
  const mobile = window.matchMedia("(max-width: 767px)").matches;

  const ctx = gsap.context(() => {
    gsap.from(wrap, {
      opacity: 0,
      duration: DURATION.slow,
      ease: EASE_GSAP,
      delay: 0.12,
    });

    if (hub) {
      gsap.from(hub, {
        opacity: 0,
        scale: 0.9,
        duration: DURATION.base,
        ease: EASE_GSAP,
        delay: 0.22,
      });
    }

    gsap.from(pills, {
      opacity: 0,
      scale: 0.92,
      duration: DURATION.fast,
      stagger: 0.05,
      ease: EASE_GSAP,
      delay: 0.35,
    });

    if (reducedMotion) return;

    const orbitDuration = mobile ? 100 : 80;

    if (ring) gsap.set(ring, { rotation: 0 });

    gsap.to(orbit, {
      rotation: 360,
      duration: orbitDuration * 1.15,
      repeat: -1,
      ease: "none",
    });

    pills.forEach((pill) => {
      gsap.to(pill, {
        rotation: -360,
        duration: orbitDuration * 1.15,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    });

    pills.forEach((pill) => {
      pill.addEventListener("mouseenter", () => {
        gsap.to(pill, { scale: 1.03, duration: 0.35, ease: EASE_GSAP });
      });
      pill.addEventListener("mouseleave", () => {
        gsap.to(pill, { scale: 1, duration: 0.4, ease: EASE_GSAP });
      });
    });
  }, wrap);

  return () => ctx.revert();
}

/** Subtle orbit tilt following pointer (wrap element) */
export function initOrbitMouseParallax(
  wrap: HTMLElement | null,
  visual: HTMLElement | null,
  reducedMotion: boolean
): () => void {
  if (!wrap || !visual || reducedMotion) return () => {};

  const quickRX = gsap.quickTo(visual, "rotationY", {
    duration: 0.8,
    ease: "power3.out",
  });
  const quickRY = gsap.quickTo(visual, "rotationX", {
    duration: 0.8,
    ease: "power3.out",
  });

  const onMove = (e: MouseEvent) => {
    const rect = wrap.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    quickRX(x * 5);
    quickRY(-y * 4);
  };

  const onLeave = () => {
    quickRX(0);
    quickRY(0);
  };

  wrap.addEventListener("mousemove", onMove);
  wrap.addEventListener("mouseleave", onLeave);

  return () => {
    wrap.removeEventListener("mousemove", onMove);
    wrap.removeEventListener("mouseleave", onLeave);
    gsap.set(visual, { rotationX: 0, rotationY: 0 });
  };
}
