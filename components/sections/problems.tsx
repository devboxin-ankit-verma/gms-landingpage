"use client";

import { useEffect, useRef } from "react";
import { Receipt, Package, MessageCircle, ClipboardList } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { initScrollReveals } from "@/lib/gsap-animations";

const items = [
  {
    icon: Receipt,
    title: "Manual billing problems",
    text: "Paper invoices and spreadsheet errors slow payments at your workshop.",
  },
  {
    icon: Package,
    title: "Inventory confusion",
    text: "Parts stock-outs and over-ordering delay repairs in the service bay.",
  },
  {
    icon: MessageCircle,
    title: "Customer follow-up delays",
    text: "Missed reminders reduce repeat visits to your garage.",
  },
  {
    icon: ClipboardList,
    title: "Service tracking issues",
    text: "Job status gets lost between the front desk and technicians.",
  },
];

export function ProblemsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    return initScrollReveals(ref.current, ".prob-card", {
      y: 20,
      stagger: 0.09,
      scale: 0.96,
      start: "top 82%",
    });
  }, []);

  return (
    <section id="solutions" ref={ref} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          badge="Challenges"
          title="Problems repair shops face every day"
          description="GMS AI removes operational friction so your team focuses on quality service."
          align="left"
          className="mb-10"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="prob-card rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-colors duration-200 hover:border-[#8B5CF6]/30"
            >
              <item.icon className="mb-3 h-5 w-5 text-[#8B5CF6]" strokeWidth={2} />
              <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[#111827]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
