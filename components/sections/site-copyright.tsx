import { Container } from "@/components/layout/container";

export function SiteCopyright() {
  return (
    <div className="site-copyright bg-[#F8FAFC] py-4">
      <Container>
        <p className="text-center text-xs leading-relaxed text-[#6b7280] sm:text-sm">
          Garage Master AI · Powered by{" "}
          <a
            href="https://developerbox.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#7C3AED] transition-colors hover:text-[#5B21B6]"
          >
            Developerbox Ai Factory
          </a>
          {" "}
          · © 2026
        </p>
      </Container>
    </div>
  );
}
