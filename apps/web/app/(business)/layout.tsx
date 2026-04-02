/**
 * [BUSINESS LAYOUT]: P-SEO_ORCHESTRATOR v18.0.0 (STABILIZED)
 * [STRATEGY]: Distraction-Free Execution | Zero Exit Points | Content Obsession
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import { cn } from "@/lib/utils";

interface BusinessLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ slug?: string; [key: string]: string | undefined }>;
}

/**
 * @component BusinessLayout
 * @description เลเยอร์ครอบหน้าเนื้อหาเชิงธุรกิจ (Blog/Areas/Case Studies)
 * ออกแบบมาเพื่อลด Exit Rate และเพิ่มประสิทธิภาพการอ่านเนื้อหาเชิงลึก
 */
export default async function BusinessLayout({ children, params }: BusinessLayoutProps) {
  /* [A] PARAM_RESOLUTION: มาตรฐาน Next.js 16 (Async Context) 
     รับประกันว่าข้อมูลเชิงพื้นที่ (Geo-context) จะถูก Resolve ก่อนเรนเดอร์ UI
  */
  await params;

  return (
    <div
      className={cn(
        "bg-surface-main relative flex min-h-[100dvh] flex-col antialiased",
        "selection:bg-brand-primary/30 selection:text-brand-primary",
      )}
    >
      {/* [LAYER 01]: PURE CONTENT CORE
          - ปราศจาก Navbar และ Footer เพื่อทำตามกลยุทธ์ Zero Exit Points
          - ใช้ ARIA Roles เพื่อคงมาตรฐาน Accessibility แม้ UI จะเหลือน้อยที่สุด
      */}
      <main
        id="business-content-stream"
        role="main"
        className={cn(
          "relative flex-grow pt-0 outline-none",
          "transition-all duration-500 ease-[0.16,1,0.3,1]",
          "will-change-contents",
        )}
      >
        {children}
      </main>

      {/* [LAYER 02]: MOBILE_SAFETY_ADAPTER
          ป้องกันเนื้อหาถูกบังโดย Home Indicator บนอุปกรณ์พกพา 
          แต่ยังคงความ 'Naked' โดยการไม่ใส่ Background ใดๆ
      */}
      <footer className="h-[env(safe-area-inset-bottom,12px)] w-full shrink-0" aria-hidden="true" />
    </div>
  );
}
