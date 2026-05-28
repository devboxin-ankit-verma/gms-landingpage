import { Container } from "@/components/layout/container";
import { StaticPageShell } from "@/components/static-page-shell";

export default function AboutPage() {
  return (
    <StaticPageShell>
      <main className="section-pad bg-white">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <h1 className="text-h2 text-[#111827]">About</h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
                GMS AI helps garages and workshops run day-to-day operations with clarity — from
                customer intake and job cards to billing, follow-ups, and performance tracking.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
                Our goal is simple: reduce manual work, bring consistency to your workflow, and
                make your team faster without adding complexity. GMS AI is designed to feel
                lightweight, modern, and practical on the floor.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
                Built by{" "}
                <span className="font-medium text-[#111827]">Developerbox Ai Factory</span>, GMS AI
                focuses on real workshop needs — clear communication, clean records, and a system
                your staff can actually adopt.
              </p>
            </div>

            <div className="card overflow-hidden">
              <img
                src="/illustrations/about.svg"
                alt="GMS AI overview illustration"
                className="block w-full"
              />
            </div>
          </div>
        </Container>
      </main>
    </StaticPageShell>
  );
}

