import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

type Platform = "linkedin" | "google";

export type Testimonial = {
  id: string;
  platform: Platform;
  title: string;
  rating: number;
  snippet: string;
  readMoreUrl: string;
  user: {
    name: string;
    role: string;
    avatar: string;
    profileUrl: string;
  };
};

function Stars({ n }: { n: number }) {
  return (
    <span className="text-lg tracking-wide">
      <span className="text-yellow-400">{"★".repeat(n)}</span>
      <span className="text-muted-foreground/30">{"★".repeat(5 - n)}</span>
    </span>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0A66C2]">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function TestimonialCard({ t, highlight = false }: { t: Testimonial; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-[2rem] border bg-card p-6 transition-all duration-300 cursor-pointer hover:scale-[1.03] hover:shadow-xl",
        highlight ? "shadow-xl scale-[1.02] border-primary/30" : "shadow-md border-border"
      )}
    >
      {/* Quote badge */}
      <div className="absolute -top-5 left-6 rounded-full bg-primary p-4 shadow-lg">
        <Quote className="w-6 h-6 text-primary-foreground transition-colors duration-300 group-hover:text-primary-foreground/80" />
      </div>

      <h4 className="mt-4 text-lg font-semibold">{t.title}</h4>

      <div className="mt-2">
        <Stars n={t.rating} />
      </div>

      <p className="mt-4 text-muted-foreground text-sm leading-relaxed flex-1">{t.snippet}</p>

      <hr className="my-4 border-border" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={t.user.avatar} alt={t.user.name} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="font-medium text-sm">{t.user.name}</p>
            <p className="text-xs text-muted-foreground">{t.user.role}</p>
          </div>
        </div>

        <a href={t.readMoreUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          {t.platform === "linkedin" ? <LinkedInIcon /> : <GoogleIcon />}
        </a>
      </div>
    </div>
  );
}
