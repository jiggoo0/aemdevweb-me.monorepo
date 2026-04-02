/**
 * [ROUTE PAGE]: PRIVACY_POLICY v17.9.49 (STABILIZED)
 * [PLAN]: Data Integrity | Multi-Theme Resilience | PDPA Alignment
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. System Infrastructure & Layout Components ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import UniversalHero from "@/components/templates/sections/UniversalHero";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";

/**
 * [METADATA]: สื่อสารความโปร่งใสและมาตรฐานความปลอดภัยตามหลัก E-E-A-T
 */
export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัวและความปลอดภัยของข้อมูล | ${SITE_CONFIG.brandName}`,
  description:
    "เราให้ความสำคัญกับการรักษาความลับและมาตรฐานความปลอดภัยของข้อมูลคุณอย่างสูงสุด เพื่อความโปร่งใสระดับ Specialist ครับ",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/privacy` },
};

/**
 * @page PrivacyPage
 * @description หน้าที่ระบุพันธสัญญาในการดูแลข้อมูลของพาร์ทเนอร์
 */
export default function PrivacyPage() {
  const lastUpdated = "9 กุมภาพันธ์ 2569";

  return (
    <LayoutEngine spacing="none">
      {/* 01. HERO LAYER: Privacy Vision */}
      <UniversalHero
        title={
          <>
            ข้อมูลของคุณคือ <br />
            <span className="text-brand-primary">หัวใจสำคัญ</span> ของเราครับ
          </>
        }
        subtitle="ความไว้ใจคือรากฐานของการทำงานร่วมกัน เราจึงวางระบบจัดการข้อมูลที่ปลอดภัยและได้มาตรฐาน เพื่อให้พาร์ทเนอร์ทุกท่านมั่นใจว่าข้อมูลจะได้รับการดูแลอย่างดีที่สุด"
        primaryActionLabel="ปรึกษาการวางระบบความปลอดภัย"
        primaryHref={SITE_CONFIG.links.line}
        align="center"
      />

      {/* 02. ATMOSPHERIC DECOR: Security Infrastructure Visuals */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        <div className="bg-brand-primary/10 absolute right-0 bottom-1/4 h-[600px] w-[600px] rounded-full opacity-40 blur-[140px]" />
      </div>

      {/* 03. CONTENT LAYER: Policy Details */}
      <section className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <h2 className="sr-only">Data Protection & Privacy Framework</h2>
        <div className="mx-auto max-w-3xl space-y-20">
          {/* Diagnostic Header */}
          <div className="border-border flex flex-col gap-4 border-b pb-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary shadow-glow h-2 w-2 animate-ping rounded-full" />
              <span className="text-text-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                Privacy_Protocol.v{SITE_CONFIG.project.version}
              </span>
            </div>
            <span className="text-text-muted font-mono text-[9px] font-bold tracking-widest uppercase italic">
              Last_Audit: {lastUpdated}
            </span>
          </div>

          {/* Section 01: Data Collection Logic */}
          <article className="group space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 transition-opacity group-hover:opacity-100">
                01.
              </span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                ขอบเขตการเก็บข้อมูล
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium italic md:text-lg">
              เพื่อให้การวางแผนระบบเป็นไปอย่างแม่นยำ
              เราจะขอจัดเก็บเฉพาะข้อมูลที่จำเป็นต่อการทำงานร่วมกันเท่านั้น เช่น
              ข้อมูลติดต่อและเป้าหมายทางธุรกิจ
              โดยข้อมูลเหล่านี้จะถูกนำไปใช้เพื่อออกแบบระบบให้ตอบโจทย์ธุรกิจของคุณมากที่สุดครับ
            </p>
          </article>

          {/* Section 02: Data Usage Standards */}
          <article className="group space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 transition-opacity group-hover:opacity-100">
                02.
              </span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                มาตรฐานการใช้งานข้อมูล
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium italic md:text-lg">
              ข้อมูลของคุณจะถูกใช้เพื่อเพิ่มประสิทธิภาพให้กับงานที่เราดูแลเท่านั้น
              เรายึดมั่นในความซื่อสัตย์:
              <span className="text-text-primary decoration-brand-primary font-black underline underline-offset-4">
                {" "}
                เราไม่มีนโยบายการนำข้อมูลของคุณไปขาย หรือส่งต่อให้บุคคลภายนอก{" "}
              </span>
              เพื่อผลประโยชน์ทางการค้าอย่างเด็ดขาดครับ
            </p>
          </article>

          {/* Section 03: Security Infrastructure */}
          <article className="group space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 transition-opacity group-hover:opacity-100">
                03.
              </span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                ระบบความปลอดภัย
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed font-medium italic md:text-lg">
                เราใช้เทคโนโลยีเข้ารหัส (Encryption) และระบบรักษาความปลอดภัยของเซิร์ฟเวอร์ที่ทันสมัย
                เพื่อป้องกันความเสี่ยง
                ข้อมูลแผนธุรกิจของคุณจะถูกรักษาเป็นความลับอย่างเข้มงวดตลอดเวลาครับ
              </p>

              <blockquote className="border-brand-primary bg-surface-card shadow-glow text-text-primary hover:bg-surface-offset rounded-section border-l-[12px] p-8 transition-all duration-500 md:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <IconRenderer name="Lock" size={20} className="text-brand-primary" />
                  <span className="text-brand-primary text-xs font-black tracking-widest uppercase">
                    Security_Mandate:
                  </span>
                </div>
                <p className="text-sm leading-relaxed font-medium italic md:text-lg">
                  "เพราะความลับของคุณคือหัวใจของธุรกิจ ข้อมูลทุกอย่างที่ได้รับ
                  จะถูกดูแลด้วยมาตรฐานความปลอดภัย ที่ผมให้ความสำคัญเป็นอันดับหนึ่งเสมอครับ"
                </p>
              </blockquote>
            </div>
          </article>

          {/* Section 04: PDPA Rights */}
          <article className="group space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 transition-opacity group-hover:opacity-100">
                04.
              </span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                สิทธิ์ในการจัดการข้อมูล
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium italic md:text-lg">
              คุณคือเจ้าของข้อมูลและมีสิทธิ์เต็มที่ครับ ไม่ว่าจะเป็นการขอเข้าดู แก้ไข
              หรือลบข้อมูลออกจากระบบ คุณสามารถแจ้งความประสงค์ได้ทุกเมื่อ
              เราพร้อมดำเนินการให้ทันทีตามมาตรฐาน PDPA ครับ
            </p>
          </article>

          {/* Section 05: Coordination Node */}
          <div className="border-border border-t pt-16">
            <div className="bg-text-primary text-surface-main group shadow-glow rounded-card-lg relative overflow-hidden p-10 transition-all duration-500 hover:scale-[1.01] md:p-16">
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-black tracking-tight uppercase italic md:text-3xl">
                  สอบถามเรื่องความปลอดภัย
                </h3>
                <p className="text-base leading-relaxed font-medium italic opacity-80 md:text-lg">
                  หากคุณมีข้อสงสัยเรื่องการเก็บข้อมูล ทักแชทมาคุยกับผมผ่าน Line OA ได้เลยนะครับ
                  ผมยินดีให้คำอธิบายและดูแลเรื่องนี้ให้คุณอย่างเต็มที่ครับ
                </p>
              </div>
              <div className="bg-brand-primary absolute -right-10 -bottom-10 h-64 w-64 opacity-20 blur-[100px] transition-all group-hover:opacity-40" />
            </div>
          </div>
        </div>
      </section>
    </LayoutEngine>
  );
}
