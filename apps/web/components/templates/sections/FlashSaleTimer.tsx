/**
 * [COMPONENT]: FLASH_SALE_TIMER v17.9.102 (GLASS_MORPHISM)
 * [STRATEGY]: Psychology of Urgency | Dynamic Glow | Hydration-Safe
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import { useState, useEffect, memo, useCallback } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface FlashSaleTimerProps {
  readonly targetDate?: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly color?: string;
  readonly className?: string;
}

/**
 * [COMPONENT]: DYNAMIC_URGENCY_ENGINE v18.1.0
 * [STRATEGY]: Psychological Urgency | Recurring Offer Logic | Context-Aware
 */
export const FlashSaleTimer = memo(
  ({
    targetDate,
    title = "Offer Ends Soon!",
    subtitle = "ราคาพิเศษเฉพาะรอบนี้เท่านั้น",
    color = "var(--color-brand-primary)",
    className,
  }: FlashSaleTimerProps) => {
    // [LOGIC]: Recurring Weekly Logic if no targetDate provided
    const finalTarget = targetDate; // จะถูกตรวจสอบใน calculateTimeLeft

    const [timeLeft, setTimeLeft] = useState<{
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    }>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    const [isMounted, setIsMounted] = useState(false);

    const calculateTimeLeft = useCallback(() => {
      // [PERFORMANCE]: ป้องกันการใช้ new Date() ระหว่าง Prerendering บน Server
      if (typeof window === "undefined") return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      const getNextSunday = () => {
        const d = new Date();
        d.setDate(d.getDate() + (7 - d.getDay()));
        d.setHours(23, 59, 59, 0);
        return d.toISOString();
      };

      const target = finalTarget || getNextSunday();
      const difference = +new Date(target) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }, [finalTarget]);

    useEffect(() => {
      setIsMounted(true);
      setTimeLeft(calculateTimeLeft());
      const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
      return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    if (!isMounted) {
      return (
        <div className={cn("mx-auto max-w-4xl px-4", className)}>
          <div className="rounded-card h-32 w-full border border-white/10 bg-white/5" />
        </div>
      );
    }

    const formatNumber = (num: number) => num.toString().padStart(2, "0");

    return (
      <div className={cn("mx-auto max-w-4xl px-4", className)}>
        <div
          className="rounded-section relative flex flex-col items-center justify-between gap-6 overflow-hidden p-6 transition-all duration-700 hover:scale-[1.01] md:flex-row md:px-10 md:py-8"
          style={{
            backgroundColor: `${color}15`,
            borderColor: `${color}30`,
            borderWidth: "1px",
            boxShadow: `0 20px 50px -15px ${color}25`,
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-[50%] -left-[20%] h-[200%] w-[150%] opacity-20"
            style={{
              background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-md transition-transform hover:rotate-12"
              style={{ backgroundColor: color, color: "white" }}
            >
              <IconRenderer
                name="Timer"
                size={28}
                className="animate-[pulse_2s_ease-in-out_infinite] text-white"
              />
            </div>
            <div>
              <h3 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic drop-shadow-sm md:text-3xl">
                {title}
              </h3>
              <p className="text-text-muted text-[10px] font-black tracking-widest uppercase opacity-60">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 md:gap-5">
            {timeLeft.days > 0 && (
              <>
                <TimeUnit value={formatNumber(timeLeft.days)} label="DAYS" accentColor={color} />
                <Separator accentColor={color} />
              </>
            )}
            <TimeUnit value={formatNumber(timeLeft.hours)} label="HOURS" accentColor={color} />
            <Separator accentColor={color} />
            <TimeUnit value={formatNumber(timeLeft.minutes)} label="MINS" accentColor={color} />
            <Separator accentColor={color} />
            <TimeUnit
              value={formatNumber(timeLeft.seconds)}
              label="SECS"
              accentColor={color}
              isWarning
            />
          </div>
        </div>
      </div>
    );
  },
);

FlashSaleTimer.displayName = "FlashSaleTimer";

const Separator = ({ accentColor }: { accentColor: string }) => (
  <div className="flex flex-col gap-2 pb-6 opacity-30">
    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: accentColor }} />
    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: accentColor }} />
  </div>
);

function TimeUnit({
  value,
  label,
  accentColor,
  isWarning = false,
}: {
  value: string;
  label: string;
  accentColor: string;
  isWarning?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={cn(
          "text-text-primary flex h-14 w-14 items-center justify-center rounded-2xl border bg-[var(--surface-main)] text-2xl font-black shadow-2xl backdrop-blur-md transition-all md:h-16 md:w-16 md:text-3xl",
          isWarning && "animate-[pulse_1s_ease-in-out_infinite]",
        )}
        style={{
          color: accentColor,
          borderColor: isWarning ? accentColor : "var(--border)",
        }}
      >
        {value}
      </div>
      <span className="text-text-muted font-mono text-[8px] font-black tracking-[0.2em] uppercase opacity-40">
        {label}
      </span>
    </div>
  );
}
