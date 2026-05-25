"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Play, Pause, Sparkles } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { GmsLogo } from "../brand/gms-logo";

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
    <section id="preview" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading
          badge="Preview"
          title="See GMS AI in your workshop"
          description="Short clips from real garage workflows — billing, diagnostics, and service bay operations powered by AI."
        />

        <div className="mt-10 space-y-4">
          <div className="gsap-reveal relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] shadow-sm">
            <div className="flex items-center gap-2 border-b border-[#E5E7EB] bg-white px-3 py-2">
              <GmsLogo size={28} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-[#111827]">
                  {clip.label}
                </p>
                <p className="truncate text-[10px] text-[#6b7280]">
                  by Developer Box AI · {clip.duration}
                </p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-[#EDE9FE] px-2 py-0.5 text-[10px] font-medium text-[#8B5CF6]">
                <Sparkles className="h-3 w-3" aria-hidden />
                GMS AI
              </span>
            </div>

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
              Your browser does not support video playback.
            </video>

            <button
              type="button"
              onClick={togglePlay}
              className={`absolute inset-0 top-[41px] flex cursor-pointer items-center justify-center bg-[#111827]/10 transition-opacity duration-200 hover:bg-[#111827]/15 ${
                playing ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
              aria-label={`Play ${clip.label} preview`}
              tabIndex={playing ? -1 : 0}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white transition-colors hover:border-[#8B5CF6]/40">
                <Play
                  className="ml-0.5 h-4 w-4 text-[#8B5CF6]"
                  fill="#8B5CF6"
                />
              </span>
            </button>

            <button
              type="button"
              onClick={togglePlay}
              className={`absolute bottom-3 right-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#E5E7EB] bg-white/95 transition-opacity hover:border-[#8B5CF6]/40 ${
                playing ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-label="Pause video"
              tabIndex={playing ? 0 : -1}
            >
              <Pause className="h-3.5 w-3.5 text-[#8B5CF6]" />
            </button>

            <div className="pointer-events-none absolute bottom-3 left-3 max-w-[55%] rounded-lg bg-white/90 px-2 py-1 text-[10px] font-medium text-[#6b7280] backdrop-blur-sm">
              {ready ? clip.hint : "Loading clip…"}
            </div>
          </div>

          <div className="video-clip-grid grid grid-cols-3 gap-2 sm:gap-3">
            {GMS_CLIPS.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => selectClip(index)}
                className={`video-clip-card group cursor-pointer overflow-hidden rounded-xl border text-left transition-colors ${
                  activeClip === index
                    ? "border-[#8B5CF6] bg-[#EDE9FE]/40 ring-1 ring-[#8B5CF6]/30"
                    : "border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#8B5CF6]/35"
                }`}
                aria-label={`Preview clip: ${item.label}`}
                aria-pressed={activeClip === index}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#111827]/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.poster}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-1 right-1 rounded bg-[#111827]/75 px-1 py-0.5 text-[9px] font-medium text-white">
                    {item.duration}
                  </span>
                </div>
                <div className="px-2 py-1.5">
                  <p className="truncate text-[11px] font-semibold text-[#111827] sm:text-xs">
                    {item.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
