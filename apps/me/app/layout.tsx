/* @identity 9mza */
/** @format */

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// สไตล์และเครื่องมือจัดการระบบ
import "@/app/globals.css";
import { cn } from "@/lib/utils";

// ข้อมูลการตั้งค่าและส่วนประกอบหลัก
import { siteConfig } from "@/constants/site-config";
import { getGraphSchema } from "@/lib/seo-schemas";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SafeAnalytics from "@/components/layout/SafeAnalytics";
import { Suspense } from "react";

/**
 * 1. การจัดการฟอนต์ (Font Optimization)
 */
const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * 2. การตั้งค่าการแสดงผลบนหน้าจอ (Viewport Configuration)
 */
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 3. ข้อมูลสำหรับการค้นหาเชิงเทคนิค (Technical SEO Metadata)
 * ยุทธศาสตร์: สร้างความน่าเชื่อถือให้กับตัวตน "อลงกรณ์ ยมเกิด" ในฐานะผู้เชี่ยวชาญ
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.fullName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.companyName,
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "8C88EBF4EA0C705D91CD01FC38D65DA1",
    // Removed Yandex verification placeholder as it's not specified for this project
  },
  other: {
    "aem-identity-hash": "9mza-supreme-v4",
    "x-identity-provider": "AEMDEVWEB Identity Hub",
    "x-author-id": "UL-P-001",
    "x-eeat-level": "Expert/Authoritative",
    "x-identity-url": siteConfig.url,
    "x-authority-url": siteConfig.commercialUrl,
    "x-legal-name": siteConfig.legalName,
    "x-expert-persona": siteConfig.expertPersona,
    "x-strategic-alias": siteConfig.strategicAlias,
    "msvalidate.01": "8C88EBF4EA0C705D91CD01FC38D65DA1",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: `${siteConfig.fullName} | Verify Unlink thailand & Identity Hub`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.fullName} - Verify Unlink thailand`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * 4. โครงสร้างหลักของเว็บไซต์ (Root Layout Structure)
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language}
      suppressHydrationWarning
      className="scroll-smooth"
      prefix="og: https://ogp.me/ns# profile: https://ogp.me/ns/profile#"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getGraphSchema()) }}
        />
      </head>
      <body
        className={cn(
          fontSans.variable,
          fontMono.variable,
          "bg-background selection:bg-primary/20 selection:text-primary min-h-screen font-sans antialiased transition-colors duration-500"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" role="main" className="flex-1 outline-none">
              {children}
            </main>
            <Footer />

            {/* --- UNLINK Global Registry: Floating Identity Badge (Elite-Tier) --- */}
            <a
              href="https://registry.unlink-th.com/v/UL-P-001"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed right-5 bottom-5 z-[9999] block transition-all duration-300 hover:-translate-y-1"
              aria-label="Identity Verified by UNLINK Global Registry"
            >
              <div
                style={{
                  background: "rgba(10, 15, 29, 0.9)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "12px",
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "rgba(59, 130, 246, 0.1)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3b82f6",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "9px",
                      color: "#64748b",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "2px",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    Identity Verified
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#f8fafc",
                      fontWeight: "bold",
                      letterSpacing: "0.05em",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    UL-P-001{" "}
                    <span style={{ color: "#3b82f6", marginLeft: "4px" }}>
                      ●
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <CookieBanner />
          <Suspense fallback={null}>
            <SafeAnalytics gaId={siteConfig.gaId} />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
