"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "@/lib/gsap-config";
import { setLenis } from "@/lib/lenis-instance";
import { useReducedMotion } from "./use-reduced-motion";

export function useLenis() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    registerGsap();
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    setLenis(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.scrollerProxy(document.body, {});
      setLenis(null);
      lenis.destroy();
    };
  }, [reducedMotion]);
}
