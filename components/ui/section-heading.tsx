import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "gsap-sec-heading max-w-2xl min-w-0",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {badge && (
        <span className="gsap-sec-badge badge mb-3 inline-flex border border-[#8B5CF6]/15 bg-[#EDE9FE] text-[#7C3AED] sm:mb-4">
          {badge}
        </span>
      )}
      <h2 className="gsap-sec-title text-h2 text-[#111827] opacity-100">{title}</h2>
      {description && (
        <p
          className={cn(
            "gsap-sec-desc mt-4 max-w-2xl text-base leading-relaxed text-[#6b7280] lg:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
