import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ReputationShield } from "@repo/seo";
import { SafeAnalytics } from "@repo/ui";
import "./globals.css";

/**
 * [INSTITUTIONAL_VIEWPORT]: Optimized for High-End Trust Infrastructure
 */
export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

/**
 * [GLOBAL_TRUST_METADATA]: UNLINK THAILAND AUTHORITY
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://unlink-th.com"),
  title: {
    template: "%s | UNLINK THAILAND (Global Registry)",
    default: "UNLINK THAILAND - สถาบันตรวจสอบความน่าเชื่อถือและอัตลักษณ์ดิจิทัล",
  },
  description:
    "ระบบตรวจสอบความเชื่อถือ (Trust Verification) และรายงานการตรวจสอบความสมบูรณ์ของระบบนิเวศดิจิทัล ภายใต้มาตรฐาน UNLINK Global Framework",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://unlink-th.com",
    siteName: "UNLINK THAILAND Institutional Portal",
    images: [
      {
        url: "/og/og-main.webp",
        width: 1200,
        height: 630,
        alt: "UNLINK Institutional Core Integrity",
      },
    ],
  },
};

export default function UnlinkLayout({
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
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#050505] text-white selection:bg-blue-500/30">
        {/* [ATMOSPHERIC_LAYER]: Institutional Depth */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(29,78,216,0.07)_0%,transparent_50%)]" />
          <div className="absolute inset-0 tech-grid opacity-[0.03]" />
        </div>

        {/* [AUTHORITY_SIGNALS]: Strategic Integrity Components */}
        <ReputationShield
          authorName="UNLINK THAILAND Global Registry"
          publisherName="AEM Global Infrastructure"
        />

        <SafeAnalytics enableVercel={true} />

        {/* [MAIN_CANVAS]: Focused Content Area */}
        <main id="portal-content" className="relative z-10 flex-grow flex flex-col">
          {children}
        </main>

        {/* [TRUST_FOOTER_MINIMAL]: Focused on Compliance */}
        <footer className="relative z-10 py-12 border-t border-white/5 bg-black/40 backdrop-blur-xl">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                Institutional Status
              </span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono text-blue-500 tracking-widest">
                  GLOBAL_REGISTRY_ACTIVE
                </span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-white/10 uppercase tracking-[0.2em]">
              © 2026 UNLINK THAILAND. All Rights Reserved. ISO-AEM-CERTIFIED.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
