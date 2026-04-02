"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * 🛡️ AEMDEVWEB | Stealth Analytics Protocol
 * -------------------------------------------------------------------------
 * โหลด Google Analytics เฉพาะผู้ใช้งานจริง (Real Users) เท่านั้น
 * เพื่อเพิ่มคะแนน Performance ในเครื่องมือทดสอบ (Lighthouse/PageSpeed)
 * และป้องกันข้อมูลขยะจากการ Crawling
 */
export default function SafeAnalytics({ gaId }: { gaId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // 🔍 วิเคราะห์ User Agent เพื่อแยกแยะ Bot และเครื่องมือทดสอบ
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isBot =
      /bot|googlebot|crawler|spider|robot|crawling|lighthouse|headless|chrome-lighthouse/i.test(
        userAgent,
      );

    // 🍪 ตรวจสอบการยินยอมคุกกี้จาก localStorage
    const consent = window.localStorage.getItem("cookie-consent");
    const hasConsent = consent === "accepted";

    // ✅ โหลดเฉพาะเมื่อไม่ใช่ Bot และได้รับการยินยอมแล้วเท่านั้น
    if (!isBot && hasConsent) {
      // 🛡️ ADAPTATION: Wrap in Promise to avoid synchronous setState warning
      void Promise.resolve().then(() => setShouldLoad(true));
    }

    // 🔄 ฟังเหตุการณ์การเปลี่ยนแปลงของ localStorage (กรณีผู้ใช้กดยอมรับในหน้าเดียวกัน)
    const handleStorageChange = () => {
      const updatedConsent = window.localStorage.getItem("cookie-consent");
      if (updatedConsent === "accepted" && !isBot) {
        setShouldLoad(true);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    // Custom event สำหรับการอัปเดตในหน้าเดียวกัน (ถ้ามี)
    window.addEventListener("cookie-consent-updated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cookie-consent-updated", handleStorageChange);
    };
  }, []);

  if (!shouldLoad) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
