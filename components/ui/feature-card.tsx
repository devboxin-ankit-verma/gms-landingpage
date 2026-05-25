"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { EASE_FRAMER, CARD_LIFT_Y } from "@/lib/animations/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  span?: "default" | "wide" | "tall";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  span = "default",
}: FeatureCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "card group relative flex flex-col overflow-hidden p-5 sm:p-6",
        span === "wide" && "md:col-span-2",
        span === "tall" && "md:row-span-2",
        className
      )}
      whileHover={
        reduced
          ? undefined
          : {
              y: CARD_LIFT_Y,
              transition: { duration: 0.35, ease: EASE_FRAMER },
            }
      }
    >
      <span className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-[#EDE9FE]/40 to-transparent" />
      <span
        className={cn(
          "relative z-[1] mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#8B5CF6] transition-transform duration-300 group-hover:scale-105 sm:mb-4",
          iconClassName
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <h3 className="relative z-[1] text-base font-semibold text-[#111827] sm:text-[1.0625rem]">
        {title}
      </h3>
      <p className="relative z-[1] mt-2 flex-1 text-sm leading-relaxed text-[#6b7280]">
        {description}
      </p>
    </motion.article>
  );
}
