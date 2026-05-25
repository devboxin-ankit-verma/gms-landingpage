"use client";

import { useEffect, useRef } from "react";
import { Bot, TrendingUp, Wrench, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { initDashboardAnimations } from "@/lib/gsap-animations";

export function DashboardSection() {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return initDashboardAnimations(panelRef.current);
  }, []);

  return (
    <section id="dashboard" className="section-pad bg-white">
      <Container>
        <SectionHeading
          badge="Dashboard"
          title="Your workshop at a glance"
          description="Customer data, service reports, AI suggestions, and analytics in one minimal interface."
          className="section-heading-gap"
        />

        <div ref={panelRef} className="card overflow-hidden">
          <div className="flex items-center gap-2 border-b border-[#E5E7EB] px-4 py-3 sm:px-5">
            <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
            <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
            <span className="h-2 w-2 rounded-full bg-[#E5E7EB]" />
            <span className="mx-auto text-xs text-[#6b7280]">
              GMS AI · Workshop Dashboard
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5 md:grid-cols-4">
            {[
              { l: "Open Jobs", v: "18", icon: Wrench },
              { l: "Today Revenue", v: "$9.2k", icon: TrendingUp },
              { l: "Customers", v: "1,240", icon: Users },
              { l: "Bay Usage", v: "84%", icon: Bot },
            ].map((m) => (
              <div
                key={m.l}
                className="dash-metric rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-4"
              >
                <m.icon className="mb-2 h-4 w-4 text-[#8B5CF6]" strokeWidth={1.75} />
                <p className="text-xs text-[#6b7280]">{m.l}</p>
                <p className="font-heading mt-1 text-lg font-bold text-[#111827]">
                  {m.v}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 border-t border-[#E5E7EB] p-4 sm:p-5 md:grid-cols-3">
            <div className="dash-chart rounded-xl border border-[#E5E7EB] p-4 md:col-span-2">
              <p className="mb-3 text-xs font-medium text-[#6b7280]">Service reports</p>
              <div className="flex h-24 items-end gap-1.5 sm:h-28">
                {[40, 55, 48, 70, 62, 78, 65, 82].map((h, i) => (
                  <div
                    key={i}
                    className="dash-bar flex-1 rounded-t bg-[#8B5CF6]/25"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="dash-ai-panel rounded-xl border border-[#EDE9FE] bg-[#EDE9FE]/30 p-4">
              <div className="flex gap-3">
                <Bot className="h-4 w-4 shrink-0 text-[#8B5CF6]" />
                <div>
                  <p className="text-xs font-semibold text-[#111827]">AI suggestion</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">
                    Schedule brake inspections for 4 returning BMW customers this week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB] px-4 py-3 sm:px-5">
            <p className="text-xs text-[#6b7280]">
              Recent: Oil change · Job #2041 · Audi A4 · Completed
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
