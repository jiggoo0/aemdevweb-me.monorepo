/** @format */

import Image from "next/image";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/shared/SocialLinks";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/constants/site-config";

/**
 * Hero Component - Professional Identity Edition
 * -------------------------------------------------------------------------
 * นำเสนอตัวตน "อลงกรณ์ ยมเกิด" (9mza) ในรูปแบบที่ทันสมัยและเป็นมืออาชีพ
 * เน้นความน่าเชื่อถือควบคู่ไปกับความทันสมัยของเทคโนโลยี
 * ออกแบบและดูแลระบบโดย: นายเอ็มซ่ามากส์
 */
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-16 transition-colors duration-500 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32 dark:bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/50 blur-[120px] dark:bg-blue-600/5" />
      
      <Container>
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
          {/* Content Side */}
          <div className="flex-1 space-y-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[11px] font-bold tracking-wider text-blue-600 uppercase dark:bg-blue-600/10 dark:text-blue-400">
              <Sparkles size={14} className="animate-pulse" /> {siteConfig.role}
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-black tracking-tight text-slate-900 md:text-7xl lg:text-8xl dark:text-white">
                Alongkorn <br />
                <span className="text-blue-600">Yomkerd</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl lg:mx-0 dark:text-slate-400">
                วิศวกรผู้วางรากฐาน <span className="font-bold text-slate-900 dark:text-white">Data Infrastructure</span> และที่ปรึกษาด้านเทคนิค SEO 
                ผู้ขับเคลื่อนประสิทธิภาพเบื้องหลัง <a href="https://www.unlink-th.com" target="_blank" className="text-blue-600 underline decoration-blue-600/20 underline-offset-4 hover:decoration-blue-600">Unlink Thailand</a>
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-blue-600 px-10 text-base font-bold shadow-lg shadow-blue-600/20 transition-all hover:scale-105 hover:bg-blue-700"
              >
                <Link href="/contact">
                  พูดคุยโปรเจกต์ <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-4">
                <SocialLinks variant="aemdevweb" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-4 lg:justify-start">
              {[
                { label: "Experience", value: "8+ Years" },
                { label: "Projects", value: "50+ Audits" },
                { label: "Focus", value: "Technical SEO" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <span className="text-xl font-black text-slate-900 dark:text-white">{item.value}</span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative w-full max-w-[500px] flex-1">
            <div className="relative aspect-square overflow-hidden rounded-[3rem] border-[12px] border-slate-50 bg-slate-100 shadow-2xl dark:border-white/5 dark:bg-slate-900">
              <Image
                src={siteConfig.profilePhoto}
                alt={siteConfig.fullName}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -right-6 -bottom-6 hidden rounded-3xl bg-white p-6 shadow-xl md:block dark:bg-slate-900 dark:shadow-blue-900/20">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Expert</div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">Unlink-th Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * ออกแบบและพัฒนาโครงสร้างโดย: นายเอ็มซ่ามากส์
 */
