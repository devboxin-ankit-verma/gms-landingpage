"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { GmsLogo } from "./brand/gms-logo";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current || !rootRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.from(logoRef.current, { opacity: 0, scale: 0.88, duration: 0.65 })
      .from(
        rootRef.current.querySelectorAll(".loader-text"),
        { opacity: 0, y: 8, duration: 0.45, stagger: 0.08 },
        0.2
      )
      .from(
        rootRef.current.querySelector(".loader-bar-track"),
        { opacity: 0, y: 6, duration: 0.4 },
        0.35
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(100, p + 10);
      });
    }, 90);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (barRef.current) {
      gsap.to(barRef.current, {
        width: `${Math.min(progress, 100)}%`,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [progress]);

  useEffect(() => {
    if (progress < 100 || !rootRef.current) return;
    gsap.to(rootRef.current, {
      opacity: 0,
      duration: 0.45,
      ease: "power2.inOut",
      delay: 0.15,
      onComplete,
    });
  }, [progress, onComplete]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white px-6"
    >
      <div ref={logoRef} className="mb-8 flex flex-col items-center">
        <GmsLogo size={56} />
        <p className="loader-text mt-4 font-[family-name:var(--font-heading)] text-lg font-bold text-[#111827]">
          GMS AI
        </p>
        <p className="loader-text mt-1 text-xs text-[#6b7280]">
          Garage Master · by Developer Box AI
        </p>
      </div>

      <div className="loader-bar-track w-full max-w-xs">
        <div className="mb-2 flex justify-between text-[10px] font-medium text-[#6b7280]">
          <span>Loading</span>
          <span>{Math.min(Math.round(progress), 100)}%</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-[#EDE9FE]">
          <div ref={barRef} className="h-full w-0 rounded-full bg-[#8B5CF6]" />
        </div>
      </div>
    </div>
  );
}
