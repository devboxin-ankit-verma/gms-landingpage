"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll-to-section";

/** Smooth scroll for in-page anchors (works with Lenis). */
export function useHashScroll() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      if (!document.getElementById(id)) return;

      e.preventDefault();
      scrollToSection(id, {
        focusSelector: id === "contact" ? "#name" : undefined,
      });
      window.dispatchEvent(new CustomEvent("gms-close-mobile-nav"));
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
