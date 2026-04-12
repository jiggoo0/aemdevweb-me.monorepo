import React from "react";
import { cn } from "../lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  title,
  description,
  badge,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-16 space-y-4",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
        className,
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 bg-secondary/5 border border-secondary/10 rounded-full",
            align === "center" ? "justify-center" : "",
          )}
        >
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg font-light leading-relaxed">{description}</p>
      )}
    </div>
  );
};
