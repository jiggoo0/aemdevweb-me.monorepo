// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * ฟังก์ชัน cn (Classname merge)
 * รวม clsx สำหรับการทำเงื่อนไข class และ twMerge สำหรับจัดการ class ที่ซ้ำซ้อน
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
