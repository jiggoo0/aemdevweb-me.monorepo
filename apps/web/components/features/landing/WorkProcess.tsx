/**
 * [FEATURE COMPONENT]: WORK_PROCESS_SYSTEM v18.1.1 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Hybrid Performance | Zero-Framer
 */

"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types";

interface ProcessStep {
  readonly id: string;
  readonly title: string;
  readonly thTitle: string;
  readonly description: string;
  readonly icon: IconName;
  readonly metric: string;
}

const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "01",
    title: "Audit & Strategy",
    thTitle: "วิเคราะห์เชิงวิศวกรรม",
    description:
      "เจาะลึกถึงรากฐานธุรกิจคุณและคู่แข่ง เพื่อหาช่องว่างและวางแผนรุกตลาดด้วย Technical SEO ที่แม่นยำที่สุด",
    icon: "Search",
    metric: "Deep_Infra_Audit_Done",
  },
  {
    id: "02",
    title: "High-Performance Build",
    thTitle: "พัฒนาระบบพลังสูง",
    description:
      "สร้างโครงสร้างเว็บด้วย Next.js 16 โหลดไวปรู๊ดปร๊าด ลูกค้าไม่ต้องรอนาน พร้อมรับคนเข้าชมหลักแสนได้สบายๆ",
    icon: "Code2",
    metric: "Core_Web_Vitals_100",
  },
  {
    id: "03",
    title: "SEO Schema Injection",
    thTitle: "ฝังโครงสร้างข้อมูล",
    description:
      "เราฝังข้อมูลความเชี่ยวชาญ (E-E-A-T) ลงลึกระดับโค้ด เพื่อให้ AI ยักษ์ใหญ่มั่นใจและกล้าแนะนำแบรนด์คุณ",
    icon: "ShieldCheck",
    metric: "Knowledge_Graph_Active",
  },
  {
    id: "04",
    title: "Authority Monitoring",
    thTitle: "ดูแลการเติบโต",
    description:
      "ทิ้งเรื่องเทคนิคให้เราดูแล เราคอยมอนิเตอร์และปรับจูนระบบให้ธุรกิจของคุณสร้างยอดขายได้อย่างต่อเนื่อง",
    icon: "TrendingUp",
    metric: "ROI_Dominance",
  },
];

