"use client";

import { HeroOrbit } from "@/components/animations/hero-orbit";

export function HeroVisual() {
  return (
    <div className="hero-visual shrink-0">
      <div className="hero-visual-frame">
        <HeroOrbit />
      </div>
    </div>
  );
}
