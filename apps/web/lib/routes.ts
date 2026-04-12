/**
 * [CORE]: Route Definitions v1.0.0
 * Centralized mapping of all application routes to prevent "magic strings"
 * and ensure easy refactoring of the URL structure.
 */
export const ROUTES = {
  HOME: "/",
  BLOG: {
    ROOT: "/blog",
    POST: (slug: string) => `/blog/${slug}`,
  },
  PORTFOLIO: "/portfolio",
  ABOUT: "/about",
  CONTACT: "/contact",
  ME: "/me",
  SERVICES: "/services",
  PROVINCE: (slug: string) => `/${slug}`,
  AREA: "/area",
} as const;
