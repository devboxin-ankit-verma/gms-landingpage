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
      className="hero-section relative isolate overflow-hidden border-b border-[#E5E7EB] bg-white pt-[calc(var(--header-h)+1.25rem)] pb-12 sm:pt-[calc(var(--header-h)+1.5rem)] sm:pb-16 md:pb-24 lg:pt-[calc(var(--header-h)+2rem)]"
    >
      <div className="hero-fx pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="hero-fx-glow absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,#EDE9FE_0%,transparent_52%)]" />
      </div>

      <Container className="hero-inner relative z-10 min-w-0">
        <div className="hero-layout mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="hero-copy order-1 flex w-full min-w-0 flex-col">
            <div className="hero-copy-head">
              <span className="hero-badge badge inline-flex self-center text-[11px] sm:text-xs lg:self-start">
                <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
                AI Operating System
              </span>

              <h1 className="hero-title font-heading text-[1.625rem] font-bold leading-[1.2] tracking-tight text-[#111827] sm:text-[1.875rem] md:text-[2rem] lg:text-[2.25rem]">
                <span className="hero-line block overflow-hidden">
                  <span className="hero-line-inner block">Run your garage smarter with</span>
                </span>
                <span className="hero-line block overflow-hidden">
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
            </div>

            <div className="hero-copy-actions">
              <p className="hero-desc">
                Billing, bays, inventory, and customers — unified in one calm AI workspace
                built for modern service centers.
              </p>

              <div className="hero-cta">
                <div className="hero-cta-slot">
                  <BookDemoButton
                    size="default"
                    showArrow
                    magnetic
                    className="hero-cta-btn"
                  />
                </div>
                <div className="hero-cta-slot">
                  <Button
                    variant="outline"
                    size="default"
                    className="hero-cta-btn magnetic-btn"
                    asChild
                  >
                    <a href="#preview" className="hero-cta-link">
                      <Play className="h-4 w-4 shrink-0" aria-hidden />
                      Watch Preview
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <ul className="hero-trust">
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

          <div className="hero-visual-col order-2 flex w-full min-w-0 items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
