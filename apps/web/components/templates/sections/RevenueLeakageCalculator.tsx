/**
 * [SPECIALIST COMPONENT]: REVENUE_LEAKAGE_ENGINE v18.5.0 (EXECUTIVE_STEALTH)
 * [STRATEGY]: Precise Matrix Simulation | High-End Depth | Kinetic Feedback
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useMemo, useEffect, memo } from "react";
import { Button } from "@/components/ui/button";
import type { BaseTemplateProps } from "@/types";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

export default function RevenueLeakageCalculator({
  data: _data,
  suppressUI,
}: Partial<BaseTemplateProps>) {
  const [mounted, setMounted] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // --- 1. Variables State ---
  const [traffic, setTraffic] = useState<number>(50000);
  const [aov, setAov] = useState<number>(1500);
  const [conversionRate, setConversionRate] = useState<number>(2.0);
  const [currentSpeed, setCurrentSpeed] = useState<number>(4.0);

  const targetSpeed = 1.0;

  // --- 2. Calculation Logic ---
  const { monthlyLoss, yearlyLoss } = useMemo(() => {
    if (currentSpeed <= targetSpeed) return { monthlyLoss: 0, yearlyLoss: 0 };
    const diff = currentSpeed - targetSpeed;
    const lossPercentage = diff * 0.07;
    const conversionLoss = (conversionRate / 100) * lossPercentage;
    const directLoss = Math.floor(traffic * conversionLoss * aov);
    const seoTrafficLeakage = traffic * (diff * 0.075);
    const seoLossVal = Math.floor(seoTrafficLeakage * (conversionRate / 100) * aov);
    const mLoss = directLoss + seoLossVal;
    return { monthlyLoss: mLoss, yearlyLoss: mLoss * 12 };
  }, [traffic, aov, conversionRate, currentSpeed]);

  // Handle calculation effect for 'authenticity'
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 400);
    return () => clearTimeout(timer);
  }, [traffic, aov, conversionRate, currentSpeed]);

  useEffect(() => setMounted(true), []);

  if (suppressUI) return null;

  return (
    <section className="border-border/40 relative overflow-hidden border-y bg-[var(--surface-main)] py-24 md:py-40">
      {/* 01. MATRIX INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.02]" />
      <div className="pointer-events-none absolute top-0 -left-1/4 h-[600px] w-[600px] rounded-full bg-[var(--color-brand-primary)]/5 blur-[140px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8">
        {/* --- STRATEGIC HEADER --- */}
        <header className="mb-20 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/5 px-6 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)]" />
            <span className="font-sans text-[11px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
              เครื่องมือประเมินความเสี่ยงธุรกิจ
            </span>
          </div>
          <h2 className="text-text-primary text-4xl leading-tight font-black tracking-tighter uppercase italic md:text-7xl">
            ประเมิน <br />{" "}
            <span className="text-[var(--color-brand-primary)]">รายได้ที่สูญเสีย.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg font-medium italic opacity-80 md:text-xl">
            “ทุกมิลลิวินาทีที่เว็บคุณช้า คือกำไรสุทธิที่กำลังไหลออกจากธุรกิจโดยไม่รู้ตัว”
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* LEFT: Matrix Inputs */}
          <div className="glass-card rounded-section border-border/50 bg-surface-card/80 shadow-pro-xl border p-8 backdrop-blur-md md:p-16 lg:col-span-7">
            <div className="border-border/10 mb-12 flex items-center justify-between border-b pb-6">
              <h3 className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
                ระบุข้อมูลธุรกิจของคุณ
              </h3>
              <div className="flex gap-1">
                <div className="bg-border h-1 w-4 rounded-full" />
                <div className="h-1 w-8 rounded-full bg-[var(--color-brand-primary)]" />
              </div>
            </div>

            <div className="space-y-12">
              <InputGroup
                label="จำนวนผู้เข้าชม (ต่อเดือน)"
                value={mounted ? traffic.toLocaleString() : "0"}
                unit="Users"
                min={1000}
                max={500000}
                step={1000}
                current={traffic}
                onChange={setTraffic}
              />
              <InputGroup
                label="มูลค่าเฉลี่ย (ต่อออเดอร์)"
                value={mounted ? `฿${aov.toLocaleString()}` : "0"}
                unit="THB"
                min={100}
                max={10000}
                step={100}
                current={aov}
                onChange={setAov}
              />
              <InputGroup
                label="อัตราการปิดการขาย (%)"
                value={`${conversionRate.toFixed(1)}%`}
                unit="Rate"
                min={0.5}
                max={10.0}
                step={0.1}
                current={conversionRate}
                onChange={setConversionRate}
              />
              <div className="border-border/10 border-t pt-10">
                <InputGroup
                  label="ความเร็วเว็บไซต์เดิม (วินาที)"
                  value={`${currentSpeed.toFixed(1)}s`}
                  unit="Delay"
                  min={1.0}
                  max={10.0}
                  step={0.5}
                  current={currentSpeed}
                  onChange={setCurrentSpeed}
                  isWarning={currentSpeed > 3}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Real-time Ledger */}
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <div className="rounded-section bg-text-primary shadow-pro-xl relative flex flex-col overflow-hidden p-10 text-white md:p-16">
              {/* Data Overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "radial-gradient(#fff 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--color-brand-primary)] opacity-20 blur-[100px]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-sans text-[11px] font-bold tracking-widest text-[var(--color-brand-primary)] uppercase">
                    ผลลัพธ์การคำนวณ
                  </span>
                  <div className={cn("h-2 w-2 rounded-full bg-emerald-500", isCalculating && "")} />
                </div>

                <div className="mb-12 space-y-2">
                  <p className="font-sans text-[11px] font-bold text-white/80 uppercase">
                    รายได้ที่อาจสูญเสีย (ต่อเดือน)
                  </p>
                  <h4
                    className={cn(
                      "font-mono text-5xl font-black tracking-tighter italic tabular-nums transition-all duration-300 md:text-7xl",
                      isCalculating ? "scale-95 opacity-40" : "scale-100 opacity-100",
                    )}
                  >
                    {mounted ? `฿${monthlyLoss.toLocaleString()}` : "฿0"}
                  </h4>
                </div>

                <div className="mb-16 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-[12px] font-bold text-white/80 uppercase italic">
                      ความสูญเสียสะสมต่อปี
                    </span>
                    <span className="text-xl font-black text-[var(--color-brand-primary)] italic tabular-nums">
                      ฿{(yearlyLoss / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed font-medium text-white/90 italic">
                    “การปล่อยให้เว็บไซต์ทำงานช้า ไม่ใช่แค่ปัญหาทางเทคนิค
                    แต่คือการสูญเสียลูกค้ารายสำคัญไปให้คู่แข่งทุกๆ วัน”
                  </p>
                </div>

                <div className="mt-auto space-y-6">
                  <Button
                    href={SITE_CONFIG.links.line}
                    className="h-16 w-full rounded-2xl bg-[var(--color-brand-primary)] text-[13px] font-bold tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-95"
                  >
                    ปรึกษาแนวทางแก้ไข (ฟรี)
                  </Button>
                  <p className="text-center font-sans text-[10px] font-bold tracking-widest text-white/60 uppercase">
                    พร้อมให้คำปรึกษาตลอด 24 ชั่วโมง
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InputGroupProps {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (val: number) => void;
  isWarning?: boolean;
}

const InputGroup = memo(
  ({ label, value, unit, min, max, step, current, onChange, isWarning }: InputGroupProps) => (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <span className="text-text-muted font-sans text-[10px] font-bold tracking-widest uppercase opacity-80">
            {label}
          </span>
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "text-2xl font-black tracking-tighter uppercase italic md:text-3xl",
                isWarning ? "text-[var(--color-brand-primary)]" : "text-text-primary",
              )}
            >
              {value}
            </span>
            <span className="text-text-muted font-mono text-[9px] font-bold uppercase opacity-30">
              [{unit}]
            </span>
          </div>
        </div>
      </div>
      <div className="group relative flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={(e) => onChange(Number(e.target.value))}
          className="bg-border/30 accent-brand-primary hover:bg-border/50 h-1.5 w-full cursor-pointer appearance-none rounded-full transition-all outline-none"
        />
      </div>
    </div>
  ),
);

InputGroup.displayName = "InputGroup";
