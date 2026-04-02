/**
 * [FEATURE COMPONENT]: BLOG_FILTER_SYSTEM v18.0.8 (STABILIZED)
 * [STRATEGY]: URL-Driven State | Zero-CLS Infrastructure | Mobile-First Scroll
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface BlogFiltersProps {
  readonly categories: readonly string[];
  readonly currentCategory?: string;
  readonly currentQuery?: string;
}

/**
 * @component BlogFilters
 * @description ระบบกรองบทความที่เชื่อมโยงกับ URL เพื่อรองรับ SEO และการแชร์ลิงก์
 */
const BlogFilters = ({
  categories,
  currentCategory = "all",
  currentQuery = "",
}: BlogFiltersProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // --- 1. LOCAL STATE (For Search Responsiveness) ---
  const [search, setSearch] = useState(currentQuery);

  /** [DEBOUNCE_STRATEGY]: ลดภาระการ Query เมื่อพิมพ์เร็วๆ */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search !== currentQuery) {
        updateParams({ q: search, page: "1" });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [search, currentQuery]);

  /** [STRATEGY]: URL Parameter Management */
  const updateParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "all" || value === "") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  return (
    <div className="mb-16 space-y-10 md:mb-24">
      {/* --- 01. SEARCH INTERFACE: High-End Terminal Style --- */}
      <div className="group relative max-w-3xl">
        <div className="group-within:opacity-100 absolute -inset-1 transform-gpu rounded-3xl bg-[var(--color-brand-primary)]/20 opacity-0 blur-xl transition-opacity duration-700" />
        <div className="bg-surface-card/40 border-border/40 relative flex h-20 items-center gap-4 rounded-2xl border px-6 backdrop-blur-sm transition-all duration-500 focus-within:border-[var(--color-brand-primary)]/50">
          <IconRenderer
            name={isPending ? "Loader2" : "Search"}
            className={cn(
              "text-text-muted group-within:text-[var(--color-brand-primary)] h-6 w-6 transition-colors",
              isPending && "animate-spin",
            )}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ค้นหาบทความเทคนิค... (e.g. Next.js, SEO, React)"
            className="text-text-primary placeholder:text-text-muted/60 h-full w-full bg-transparent font-mono text-sm font-medium tracking-tight outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-text-muted p-2 transition-colors hover:text-[var(--color-brand-primary)]"
              title="ล้างค่า"
            >
              <IconRenderer name="X" size={18} />
            </button>
          )}
        </div>
      </div>

      {/* --- 02. CATEGORY NAVIGATOR: Ultra-Responsive Horizontal Scroll --- */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[var(--color-brand-primary)]" />
          <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            Browse_by_Core_Discipline
          </span>
        </div>

        <nav className="no-scrollbar -mx-4 flex items-center gap-3 overflow-x-auto px-4 md:mx-0 md:px-0">
          <Button
            variant={currentCategory === "all" ? "neo" : "secondary"}
            size="sm"
            onClick={() => updateParams({ category: "all", page: "1" })}
            className="flex-shrink-0"
          >
            All Insights
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={currentCategory === cat ? "neo" : "secondary"}
              size="sm"
              onClick={() => updateParams({ category: cat, page: "1" })}
              className="flex-shrink-0"
            >
              {cat}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default BlogFilters;
