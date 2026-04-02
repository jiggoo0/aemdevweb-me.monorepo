/**
 * [ROUTE PAGE]: TERMS_OF_SERVICE v17.9.50 (STABILIZED)
 * [STRATEGY]: Professional Partnership | Multi-Theme Resilience | Legal Clarity
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & UI Components ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import UniversalHero from "@/components/templates/sections/UniversalHero";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { generateBreadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

/**
 * [METADATA]: สื่อสารความโปร่งใสและ Authority ของแบรนด์
 */
export const metadata: Metadata = {
  title: `ข้อตกลงการใช้บริการและมาตรฐานการทำงาน | ${SITE_CONFIG.brandName}`,
  description:
    "ทำความเข้าใจแนวทางการทำงานร่วมกัน เพื่อความแม่นยำและผลลัพธ์ที่ดีที่สุดสำหรับธุรกิจคุณ",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/terms` },
};

/**
 * @page TermsPage
 * @description หน้าชี้แจงกติกาการทำงานเพื่อรักษามาตรฐานคุณภาพและผลประโยชน์ของพาร์ทเนอร์
 */
export default function TermsPage() {
  const lastUpdated = "9 กุมภาพันธ์ 2569";

  /* [SEO STRATEGY]: Breadcrumb for Legal Pages */
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "ข้อตกลงและเงื่อนไข", item: `${SITE_CONFIG.siteUrl}/terms` },
  ]);

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={breadcrumbSchema} />

      {/* 01. HERO LAYER: Strategic Alignment */}
      <UniversalHero
        title={
          <>
            ข้อตกลงการทำงาน <br />
            เพื่อ <span className="text-brand-primary">ความสำเร็จ</span> ที่ยั่งยืน
          </>
        }
        subtitle="เรายึดเอาความสำเร็จของคุณเป็นที่ตั้งครับ เงื่อนไขเหล่านี้ออกแบบมาเพื่อให้เราเข้าใจตรงกัน และช่วยให้การส่งมอบระบบคุณภาพสูงเป็นไปอย่างราบรื่นที่สุด"
        primaryActionLabel="ปรึกษาการเริ่มต้นโปรเจกต์"
        primaryHref={SITE_CONFIG.links.line}
        align="center"
      />

      {/* 02. ATMOSPHERIC DECOR: Infrastructure Visuals */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        <div className="bg-brand-primary/10 absolute top-1/4 left-0 h-[600px] w-[600px] rounded-full opacity-30 blur-[120px]" />
      </div>

      {/* 03. CONTENT LAYER: Professional Standards */}
      <section className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <h2 className="sr-only">Professional Service Standards & Legal Agreement</h2>
        <div className="mx-auto max-w-3xl space-y-20">
          {/* Diagnostic Header */}
          <div className="border-border flex flex-col gap-4 border-b pb-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary shadow-glow h-2 w-2 animate-ping rounded-full" />
              <span className="text-text-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                Service_Standard.v{SITE_CONFIG.project.version}
              </span>
            </div>
            <span className="text-text-muted font-mono text-[9px] font-bold tracking-widest uppercase italic">
              Last_Modified: {lastUpdated}
            </span>
          </div>

          {/* Section 01: Engineering Scope */}
          <article className="group space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 transition-opacity group-hover:opacity-100">
                01.
              </span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                วิศวกรรมดิจิทัลและมาตรฐานงาน
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium italic md:text-lg">
              ที่ {SITE_CONFIG.brandName}{" "}
              เราเน้นสร้างเว็บไซต์ที่ใช้งานได้จริงและช่วยทำเงินให้ธุรกิจครับ
              ขอบเขตงานจะครอบคลุมการเขียนรหัสหลังบ้านที่สะอาด (Clean Code), การปรับจูน Technical
              SEO, และระบบความปลอดภัย เพื่อให้คุณได้ระบบที่เสถียรที่สุดครับ
            </p>
          </article>

          {/* Section 02: Cooperation Protocol */}
          <article className="group space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 transition-opacity group-hover:opacity-100">
                02.
              </span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                พันธสัญญาความร่วมมือ
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium italic md:text-lg">
              เพื่อให้งานออกมาดีที่สุด ผมรบกวนพาร์ทเนอร์เตรียมข้อมูลธุรกิจตามกรอบเวลาที่คุยกันครับ
              ส่วนในด้านเทคนิค ผมจะรายงานความคืบหน้า (System Trace) ให้คุณทราบอย่างโปร่งใส
              เพื่อให้คุณมั่นใจว่าระบบกำลังถูกสร้างขึ้นอย่างประณีตครับ
            </p>
          </article>

          {/* Section 03: Ownership & Investment */}
          <article className="group space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 transition-opacity group-hover:opacity-100">
                03.
              </span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                ลิขสิทธิ์และการเป็นเจ้าของ
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed font-medium italic md:text-lg">
              เมื่อส่งมอบงานและชำระเงินครบถ้วนแล้ว{" "}
              <span className="text-text-primary decoration-brand-primary font-black underline underline-offset-4">
                เว็บไซต์และข้อมูลทั้งหมดจะเป็นกรรมสิทธิ์ของคุณ 100%
              </span>
              โดยผมจะทำหน้าที่เป็นที่ปรึกษาด้านเทคนิค คอยดูแลความเรียบร้อยของระบบให้ในระยะยาวครับ
            </p>
          </article>

          {/* Section 04: Maintenance Logic */}
          <article className="group space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-brand-primary font-mono text-lg font-black opacity-40 transition-opacity group-hover:opacity-100">
                04.
              </span>
              <h2 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                การดูแลและความเสถียร
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed font-medium italic md:text-lg">
                ผมมีการดูแลหลังการขายเพื่อให้เว็บทำงานได้ลื่นไหล หากพบปัญหาที่เกิดจากรหัสหลังบ้าน
                ผมยินดีรีบแก้ไขให้ทันทีเพื่อให้ธุรกิจของคุณเดินหน้าต่อได้ไม่สะดุดครับ
              </p>

              <blockquote className="border-brand-primary bg-surface-card shadow-glow text-text-secondary hover:bg-surface-offset rounded-section border-l-[12px] p-8 transition-all duration-500 md:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <IconRenderer name="ShieldAlert" size={20} className="text-brand-primary" />
                  <span className="text-brand-primary text-xs font-black tracking-widest uppercase">
                    System_Mandate:
                  </span>
                </div>
                <p className="text-text-primary text-sm leading-relaxed font-medium italic md:text-lg">
                  "เพื่อให้ระบบมีความเสถียรสูงสุด
                  การรับประกันจะไม่ครอบคลุมกรณีที่มีการแก้ไขรหัสหลังบ้าน
                  หรือฐานข้อมูลโดยบุคคลภายนอกที่ไม่ได้ผ่านการตรวจสอบจากผมก่อนนะครับ"
                </p>
              </blockquote>
            </div>
          </article>

          {/* บทสรุปท้ายหน้า: Partner Synergy */}
          <div className="border-border space-y-6 border-t pt-20 text-center">
            <p className="text-text-primary text-xl font-black tracking-tight uppercase italic md:text-3xl">
              "Understanding is the foundation of{" "}
              <span className="text-brand-primary decoration-brand-primary/30 underline underline-offset-8">
                Success.
              </span>
              "
            </p>
            <p className="text-text-muted mx-auto max-w-lg text-sm leading-relaxed font-medium italic md:text-base">
              หากคุณมีข้อสงสัยหรืออยากปรับแต่งเงื่อนไขให้เข้ากับรูปแบบธุรกิจของคุณ
              ทักมาคุยกันได้เลยนะครับ ผมยินดีหาแนวทางที่ลงตัวที่สุดสำหรับเราครับ
            </p>
          </div>
        </div>
      </section>
    </LayoutEngine>
  );
}
