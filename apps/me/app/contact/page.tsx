/** @format */

import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SocialLinks from "@/components/shared/SocialLinks";
import { siteConfig } from "@/constants/site-config";
import { Mail, MessageCircle, ShieldCheck, UserCheck } from "lucide-react";

/**
 * Technical SEO & Project Consultation Metadata
 * ยุทธศาสตร์: สร้างความมั่นใจและระบุตัวตนผู้เชี่ยวชาญอย่างชัดเจน
 */
export const metadata: Metadata = {
  title: "ติดต่อพูดคุยและปรึกษาโปรเจกต์ | อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
  description:
    "เริ่มต้นโปรเจกต์ Next.js หรือปรึกษาการวางโครงสร้าง Technical SEO เพื่อสร้างสินทรัพย์ดิจิทัลที่เติบโตได้อย่างยั่งยืนสำหรับธุรกิจของคุณ",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pb-32 transition-colors duration-500 selection:bg-blue-600/10 dark:bg-slate-950">
      {/* 1. Hero Section: ส่วนต้อนรับและแสดงความพร้อมของระบบ */}
      <section className="border-b border-slate-100 bg-slate-50 py-32 transition-colors duration-500 dark:border-white/5 dark:bg-slate-900/50">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] text-white uppercase shadow-lg shadow-blue-600/20 dark:bg-blue-600/80">
              <ShieldCheck className="h-3.5 w-3.5" /> Project Availability
            </div>
            <h1 className="font-heading text-foreground text-6xl leading-[0.9] font-black tracking-tighter md:text-8xl dark:text-white">
              Precision Systems. <br />
              <span className="text-blue-600 italic underline decoration-blue-500/10 decoration-8 underline-offset-8 dark:decoration-blue-500/20">
                Predictable Results.
              </span>
            </h1>
            <p className="font-body text-muted-foreground dark:text-muted-foreground max-w-2xl text-xl leading-relaxed font-bold md:text-2xl">
              พร้อมให้คำปรึกษาเชิงเทคนิคสำหรับการวางโครงสร้างระบบ (Technical
              Infrastructure) และกลยุทธ์ Organic Growth
              เพื่อสร้างพิกัดความน่าเชื่อถือที่แข็งแรงที่สุดให้ธุรกิจของคุณ
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Communication Channels: ช่องทางการสื่อสารโดยตรง */}
      <Container className="pt-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-7">
            <section className="space-y-10">
              <h2 className="font-heading text-muted-foreground/70 text-[11px] font-black tracking-[0.4em] uppercase italic">
                Direct Communication
              </h2>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Email Contact */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex flex-col gap-6 rounded-[3rem] border border-slate-100 bg-white p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-3xl dark:hover:bg-white/10 dark:hover:shadow-blue-900/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-white/5 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-muted-foreground/70 mb-2 text-[10px] font-black tracking-widest uppercase">
                      E-Mail Address
                    </h3>
                    <p className="text-foreground text-lg leading-tight font-black break-all transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                {/* LINE Official Contact */}
                <a
                  href={siteConfig.contact.line}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="group flex flex-col gap-6 rounded-[3rem] border border-slate-100 bg-white p-10 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5 dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-3xl dark:hover:bg-white/10 dark:hover:shadow-blue-900/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-white/5 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-muted-foreground/70 mb-2 text-[10px] font-black tracking-widest uppercase">
                      Official LINE
                    </h3>
                    <p className="text-foreground text-lg leading-tight font-black transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      Business Chat
                    </p>
                  </div>
                </a>

                {/* Direct Personal Contact */}
                <a
                  href={siteConfig.contact.linePersonal}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="group flex flex-col gap-6 rounded-[3rem] border border-slate-100 bg-slate-50/30 p-10 transition-all hover:border-blue-600 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 sm:col-span-2 dark:border-white/10 dark:bg-white/[0.02] dark:backdrop-blur-3xl dark:hover:bg-white/5 dark:hover:shadow-blue-900/20"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-600 transition-all group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                      <UserCheck size={24} />
                    </div>
                    <div>
                      <h3 className="text-muted-foreground/70 mb-1 text-[10px] font-black tracking-widest uppercase">
                        Direct Line
                      </h3>
                      <p className="text-foreground text-lg leading-tight font-black dark:text-white">
                        ติดต่อสอบถามข้อมูลเร่งด่วน
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </section>

            <section className="space-y-10">
              <h2 className="font-heading text-muted-foreground/70 text-[11px] font-black tracking-[0.4em] uppercase italic">
                Social Presence
              </h2>
              <SocialLinks className="flex-col gap-8 sm:flex-row" />
            </section>
          </div>

          {/* Sidebar: Work Philosophy & Process */}
          <aside className="lg:col-span-5">
            <div className="sticky top-32 rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl shadow-blue-900/10 dark:border dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-3xl">
              <h3 className="font-heading mb-10 text-2xl font-black tracking-tight uppercase italic">
                Our <span className="text-blue-600">Approach.</span>
              </h3>
              <ul className="space-y-12">
                {[
                  {
                    title: "Review & Analysis",
                    desc: "ตรวจสอบโครงสร้างปัจจุบันเพื่อหาจุดที่ต้องปรับเปลี่ยนให้ชัดเจน",
                  },
                  {
                    title: "System Architecture",
                    desc: "วางระบบข้อมูลและโครงสร้างเว็บให้สอดคล้องกับมาตรฐาน Google",
                  },
                  {
                    title: "High-Speed Execution",
                    desc: "พัฒนาด้วย Next.js ที่เน้นความรวดเร็วและความเสถียรสูงสุด",
                  },
                ].map((step, i) => (
                  <li key={i} className="group flex gap-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-800 text-[10px] font-black text-blue-500 transition-all group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:border-white/10 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                      0{i + 1}
                    </span>
                    <div className="space-y-2">
                      <h4 className="font-heading text-xs font-black tracking-[0.1em] text-slate-100 uppercase italic">
                        {step.title}
                      </h4>
                      <p className="font-body text-muted-foreground dark:text-muted-foreground/70 text-sm leading-relaxed font-bold">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-16 border-t border-slate-900 pt-10 dark:border-white/10">
                <div className="text-muted-foreground flex items-center justify-between text-[10px] font-black tracking-[0.3em] uppercase">
                  <span>Specialist Support</span>
                  <div className="flex gap-1.5">
                    <div className="h-1 w-4 rounded-full bg-blue-600" />
                    <div className="h-1 w-1 rounded-full bg-slate-800 dark:bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

/**
 * ออกแบบและวางระบบการติดต่อโดย: นายเอ็มซ่ามากส์
 */
