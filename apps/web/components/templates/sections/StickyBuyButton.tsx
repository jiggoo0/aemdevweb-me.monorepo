/**
 * [COMPONENT]: STICKY_BUY_BUTTON v17.9.101 (MOBILE_CONVERSION_DOCK)
 * [STRATEGY]: iOS Safe Area | Theme Property Sync | Zero-Waste
 */

"use client";

import React, { memo, useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ThemeConfig } from "@/types"; // เพิ่ม Import Type
import IconRenderer from "@/components/ui/IconRenderer";

interface StickyBuyButtonProps {
  readonly href: string;
  readonly price?: number | string;
  readonly discount?: number;
  readonly label?: string;
  readonly theme?: ThemeConfig; // เปลี่ยนจาก color เป็น theme เพื่อความสอดคล้อง
}

const StickyBuyButton = memo(
  ({ href, price, discount = 0, label = "จองสิทธิ์ทันที", theme }: StickyBuyButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);

    // [LOGIC]: ดึงสีจากธีม ถ้าไม่มีให้ใช้สีแดงเป็น Fallback
    const activeColor = theme?.primary || "var(--color-brand-primary)";

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }, []);

    const originalPrice = typeof price === "number" && discount > 0 ? price + discount : null;

    return (
      <div
        className={cn(
          "cubic-bezier(0.16, 1, 0.3, 1) fixed bottom-0 left-0 z-[100] w-full px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] transition-transform duration-700 md:hidden",
          isVisible ? "translate-y-0" : "translate-y-[150%]",
        )}
      >
        <div className="rounded-card flex items-center justify-between gap-4 border border-white/20 bg-white/80 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/60 dark:text-white">
          <div className="flex flex-col pl-4">
            <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
              Total
            </span>
            <div className="flex items-baseline gap-2">
              <span
                style={{ color: activeColor }}
                className="text-xl leading-none font-black drop-shadow-sm"
              >
                ฿{typeof price === "number" ? price.toLocaleString() : price}
              </span>
              {originalPrice && (
                <span className="text-[10px] text-slate-400 line-through decoration-slate-400/50 decoration-2">
                  ฿{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <Link
            href={href}
            style={{
              backgroundColor: activeColor,
              boxShadow: `0 8px 20px -6px ${activeColor}80`,
            }}
            className="group relative flex h-12 flex-grow items-center justify-center overflow-hidden rounded-[1.5rem] px-6 text-white transition-transform active:scale-95"
          >
            <div className="relative z-10 flex items-center gap-2 text-sm font-black tracking-wide uppercase">
              <IconRenderer name="ShoppingBag" size={18} strokeWidth={2.5} className="mb-0.5" />
              {label}
            </div>
            <div className="group-hover: absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </Link>
        </div>
      </div>
    );
  },
);

StickyBuyButton.displayName = "StickyBuyButton";

// [FIXED]: เปลี่ยนเป็น export default เพื่อให้ตรงกับการ Import ใน Index.tsx
export default StickyBuyButton;
