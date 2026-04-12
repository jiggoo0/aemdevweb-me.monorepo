import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import { SHARED_SITE_CONFIG } from "@repo/core";
import { ReputationShield } from "@repo/seo";
import { AuthProvider, SafeAnalytics, CookieBanner } from "@repo/ui";
import "./globals.css";

// 🎨 ADVANCED FONT ARCHITECTURES
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SHARED_SITE_CONFIG.ecosystem.masterHub),
  title: {
    template: "%s | UNLINK-TH",
    default: "UNLINK-TH | Institutional Identity & Authority Portal",
  },
  description: "Official verification and audit hub for digital identity and infrastructure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${inter.variable} ${notoThai.variable} ${mono.variable}`}>
      <body className="font-sans antialiased selection:bg-primary/20 selection:text-primary">
        <AuthProvider>
          {/* [SEO]: High-Integrity E-E-A-T Signals */}
          <ReputationShield
            authorName={SHARED_SITE_CONFIG.expert.displayName}
            publisherName={SHARED_SITE_CONFIG.brand.name}
          />

          <SafeAnalytics enableVercel={true} />

          <main id="main-content" className="min-h-screen flex flex-col">
            <div className="flex-grow">{children}</div>
          </main>

          <CookieBanner />
        </AuthProvider>
      </body>
    </html>
  );
}
