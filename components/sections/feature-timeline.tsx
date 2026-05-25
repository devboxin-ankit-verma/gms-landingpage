"use client";

import { useEffect, useRef } from "react";
import {
  SvgMechanicAI,
  SvgDashboard,
  SvgInvoice,
  SvgCustomerAI,
  SvgWorkshop,
  SvgInventory,
  SvgAnalytics,
} from "@/components/animations/garage-svgs";
import { initFeatureTimelineAnimations } from "@/lib/gsap-animations";

const steps = [
  {
    title: "AI Mechanic Assistant",
    description:
      "Guide technicians with AI job notes, repair suggestions, and digital checklists — built for busy service bays.",
    Illustration: SvgMechanicAI,
    from: "left" as const,
  },
  {
    title: "Workshop Command Dashboard",
    description:
      "Monitor bays, revenue, and team workload from one clean dashboard designed for garage owners.",
    Illustration: SvgDashboard,
    from: "right" as const,
  },
  {
    title: "Automated Workshop Invoicing",
    description:
      "Generate accurate invoices for parts and labor in seconds, with fewer billing disputes at your repair shop.",
    Illustration: SvgInvoice,
    from: "left" as const,
  },
  {
    title: "AI Customer Support",
    description:
      "Automate follow-ups, appointment reminders, and service updates so no customer slips through the cracks.",
    Illustration: SvgCustomerAI,
    from: "right" as const,
  },
  {
    title: "Workshop Management",
    description:
      "Schedule bays, assign technicians, and track every service order across your workshop in real time.",
    Illustration: SvgWorkshop,
    from: "left" as const,
  },
  {
    title: "Smart Parts Inventory",
    description:
      "AI forecasts parts demand for your inventory and alerts you before stockouts delay repairs.",
    Illustration: SvgInventory,
    from: "right" as const,
  },
  {
    title: "Garage Analytics AI",
    description:
      "Understand profit per job, technician performance, and seasonal trends with clear analytics.",
    Illustration: SvgAnalytics,
    from: "left" as const,
  },
];

export function FeatureTimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    return initFeatureTimelineAnimations(
      section,
      ".ft-panel",
      (i) => steps[i].from
    );
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-[#F8FAFC] py-20 md:py-28"
    >
      <div className="gsap-sec-heading mx-auto mb-14 max-w-2xl px-4 text-center md:mb-16 md:px-8">
        <span className="gsap-sec-badge mb-3 inline-block rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#8B5CF6]">
          Platform Features
        </span>
        <h2 className="gsap-sec-title font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
          Built for garages, workshops & repair shops
        </h2>
        <p className="gsap-sec-desc mt-3 text-[#6b7280]">
          Scroll through how GMS AI automates your service center.
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-20 px-4 md:space-y-28 md:px-8">
        {steps.map((step, i) => {
          const Illustration = step.Illustration;
          const illFirst = step.from === "left";

          return (
            <div
              key={step.title}
              className="ft-panel grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div
                className={`ft-ill flex justify-center ${illFirst ? "md:order-1" : "md:order-2"}`}
              >
                <div className="ft-ill-inner w-full max-w-[min(100%,300px)] sm:max-w-[320px]">
                  <Illustration className="w-full" />
                </div>
              </div>
              <div
                className={`ft-content ${illFirst ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4"}`}
              >
                <span className="text-xs font-semibold text-[#8B5CF6]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-bold text-[#111827] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b7280] sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
