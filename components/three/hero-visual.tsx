"use client";

import { useRef, useEffect } from "react";
import { HeroOrbit } from "@/components/animations/hero-orbit";
import { initOrbitMouseParallax } from "@/lib/animations/orbitAnimation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroVisual() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pillsLayer = wrapRef.current?.querySelector<HTMLElement>(".orbit-pills-layer");
    return initOrbitMouseParallax(wrapRef.current, pillsLayer ?? null, reducedMotion);
  }, [reducedMotion]);

  return (
    <div
      ref={wrapRef}
      className="hero-visual anim-float-slow relative mx-auto w-full max-w-none shrink-0 overflow-visible"
      style={{ perspective: 1200 }}
    >
      <HeroOrbit />
    </div>
  );
}
