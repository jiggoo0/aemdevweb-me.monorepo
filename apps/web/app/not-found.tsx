/**
 * [SYSTEM MODULE]: NOT_FOUND_UI v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Technical Resilience | Aesthetic Recovery | GPU-Accelerated UI
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import Link from "next/link";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

/**
 * @component NotFound
 * @description หน้าจอแสดงผลกรณีไม่พบหน้าเว็บ (HTTP 404)
 * [STABILIZED]: แก้ไข Typed Routes Error โดยใช้แท็ก <a> สำหรับลิงก์ภายนอก
 */
export default function NotFound() {
  return (
    <div className="bg-surface-main selection:bg-brand-primary/20 relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 transition-colors duration-500">
      {/* --- 01. ATMOSPHERIC INFRASTRUCTURE: พื้นผิวทางวิศวกรรม --- */}
      <div
        className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
      />

      {/* Ambient Aura: GPU Accelerated Glow */}
      <div
        className="bg-brand-primary/10 absolute top-[-10%] right-[-10%] h-[600px] w-[600px] transform-gpu rounded-full opacity-30 blur-[120px] will-change-transform"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] h-[400px] w-[400px] transform-gpu rounded-full bg-blue-600/5 mix-blend-screen blur-[100px]"
        aria-hidden="true"
      />

      {/* --- 02. ERROR DIAGNOSTIC DISPLAY: ส่วนประมวลผลความผิดพลาด --- */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Error Code Anchor: High-Fidelity Layering */}
        <div className="relative mb-16 flex items-center justify-center">
          <span className="text-border transform-gpu text-[12rem] leading-none font-black tracking-tighter opacity-20 select-none md:text-[16rem]">
            404
          </span>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "bg-surface-card border-border shadow-pro-xl group rounded-section flex h-24 w-24 items-center justify-center border backdrop-blur-xl transition-all duration-700",
                "hover:border-brand-primary/40 transform-gpu hover:rotate-12",
              )}
            >
              <IconRenderer
                name="SearchX"
                size={48}
                className="text-brand-primary animate-pulse"
                strokeWidth={1.2}
              />
            </div>
          </div>
        </div>

        {/* Diagnostic Message: Specialist Narrative */}
        <div className="mb-14 space-y-6">
          <h1 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl">
            Route <br /> <span className="text-brand-primary">Not_Found.</span>
          </h1>
          <div className="border-brand-primary/50 mx-auto max-w-lg border-l-4 pl-8 text-left">
            <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-90">
              ขออภัยครับ พิกัดข้อมูลที่คุณเรียกใช้งานไม่พบในโหนดปัจจุบัน
              <span className="text-text-primary mt-2 block font-black not-italic">
                // ระบบแนะนำให้คุณกลับไปตั้งหลักที่หน้าแรก
                หรือรีดประสิทธิภาพด้วยการปรึกษาทีมงานทันทีครับ
              </span>
            </p>
          </div>
        </div>

        {/* --- 03. RECOVERY ACTIONS: ระบบกู้คืนการนำทาง --- */}
        <div className="flex w-full flex-col items-center gap-6 sm:w-auto sm:flex-row">
          {/* Internal Link: ใช้ Next.js Link ได้ปกติสำหรับ Internal Route "/" */}
          <Link
            href="/"
            className="bg-text-primary text-surface-main hover:bg-brand-primary shadow-glow group flex w-full transform-gpu items-center justify-center gap-x-4 rounded-[1.5rem] px-10 py-5 text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:-translate-y-1 sm:w-auto"
          >
            <IconRenderer name="Home" size={18} />
            กลับไปตั้งหลักหน้าแรก
          </Link>

          {/* [FIXED]: เปลี่ยนจาก <Link> เป็นแท็ก <a> สำหรับลิงก์ภายนอก เพื่อแก้ปัญหา Typed Routes TS2322 */}
          <a
            href={SITE_CONFIG.links.line}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-offset border-border text-text-primary hover:border-brand-primary flex w-full items-center justify-center gap-x-4 rounded-[1.5rem] border px-10 py-5 text-[11px] font-black tracking-[0.3em] uppercase transition-all hover:-translate-y-1 sm:w-auto"
          >
            <IconRenderer name="MessageCircle" size={18} />
            ปรึกษา Specialist
          </a>
        </div>

        {/* --- 04. SYSTEM TRACE META: ข้อมูลอ้างอิงของระบบ --- */}
        <div className="border-border mt-24 w-full border-t pt-10">
          <div
            suppressHydrationWarning
            className="text-text-muted/40 flex flex-col items-center justify-between gap-4 font-mono text-[9px] font-black tracking-[0.4em] uppercase md:flex-row"
          >
            <span>Node_Status: 404_UNREACHABLE</span>
            <div className="bg-brand-primary/20 hidden h-1 w-1 rounded-full md:block" />
            <span>Trace_ID: SYSTEM_NODE_V18 // STABLE_RECOVERY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
