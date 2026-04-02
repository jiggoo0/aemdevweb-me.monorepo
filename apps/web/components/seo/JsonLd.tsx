/**
 * [SEO COMPONENT]: JSON_LD_ORCHESTRATOR v18.1.0 (STABLE)
 * [STRATEGY]: SSR Integrity | XSS Defense | Zero-Any Compliance | React 19 Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import type { Thing, WithContext } from "schema-dts";

interface JsonLdProps {
  /**
   * [STRICT]: รองรับ Schema.org Types อย่างสมบูรณ์
   * ใช้ WithContext<Thing> เพื่อบังคับให้มี @context ใน Root Level
   */
  readonly data: WithContext<Thing> | readonly Thing[] | Record<string, unknown> | null | undefined;

  /** [OPTIONAL]: กำหนด ID เพื่อการ Debug หรือ Testing */
  readonly id?: string;
}

/**
 * @component JsonLd
 * @description เรนเดอร์ JSON-LD บน Server 100% พร้อมระบบ XSS Protection
 */
export default function JsonLd({ data, id }: JsonLdProps) {
  /* [A] SAFETY GUARD */
  if (!data) return null;

  const hasContent = Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0;

  if (!hasContent) return null;

  /* [B] RENDERING & SECURITY LAYER */
  return (
    <script
      id={id || "seo-json-ld"}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        /**
         * SECURITY STRATEGY:
         * 1. JSON.stringify: แปลงข้อมูลเป็นสตริงมาตรฐาน ECMA
         * 2. Unicode Escaping: ยับยั้ง XSS โดยเปลี่ยน < เป็น \u003c
         * 3. Line Separator Protection: ป้องกันการ Crash ใน Browser เก่า
         */
        __html: JSON.stringify(data)
          .replace(/</g, "\\u003c")
          .replace(/\u2028/g, "\\u2028")
          .replace(/\u2029/g, "\\u2029"),
      }}
    />
  );
}
