"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GmsLogo } from "@/components/brand/gms-logo";

const GMS_CLIPS = [
  {
    src: "/video/gms-ai-preview.mp4",
    poster: "https://assets.mixkit.co/videos/35955/35955-thumb-720-0.jpg",
    label: "AI job cards",
    hint: "Technician using GMS on tablet",
    duration: "0:23",
  },
  {
    src: "/video/gms-workshop-billing.mp4",
    poster: "https://assets.mixkit.co/videos/17130/17130-thumb-720-0.jpg",
    label: "Engine diagnostics",
    hint: "Mechanic inspection workflow",
    duration: "0:15",
  },
  {
    src: "/video/gms-workshop-service.mp4",
    poster: "https://assets.mixkit.co/videos/17133/17133-thumb-720-0.jpg",
    label: "Service bay",
    hint: "Lift & workshop operations",
    duration: "0:20",
  },
] as const;

function safePlay(video: HTMLVideoElement) {
  const promise = video.play();
  if (promise !== undefined) {
    promise.catch((err: unknown) => {
      if (err instanceof DOMException && err.name === "AbortError") return;
      if (err instanceof Error && err.name === "AbortError") return;
    });
  }
}

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playLockRef = useRef(false);
  const [activeClip, setActiveClip] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  const clip = GMS_CLIPS[activeClip];

  useEffect(() => {
    setPlaying(false);
    setReady(false);
    playLockRef.current = false;
    videoRef.current?.pause();
  }, [activeClip]);

  const selectClip = useCallback((index: number) => {
    if (index === activeClip) return;
    setActiveClip(index);
  }, [activeClip]);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v || playLockRef.current) return;
    if (!v.paused) {
      v.pause();
      return;
    }
    playLockRef.current = true;
    safePlay(v);
    const unlock = () => {
      playLockRef.current = false;
    };
    v.addEventListener("playing", unlock, { once: true });
    v.addEventListener("pause", unlock, { once: true });
    setTimeout(unlock, 500);
  }, []);

  return (
    <section id="preview" className="section-pad section-alt">
      <Container narrow>
        <SectionHeading
          badge="Preview"
          title="See GMS AI in your workshop"
          description="Short clips from real garage workflows — billing, diagnostics, and service bay operations."
          className="section-heading-gap"
        />

        <div className="space-y-4">
          <div className="gsap-reveal card overflow-hidden">
            <div className="flex items-center gap-3 border-b border-[#E5E7EB] px-4 py-3">
              <GmsLogo size={28} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#111827]">{clip.label}</p>
                <p className="text-xs text-[#6b7280]">by Developer Box AI · {clip.duration}</p>
              </div>
            </div>

            <div className="relative bg-[#F8FAFC]">
              <video
                key={clip.src}
                ref={videoRef}
                className="aspect-video w-full object-cover"
                poster={clip.poster}
                playsInline
                preload="metadata"
                onLoadedData={() => setReady(true)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              >
                <source src={clip.src} type="video/mp4" />
              </video>

              <button
                type="button"
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center bg-[#111827]/5 transition-opacity hover:bg-[#111827]/8 ${
                  playing ? "pointer-events-none opacity-0" : "opacity-100"
                }`}
                aria-label={`Play ${clip.label}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white">
                  <Play className="ml-0.5 h-4 w-4 text-[#8B5CF6]" fill="#8B5CF6" />
                </span>
              </button>

              <button
                type="button"
                onClick={togglePlay}
                className={`absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] bg-white transition-opacity hover:border-[#8B5CF6]/30 ${
                  playing ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-label="Pause"
              >
                <Pause className="h-3.5 w-3.5 text-[#8B5CF6]" />
              </button>

              <div className="pointer-events-none absolute bottom-3 left-3 max-w-[70%] rounded-lg bg-white/95 px-2 py-1 text-[10px] font-medium text-[#6b7280]">
                {ready ? clip.hint : "Loading…"}
              </div>
            </div>
          </div>

          <div className="video-clip-grid flex gap-3 overflow-x-auto pb-1 snap-x sm:grid sm:grid-cols-3 sm:overflow-visible">
            {GMS_CLIPS.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => selectClip(index)}
                className={`video-clip-card card min-w-[42%] shrink-0 snap-start overflow-hidden text-left transition-colors sm:min-w-0 ${
                  activeClip === index
                    ? "border-[#8B5CF6] ring-1 ring-[#8B5CF6]/20"
                    : "card-hover"
                }`}
                aria-pressed={activeClip === index}
              >
                <div className="relative aspect-video overflow-hidden bg-[#F8FAFC]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.poster} alt="" className="h-full w-full object-cover" />
                  <span className="absolute bottom-1.5 right-1.5 rounded bg-[#111827]/75 px-1.5 py-0.5 text-[9px] text-white">
                    {item.duration}
                  </span>
                </div>
                <p className="truncate px-3 py-2 text-xs font-medium text-[#111827]">
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
