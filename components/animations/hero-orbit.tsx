"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { registerGsap } from "@/lib/gsap-config";
import { EASE } from "@/lib/gsap-animations";

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
    label: "Smart Inventory",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d="M5 8h14v10H5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 5h8v3H8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
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
    label: "Customer AI",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 19c0-3 2.7-5 6-5s6 2 6 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "AI Voice Calls",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d="M8 10v4M12 8v8M16 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="5" y="4" width="14" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Workshop Reports",
    svg: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
        <path d="M7 4h10v16H7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function HeroOrbit() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const wrap = wrapRef.current;
    const ring = ringRef.current;
    const orbit = orbitRef.current;
    const brand = brandRef.current;
    const hub = hubRef.current;
    if (!wrap || !ring || !orbit) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;

    const ctx = gsap.context(() => {
      gsap.from(wrap, { opacity: 0, y: 12, duration: 0.85, ease: EASE, delay: 0.1 });

      if (brand) {
        gsap.fromTo(
          brand,
          { opacity: 0, x: 28, y: -16, scale: 0.88 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: EASE,
            delay: 0.35,
          }
        );
        if (!reduced) {
          gsap.to(brand, {
            y: -3,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.2,
          });
        }
      }

      if (hub) {
        gsap.from(hub, {
          opacity: 0,
          scale: 0.6,
          duration: 0.7,
          ease: EASE,
          delay: 0.2,
        });
      }

      if (!reduced) {
        gsap.to(ring, {
          rotation: 360,
          duration: mobile ? 90 : 70,
          repeat: -1,
          ease: "none",
        });
        gsap.to(orbit, {
          rotation: 360,
          duration: mobile ? 120 : 100,
          repeat: -1,
          ease: "none",
        });
        gsap.utils.toArray<HTMLElement>(".orbit-pill").forEach((pill) => {
          gsap.to(pill, {
            rotation: -360,
            duration: mobile ? 120 : 100,
            repeat: -1,
            ease: "none",
            transformOrigin: "50% 50%",
          });
        });
      }
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-square w-full max-w-[min(100%,360px)] sm:max-w-[400px]"
      aria-label="GMS AI feature orbit"
    >
      {/* Brand — top right with entrance + float */}
      <div
        ref={brandRef}
        className="absolute -right-1 top-0 z-20 text-right sm:right-0 sm:top-1"
      >
        <div className="rounded-xl border border-[#E5E7EB] bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
          <p className="font-[family-name:var(--font-heading)] text-lg font-bold leading-none text-[#111827] sm:text-xl">
            GMS AI
          </p>
          <p className="mt-1 text-[10px] font-medium text-[#6b7280] sm:text-[11px]">
            by Developer Box AI
          </p>
        </div>
      </div>

      <div
        ref={ringRef}
        className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-[#8B5CF6]/20"
        style={{ transformOrigin: "50% 50%" }}
      />
      <div className="pointer-events-none absolute inset-[16%] rounded-full border border-[#EDE9FE] bg-[#F8FAFC]" />

      {/* Center hub — logo mark only */}
      <div
        ref={hubRef}
        className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#EDE9FE] bg-white shadow-sm sm:h-[4.5rem] sm:w-[4.5rem]"
        aria-hidden
      >
        <svg
          viewBox="0 0 48 48"
          className="h-10 w-10 sm:h-11 sm:w-11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="48" rx="12" fill="#8B5CF6" />
          <path
            d="M14 32V18h10.5c4.2 0 6.5 2.2 6.5 5.5 0 2.4-1.2 4.2-3.2 5l4.7 3.5H14zm6-9.2h3.8c1.5 0 2.3-.8 2.3-2s-.8-2-2.3-2H20v4z"
            fill="white"
          />
          <circle cx="36" cy="14" r="4" fill="#EDE9FE" />
          <path
            d="M36 11v6M33 14h6"
            stroke="#8B5CF6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
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
              className="orbit-pill absolute left-1/2 top-1/2 flex w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 transition-colors hover:border-[#8B5CF6]/35 sm:w-[100px]"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EDE9FE] text-[#8B5CF6]">
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
