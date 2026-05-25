"use client";

import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { BookDemoButton } from "../book-demo-button";
import { HeroOrbit } from "../animations/hero-orbit";
import ShinyText from "../react-bits/shiny-text";
import { initHeroEntrance } from "@/lib/gsap-animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    return initHeroEntrance(ref.current);
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="border-b border-[#E5E7EB] bg-white pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-10 md:px-8">
        <div className="order-2 md:order-1">
          <span className="hero-badge mb-4 inline-block rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#8B5CF6]">
            AI Powered Garage Management
          </span>
          <h1 className="hero-title font-[family-name:var(--font-heading)] text-[1.75rem] font-bold leading-[1.12] tracking-tight text-[#111827] min-[400px]:text-4xl sm:text-5xl lg:text-[2.85rem]">
            Smart{" "}
            <ShinyText
              text="GMS AI"
              speed={2.2}
              delay={0.4}
              color="#7C3AED"
              shineColor="#EDE9FE"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={reducedMotion}
              className="font-[family-name:var(--font-heading)] font-bold"
            />{" "}
            System for{" "}
            <ShinyText
              text="Modern Garages"
              speed={2.8}
              delay={0.2}
              color="#374151"
              shineColor="#8B5CF6"
              spread={110}
              direction="left"
              yoyo={false}
              pauseOnHover
              disabled={reducedMotion}
              className="font-[family-name:var(--font-heading)] font-bold"
            />
          </h1>
          <p className="hero-desc mt-4 max-w-lg text-base leading-relaxed text-[#6b7280] sm:mt-5 sm:text-lg">
            Manage billing, inventory, customer support, analytics, and workshop
            operations with AI-powered automation.
          </p>
          <div className="hero-cta mt-7 flex flex-wrap gap-3 sm:mt-8">
            <BookDemoButton size="lg" showArrow />
            <Button variant="outline" size="lg" className="cursor-pointer" asChild>
              <a href="#preview">
                <Play className="h-4 w-4" />
                Watch Preview
              </a>
            </Button>
          </div>
        </div>
        <div className="hero-visual order-1 flex justify-center md:order-2">
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
}
