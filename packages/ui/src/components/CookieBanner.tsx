/**
 * [UI COMPONENT]: COOKIE_BANNER v1.5.0 (STABLE)
 * [STRATEGY]: Client-side Hydration | LocalStorage Persistence | React 19 Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect } from "react";

interface CookieBannerProps {
  /** [OPTIONAL]: ข้อความบนปุ่มกดยอมรับ */
  readonly acceptText?: string;
  /** [OPTIONAL]: ข้อความอธิบายเรื่องคุกกี้ */
  readonly message?: string;
  /** [OPTIONAL]: ชื่อคีย์ที่ใช้เก็บใน LocalStorage (Default: 'cookie-consent') */
  readonly storageKey?: string;
}

/**
 * @component CookieBanner
 * @description แถบแจ้งเตือนคุกกี้ที่ออกแบบมาให้เรียบหรูและรองรับการทำงานแบบ Client-side เท่านั้น
 */
export function CookieBanner({
  acceptText = "ยอมรับ",
  message = "เราใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งานของคุณให้ดียิ่งขึ้น",
  storageKey = "cookie-consent",
}: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(storageKey);
    if (!consent) {
      setIsVisible(true);
    }
  }, [storageKey]);

  const handleAccept = () => {
    localStorage.setItem(storageKey, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "1rem",
        right: "1rem",
        zIndex: 1000,
        backgroundColor: "var(--background-card, #1a1a1a)",
        border: "1px solid var(--border, #333)",
        borderRadius: "0.75rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ fontSize: "0.875rem", color: "var(--foreground, #fff)" }}>{message}</div>
      <button
        onClick={handleAccept}
        style={{
          backgroundColor: "var(--primary, #0070f3)",
          color: "#fff",
          border: "none",
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          fontSize: "0.875rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {acceptText}
      </button>
    </div>
  );
}
