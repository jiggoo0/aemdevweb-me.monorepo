/**
 * [UI COMPONENT]: PAGINATION_SYSTEM v18.0.5 (STABILIZED)
 * [STRATEGY]: URL-Driven Navigation | Dynamic Range Generation | Zero-Waste Logic
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  readonly totalPages: number;
  readonly currentPage: number;
  readonly siblingCount?: number;
}

/**
 * @component Pagination
 * @description ระบบนำทางหน้าบทความแบบ Dynamic รองรับการแสดงผลช่วงหน้า (Range)
 */
const Pagination = ({ totalPages, currentPage, siblingCount = 1 }: PaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // [FALLBACK]: ไม่แสดงผลหากมีเพียงหน้าเดียว
  if (totalPages <= 1) return null;

  /** [STRATEGY]: URL Parameter Management */
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    router.push(createPageURL(page), { scroll: true });
  };

  /** [LOGIC]: การคำนวณช่วงหน้าที่จะแสดงผล (Pagination Range) */
  const getRange = () => {
    const range: (number | string)[] = [];
    const totalPageNumbers = siblingCount * 2 + 5; // siblingCount + first + last + current + 2 dots

    if (totalPageNumbers >= totalPages) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
      return range;
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      for (let i = 1; i <= leftItemCount; i++) range.push(i);
      range.push("...");
      range.push(totalPages);
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      range.push(1);
      range.push("...");
      for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) range.push(i);
    } else {
      range.push(1);
      range.push("...");
      for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) range.push(i);
      range.push("...");
      range.push(totalPages);
    }

    return range;
  };

  return (
    <nav className="mt-20 flex items-center justify-center gap-2 md:mt-32">
      {/* PREVIOUS BUTTON */}
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
        title="ก่อนหน้า"
        className="rounded-full"
      >
        <IconRenderer name="ChevronRight" className="rotate-180" />
      </Button>

      {/* PAGE NUMBERS */}
      <div className="flex items-center gap-2">
        {getRange().map((page, index) => {
          if (page === "...") {
            return (
              <span key={`dots-${index}`} className="text-text-muted px-2 font-mono text-xs">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Button
              key={pageNum}
              variant={isActive ? "neo" : "secondary"}
              size="sm"
              onClick={() => handlePageChange(pageNum)}
              className={cn(
                "min-w-[40px] rounded-full px-0 font-mono text-xs italic",
                isActive ? "shadow-sm" : "border-transparent",
              )}
            >
              {pageNum.toString().padStart(2, "0")}
            </Button>
          );
        })}
      </div>

      {/* NEXT BUTTON */}
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        title="ถัดไป"
        className="rounded-full"
      >
        <IconRenderer name="ChevronRight" />
      </Button>
    </nav>
  );
};

export default Pagination;
