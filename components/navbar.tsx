"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { BookDemoButton } from "./book-demo-button";
import { GmsLogo } from "./brand/gms-logo";
import { initNavbarEntrance } from "@/lib/gsap-animations";

const links = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Preview", href: "#preview" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return initNavbarEntrance(headerRef.current);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("gms-close-mobile-nav", close);
    return () => window.removeEventListener("gms-close-mobile-nav", close);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#E5E7EB] bg-white/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-8">
        <a href="#hero" className="cursor-pointer" aria-label="GMS AI home">
          <GmsLogo size={36} showWordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-item cursor-pointer text-sm font-medium text-[#6b7280] transition-colors hover:text-[#111827]"
            >
              {l.label}
            </a>
          ))}
          <BookDemoButton size="sm" className="nav-item" />
        </div>

        <button
          type="button"
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#E5E7EB] bg-white px-4 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block cursor-pointer py-2 text-sm font-medium text-[#111827]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <BookDemoButton className="mt-3 w-full" />
        </div>
      )}
    </header>
  );
}
