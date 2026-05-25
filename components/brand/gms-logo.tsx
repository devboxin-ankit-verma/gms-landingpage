import { cn } from "@/lib/utils";

interface GmsLogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

/** GMS AI brand mark — garage + AI spark, minimal purple */
export function GmsLogo({
  size = 40,
  showWordmark = false,
  className,
}: GmsLogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="shrink-0"
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
      {showWordmark && (
        <div className="flex flex-col leading-tight">
          <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-[#111827]">
            GMS AI
          </span>
          <span className="text-[10px] font-medium text-[#6b7280]">
            by Developer Box AI
          </span>
        </div>
      )}
    </div>
  );
}
