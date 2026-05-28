import { Container } from "@/components/layout/container";
import { StaticPageShell } from "@/components/static-page-shell";

export default function PrivacyPage() {
  return (
    <StaticPageShell>
      <main className="section-pad bg-white">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <h1 className="text-h2 text-[#111827]">Privacy Policy</h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
                We respect your privacy. This page explains what information we collect, why we
                collect it, and how we keep it secure when you use GMS AI.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
                We collect only what’s required to run the product — for example, account details,
                workshop records you enter, and basic usage analytics to improve reliability and
                performance. We do not sell your personal data.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6b7280] sm:text-base">
                If you have questions or want to request a data export or deletion, you can
                contact us through the site’s contact section. We’ll respond as quickly as
                possible.
              </p>
            </div>

            <div className="card overflow-hidden">
              <img
                src="/illustrations/privacy.svg"
                alt="Privacy and security illustration"
                className="block w-full"
              />
            </div>
          </div>
        </Container>
      </main>
    </StaticPageShell>
  );
}

