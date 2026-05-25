"use client";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="section-pad section-alt">
      <Container narrow>
        <SectionHeading
          badge="Contact"
          title="Book a demo for your workshop"
          description="Tell us about your garage or service center. We'll show you a tailored GMS AI walkthrough."
          className="section-heading-gap"
        />
        <form
          className="contact-form mx-auto max-w-xl space-y-4 rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "workshop", label: "Workshop name", type: "text" },
            { id: "phone", label: "Phone", type: "tel" },
          ].map((f) => (
            <div key={f.id} className="contact-field space-y-1.5">
              <Label htmlFor={f.id} className="text-sm text-[#111827]">
                {f.label}
              </Label>
              <Input id={f.id} type={f.type} className="h-12 rounded-xl" />
            </div>
          ))}
          <div className="contact-field space-y-1.5">
            <Label htmlFor="message" className="text-sm text-[#111827]">
              Message
            </Label>
            <textarea
              id="message"
              rows={4}
              className="flex min-h-[7rem] w-full resize-y rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm leading-relaxed text-[#111827] transition-colors placeholder:text-[#9ca3af] focus:border-[#8B5CF6]/40 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/12"
            />
          </div>
          <Button type="submit" className="contact-submit h-12 w-full rounded-xl">
            Request demo
          </Button>
        </form>
      </Container>
    </section>
  );
}
