import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { SafeAnalytics } from "@repo/ui";
import { Analytics } from "@vercel/analytics/react";
import "@repo/ui/styles";
import "./globals.css";

import { Navbar, Footer } from "@/components/layout/Navbar";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aemza.me"),
  title: {
    default: `${SHARED_SITE_CONFIG.expert.displayName} | Digital Architect`,
    template: `%s | ${SHARED_SITE_CONFIG.expert.displayName}`,
  },
  description: SHARED_SITE_CONFIG.expert.bio,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className="bg-[#050505] font-sans antialiased selection:bg-primary/30 selection:text-primary">
        <SafeAnalytics enableVercel={true} />
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
