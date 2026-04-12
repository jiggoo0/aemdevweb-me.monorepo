/**
 * [UI COMPONENT]: SAFE_ANALYTICS v2.1.0 (STABLE)
 * [STRATEGY]: Deferred Loading | Privacy First | Multi-Provider Support
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

interface SafeAnalyticsProps {
  /** [OPTIONAL]: Google Tag Manager ID (e.g., GTM-XXXXXX) */
  readonly gtmId?: string;
  /** [OPTIONAL]: Google Analytics Measurement ID (e.g., G-XXXXXX) */
  readonly gaId?: string;
  /** [OPTIONAL]: Toggle Vercel Analytics (Default: true) */
  readonly enableVercel?: boolean;
}

/**
 * @component SafeAnalytics
 * @description รวบรวมระบบ Analytics ทั้งหมดไว้ที่เดียว พร้อมระบบโหลดแบบ Lazy-load เพื่อประสิทธิภาพสูงสุด
 */
export function SafeAnalytics({ gtmId, gaId, enableVercel = true }: SafeAnalyticsProps) {
  return (
    <>
      {/* [1] Google Tag Manager (LazyOnload) */}
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* [2] Google Analytics (LazyOnload) */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {/* [3] Vercel Analytics */}
      {enableVercel && <VercelAnalytics />}
    </>
  );
}
