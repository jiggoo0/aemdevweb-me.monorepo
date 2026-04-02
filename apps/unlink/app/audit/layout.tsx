import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/constants/site-config";
import "./globals.css";

// Import necessary components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CookieBanner } from "@/components/CookieBanner";

// Import the JSON-LD schema generation function
import { getGraphSchema } from "@/lib/seo-schemas";

// Viewport configuration
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Metadata configuration using siteConfig
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
  // Google Site Verification - Use environment variable if available, otherwise fallback
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "8C88EBF4EA0C705D91CD01FC38D65DA1",
  },
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.language || "th"}>
      <head>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getGraphSchema()) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        <Navbar />
        <CookieBanner />
        <main id="main-content" role="main" className="outline-none">
          {children}
        </main>
        <Footer />
        {/* @identity 9mza - Ensuring semantic HTML and ARIA labels are applied in global components */}
      </body>
    </html>
  );
}
