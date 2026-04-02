/**
 * [TEMPLATE ORCHESTRATOR]: TEMPLATE_BUILDER_CONTEXT v1.0.0
 * [STRATEGY]: Global UI State | Theme Management | Dynamic Hydration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import type { TemplateMasterData, TemplateTheme, TemplateContextProps } from "@/types/templates";

const TemplateContext = createContext<TemplateContextProps | undefined>(undefined);

export const useTemplateBuilder = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error("useTemplateBuilder must be used within a TemplateBuilderProvider");
  }
  return context;
};

interface ProviderProps {
  children: ReactNode;
  initialData: TemplateMasterData;
}

export const TemplateBuilderProvider = ({ children, initialData }: ProviderProps) => {
  const [activeTheme, setActiveTheme] = useState<TemplateTheme>(initialData.style?.theme || "dark");

  const isHighPerformance = true;

  const toggleTheme = (theme: TemplateTheme) => {
    setActiveTheme(theme);
    // [STRATEGY]: บันทึกธีมลง LocalStorage หรือ Sync กับ Server ถ้าจำเป็น
  };

  const contextValue = useMemo<TemplateContextProps>(
    () => ({
      data: initialData,
      activeTheme,
      isHighPerformance,
      toggleTheme,
    }),
    [initialData, activeTheme, isHighPerformance],
  );

  return (
    <TemplateContext.Provider value={contextValue}>
      <div
        data-theme={activeTheme}
        className={`template-root transition-colors duration-1000 ${activeTheme}`}
      >
        {children}
      </div>
    </TemplateContext.Provider>
  );
};
