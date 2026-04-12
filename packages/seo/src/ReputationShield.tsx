/**
 * [SEO COMPONENT]: REPUTATION_SHIELD v1.2.0 (STABLE)
 * [STRATEGY]: SSR Integrity | E-E-A-T Signal Booster | React 19 Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import { JsonLd } from "./JsonLd";

interface ReputationShieldProps {
  readonly authorName?: string;
  readonly publisherName?: string;
  readonly publisherLogo?: string;
  readonly sameAs?: readonly string[];
}

/**
 * @component ReputationShield
 * @description สร้าง JSON-LD สำหรับ Person และ Organization เพื่อเสริม E-E-A-T
 */
export function ReputationShield({
  authorName = "AEMZA MACKS",
  publisherName = "AEM DEV WEB",
  publisherLogo = "https://aemdevweb.com/logo.png",
  sameAs = [],
}: ReputationShieldProps) {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: authorName,
    url: "https://aemza.me",
    sameAs: ["https://github.com/aemzamacks", "https://facebook.com/aemdevweb", ...sameAs],
    jobTitle: "Lead Full-stack Engineer & SEO Architect",
  };

  const orgData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: publisherName,
    logo: {
      "@type": "ImageObject",
      url: publisherLogo,
    },
    founder: {
      "@type": "Person",
      name: authorName,
    },
  };

  return (
    <>
      <JsonLd data={personData} id="seo-person" />
      <JsonLd data={orgData} id="seo-org" />
    </>
  );
}
