"use client";

import { useEffect, useRef } from "react";
import { Bot } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { initDashboardAnimations } from "@/lib/gsap-animations";

export function DashboardSection() {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return initDashboardAnimations(panelRef.current);
  }, []);

  return (
    <section id="dashboard" className="bg-[#F8FAFC] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          badge="Dashboard"
          title="Your workshop at a glance"
          description="Customer data, service reports, AI suggestions, and analytics in one minimal interface."
        />

        <div
          ref={panelRef}
          className="mt-12 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white"
        >
          <div className="flex items-center gap-2 border-b border-[#E5E7EB] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5E7EB]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5E7EB]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5E7EB]" />
            <span className="mx-auto text-xs text-[#6b7280]">
              GMS AI · Workshop Dashboard
            </span>
          </div>

          <div className="grid gap-4 p-4 md:grid-cols-4 md:p-6">
            {[
              { l: "Open Jobs", v: "18" },
              { l: "Today Revenue", v: "$9.2k" },
              { l: "Customers", v: "1,240" },
              { l: "Bay Usage", v: "84%" },
            ].map((m) => (
              <div
                key={m.l}
                className="dash-metric rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-4"
              >
                <p className="text-xs text-[#6b7280]">{m.l}</p>
                <p className="mt-1 font-[family-name:var(--font-heading)] text-xl font-bold text-[#111827]">
                  {m.v}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 border-t border-[#E5E7EB] p-4 md:grid-cols-3 md:p-6">
            <div className="dash-chart rounded-xl border border-[#E5E7EB] p-4 md:col-span-2">
              <p className="mb-3 text-xs font-medium text-[#6b7280]">
                Service reports
              </p>
              <div className="flex h-28 items-end gap-2">
                {[40, 55, 48, 70, 62, 78, 65, 82].map((h, i) => (
                  <div
                    key={i}
                    className="dash-bar flex-1 rounded-t bg-[#8B5CF6]/30"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="dash-ai-panel rounded-xl border border-[#EDE9FE] bg-[#EDE9FE]/40 p-4">
              <div className="flex gap-2">
                <Bot className="h-4 w-4 shrink-0 text-[#8B5CF6]" />
                <div>
                  <p className="text-xs font-semibold text-[#111827]">
                    AI suggestion
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6b7280]">
                    Schedule brake inspections for 4 returning BMW customers this
                    week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB] px-4 py-3 md:px-6">
            <p className="text-xs text-[#6b7280]">
              Recent: Oil change · Job #2041 · Audi A4 · Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
