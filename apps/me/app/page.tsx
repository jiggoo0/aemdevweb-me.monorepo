/** @format */

import { Metadata } from "next";
import Hero from "@/components/profile/Hero";
import VerifySection from "@/components/profile/VerifySection";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/shared/ProjectCard";
import BlogCard from "@/components/shared/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Globe,
  TrendingUp,
  Layout,
  Zap,
  Search,
} from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/constants/site-config";

/**
 * 1. Technical SEO Metadata
 * ตอกย้ำความน่าเชื่อถือระดับผู้เชี่ยวชาญ (Authority) ในหน้าแรกของ Identity Hub
 */
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

/**
 * HomePage - Identity Hub: Alongkorl Yomkerd (นายเอ็มซ่ามากส์)
 * ศูนย์กลางการนำเสนอด้านการวางโครงสร้างระบบและกลยุทธ์ Technical SEO
 */
export default async function HomePage() {
  // ดึงข้อมูลโปรเจกต์และบทความพร้อมกันแบบ Parallel เพื่อประสิทธิภาพความเร็วสูงสุด
  const [allProjects, allPosts] = await Promise.all([
    getAllProjects(),
    getAllPosts(),
  ]);

  // คัดเลือก Node ข้อมูลมาแสดงผลในส่วนแนะนำ
  const featuredProjects = allProjects.slice(0, 2);
  const latestPosts = allPosts.slice(0, 3);

  return (
    <>
      <div className="flex flex-col gap-32 pb-32" id="identity-hub" role="main">
        {/* ส่วนแนะนำตัวหลัก (Brand Hero) */}
        <Hero />

        {/* Verification Status: ยืนยันตัวตนระดับสถาบัน */}
        <div className="-mt-32">
          <VerifySection />
        </div>

        {/* 0. Core Expertise: แสดงจุดแข็งเชิงเทคนิค */}
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Technical SEO Audit",
                desc: "วิเคราะห์โครงสร้างเว็บไซต์เชิงลึก เพื่อการจัดอันดับที่แม่นยำและยั่งยืน",
                icon: <Search className="text-blue-600" size={24} />,
              },
              {
                title: "Infrastructure Design",
                desc: "วางระบบ Server และ Cloud ที่รองรับการขยายตัวและมีความเสถียรสูง",
                icon: <Layout className="text-blue-600" size={24} />,
              },
              {
                title: "Performance Optimization",
                desc: "ปรับแต่งความเร็วและการตอบสนองของเว็บให้ถึงขีดสุด (Core Web Vitals)",
                icon: <Zap className="text-blue-600" size={24} />,
              },
            ].map((item, i) => (
              <div key={i} className="group rounded-3xl border border-slate-100 bg-white p-10 shadow-sm transition-all hover:border-blue-600/20 hover:shadow-xl dark:border-white/5 dark:bg-white/5">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-600/10">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>

        {/* 1. Selected Works: แสดงเคสงานที่เน้นประสิทธิภาพและผลลัพธ์จริง */}
        <Container as="section" id="projects" className="scroll-m-20">
          <header className="mb-20 flex flex-col items-center space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase dark:bg-blue-600/10 dark:text-blue-400">
              <TrendingUp size={14} /> Selected Case Studies
            </div>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl dark:text-white">
              Precision Systems. <br className="hidden sm:block" /> Predictable Results.
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-medium text-slate-500 dark:text-slate-400">
              คัดสรรผลงานที่พิสูจน์แล้วว่า "โครงสร้างที่เนี้ยบ" คือกุญแจสำคัญ
              ในการควบคุมอันดับบน Google และเพิ่มยอดคลิกด้วย Technical SEO ระดับสูงสุด
            </p>
          </header>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} {...project} isFeatured={true} />
            ))}
          </div>
        </Container>

        {/* 2. Insights & Knowledge: คลังความรู้สำหรับการพัฒนาที่ถูกต้อง */}
        <Container
          as="section"
          className="border-t border-slate-100 pt-32 dark:border-white/5"
        >
          <header className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase dark:text-blue-400">
                <Globe size={18} /> Technical Knowledge Hub
              </div>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl dark:text-white">
                บทความและการ <span className="text-blue-600 italic">อัปเดต</span>
              </h2>
            </div>
            <Button
              variant="outline"
              className="h-12 rounded-full border-slate-200 px-8 text-xs font-bold transition-all hover:bg-slate-900 hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-slate-900"
              asChild
            >
              <Link href="/blog" className="group flex items-center">
                อ่านบทความทั้งหมด
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </Container>

        {/* 3. Call-To-Action: การเชื่อมโยงโครงการใหม่ */}
        <Container as="section">
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-10 py-24 text-center text-white shadow-2xl dark:bg-blue-600">
            <div className="relative z-10 mx-auto max-w-3xl space-y-10">
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                พร้อมยกระดับโครงสร้าง <br /> ดิจิทัลของคุณหรือยัง?
              </h2>
              <p className="text-lg font-medium text-slate-300 dark:text-blue-50">
                ปรึกษาการวางระบบ Technical SEO และ Infrastructure 
                เพื่อให้ธุรกิจของคุณเติบโตบนโลกออนไลน์ได้อย่างมั่นคง
              </p>
              <div className="flex flex-col items-center gap-6">
                <Button
                  size="lg"
                  className="h-16 rounded-full bg-white px-12 text-lg font-bold text-slate-900 shadow-xl transition-all hover:scale-105 hover:bg-slate-50 dark:text-blue-600"
                  asChild
                >
                  <Link href="/contact">เริ่มปรึกษาโครงการ</Link>
                </Button>
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase dark:text-blue-100">
                  <ShieldCheck size={14} /> Specialist Verified
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

/**
 * ออกแบบระบบและดูแลความเนี้ยบโดย: นายเอ็มซ่ามากส์
 */
