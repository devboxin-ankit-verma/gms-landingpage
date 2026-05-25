"use client";

import { SectionHeading } from "../ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    q: "What is GMS AI (Garage Master)?",
    a: "GMS AI is an AI-powered platform for garages and repair shops — billing, inventory, customer support, analytics, and workshop management in one system. Built by Developer Box AI.",
  },
  {
    q: "Is it built for small workshops?",
    a: "Yes. From single-bay garages to multi-location service centers, GMS AI scales with your operation.",
  },
  {
    q: "How does AI help with inventory?",
    a: "The system forecasts parts usage from your job history and alerts you before stock runs low.",
  },
  {
    q: "Can technicians use it in the bay?",
    a: "Yes. Digital job cards and updates work on desktop and mobile for technicians and front desk staff.",
  },
  {
    q: "How do I get started?",
    a: "Book a demo and our team will configure a walkthrough for your workshop workflow.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#F8FAFC] py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 md:px-8">
        <SectionHeading
          badge="FAQ"
          title="Common questions"
          description="Answers for garage owners evaluating GMS AI."
        />
        <Accordion
          type="single"
          collapsible
          className="faq-list mt-10 space-y-2"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="faq-item">
              <AccordionTrigger className="cursor-pointer">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
