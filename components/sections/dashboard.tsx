"use client";

import { useEffect, useRef } from "react";
import { Bot, TrendingUp, Wrench, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { initDashboardAnimations } from "@/lib/gsap-animations";

const metrics = [
  { l: "Open Jobs", value: 18, icon: Wrench },
  { l: "Today Revenue", value: 9.2, icon: TrendingUp, prefix: "$", suffix: "k", decimals: 1 },
  { l: "Customers", value: 1240, icon: Users, separator: true },
  { l: "Bay Usage", value: 84, icon: Bot, suffix: "%" },
] as const;

const chartHeights = [40, 55, 48, 70, 62, 78, 65, 82] as const;

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

        <div ref={panelRef} className="dash-panel">
          <div className="dash-chrome flex items-center gap-2 px-4 py-3 sm:px-5">
            <span className="dash-dot dash-dot-close" />
            <span className="dash-dot dash-dot-min" />
            <span className="dash-dot dash-dot-max" />
            <span className="dash-chrome-title mx-auto text-xs font-medium">
              GMS AI · Workshop Dashboard
            </span>
          </div>

          <div className="dash-body space-y-4 p-4 sm:space-y-5 sm:p-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.l} className="dash-metric">
                  <span className="dash-metric-icon">
                    <m.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <p className="dash-metric-label text-xs">{m.l}</p>
                  <p
                    className="dash-metric-value font-heading mt-1 text-lg font-bold sm:text-xl"
                    data-value={m.value}
                    data-prefix={"prefix" in m ? m.prefix : ""}
                    data-suffix={"suffix" in m ? m.suffix : ""}
                    data-decimals={"decimals" in m ? String(m.decimals) : "0"}
                    data-separator={"separator" in m && m.separator ? "true" : "false"}
                  >
                    0
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="dash-chart md:col-span-2">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <p className="dash-chart-title text-xs font-semibold uppercase tracking-wide">
                    Service reports
                  </p>
                  <span className="dash-chart-badge text-[10px] font-medium">Live</span>
                </div>
                <div className="dash-bars flex h-24 items-end gap-1.5 sm:h-32">
                  {chartHeights.map((h, i) => (
                    <div
                      key={i}
                      className="dash-bar group/bar relative flex-1"
                      style={{ height: `${h}%` }}
                    >
                      <span className="dash-bar-fill block h-full w-full rounded-t-md" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="dash-ai-panel">
                <div className="flex gap-3">
                  <span className="dash-ai-icon shrink-0">
                    <Bot className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="dash-ai-title text-xs font-semibold">AI suggestion</p>
                    <p className="dash-ai-text mt-1.5 text-xs leading-relaxed">
                      Schedule brake inspections for 4 returning BMW customers this week.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dash-footer">
              <p className="dash-footer-text text-xs">
                <span className="dash-footer-accent">Recent</span>
                {" · "}Oil change · Job #2041 · Audi A4 ·{" "}
                <span className="dash-footer-status">Completed</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
