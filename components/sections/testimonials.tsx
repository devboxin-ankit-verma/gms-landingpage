"use client";

import { useEffect, useRef } from "react";
import { SectionHeading } from "../ui/section-heading";
import { initScrollReveals } from "@/lib/gsap-animations";

const items = [
  {
    quote:
      "GMS AI simplified our billing and job tracking. Our workshop runs calmer and faster.",
    name: "James Mitchell",
    role: "Owner, Mitchell Auto Works",
  },
  {
    quote:
      "Inventory alerts alone saved us hours every week. Built clearly for repair shops.",
    name: "Priya Sharma",
    role: "Service Manager, City Motors Garage",
  },
  {
    quote:
      "Clean dashboard, reliable automation. Exactly what a modern service center needs.",
    name: "Carlos Mendez",
    role: "Director, Mendez Workshop Group",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    return initScrollReveals(ref.current, ".testi-card", {
      y: 18,
      stagger: 0.08,
      scale: 0.97,
      start: "top 85%",
    });
  }, []);

  return (
    <section ref={ref} className="bg-[#F8FAFC] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Trusted by workshop teams"
          description="Garage owners and service managers using GMS AI across repair operations."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="testi-card rounded-2xl border border-[#E5E7EB] bg-white p-6"
            >
              <p className="text-sm leading-relaxed text-[#374151]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-[#E5E7EB] pt-4">
                <p className="text-sm font-semibold text-[#111827]">{t.name}</p>
                <p className="text-xs text-[#6b7280]">{t.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
