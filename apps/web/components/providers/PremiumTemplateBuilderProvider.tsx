"use client";

/**
 * [ORCHESTRATION LAYER]: PREMIUM_TEMPLATE_BUILDER_PROVIDER v1.0.0
 * [STRATEGY]: Schema-Driven Hydration | Shared State Orchestration
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";
import type {
  PremiumTemplateProps,
  PremiumContextState,
  PremiumAction,
} from "@/lib/templates/premium-types";

// --- 01. INITIAL STATE ---
const initialState = (data: PremiumTemplateProps): PremiumContextState => ({
  data,
  activeSectionId: null,
  cursorPosition: { x: 0, y: 0 },
  isScrolled: false,
  isMounted: false,
});

// --- 02. REDUCER ---
const premiumReducer = (state: PremiumContextState, action: PremiumAction): PremiumContextState => {
  switch (action.type) {
    case "SET_ACTIVE_SECTION":
      return { ...state, activeSectionId: action.id };
    case "UPDATE_CURSOR":
      return { ...state, cursorPosition: { x: action.x, y: action.y } };
    case "SET_SCROLLED":
      return { ...state, isScrolled: action.isScrolled };
    case "MOUNTED":
      return { ...state, isMounted: true };
    default:
      return state;
  }
};

// --- 03. CONTEXT ---
const PremiumContext = createContext<{
  state: PremiumContextState;
  dispatch: React.Dispatch<PremiumAction>;
} | null>(null);

// --- 04. PROVIDER ---
export const PremiumTemplateBuilderProvider = ({
  data,
  children,
}: {
  data: PremiumTemplateProps;
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(premiumReducer, data, initialState);

  // Track hydration
  useEffect(() => {
    dispatch({ type: "MOUNTED" });
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== state.isScrolled) {
        dispatch({ type: "SET_SCROLLED", isScrolled: scrolled });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state.isScrolled]);

  // Track mouse position for atmospheric effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dispatch({ type: "UPDATE_CURSOR", x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <PremiumContext.Provider value={{ state, dispatch }}>
      {children}
    </PremiumContext.Provider>
  );
};

// --- 05. HOOK ---
export const usePremiumTemplate = () => {
  const context = useContext(PremiumContext);
  if (!context) {
    throw new Error("usePremiumTemplate must be used within a PremiumTemplateBuilderProvider");
  }
  return context;
};
