import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * [UTILITIES]: SYSTEM_FOUNDATION v18.0.0
 * [STRATEGY]: Clean Tailwinding | Absolute URL Resolution | Asset Optimization
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * [ASSET_RESOLVER]: แปลง Path รูปภาพเป็น Cloud URL (Vercel Blob)
 * @strategy Fallback-First | Edge-Optimized | Cache-Busting
 */
export function getAssetUrl(path: string | undefined): string {
  if (!path) return "/images/shared/placeholder.webp";
  if (path.startsWith("http")) return path;

  const BLOB_BASE = "https://fme2ovv5az8x4yqg.public.blob.vercel-storage.com";

  // [CACHE_BUSTER]: ใช้ Timestamp หรือ Version เพื่อบังคับให้อัปเดตรูปภาพใหม่
  // ในที่นี้ใช้การสร้างเลขสุ่มสั้นๆ หรือจะใช้ Version จาก SITE_CONFIG ก็ได้
  const version = Date.now().toString().slice(-6);

  // จัดการ Path ให้สะอาด (ลบ / นำหน้าถ้ามี)
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // คืนค่า URL เต็มพร้อม Query Parameter เพื่อล้าง Cache
  return `${BLOB_BASE}/${cleanPath}?v=${version}`;
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL || "https://www.aemdevweb.com"}${path}`;
}

export function formatDate(date: string | number | Date) {
  try {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";

    return new Intl.DateTimeFormat("th-TH", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(d);
  } catch {
    return "";
  }
}

/**
 * [HELPER]: slugify
 * แปลงข้อความเป็น slug สำหรับใช้ใน URL
 */
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // แทนที่ช่องว่างด้วย -
    .replace(/[^\w-]+/g, "") // ลบอักขระที่ไม่ใช่ตัวอักษร ตัวเลข หรือ -
    .replace(/-{2,}/g, "-") // แทนที่ - หลายตัวด้วย - ตัวเดียว
    .replace(/^-+/, "") // ลบ - ออกจากต้นข้อความ
    .replace(/-+$/, ""); // ลบ - ออกจากท้ายข้อความ
}

/**
 * [HELPER]: injectThemeVariables
 * แปลง Theme Object ให้เป็น CSS Variables สำหรับ Inject เข้าไปใน DOM
 */
export function injectThemeVariables(
  theme: Record<string, string> | undefined | null,
): React.CSSProperties {
  if (!theme) return {};
  const variables: Record<string, string> = {};

  if (theme.primary) variables["--color-brand-primary"] = theme.primary;
  if (theme.secondary) variables["--color-brand-secondary"] = theme.secondary;
  if (theme.accent) variables["--color-brand-accent"] = theme.accent;

  return variables as React.CSSProperties;
}
