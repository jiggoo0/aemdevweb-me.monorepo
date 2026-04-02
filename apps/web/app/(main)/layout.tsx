/**
 * [(MAIN) LAYOUT]: CORE_ORCHESTRATOR v18.1.6 (FINAL_STABILIZED)
 * [STRATEGY]: Stacking Context Protection | Geometric Stability
 */

import React from "react";
import { type LayoutProps } from "@/types";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

interface MainLayoutProps extends LayoutProps {
  readonly params: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function MainLayout({ children, params }: MainLayoutProps) {
  // [CORE]: Next.js 15 Async Contract Validation
  await params;

  return (
    <div className="bg-surface-main relative flex min-h-dvh flex-col font-sans antialiased">
      {/* 00. A11Y GATEWAY */}
      <a
        href="#main-content"
        className="bg-brand-primary absolute top-4 left-4 z-[1000] -translate-y-[200%] rounded-xl px-6 py-3 text-sm font-black text-white shadow-2xl transition-transform focus:translate-y-0"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>

      {/* 01. NAVIGATION LAYER (Zero-Constraint Stack) */}
      <Navbar />

      {/* 02. MAIN CONTENT HUB */}
      <main
        id="main-content"
        className={cn("relative isolate z-10 flex flex-auto flex-col pt-24 outline-none md:pt-32")}
      >
        <div className="flex w-full flex-col">{children}</div>
      </main>

      {/* 03. FOOTER TERMINUS */}
      <Footer />

      {/* 04. DECORATIVE ARCHITECTURE */}
      <div className="via-border/20 pointer-events-none fixed inset-y-0 left-0 z-50 hidden w-px bg-gradient-to-b from-transparent to-transparent lg:block" />
      <div className="via-border/20 pointer-events-none fixed inset-y-0 right-0 z-50 hidden w-px bg-gradient-to-b from-transparent to-transparent lg:block" />
    </div>
  );
}
