import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "กะเพรารสมือแม่ | ซอสผัดกะเพราสำเร็จรูปสูตรลับเฉพาะ",
  description:
    "สัมผัสรสชาติความอบอุ่นเหมือนฝีมือแม่ ด้วยซอสผัดกะเพราสำเร็จรูปที่คัดสรรวัตถุดิบที่ดีที่สุด เพื่อจานโปรดของทุกคนในครอบครัว",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
