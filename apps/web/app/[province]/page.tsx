import { AREA_NODES, SHARED_SITE_CONFIG } from "@repo/core";
import { getGraphSchema } from "@repo/seo";
import { UnlinkTrustBadge, LeadForm, Button, GlassCard } from "@repo/ui";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { connection } from "next/server";
import { Shield, MapPin, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { getSEOStrategy } from "../../lib/strategies";
import { getCachedProvinceData } from "../../lib/data";

interface Props {
  params: Promise<{ province: string }>;
}

export async function generateStaticParams() {
  return AREA_NODES.map((node) => ({
    province: node.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { province } = await params;
  const node = AREA_NODES.find((n) => n.slug === province);

  if (!node) return {};

  const dbContent = await getCachedProvinceData(province);
  const strategy = getSEOStrategy(node);

  const seo = strategy.generateMetadata(province, dbContent);

  return {
    ...seo,
    alternates: {
      canonical: `${SHARED_SITE_CONFIG.links.site}/${province}`,
    },
    openGraph: {
      ...seo.openGraph,
      images: [node.heroImage],
    },
  };
}

/**
 * [COMPONENT]: ProvinceContent
 * ส่วนเนื้อหาที่ดึงมาจาก DB ซึ่งจะถูกหุ้มด้วย Suspense
 */
async function ProvinceContent({
  province,
  node,
}: {
  province: string;
  node: (typeof AREA_NODES)[0];
}) {
  // [OPTIMIZED]: getCachedProvinceData uses "use cache" for deduplication and persistence
  const dbContent = await getCachedProvinceData(province);

  return (
    <>
      {/* 🚀 System Transparency Indicator */}
      <div className="mb-6 flex justify-center animate-in fade-in duration-700">
        <span
          className={`text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full border ${
            dbContent.source === "database"
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              : "bg-blue-500/10 border-blue-500/20 text-blue-400"
          }`}
        >
          {dbContent.source === "database" ? "LIVE_NODE_SYNC" : "STANDARD_HUB_LOGIC"}
        </span>
      </div>

      <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-3xl mb-12 animate-in fade-in duration-1000">
        {dbContent?.title || node.description}
      </p>

      <div className="animate-in zoom-in duration-700 delay-300">
        <UnlinkTrustBadge siteId={`AEM-NODE-${node.slug.toUpperCase()}`} className="scale-110" />
      </div>

      {/* Strategic Implementation Content */}
      <section className="py-24 w-full max-w-5xl text-left">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-3 text-blue-400 mb-6">
              <Activity size={24} />
              <h3 className="text-2xl font-black uppercase tracking-widest text-white">
                Strategic Implementation
              </h3>
            </div>

            {dbContent?.content ? (
              <div
                className="prose prose-invert prose-lg prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-a:text-blue-400 prose-p:font-light prose-p:leading-relaxed max-w-none text-white/70"
                dangerouslySetInnerHTML={{
                  __html: dbContent.content,
                }}
              />
            ) : (
              <p className="text-lg leading-relaxed font-light text-white/40">
                {node.longDescription ||
                  "ยกระดับธุรกิจในพื้นที่ด้วยโครงสร้างพื้นฐานระดับ Enterprise ที่ออกแบบมาเพื่อรองรับการเติบโตอย่างยั่งยืน"}
              </p>
            )}
          </div>

          <div className="w-full md:w-[380px] shrink-0">
            <GlassCard className="p-0 overflow-hidden border-white/10 bg-black/40">
              <Image
                src={SHARED_SITE_CONFIG.expert.avatar}
                alt={SHARED_SITE_CONFIG.expert.displayName}
                width={400}
                height={400}
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="p-8 text-center bg-zinc-900/50">
                <p className="font-black text-2xl uppercase tracking-tighter text-white">
                  {SHARED_SITE_CONFIG.expert.displayName}
                </p>
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em] mt-2 mb-6">
                  {SHARED_SITE_CONFIG.expert.jobTitle}
                </p>
                <Button
                  variant="specialist"
                  className="w-full text-xs tracking-widest uppercase"
                  asChild
                >
                  <Link href={SHARED_SITE_CONFIG.links.me}>Verify Architect</Link>
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  );
}

export default async function ProvincePage({ params }: Props) {
  await connection();
  const { province } = await params;
  const node = AREA_NODES.find((n) => n.slug === province);

  if (!node) {
    notFound();
  }

  const jsonLd = getGraphSchema();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 relative overflow-hidden">
      {/* 🌌 [BACKGROUND_LAYER] */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 tech-grid" />
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-[180px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 px-6 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-card border border-border rounded-full mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <MapPin size={14} className="text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Coverage Area: {node.name_en}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter mb-6 leading-[0.8] text-foreground drop-shadow-2xl">
            {node.name_en} <br />
            <span className="text-primary text-5xl md:text-7xl lg:text-8xl italic">
              {node.name_th}
            </span>
          </h1>

          <Suspense
            fallback={<div className="h-40 w-full animate-pulse bg-white/5 rounded-3xl mb-12" />}
          >
            <ProvinceContent province={province} node={node} />
          </Suspense>
        </section>

        {/* --- LOCAL NETWORK GRID --- */}
        <section className="py-24 border-y border-white/5 bg-white/[0.01]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                Local Authority Network
              </h2>
              <p className="text-white/30 uppercase tracking-widest text-xs font-bold">
                เครือข่ายพื้นที่ให้บริการในจังหวัด{node.name_th} ครอบคลุมทุกเขตเศรษฐกิจ
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {node.districts.map((district) => (
                <GlassCard
                  key={district}
                  className="text-center group hover:border-blue-500/30 flex items-center justify-center py-6 border-white/5 bg-white/[0.02]"
                >
                  <span className="text-sm font-bold text-white/60 group-hover:text-blue-400 transition-colors">
                    {district}
                  </span>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- INQUIRY CTA --- */}
        <section className="py-32 bg-white text-black rounded-t-[5rem]">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <Shield size={48} className="mx-auto mb-10 text-black opacity-80" />
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
              Deploy Your <br />{" "}
              <span className="italic underline underline-offset-8">Authority.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-16 text-black/60">
              เริ่มต้นสร้างรากฐานดิจิทัลที่แข็งแกร่งสำหรับธุรกิจใน{node.name_th}
            </p>

            <div className="max-w-2xl mx-auto">
              <LeadForm
                siteOrigin={`web:province:${node.slug}`}
                metadata={{ province: node.name_th, province_slug: node.slug }}
              />
            </div>

            <div className="mt-16 flex justify-center gap-6">
              <Button
                size="lg"
                variant="neo"
                className="bg-black text-white hover:bg-zinc-800 px-12 py-6 text-lg"
                asChild
              >
                <Link
                  href={SHARED_SITE_CONFIG.links.line}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  {SHARED_SITE_CONFIG.hero.primaryAction} <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
