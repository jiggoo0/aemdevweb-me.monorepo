/**
 * [SYSTEM CONFIG]: PROVINCIAL_DNA_REGISTRY v1.0.0
 * [STRATEGY]: Regional Identity | Visual Inheritance | SSOT
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { ThemeConfig } from "../../types";

interface ProvinceDna {
  readonly region: "North" | "Northeast" | "Central" | "East" | "South" | "West";
  readonly theme: Partial<ThemeConfig>;
  readonly layoutOrder?: string[];
  readonly tier: 1 | 2 | 3;
  readonly landmark?: string;
}

/** [REGISTRY]: มาตรฐานอัตลักษณ์ภูมิภาคและจังหวัดเฉพาะทาง (DNA Blueprint) */
const PROVINCIAL_DNA: Record<string, ProvinceDna> = {
  // --- ภาคกลาง & กรุงเทพฯ ---
  bangkok: {
    region: "Central",
    tier: 1,
    theme: {
      primary: "oklch(55% 0.18 260)", // Deep Enterprise Indigo
      mode: "dark",
      radius: "1.5rem",
    },
    layoutOrder: ["hero", "stats", "process", "insight", "trust", "pricing", "faq", "nodes", "cta"],
  },
  nonthaburi: {
    region: "Central",
    tier: 2,
    theme: {
      primary: "oklch(55% 0.15 260)",
      mode: "dark",
    },
  },

  // --- ภาคเหนือ (Nature & Heritage) ---
  "chiang-mai": {
    region: "North",
    tier: 1,
    theme: {
      primary: "oklch(50% 0.12 150)", // Deep Forest Green
      mode: "light",
      radius: "2rem",
    },
    layoutOrder: ["hero", "gallery", "process", "trust", "pricing", "faq", "cta"],
  },
  lampang: {
    region: "North",
    tier: 2,
    theme: {
      primary: "oklch(45% 0.1 80)", // Ceramic Terracotta
      mode: "light",
    },
  },
  "mae-hong-son": {
    region: "North",
    tier: 2,
    theme: {
      primary: "oklch(65% 0.08 160)", // Misty Teal
      mode: "dark",
    },
  },

  // --- ภาคอีสาน (Craft & Vitality) ---
  "khon-kaen": {
    region: "Northeast",
    tier: 1,
    theme: {
      primary: "oklch(55% 0.18 45)", // Clay Orange
      mode: "light",
    },
  },
  korat: {
    region: "Northeast",
    tier: 1,
    theme: {
      primary: "oklch(40% 0.15 250)", // Industrial Cobalt
      mode: "dark",
    },
  },
  "si-sa-ket": {
    region: "Northeast",
    tier: 2,
    theme: {
      primary: "oklch(50% 0.15 30)", // Volcanic Red
      mode: "dark",
    },
  },

  // --- ภาคใต้ (Oceanic & Tourism) ---
  phuket: {
    region: "South",
    tier: 1,
    theme: {
      primary: "oklch(60% 0.2 230)", // Andaman Sky Blue
      mode: "light",
      radius: "2rem",
    },
    layoutOrder: ["hero", "gallery", "trust", "process", "pricing", "faq", "cta"],
  },
  krabi: {
    region: "South",
    tier: 2,
    theme: {
      primary: "oklch(55% 0.18 180)", // Emerald Sea
      mode: "dark",
    },
  },
  songkhla: {
    region: "South",
    tier: 1,
    theme: {
      primary: "oklch(45% 0.12 260)", // Trade Navy
      mode: "dark",
    },
  },

  // --- ภาคตะวันออก (Industrial & Fruit) ---
  "chon-buri": {
    region: "East",
    tier: 1,
    theme: {
      primary: "oklch(50% 0.12 240)", // Steel Blue
      mode: "light",
    },
  },
  rayong: {
    region: "East",
    tier: 1,
    theme: {
      primary: "oklch(40% 0.1 240)", // Heavy Industry Slate
      mode: "dark",
    },
  },
  chanthaburi: {
    region: "East",
    tier: 2,
    theme: {
      primary: "oklch(65% 0.15 90)", // Durian Gold / Gemstone Amber
      mode: "light",
    },
  },

  // --- Default Regional DNA (Fallback) ---
  "default-central": {
    region: "Central",
    tier: 3,
    theme: { primary: "oklch(60% 0.15 260)", mode: "light" },
  },
  "default-north": {
    region: "North",
    tier: 3,
    theme: { primary: "oklch(55% 0.12 150)", mode: "light" },
  },
  "default-northeast": {
    region: "Northeast",
    tier: 3,
    theme: { primary: "oklch(55% 0.15 45)", mode: "light" },
  },
  "default-south": {
    region: "South",
    tier: 3,
    theme: { primary: "oklch(60% 0.18 230)", mode: "light" },
  },
  "default-east": {
    region: "East",
    tier: 3,
    theme: { primary: "oklch(55% 0.15 240)", mode: "light" },
  },
  "default-west": {
    region: "West",
    tier: 3,
    theme: { primary: "oklch(50% 0.12 120)", mode: "light" },
  },
};

/** [HELPER]: ดึงอัตลักษณ์ตามจังหวัดหรือภูมิภาค */
export function getProvinceDna(provinceSlug: string, region: ProvinceDna["region"]): ProvinceDna {
  const specificDna = PROVINCIAL_DNA[provinceSlug];
  if (specificDna) return specificDna;

  const regionalDefault = PROVINCIAL_DNA[`default-${region.toLowerCase()}`];
  return regionalDefault || PROVINCIAL_DNA["default-central"];
}
