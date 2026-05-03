import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  DollarSign,
  Globe,
  Monitor,
  Palette,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

type ServicePillar = "BUILD" | "GROW & SCALE";
type AccentTone = "blue" | "green";

interface ServiceCard {
  title: string;
  description: string;
  to: string;
  icon: LucideIcon;
  pillar: ServicePillar;
  tone: AccentTone;
}

const buildServices: ServiceCard[] = [
  {
    title: "Web Development",
    description:
      "High-performance websites and web apps built with modern technologies.",
    to: "/services/web-development",
    icon: Globe,
    pillar: "BUILD",
    tone: "blue",
  },
  {
    title: "Mobile Apps",
    description:
      "Scalable and intuitive mobile applications for iOS and Android.",
    to: "/services/mobile-apps",
    icon: Smartphone,
    pillar: "BUILD",
    tone: "blue",
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions to streamline operations and solve complex challenges.",
    to: "/services/custom-software",
    icon: Code2,
    pillar: "BUILD",
    tone: "blue",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered experiences that feel intuitive, polished, and memorable.",
    to: "/services/ui-ux-design",
    icon: Palette,
    pillar: "BUILD",
    tone: "blue",
  },
];

const growthServices: ServiceCard[] = [
  {
    title: "Digital Presence",
    description:
      "Build a stronger online footprint across search, content, and visibility channels.",
    to: "/services/digital-presence",
    icon: Monitor,
    pillar: "GROW & SCALE",
    tone: "green",
  },
  {
    title: "Growth Marketing",
    description:
      "Data-driven campaigns built to accelerate acquisition, retention, and ROI.",
    to: "/services/growth-marketing",
    icon: TrendingUp,
    pillar: "GROW & SCALE",
    tone: "green",
  },
  {
    title: "Sales & Revenue",
    description:
      "Revenue systems and funnel improvements designed to increase conversions.",
    to: "/services/sales-revenue",
    icon: DollarSign,
    pillar: "GROW & SCALE",
    tone: "green",
  },
  {
    title: "Strategy & Scaling",
    description:
      "Growth planning and operational strategy to help ambitious teams scale with confidence.",
    to: "/services/strategy-scaling",
    icon: BarChart3,
    pillar: "GROW & SCALE",
    tone: "green",
  },
];

const toneStyles: Record<
  AccentTone,
  {
    accentHex: string;
    iconWrap: string;
    label: string;
    glow: string;
    accentBar: string;
    arrowHover: string;
  }
> = {
  blue: {
    accentHex: "#2563EB",
    iconWrap:
      "border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6),0_8px_18px_-10px_rgba(37,99,235,0.45)]",
    label: "text-primary",
    glow: "before:from-primary/25 before:via-primary/0",
    accentBar: "from-primary via-primary/60 to-transparent",
    arrowHover:
      "group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:shadow-[0_10px_24px_-10px_rgba(37,99,235,0.6)]",
  },
  green: {
    accentHex: "#059669",
    iconWrap:
      "border-emerald-200 bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_8px_18px_-10px_rgba(5,150,105,0.45)]",
    label: "text-emerald-600",
    glow: "before:from-emerald-400/25 before:via-emerald-400/0",
    accentBar: "from-emerald-500 via-emerald-400/60 to-transparent",
    arrowHover:
      "group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white group-hover:shadow-[0_10px_24px_-10px_rgba(5,150,105,0.6)]",
  },
};

function getCardCornerTextureStyle(accentHex: string) {
  const textureSvg = encodeURIComponent(`
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 0C30 44.18 65.82 80 110 80H160" stroke="${accentHex}" stroke-opacity="0.12"/>
      <path d="M55 0C55 30.38 79.62 55 110 55H160" stroke="${accentHex}" stroke-opacity="0.09"/>
      <path d="M80 0C80 16.57 93.43 30 110 30H160" stroke="${accentHex}" stroke-opacity="0.07"/>
      <circle cx="118" cy="18" r="3" fill="${accentHex}" fill-opacity="0.14"/>
      <circle cx="132" cy="32" r="2.5" fill="${accentHex}" fill-opacity="0.10"/>
      <circle cx="146" cy="46" r="2" fill="${accentHex}" fill-opacity="0.08"/>
    </svg>
  `);

  return {
    backgroundImage: `url("data:image/svg+xml,${textureSvg}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundSize: "160px 120px",
  };
}

const allServices = [...buildServices, ...growthServices];

function ServiceCardItem({ service }: { service: ServiceCard }) {
  const tone = toneStyles[service.tone];
  return (
    <Link
      to={service.to}
      aria-label={`Learn more about ${service.title}`}
      className={cn(
        "group relative isolate flex min-h-[250px] overflow-hidden rounded-[1.5rem] border border-[#E6EAF2] bg-gradient-to-b from-white to-[#FAFBFD] px-5 py-5",
        "dark:border-white/10 dark:bg-gradient-to-b dark:from-card dark:to-card/60",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset,0_20px_50px_-32px_rgba(15,23,42,0.22)]",
        "dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_20px_50px_-20px_rgba(0,0,0,0.6)]",
        "transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.28)]",
        "dark:hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]",
        "before:pointer-events-none before:absolute before:-inset-px before:rounded-[1.5rem] before:bg-gradient-to-br before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100 hover:before:opacity-100",
        tone.glow,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[120px] w-[160px] rounded-tr-[1.5rem] opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        style={getCardCornerTextureStyle(tone.accentHex)}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-5 top-0 h-px w-16 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          tone.accentBar,
        )}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-[calc(1.5rem-1px)] ring-1 ring-inset ring-white/60 dark:ring-white/5"
      />

      <div className="relative z-10 flex h-full w-full flex-col">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-[0.95rem] border transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-3deg]",
            tone.iconWrap,
          )}
        >
          <service.icon className="h-5 w-5" />
        </div>

        <div className="mt-5">
          <p
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.16em]",
              tone.label,
            )}
          >
            {service.pillar}
          </p>
          <h3 className="mt-2.5 text-[1.05rem] font-semibold leading-snug tracking-tight text-[#0A1220] dark:text-foreground">
            {service.title}
          </h3>
          <p className="mt-2 text-[0.82rem] leading-[1.55rem] text-[#5A6679] dark:text-muted-foreground">
            {service.description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#94A0B4] transition-colors duration-300 group-hover:text-[#0A1220] dark:group-hover:text-foreground">
            Learn more
          </span>
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-[#E1E6EF] bg-white text-[#0A1220] transition-all duration-300 group-hover:translate-x-0.5",
              "dark:border-white/10 dark:bg-white/5 dark:text-foreground",
              tone.arrowHover,
            )}
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesShowcaseSection() {
  return (
    <section className="section-divider relative overflow-hidden py-20 pt-24 sm:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-stone-50 via-background to-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <BriefcaseBusiness className="h-4 w-4" />
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4"
          >
            <span className="block font-serif italic font-normal">
              Explore What We
            </span>
            <span className="block font-bold text-primary">
              Can Build For You
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            Explore our full range of services across two core pillars:
            technology and growth. Everything we build is designed to create
            impact and drive results.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {allServices.map((service) => (
            <ServiceCardItem key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
