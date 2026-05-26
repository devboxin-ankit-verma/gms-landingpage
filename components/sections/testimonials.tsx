"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
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
      y: 16,
      stagger: 0.07,
      scale: 0.98,
      start: "top 85%",
    });
  }, []);

  return (
    <section ref={ref} className="section-pad bg-white">
      <Container>
        <SectionHeading
          badge="Testimonials"
          title="Trusted by workshop teams"
          description="Garage owners and service managers using GMS AI across repair operations."
          className="section-heading-gap"
        />
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {items.map((t) => (
            <article
              key={t.name}
              className="testi-card card card-hover flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-body flex-1 text-[#374151]">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-5 border-t border-[#E5E7EB] pt-4">
                <p className="text-sm font-semibold text-[#111827]">{t.name}</p>
                <p className="mt-0.5 text-xs text-[#6b7280]">{t.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
