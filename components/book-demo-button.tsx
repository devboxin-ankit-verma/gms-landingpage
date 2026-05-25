"use client";

import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

type BookDemoButtonProps = ButtonProps & {
  label?: string;
  showArrow?: boolean;
};

/** Links to #contact — smooth scroll handled by useHashScroll (Lenis-aware). */
export function BookDemoButton({
  label = "Book Demo",
  showArrow = false,
  className,
  size,
  variant,
}: BookDemoButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      className={cn("cursor-pointer", className)}
      asChild
    >
      <a href="#contact">
        {label}
        {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden /> : null}
      </a>
    </Button>
  );
}
