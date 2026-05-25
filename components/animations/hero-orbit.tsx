"use client";

import { useEffect, useRef } from "react";
import { registerGsap } from "@/lib/gsap-config";
import { initOrbitAnimation } from "@/lib/animations/orbitAnimation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/** viewBox space — padding keeps outer bubbles fully inside the SVG */
const VB = 520;
const C = VB / 2;
const PILL_ORBIT = 158;
const OUTER_ORBIT = 208;
const BUBBLE_R = 8;
const OUTER_BUBBLE_COUNT = 8;

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
] as const;

function polarToPercent(angle: number, radius: number) {
  const x = C + Math.cos(angle) * radius;
  const y = C + Math.sin(angle) * radius;
  return {
    left: `${(x / VB) * 100}%`,
    top: `${(y / VB) * 100}%`,
  };
}

export function HeroOrbit() {
  const localWrap = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<SVGGElement>(null);
  const networkRef = useRef<SVGGElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    registerGsap();
    const wrap = localWrap.current;
    const ring = ringsRef.current;
    const network = networkRef.current;
    const orbit = orbitRef.current;
    const hub = hubRef.current;
    if (!wrap || !ring || !network || !orbit) return;

    const pills = Array.from(wrap.querySelectorAll<HTMLElement>(".orbit-pill"));

    return initOrbitAnimation(
      { wrap, ring, network, orbit, hub, pills },
      reducedMotion
    );
  }, [reducedMotion]);

  const outerAngles = Array.from(
    { length: OUTER_BUBBLE_COUNT },
    (_, i) => (i / OUTER_BUBBLE_COUNT) * Math.PI * 2 - Math.PI / 2
  );

  return (
    <div
      ref={localWrap}
      className="hero-orbit relative mx-auto aspect-square size-full overflow-visible"
      aria-label="GMS AI feature orbit"
    >
      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        className="hero-orbit-svg pointer-events-none absolute inset-0 size-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <g transform={`translate(${C} ${C})`}>
          {/* Static background — does not rotate */}
          <g ref={ringsRef} className="orbit-rings">
            <circle
              r={178}
              fill="none"
              stroke="#8B5CF6"
              strokeOpacity={0.18}
              strokeWidth={1}
              strokeDasharray="7 9"
            />
            <circle r={132} fill="#F8FAFC" fillOpacity={0.85} stroke="#EDE9FE" strokeWidth={1} />
          </g>

          <g ref={networkRef} className="orbit-network orbit-network-static">
            {outerAngles.map((angle, i) => {
              const x2 = Math.cos(angle) * OUTER_ORBIT;
              const y2 = Math.sin(angle) * OUTER_ORBIT;
              return (
                <g key={`outer-${i}`}>
                  <line
                    x1={0}
                    y1={0}
                    x2={x2}
                    y2={y2}
                    stroke="#8B5CF6"
                    strokeOpacity={0.14}
                    strokeWidth={1}
                  />
                  <circle
                    cx={x2}
                    cy={y2}
                    r={BUBBLE_R}
                    className="orbit-bubble"
                    fill="#8B5CF6"
                  />
                </g>
              );
            })}
          </g>
        </g>
      </svg>

      <div
        ref={hubRef}
        className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#EDE9FE] bg-white p-1 shadow-sm sm:h-[4.5rem] sm:w-[4.5rem]">
          <svg
            viewBox="0 0 48 48"
            className="hero-orbit-hub-icon block h-12 w-12 shrink-0 sm:h-[3.25rem] sm:w-[3.25rem]"
            fill="none"
            aria-hidden
          >
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
        className="orbit-pills-layer absolute inset-0 overflow-visible"
        style={{ transformOrigin: "50% 50%" }}
      >
        {features.map((f, i) => {
          const angle = (i / features.length) * Math.PI * 2 - Math.PI / 2;
          const pos = polarToPercent(angle, PILL_ORBIT);
          return (
            <div
              key={f.label}
              className="orbit-pill absolute flex w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-xl border border-[#E5E7EB] bg-white px-2 py-2 shadow-sm sm:w-[100px]"
              style={{
                left: pos.left,
                top: pos.top,
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
