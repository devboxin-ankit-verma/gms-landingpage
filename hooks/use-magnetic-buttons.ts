"use client";

import { useEffect } from "react";
import { attachMagneticButton } from "@/lib/animations/magneticButton";
import { useReducedMotion } from "./use-reduced-motion";

/** Attach magnetic effect to all .magnetic-btn elements in document */
export function useMagneticButtons(enabled = true) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!enabled || reduced) return;

    const els = document.querySelectorAll<HTMLElement>(".magnetic-btn");
    const cleanups = Array.from(els).map((el) => attachMagneticButton(el));

    return () => cleanups.forEach((fn) => fn());
  }, [enabled, reduced]);
}
