"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initPagePremiumAnimations } from "@/lib/gsap-animations";
import { registerGsap } from "@/lib/gsap-config";
import { useReducedMotion } from "./use-reduced-motion";

/** Global scroll reveals after page load (headings, FAQ, contact, footer, etc.). */
export function usePremiumAnimations(enabled: boolean) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    registerGsap();
    const cleanup = initPagePremiumAnimations();
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 500);
    const refreshLate = window.setTimeout(() => ScrollTrigger.refresh(), 1000);

    return () => {
      window.clearTimeout(refresh);
      window.clearTimeout(refreshLate);
      cleanup();
    };
  }, [enabled, reducedMotion]);
}
