import { Container } from "@/components/layout/container";
import { StaticPageShell } from "@/components/static-page-shell";

export default function TermsPage() {
  return (
    <StaticPageShell>
      <main className="section-pad bg-white">
        <Container>
          <h1 className="text-h2 text-[#111827]">Terms &amp; Conditions</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
            This page will include terms for using GMS AI.
          </p>
        </Container>
      </main>
    </StaticPageShell>
  );
}

