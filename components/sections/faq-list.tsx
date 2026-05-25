"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { registerGsap } from "@/lib/gsap-config";
import { EASE_GSAP } from "@/lib/animations/constants";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

function FaqAccordionItem({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    if (open) {
      gsap.to(outer, {
        height: inner.offsetHeight,
        duration: 0.42,
        ease: EASE_GSAP,
      });
      gsap.to(outer, { opacity: 1, duration: 0.3, ease: EASE_GSAP });
    } else {
      gsap.to(outer, {
        height: 0,
        duration: 0.36,
        ease: EASE_GSAP,
      });
      gsap.to(outer, { opacity: 0, duration: 0.25, ease: EASE_GSAP });
    }
  }, [open]);

  return (
    <div className="faq-item card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-12 w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-medium text-[#111827] transition-colors hover:text-[#8B5CF6] sm:px-5"
        aria-expanded={open}
      >
        <span className="pr-2">{q}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-[#8B5CF6] transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div ref={outerRef} className="h-0 overflow-hidden opacity-0">
        <div ref={innerRef} className="px-4 pb-4 text-sm leading-relaxed text-[#6b7280] sm:px-5 sm:text-[0.9375rem]">
          {a}
        </div>
      </div>
    </div>
  );
}

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list mx-auto max-w-2xl space-y-2.5">
      {items.map((faq) => (
        <FaqAccordionItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}
