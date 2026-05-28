"use client";

import { cn } from "@/lib/utils";

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={cn("h-7 w-7", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.7 15.8c0 5.9-4.8 10.7-10.7 10.7-1.9 0-3.8-.5-5.4-1.5l-4 1.3 1.3-3.9c-1.1-1.7-1.6-3.7-1.6-5.8C6.3 10 11.1 5.2 17 5.2c5.9 0 10.7 4.8 10.7 10.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13.2 11.5c-.3-.7-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.3 3.4.2.2 2.4 3.9 6 5.3 3 .1 3-.2 3.5-.8.5-.6.8-1.4.9-1.6.1-.2.1-.4 0-.6-.1-.2-.3-.3-.6-.5l-2-.9c-.2-.1-.4-.1-.6.2l-.8 1c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.6-.7c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5l-.8-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/9111333253"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp: 9111333253"
      className="fixed bottom-5 right-5 z-60 inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#25D366] to-[#128C7E] shadow-[0_14px_28px_rgba(16,185,129,0.28),0_8px_14px_rgba(0,0,0,0.10)] ring-1 ring-white/65 transition-transform hover:-translate-y-0.5 active:translate-y-0"
    >
      <WhatsappIcon className="h-7 w-7 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]" />
    </a>
  );
}

