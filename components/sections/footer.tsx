"use client";

import { Mail, Globe, Share2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { GmsLogo } from "../brand/gms-logo";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const columns = [
  { title: "Product", links: ["Features", "Platform", "Dashboard", "Preview"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

const socials = [
  { href: "#hero", label: "Website", icon: Globe },
  { href: "mailto:hello@developerbox.ai", label: "Email", icon: Mail },
  { href: "#", label: "Social", icon: Share2 },
];

export function FooterSection() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white py-12 md:py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="footer-brand flex flex-col lg:col-span-2">
            <GmsLogo size={36} showWordmark layout="horizontal" variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b7280]">
              A clean AI operating system for modern garages, workshops, and repair shops.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="card card-hover flex h-9 w-9 items-center justify-center text-[#6b7280] hover:text-[#8B5CF6]"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="text-left">
              <h4 className="text-sm font-semibold text-[#111827]">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Features"
                          ? "#features"
                          : link === "Platform"
                            ? "#platform"
                            : link === "Dashboard"
                              ? "#dashboard"
                              : link === "Preview"
                                ? "#preview"
                                : link === "Contact"
                                  ? "#contact"
                                  : "#"
                      }
                      className="text-sm text-[#6b7280] transition-colors hover:text-[#111827]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-[#111827]">Newsletter</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
              Product updates for workshop teams.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Email" className="h-10 flex-1 rounded-xl" />
              <Button type="submit" size="sm" className="shrink-0 sm:w-auto">
                Join
              </Button>
            </form>
          </div>
        </div>

        <p className="footer-block mt-10 border-t border-[#E5E7EB] pt-6 text-center text-xs text-[#9ca3af]">
          © {new Date().getFullYear()} GMS AI · Garage Master AI · Developer Box AI. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
}
