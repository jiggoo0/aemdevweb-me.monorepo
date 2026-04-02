/**
 * [FEATURE COMPONENT]: TABLE_OF_CONTENTS v18.0.4 (STABILIZED)
 * [STRATEGY]: Intersection Observer | Active Node Tracking | Zero-CLS
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface HeadingNode {
  readonly id: string;
  readonly text: string;
  readonly level: number;
}

interface TOCProps {
  readonly headings: readonly HeadingNode[];
}

/**
 * @component TableOfContents
 * @description เมนูนำทางภายในบทความที่รองรับการติดตามตำแหน่งการอ่านแบบ Real-time
 */
const TableOfContents = ({ headings }: TOCProps) => {
  const [activeId, setActiveId] = useState<string>("");

  /** [STRATEGY]: การใช้ Intersection Observer เพื่อระบุหัวข้อที่กำลังแสดงผล */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="border-border/40 bg-surface-card/40 rounded-2xl border p-8 backdrop-blur-sm">
      <div className="mb-6 flex items-center gap-3">
        <IconRenderer name="Layers" className="h-4 w-4 text-[var(--color-brand-primary)]" />
        <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.4em] uppercase">
          Article_Navigation
        </span>
      </div>

      <ul className="space-y-4">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1.5}rem` }}
            className="group"
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                window.history.pushState(null, "", `#${heading.id}`);
              }}
              className={cn(
                "block text-sm transition-all duration-300",
                activeId === heading.id
                  ? "translate-x-1 font-bold text-[var(--color-brand-primary)]"
                  : "text-text-secondary hover:text-text-primary group-hover:translate-x-1",
              )}
            >
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "h-px transition-all duration-500",
                    activeId === heading.id
                      ? "w-4 bg-[var(--color-brand-primary)]"
                      : "bg-text-muted/20 w-2 group-hover:w-3",
                  )}
                />
                <span className="line-clamp-1">{heading.text}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
