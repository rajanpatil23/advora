import { ServiceReview } from "@/data/serviceDetails";
import { Star, Quote } from "lucide-react";

interface ServiceReviewsSectionProps {
  reviews: ServiceReview[];
  serviceName: string;
}

export default function ServiceReviewsSection({ reviews, serviceName }: ServiceReviewsSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4">
            <span className="font-serif italic font-normal">What Clients</span>{" "}
            <span className="font-bold text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">Real results from real {serviceName} projects.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                "{review.review}"
              </p>

              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">
                  {review.role}, {review.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
