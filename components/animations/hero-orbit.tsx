"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "gsap";
import { registerGsap } from "@/lib/gsap-config";
import {
  initOrbitAnimation,
  initOrbitMouseParallax,
} from "@/lib/animations/orbitAnimation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const features = [
  {
    label: "AI Billing",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "AI Analytics",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d="M6 18V10M10 18V6M14 18v-4M18 18V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Smart Inventory",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d="M5 8h14v10H5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 5h8v3H8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "AI Voice",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d="M8 10v4M12 8v8M16 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="5" y="4" width="14" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Repair Tracking",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Customer AI",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 19c0-3 2.7-5 6-5s6 2 6 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

type HeroOrbitProps = {
  innerRef?: RefObject<HTMLDivElement | null>;
};

export function HeroOrbit({ innerRef }: HeroOrbitProps) {
  const localWrap = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    registerGsap();
    const wrap = localWrap.current;
    const ring = ringRef.current;
    const orbit = orbitRef.current;
    const hub = hubRef.current;
    if (!wrap || !ring || !orbit) return;

    const pills = gsap.utils.toArray<HTMLElement>(".orbit-pill", wrap);

    return initOrbitAnimation(
      { wrap, ring, orbit, hub, pills },
      reducedMotion
    );
  }, [reducedMotion]);

  return (
    <div
      ref={localWrap}
      className="relative mx-auto aspect-square w-full"
      aria-label="GMS AI feature orbit"
    >
      <div
        ref={ringRef}
        className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-[#8B5CF6]/18"
        style={{ transformOrigin: "50% 50%" }}
      />
      <div className="pointer-events-none absolute inset-[16%] rounded-full border border-[#EDE9FE] bg-[#F8FAFC]/80" />

      <div
        ref={hubRef}
        className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EDE9FE] bg-white shadow-sm sm:h-16 sm:w-16">
          <svg viewBox="0 0 48 48" className="h-9 w-9 sm:h-10 sm:w-10" fill="none" aria-hidden>
            <rect width="48" height="48" rx="12" fill="#8B5CF6" />
            <path
              d="M14 32V18h10.5c4.2 0 6.5 2.2 6.5 5.5 0 2.4-1.2 4.2-3.2 5l4.7 3.5H14zm6-9.2h3.8c1.5 0 2.3-.8 2.3-2s-.8-2-2.3-2H20v4z"
              fill="white"
            />
            <circle cx="36" cy="14" r="4" fill="#EDE9FE" />
            <path d="M36 11v6M33 14h6" stroke="#8B5CF6" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <p className="font-heading mt-2 text-sm font-bold text-[#111827] sm:text-base">GMS AI</p>
        <p className="text-[10px] font-medium text-[#6b7280]">by Developer Box AI</p>
      </div>

      <div
        ref={orbitRef}
        className="absolute inset-0"
        style={{ transformOrigin: "50% 50%" }}
      >
        {features.map((f, i) => {
          const angle = (i / features.length) * Math.PI * 2 - Math.PI / 2;
          const r = 128;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return (
            <div
              key={f.label}
              className="orbit-pill absolute left-1/2 top-1/2 flex w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 sm:w-[100px]"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <span className="orbit-pill-icon flex h-8 w-8 items-center justify-center rounded-lg bg-[#EDE9FE] text-[#8B5CF6] transition-transform duration-300">
                {f.svg}
              </span>
              <span className="text-center text-[9px] font-semibold leading-tight text-[#111827] sm:text-[10px]">
                {f.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
