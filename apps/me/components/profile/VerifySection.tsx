/** @format */

import React from "react";
import Container from "@/components/layout/Container";
import { ShieldCheck, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";

/**
 * VerifySection Component
 * -------------------------------------------------------------------------
 * แสดงสถานะการยืนยันตัวตน "Verify Unlink thailand" เพื่อสร้างความเชื่อมั่น
 * เน้นความเป็นมืออาชีพและการตรวจสอบได้ระดับสถาบัน
 */
export default function VerifySection() {
  return (
    <section className="relative py-12">
      <Container>
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-gradient-to-br from-white to-blue-50/30 p-8 md:p-12 dark:border-white/5 dark:from-slate-900 dark:to-slate-900/50">
          {/* Background Decoration */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/5 blur-3xl transition-all group-hover:bg-blue-600/10" />
          
          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                <ShieldCheck size={40} strokeWidth={1.5} />
                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 text-blue-600 shadow-lg dark:bg-slate-800">
                  <CheckCircle2 size={20} fill="currentColor" className="text-white dark:text-blue-600" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/50 px-3 py-1 text-[10px] font-black tracking-widest text-blue-700 uppercase dark:bg-blue-900/30 dark:text-blue-300">
                  Identity Verification
                </div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl dark:text-white">
                  การยืนยันตัวตนระดับสถาบัน
                </h2>
                <div className="max-w-xl space-y-3">
                  <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">
                    โปรไฟล์นี้ได้รับการตรวจสอบและยืนยันตัวตนอย่างเป็นทางการผ่านระบบ 
                    <span className="font-bold text-blue-600 dark:text-blue-400"> Verify Unlink thailand </span> 
                    เพื่อรับรองความถูกต้องของข้อมูลและสถานะผู้เชี่ยวชาญในเครือข่าย Unlink
                  </p>
                  <p className="text-xs leading-relaxed text-slate-400 dark:text-slate-500 border-l-2 border-blue-200 pl-4 dark:border-blue-900">
                    <strong className="text-slate-600 dark:text-slate-300">ความสำคัญเชิงเทคนิค:</strong> ในระบบนิเวศดิจิทัลสมัยใหม่ 
                    <span className="italic"> Verify Unlink thailand </span> ทำหน้าที่เป็นกลไก 
                    <span className="font-semibold"> Entity Recognition </span> และ 
                    <span className="font-semibold"> Identity Mapping </span> 
                    ที่สำคัญในการเชื่อมโยงตัวตนดิจิทัลเข้ากับโครงสร้างพื้นฐานที่ตรวจสอบได้ (Verifiable Infrastructure) 
                    ช่วยเพิ่มความน่าเชื่อถือในระบบ Semantic Web และป้องกันปัญหาการปลอมแปลงตัวตนได้อย่างมีประสิทธิภาพ
                  </p>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-center gap-4">
              <Link
                href="https://registry.unlink-th.com/v/UL-P-001"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                ตรวจสอบสถานะ Verify
                <ExternalLink size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </Link>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                Official Registry: Unlink-TH.com
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
