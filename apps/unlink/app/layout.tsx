/** @format */

import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { siteConfig } from "@/constants/site-config";
import { Suspense } from "react";
import JsonLd from "@/components/shared/JsonLd";
import ReputationShield from "@/components/layout/ReputationShield";
import { CookieBanner } from "@/components/CookieBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";
import SafeAnalytics from "@/components/layout/SafeAnalytics";
import {
  getGraphSchema,
} from "@/lib/seo-schemas";
import "./globals.css";

/**
 * 🎨 ADVANCED FONT ARCHITECTURES (PageSpeed Optimized)
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 🛡️ SEMANTIC METADATA ARCHITECTURE
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo?.defaultTitle || siteConfig.name,
    template: siteConfig.seo?.titleTemplate || `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo?.defaultDescription || siteConfig.description,
  keywords: siteConfig.seo?.keywords || [],
  authors: [{ name: siteConfig.founder.nameTh, url: siteConfig.founder.url }],
  creator: siteConfig.founder.nameTh,
  publisher: siteConfig.company.legalName,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.seo?.defaultTitle || siteConfig.name,
    description: siteConfig.seo?.defaultDescription || siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale || "th_TH",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
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
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo?.defaultTitle || siteConfig.name,
    description: siteConfig.seo?.defaultDescription || siteConfig.description,
    images: [siteConfig.ogImage],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "8C88EBF4EA0C705D91CD01FC38D65DA1",
    // Add other verification methods if needed, e.g., Yandex, Bing
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    // other: {
    //   "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    // },
  },
  // Google AdSense Publisher ID
  other: {
    "google-adsense-account": "ca-pub-7695158092776507",
    "msvalidate.01": "8C88EBF4EA0C705D91CD01FC38D65DA1", // Bing verification
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language}
      className={`${inter.variable} ${notoThai.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground selection:bg-primary/20 selection:text-primary relative flex min-h-screen flex-col font-sans antialiased">
        <Providers>
          <NextTopLoader
            color="oklch(var(--color-primary))"
            showSpinner={false}
            shadow="0 0 10px oklch(var(--color-primary) / 0.5)"
          />

          {/* Global Excellence Signals */}
          <JsonLd data={getGraphSchema()} />

          <ReputationShield />
          <CookieBanner />
          <Toaster />

          <Navbar />
          <main id="main-content" role="main" className="flex-1 outline-none">
            {children}
          </main>
          <Footer />

          <Suspense fallback={null}>
            <SafeAnalytics gaId={siteConfig.gaId || "G-VRLM7ZEH9X"} />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
