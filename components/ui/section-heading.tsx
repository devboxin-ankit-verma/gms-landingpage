import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
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
        "gsap-sec-heading max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="gsap-sec-badge mb-3 inline-block rounded-full bg-[#EDE9FE] px-3 py-1 text-xs font-semibold text-[#8B5CF6]">
          {badge}
        </span>
      )}
      <h2 className="gsap-sec-title font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="gsap-sec-desc mt-3 text-base leading-relaxed text-[#6b7280]">
          {description}
        </p>
      )}
    </div>
  );
}
