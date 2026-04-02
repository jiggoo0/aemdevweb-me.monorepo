/**
 * [COMPONENT]: FOOTER_INFRASTRUCTURE v18.1.0 (SERVER_SIDE_OPTIMIZED)
 * [STRATEGY]: Semantic Layout | Zero-Hydration JS | SEO Link Flow
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_MAP } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site-config";
import { UI_STRINGS } from "@/constants/ui-strings";
import { cn } from "@/lib/utils";

// --- Infrastructure Constants (BEM-ish Pattern) ---
const LINK_STYLE = cn(
  "text-text-secondary text-sm leading-relaxed transition-all duration-300 hover:text-[var(--color-brand-primary)]",
  "inline-block hover:translate-x-1",
);

const HEADER_STYLE =
  "text-text-primary mb-6 text-[11px] font-black tracking-[0.2em] uppercase opacity-90";

/**
 * @component Footer
 * @description ท้ายเว็บไซต์ (Footer) แบบ Server Component เพื่อลดภาระการ Hydration
 * [OPTIMIZATION]: เปลี่ยนเป็น Server Component 100% เพื่อประหยัด JavaScript บน Mobile
 */
const Footer = () => {
  // [SSOT]: ใช้ปีปัจจุบันและการตั้งค่าจาก Global Core
  const currentYear = 2026;

  return (
    <footer className="border-border/40 relative overflow-hidden border-t bg-[var(--surface-main)] pt-24 pb-12">
      {/* --- 01. VISUAL ENGINE: Background Matrix --- */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] select-none"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        aria-hidden="true"
      />

      {/* Strategic Gradient Anchor */}
      <div
        className="via-brand-primary/40 absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent blur-[1px]"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          {/* --- 02. BRAND IDENTITY HUB --- */}
          <div className="flex flex-col gap-6 pr-0 md:col-span-5 md:pr-12 lg:col-span-5">
            <Link href="/" className="group flex w-fit items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand-primary)] text-[10px] font-black text-white shadow-md transition-transform group-hover:rotate-6">
                AEM
              </div>
              <span className="text-text-primary text-2xl font-black tracking-tighter transition-colors group-hover:text-[var(--color-brand-primary)]">
                {SITE_CONFIG.brandName.replace("AEM", "")}
              </span>
            </Link>

            <p className="text-text-secondary max-w-sm text-sm leading-relaxed italic">
              {SITE_CONFIG.description}
            </p>

            {/* Systems Status Indicator */}
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                </span>
                <span className="font-sans text-[10px] font-bold tracking-widest text-emerald-500 uppercase">
                  {UI_STRINGS.cta.systemReadyStatus}
                </span>
              </div>

              {/* Expert Signature Injection */}
              <div className="border-border/10 flex items-center gap-4 rounded-2xl border bg-[var(--surface-offset)]/50 p-4 backdrop-blur-md">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-[var(--color-brand-primary)] ring-2 ring-white/10">
                  <Image
                    src={SITE_CONFIG.expert.avatar}
                    alt={SITE_CONFIG.expert.displayName}
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-text-primary text-[11px] font-bold tracking-widest uppercase">
                    {SITE_CONFIG.expert.signature}
                  </span>
                  <span className="text-text-muted text-[10px] font-medium">
                    {UI_STRINGS.footer.expertTitle}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- 03. NAVIGATION LINK MATRIX --- */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3 lg:col-span-7">
            {/* Services Nodes */}
            <nav aria-label="Services Directory">
              <h3 className={HEADER_STYLE}>{UI_STRINGS.footer.servicesHeader}</h3>
              <ul className="space-y-3.5">
                {FOOTER_MAP.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={LINK_STYLE}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Insight Nodes */}
            <nav aria-label="Company Information">
              <h3 className={HEADER_STYLE}>{UI_STRINGS.footer.knowledgeHeader}</h3>
              <ul className="space-y-3.5">
                {FOOTER_MAP.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={LINK_STYLE}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Connect Nodes */}
            <nav aria-label="Connect Channels">
              <h3 className={HEADER_STYLE}>{UI_STRINGS.footer.contactHeader}</h3>
              <ul className="space-y-3.5">
                {FOOTER_MAP.connect.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={LINK_STYLE}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* --- 04. LEGAL BASELINE & COMPLIANCE --- */}
        <div className="border-border/20 flex flex-col items-center justify-between gap-8 border-t pt-10 md:flex-row">
          <div className="flex flex-col items-center gap-6 md:items-start md:gap-2">
            <p className="text-text-muted text-[10px] font-bold tracking-wider opacity-90">
              © <span suppressHydrationWarning>{currentYear}</span> {SITE_CONFIG.brandName}.{" "}
              {UI_STRINGS.footer.copyright}.
            </p>

            {/* Intentional Signatures */}
            <div className="mt-1 flex flex-wrap gap-3 text-[9px] font-black tracking-widest text-text-muted/40 uppercase">
              <span>นายอลงกรณ์ ยมเกิด</span>
              <span>9mza</span>
              <span>เจ้าป่า</span>
            </div>

            {/* UNLINK-GLOBAL OFFICIAL VERIFICATION for AEMDEVWEB */}
            <div className="mt-2 transition-transform duration-300 hover:scale-105 active:scale-95">
              <a
                href="https://www.unlink-th.com/verify/c/c-002"
                target="_blank"
                rel="noopener follow"
                title="AEMDEVWEB Verified by UNLINK-GLOBAL"
                className="block"
              >
                <Image
                  src="https://www.unlink-th.com/branding/verify-badge.webp"
                  alt="Verified by UNLINK-GLOBAL"
                  width={120}
                  height={48}
                  className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all filter grayscale hover:grayscale-0"
                  unoptimized
                />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {FOOTER_MAP.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-muted text-[10px] leading-relaxed font-black tracking-widest uppercase transition-colors hover:text-[var(--color-brand-primary)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
