/** @format */

"use client";

import Link from "next/link";
import {
  Facebook,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site-config";

interface SocialLinksProps {
  className?: string;
  variant?: "aemdevweb" | "unlink";
  showLabel?: boolean;
}

/**
 * SocialLinks Component - Professional Liaison Version
 * -------------------------------------------------------------------------
 * ระบบเชื่อมต่อช่องทางสื่อสารที่แยกตามเป้าหมายทางธุรกิจ
 * พัฒนาและควบคุมคุณภาพโดย: นายเอ็มซ่ามากส์
 * ยุทธศาสตร์: การสร้างความน่าเชื่อถือผ่านการเชื่อมโยงข้อมูลที่ถูกต้อง
 */
export default function SocialLinks({
  className,
  variant = "aemdevweb",
  showLabel = true,
}: SocialLinksProps) {
  // จัดกลุ่มข้อมูลช่องทางติดต่อเพื่อการเรียกใช้งานที่รวดเร็ว
  const links =
    variant === "aemdevweb"
      ? [
          {
            name: "GitHub",
            href: siteConfig.contact.github,
            icon: <Github className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-foreground group-hover:bg-slate-100",
          },
          {
            name: "LinkedIn",
            href: siteConfig.contact.linkedin,
            icon: <Linkedin className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#0A66C2] group-hover:bg-blue-50/50",
          },
          {
            name: "X (Twitter)",
            href: siteConfig.contact.x,
            icon: <Twitter className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-foreground group-hover:bg-slate-50",
          },
          {
            name: "Line",
            href: siteConfig.contact.line,
            icon: <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#00B900] group-hover:bg-green-50",
          },
        ]
      : [
          {
            name: "LinkedIn",
            href: siteConfig.contact.linkedin,
            icon: <Linkedin className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#0A66C2] group-hover:bg-blue-50/50",
          },
          {
            name: "Unlink Line",
            href: "https://lin.ee/EkHkRvI",
            icon: <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#00B900] group-hover:bg-green-50",
          },
          {
            name: "Unlink Page",
            href: "https://www.facebook.com/profile.php?id=61586111353518",
            icon: <Facebook className="h-4 w-4 md:h-5 md:w-5" />,
            color: "group-hover:text-[#1877F2] group-hover:bg-blue-50",
          },
        ];

  return (
    <div className={cn("flex flex-wrap gap-3 md:gap-4", className)}>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer me"
          className={cn(
            "group flex items-center gap-3 rounded-2xl border border-slate-100 px-5 py-3 transition-all duration-500",
            "text-muted-foreground bg-white shadow-sm",
            "hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5",
            link.color
          )}
          aria-label={link.name}
        >
          <span className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            {link.icon}
          </span>
          {showLabel && (
            <span className="text-[11px] font-black tracking-widest uppercase transition-colors">
              {link.name}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}

/**
 * ออกแบบระบบการเชื่อมต่อโดย: นายเอ็มซ่ามากส์
 */
