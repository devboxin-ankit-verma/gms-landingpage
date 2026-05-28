"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { GmsLogo } from "./brand/gms-logo";
import { EASE_GSAP, DURATION } from "@/lib/animations/constants";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!brandRef.current) return;
    gsap.from(brandRef.current, {
      opacity: 0,
      y: 14,
      duration: DURATION.base,
      ease: EASE_GSAP,
    });
    gsap.from(brandRef.current.querySelector("svg"), {
      scale: 0.88,
      duration: DURATION.slow,
      ease: EASE_GSAP,
      delay: 0.1,
    });
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
    }, 85);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setProgress(100), 1400);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (barRef.current) {
      gsap.to(barRef.current, {
        width: `${Math.min(progress, 100)}%`,
        duration: 0.3,
        ease: EASE_GSAP,
      });
    }
  }, [progress]);

  useEffect(() => {
    if (progress < 100 || !rootRef.current) return;
    if (completedRef.current) return;
    completedRef.current = true;
    gsap.to(rootRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: EASE_GSAP,
      delay: 0.12,
      onComplete,
    });
  }, [progress, onComplete]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-10000 flex flex-col items-center justify-center bg-white px-6"
    >
      <div ref={brandRef}>
        <GmsLogo size={52} showWordmark layout="stacked" />
      </div>
      <div className="mt-10 w-full max-w-[16rem]">
        <div className="mb-2 flex justify-between text-xs text-[#6b7280]">
          <span>Loading</span>
          <span>{Math.min(Math.round(progress), 100)}%</span>
        </div>
        <div className="h-px overflow-hidden rounded-full bg-[#EDE9FE]">
          <div ref={barRef} className="h-full w-0 rounded-full bg-[#8B5CF6]" />
        </div>
      </div>
    </div>
  );
}
