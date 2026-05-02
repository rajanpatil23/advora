import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

interface HeroAction {
  label: string;
  to: string;
}

interface ServicesHeroProps {
  title: ReactNode;
  description: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  afterActions?: ReactNode;
  note?: string;
  mediaSrc: string;
  mediaAlt: string;
  mediaEyebrow?: string;
  mediaCaption?: string;
  titleId?: string;
}

const ServicesHero = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  afterActions,
  note,
  mediaSrc,
  mediaAlt,
  mediaEyebrow,
  mediaCaption,
  titleId = "services-hero-heading",
}: ServicesHeroProps) => {
  return (
    <section
      aria-labelledby={titleId}
      className="relative overflow-hidden pt-20 pb-14 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-stone-50 via-background to-background dark:from-card dark:via-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl">
            <h1
              id={titleId}
              className="max-w-[10ch] text-5xl tracking-tight leading-[1.1] text-foreground sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {title}
            </h1>

            <p className="mt-8 max-w-[34rem] text-[1.08rem] leading-[1.85] text-[#2D3F66] sm:text-[1.14rem]">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                className="w-full rounded-full bg-foreground px-6 py-5 text-base font-medium text-background hover:bg-foreground/90 sm:w-auto sm:px-8 sm:py-6"
              >
                <Link to={primaryAction.to}>
                  {primaryAction.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-[#8F9CCA] bg-background px-6 py-5 text-base font-medium text-[#0A1220] hover:bg-[#0A1220]/[0.03] sm:w-auto sm:px-8 sm:py-6"
              >
                <Link to={secondaryAction.to}>{secondaryAction.label}</Link>
              </Button>
            </div>

            {afterActions ? (
              <div className="mt-12 max-w-[42rem]">{afterActions}</div>
            ) : null}

            {!afterActions && note ? (
              <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
                {note}
              </p>
            ) : null}
          </div>

          <div className="relative lg:pl-6">
            <div className="relative ml-auto max-w-xl pt-6 pl-6 sm:pt-8 sm:pl-8">
              <div className="absolute left-0 top-0 h-[74%] w-[72%] rounded-[0.35rem] border border-primary/70" />

              <div className="relative z-10 overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-[0_30px_80px_-45px_rgba(15,23,42,0.42)]">
                <img
                  src={mediaSrc}
                  alt={mediaAlt}
                  className="aspect-[5/4] w-full object-cover md:aspect-[6/5]"
                />
              </div>

              {mediaEyebrow || mediaCaption ? (
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-white/45 bg-background/88 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.25)] backdrop-blur-sm sm:right-auto sm:max-w-xs">
                  {mediaEyebrow ? (
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-primary/75">
                      {mediaEyebrow}
                    </p>
                  ) : null}
                  {mediaCaption ? (
                    <p className="mt-1 text-sm font-medium leading-6 text-foreground">
                      {mediaCaption}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
