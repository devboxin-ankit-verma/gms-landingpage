"use client";

import { Share2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/container";
import { GmsLogo } from "../brand/gms-logo";

const columns = [
  { title: "Company", links: ["About", "Contact"] },
  { title: "Product", links: ["Features", "Platform", "Preview", "FAQ"] },
  { title: "Solution", links: ["For Garages", "For Workshops", "Billing & Job Cards", "Dashboard"] },
  { title: "Legal", links: ["Privacy", "Terms"] },
];

function shareSite() {
  if (typeof window === "undefined") return;
  const url = window.location.href;
  const title = "GMS AI";

  if (navigator.share) {
    navigator.share({ title, url }).catch(() => {});
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5 22v-8h2.6l.4-3H13.5V9.1c0-.9.3-1.6 1.6-1.6h1.6V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.3V11H8v3h2.2v8h3.3Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.2 2.8h9.6a4.4 4.4 0 0 1 4.4 4.4v9.6a4.4 4.4 0 0 1-4.4 4.4H7.2a4.4 4.4 0 0 1-4.4-4.4V7.2a4.4 4.4 0 0 1 4.4-4.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17.4 6.9h.01"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FooterSection() {
  const pathname = usePathname();
  const base = pathname === "/" ? "" : "/";

  return (
    <footer className="border-t border-[#E5E7EB] bg-white py-12 md:py-14">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,2fr)_repeat(4,minmax(0,1fr))] md:gap-10">
          <div className="footer-brand flex flex-col">
            <GmsLogo size={36} showWordmark layout="horizontal" variant="footer" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b7280]">
              A clean AI operating system for modern garages, workshops, and repair shops.
            </p>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={shareSite}
                aria-label="Share GMS AI website"
                className="card card-hover flex h-9 w-9 items-center justify-center text-[#6b7280] hover:text-[#8B5CF6]"
              >
                <Share2 className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <a
                href="https://www.facebook.com/devboxin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="card card-hover flex h-9 w-9 items-center justify-center text-[#6b7280] hover:text-[#8B5CF6]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/devboxin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="card card-hover flex h-9 w-9 items-center justify-center text-[#6b7280] hover:text-[#8B5CF6]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
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
                          ? `${base}#features`
                          : link === "Platform"
                            ? `${base}#platform`
                            : link === "Preview"
                              ? `${base}#preview`
                              : link === "Contact"
                                ? `${base}#contact`
                                : link === "FAQ"
                                  ? `${base}#faq`
                                  : link === "Dashboard"
                                    ? `${base}#dashboard`
                                    : link === "For Garages"
                                      ? `${base}#features`
                                      : link === "For Workshops"
                                        ? `${base}#platform`
                                        : link === "Billing & Job Cards"
                                          ? `${base}#preview`
                                          : link === "About"
                                            ? "/about"
                                            : link === "Privacy"
                                              ? "/privacy"
                                              : link === "Terms"
                                                ? "/terms"
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
        </div>
      </Container>
    </footer>
  );
}
