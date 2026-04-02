/** @format */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import Container from "./Container";
import SocialLinks from "../shared/SocialLinks";
import { siteConfig } from "@/constants/site-config";

/**
 * Footer Component - Identity Hub Version
 * -------------------------------------------------------------------------
 * รวบรวมข้อมูลตัวตนและพิกัดความเชี่ยวชาญของ อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 * เน้นความชัดเจน เข้าถึงง่าย และเสริมภาพลักษณ์ความน่าเชื่อถือ
 * ออกแบบและดูแลระบบโดย: นายเอ็มซ่ามากส์
 */
export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-slate-100 bg-white pt-24 pb-12 transition-colors duration-500 dark:border-slate-900 dark:bg-slate-950">
      <Container>
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. Identity & Vision */}
          <div className="space-y-8">
            <Link href="/" className="group flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                ALONGKORN <span className="text-blue-600">Y.</span>
              </span>
              <span className="mt-1 text-[10px] font-bold tracking-[0.2em] text-blue-600 uppercase">
                9mza Identity Hub
              </span>
            </Link>
            <p className="text-muted-foreground max-w-[280px] text-sm leading-relaxed font-medium">
              มุ่งเน้นการสร้างโครงสร้างพื้นฐานดิจิทัลที่แข็งแกร่ง 
              และกลยุทธ์ Technical SEO ที่วัดผลได้จริง เพื่อการเติบโตที่ยั่งยืน
            </p>
            <SocialLinks variant="aemdevweb" />
          </div>

          {/* 2. Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase dark:text-white">
              เมนูหลัก
            </h4>
            <nav className="flex flex-col space-y-4 text-sm font-semibold">
              {[
                { label: "หน้าแรก", href: "/" },
                { label: "แนวคิดการทำงาน", href: "/about" },
                { label: "ผลงานที่คัดสรร", href: "/projects" },
                { label: "บทความเทคนิค", href: "/blog" },
                { label: "ติดต่อสอบถาม", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 3. Featured Platform */}
          <div className="space-y-8">
            <h4 className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase dark:text-white">
              โปรเจกต์หลัก
            </h4>
            <Link
              href={siteConfig.commercialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-blue-600/20 hover:bg-white dark:border-slate-800 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck size={14} className="text-blue-600" />
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                  Flagship
                </span>
              </div>
              <span className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                Unlink Thailand
                <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <p className="mt-2 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                ผู้นำด้านการตรวจสอบและวางระบบ SEO เชิงลึก
              </p>
            </Link>
          </div>

          {/* 4. Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-black tracking-[0.2em] text-slate-900 uppercase dark:text-white">
              การติดต่อ
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-muted-foreground flex items-center gap-3 transition-colors hover:text-blue-600"
                >
                  <Mail size={18} className="text-blue-600" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground flex items-center gap-3 transition-colors hover:text-blue-600"
                >
                  <MessageCircle size={18} className="text-blue-600" />
                  Line Official
                </a>
              </li>
              <li className="text-muted-foreground flex items-center gap-3">
                <MapPin size={18} className="text-blue-600" />
                Bangkok, Thailand
              </li>
            </ul>
          </div>
        </div>

        {/* Identity Verification Badge */}
        <div className="mt-12 mb-16 flex justify-center">
          <a
            href="https://registry.unlink-th.com/v/UL-P-001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-full border border-slate-100 bg-white px-6 py-3 shadow-sm transition-all hover:border-blue-600/20 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-600/10 dark:text-blue-400">
              <ShieldCheck size={18} />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-black text-slate-900 dark:text-white">
                IDENTITY VERIFIED
              </div>
              <div className="text-[9px] font-bold text-slate-500 dark:text-slate-400">
                UL-P-001 | Alongkorn Yomkerd
              </div>
            </div>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row dark:border-slate-900">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              <span>© {currentYear} {siteConfig.fullName}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="flex items-center gap-2">
                <Globe className="h-3 w-3" /> Identity Hub
              </span>
            </div>
            {/* Intentional Signatures */}
            <div className="flex flex-wrap gap-4 text-[11px] font-black text-slate-300 dark:text-slate-700">
              <span>นายอลงกรณ์ ยมเกิด</span>
              <span>9mza</span>
              <span>เจ้าป่า</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-full bg-slate-50 px-5 py-2 dark:bg-white/5">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              System Status: Operational
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/**
 * ออกแบบระบบและดูแลความสมบูรณ์แบบโดย: นายเอ็มซ่ามากส์
 */
