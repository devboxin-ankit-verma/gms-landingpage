"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Loader } from "./loader";
import { Navbar } from "./navbar";
import { FooterSection } from "./sections/footer";
import { SiteCopyright } from "./sections/site-copyright";
import { useLenis } from "@/hooks/use-lenis";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { usePremiumAnimations } from "@/hooks/use-premium-animations";
import { useMagneticButtons } from "@/hooks/use-magnetic-buttons";

const HeroSection = dynamic(
  () => import("./sections/hero").then((m) => m.HeroSection),
  { ssr: false }
);
const FeatureTimelineSection = dynamic(
  () =>
    import("./sections/feature-timeline").then((m) => m.FeatureTimelineSection),
  { ssr: false }
);
const BentoFeaturesSection = dynamic(
  () => import("./sections/bento-features").then((m) => m.BentoFeaturesSection)
);
const DashboardSection = dynamic(
  () => import("./sections/dashboard").then((m) => m.DashboardSection)
);
const VideoSection = dynamic(
  () => import("./sections/video-showcase").then((m) => m.VideoSection)
);
const TestimonialsSection = dynamic(
  () => import("./sections/testimonials").then((m) => m.TestimonialsSection)
);
const ContactSection = dynamic(
  () => import("./sections/contact").then((m) => m.ContactSection)
);
const FaqSection = dynamic(
  () => import("./sections/faq").then((m) => m.FaqSection)
);

export function PageWrapper() {
  const [loaded, setLoaded] = useState(false);
  useLenis();
  useHashScroll();
  usePremiumAnimations(loaded);
  useMagneticButtons(loaded);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <FeatureTimelineSection />
            <BentoFeaturesSection />
            <DashboardSection />
            <VideoSection />
            <TestimonialsSection />
            <section
              aria-label="FAQ and contact"
              className="faq-contact-section section-pad bg-white"
            >
              <div className="faq-contact-grid mx-auto grid w-full min-w-0 max-w-7xl items-start gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:gap-16">
                <FaqSection />
                <ContactSection />
              </div>
            </section>
          </main>
          <FooterSection />
          <SiteCopyright />
        </>
      )}
    </>
  );
}
