"use client";

import { SectionHeading } from "../ui/section-heading";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-xl px-4 md:px-8">
        <SectionHeading
          badge="Contact"
          title="Book a demo for your workshop"
          description="Tell us about your garage or service center. We'll show you a tailored GMS AI walkthrough."
        />
        <form
          className="contact-form mt-10 space-y-5 rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "workshop", label: "Workshop name", type: "text" },
            { id: "phone", label: "Phone", type: "tel" },
          ].map((f) => (
            <div key={f.id} className="contact-field space-y-1.5">
              <Label htmlFor={f.id}>{f.label}</Label>
              <Input id={f.id} type={f.type} className="cursor-text" />
            </div>
          ))}
          <div className="contact-field space-y-1.5">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              rows={4}
              className="flex w-full cursor-text rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm transition-colors focus:border-[#8B5CF6]/50 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/15"
            />
          </div>
          <Button type="submit" className="contact-submit w-full cursor-pointer">
            Request demo
          </Button>
        </form>
      </div>
    </section>
  );
}
