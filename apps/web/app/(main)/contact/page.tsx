/**
 * [ROUTE PAGE]: CONTACT_US v18.0.0 (SPECIALIST_CONNECT)
 * [STRATEGY]: Direct Conversion | Strategic Trust | Multi-Channel Support
 */

import React from "react";
import type { Metadata } from "next";

// --- 1. Infrastructure & UI Components ---
import LayoutEngine from "@/components/templates/LayoutEngine";
import UniversalHero from "@/components/templates/sections/UniversalHero";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import ConversionCTA from "@/components/shared/ConversionCTA";
import { UI_STRINGS } from "@/constants/ui-strings";
import { type IconName } from "@/components/ui/IconRenderer";

/**
 * [METADATA]: สื่อสารความง่ายในการเข้าถึงและความพร้อมให้บริการ
 */
export const metadata: Metadata = {
  title: `ติดต่อ ${SITE_CONFIG.expert.displayName} | วางแผนระบบเว็บไซต์และ SEO`,
  description:
    "เริ่มต้นขยายธุรกิจของคุณด้วยกลยุทธ์ที่ถูกต้อง ปรึกษาเรื่องการทำเว็บไซต์, SEO และระบบ AI ได้ทันทีครับ",
  alternates: { canonical: `${SITE_CONFIG.siteUrl}/contact` },
};

/**
 * @page ContactPage
 * @description หน้าที่รวบรวมช่องทางการเชื่อมต่อทั้งหมดกับแบรนด์
 */
