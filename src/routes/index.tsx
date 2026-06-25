import { createFileRoute } from "@tanstack/react-router";
import heroMehendi from "@/assets/hero-mehendi.jpg";
import brideMakeup from "@/assets/bride-makeup.jpg";
import makeupTools from "@/assets/makeup-tools.jpg";
import mehendiClass from "@/assets/mehendi-class.jpg";
import logoImage from "@/assets/narpavi-logo.jpeg";
import videoEngagement from "@/assets/video-engagement.jpg";
import videoBabyshower from "@/assets/video-babyshower.jpg";
import videoBride from "@/assets/video-bride.jpg";
import videoBridesmaid from "@/assets/video-bridesmaid.jpg";
import videoModeling from "@/assets/video-modeling.jpg";
import videoModeling1 from "@/assets/video-modeling1.jpg";
import videoPuberty from "@/assets/video-puberty.jpg";
import videoHenna from "@/assets/video-henna.jpg";
import makeup1 from "@/assets/makeup1.jpeg";
import makeup2 from "@/assets/makeup2.jpeg";
import makeup3 from "@/assets/makeup3.jpeg";
import makeup4 from "@/assets/makeup4.jpeg";
import makeup5 from "@/assets/makeup5.jpeg";
import makeup6 from "@/assets/makeup6.jpeg";
import mehandi1 from "@/assets/mehandi1.jpeg";
import mehandi2 from "@/assets/mehandi2.jpeg";
import mehandi3 from "@/assets/mehandi3.jpeg";
import mehandi4 from "@/assets/mehandi4.jpeg";
import mehandi5 from "@/assets/mehandi5.jpeg";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Narpavi Mehandi & Makeup | Bridal Beauty Studio in Madurai, Tamil Nadu" },
      { name: "description", content: "Discover Narpavi Mehandi & Makeup in Madurai — bridal makeup, HD makeup, parlour services and our gallery of real mehandi and makeup work from weddings, baby showers and ceremonies." },
      { name: "keywords", content: "Madurai beautician, bridal makeup Madurai, mehandi artist Madurai, makeup gallery Madurai, mehandi portfolio, bridal beauty portfolio, parlour services Tamil Nadu" },
      { property: "og:title", content: "Narpavi Mehandi & Makeup | Bridal Beauty Studio in Madurai" },
      { property: "og:description", content: "Browse our bridal makeup and mehandi gallery — professional beauty services for weddings, ceremonies and beauty classes across Tamil Nadu." },
      { property: "og:image", content: logoImage },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Narpavi Mehandi & Makeup" },
      { name: "twitter:image", content: logoImage },
    ],
  }),
  component: Index,
});

function MehendiSwirl({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <g className="animate-draw">
        <circle cx="100" cy="100" r="6" />
        <circle cx="100" cy="100" r="20" strokeDasharray="2 3" />
        <path d="M100 40 C 130 60, 140 90, 100 100 C 60 90, 70 60, 100 40 Z" />
        <path d="M100 160 C 70 140, 60 110, 100 100 C 140 110, 130 140, 100 160 Z" />
        <path d="M40 100 C 60 70, 90 60, 100 100 C 90 140, 60 130, 40 100 Z" />
        <path d="M160 100 C 140 130, 110 140, 100 100 C 110 60, 140 70, 160 100 Z" />
        <circle cx="100" cy="35" r="2.5" fill="currentColor" />
        <circle cx="100" cy="165" r="2.5" fill="currentColor" />
        <circle cx="35" cy="100" r="2.5" fill="currentColor" />
        <circle cx="165" cy="100" r="2.5" fill="currentColor" />
      </g>
    </svg>
  );
}

function BrushIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 200" className={className} fill="none">
      <ellipse cx="40" cy="25" rx="22" ry="24" fill="currentColor" opacity="0.85" />
      <rect x="30" y="45" width="20" height="14" rx="3" fill="oklch(0.78 0.11 70)" />
      <rect x="32" y="59" width="16" height="120" rx="4" fill="oklch(0.55 0.14 15)" />
      <path d="M30 25 Q 40 8 50 25" stroke="oklch(1 0 0 / 0.4)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function LipstickIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 160" className={className} fill="none">
      <path d="M15 10 L 45 10 L 40 40 L 20 40 Z" fill="oklch(0.6 0.2 15)" />
      <rect x="14" y="40" width="32" height="15" rx="2" fill="oklch(0.78 0.11 70)" />
      <rect x="12" y="55" width="36" height="95" rx="3" fill="oklch(0.55 0.14 15)" />
      <rect x="14" y="80" width="32" height="2" fill="oklch(0.78 0.11 70)" />
    </svg>
  );
}

