import { Boxes } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiGooglecloud, SiDocker, SiGraphql, SiTailwindcss, SiGo, SiRedis, SiKubernetes, SiFlutter, SiFigma, SiGit } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const techStackRow1 = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
];

const techStackRow2 = [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "AWS", icon: SiGooglecloud, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

interface TechStackSectionProps {
  badgeLabel?: string;
  title?: string;
  subtitle?: string;
  showTwoRows?: boolean;
}

export default function TechStackSection({ 
  badgeLabel,
  title = "Our Technology Stack", 
  subtitle = "Modern tools for modern solutions",
  showTwoRows = true
}: TechStackSectionProps) {
  return (
    <section className="section-divider py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {badgeLabel ? (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Boxes className="w-4 h-4" />
              {badgeLabel}
            </span>
          ) : null}
          <h2 className="text-3xl md:text-5xl tracking-tight leading-[1.1] mb-4">
            <span className="block font-serif italic font-normal">Technologies</span>
            <span className="block font-bold text-primary">We Use</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden py-4">
          {/* Row 1 - scrolling left */}
          <div className={`flex gap-6 animate-marquee ${showTwoRows ? 'mb-6' : ''}`}>
            {[...techStackRow1, ...techStackRow1, ...techStackRow1, ...techStackRow1].map((tech, index) => (
              <div key={`row1-${index}`} className="group flex-shrink-0">
                <div 
                  className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40, 0 0 40px ${tech.color}20`;
                    e.currentTarget.style.borderColor = tech.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  <tech.icon className="w-8 h-8 transition-colors duration-300" style={{ color: tech.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - scrolling right */}
          {showTwoRows && (
            <div className="flex gap-6 animate-marquee-reverse">
              {[...techStackRow2, ...techStackRow2, ...techStackRow2, ...techStackRow2].map((tech, index) => (
                <div key={`row2-${index}`} className="group flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40, 0 0 40px ${tech.color}20`;
                      e.currentTarget.style.borderColor = tech.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <tech.icon className="w-8 h-8 transition-colors duration-300" style={{ color: tech.color }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
