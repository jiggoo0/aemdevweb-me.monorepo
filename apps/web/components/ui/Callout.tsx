/**
 * [UI COMPONENT]: CALLOUT_NODE v17.9.9 (STABILIZED)
 * [STRATEGY]: Information Hierarchy | Visual Anchor | MDX Integration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import { cn } from "@/lib/utils";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer"; // [FIX]: Import type correctly

interface CalloutProps {
  readonly children?: React.ReactNode;
  readonly type?: "info" | "warning" | "success" | "danger";
  readonly icon?: IconName;
}

export function Callout({ children, type = "info", icon }: CalloutProps) {
  // [SAFETY]: ป้องกันการเรนเดอร์ Layout เปล่าหากไม่มีเนื้อหา (Satisfy TS optionality)
  if (!children) return null;

  const styles = {
    info: "border-[var(--border)] bg-surface-offset/40 text-text-primary",
    warning: "border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400",
    success: "border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400",
    danger: "border-rose-500/20 bg-rose-500/5 text-rose-600 dark:text-rose-400",
  };

  const iconColors = {
    info: "text-[var(--color-brand-primary)]",
    warning: "text-amber-500",
    success: "text-emerald-500",
    danger: "text-rose-500",
  };

  return (
    <div
      className={cn(
        "my-8 flex gap-5 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-500 md:gap-6 md:p-8",
        styles[type],
      )}
    >
      {icon && (
        <div className={cn("mt-1 shrink-0", iconColors[type])}>
          <IconRenderer name={icon} size={22} strokeWidth={2.5} />
        </div>
      )}
      <div className="text-base leading-relaxed font-medium text-balance md:text-lg">
        {children}
      </div>
    </div>
  );
}
