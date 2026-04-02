/**
 * [UI COMPONENT]: MAGNETIC_WRAPPER v1.0.0 (PREMIUM_INTERACTION)
 * [STRATEGY]: Magnetic Force Field | Spring-Based Physics | Zero-Latency
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useRef, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  distance?: number;
}

export const Magnetic = ({ children, distance = 0.5 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e;
      if (ref.current) {
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * distance);
        y.set(middleY * distance);
      }
    },
    [distance, x, y],
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};
