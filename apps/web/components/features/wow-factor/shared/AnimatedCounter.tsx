"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, motion } from "framer-motion";

/**
 * [WOW-FACTOR]: ANIMATED_COUNTER v1.0.0
 * [STRATEGY]: GPU-Accelerated Numerical Transition | SEO Fallback
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const AnimatedCounter = ({
  value,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
      onUpdate(value) {
        setDisplayValue(value);
      },
    });

    return () => controls.stop();
  }, [value, duration, delay, isInView]);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={`font-mono tabular-nums ${className}`}
    >
      {prefix}
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
