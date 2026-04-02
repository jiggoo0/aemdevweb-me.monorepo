/**
 * [SYSTEM MODULE]: GLOBAL_EMERGENCY_OVERLAY v18.0.0 (ULTIMATE_STABLE)
 * [STRATEGY]: High-Fidelity Recovery | Root-Level Quarantine | Hardware Accelerated
 */

"use client";

import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @component GlobalError
 * @description ด่านสุดท้ายของระบบ (The Last Stand) สำหรับรับมือกับ Fatal Error ที่ Layout หลักพัง
 */
export default function GlobalError({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  return (
    <html lang="th">
      <body className="bg-[#020617] text-white antialiased">
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-6 text-center">
          {/* 01. CRITICAL INFRASTRUCTURE BACKGROUND */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at center, #ef4444 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-600/10 blur-[160px]" />

          <div className="relative z-10 max-w-2xl space-y-12">
            {/* Critical Node Icon */}
            <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full bg-rose-600/20" />
              <div className="shadow-glow-destructive flex h-24 w-24 items-center justify-center rounded-[2rem] bg-rose-600">
                <IconRenderer
                  name="ShieldAlert"
                  size={56}
                  className="text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-black tracking-tighter uppercase italic md:text-7xl">
                Global <br /> <span className="text-rose-500">System_Failure.</span>
              </h1>
              <div className="mx-auto max-w-md border-l-4 border-rose-500 pl-8 text-left">
                <p className="text-lg leading-relaxed font-medium text-slate-400 italic">
                  ระบบหลักตรวจพบความผิดพลาดวิกฤต (Fatal Error) เพื่อความปลอดภัยของข้อมูล
                  ระบบได้เข้าสู่โหมดควบคุมฉุกเฉิน
                </p>
              </div>
            </div>

            {/* Emergency Actions */}
            <div className="flex flex-col items-center justify-center gap-6">
              <button
                onClick={() => reset()}
                className="group flex h-16 w-full items-center justify-center gap-4 rounded-2xl bg-white px-12 text-sm font-black tracking-[0.3em] text-black uppercase transition-all hover:bg-rose-500 hover:text-white active:scale-95 sm:w-auto"
              >
                <IconRenderer
                  name="Zap"
                  size={20}
                  className="transition-transform group-hover:scale-125"
                />
                Hard_Reset_Protocol
              </button>

              <p className="animate-pulse font-mono text-[9px] font-bold tracking-[0.5em] uppercase opacity-30">
                Awaiting_System_Reboot_Signal...
              </p>
            </div>

            {/* Trace Diagnostics */}
            <div className="w-full border-t border-white/10 pt-10">
              <div className="flex flex-col items-center justify-between gap-4 font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-20 md:flex-row">
                <span>Ref: EMERGENCY_NODE_v{SITE_CONFIG.project.version}</span>
                {error.digest && <span>Trace: {error.digest}</span>}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
