import { MetadataRoute } from "next";

/**
 * [SEO]: WEB MANIFEST (PWA Ready)
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `UNLINK-TH | SaaS Portal`,
    short_name: `UNLINK`,
    description: `Centralized Lead Management & Trust Engine Portal`,
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
