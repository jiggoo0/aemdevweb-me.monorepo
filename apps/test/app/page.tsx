import { Button, GlassCard, LeadForm } from "@repo/ui";
import { UtensilsCrossed, Heart, Flame, ShieldCheck } from "lucide-react";
import Image from "next/image";

/**
 * [PAGE]: Krapow Ros Mue Mae Landing Page
 * [STRATEGY]: Emotional Branding | B2C Storytelling | B2B Conversion
 */
export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 🌌 Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 container mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-md border border-primary/20 rounded-full mb-8">
          <Heart size={14} className="text-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
            Authentic Thai Taste
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter mb-6 leading-[0.8] text-foreground">
          กะเพรา <br />
          <span className="text-primary italic">รสมือแม่</span>
        </h1>

        <p className="text-xl md:text-2xl font-light text-foreground/60 max-w-2xl leading-relaxed mb-12">
          "เพราะคำว่าแม่ คือความเอาใจใส่ที่ส่งต่อผ่านรสชาติ" <br />
          ซอสผัดกะเพราสำเร็จรูปสูตรโบราณ หอมกลิ่นกะเพราป่าแท้ๆ
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 px-10 py-6 rounded-2xl text-lg font-bold"
          >
            สั่งซื้อสินค้า
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:bg-primary/5 px-10 py-6 rounded-2xl text-lg font-bold"
          >
            สูตรลับของแม่
          </Button>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="py-24 bg-white/30 backdrop-blur-sm border-y border-primary/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                <UtensilsCrossed size={80} className="text-primary/20" />
              </div>
              <Image
                src="/images/common/hero-main.webp"
                alt="ครัวแม่"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-none">
                มากกว่าแค่ "ซอส" <br />
                <span className="text-accent italic text-3xl md:text-5xl">
                  แต่คือความรักที่กินได้
                </span>
              </h2>
              <p className="text-lg text-foreground/70 font-light leading-relaxed">
                เราคัดสรรพริกแห้งยอดพันธุ์ดี และกะเพราป่าที่หอมแรงที่สุด
                นำมาเคี่ยวกรำตามสูตรต้นตำรับ เพื่อให้ทุกจานที่คุณทำ
                มีรสชาติที่คุ้นเคยเหมือนนั่งทานข้าวที่บ้านแม่
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-3xl bg-white/50 border border-primary/10">
                  <Flame className="text-accent mb-4" size={32} />
                  <h4 className="font-black uppercase text-sm tracking-widest mb-2">หอมพริกคั่ว</h4>
                  <p className="text-xs text-foreground/50">พริกแห้งคั่วไฟอ่อน หอมลึกถึงใจ</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/50 border border-primary/10">
                  <ShieldCheck className="text-primary mb-4" size={32} />
                  <h4 className="font-black uppercase text-sm tracking-widest mb-2">
                    ไร้สารกันเสีย
                  </h4>
                  <p className="text-xs text-foreground/50">สะอาด ปลอดภัย มาตรฐานสากล</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT LINEUP --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-4">
            Signature Sauces
          </h2>
          <p className="text-primary/60 font-bold uppercase tracking-widest text-xs">
            เลือกความอร่อยที่ใช่ ในแบบที่คุณชอบ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Product 1 */}
          <GlassCard className="p-8 border-primary/10 hover:border-accent/30 transition-all group">
            <div className="aspect-[4/5] bg-primary/5 rounded-2xl mb-8 overflow-hidden relative">
              <Image
                src="/images/shared/placeholder.webp"
                alt="ซอสสูตรดั้งเดิม"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">
              สูตรดั้งเดิม (แม่ทำให้)
            </h3>
            <p className="text-sm text-foreground/60 mb-6 font-light">
              รสชาติกลมกล่อม หอมกะเพราป่า เผ็ดกำลังดีสำหรับทุกคนในครอบครัว
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-primary">฿159</span>
              <Button size="sm" className="rounded-xl px-6">
                สั่งเลย
              </Button>
            </div>
          </GlassCard>

          {/* Product 2 */}
          <GlassCard className="p-8 border-accent/20 bg-accent/5 hover:border-accent/50 transition-all group">
            <div className="aspect-[4/5] bg-accent/10 rounded-2xl mb-8 overflow-hidden relative">
              <Image
                src="/images/shared/placeholder.webp"
                alt="ซอสสูตรเผ็ดจัดจ้าน"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-accent">
              สูตรเผ็ดพ่นไฟ
            </h3>
            <p className="text-sm text-foreground/60 mb-6 font-light">
              สำหรับสายฮาร์ดคอร์ที่ต้องการความเผ็ดร้อนแรง ถึงพริกถึงขิงสะใจ
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-black text-accent">฿169</span>
              <Button variant="specialist" size="sm" className="rounded-xl px-6">
                สั่งเลย
              </Button>
            </div>
          </GlassCard>

          {/* Product 3 (B2B) */}
          <GlassCard className="p-8 border-primary/10 hover:border-primary/30 transition-all group">
            <div className="aspect-[4/5] bg-zinc-200 rounded-2xl mb-8 overflow-hidden relative">
              <Image
                src="/images/shared/placeholder.webp"
                alt="ซอสแกลลอนสำหรับร้านอาหาร"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">
              ขนาดธุรกิจ (1kg+)
            </h3>
            <p className="text-sm text-foreground/60 mb-6 font-light">
              ประหยัดเวลา คุมต้นทุน คุมรสชาติให้คงที่ สำหรับร้านอาหารมืออาชีพ
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-primary/60 uppercase">Wholesale Price</span>
              <Button variant="outline" size="sm" className="rounded-xl px-6">
                สอบถามราคาส่ง
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* --- WHOLESALE INQUIRY --- */}
      <section className="py-32 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <UtensilsCrossed size={48} className="mx-auto mb-10 opacity-50" />
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
            Scale Your <br />
            <span className="italic underline underline-offset-8 decoration-accent">
              Restaurant.
            </span>
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed mb-16 opacity-80">
            ยกระดับร้านอาหารของคุณด้วยซอสผัดกะเพรามาตรฐานสากล <br />
            คุมรสชาติให้เหมือนเชฟมือหนึ่งมาทำให้เองทุกจาน
          </p>

          <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl text-foreground">
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">
              ลงทะเบียนรับตัวอย่างฟรี
            </h4>
            <LeadForm
              siteOrigin="krapow:wholesale"
              metadata={{ type: "wholesale_inquiry", brand: "KrapowRosMueMae" }}
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-foreground/30 text-[10px] font-bold uppercase tracking-[0.3em]">
        © 2026 กะเพรารสมือแม่ - Strategic Authority in Thai Taste
      </footer>
    </main>
  );
}
