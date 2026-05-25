"use client";

import { useCallback, useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GmsLogo } from "@/components/brand/gms-logo";
import { GmsAiShowcaseVideo } from "@/components/media/gms-ai-showcase-video";

const GMS_AI_DURATION_SEC = 15;

const GMS_AI_SHOWCASE = {
  label: "GMS AI · Workshop intelligence",
  hint: "AI-powered garage dashboard preview",
  duration: "0:15",
} as const;

export function VideoSection() {
  const [aiPlaying, setAiPlaying] = useState(false);

  useEffect(() => {
    if (!aiPlaying) return;
    const timer = window.setTimeout(() => setAiPlaying(false), GMS_AI_DURATION_SEC * 1000);
    return () => window.clearTimeout(timer);
  }, [aiPlaying]);

  const toggleAiPlay = useCallback(() => {
    setAiPlaying((p) => !p);
  }, []);

  return (
    <section id="preview" className="section-pad section-alt">
      <Container narrow>
        <SectionHeading
          badge="Preview"
          title="See GMS AI in your workshop"
          description="A 15-second look at how GMS AI runs billing, job cards, and live workshop insights."
          className="section-heading-gap"
        />

        <div className="gsap-reveal card overflow-hidden">
          <div className="flex items-center gap-3 border-b border-[#E5E7EB] px-4 py-3">
            <GmsLogo size={28} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#111827]">
                {GMS_AI_SHOWCASE.label}
              </p>
              <p className="text-xs text-[#6b7280]">
                by Developer Box AI · {GMS_AI_SHOWCASE.duration}
              </p>
            </div>
          </div>

          <div className="relative">
            <GmsAiShowcaseVideo playing={aiPlaying} />

            <button
              type="button"
              onClick={toggleAiPlay}
              className={`absolute inset-0 flex items-center justify-center bg-[#111827]/5 transition-opacity hover:bg-[#111827]/8 ${
                aiPlaying ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
              aria-label="Play GMS AI preview"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white">
                <Play className="ml-0.5 h-4 w-4 text-[#8B5CF6]" fill="#8B5CF6" />
              </span>
            </button>

            <button
              type="button"
              onClick={toggleAiPlay}
              className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white transition-opacity hover:border-[#8B5CF6]/30 ${
                aiPlaying ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-label="Pause GMS AI preview"
            >
              <Pause className="h-3.5 w-3.5 text-[#8B5CF6]" />
            </button>

            <div className="pointer-events-none absolute bottom-3 left-3 max-w-[70%] rounded-lg bg-white/95 px-2 py-1 text-[10px] font-medium text-[#6b7280]">
              {GMS_AI_SHOWCASE.hint}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