const WorkProcess = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            if (index === "header") setHeaderVisible(true);
            else if (index === "footer") setFooterVisible(true);
            else if (index) {
              setVisibleItems((prev) => new Set([...prev, Number(index)]));
            }
          }
        });
      },
      { threshold: 0.1, margin: "-50px" },
    );

    const items = sectionRef.current?.querySelectorAll("[data-animate]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative container mx-auto flex w-full flex-col overflow-hidden px-4 py-24 md:px-8 lg:py-40"
    >
      {/* --- 01. STRATEGIC HEADER (Unified Aesthetic) --- */}
      <header
        data-animate
        data-index="header"
        className={cn(
          "border-border/40 mb-20 flex flex-col justify-between gap-12 border-b pb-12 transition-all duration-1000 md:mb-28 md:pb-16 lg:flex-row lg:items-end",
          headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        )}
      >
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-4 text-[var(--color-brand-primary)]">
            <div className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-md" />
            <span
              suppressHydrationWarning
              className="font-mono text-[10px] font-black tracking-[0.4em] uppercase"
            >
              ขั้นตอนการทำงาน {SITE_CONFIG.project.version}
            </span>
          </div>
          <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Success <br />
            <span className="from-brand-primary bg-gradient-to-r to-emerald-500 bg-clip-text text-transparent">
              Blueprint.
            </span>
          </h2>
        </div>

        <div className="max-w-md border-l-[4px] border-[var(--color-brand-primary)]/50 pl-6 md:border-l-[6px] md:pl-10">
          <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-80 md:text-2xl">
            “เปลี่ยนโครงสร้างธุรกิจให้เป็น <br />
            <span className="text-text-primary decoration-brand-primary font-black underline underline-offset-[8px]">
              เครื่องจักรทำเงิน
            </span>{" "}
            ที่ทรงประสิทธิภาพ”
          </p>
        </div>
      </header>

      {/* --- 02. PROCESS NODES (Symmetry Grid) --- */}
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Connection Line: Hardware Accelerated */}
        <div
          className="via-brand-primary/20 absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent to-transparent lg:block"
          aria-hidden="true"
        />

        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.id}
            data-animate
            data-index={index}
            className={cn(
              "group flex h-full w-full flex-col transition-all duration-1000",
              visibleItems.has(index) ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
            )}
            style={{
              transitionDelay: `${index * 150}ms`,
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div
              className={cn(
                "border-border bg-surface-card/60 relative z-10 flex h-full flex-col overflow-hidden border p-8 transition-all duration-700 md:p-10",
                "rounded-section backdrop-blur-sm",
                "transform-gpu will-change-transform hover:-translate-y-1 hover:border-[var(--color-brand-primary)]/40 hover:shadow-md hover:shadow-sm",
              )}
            >
              {/* Sequential ID Background */}
              <span
                suppressHydrationWarning
                className={cn(
                  "pointer-events-none absolute top-4 right-6 z-0 font-mono text-6xl font-black italic transition-all duration-700 md:text-8xl",
                  "text-border/10 group-hover:text-[var(--color-brand-primary)]/10",
                  !mounted && "opacity-0",
                )}
              >
                {step.id}
              </span>

              {/* Icon Matrix */}
              <div className="relative z-10 mb-10 flex items-center justify-between">
                <div className="border-border group- flex h-14 w-14 items-center justify-center rounded-2xl border bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-all duration-500 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white group-hover:shadow-md md:h-16 md:w-16">
                  <IconRenderer name={step.icon} size={28} strokeWidth={2.5} />
                </div>
                <div className="group-hover: h-2 w-2 rounded-full bg-[var(--color-brand-primary)]/20 group-hover:bg-[var(--color-brand-primary)]" />
              </div>

              {/* Information Hub */}
              <div className="relative z-10 flex-grow space-y-4">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase opacity-60">
                    ขั้นตอน 0{index + 1}
                  </p>
                  <h3 className="text-text-primary text-xl font-black tracking-tight uppercase italic transition-colors group-hover:text-[var(--color-brand-primary)] md:text-2xl">
                    {step.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed font-medium italic opacity-80 md:text-base">
                  {step.description}
                </p>
              </div>

              {/* Metric Verification */}
              <footer className="border-border relative z-10 mt-10 border-t pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-brand-primary)]/10">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-md" />
                  </div>
                  <span className="text-text-muted font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
                    {step.metric}
                  </span>
                </div>
              </footer>
            </div>
          </div>
        ))}
      </div>

      {/* --- 03. CONVERSION HUB --- */}
      <div
        data-animate
        data-index="footer"
        className={cn(
          "mt-24 flex flex-col items-center text-center transition-all duration-1000 md:mt-40",
          footerVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
        )}
      >
        <div className="max-w-3xl space-y-12">
          <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-6xl lg:text-7xl">
            Ready to Build Your <br />
            <span className="text-[var(--color-brand-primary)]">Digital Legacy?</span>
          </h3>

          <div className="flex flex-col items-center gap-8">
            <Button
              asChild
              size="lg"
              variant="neo"
              className="group h-16 w-full transform-gpu rounded-full px-12 shadow-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-md active:scale-95 md:h-20 md:w-auto"
            >
              <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                <span className="mr-4 text-[11px] font-black tracking-[0.3em] uppercase">
                  เริ่มวางกลยุทธ์ทันที
                </span>
                <IconRenderer
                  name="ArrowRight"
                  size={20}
                  className="transition-transform group-hover:translate-x-2"
                />
              </a>
            </Button>
            <p className="text-text-muted font-mono text-[10px] font-black tracking-[0.5em] uppercase opacity-30">
              พร้อมให้บริการทันที
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

WorkProcess.displayName = "WorkProcess";

export default memo(WorkProcess);
