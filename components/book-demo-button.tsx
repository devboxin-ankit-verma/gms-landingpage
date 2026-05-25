"use client";

import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/use-magnetic";

type BookDemoButtonProps = ButtonProps & {
  label?: string;
  showArrow?: boolean;
  magnetic?: boolean;
};

export function BookDemoButton({
  label = "Book Demo",
  showArrow = false,
  magnetic = false,
  className,
  size,
  variant,
}: BookDemoButtonProps) {
  const magRef = useMagnetic<HTMLSpanElement>();

  const inner = (
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

  if (!magnetic) return inner;

  return (
    <span ref={magRef} className="inline-flex">
      {inner}
    </span>
  );
}
