import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/sections/footer";
import { SiteCopyright } from "@/components/sections/site-copyright";
import { WhatsappFloat } from "@/components/whatsapp-float";

export function StaticPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
      <SiteCopyright />
      <WhatsappFloat />
    </>
  );
}

