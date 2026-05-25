"use client";

import { useEffect } from "react";
import { registerGsap } from "@/lib/gsap-config";
import { useReducedMotion } from "./use-reduced-motion";

export function useGsapScroll() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    registerGsap();
  }, [reducedMotion]);
}
