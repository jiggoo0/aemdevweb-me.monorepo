"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // ป้องกันปัญหา Hydration Mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-md dark:border-white/10 dark:bg-white/5" />
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-11 w-11 rounded-xl border border-slate-200 bg-white/50 shadow-sm backdrop-blur-md transition-all hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="สลับธีม"
    >
      <Sun className="h-5 w-5 scale-100 rotate-0 text-orange-500 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-5 w-5 scale-0 rotate-90 text-blue-400 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
