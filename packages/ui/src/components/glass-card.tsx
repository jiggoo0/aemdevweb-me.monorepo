import * as React from "react";
import { cn } from "../lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl";
  intensity?: "low" | "medium" | "high";
  withBorder?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, blur = "md", intensity = "medium", withBorder = true, children, ...props },
    ref,
  ) => {
    const blurClasses = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
    };

    const intensityClasses = {
      low: "bg-white/5",
      medium: "bg-white/10",
      high: "bg-white/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl transition-all duration-300",
          blurClasses[blur],
          intensityClasses[intensity],
          withBorder && "border border-white/10 border-t-white/20 border-l-white/20",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
          "hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:border-white/30",
          className,
        )}
        {...props}
      >
        {/* Subtle Highlight Reflection */}
        <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 p-6">{children}</div>
      </div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
