/**
 * [UI COMPONENT]: ICON_RENDERER_SYSTEM v18.0.7 (BUNDLE_OPTIMIZED)
 * [STRATEGY]: Aggressive Tree-Shaking | Used-Icons Only | Next.js 16 Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import {
  // 1. Core UI & Navigation Controls
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  CheckCircle2,
  AlertTriangle,
  Search,
  MoreHorizontal,
  Plus,
  Minus,
  Info,
  HelpCircle,
  Sun,
  Moon,
  Loader2,
  Timer,
  RefreshCcw,
  Crown,
  // 2. Connectivity & Mapping
  Home,
  MapPin,
  Map,
  Navigation,
  Calendar,
  CalendarCheck,
  Clock,
  Phone,
  Mail,
  Share2,
  ExternalLink,
  Link,
  Briefcase,
  Send,
  // 3. High-End Tech & Intelligence Nodes
  Cpu,
  Layers,
  Database,
  Server,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Activity,
  TrendingUp,
  Target,
  Rocket,
  Code2,
  FileText,
  FileDown,
  SearchCheck,
  Globe,
  Building2,
  ShoppingBag,
  Gauge,
  Smartphone,
  Layout,
  Image as ImageIcon,
  Box,
  Fingerprint,
  Hash,
  MousePointerClick,
  Network,
  Settings,
  // 4. Conversion & Social Signals
  MessageCircle,
  MessageSquare,
  Facebook,
  Github,
  Youtube,
  Twitter,
  Linkedin,
  // 5. Specialist Authority Elements
  UserCheck,
  BookOpen,
  Quote,
  Lightbulb,
  Award,
  Star,
  Sparkles,
  type LucideProps,
} from "lucide-react";

/**
 * [REGISTRY]: ทะเบียนสัญลักษณ์ที่ใช้จริง (Consolidated Registry)
 * ลดจำนวนไอคอนจาก 100+ เหลือเฉพาะที่ใช้งานจริง เพื่อลด Bundle Size
 * [OPTIMIZED]: เปลี่ยนเป็น internal const เพื่อให้ Tree-shaking ทำงานได้ดีขึ้น
 */
const ICON_MAP = {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  CheckCircle2,
  AlertTriangle,
  Search,
  MoreHorizontal,
  Plus,
  Minus,
  Info,
  HelpCircle,
  Sun,
  Moon,
  Loader2,
  Timer,
  RefreshCcw,
  Crown,
  Home,
  MapPin,
  Map,
  Navigation,
  Calendar,
  CalendarCheck,
  Clock,
  Phone,
  Mail,
  Share2,
  ExternalLink,
  Link,
  Briefcase,
  Send,
  Cpu,
  Layers,
  Database,
  Server,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Activity,
  TrendingUp,
  Target,
  Rocket,
  Code2,
  FileText,
  FileDown,
  SearchCheck,
  Globe,
  Building2,
  ShoppingBag,
  Gauge,
  Smartphone,
  Layout,
  Image: ImageIcon,
  Box,
  Fingerprint,
  Hash,
  MousePointerClick,
  Network,
  Settings,
  MessageCircle,
  MessageSquare,
  Facebook,
  Github,
  Youtube,
  Twitter,
  Linkedin,
  UserCheck,
  BookOpen,
  Quote,
  Lightbulb,
  Award,
  Star,
  Sparkles,
} as const;

export type IconName = keyof typeof ICON_MAP;

interface IconRendererProps extends Omit<LucideProps, "ref"> {
  readonly name: IconName;
  readonly size?: number;
  readonly className?: string;
  readonly strokeWidth?: number;
  readonly title?: string;
}

const IconRenderer = ({
  name,
  size = 24,
  className,
  strokeWidth = 2,
  title,
  ...props
}: IconRendererProps) => {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[SYSTEM_CORE]: Icon "${name}" missing in ICON_MAP.`);
    }
    return (
      <AlertTriangle
        size={size}
        className={cn("shrink-0 text-rose-500/40", className)}
        strokeWidth={1.5}
      />
    );
  }

  // [PERFORMANCE]: Use transform-gpu and will-change to offload rendering to GPU
  return (
    <IconComponent
      size={size}
      className={cn(
        "shrink-0 transform-gpu transition-all duration-300 will-change-transform",
        className,
      )}
      style={{ minWidth: size, minHeight: size }}
      strokeWidth={strokeWidth}
      aria-hidden={!title}
      {...(title ? { title } : {})}
      {...props}
    />
  );
};

IconRenderer.displayName = "IconRenderer";

export default memo(IconRenderer);
