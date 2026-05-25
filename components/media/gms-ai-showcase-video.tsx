"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface GmsAiShowcaseVideoProps {
  playing: boolean;
  className?: string;
}

const showcaseStyles = `
.gms-ai-showcase-wrap .gms-pulse-a { animation: gms-pulse 2.4s ease-in-out infinite; transform-origin: 260px 390px; }
.gms-ai-showcase-wrap .gms-pulse-b { animation: gms-pulse 2.4s ease-in-out infinite 0.6s; transform-origin: 490px 390px; }
.gms-ai-showcase-wrap .gms-ring-a, .gms-ai-showcase-wrap .gms-ring-b { animation: gms-ring 2.4s ease-in-out infinite; }
.gms-ai-showcase-wrap .gms-scan { animation: gms-scan 3s ease-in-out infinite; }
.gms-ai-showcase-wrap .gms-orbit { animation: gms-spin 14s linear infinite; transform-origin: 1040px 480px; }
.gms-ai-showcase-wrap .gms-bar-1 { animation: gms-grow 2.8s ease-in-out infinite; transform-origin: left center; }
.gms-ai-showcase-wrap .gms-bar-2 { animation: gms-grow 2.8s ease-in-out infinite 0.3s; transform-origin: left center; }
.gms-ai-showcase-wrap .gms-bar-3 { animation: gms-grow 2.8s ease-in-out infinite 0.6s; transform-origin: left center; }
.gms-ai-showcase-wrap .gms-flow-1, .gms-ai-showcase-wrap .gms-flow-2 { stroke-dasharray: 200; animation: gms-dash 2.2s ease-in-out infinite; }
.gms-ai-showcase-wrap .gms-flow-2 { animation-delay: 0.5s; }
.gms-ai-showcase-wrap:not(.is-playing) .gms-pulse-a,
.gms-ai-showcase-wrap:not(.is-playing) .gms-pulse-b,
.gms-ai-showcase-wrap:not(.is-playing) .gms-ring-a,
.gms-ai-showcase-wrap:not(.is-playing) .gms-ring-b,
.gms-ai-showcase-wrap:not(.is-playing) .gms-scan,
.gms-ai-showcase-wrap:not(.is-playing) .gms-orbit,
.gms-ai-showcase-wrap:not(.is-playing) .gms-bar-1,
.gms-ai-showcase-wrap:not(.is-playing) .gms-bar-2,
.gms-ai-showcase-wrap:not(.is-playing) .gms-bar-3,
.gms-ai-showcase-wrap:not(.is-playing) .gms-flow-1,
.gms-ai-showcase-wrap:not(.is-playing) .gms-flow-2 { animation-play-state: paused; }
@keyframes gms-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
@keyframes gms-ring { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.2; transform: scale(1.25); } }
@keyframes gms-scan { 0%, 100% { transform: translateY(0); opacity: 0.95; } 50% { transform: translateY(56px); opacity: 0.35; } }
@keyframes gms-spin { to { transform: rotate(360deg); } }
@keyframes gms-grow { 0%, 100% { transform: scaleX(0.55); opacity: 0.7; } 50% { transform: scaleX(1); opacity: 1; } }
@keyframes gms-dash { 0% { stroke-dashoffset: 200; opacity: 0.3; } 50% { stroke-dashoffset: 0; opacity: 0.9; } 100% { stroke-dashoffset: -200; opacity: 0.3; } }
`;

