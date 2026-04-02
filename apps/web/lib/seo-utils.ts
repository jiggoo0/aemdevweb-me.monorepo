/**
 * [SEO UTILITY]: METADATA_CORE v18.0.0 (SYNCHRONIZED)
 * [STRATEGY]: Next.js Metadata API | WWW-Enforced | Deduplicated Keywords
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { SITE_CONFIG } from "@/constants/site-config";
import { absoluteUrl } from "@/lib/utils";
import type { Metadata } from "next";

interface MetadataParams {
  readonly title: Metadata["title"];
  readonly description: string;
  readonly path: string;
  readonly image?: string;
  readonly keywords?: readonly string[];
  readonly noIndex?: boolean;
  readonly authors?: Array<{ name: string; url?: string }>;
  readonly generator?: string;
  readonly category?: string;
  readonly classification?: string;
}

export function constructMetadata({
  title,
  description,
  path,
  image,
  keywords = [],
  noIndex = false,
  authors,
  generator,
  category,
  classification,
}: MetadataParams): Metadata {
  // [CLEAN_URL]: มั่นใจว่า path ไม่สร้าง url ซ้ำซ้อน
  const url = absoluteUrl(path);

  // [STRATEGY]: Deduplicate Keywords เพื่อลดขนาด HTML Payload
  const mergedKeywords = Array.from(new Set([...keywords, ...SITE_CONFIG.keywords]));

  // [TITLE_LOGIC]: จัดการ title ให้เหมาะสมสำหรับ OG และ Twitter
  const ogTitle =
    typeof title === "string"
      ? `${title} | ${SITE_CONFIG.brandName}`
      : title && typeof title === "object" && "default" in title
        ? (title.default as string)
        : SITE_CONFIG.brandName;

  return {
    title,
    description,
    keywords: mergedKeywords.join(", "), // แปลงเป็น String เพื่อความเป๊ะของ Meta Tag
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    applicationName: SITE_CONFIG.brandName,
    authors: authors || [{ name: SITE_CONFIG.expert.displayName, url: SITE_CONFIG.expert.bioUrl }],
    generator: generator || `AEMDEVWEB Engine v${SITE_CONFIG.project.version}`,
    category: category || "Technology",
    classification: classification || "Technical SEO Specialist",
    referrer: "origin-when-cross-origin",

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_CONFIG.brandName,
      images: [
        {
          url: image || SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: typeof ogTitle === "string" ? ogTitle : SITE_CONFIG.brandName,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image || SITE_CONFIG.ogImage],
      // [FIX]: มั่นใจว่า Handle มี @ นำหน้าตามมาตรฐาน Twitter
      creator: SITE_CONFIG.expert.twitterHandle.startsWith("@")
        ? SITE_CONFIG.expert.twitterHandle
        : `@${SITE_CONFIG.expert.twitterHandle}`,
    },

    verification: {
      google: SITE_CONFIG.verification.google,
      other: {
        "facebook-domain-verification": [SITE_CONFIG.verification.facebook || ""],
      },
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}
