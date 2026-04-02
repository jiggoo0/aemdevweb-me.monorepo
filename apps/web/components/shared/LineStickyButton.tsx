/**
 * [SHARED COMPONENT]: LINE_STICKY_BUTTON v18.0.1 (STABILIZED)
 * [STRATEGY]: Partnership Integration | Neural Physics | Type-Safe Tracking
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useCallback } from "react";
import { FloatingContainer } from "./FloatingContainer";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import { UI_STRINGS } from "@/constants/ui-strings";
import { cn } from "@/lib/utils";

// --- [TYPE_DEFINITION]: Extend Global Window for DataLayer ---
interface DataLayerEvent {
  event: string;
  event_category?: string;
  event_label?: string;
  contact_source?: string;
  timestamp?: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

interface LineStickyButtonProps {
  readonly className?: string;
  /** [TRACKING]: ป้ายกำกับสำหรับแยกประเภท Conversion (เช่น 'services_page', 'area_node') */
  readonly source?: string;
}

/**
 * @component LineStickyButton
 * @description ปุ่มลอยติดต่อ Line พร้อมระบบ Tracking แบบ Strict-Type
 */
const LineStickyButton = ({ className, source = "general_conversion" }: LineStickyButtonProps) => {
  /**
   * [HANDLER]: trackConversion
   * @description บันทึกเหตุการณ์ลง DataLayer โดยปราศจาก "any" casting
   */
  const handleContactClick = useCallback(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "conversion_intent",
        event_category: "contact",
        event_label: "line_contact",
        contact_source: source,
        timestamp: new Date().toISOString(),
      });
    }
  }, [source]);

  return (
    <FloatingContainer
      triggerY={120}
      id="line-fab"
      className={cn("fixed right-6 bottom-6 z-[60]", className)}
    >
      <div className="group relative flex items-center justify-end">
        {/* --- 01. STATUS NODE: Specialist Availability Signal --- */}
        <div className="pointer-events-none absolute right-0 bottom-full mb-5 w-max origin-bottom translate-y-3 scale-90 transform-gpu opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] will-change-[transform,opacity] group-hover:translate-y-0 group-hover:scale-105 group-hover:opacity-100">
          <div className="border-border/40 bg-surface-card/90 flex items-center gap-3 rounded-2xl border px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="bg-line-green absolute inline-flex h-full w-full rounded-full opacity-75"></span>
              <span className="bg-line-green relative inline-flex h-2 w-2 rounded-full shadow-[0_0_10px_var(--color-line-green)]"></span>
            </span>
            <p className="text-text-primary font-mono text-[9px] font-black tracking-[0.2em] uppercase">
              {UI_STRINGS.cta.specialistOnline}
            </p>
          </div>
        </div>

        {/* --- 02. PRIMARY ACTION NODE: High-Intensity Contact Point --- */}
        <a
          href={SITE_CONFIG.links.line}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleContactClick}
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-[1.8rem] md:h-16 md:w-16 md:rounded-[2.1rem]",
            "from-line-green to-line-dark bg-gradient-to-br text-white",
            "shadow-[0_10px_25px_-5px_rgba(6,199,85,0.4)] hover:shadow-[0_15px_35px_-5px_rgba(6,199,85,0.5)]",
            "transform-gpu transition-all duration-500 ease-[0.23,1,0.32,1]",
            "hover:scale-105 hover:-rotate-3 active:scale-95",
            "pointer-events-auto cursor-pointer",
          )}
          aria-label="Connect with Technical Specialist via Line"
        >
          {/* Ambient Signal Pulse - Subdued for Professionalism */}
          <span className="bg-line-green absolute inset-0 z-0 transform-gpu rounded-[1.8rem] opacity-10 duration-[3000ms]" />

          <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
            <IconRenderer
              name="MessageCircle"
              size={26}
              strokeWidth={2}
              className="drop-shadow-sm"
            />
          </div>

          {/* --- 03. CTA DESKTOP LABEL: Conversion Hook --- */}
          <div className="pointer-events-none absolute right-full mr-6 hidden transform-gpu items-center md:flex">
            <span
              className={cn(
                "shadow-pro border-border/40 text-text-primary translate-x-3 rounded-2xl border bg-[var(--surface-main)]/95 px-6 py-3 text-[11px] font-bold tracking-[0.2em] whitespace-nowrap uppercase opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100",
              )}
            >
              {UI_STRINGS.cta.consultExpert}
            </span>
            {/* Neural Linkage UI */}
            <div className="h-px w-6 origin-right scale-x-0 bg-[var(--color-brand-primary)] transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        </a>
      </div>
    </FloatingContainer>
  );
};

LineStickyButton.displayName = "LineStickyButton";

export default memo(LineStickyButton);
