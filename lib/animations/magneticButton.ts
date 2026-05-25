import { gsap } from "gsap";

const MAX_OFFSET = 10;
const STRENGTH = 0.35;

export function attachMagneticButton(el: HTMLElement | null): () => void {
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }

  const quickX = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
  const quickY = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });
  const quickScale = gsap.quickTo(el, "scale", {
    duration: 0.45,
    ease: "power3.out",
  });

  gsap.set(el, { x: 0, y: 0, scale: 1 });

  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    quickX(dx * MAX_OFFSET * STRENGTH);
    quickY(dy * MAX_OFFSET * STRENGTH);
    quickScale(1.02);
  };

  const onLeave = () => {
    quickX(0);
    quickY(0);
    quickScale(1);
  };

  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);

  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
    gsap.set(el, { x: 0, y: 0, scale: 1 });
  };
}
