/**
 * [NAV_INFRASTRUCTURE]: NAVIGATION_REGISTRY v18.0.1 (PATH_SYNCED)
 * [STRATEGY]: SSOT Sync | Link Integrity Enforcement
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "./site-config";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: readonly NavItem[];
}

export const MAIN_NAV: readonly NavItem[] = [
  { label: "หน้าแรก", href: "/" },
  {
    label: "บริการ & ราคา",
    href: "/services",
    children: [
      {
        label: "ทำเว็บไซต์บริษัท",
        href: "/services/corporate",
        description: "ออกแบบเว็บไซต์มาตรฐานองค์กร",
      },
      {
        label: "ทำ Sale Page",
        href: "/services/salepage",
        description: "หน้าขายสินค้าเน้น Conversion สูง",
      },
      {
        label: "บริการ SEO",
        href: "/services/seo-agency",
        description: "ดันอันดับธุรกิจบน Google",
      },
      {
        label: "ระบบแคตตาล็อก",
        href: "/services/catalog",
        description: "จัดการสินค้าและบริการอย่างเป็นระบบ",
      },
    ],
  },
  { label: "ผลงานลูกค้า", href: "/case-studies" },
  { label: "พื้นที่ให้บริการ", href: "/areas" },
  { label: "บทความ", href: "/blog" },
  { label: "ติดต่อเรา", href: "/contact" },
] as const;

export const FOOTER_MAP = {
  services: [
    { label: "ทำเว็บไซต์บริษัท", href: "/services/corporate" },
    { label: "ทำ Sale Page", href: "/services/salepage" },
    { label: "บริการ SEO", href: "/services/seo-agency" }, // [FIXED]: Sync กับ TemplateSlug
    { label: "ระบบแคตตาล็อก", href: "/services/catalog" }, // [FIXED]: เพิ่มบริการที่มีจริง
    { label: "ดูบริการทั้งหมด", href: "/services" },
  ],
  company: [
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "ผลงานของเรา", href: "/case-studies" },
    { label: "พื้นที่ให้บริการ", href: "/areas" },
    { label: "ติดต่อเรา", href: "/contact" },
    // [REMOVED]: /careers ถูกถอดออกเนื่องจากไม่มีหน้าเพจรองรับ
  ],
  connect: [
    { label: "แอดไลน์ปรึกษา", href: SITE_CONFIG.links.line },
    { label: "Facebook Page", href: SITE_CONFIG.links.facebook },
    { label: "เบอร์โทรศัพท์", href: `tel:${SITE_CONFIG.contact.phone.replace(/-/g, "")}` }, // [FIXED]: Dynamic Sync
  ],
  legal: [
    { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    { label: "ข้อกำหนดการใช้งาน", href: "/terms" },
    { label: "แผนผังเว็บไซต์", href: "/sitemap" },
  ],
} as const;
