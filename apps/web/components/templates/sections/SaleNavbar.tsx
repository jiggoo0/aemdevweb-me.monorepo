/**
 * [COMPONENT]: SALE_NAVBAR v17.9.101 (TYPE_STABILIZED)
 * [STRATEGY]: Global Type Sync | Glassmorphism | mode-Aware UI
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Route } from "next";
import IconRenderer from "@/components/ui/IconRenderer";

interface SaleNavbarProps {
  readonly title: string;
  readonly action?: {
    label: string;
    href: string;
  };
}

export function SaleNavbar({ title, action }: SaleNavbarProps) {
  // [LOGIC]: ดึงค่าสีจาก CSS Variables ที่ TemplateRenderer ฉีดไว้ให้
  const accentColor = "var(--color-brand-primary)";

  return (
    <nav
      className={cn(
        "sticky top-0 z-[100] border-b backdrop-blur-sm transition-all duration-500",
        "border-[var(--border)] bg-[var(--surface-card)]/80 text-[var(--text-primary)]",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Identity: Logo / Title */}
        <Link
          href="/"
          className="text-lg font-black tracking-tighter text-[var(--text-primary)] uppercase italic drop-shadow-sm transition-all hover:scale-105 active:scale-95"
        >
          {title}
        </Link>

        {/* Primary Action Button (CTA) */}
        {action && (
          <Link
            href={action.href as Route}
            style={{
              backgroundColor: accentColor,
              boxShadow: "var(--shadow-sm)",
            }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-[10px] font-black tracking-widest text-white uppercase italic transition-all hover:brightness-110 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              {action.label}
              <IconRenderer
                name="MoveRight"
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </Link>
        )}
      </div>
    </nav>
  );
}
