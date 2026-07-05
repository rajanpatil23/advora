import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  compact?: boolean;
}

export default function CTASection({
  title = "Ready to start your project?",
  description = "Let's discuss how we can help bring your vision to life. Get a free consultation today.",
  buttonText = "Get Free Consultation",
  buttonLink = "/contact",
  compact = false,
}: CTASectionProps) {
  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? "py-8" : "py-10 sm:py-12"}`}>
      <div
        className="relative rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/95 hover:via-primary/85 hover:to-primary/95 text-primary-foreground p-6 sm:p-8 md:p-10 text-center overflow-hidden transition-all duration-500 hover:shadow-xl group"
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-all duration-500 group-hover:opacity-80 group-hover:scale-110" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl transition-all duration-500 group-hover:opacity-80 group-hover:scale-110" />
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transition-all duration-500 group-hover:translate-x-4" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.2]">
            {title}
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed">
            {description}
          </p>
          {/^https?:\/\//.test(buttonLink) ? (
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button
                className="bg-white text-primary hover:bg-white/85 rounded-full shadow-md mt-2 transition-all duration-300 hover:shadow-lg px-6 py-3 text-sm sm:px-8 sm:py-3 sm:text-base font-semibold"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          ) : (
            <Link to={buttonLink} className="inline-block">
              <Button
                className="bg-white text-primary hover:bg-white/85 rounded-full shadow-md mt-2 transition-all duration-300 hover:shadow-lg px-6 py-3 text-sm sm:px-8 sm:py-3 sm:text-base font-semibold"
              >
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