export function GmsAiShowcaseVideo({ playing, className }: GmsAiShowcaseVideoProps) {
  const reducedMotion = useReducedMotion();
  const isPlaying = playing && !reducedMotion;

  return (
    <div
      className={cn(
        "gms-ai-showcase-wrap relative aspect-video w-full overflow-hidden bg-[#F8FAFC]",
        isPlaying && "is-playing",
        className
      )}
      aria-hidden
    >
      <style>{showcaseStyles}</style>
      <svg
        viewBox="0 0 1280 720"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gms-bg" x1="0" y1="0" x2="1280" y2="720" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFC" />
            <stop offset="1" stopColor="#EDE9FE" />
          </linearGradient>
          <linearGradient id="gms-accent" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="gms-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="1280" height="720" fill="url(#gms-bg)" />
        <g opacity="0.35">
          <circle cx="200" cy="120" r="80" fill="#8B5CF6" />
          <circle cx="1100" cy="600" r="120" fill="#8B5CF6" />
        </g>
        <g stroke="#E5E7EB" strokeWidth="1">
          <path d="M0 180H1280M0 360H1280M0 540H1280M320 0V720M640 0V720M960 0V720" />
        </g>
        <rect x="120" y="100" width="520" height="520" rx="24" fill="#fff" stroke="#E5E7EB" strokeWidth="2" />
        <rect x="160" y="140" width="200" height="28" rx="8" fill="#EDE9FE" />
        <rect x="160" y="190" width="440" height="120" rx="16" fill="#F8FAFC" stroke="#E5E7EB" />
        <rect x="180" y="220" width="120" height="12" rx="4" fill="#8B5CF6" opacity="0.8" className="gms-bar-1" />
        <rect x="180" y="244" width="280" height="8" rx="4" fill="#E5E7EB" className="gms-bar-2" />
        <rect x="180" y="264" width="200" height="8" rx="4" fill="#E5E7EB" className="gms-bar-3" />
        <rect x="160" y="340" width="200" height="100" rx="12" fill="#EDE9FE" />
        <rect x="380" y="340" width="220" height="100" rx="12" fill="#F8FAFC" stroke="#E5E7EB" />
        <rect x="160" y="460" width="440" height="120" rx="12" fill="#F8FAFC" stroke="#E5E7EB" />
        <g className="gms-pulse-a" filter="url(#gms-glow)">
          <circle cx="260" cy="390" r="18" fill="url(#gms-accent)" />
          <circle cx="260" cy="390" r="28" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.5" className="gms-ring-a" />
        </g>
        <g className="gms-pulse-b">
          <circle cx="490" cy="390" r="14" fill="#8B5CF6" />
          <circle cx="490" cy="390" r="22" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.4" className="gms-ring-b" />
        </g>
        <rect x="700" y="120" width="460" height="500" rx="24" fill="#111827" opacity="0.92" />
        <rect x="740" y="160" width="380" height="200" rx="16" fill="#1F2937" stroke="#374151" />
        <text x="760" y="200" fill="#EDE9FE" fontFamily="system-ui,sans-serif" fontSize="22" fontWeight="700">
          GMS AI
        </text>
        <text x="760" y="228" fill="#9CA3AF" fontFamily="system-ui,sans-serif" fontSize="14">
          Garage Master · Live insights
        </text>
        <rect x="760" y="280" width="340" height="4" rx="2" fill="#8B5CF6" opacity="0.9" className="gms-scan" />
        <rect x="760" y="300" width="280" height="8" rx="4" fill="#374151" />
        <rect x="760" y="320" width="200" height="8" rx="4" fill="#374151" />
        <rect x="760" y="380" width="160" height="48" rx="10" fill="url(#gms-accent)" />
        <text x="780" y="410" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="13" fontWeight="600">
          AI job card ready
        </text>
        <g className="gms-orbit">
          <circle cx="1040" cy="480" r="60" stroke="#8B5CF6" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="1040" cy="420" r="8" fill="#EDE9FE" />
          <circle cx="1100" cy="480" r="6" fill="#8B5CF6" />
          <circle cx="980" cy="500" r="5" fill="#A78BFA" />
        </g>
        <g className="gms-data-flow" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6">
          <path d="M580 390 C640 390 680 280 760 280" className="gms-flow-1" />
          <path d="M580 520 C700 520 720 420 760 420" className="gms-flow-2" />
        </g>
      </svg>
    </div>
  );
}
