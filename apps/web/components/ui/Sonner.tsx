/**
 * [SYSTEM MODULE]: SPECIALIST_NOTIFICATION_SYSTEM v17.9.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Semantic Perceptual Integrity | Theme-Aware Depth | Fluid Feedback
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { cn } from "@/lib/utils";

type ToasterProps = React.ComponentProps<typeof Sonner>;

/**
 * @component Toaster
 * @description หน่วยประมวลผลการแจ้งเตือนระดับระบบ (Global Toast Hub)
 * [STABILIZED]: ปรับจูนให้รองรับ Multi-Theme และระบบเงาแบบ Dynamic Glow
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          /* 01. BASE INFRASTRUCTURE */
          toast: cn(
            "group toast group-[.toaster]:bg-surface-card/90 group-[.toaster]:text-text-primary",
            "group-[.toaster]:border-border group-[.toaster]:rounded-[1.5rem] group-[.toaster]:backdrop-blur-sm",
            "transition-all duration-500 group-[.toaster]:p-6 group-[.toaster]:shadow-md",
          ),

          /* 02. TYPOGRAPHY HIERARCHY */
          title:
            "group-[.toast]:text-text-primary group-[.toast]:text-sm group-[.toast]:font-black group-[.toast]:uppercase group-[.toast]:italic group-[.toast]:tracking-wider",
          description:
            "group-[.toast]:text-text-secondary group-[.toast]:text-xs group-[.toast]:font-medium group-[.toast]:mt-1",

          /* 03. ACTION INTERFACE */
          actionButton:
            "group-[.toast]:bg-brand-primary group-[.toast]:text-surface-main group-[.toast]:font-black group-[.toast]:uppercase group-[.toast]:tracking-widest group-[.toast]:text-[10px] group-[.toast]:rounded-xl group-[.toast]:px-4 group-[.toast]:py-2 hover:group-[.toast]:brightness-110 active:group-[.toast]:scale-95 transition-all",
          cancelButton:
            "group-[.toast]:bg-surface-offset group-[.toast]:text-text-muted group-[.toast]:font-bold group-[.toast]:uppercase group-[.toast]:tracking-widest group-[.toast]:text-[10px] group-[.toast]:rounded-xl hover:group-[.toast]:bg-surface-card transition-all",

          /* 04. STATUS REFINEMENT */
          error:
            "group-[.toast]:text-red-500 group-[.toast]:border-red-500/20 group-[.toaster]:bg-red-500/10",
          success:
            "group-[.toast]:text-brand-primary group-[.toast]:border-brand-primary/20 group-[.toaster]:bg-brand-primary/10",
          warning:
            "group-[.toast]:text-yellow-500 group-[.toast]:border-yellow-500/20 group-[.toaster]:bg-yellow-500/10",
          info: "group-[.toast]:text-blue-500 group-[.toast]:border-blue-500/20 group-[.toaster]:bg-blue-500/10",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
