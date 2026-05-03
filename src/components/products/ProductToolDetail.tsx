import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePageSEO } from "@/hooks/usePageSEO";
import type { ProductTool } from "@/data/productTools";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Database,
  Layers,
  MonitorPlay,
  Plug,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

interface ProductToolDetailProps {
  tool: ProductTool;
}

const featureIcons = [
  Layers,
  Workflow,
  Database,
  ShieldCheck,
  BarChart3,
  Users,
] as const;

const benefitIcons = [Sparkles, Users, Clock3, ShieldCheck] as const;

export default function ProductToolDetail({ tool }: ProductToolDetailProps) {
  usePageSEO(tool.seo);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main>
        <section className="pt-20 sm:pt-24 pb-6 sm:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-primary/10 dark:bg-card p-4 sm:p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-10 items-center">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-white">
                  <div className="aspect-[4/3]">
                    <img
                      src={tool.screenshot}
                      alt={tool.screenshotAlt}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    {tool.eyebrow}
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                    <span className="block font-serif italic font-normal">
                      {tool.headlineSerif}
                    </span>
                    <span className="block font-bold text-primary">
                      {tool.headlineStrong}
                    </span>
                  </h1>

                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1">
                    <Button
                      asChild
                      className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-5 font-medium w-full sm:w-auto"
                    >
                      <Link to="/contact">
                        Get Custom Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto rounded-full px-6 py-5 font-medium border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
                    >
                      <a href="#virtual-demo">View Virtual Demo</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="virtual-demo"
          className="scroll-mt-24 bg-[#02070d] py-16 text-background sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Virtual Demo Flow
                </span>
                <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
                  <span className="block font-serif italic font-normal">
                    See how {tool.name} works
                  </span>
                  <span className="block font-bold text-primary">
                    Before you build it.
                  </span>
                </h2>
                <p className="text-lg text-background/70">
                  The walkthrough is designed to help founders, agencies, and
                  operations teams understand the main workflow, user roles, and
                  customization points quickly.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {tool.demoSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-background/10 bg-background/[0.03] p-5"
                  >
                    <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-background/62">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Core Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
                <span className="block font-serif italic font-normal">
                  What This Tool
                </span>
                <span className="block font-bold text-primary">
                  Gives Your Team
                </span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tool.highlights.map((item, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-divider bg-muted/25 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Interactive Demo
                </span>
                <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1]">
                  <span className="block font-serif italic font-normal">
                    Try the Virtual Walkthrough
                  </span>
                  <span className="block font-bold text-primary">
                    Inside the Page.
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  This Arcade demo gives visitors a hands-on walkthrough of the
                  product experience, then the tool can be customized around
                  your workflow, branding, permissions, reports, and
                  integrations.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {tool.modules.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_24px_70px_-35px_rgba(15,23,42,0.45)]">
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <iframe
                    src={tool.arcadeDemoUrl}
                    title={`${tool.name} Arcade virtual demo`}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-divider py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Startup and Agency Fit
              </span>
              <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
                <span className="block font-serif italic font-normal">
                  How {tool.name} Helps
                </span>
                <span className="block font-bold text-primary">
                  Lean Teams Operate Better
                </span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {tool.startupBenefits.map((benefit, index) => {
                const Icon = benefitIcons[index % benefitIcons.length];

                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="text-base font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-divider bg-[#02070d] py-16 text-background sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Implementation
                </span>
                <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1]">
                  <span className="block font-serif italic font-normal">
                    Built from a Foundation.
                  </span>
                  <span className="block font-bold text-primary">
                    Customized for Your Business.
                  </span>
                </h2>
                <div className="mt-8 space-y-5">
                  {tool.implementation.map((item) => (
                    <div
                      key={item.title}
                      className="border-l border-primary/60 pl-5"
                    >
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-background/62">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-background/10 bg-background/[0.03] p-6 sm:p-8">
                <div className="mb-7 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/50 text-primary">
                    <Plug className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">Common integrations</h3>
                    <p className="mt-1 text-sm text-background/55">
                      Connect the tool to your current stack.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {tool.integrations.map((integration) => (
                    <div
                      key={integration}
                      className="flex items-center gap-3 rounded-full border border-background/10 bg-background/[0.025] px-4 py-3 text-sm font-medium"
                    >
                      <ClipboardCheck className="h-4 w-4 shrink-0 text-primary" />
                      {integration}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title={tool.cta.title}
          description={tool.cta.description}
          buttonText={tool.cta.buttonText}
        />
      </main>

      <Footer />
    </div>
  );
}