function Petal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 5 C 70 30, 70 70, 50 95 C 30 70, 30 30, 50 5 Z" />
    </svg>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function GalleryCarousel({ title, description, images, showCaption = true }: { title: string; description: string; images: { src: string; alt: string }[]; showCaption?: boolean }) {
  return (
    <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-soft">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">{title}</p>
        <h3 className="mt-4 text-3xl md:text-4xl font-display text-foreground">{title}</h3>
        <p className="mt-3 text-muted-foreground">{description}</p>
      </div>
      <div className="relative">
        <Carousel opts={{ align: "center", loop: true, containScroll: "trimSnaps" }} className="overflow-visible">
          <CarouselContent className="gap-6">
            {images.map((image, index) => (
              <CarouselItem key={image.alt + index} className="relative pb-6 basis-[90%] sm:basis-[70%] md:basis-[55%] lg:basis-[45%]">
                <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-background shadow-soft transition duration-700 hover:-translate-y-2 hover:shadow-xl" style={{ perspective: 1200 }}>
                  <div className="relative h-[380px] w-full overflow-hidden rounded-[2rem] bg-muted/10 transition-transform duration-700 group-hover:scale-[1.03]" style={{ transformStyle: "preserve-3d" }}>
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-1000 group-hover:rotate-y-[3deg] group-hover:scale-105" />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {showCaption && (
                    <div className="absolute inset-x-5 bottom-5 rounded-3xl bg-background/80 px-4 py-3 text-sm text-foreground/90 shadow-card backdrop-blur">
                      {image.alt}
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <p className="mt-4 text-sm text-muted-foreground text-center">←Swipe to explore→</p>
      </div>
    </div>
  );
}

function Index() {
  const [activeReel, setActiveReel] = useState<{ shortcode: string; title: string } | null>(null);

  const makeupGallery = [
    { src: makeup1, alt: "Bridal makeup" },
    { src: makeup2, alt: "Reception makeup" },
    { src: makeup3, alt: "Engagement makeup" },
    { src: makeup4, alt: "Party makeup" },
    { src: makeup5, alt: "Modeling makeup" },
    { src: makeup6, alt: "Ceremony makeup" },
  ];

  const mehandiGallery = [
    { src: mehandi1, alt: "Traditional mehandi" },
    { src: mehandi2, alt: "Bride mehandi" },
    { src: mehandi3, alt: "Guest mehandi" },
    { src: mehandi4, alt: "Bridal mehandi detail" },
    { src: mehandi5, alt: "Mehandi artistry" },
  ];

  const reels: { title: string; type: string; img: string; shortcode: string }[] = [
    { title: "Engagement Glow", type: "Engagement", img: videoEngagement, shortcode: "DX9mYj2zcbG" },
    { title: "Baby Shower Bliss", type: "Baby Shower", img: videoBabyshower, shortcode: "DYhuQwyTSEu" },
    { title: "Bridal Radiance", type: "Bride", img: videoBride, shortcode: "DZfJ2UyC31j" },
    { title: "Bridesmaids' Joy", type: "Bridesmaid", img: videoBridesmaid, shortcode: "DRZvVGFk9Ih" },
    { title: "Editorial Look", type: "Modeling", img: videoModeling, shortcode: "DQ6tl55E0Lj" },
    { title: "Devine Portrait", type: "Modeling", img: videoModeling1, shortcode: "DXx1jrKzCsU" },
    { title: "Puberty Ceremony", type: "Puberty Ceremony", img: videoPuberty, shortcode: "DXMcT0JEz4i" },
    { title: "Henna Artistry", type: "Henna", img: videoHenna, shortcode: "DZfJ2UyC31j" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={logoImage} alt="Narpavi Mehandi & Makeup logo" className="w-9 h-9 rounded-full object-cover ring-1 ring-primary/30" />
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Narpavi Mehandi & Makeup
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="neon-nav-link">Services</a>
            <a href="#classes" className="neon-nav-link">Classes</a>
            <a href="#packages" className="neon-nav-link">Packages</a>
            <a href="#parlour" className="neon-nav-link">Parlour</a>
            <a href="#contact" className="neon-nav-link">Contact</a>
          </div>
          <a href="#contact" className="neon-book-btn rounded-full px-5 py-2 text-sm font-medium text-primary-foreground inline-flex items-center gap-2 justify-center" style={{ background: "var(--gradient-rose)", boxShadow: "var(--shadow-soft)" }}>
            Book Now
            <span className="book-btn-arrow" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-32 pb-20 px-6 md:px-12 min-h-screen flex items-center" style={{ background: "var(--gradient-hero)" }}>
        {/* Floating decor */}
        <MehendiSwirl className="absolute top-24 left-10 w-32 h-32 text-primary/20 animate-spin-slow hidden md:block" />
        <MehendiSwirl className="absolute bottom-20 right-10 w-40 h-40 text-accent/30 animate-spin-slow hidden md:block" />
        <Petal className="absolute top-1/3 right-1/4 w-8 h-8 text-rose/60 animate-float hidden md:block" />
        <Petal className="absolute bottom-1/4 left-1/3 w-6 h-6 text-accent/70 animate-float-rev hidden md:block" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-card/70 backdrop-blur text-xs tracking-[0.2em] uppercase text-primary border border-primary/20">
              ✦ Bridal Studio · Tamil Nadu ✦
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-display leading-[1.05] text-foreground">
              Adorning every <span className="text-shimmer italic">woman</span> with grace & glamour
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              From soulful mehandi to luminous HD makeup — Narpavi celebrates brides, bridesmaids, baby showers, puberty ceremonies & every cherished moment in a Tamil woman's life.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#packages" className="px-7 py-3.5 rounded-full text-primary-foreground font-medium animate-pulse-glow" style={{ background: "var(--gradient-gold)" }}>
                Explore Packages
              </a>
              <a href="#classes" className="px-7 py-3.5 rounded-full bg-card border border-primary/30 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                Join Our Classes
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm">
              <div><div className="font-display text-3xl text-primary">6</div><div className="text-muted-foreground">Years of Artistry</div></div>
              <div className="w-px h-10 bg-border" />
              <div><div className="font-display text-3xl text-primary">30+</div><div className="text-muted-foreground">Students Trained</div></div>
              <div className="w-px h-10 bg-border" />
              <div><div className="font-display text-3xl text-primary">5★</div><div className="text-muted-foreground">Specialised Looks</div></div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accent-foreground/70">
              Bride · Bridesmaid · Modeling · Baby Shower · Puberty Ceremony
            </p>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-6 rounded-[2.5rem] blur-2xl opacity-50" style={{ background: "var(--gradient-rose)" }} />
            <div className="relative rounded-[2rem] overflow-hidden" style={{ boxShadow: "var(--shadow-soft)" }}>
              <img src={brideMakeup} alt="South Indian bride with elegant makeup" width={1024} height={1536} className="w-full h-[560px] object-cover" />
            </div>
            <BrushIcon className="absolute -left-8 top-12 w-14 h-32 animate-float text-rose drop-shadow-lg" />
            <LipstickIcon className="absolute -right-6 bottom-20 w-10 h-28 animate-float-rev drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services" className="bg-card">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">What We Offer</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display text-foreground">Crafted with <em className="text-shimmer">love</em></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Every service is a celebration — designed to make you radiate from within.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Mehandi Services", desc: "Bridal mehandi · Figurative mehandi · Guest mehandi — intricate designs that tell your story.", img: heroMehendi, icon: <MehendiSwirl className="w-10 h-10 text-primary" /> },
            { title: "Makeup Services", desc: "Bridal HD · Reception · Engagement · Bridesmaid — luminous looks for every celebration.", img: brideMakeup, icon: <LipstickIcon className="w-6 h-16" /> },
            { title: "Classes & Parlour", desc: "Certified mehandi & beauty courses plus full parlour services under one roof.", img: makeupTools, icon: <BrushIcon className="w-8 h-16" /> },
          ].map((s, i) => (
            <div key={s.title} className="group relative rounded-3xl overflow-hidden bg-background border border-border hover:-translate-y-2 transition-all duration-500" style={{ boxShadow: "var(--shadow-soft)", animationDelay: `${i * 0.1}s` }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-card">
                <div className="mb-3 opacity-90">{s.icon}</div>
                <h3 className="text-2xl font-display text-card">{s.title}</h3>
                <p className="mt-2 text-sm text-card/80">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Service starting prices */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {[
            { label: "Bridal Mehandi", price: "₹3,500+" },
            { label: "Bridal Makeup", price: "₹15,000+" },
            { label: "Bridesmaid Makeup", price: "₹5,000+" },
            { label: "Baby Shower Makeup", price: "₹8,000+" },
            { label: "Puberty Makeup", price: "₹5,000+" },
            { label: "Guest Mehandi", price: "On request" },
          ].map((p) => (
            <div key={p.label} className="flex items-center justify-between rounded-full px-4 py-2.5 bg-background border border-border">
              <span className="text-muted-foreground">{p.label}</span>
              <span className="font-display text-primary">{p.price}</span>
            </div>
          ))}
          <p className="col-span-2 md:col-span-3 text-center text-xs text-muted-foreground mt-2">All prices are starting points — final quote depends on design intricacy & occasion.</p>
        </div>
      </Section>

      {/* CLASSES */}
      <Section id="classes">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-40" style={{ background: "var(--gradient-gold)" }} />
            <img src={mehendiClass} alt="Mehandi class demonstration" loading="lazy" width={1024} height={1024} className="relative rounded-[2rem] w-full object-cover" style={{ boxShadow: "var(--shadow-gold)" }} />
            <MehendiSwirl className="absolute -top-8 -right-8 w-24 h-24 text-accent animate-spin-slow" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">Learn The Craft</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-display text-foreground">Our <em className="text-shimmer">Classes</em></h2>
            <p className="mt-4 text-muted-foreground">Whether you dream of becoming a professional artist or simply wish to master the craft for yourself, our certified courses are designed for every woman.</p>

            <div className="mt-8 space-y-4">
              {[
              { name: "Mehandi — 25 Days", tag: "Professional · ₹8,000", points: "Basics · Henna mixology · Birds · Elephant · Bride & Groom · Baby shower & Goddess themes" },
              { name: "Beauty & Makeup — 15 Days", tag: "Professional · ₹15,000", points: "South Indian / Reception / Engagement looks · 15+ hairstyles · Saree draping" },
                { name: "Specialised Looks", tag: "Hands-on", points: "Bride · Bridesmaid · Modeling · Baby shower · Puberty ceremony" },
              ].map((c) => (
                <div key={c.name} className="group flex items-center gap-5 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--gradient-rose)" }}>
                    <MehendiSwirl className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-xl text-foreground">{c.name}</h3>
                      <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full bg-accent/30 text-accent-foreground">{c.tag}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{c.points}</p>
                  </div>
                  <span className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PACKAGES */}
      <Section id="packages" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <Petal className="absolute top-10 left-1/4 w-10 h-10 text-rose/50 animate-float" />
        <Petal className="absolute bottom-10 right-1/3 w-8 h-8 text-accent/60 animate-float-rev" />

        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">Signature Packages</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display text-foreground">Celebrate <em className="text-shimmer">you</em></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Transparent starting prices for every occasion — final quote tailored to your design, look & guest count.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Mehandi Classes",
              tagline: "25 days · Professional training",
              price: "₹8,000",
              note: "starting from",
              perks: ["Basic elements & henna mixology", "Birds, elephant & floral patterns", "Bride & Groom motifs", "Baby shower & Goddess themes"],
              gradient: "var(--gradient-rose)",
            },
            {
              title: "Beauty & Makeup Classes",
              tagline: "15 days · Makeup · Hair · Saree",
              price: "₹15,000",
              note: "starting from",
              perks: ["South Indian, Reception & Engagement demos", "6+ front variations & 15+ hairstyles", "International hair techniques", "Saree spot draping, pre-pleating & box folding"],
              gradient: "var(--gradient-gold)",
              featured: true,
            },
          ].map((p) => (
            <div key={p.title} className={`relative rounded-3xl p-10 bg-card border ${p.featured ? "border-accent" : "border-border"}`} style={{ boxShadow: p.featured ? "var(--shadow-gold)" : "var(--shadow-soft)" }}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] tracking-widest uppercase rounded-full text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                  Most Loved
                </span>
              )}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: p.gradient }}>
                <MehendiSwirl className="w-9 h-9 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-xs text-muted-foreground">{p.note}</span>
                <span className="text-5xl font-display text-shimmer">{p.price}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gradient-gold)" }} />
                    {perk}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-block w-full text-center py-3.5 rounded-full font-medium text-primary-foreground transition-transform hover:scale-[1.02]" style={{ background: p.gradient }}>
                Reserve This Look
              </a>
            </div>
          ))}
        </div>

        {/* Mehandi & Makeup price grid */}
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              heading: "Mehandi Services",
              accent: "var(--gradient-rose)",
              items: [
                { label: "Bridal Mehandi", price: "₹3,500+" },
                { label: "Figurative Mehandi", price: "₹4,000+" },
                { label: "Guest Mehandi", price: "On request" },
                { label: "Baby Shower Mehandi", price: "₹3,500+" },
                { label: "Puberty Ceremony Mehandi", price: "₹5,000+" },
              ],
            },
            {
              heading: "Makeup Services",
              accent: "var(--gradient-gold)",
              items: [
                { label: "Bridal HD Makeup", price: "₹15,000+" },
                { label: "Reception Makeup", price: "₹12,000+" },
                { label: "Engagement Makeup", price: "₹10,000+" },
                { label: "Bridesmaid Makeup", price: "₹5,000+" },
                { label: "Baby Shower Makeup", price: "₹8,000+" },
                { label: "Puberty Makeup", price: "₹5,000+" },
                { label: "Modeling", price: "On request" },
              ],
            },
          ].map((g) => (
            <div key={g.heading} className="rounded-3xl p-8 bg-card border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: g.accent }}>
                  <MehendiSwirl className="w-6 h-6 text-primary-foreground" />
                </span>
                <h3 className="font-display text-2xl text-foreground">{g.heading}</h3>
              </div>
              <ul className="divide-y divide-border">
                {g.items.map((it) => (
                  <li key={it.label} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-foreground/80">{it.label}</span>
                    <span className="font-display text-primary">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Classes & parlour summary */}
        <div className="mt-10 max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {[
            { label: "Mehandi Class (25 days)", price: "₹8,000" },
            { label: "Beauty & Makeup Class (15 days)", price: "₹15,000" },
            { label: "Parlour Services", price: "From ₹100" },
          ].map((p) => (
            <div key={p.label} className="flex items-center justify-between rounded-full px-5 py-3 bg-card border border-border">
              <span className="text-muted-foreground">{p.label}</span>
              <span className="font-display text-primary">{p.price}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">All prices are starting points — final quote depends on design intricacy, look & occasion.</p>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" className="bg-card">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">Our Portfolio</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display text-foreground">Mehandi & Makeup <em className="text-shimmer">Gallery</em></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">See the real work we’ve created for brides, ceremonies and celebrations across Tamil Nadu.</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <GalleryCarousel
            title="Makeup Gallery"
            description="A curated collection of bridal, party and special-occasion makeup looks delivered by the studio."
            images={makeupGallery}
            showCaption={false}
          />
          <GalleryCarousel
            title="Mehandi Gallery"
            description="Traditional and contemporary mehandi art for brides, guests and celebrations, crafted with fine detail."
            images={mehandiGallery}
            showCaption={false}
          />
        </div>
      </Section>

      {/* PARLOUR */}
      <Section id="parlour" className="bg-card">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">In-Studio Care</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display text-foreground">Parlour <em className="text-shimmer">Services</em></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Everyday rituals to keep you glowing — gentle, hygienic & personalised.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { name: "Threading", icon: "✦" },
            { name: "Facial", icon: "✿" },
            { name: "Waxing", icon: "❀" },
            { name: "Hair Oil Massage", icon: "✣" },
            { name: "Hair Spa", icon: "❁" },
            { name: "Pedicure", icon: "✾" },
            { name: "Haircut", icon: "✼" },
            { name: "Bridal Glow Up", icon: "✧" },
          ].map((p) => (
            <div key={p.name} className="group p-6 rounded-2xl bg-background border border-border text-center hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="text-3xl text-primary group-hover:scale-110 transition-transform inline-block">{p.icon}</div>
              <p className="mt-3 font-display text-lg text-foreground">{p.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section id="reviews" className="bg-card">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">Client Love</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display text-foreground">Words from our <em className="text-shimmer">brides</em></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              quote: "Booked Narpavi mehendi service for my baby shower. Excellent work and everyone loved it. Veda Shri worked patiently and the output was too perfect.",
              name: "Ashwetha",
              place: "Sivagangai",
              occasion: "Baby Shower",
            },
            {
              quote: "Great service, skin-finish makeup and the best mehandi artists. I booked mehandi for all my big days — thank you so much!",
              name: "Varshini",
              place: "Madurai",
              occasion: "Bridal",
            },
            {
              quote: "I recently made a mehandi booking here and was extremely pleased with their bridal mehandi services. Veda Sri and Meenakshi handled their customers in the most comfortable manner. Thank you for the wonderful mehandi job. I loved it!",
              name: "Abhinaya Ashoke",
              place: "Theni",
              occasion: "Bridal Mehandi",
            },
          ].map((t) => (
            <div key={t.name} className="relative rounded-3xl p-8 bg-background border border-border hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-soft)" }}>
              <MehendiSwirl className="absolute top-4 right-4 w-10 h-10 text-accent/40" />
              <div className="text-accent text-lg tracking-widest">★★★★★</div>
              <p className="mt-4 text-sm md:text-base text-foreground/85 italic leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-display text-lg text-foreground">{t.name}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{t.place} · {t.occasion}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* VIDEO TESTIMONIALS */}
      <Section id="videos">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent-foreground/70">Real Moments, Real Smiles</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display text-foreground">Video <em className="text-shimmer">Testimonials</em></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">A peek into our recent celebrations — tap any reel to watch on Instagram.</p>
        </div>
        <Carousel opts={{ align: "start", loop: true }} className="max-w-6xl mx-auto px-2 md:px-12">
          <CarouselContent className="-ml-4">
            {reels.map((r) => (
              <CarouselItem key={r.shortcode + r.title} className="pl-4 basis-[78%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <button
                  type="button"
                  onClick={() => setActiveReel({ shortcode: r.shortcode, title: r.title })}
                  className="group relative block w-full aspect-[9/14] rounded-2xl overflow-hidden border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                  aria-label={`Play ${r.title} reel`}
                >
                  <img src={r.img} alt={r.title} loading="lazy" width={768} height={1024} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md bg-card/80 border border-card text-primary transition-transform group-hover:scale-110 animate-pulse-glow">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-card text-left">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-card/80">{r.type}</p>
                    <p className="font-display text-lg leading-tight">{r.title}</p>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <Dialog open={!!activeReel} onOpenChange={(o) => !o && setActiveReel(null)}>
          <DialogContent className="max-w-md p-0 overflow-hidden bg-background border-border">
            <DialogTitle className="sr-only">{activeReel?.title ?? "Instagram Reel"}</DialogTitle>
            {activeReel && (
              <div className="aspect-[9/16] w-full bg-foreground">
                <iframe
                  src={`https://www.instagram.com/reel/${activeReel.shortcode}/embed`}
                  title={activeReel.title}
                  className="w-full h-full"
                  frameBorder={0}
                  scrolling="no"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="relative rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden" style={{ background: "var(--gradient-rose)", boxShadow: "var(--shadow-soft)" }}>
          <MehendiSwirl className="absolute top-6 left-6 w-24 h-24 text-primary-foreground/20 animate-spin-slow" />
          <MehendiSwirl className="absolute bottom-6 right-6 w-32 h-32 text-primary-foreground/20 animate-spin-slow" />

          <h2 className="text-4xl md:text-5xl font-display text-primary-foreground">Let's make your moment magical</h2>
          <p className="mt-4 text-primary-foreground/90 max-w-lg mx-auto">Serving brides and beauty lovers across Tamil Nadu. Reach out for bookings, class enrolments & enquiries.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="tel:+918667767006" className="px-7 py-3.5 rounded-full bg-card text-primary font-medium hover:scale-105 transition-transform">📞 +91 86677 67006</a>
            <a href="https://wa.me/918667767006?text=Hello%20I%20visited%20your%20website.%20I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-foreground text-card font-medium hover:scale-105 transition-transform">💬 WhatsApp</a>
            <a href="https://www.instagram.com/narpavi_mehandi_makeup?igsh=aDd0ODk3NGc5d3Ri" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-card text-primary font-medium hover:scale-105 transition-transform">📷 Instagram</a>
            <a href="mailto:narpavibeautycare3@gmail.com" className="px-7 py-3.5 rounded-full bg-card text-primary font-medium hover:scale-105 transition-transform">✉ Email</a>
            <a href="https://maps.app.goo.gl/RwY3kY3PPBXSYixW7" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-card text-primary font-medium hover:scale-105 transition-transform">📍 View on Map</a>
          </div>
          <p className="mt-8 text-sm text-primary-foreground/90">Madurai, Tamil Nadu, India · narpavibeautycare3@gmail.com</p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center text-sm text-muted-foreground border-t border-border">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MehendiSwirl className="w-5 h-5 text-primary" />
          <span className="font-display text-lg text-foreground">Narpavi Mehandi & Make Up</span>
        </div>
        <p>Madurai, Tamil Nadu, India · +91 86677 67006 · narpavibeautycare3@gmail.com</p>
        <p className="mt-2">© {new Date().getFullYear()} Narpavi Beauty Studio · Crafted with love for Tamil Nadu</p>
      </footer>
    </div>
  );
}
