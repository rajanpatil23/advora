import { ServiceProcessStep } from "@/data/serviceDetails";
import { cn } from "@/lib/utils";

interface ServiceProcessSectionProps {
  headline: string;
  subtitle: string;
  steps: ServiceProcessStep[];
}

export default function ServiceProcessSection({ headline, subtitle, steps }: ServiceProcessSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
            <span className="font-serif italic font-normal">Our</span>{" "}
            <span className="font-bold text-primary">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute bottom-6 top-6 hidden w-px bg-[linear-gradient(to_bottom,transparent,rgba(148,163,184,0.34),rgba(148,163,184,0.34),transparent)] md:left-1/2 md:block"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-2 left-6 top-2 w-px bg-[linear-gradient(to_bottom,transparent,rgba(148,163,184,0.34),rgba(148,163,184,0.34),transparent)] md:hidden"
          />

          <div className="space-y-12 sm:space-y-14 md:space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const formattedStep = String(step.step).padStart(2, "0");

              return (
                <div
                  key={index}
                  className="group relative grid grid-cols-[3rem_1fr] gap-5 md:grid-cols-[1fr_5rem_1fr] md:gap-8"
                >
                  <div
                    className={cn(
                      "order-2 max-w-sm pt-1 transition-opacity duration-200 group-hover:opacity-100 md:pt-4",
                      isLeft ? "md:order-1 md:justify-self-end md:text-right" : "md:order-3 md:col-start-3",
                    )}
                  >
                    <div
                      className={cn(
                        "mb-5 hidden items-center gap-4 md:flex",
                        isLeft ? "justify-end" : "justify-start",
                      )}
                    >
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span className="h-px w-20 bg-[linear-gradient(to_right,rgba(148,163,184,0.42),transparent)]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="order-1 relative z-10 flex justify-center md:order-2 md:col-start-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/60 bg-background text-sm font-bold text-primary transition-colors duration-200 group-hover:border-primary md:h-16 md:w-16 md:text-base">
                      {formattedStep}
                    </div>
                  </div>

                  <div
                    className={cn(
                      "hidden md:block",
                      isLeft ? "md:order-3 md:col-start-3" : "md:order-1 md:col-start-1",
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
