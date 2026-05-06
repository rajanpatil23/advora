const steps = [
  {
    number: "01",
    title: "Consultation & Discovery",
    description: "We discuss your vision, goals, and requirements in detail to understand your needs.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "We create a comprehensive plan and technical roadmap tailored to your project.",
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Our team builds your solution with regular updates and collaborative feedback.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support for continued success.",
  },
];

function Step({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="group relative">
      <div className="relative h-full bg-card border border-border rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
        <div className="absolute top-4 right-4 text-[4rem] sm:text-[5rem] font-bold text-muted-foreground/10 leading-none select-none transition-colors duration-300 group-hover:text-primary/20">
          {step.number}
        </div>
        <div className="relative z-10 pt-4">
          <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
            {step.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HowWeWorkSection() {
  return (
    <section className="section-divider py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/15 dark:bg-primary/20 rounded-[3rem] p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-[1.75rem] sm:text-3xl md:text-5xl tracking-tight leading-[1.15] mb-4">
              <span className="block font-serif italic font-normal">From Vision to Reality</span>
              <span className="block font-bold text-primary">Our Proven Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, four-step journey designed to transform your ideas into exceptional digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step) => (
              <Step key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
