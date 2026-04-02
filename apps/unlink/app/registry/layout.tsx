/** @format */

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/constants/site-config";
import { getGraphSchema } from "@/lib/seo-schemas";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
  publisher: siteConfig.company?.legalName || "AEMDEVWEB",
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
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo?.defaultTitle || siteConfig.name,
    description: siteConfig.seo?.defaultDescription || siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "8C88EBF4EA0C705D91CD01FC38D65DA1",
    // Removed Yandex verification placeholder as it's not specified for this project
  },
  other: {
    "aem-identity-hash": "9mza-supreme-v4",
    "x-identity-provider": "UNLINK Global Registry",
    "x-author-id": "UL-P-001",
    "x-eeat-level": "Expert/Authoritative",
    "x-identity-url": siteConfig.founder.url,
    "msvalidate.01": "8C88EBF4EA0C705D91CD01FC38D65DA1",
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

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SafeAnalytics from "@/components/layout/SafeAnalytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language ?? "th"}
      className={`${inter.variable} ${mono.variable}`}
      prefix="og: https://ogp.me/ns# profile: https://ogp.me/ns/profile#"
    >
      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getGraphSchema()) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SafeAnalytics gaId={siteConfig.gaId || ""} />
        {/* @identity 9mza */}
      </body>
    </html>
  );
}