export default function ContactPage() {
  /* [SEO STRATEGY]: Breadcrumb & LocalBusiness Schema */
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "หน้าแรก", item: SITE_CONFIG.siteUrl },
    { name: "ติดต่อเรา", item: `${SITE_CONFIG.siteUrl}/contact` },
  ]);
  const businessSchema = generateLocalBusinessSchema();

  const contactChannels: {
    id: string;
    label: string;
    value: string;
    href: string;
    icon: IconName;
    color: string;
    description: string;
  }[] = [
    {
      id: "line",
      label: "Line Official Account",
      value: SITE_CONFIG.links.lineId,
      href: SITE_CONFIG.links.line,
      icon: "MessageCircle",
      color: "bg-emerald-500",
      description: "ช่องทางที่รวดเร็วที่สุดสำหรับการปรึกษาเบื้องต้นครับ",
    },
    {
      id: "phone",
      label: "เบอร์โทรศัพท์สายด่วน",
      value: SITE_CONFIG.contact.phone,
      href: `tel:${SITE_CONFIG.contact.phone.replace(/-/g, "")}`,
      icon: "Phone",
      color: "bg-blue-500",
      description: "คุยตรงกับผมเพื่อรายละเอียดเชิงลึก (09:00 - 18:00)",
    },
    {
      id: "email",
      label: "อีเมลสำหรับส่งรายละเอียดงาน",
      value: SITE_CONFIG.contact.email,
      href: `mailto:${SITE_CONFIG.contact.email}`,
      icon: "Mail",
      color: "bg-red-500",
      description: "สำหรับการส่งเอกสาร RFQ หรือรายละเอียดโครงการ",
    },
    {
      id: "facebook",
      label: "Facebook Fanpage",
      value: "AEMDEVWEB",
      href: SITE_CONFIG.links.facebook,
      icon: "Facebook",
      color: "bg-sky-600",
      description: "ติดตามอัปเดตและผลงานล่าสุดผ่านโซเชียล",
    },
  ];

  return (
    <LayoutEngine spacing="none">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={businessSchema} />

      {/* 01. HERO LAYER: Accessibility Vision */}
      <UniversalHero
        title={
          <>
            เริ่มสร้าง <span className="text-brand-primary">Digital Asset</span> <br />
            ที่ทำกำไรให้ธุรกิจคุณวันนี้ครับ
          </>
        }
        subtitle="ไม่ว่าคุณจะมีไอเดียที่พร้อมเริ่ม หรือต้องการที่ปรึกษาเพื่อหาทิศทางที่ถูกต้อง ผมพร้อมรับฟังและเปลี่ยนวิสัยทัศน์ของคุณให้กลายเป็นระบบที่ใช้งานได้จริงครับ"
        primaryActionLabel="แอดไลน์คุยกับผมทันที"
        primaryHref={SITE_CONFIG.links.line}
        align="center"
      />

      {/* 02. ATMOSPHERIC DECOR: Infrastructure Visualส์ */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        <div className="bg-brand-primary/10 absolute right-0 bottom-1/4 h-[600px] w-[600px] rounded-full opacity-40 blur-[140px]" />
      </div>

      {/* 03. CONTACT CHANNELS MATRIX */}
      <section className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {contactChannels.map((channel) => (
              <a
                key={channel.id}
                href={channel.href}
                target={channel.id !== "phone" && channel.id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group border-border bg-surface-card hover:border-brand-primary/40 hover:bg-surface-offset rounded-section flex flex-col items-start gap-6 border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`${channel.color} flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6`}
                >
                  <IconRenderer name={channel.icon} size={32} />
                </div>
                <div className="space-y-2">
                  <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.2em] uppercase opacity-60">
                    {channel.label}
                  </span>
                  <h3 className="text-text-primary text-2xl font-black tracking-tight uppercase italic md:text-3xl">
                    {channel.value}
                  </h3>
                  <p className="text-text-secondary leading-relaxed font-medium italic">
                    {channel.description}
                  </p>
                </div>
                <div className="text-brand-primary mt-4 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                  <span>Connect_Now</span>
                  <IconRenderer
                    name="ArrowRight"
                    size={12}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 04. BUSINESS HOURS & LOCATION */}
      <section className="bg-surface-offset border-border/40 border-y py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                  Business_Operation
                </span>
                <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
                  Work <span className="text-brand-primary">Schedule.</span>
                </h2>
                <p className="text-text-secondary max-w-md text-lg leading-relaxed font-medium italic">
                  เพื่อให้การดูแลพาร์ทเนอร์เป็นไปอย่างทั่วถึง
                  ผมจะพร้อมสแตนบายให้คำปรึกษาตามตารางเวลาดังนี้ครับ
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-border bg-surface-card flex items-center justify-between rounded-2xl border p-6">
                  <div className="flex items-center gap-4">
                    <IconRenderer name="Calendar" size={24} className="text-brand-primary" />
                    <span className="text-text-primary font-bold">วันทำการ</span>
                  </div>
                  <span className="text-text-secondary italic">จันทร์ - ศุกร์</span>
                </div>
                <div className="border-border bg-surface-card flex items-center justify-between rounded-2xl border p-6">
                  <div className="flex items-center gap-4">
                    <IconRenderer name="Clock" size={24} className="text-brand-primary" />
                    <span className="text-text-primary font-bold">เวลาทำการ</span>
                  </div>
                  <span className="text-text-secondary italic">09:00 - 18:00 น.</span>
                </div>
                <div className="border-brand-primary/20 bg-brand-primary/5 flex items-center gap-4 rounded-2xl border p-6">
                  <IconRenderer name="Zap" size={24} className="text-brand-primary" />
                  <p className="text-text-primary text-sm font-bold italic">
                    "พาร์ทเนอร์ปัจจุบันสามารถแจ้งเรื่องด่วนได้ตลอด 24 ชม.
                    ผ่านช่องทางที่ได้รับมอบหมายครับ"
                  </p>
                </div>
              </div>
            </div>

            <div className="group border-border bg-surface-card rounded-section relative h-[400px] min-h-[500px] overflow-hidden border shadow-2xl md:h-full">
              <div className="absolute inset-0 z-0 grayscale transition-all duration-700 group-hover:grayscale-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15250.601962363532!2d99.51654271448831!3d16.486884698517243!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x30e0176d10c2299d%3A0xe74e0544f336688d!2z4LiB4Liz4Lie4LiH4LmA4Lie4LiK4LijIOC4reC4s-C5gOC4v-C4reC5gOC4oeC4t-C4reC4t-C4nuC4p-C4seC4p-C5gOC4oeC4t-C4reC4h-C4geC4s-C5gOC4nuC5geC4p-C4hA!5e0!3m2!1sth!2sth!4v1740989000000!5m2!1sth!2sth"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AEMDEVWEB Location"
                ></iframe>
              </div>
              <div className="bg-surface-card/90 border-border absolute right-6 bottom-6 left-6 rounded-2xl border p-6 backdrop-blur-xl">
                <div className="mb-2 flex items-center gap-2">
                  <IconRenderer name="MapPin" size={16} className="text-brand-primary" />
                  <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.2em] uppercase">
                    Headquarters
                  </span>
                </div>
                <h3 className="text-text-primary text-lg font-black italic">
                  {SITE_CONFIG.contact.address}
                </h3>
                <p className="text-text-secondary mt-1 text-sm font-medium italic opacity-80">
                  {SITE_CONFIG.contact.streetAddress} {SITE_CONFIG.contact.postalCode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CALL TO ACTION */}
      <ConversionCTA
        title={UI_STRINGS.cta.readyTitle}
        description={UI_STRINGS.cta.readyDescription}
        buttonLabel={UI_STRINGS.cta.consultExpertNow}
        buttonHref={SITE_CONFIG.links.line}
        secondaryLabel="กลับไปดูบริการทั้งหมด"
        secondaryHref="/services"
      />
    </LayoutEngine>
  );
}
