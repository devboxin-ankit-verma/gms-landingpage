import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { SiteCopyright } from "@/components/sections/site-copyright";
import { WhatsappFloat } from "@/components/whatsapp-float";

export function StaticPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "calc(var(--header-h) + 1rem)" }}>{children}</div>
      <FooterSection />
      <SiteCopyright />
      <WhatsappFloat />
    </>
  );
}

