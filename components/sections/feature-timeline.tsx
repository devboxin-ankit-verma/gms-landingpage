"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
    image: "/how-it-works/mechanic-ai.png",
    imageAlt: "AI mechanic assistant workflow",
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
    image: "/how-it-works/billing-invoicing.png",
    imageAlt: "AI billing and invoicing",
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
    image: "/how-it-works/workshop-management.png",
    imageAlt: "Workshop management dashboard",
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
    image: "/how-it-works/smart-inventory.png",
    imageAlt: "Smart inventory AI",
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
    image: "/how-it-works/customer-tracking.png",
    imageAlt: "Customer tracking AI",
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
    image: "/how-it-works/repair-analytics.png",
    imageAlt: "Repair analytics charts",
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
    image: "/how-it-works/command-dashboard.png",
    imageAlt: "GMS AI command dashboard",
  },
] as const;

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
          description="Each step shows how GMS AI fits your floor — from intake to billing, inventory, and analytics."
          className="section-heading-gap"
        />

        <div className="relative mx-auto w-full max-w-5xl lg:max-w-6xl">
          <div
            className="pointer-events-none absolute bottom-0 left-6 top-0 hidden w-px bg-[#E5E7EB] lg:left-1/2 lg:block lg:-translate-x-1/2"
            aria-hidden
          >
            <div className="tl-line-fill h-full w-full origin-top bg-[#8B5CF6]" />
          </div>

          <ol className="relative flex list-none flex-col gap-12 lg:gap-20">
            {steps.map((step, i) => {
              const flip = i % 2 === 1;

              return (
                <li
                  key={step.title}
                  data-tl-index={i}
                  className="tl-panel relative list-none"
                >
                  <div
                    className="tl-dot absolute left-6 top-8 z-10 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#8B5CF6] bg-white shadow-sm lg:left-1/2 lg:block"
                    aria-hidden
                  />

                  <div
                    className={cn(
                      "grid min-w-0 grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14",
                      flip && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                    )}
                  >
                    <div className="tl-content min-w-0 pl-0 lg:pl-0">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8B5CF6]">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-heading text-lg font-semibold text-[#111827] sm:text-xl lg:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#6b7280] lg:text-[0.9375rem]">
                        {step.description}
                      </p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#6b7280] marker:text-[#8B5CF6]">
                        {step.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className={cn(
                        "tl-visual flex justify-center",
                        flip ? "lg:justify-start" : "lg:justify-end"
                      )}
                    >
                      <div className="tl-visual-inner mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-sm sm:max-w-[300px] sm:p-4 lg:max-w-[320px]">
                        <Image
                          src={step.image}
                          alt={step.imageAlt}
                          width={400}
                          height={300}
                          className="tl-img aspect-[4/3] h-auto w-full object-contain"
                          sizes="(max-width: 640px) 260px, 320px"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
