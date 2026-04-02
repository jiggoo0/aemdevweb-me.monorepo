/**
 * [SYSTEM CORE]: PWA_MANIFEST_NODE v17.9.110 (ULTIMATE_STABLE)
 * [STRATEGY]: High-Fidelity PWA | SSOT Sync | Enhanced UX
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * @function manifest
 * @description สร้างไฟล์ manifest สำหรับคุณสมบัติ PWA แบบ Zero-Defect เพื่อประสบการณ์ใช้งานระดับ Native
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    // [UX]: เชื่อมโยงข้อมูลจาก SSOT โดยตรงเพื่อความสม่ำเสมอของภาพลักษณ์แบรนด์
    name: SITE_CONFIG.project.title,
    short_name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.description,

    start_url: "/",
    display: "standalone", // ให้ความรู้สึกเหมือนเป็นแอปพลิเคชันจริง ไม่มีแถบที่อยู่เว็บ

    // [SYNCED]: กำหนดโทนสีให้สอดคล้องกับตัวแปรหลักของระบบ
    background_color: "#ffffff", // แนะนำให้ใช้สีสว่างเพื่อให้ตัวอักษรบนหน้า Splash Screen อ่านง่าย
    theme_color: SITE_CONFIG.themeColor,

    orientation: "portrait",
    categories: ["business", "productivity", "technology", "developer"],

    // [ASSETS]: กำหนดไอคอนให้ครอบคลุมทุกสถาปัตยกรรม Platform
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable", // [CRITICAL]: ป้องกันไอคอนเบี้ยวหรือถูกตัดขอบบน Android
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],

    // [ENGAGEMENT]: Shortcuts ช่วยลดขั้นตอนการเข้าถึง (Friction) ไปยังจุดสำคัญของธุรกิจ
    shortcuts: [
      {
        name: "วิเคราะห์บริการ",
        short_name: "Services",
        description: "ดูโซลูชันด้าน Technical SEO และ Web Architecture",
        url: "/services",
        icons: [{ src: "/android-chrome-192x192.png", sizes: "192x192" }],
      },
      {
        name: "ปรึกษาผู้เชี่ยวชาญ",
        short_name: "Consult",
        description: "ติดต่อวางแผนกลยุทธ์ระบบดิจิทัลกับทีม AEMZA MACKS",
        url: SITE_CONFIG.links.line,
        icons: [{ src: "/android-chrome-192x192.png", sizes: "192x192" }],
      },
    ],

    // [HARDENING]: screenshots สำหรับเปิดใช้งาน "Rich Install UI" บน Chrome/Android
    screenshots: [
      {
        src: SITE_CONFIG.ogImage,
        sizes: "1200x630",
        type: "image/webp",
        form_factor: "wide",
        label: "AEMDEVWEB Hyper-Performance Architecture",
      },
      {
        src: "/images/og-main.webp",
        sizes: "1200x630",
        type: "image/webp",
        form_factor: "narrow",
        label: "Next-Gen Mobile Web Experience",
      },
    ],
  };
}
