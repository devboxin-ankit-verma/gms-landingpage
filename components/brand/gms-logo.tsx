import { cn } from "@/lib/utils";

interface GmsLogoProps {
  size?: number;
  showWordmark?: boolean;
  layout?: "horizontal" | "stacked";
  variant?: "default" | "footer";
  className?: string;
}

export function GmsLogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <rect width="48" height="48" rx="12" fill="#8B5CF6" />
      <path
        d="M14 32V18h10.5c4.2 0 6.5 2.2 6.5 5.5 0 2.4-1.2 4.2-3.2 5l4.7 3.5H14zm6-9.2h3.8c1.5 0 2.3-.8 2.3-2s-.8-2-2.3-2H20v4z"
        fill="white"
      />
      <circle cx="36" cy="14" r="4" fill="#EDE9FE" />
      <path
        d="M36 11v6M33 14h6"
        stroke="#8B5CF6"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandWordmark({
  stacked = false,
  footer = false,
}: {
  stacked?: boolean;
  footer?: boolean;
}) {
  return (
    <div className={cn("leading-tight", stacked && "text-center")}>
      <span className="font-heading block text-sm font-bold tracking-tight text-[#111827] sm:text-[0.9375rem]">
        GMS AI
      </span>
      {footer && (
        <span className="mt-0.5 block text-xs font-medium leading-snug text-[#6b7280]">
          Garage Master AI
        </span>
      )}
      <span
        className={cn(
          "mt-0.5 block font-medium text-[#9ca3af]",
          footer ? "text-[10px]" : "text-[10px] text-[#6b7280]"
        )}
      >
        by Developer Box AI
      </span>
    </div>
  );
}

export function GmsLogo({
  size = 40,
  showWordmark = false,
  layout = "horizontal",
  variant = "default",
  className,
}: GmsLogoProps) {
  if (!showWordmark) {
    return (
      <div className={cn("inline-flex items-center", className)}>
        <GmsLogoMark size={size} />
      </div>
    );
  }

  if (layout === "stacked") {
    return (
      <div className={cn("flex flex-col items-center gap-2.5", className)}>
        <GmsLogoMark size={size} />
        <BrandWordmark stacked footer={variant === "footer"} />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <GmsLogoMark size={size} />
      <BrandWordmark footer={variant === "footer"} />
    </div>
  );
}
