import React from "react";
import { ServiceCard } from "@/components/cards";
import { Shield, Globe, Brain } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AEM Protocols | Advanced Infrastructure Services",
  description: "รวบรวมโซลูชันสถาปัตยกรรมดิจิทัลระดับสูง ตั้งแต่ P-SEO ไปจนถึง AI Integration",
};

const PROTOCOLS = [
  {
    title: "P-SEO Infrastructure",
    description: "ระบบ SEO รายพื้นที่ 77 จังหวัดที่ออกแบบมาเพื่อการยึดครองตลาดท้องถิ่นโดยเฉพาะ",
    icon: <Globe className="text-primary" size={32} />,
    features: ["Province-Node Dynamic Generation", "Local Entity Identity", "Geo-Targeted Content"],
  },
  {
    title: "Institutional Architecture",
    description:
      "การออกแบบโครงสร้างเว็บไซต์ที่เน้นความมั่นคง ความเร็ว และความน่าเชื่อถือระดับองค์กร",
    icon: <Shield className="text-primary" size={32} />,
    features: ["Next.js 16 App Router", "Zero-Latency Caching", "Security Hardening"],
  },
  {
    title: "AI & Data Synergy",
    description:
      "การเชื่อมโยงระบบข้อมูลเข้ากับ AI Agents เพื่อเพิ่มประสิทธิภาพในการทำงานและการเข้าถึงข้อมูล",
    icon: <Brain className="text-primary" size={32} />,
    features: [
      "MDX Intelligence Hub",
      "Generative Search Optimization",
      "Structured Data Entities",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden py-32">
      <div className="absolute inset-0 tech-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-32 text-center max-w-4xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12">
            Service <br /> <span className="text-primary italic">Protocols.</span>
          </h1>
          <p className="text-2xl text-muted-foreground font-light leading-relaxed italic">
            "ยกระดับธุรกิจของคุณด้วยมาตรฐานวิศวกรรมเว็บที่ล้ำหน้าที่สุดแห่งปี 2026"
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {PROTOCOLS.map((protocol, i) => (
            <ServiceCard key={i} service={protocol} />
          ))}
        </div>
      </div>
    </main>
  );
}
