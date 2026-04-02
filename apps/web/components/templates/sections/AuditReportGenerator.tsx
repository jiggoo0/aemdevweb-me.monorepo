/**
 * [SPECIALIST COMPONENT]: AUDIT_NEURAL_ENGINE v18.5.0 (TACTICAL_READY)
 * [STRATEGY]: Realistic Terminal Simulation | Multi-Stage Synthesis | Zero-JS Feel
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";

interface AuditLog {
  timestamp: string;
  msg: string;
  status: "ok" | "warn" | "fail";
}

export const AuditReportGenerator = memo(() => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "completed">("idle");
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const addLog = useCallback((msg: string, status: "ok" | "warn" | "fail" = "ok") => {
    // [PERFORMANCE]: ป้องกันการเรียกใช้ new Date() ระหว่างขั้นตอน Prerendering บน Server
    if (typeof window === "undefined") return;

    const timestamp = new Date().toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setLogs((prev) => [...prev.slice(-8), { timestamp, msg, status }]);
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    if (status === "scanning") {
      const steps: { p: number; msg: string; s: "ok" | "warn" | "fail" }[] = [
        { p: 10, msg: "กำลังเตรียมระบบตรวจสอบเว็บไซต์...", s: "ok" },
        { p: 25, msg: "Tracing Core Web Vitals (LCP/CLS)...", s: "ok" },
        { p: 40, msg: "Analyzing Semantic Document Object Model...", s: "ok" },
        { p: 55, msg: "WARN: Found Unoptimized Assets Path.", s: "warn" },
        { p: 70, msg: "Simulating ความเร็ว from 12 Regional Nodes...", s: "ok" },
        { p: 85, msg: "Synthesizing Competitor Gap Report...", s: "ok" },
        { p: 100, msg: "Finalizing Technical Audit Ledger.", s: "ok" },
      ];

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < steps.length) {
          const step = steps[currentStep];
          setProgress(step.p);
          addLog(step.msg, step.s);
          currentStep++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStatus("completed"), 1000);
        }
      }, 1200);

      return () => clearInterval(interval);
    }
  }, [status, addLog]);

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.includes(".")) return;
    setStatus("scanning");
    setLogs([]);
    setProgress(0);
  };

  return (
    <section id="audit-simulator" className="mx-auto w-full px-4 py-24 md:py-32">
      <div
        className={cn(
          "border-border/50 bg-surface-card relative overflow-hidden border transition-all duration-700",
          "rounded-card-lg shadow-pro-xl mx-auto max-w-6xl",
          status === "scanning" && "ring-brand-primary/20 ring-2",
        )}
      >
        <div className="relative z-10 grid min-h-[500px] grid-cols-1 lg:grid-cols-12">
          {/* LEFT: Interaction Zone */}
          <div className="flex flex-col justify-center p-8 md:p-16 lg:col-span-7">
            <div
              className={cn(
                "space-y-10 transition-all duration-700",
                status !== "idle" && "pointer-events-none scale-95 opacity-40 blur-[2px]",
              )}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-5 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
                  <span className="font-mono text-[9px] font-black tracking-[0.4em] text-[var(--color-brand-primary)] uppercase">
                    ระบบวิเคราะห์ประสิทธิภาพเว็บไซต์
                  </span>
                </div>
                <h2 className="text-text-primary text-4xl leading-tight font-black tracking-tighter uppercase italic md:text-6xl">
                  Analyze your <br />{" "}
                  <span className="text-[var(--color-brand-primary)]">Digital Edge.</span>
                </h2>
                <p className="text-text-secondary text-lg font-medium italic opacity-80">
                  ระบุช่องโหว่ทางเทคนิคที่คุณอาจมองข้าม <br className="hidden md:block" />
                  ด้วยระบบตรวจสอบโครงสร้างพื้นฐานระดับเอ็นเตอร์ไพรส์
                </p>
              </div>

              <form onSubmit={handleStartScan} className="max-w-xl space-y-4">
                <div className="group relative">
                  <input
                    type="text"
                    required
                    placeholder="https://your-domain.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="focus:ring-brand-primary/10 text-text-primary border-border w-full rounded-2xl border bg-[var(--surface-offset)] px-6 py-6 pl-14 text-lg font-bold italic transition-all outline-none focus:border-[var(--color-brand-primary)]"
                  />
                  <div className="absolute top-1/2 left-5 -translate-y-1/2 text-[var(--color-brand-primary)]/40 transition-colors group-focus-within:text-[var(--color-brand-primary)]">
                    <IconRenderer name="Activity" size={24} />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="bg-text-primary h-16 w-full rounded-2xl text-[11px] font-black tracking-[0.3em] text-[var(--surface-main)] uppercase italic transition-all duration-500 hover:bg-[var(--color-brand-primary)]"
                >
                  Execute System Audit
                </Button>
              </form>
            </div>

            {/* Completed Result Overlay */}
            {status === "completed" && (
              <div className="bg-surface-card/90 absolute inset-0 z-20 flex items-center justify-center p-8 backdrop-blur-md">
                <div className="animate-in fade-in zoom-in max-w-md space-y-8 text-center duration-500">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 shadow-sm">
                    <IconRenderer name="CheckCircle" size={40} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic">
                      Audit Sequence <span className="text-emerald-500">Complete.</span>
                    </h3>
                    <p className="text-text-secondary font-medium italic">
                      เราพบโอกาสในการปรับปรุงโครงสร้างเพื่อเพิ่ม ROI ให้ธุรกิจคุณทันที
                      คุณต้องการรับรายงานฉบับเต็มทาง Line หรือไม่?
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button
                      href={SITE_CONFIG.links.line}
                      className="h-14 rounded-xl bg-[var(--color-brand-primary)] text-[10px] font-black tracking-widest uppercase italic"
                    >
                      Connect with Specialist
                    </Button>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-text-muted hover:text-text-primary text-[9px] font-black tracking-widest uppercase transition-colors"
                    >
                      [ Reboot_Audit_Cycle ]
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Data Feed (The 'Authentic' Feel) */}
          <div className="lg:border-border/50 relative flex min-h-[450px] flex-col overflow-hidden border-t bg-[var(--surface-offset)] p-8 lg:col-span-5 lg:border-t-0 lg:border-l">
            <div className="border-border mb-6 flex items-center justify-between border-b pb-4">
              <div className="flex flex-col gap-1">
                <span className="text-text-muted font-mono text-[9px] font-black uppercase opacity-40">
                  บันทึกการทำงาน
                </span>
                <span className="font-mono text-[7px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
                  เชื่อมต่ออย่างปลอดภัย
                </span>
              </div>
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-red-500/40" />
                <div className="h-2 w-2 rounded-full bg-amber-500/40" />
                <div className="h-2 w-2 rounded-full bg-emerald-500/40" />
              </div>
            </div>

            {/* LOG STREAM */}
            <div
              ref={logContainerRef}
              className="scrollbar-thin scrollbar-thumb-border flex-1 space-y-4 overflow-y-auto pr-2 font-mono text-[10px]"
            >
              {logs.length === 0 && status === "idle" && (
                <div className="space-y-2 opacity-20">
                  <p className="">// Initializing_Environment...</p>
                  <p className="delay-150">// Awaiting_Target_Handshake...</p>
                </div>
              )}
              {logs.map((log, i) => (
                <div key={i} className="animate-in slide-in-from-left-2 flex gap-3 duration-300">
                  <span className="text-text-muted shrink-0 opacity-30">[{log.timestamp}]</span>
                  <span
                    className={cn(
                      "flex-1 leading-relaxed",
                      log.status === "warn" && "font-bold text-amber-500",
                      log.status === "fail" && "font-bold text-red-500",
                      log.status === "ok" && "text-text-secondary opacity-80",
                    )}
                  >
                    {log.status === "ok" ? "❯ " : log.status === "warn" ? "⚠ " : "✖ "}
                    {log.msg}
                  </span>
                </div>
              ))}
              {status === "scanning" && (
                <div className="ml-12 h-3 w-1 bg-[var(--color-brand-primary)]" />
              )}
            </div>

            {/* PROGRESS METRIC */}
            <div className="bg-surface-card border-border/50 mt-8 space-y-3 rounded-2xl border p-6">
              <div className="flex items-center justify-between font-mono text-[9px] font-black">
                <span className="text-text-muted uppercase opacity-100">Audit_Synthesis</span>
                <span className="text-[var(--color-brand-primary)]">{Math.round(progress)}%</span>
              </div>
              <div className="bg-border/20 h-1 w-full overflow-hidden rounded-full">
                <div
                  className="h-full bg-[var(--color-brand-primary)] transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between font-mono text-[7px] font-bold tracking-tighter uppercase opacity-50">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AuditReportGenerator.displayName = "AuditReportGenerator";
