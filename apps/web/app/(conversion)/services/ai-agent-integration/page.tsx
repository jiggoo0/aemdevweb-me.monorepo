import React from "react";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/site-config";
import { constructMetadata } from "@/lib/seo-utils";
import JsonLd from "@/components/seo/JsonLd";
import { generateSchemaGraph } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import IconRenderer from "@/components/ui/IconRenderer";
import ConversionCTA from "@/components/shared/ConversionCTA";
import TrustBadge from "@/components/shared/TrustBadge";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: `บริการติดตั้ง AI Agent สำหรับธุรกิจ | ${SITE_CONFIG.expert.displayName}`,
    description:
      "เปลี่ยนเว็บไซต์ของคุณให้เป็นพนักงานอัจฉริยะที่ปิดการขายได้จริง 24/7 ด้วยระบบ AI Agent Integration ล่าสุดปี 2026",
    path: "/services/ai-agent-integration",
  });
}

export default function AIAgentServicePage() {
  const schema = generateSchemaGraph([
    {
      "@type": "Service",
      name: "AI Agent Integration for Business",
      description: "ติดตั้งระบบ AI อัจฉริยะที่สามารถทำงานแทนมนุษย์ได้จริงบนหน้าเว็บไซต์",
      provider: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Thailand" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom LLM Training" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Autonomous Sales Agent" } },
        ],
      },
    },
  ]);

  return (
    <main className="bg-surface-main min-h-screen">
      <JsonLd data={schema} id="schema-ai-service" />

      {/* 1. Hero: Result-Oriented */}
      <section className="border-border/40 relative overflow-hidden border-b py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <TrustBadge text="Trending Strategy 2026" />
          <h1 className="mt-8 text-5xl font-black tracking-tighter uppercase italic md:text-8xl">
            AI Agent <br />
            <span className="text-brand-primary">Integration.</span>
          </h1>
          <p className="text-text-secondary mx-auto mt-8 max-w-3xl text-xl font-bold italic md:text-3xl">
            “ไม่ต้องรอแอดมินตอบ ไม่ต้องเสียโอกาสขาย <br />
            ด้วยพนักงาน AI ที่ <span className="text-text-primary underline">
              ปิดการขายได้จริง
            </span>{" "}
            24 ชม.”
          </p>
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              className="shadow-pro-xl h-16 px-12 text-sm font-black tracking-widest uppercase italic"
              aria-label="จองคิวรับคำปรึกษาการวางระบบ AI Agent ฟรี"
            >
              จองคิวรับคำปรึกษาฟรี
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Problem: Agitation (Copywriting Crew Formula) */}
      <section
        className="bg-surface-offset border-border/40 border-b py-24"
        aria-labelledby="problem-heading"
      >
        <div className="container mx-auto max-w-4xl px-4">
          <h2
            id="problem-heading"
            className="mb-16 text-center text-3xl font-black tracking-tighter uppercase italic md:text-5xl"
          >
            คุณกำลังเจอปัญหา <span className="text-brand-primary">เหล่านี้ใช่หรือไม่?</span>
          </h2>
          <div className="grid gap-6">
            {[
              "ลูกค้าทักมาตอนดึกแล้วไม่มีคนตอบ เสียโอกาสขายทันที",
              "แอดมินทำงานหนักเกินไป ตอบคำถามซ้ำๆ จนไม่มีเวลาดูแลเคสสำคัญ",
              "ข้อมูลลูกค้ากระจัดกระจาย ไม่มีการเก็บ Lead อย่างเป็นระบบ",
              "ค่าใช้จ่ายพนักงานพุ่งสูงขึ้น แต่ยอดขายยังเท่าเดิม",
            ].map((problem, i) => (
              <div
                key={i}
                className="glass-card border-border/20 flex items-start gap-4 rounded-2xl border p-6"
              >
                <IconRenderer
                  name="XCircle"
                  className="shrink-0 text-red-500"
                  size={24}
                  aria-hidden="true"
                />
                <p className="text-text-primary text-lg font-bold">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution: The Future is Now */}
      <section className="py-24" aria-labelledby="solution-heading">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <span className="text-brand-primary text-xs font-bold tracking-widest uppercase">
                Our Solution
              </span>
              <h2
                id="solution-heading"
                className="mt-4 text-4xl font-black tracking-tighter uppercase italic md:text-6xl"
              >
                The Rise of <br /> Agentic Web.
              </h2>
              <p className="text-text-secondary mt-8 text-lg leading-relaxed">
                ในปี 2026 เว็บไซต์ไม่ใช่แค่กระดาษเปล่าที่มีข้อมูล แต่คือ **"แพลตฟอร์มอัจฉริยะ"**
                ที่สามารถตัดสินใจ จัดการงาน และให้บริการลูกค้าได้โดยไม่ต้องผ่านคน 100%
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "เชื่อมต่อกับ LLM ระดับโลก (Gemini, GPT-4)",
                  "ทำงานร่วมกับฐานข้อมูลธุรกิจของคุณแบบ Real-time",
                  "รองรับการปิดการขายและรับชำระเงินอัตโนมัติ",
                  "วิเคราะห์พฤติกรรมลูกค้าเพื่อนำเสนอสิ่งที่เขาต้องการที่สุด",
                ].map((item, i) => (
                  <li key={i} className="text-text-primary flex items-center gap-3 font-bold">
                    <IconRenderer
                      name="CheckCircle"
                      className="text-brand-primary"
                      size={20}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="glass-card rounded-section border-border/40 relative flex aspect-square items-center justify-center overflow-hidden border bg-black/5"
              role="region"
              aria-label="System status visualization"
            >
              <div className="from-brand-primary/20 absolute inset-0 bg-gradient-to-br to-transparent" />
              <IconRenderer
                name="Cpu"
                size={120}
                className="text-brand-primary animate-pulse"
                role="img"
                aria-label="AI Processing Core"
              />
              <div className="bg-surface-card/80 border-border/20 absolute right-10 bottom-10 left-10 rounded-xl border p-6 backdrop-blur-xl">
                <p className="text-brand-primary mb-2 text-xs font-bold tracking-widest uppercase">
                  System Status: <span className="sr-only">Operational</span>
                </p>
                <div
                  className="bg-border/20 h-2 w-full overflow-hidden rounded-full"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="bg-brand-primary animate-shimmer h-full w-4/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Conversion CTA */}
      <ConversionCTA
        title="พร้อมเปลี่ยนเว็บของคุณให้เป็นพนักงานขายอัจฉริยะหรือยัง?"
        description="ปรึกษาผู้เชี่ยวชาญด้าน AI Integration ฟรี และรับแผนประเมินความคุ้มค่าเบื้องต้น"
        primaryBtn="เริ่มสร้าง AI Agent ของคุณ"
      />
    </main>
  );
}
