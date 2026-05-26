"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { Container } from "@/components/layout/container";
import { BookDemoButton } from "./book-demo-button";
import { GmsLogo } from "./brand/gms-logo";
import { initNavbarEntrance, initNavbarScroll } from "@/lib/gsap-animations";
import { EASE_GSAP } from "@/lib/animations/constants";

const links = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#platform" },
  { label: "Preview", href: "#preview" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanupEntrance = initNavbarEntrance(headerRef.current);
    const cleanupScroll = initNavbarScroll(headerRef.current);
    return () => {
      cleanupEntrance();
      cleanupScroll();
    };
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("gms-close-mobile-nav", close);
    return () => window.removeEventListener("gms-close-mobile-nav", close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const menu = menuRef.current;
    const inner = menuInnerRef.current;
    if (!menu || !inner) return;

    const items = inner.querySelectorAll<HTMLElement>(".mobile-nav-link, .mobile-nav-cta");

    if (open) {
      gsap.set(menu, { display: "block" });
      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.42, ease: EASE_GSAP }
      );
      gsap.fromTo(
        items,
        { y: 14, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.38,
          stagger: 0.06,
          delay: 0.1,
          ease: EASE_GSAP,
          clearProps: "opacity,transform",
        }
      );
    } else {
      gsap.to(items, {
        y: 8,
        opacity: 0,
        duration: 0.22,
        stagger: 0.03,
        ease: EASE_GSAP,
      });
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.32,
        ease: EASE_GSAP,
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="nav-header fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/80 backdrop-blur-md transition-[border-color,box-shadow,background] duration-300"
    >
      <Container className="nav-inner relative pt-2.5 pb-2">
        <div className="grid h-11 grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-4">
          <div className="flex min-w-0 items-center justify-self-start">
            <a
              href="#hero"
              className="nav-brand flex min-h-9 items-center"
              aria-label="GMS AI home"
            >
              <GmsLogo size={36} showWordmark className="items-center" />
            </a>
          </div>

          <nav
            className="nav-item hidden items-center justify-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative whitespace-nowrap text-sm font-medium text-[#6b7280] transition-colors hover:text-[#111827]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <BookDemoButton
              size="sm"
              className="nav-item nav-cta hidden !h-9 shrink-0 lg:inline-flex"
              magnetic
            />
            <button
              type="button"
              className="nav-menu-btn touch-target relative z-10 flex h-9 w-9 items-center justify-center rounded-lg text-[#111827] transition-colors hover:bg-[#F8FAFC] lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={menuRef}
        className="overflow-hidden border-t border-[#E5E7EB] bg-white lg:hidden"
        style={{ height: 0, opacity: 0, display: open ? "block" : "none" }}
      >
        <Container>
          <nav
            ref={menuInnerRef}
            className="flex flex-col items-center gap-1 py-5 text-center"
            aria-label="Mobile navigation"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="mobile-nav-link w-full max-w-xs rounded-xl px-4 py-3 text-center text-sm font-medium text-[#111827] transition-colors hover:bg-[#F8FAFC] hover:text-[#8B5CF6]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <BookDemoButton
              className="mobile-nav-cta mt-2 w-full max-w-xs justify-center"
              magnetic
            />
          </nav>
        </Container>
      </div>
    </header>
  );
}
