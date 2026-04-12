import { MetadataRoute } from "next";
import { SHARED_SITE_CONFIG } from "@repo/core";

/**
 * [SEO]: WEB MANIFEST (PWA Ready)
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SHARED_SITE_CONFIG.brand.fullName,
    short_name: SHARED_SITE_CONFIG.brand.name,
    description: SHARED_SITE_CONFIG.brand.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
