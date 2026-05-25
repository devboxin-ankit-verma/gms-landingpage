"use client";

import { useEffect, useRef } from "react";
import { Play, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BookDemoButton } from "@/components/book-demo-button";
import { HeroVisual } from "@/components/three/hero-visual";
import ShinyText from "@/components/react-bits/shiny-text";
import { initHeroEntrance } from "@/lib/gsap-animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const TRUST = [
  "Workshop-ready",
  "AI automation",
  "Built for garages",
];

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
      className="relative overflow-hidden border-b border-[#E5E7EB] bg-white pt-[calc(var(--header-h)+1.5rem)] pb-12 md:pb-16 lg:pt-[calc(var(--header-h)+2rem)]"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,#EDE9FE_0%,transparent_52%)]"
        aria-hidden
      />

      <Container className="relative">
        <div className="flex min-w-0 flex-col gap-8 sm:gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-1 w-full text-center lg:max-w-md lg:text-left xl:max-w-lg">
            <span className="hero-badge badge mb-4 inline-flex text-[11px] sm:text-xs">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
              AI Operating System
            </span>

            <h1 className="hero-title font-heading text-[1.625rem] font-bold leading-[1.15] tracking-tight text-[#111827] sm:text-[1.875rem] md:text-[2rem] lg:text-[2.25rem]">
              <span className="hero-line block overflow-hidden py-0.5">
                <span className="hero-line-inner block">Run your garage smarter with</span>
              </span>
              <span className="hero-line block overflow-hidden py-0.5">
                <span className="hero-line-inner block">
                  <ShinyText
                    text="GMS AI"
                    speed={2.2}
                    delay={0.35}
                    color="#7C3AED"
                    shineColor="#EDE9FE"
                    spread={120}
                    direction="left"
                    pauseOnHover
                    disabled={reducedMotion}
                    className="font-heading text-[1.625rem] font-bold sm:text-[1.875rem] md:text-[2rem] lg:text-[2.25rem]"
                  />
                </span>
              </span>
            </h1>

            <p className="hero-desc mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#6b7280] sm:text-[0.9375rem] lg:mx-0">
              Billing, bays, inventory, and customers — unified in one calm AI workspace
              built for modern service centers.
            </p>

            <div className="hero-cta mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start">
              <BookDemoButton size="default" showArrow magnetic className="sm:!h-11" />
              <Button variant="outline" size="default" className="magnetic-btn sm:!h-11" asChild>
                <a href="#preview">
                  <Play className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Watch Preview
                </a>
              </Button>
            </div>

            <ul className="hero-trust mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
              {TRUST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-[#6b7280] sm:text-sm"
                >
                  <CheckCircle2
                    className="h-3.5 w-3.5 shrink-0 text-[#8B5CF6] sm:h-4 sm:w-4"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-2 flex w-full justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
