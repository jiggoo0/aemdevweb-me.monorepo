/**
 * [PROVIDER]: THEME_ENGINE_CORE v17.9.62 (FLASH_PREVENTION_FIX)
 * [STRATEGY]: Native Script Injection | Zero-Blocking | Type-Safe
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// [FIX]: นำเข้า Type ให้ถูกต้องตาม Version ล่าสุดของ next-themes
import type { ThemeProviderProps } from "next-themes";

/**
 * @component ThemeProvider
 * @description Wrapper สำหรับจัดการ Dark/Light Mode ทั่วทั้งแอปพลิเคชัน
 * [CRITICAL]: ห้ามใส่ Logic 'mounted' ที่นี่เด็ดขาด เพราะจะไปขัดขวางการทำงานของ
 * Script Injection ที่ทำหน้าที่ป้องกันหน้าจอกระพริบ (Anti-FOUC)
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
