"use client";

import { useEffect, useRef } from "react";
import {
  Bot,
  BarChart3,
  Receipt,
  Package,
  Users,
  Mic,
  LayoutGrid,
} from "lucide-react";
import { gsap } from "gsap";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FeatureCard } from "@/components/ui/feature-card";
import { registerGsap } from "@/lib/gsap-config";
import { EASE_GSAP, TOGGLE_PLAY } from "@/lib/animations/constants";

const features = [
  {
    icon: Bot,
    title: "AI Mechanic Assistant",
    description:
      "Digital job cards, repair suggestions, and bay checklists — guided by AI in every service bay.",
    span: "wide" as const,
  },
  {
    icon: Receipt,
    title: "Automated Billing",
    description: "Parts, labor, and packages invoiced accurately in seconds with fewer disputes.",
  },
  {
    icon: Package,
    title: "Smart Inventory",
    description: "Forecast demand and prevent stockouts before they delay your next repair.",
  },
  {
    icon: BarChart3,
    title: "Garage Analytics",
    description: "Profit per job, technician performance, and seasonal trends in one view.",
    span: "wide" as const,
  },
  {
    icon: Users,
    title: "Customer AI",
    description: "Follow-ups, reminders, and service updates that keep customers coming back.",
  },
  {
    icon: Mic,
    title: "Voice AI",
    description: "Hands-free updates and customer calls while technicians stay on the floor.",
  },
];

export function BentoFeaturesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const section = ref.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll<HTMLElement>(".platform-card");
      gsap.set(cards, { opacity: 1, visibility: "visible" });

      gsap.fromTo(
        cards,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: EASE_GSAP,
          clearProps: "opacity,transform",
          scrollTrigger: {
            trigger: section.querySelector(".platform-grid"),
            start: "top 88%",
            toggleActions: TOGGLE_PLAY,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="platform" ref={ref} className="section-pad bg-white pt-10 sm:pt-12">
      <Container>
        <SectionHeading
          badge="Platform"
          title="Everything your workshop needs"
          description="Billing, inventory, customers, and operations — one unified AI platform for repair shops."
          className="section-heading-gap"
        />

        <div className="platform-grid grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="platform-card card card-hover flex items-center gap-3 p-5 opacity-100 md:col-span-2 lg:col-span-1 lg:row-span-2 lg:flex-col lg:items-start lg:justify-center lg:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6]">
              <LayoutGrid className="h-5 w-5" strokeWidth={2} />
            </span>
            <div className="relative z-[1] min-w-0">
              <p className="font-heading text-base font-bold text-[#111827] sm:text-lg">GMS AI</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">
                One dashboard. Every workflow. Built by Developer Box AI.
              </p>
            </div>
          </div>

          {features.map((f) => (
            <FeatureCard key={f.title} {...f} className="platform-card opacity-100" />
          ))}
        </div>
      </Container>
    </section>
  );
}
