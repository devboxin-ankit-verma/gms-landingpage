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
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { initFeatureTimelineAnimations } from "@/lib/gsap-animations";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "AI Mechanic Assistant",
    description:
      "Guide technicians with intelligent job cards, repair suggestions, and digital checklists built for busy service bays.",
    points: [
      "Capture vehicle history at intake",
      "AI recommends next repair steps",
      "Digital handover with zero paper chaos",
    ],
    Illustration: SvgMechanicAI,
  },
  {
    title: "AI Billing & Invoicing",
    description:
      "Generate accurate invoices for parts, labor, and service packages in seconds — with transparent line items customers understand.",
    points: [
      "Auto-calculate parts + labor totals",
      "Fewer billing disputes and callbacks",
      "Faster payments for your workshop",
    ],
    Illustration: SvgInvoice,
  },
  {
    title: "Workshop Management",
    description:
      "Schedule bays, assign technicians, and track every service order in real time from one operational command view.",
    points: [
      "Live bay capacity and delays",
      "Technician workload balancing",
      "Priority jobs surfaced automatically",
    ],
    Illustration: SvgWorkshop,
  },
  {
    title: "Smart Inventory AI",
    description:
      "Forecast parts demand from repair history and alert your team before stockouts delay the next job.",
    points: [
      "Demand forecasting per SKU",
      "Low-stock alerts before jobs stall",
      "Smarter reorder quantities",
    ],
    Illustration: SvgInventory,
  },
  {
    title: "Customer Tracking AI",
    description:
      "Automate follow-ups, appointment reminders, and service updates so every customer stays informed and loyal.",
    points: [
      "Appointment & pickup reminders",
      "Post-service satisfaction follow-ups",
      "Personalized service history access",
    ],
    Illustration: SvgCustomerAI,
  },
  {
    title: "Repair Analytics",
    description:
      "Understand profit per job, technician performance, and seasonal trends with dashboards built for garage owners.",
    points: [
      "Profit per job and service type",
      "Technician efficiency insights",
      "Seasonal demand forecasting",
    ],
    Illustration: SvgAnalytics,
  },
  {
    title: "Command Dashboard",
    description:
      "Monitor bays, revenue, workload, and AI insights from a single command center — no spreadsheet juggling.",
    points: [
      "Revenue and bay utilization live",
      "AI alerts for bottlenecks",
      "One login for the whole team",
    ],
    Illustration: SvgDashboard,
  },
];

export function FeatureTimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    return initFeatureTimelineAnimations(section);
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-pad section-alt">
      <Container>
        <SectionHeading
          badge="How it works"
          title="Built for garages, workshops & repair shops"
          description="Scroll the center timeline — each step pairs rich workflow detail with a bold visual of how GMS AI runs your floor."
          className="section-heading-gap"
        />

        <div className="relative mx-auto w-full max-w-5xl lg:max-w-6xl">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[#E5E7EB]"
            aria-hidden
          >
            <div className="tl-line-fill h-full w-full origin-top bg-[#8B5CF6]" />
          </div>

          <div className="relative flex flex-col gap-10 lg:gap-16">
            {steps.map((step, i) => {
              const Illustration = step.Illustration;
              const flip = i % 2 === 1;

              return (
                <article
                  key={step.title}
                  data-tl-index={i}
                  className="tl-panel relative"
                >
                  <div
                    className="tl-dot absolute left-1/2 top-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#8B5CF6] bg-white shadow-sm lg:top-8"
                    aria-hidden
                  />

                  <div className="grid min-w-0 grid-cols-2 items-center gap-4 sm:gap-6 lg:gap-14">
                    <div
                      className={cn(
                        "tl-content flex min-w-0 flex-col",
                        flip ? "order-2 pl-3 sm:pl-6 lg:pl-10" : "order-1 pr-3 text-right sm:pr-6 lg:pr-10"
                      )}
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8B5CF6] sm:text-xs">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-1.5 font-heading text-sm font-semibold text-[#111827] sm:mt-2 sm:text-lg lg:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[11px] leading-relaxed text-[#6b7280] sm:mt-3 sm:text-sm lg:text-[0.9375rem]">
                        {step.description}
                      </p>
                      <ul
                        className={cn(
                          "mt-3 space-y-1.5 text-[11px] text-[#6b7280] sm:mt-4 sm:space-y-2 sm:text-sm",
                          flip ? "text-left" : "ml-auto text-right"
                        )}
                      >
                        {step.points.map((point) => (
                          <li
                            key={point}
                            className={cn(
                              "flex gap-1.5 leading-snug sm:gap-2",
                              !flip && "flex-row-reverse justify-end"
                            )}
                          >
                            <span
                              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8B5CF6]"
                              aria-hidden
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={cn(
                        "tl-visual flex",
                        flip ? "order-1 justify-end" : "order-2 justify-start"
                      )}
                    >
                      <div className="tl-visual-inner garage-svg-bold w-full max-w-[110px] rounded-xl border border-[#E5E7EB] bg-white p-2.5 shadow-sm sm:max-w-[200px] sm:rounded-2xl sm:p-4 lg:max-w-[300px] lg:p-5">
                        <Illustration className="tl-svg h-auto w-full" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
