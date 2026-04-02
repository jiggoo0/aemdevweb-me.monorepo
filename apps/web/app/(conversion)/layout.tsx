/**
 * [(SALES) LAYOUT]: HIGH_CONVERSION_SHELL v17.9.106
 * [STRATEGY]: Async Params Resolution | Safe Viewport aware | Zero-Jank
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";

interface SalesLayoutProps {
  readonly children: React.ReactNode;
  readonly params: Promise<{ slug?: string; [key: string]: string | undefined }>;
}

export default async function SalesLayout({ children, params }: SalesLayoutProps) {
  // [CORE]: Resolve params เพื่อรองรับมาตรฐาน Next.js 15+
  await params;

  return (
    <main
      id="sales-container"
      className="bg-surface-main relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden antialiased"
    >
      {/* [LAYER 01]: MAIN CONTENT STREAM */}
      <div className="relative z-10 flex flex-grow flex-col">{children}</div>

      {/* [LAYER 02]: SYSTEM UI ADAPTER
          ป้องกันปุ่ม Sticky หรือ Floating UI ทับแถบ Home Indicator บน iOS/Android 
      */}
      <div className="h-[env(safe-area-inset-bottom,20px)] w-full shrink-0" aria-hidden="true" />
    </main>
  );
}
