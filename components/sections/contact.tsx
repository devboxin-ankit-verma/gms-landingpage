"use client";

import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const emailJsConfig = useMemo(() => {
    return {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    };
  }, []);

  return (
    <div id="contact" className="min-w-0">
      <Container narrow>
        <SectionHeading
          badge="Contact"
          title="Book a demo for your workshop"
          description="Tell us about your garage or service center. We'll show you a tailored GMS AI walkthrough."
          className="section-heading-gap"
        />
        <form
          className="contact-form mx-auto w-full max-w-xl min-w-0 space-y-4 rounded-3xl border border-[#E5E7EB] bg-transparent p-5 sm:p-8"
          onSubmit={async (e) => {
            e.preventDefault();
            setError(null);

            if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
              setStatus("error");
              setError("Email service is not configured yet. Add EmailJS keys and redeploy.");
              return;
            }

            const fd = new FormData(e.currentTarget);
            const name = String(fd.get("name") ?? "").trim();
            const email = String(fd.get("email") ?? "").trim();
            const workshop = String(fd.get("workshop") ?? "").trim();
            const phone = String(fd.get("phone") ?? "").trim();
            const message = String(fd.get("message") ?? "").trim();

            if (!name || !email) {
              setStatus("error");
              setError("Please enter your name and email.");
              return;
            }

            setStatus("sending");
            try {
              await emailjs.send(
                emailJsConfig.serviceId,
                emailJsConfig.templateId,
                {
                  name,
                  email,
                  workshop,
                  phone,
                  message,
                  source: "GMS AI contact form",
                },
                { publicKey: emailJsConfig.publicKey }
              );
              setStatus("sent");
              (e.currentTarget as HTMLFormElement).reset();
            } catch (err) {
              setStatus("error");
              setError("Failed to send. Please try again in a moment.");
            }
          }}
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
              <Input
                id={f.id}
                name={f.id}
                type={f.type}
                className="h-12 rounded-xl"
                autoComplete={f.id === "email" ? "email" : f.id === "phone" ? "tel" : "off"}
                required={f.id === "name" || f.id === "email"}
              />
            </div>
          ))}
          <div className="contact-field space-y-1.5">
            <Label htmlFor="message" className="text-sm text-[#111827]">
              Message
            </Label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="flex min-h-28 w-full resize-y rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm leading-relaxed text-[#111827] transition-colors placeholder:text-[#9ca3af] focus:border-[#8B5CF6]/40 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/12"
            />
          </div>
          {status === "sent" ? (
            <p className="text-sm font-medium text-[#16A34A]">Thanks! We’ll contact you shortly.</p>
          ) : null}
          {status === "error" && error ? (
            <p className="text-sm font-medium text-[#DC2626]">{error}</p>
          ) : null}
          <Button
            type="submit"
            className="contact-submit h-12 w-full rounded-xl"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Request demo"}
          </Button>
        </form>
      </Container>
    </div>
  );
}
