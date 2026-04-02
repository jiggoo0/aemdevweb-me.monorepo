/**
 * [SHARED COMPONENT]: NEURAL_INTERACTION_NODE v18.4.0
 * [STRATEGY]: Autonomous UI Sync | GPU-Accelerated Positioning | Zero-JS Animation
 */

"use client";

import React, { useEffect, useState, type ReactNode, useCallback, memo } from "react";
import { cn } from "@/lib/utils";

interface FloatingContainerProps {
  readonly children: ReactNode;
  readonly triggerY?: number;
  readonly className?: string;
  readonly id?: string;
  readonly showStatus?: boolean;
}

const FloatingContainerBase = ({
  children,
  triggerY = 100,
  className,
  id,
  showStatus = true,
}: FloatingContainerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > triggerY);
  }, [triggerY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      id={id}
      className={cn(
        "pointer-events-none fixed z-50 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity]",
        isVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-90 opacity-0",
        className,
      )}
    >
      <div className={cn("pointer-events-auto relative", !isVisible && "pointer-events-none")}>
        {showStatus && (
          <div className="absolute -top-2 -right-2 z-10 flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-primary)] opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export const FloatingContainer = memo(FloatingContainerBase);
