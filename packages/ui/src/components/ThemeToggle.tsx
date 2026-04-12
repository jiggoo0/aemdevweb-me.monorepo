/**
 * [UI COMPONENT]: THEME_TOGGLE v1.0.0 (NAMED_EXPORT)
 */

import React, { memo } from "react";
import { Sun } from "lucide-react";
import { cn } from "../lib/utils";

const ThemeToggleComponent = ({ className }: { className?: string }) => {
  // Simple Toggle logic for now
  return (
    <button
      className={cn(
        "p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors",
        className,
      )}
    >
      <Sun size={18} />
    </button>
  );
};

export const ThemeToggle = memo(ThemeToggleComponent);
