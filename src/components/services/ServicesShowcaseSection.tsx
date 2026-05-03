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
    hoverBorder: string;
    hoverShadow: string;
    arrowHover: string;
  }
> = {
  blue: {
    accentHex: "#2563EB",
    iconWrap: "border-primary/15 bg-primary/[0.07] text-primary",
    label: "text-primary",
    hoverBorder: "hover:border-primary/40",
    hoverShadow: "hover:shadow-[0_28px_58px_-36px_rgba(15,23,42,0.26)]",
    arrowHover: "group-hover:border-primary/50 group-hover:text-primary",
  },
  green: {
    accentHex: "#059669",
    iconWrap: "border-emerald-200 bg-emerald-50/90 text-emerald-600",
    label: "text-emerald-600",
    hoverBorder: "hover:border-emerald-300",
    hoverShadow: "hover:shadow-[0_28px_58px_-36px_rgba(15,23,42,0.26)]",
    arrowHover: "group-hover:border-emerald-400 group-hover:text-emerald-600",
  },
};

const serviceRows = [buildServices, growthServices];

function getCardCornerTextureStyle(accentHex: string) {
  const textureSvg = encodeURIComponent(`
    <svg width="136" height="104" viewBox="0 0 136 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 0C26 38.66 57.34 70 96 70H136" stroke="${accentHex}" stroke-opacity="0.10"/>
      <path d="M48 0C48 26.51 69.49 48 96 48H136" stroke="${accentHex}" stroke-opacity="0.08"/>
      <path d="M70 0C70 14.36 81.64 26 96 26H136" stroke="${accentHex}" stroke-opacity="0.07"/>
      <circle cx="102" cy="16" r="3" fill="${accentHex}" fill-opacity="0.10"/>
      <circle cx="114" cy="28" r="3" fill="${accentHex}" fill-opacity="0.08"/>
      <circle cx="126" cy="40" r="3" fill="${accentHex}" fill-opacity="0.06"/>
      <path d="M84 12H96V24H84Z" fill="${accentHex}" fill-opacity="0.04"/>
    </svg>
  `);

  return {
    backgroundImage: `url("data:image/svg+xml,${textureSvg}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundSize: "136px 104px",
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
        "group relative isolate flex min-h-[230px] overflow-hidden rounded-[1.4rem] border border-[#E4E9F2] bg-white px-4 py-4 shadow-[0_18px_44px_-32px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1",
        tone.hoverBorder,
        tone.hoverShadow,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-[104px] w-[136px] rounded-tr-[1.4rem]"
        style={getCardCornerTextureStyle(tone.accentHex)}
      />
      <div
        aria-hidden="true"
        className="absolute inset-[1px] rounded-[calc(1.4rem-1px)] border border-white/70"
      />

      <div className="relative z-10 flex h-full w-full flex-col">
        <div
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-[0.85rem] border",
            tone.iconWrap,
          )}
        >
          <service.icon className="h-5 w-5" />
        </div>

        <div className="mt-4">
          <p
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.12em]",
              tone.label,
            )}
          >
            {service.pillar}
          </p>
          <h3 className="mt-2 text-base font-semibold leading-snug text-[#0A1220]">
            {service.title}
          </h3>
          <p className="mt-2 text-[0.8rem] leading-6 text-[#4E5A70]">
            {service.description}
          </p>
        </div>

        <div className="mt-auto flex justify-end pt-3">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-[#D5DCE8] bg-white text-[#0A1220] transition-colors duration-300",
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
