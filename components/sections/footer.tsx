"use client";

import { Mail, Globe, Share2 } from "lucide-react";
import { GmsLogo } from "../brand/gms-logo";

const columns = [
  { title: "Product", links: ["Features", "Dashboard", "Pricing", "Integrations"] },
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
    <footer className="border-t border-[#E5E7EB] bg-white py-14 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-5 md:gap-12 md:px-8">
        <div className="footer-block md:col-span-2">
          <a href="#hero" className="inline-flex cursor-pointer" aria-label="GMS AI home">
            <GmsLogo size={44} showWordmark />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b7280]">
            A clean AI operating system for modern garages, workshops, and repair
            shops.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#E5E7EB] text-[#6b7280] transition-colors hover:border-[#8B5CF6]/30 hover:text-[#8B5CF6]"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@developerbox.ai"
            className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm text-[#6b7280] transition-colors hover:text-[#8B5CF6]"
          >
            <Mail className="h-4 w-4" />
            hello@developerbox.ai
          </a>
        </div>
        {columns.map((col) => (
          <div key={col.title} className="footer-block">
            <h4 className="text-sm font-semibold text-[#111827]">{col.title}</h4>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href={
                      link === "Features"
                        ? "#features"
                        : link === "Dashboard"
                          ? "#dashboard"
                          : link === "Contact"
                            ? "#contact"
                            : "#"
                    }
                    className="cursor-pointer text-sm text-[#6b7280] transition-colors hover:text-[#111827]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-[#9ca3af] md:mt-12 md:px-8">
        © {new Date().getFullYear()} GMS AI · Developer Box AI. All rights reserved.
      </p>
    </footer>
  );
}
