import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * [UTILITY]: CLASS_NAME_OPTIMIZER (cn)
 * [STRATEGY]: clsx + tailwind-merge (Conflict Resolution)
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 *
 * ฟังก์ชันหลักสำหรับการจัดการ Class Name ใน Monorepo
 * - จัดลำดับ Class (clsx)
 * - แก้ไขปัญหา Class ทับซ้อนกัน (tailwind-merge)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
