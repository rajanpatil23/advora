import { ServiceToolItem } from "@/data/serviceDetails";

interface ServiceToolStackSectionProps {
  headline: string;
  subtitle: string;
  tools: ServiceToolItem[];
}

export default function ServiceToolStackSection({ headline, subtitle, tools }: ServiceToolStackSectionProps) {
  // Group tools by category
  const categories = [...new Set(tools.map(t => t.category))];

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
            <span className="font-serif italic font-normal">Our Tool</span>{" "}
            <span className="font-bold text-primary">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group p-4 sm:p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all text-center"
            >
              <div className="text-sm sm:text-base font-semibold text-foreground mb-1">{tool.name}</div>
              <div className="text-xs text-muted-foreground">{tool.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
