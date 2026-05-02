import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="flex-[0_0_100%] min-w-0 px-3 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-muted flex items-center justify-center border border-border">
                  <Quote className="h-4 w-4 text-muted-foreground" />
                </div>
                
                {/* Title/Highlight */}
                <h4 className="font-bold text-lg mt-4 mb-2">
                  {testimonial.quote.split('.')[0]}.
                </h4>
                
                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${
                  expandedIndex === index ? '' : 'line-clamp-3'
                }`}>
                  {testimonial.quote}
                </p>
                
                {/* Read More */}
                <button 
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="text-primary text-sm font-medium hover:underline mb-6"
                >
                  {expandedIndex === index ? 'Show Less' : 'Read More'}
                </button>
                
                {/* Divider */}
                <div className="border-t border-border pt-4">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="font-bold text-primary text-sm">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
        
        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? "bg-foreground w-6 sm:w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
