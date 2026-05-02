import { ServiceWhyUsItem } from "@/data/serviceDetails";
import { cn } from "@/lib/utils";

interface ServiceWhyUsSectionProps {
  headline: string;
  subtitle: string;
  items: ServiceWhyUsItem[];
}

function getSupportingLine(description: string) {
  const firstSentence = description.split(".")[0].trim();
  const words = firstSentence.split(/\s+/).filter(Boolean);

  if (words.length <= 12) {
    return firstSentence;
  }

  return words.slice(0, 12).join(" ");
}

export default function ServiceWhyUsSection({ headline, subtitle, items }: ServiceWhyUsSectionProps) {
  return (
    <section className="py-16 sm:py-20" aria-label={headline}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
            <span className="font-serif italic font-normal">Why Choose</span>{" "}
            <span className="font-bold text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-0">
          {items.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group relative px-3 text-center opacity-90 transition-opacity duration-200 hover:opacity-100 sm:px-8 lg:px-8",
                index !== items.length - 1 &&
                  "after:hidden lg:after:absolute lg:after:right-0 lg:after:top-2 lg:after:bottom-2 lg:after:block lg:after:w-px lg:after:bg-[linear-gradient(to_bottom,transparent,rgba(148,163,184,0.28),transparent)] lg:after:content-['']",
              )}
            >
              <div className="text-4xl sm:text-5xl font-bold leading-none tracking-tight text-primary">
                {item.stat}
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground sm:text-sm">
                {item.label}
              </div>
              <p className="mx-auto mt-4 max-w-[13rem] text-sm leading-6 text-muted-foreground">
                {getSupportingLine(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
