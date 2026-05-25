"use client";

import { useEffect, useRef } from "react";
import { attachMagneticButton } from "@/lib/animations/magneticButton";
import { useReducedMotion } from "./use-reduced-motion";

export function useMagnetic<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    return attachMagneticButton(ref.current);
  }, [reduced]);

  return ref;
}
