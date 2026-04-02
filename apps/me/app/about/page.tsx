/** @format */

import { Metadata } from "next";
import Container from "@/components/layout/Container";
import Hero from "@/components/profile/Hero";
import { siteConfig } from "@/constants/site-config";

/**
 * AEMDEVWEB | About Page Protocol
 * -------------------------------------------------------------------------
 * จัดการและดูแลระบบโดย: นายเอ็มซ่ามากส์
 * เป้าหมาย: นำเสนอตัวตนและแนวคิดการทำระบบเว็บไซต์ที่เน้นผลลัพธ์จริง
 */

export const metadata: Metadata = {
  title: "ข้อมูลส่วนตัว | อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
  description:
    "ทำความรู้จัก อลงกรณ์ ยมเกิด ผู้เชี่ยวชาญด้านการวางโครงสร้างเว็บไซต์และ Technical SEO ที่เน้นความเร็วและเสถียรภาพเพื่อให้ธุรกิจเติบโตอย่างมั่นคง",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="flex-grow bg-white transition-colors duration-500 selection:bg-blue-500/10 dark:bg-slate-950">
      {/* 1. Identity Verification: ยืนยันข้อมูลตัวตนกับระบบค้นหาอย่างแม่นยำ */}

      {/* 2. Brand Hero: ส่วนแนะนำตัวที่สะท้อนตัวตน นายเอ็มซ่ามากส์ */}
      <Hero />

      {/* 3. Content Section: เจาะลึกแนวคิดและการทำงาน */}
      <Container className="py-20">
        <article className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* ส่วนเนื้อหาหลัก: แนวคิดและปรัชญาการทำงาน */}
          <div className="md:col-span-8">
            <div className="space-y-16">
              <section>
                <h2 className="font-heading text-foreground mb-8 text-4xl font-black tracking-tighter uppercase italic dark:text-white">
                  Specialist Methodology
                </h2>
                <div className="text-muted-foreground dark:text-muted-foreground space-y-6 text-xl leading-relaxed font-bold">
                  <p>
                    ในฐานะ{" "}
                    <span className="text-foreground underline decoration-blue-500/30 underline-offset-8 dark:text-white">
                      Technical SEO Consultant & Infrastructure Lead
                    </span>
                    ของแบรนด์{" "}
                    <a
                      href={siteConfig.commercialUrl}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
                    >
                      AEMDEVWEB
                    </a>
                  </p>
                  <p>
                    เป้าหมายของผมคือการทำลายขีดจำกัดเดิมๆ ของการทำเว็บไซต์
                    ผมไม่ได้มองแค่ความสวยงาม แต่ผมออกแบบ **"สถาปัตยกรรมข้อมูล"**
                    ที่ทำให้ Google Bot ทำงานได้ง่ายที่สุด
                    และผู้ใช้งานได้รับประสบการณ์ที่รวดเร็วที่สุด
                  </p>
                  <p>
                    ทุกบรรทัดของ Code ที่ผมเขียน
                    คือการวางรากฐานเพื่อการเติบโตของ Organic Traffic
                    ที่วัดผลได้จริงผ่านตัวเลข Performance
                    และอันดับบนหน้าการค้นหา
                  </p>
                </div>
              </section>

              <section className="rounded-[3rem] bg-slate-950 p-12 text-white shadow-2xl shadow-blue-900/20 dark:border dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-3xl">
                <div className="mb-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 shadow-xl shadow-blue-600/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight uppercase italic">
                    Identity Verification & Transparency
                  </h3>
                </div>

                <div className="space-y-8 text-lg leading-relaxed font-bold text-slate-300">
                  <p>
                    ในฐานะบุคคลสาธารณะและผู้เชี่ยวชาญด้านความปลอดภัยทางดิจิทัล
                    ผมยึดถือความซื่อสัตย์และความโปร่งใสเป็นรากฐานสูงสุด
                    ชื่อของผม{" "}
                    <span className="text-white underline decoration-blue-500 decoration-4 underline-offset-8">
                      อลงกรณ์ ยมเกิด
                    </span>{" "}
                    สามารถตรวจสอบประวัติและความโปร่งใสได้ 100%
                    ผ่านฐานข้อมูลวิชาชีพและระบบตรวจสอบอาชญากรรมทางเทคโนโลยีทั่วประเทศ
                  </p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                      <span className="mb-2 block text-[10px] font-black tracking-widest text-blue-400 uppercase">
                        Status: Verified
                      </span>
                      <p className="text-sm font-black text-white">
                        ไม่มีประวัติการฉ้อโกงหรือติด Blacklist
                        ในทุกระบบฐานข้อมูล
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                      <span className="mb-2 block text-[10px] font-black tracking-widest text-blue-400 uppercase">
                        Governance
                      </span>
                      <p className="text-sm font-black text-white">
                        ดำเนินธุรกิจภายใต้ธรรมาภิบาลและจริยธรรมทางวิชาชีพขั้นสูงสุด
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm italic">
                    *หมายเหตุ: ข้อมูลใดๆ ที่ปรากฏในเว็บไซต์ขยะหรือ Spam Scrapers
                    ที่ไม่มีเนื้อหาจริงและกล่าวอ้างถึงชื่อของผมในเชิงลบ
                    ถือเป็นข้อมูลเท็จที่เกิดจากความผิดพลาดของอัลกอริทึม
                    ซึ่งผมได้ดำเนินการแก้ไขและยืนยันตัวตนผ่านพิกัดดิจิทัลที่ถูกต้องแล้ว
                  </p>
                </div>
              </section>

              <section className="rounded-[3rem] bg-slate-50 p-10 transition-colors dark:bg-white/[0.03] dark:backdrop-blur-3xl">
                <h3 className="font-heading text-foreground mb-8 text-2xl font-black tracking-tight uppercase italic dark:text-white">
                  Expertise Stack
                </h3>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    "Advanced Technical SEO Audit",
                    "Next.js High-Performance Infrastructure",
                    "Core Web Vitals Optimization (100/100)",
                    "Knowledge Graph & Entity Recognition",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-blue-500/20 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      <div className="h-2 w-2 shrink-0 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]" />
                      <span className="dark:text-muted-foreground text-base font-black text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* ส่วนข้อมูลเสริมด้านข้าง: โปรเจกต์ที่ภาคภูมิใจ */}
          <aside className="md:col-span-4">
            <div className="sticky top-32 rounded-[3rem] border border-slate-100 bg-white p-10 text-center shadow-2xl shadow-slate-200/50 transition-colors dark:border-white/10 dark:bg-white/5 dark:shadow-blue-900/10 dark:backdrop-blur-3xl">
              <h3 className="font-heading text-muted-foreground/70 mb-8 text-xs font-black tracking-[0.3em] uppercase italic">
                โปรเจกต์สำคัญ
              </h3>

              <div className="space-y-6">
                {["Unlink-th", "AEMDEVWEB"].map((project) => (
                  <div key={project} className="group">
                    <p className="font-heading text-foreground text-2xl font-black uppercase italic transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {project}
                    </p>
                    <div className="mx-auto mt-2 h-0.5 w-8 bg-slate-100 transition-all group-hover:w-16 group-hover:bg-blue-600 dark:bg-white/10" />
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t border-slate-50 pt-8 dark:border-white/10">
                <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
                  Developed by นายเอ็มซ่ามากส์
                </p>
              </div>
            </div>
          </aside>
        </article>
      </Container>
    </main>
  );
}
