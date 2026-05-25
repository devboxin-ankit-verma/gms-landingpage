"use client";

import { cn } from "@/lib/utils";

interface SplitHeadingProps {
  lines: string[];
  className?: string;
}

/** Line-mask containers for GSAP stagger reveal (.hero-line-inner) */
export function SplitHeading({ lines, className }: SplitHeadingProps) {
  return (
    <h1 className={cn("hero-title text-display", className)}>
      {lines.map((line) => (
        <span key={line} className="hero-line block overflow-hidden py-0.5">
          <span className="hero-line-inner block will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
