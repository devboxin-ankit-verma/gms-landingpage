"use client";

import { useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { HeroOrbit } from "@/components/animations/hero-orbit";
import { initOrbitMouseParallax } from "@/lib/animations/orbitAnimation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HeroScene = dynamic(
  () => import("./hero-scene").then((m) => m.HeroScene),
  { ssr: false }
);

export function HeroVisual() {
  const reducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.matchMedia("(max-width: 767px)").matches;
  }, []);

  useEffect(() => {
    return initOrbitMouseParallax(
      wrapRef.current,
      innerRef.current,
      reducedMotion
    );
  }, [reducedMotion]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!wrapRef.current || reducedMotion) return;
    const rect = wrapRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  }, [reducedMotion]);

  const showThree = !reducedMotion && typeof window !== "undefined";

  return (
    <div
      ref={wrapRef}
      className="hero-visual relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]"
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mouseRef.current = { x: 0, y: 0 };
      }}
      style={{ perspective: 1200 }}
    >
      {showThree && (
        <div className="pointer-events-none absolute inset-[-10%] opacity-65 max-md:hidden">
          <HeroScene mouseRef={mouseRef} />
        </div>
      )}

      <div
        ref={innerRef}
        className="hero-visual-inner relative z-10 will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <HeroOrbit innerRef={innerRef} />
      </div>
    </div>
  );
}
