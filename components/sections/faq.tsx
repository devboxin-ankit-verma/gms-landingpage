"use client";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqList } from "./faq-list";

const faqs = [
  {
    q: "What is GMS AI (Garage Master)?",
    a: "GMS AI is an AI-powered platform for garages and repair shops — billing, inventory, customer support, analytics, and workshop management in one system. Built by Developer Box AI.",
  },
  {
    q: "Is it built for small workshops?",
    a: "Yes. From single-bay garages to multi-location service centers, GMS AI scales with your operation without overwhelming your team.",
  },
  {
    q: "How does AI help with inventory?",
    a: "The system forecasts parts usage from your job history, flags low stock early, and helps you order the right quantities so repairs never stall waiting on parts.",
  },
  {
    q: "Can technicians use it in the bay?",
    a: "Yes. Digital job cards, voice-friendly updates, and mobile-friendly workflows work for technicians and front desk staff on desktop or phone.",
  },
  {
    q: "How do I get started?",
    a: "Book a demo and our team will configure a tailored walkthrough for your workshop workflow and billing setup.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section-pad bg-white">
      <Container narrow>
        <SectionHeading
          badge="FAQ"
          title="Common questions"
          description="Answers for garage owners evaluating GMS AI."
          className="section-heading-gap"
        />
        <FaqList items={faqs} />
      </Container>
    </section>
  );
}
