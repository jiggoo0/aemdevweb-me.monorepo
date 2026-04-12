import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { ReputationShield } from "@repo/seo";
import { CookieBanner, SafeAnalytics } from "@repo/ui";
import { SEO_CONSTANTS } from "../lib/constants/seo";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: SEO_CONSTANTS.THEME_COLOR,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SHARED_SITE_CONFIG.links.site),
  title: {
    template: SEO_CONSTANTS.DEFAULT_TITLE_TEMPLATE,
    default: `AEMDEVWEB - ${SEO_CONSTANTS.KEYWORDS.STANDARD[0]} High-end และ SEO 77 จังหวัด`,
  },
  description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "./",
  },
  authors: [{ name: SHARED_SITE_CONFIG.expert.displayName }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SHARED_SITE_CONFIG.links.site,
    siteName: SHARED_SITE_CONFIG.brand.name,
    images: [
      {
        url: "/images/og-main.webp",
        width: 1200,
        height: 630,
        alt: "AEM Monorepo Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-main.webp"],
  },
};

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#050505] text-white selection:bg-primary/20">
        {/* [SEO]: High-Integrity E-E-A-T Signals */}
        <ReputationShield
          authorName={SHARED_SITE_CONFIG.expert.displayName}
          publisherName={SHARED_SITE_CONFIG.brand.name}
        />

        <SafeAnalytics enableVercel={true} />

        <Navbar />

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />

        <CookieBanner />
      </body>
    </html>
  );
}
