import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  TrendingUp,
  Activity,
  Zap,
  Server,
  BarChart3,
  Database,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  delay?: number;
  position: { x?: string; y?: string; right?: string };
  align?: "left" | "right";
}

function MetricCard({ title, value, subtitle, icon, delay = 0, position, align = "left" }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay },
        scale: { delay },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className="absolute bg-white rounded-xl shadow-lg p-2 border border-slate-200 max-w-[130px]"
      style={{ left: position.x, top: position.y, right: position.right, zIndex: 5 }}
    >
      <div className={`flex items-start gap-1.5 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
        {icon && <div className="p-1 bg-blue-50 rounded-md shrink-0">{icon}</div>}
        <div className="min-w-0">
          <div className="text-[9px] text-slate-500 font-medium leading-tight mb-0.5">{title}</div>
          <div className="text-sm font-bold text-slate-900 leading-none">{value}</div>
          {subtitle && <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">{subtitle}</div>}
        </div>
      </div>
    </motion.div>
  );
}

interface FloatingBadgeProps {
  icon: React.ReactNode;
  position: { x?: string; y?: string; right?: string };
  delay?: number;
}

function FloatingBadge({ icon, position, delay = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay },
        scale: { delay },
        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className="absolute bg-white rounded-full shadow-md p-2.5 border border-slate-200"
      style={{ left: position.x, top: position.y, right: position.right, zIndex: 4 }}
    >
      {icon}
    </motion.div>
  );
}

export function WebDevelopmentIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-xl mx-auto">
      {/* LEFT side cards */}
      <MetricCard
        title="Website Performance"
        value="98/100"
        icon={<BarChart3 className="w-3.5 h-3.5 text-blue-600" />}
        position={{ x: "8%", y: "10%" }}
        delay={0.3}
      />
      <MetricCard
        title="API Response"
        value="124ms"
        subtitle="avg latency"
        icon={<Zap className="w-3.5 h-3.5 text-amber-500" />}
        position={{ x: "2%", y: "44%" }}
        delay={0.4}
      />
      <MetricCard
        title="Core Web Vitals"
        value="Good"
        subtitle="All metrics passing"
        icon={<Activity className="w-3.5 h-3.5 text-green-600" />}
        position={{ x: "6%", y: "75%" }}
        delay={0.5}
      />

      {/* RIGHT side cards */}
      <MetricCard
        title="Cloud Deployment"
        value="Active"
        icon={<Cloud className="w-3.5 h-3.5 text-blue-500" />}
        position={{ right: "6%", y: "10%" }}
        delay={0.35}
        align="right"
      />
      <MetricCard
        title="Analytics"
        value=""
        icon={<TrendingUp className="w-3.5 h-3.5 text-blue-600" />}
        position={{ right: "2%", y: "44%" }}
        delay={0.45}
        align="right"
      />
      <MetricCard
        title="SEO Growth"
        value="+24%"
        subtitle="this month"
        icon={<TrendingUp className="w-3.5 h-3.5 text-green-600" />}
        position={{ right: "6%", y: "75%" }}
        delay={0.55}
        align="right"
      />

      {/* Floating circular badges - far edges */}
      <FloatingBadge icon={<Globe className="w-4 h-4 text-blue-500" />} position={{ x: "0%", y: "16%" }} delay={0.1} />
      <FloatingBadge icon={<Database className="w-4 h-4 text-indigo-500" />} position={{ x: "0%", y: "50%" }} delay={0.25} />
      <FloatingBadge icon={<Activity className="w-4 h-4 text-purple-500" />} position={{ x: "2%", y: "92%" }} delay={0.4} />
      <FloatingBadge icon={<Cloud className="w-4 h-4 text-blue-500" />} position={{ right: "0%", y: "16%" }} delay={0.2} />
      <FloatingBadge icon={<TrendingUp className="w-4 h-4 text-green-500" />} position={{ right: "2%", y: "92%" }} delay={0.3} />
      <FloatingBadge icon={<Zap className="w-4 h-4 text-amber-500" />} position={{ x: "48%", y: "0%" }} delay={0.15} />

      {/* Center Browser Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-[40%] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        style={{ left: "44%", top: "30%", zIndex: 10 }}
        
      >
        <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 bg-white rounded-md px-2 py-0.5 text-[9px] text-slate-400 border border-slate-200">
            https://your-app.com
          </div>
        </div>

        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600">
          <div className="text-white">
            <h2 className="text-sm font-bold mb-0.5">Frontend Interface</h2>
            <p className="text-blue-100 text-[10px]">Scalable web architecture</p>
          </div>

          <div className="mt-2 bg-white/10 rounded-lg p-2 border border-white/20">
            <svg className="w-full h-10" viewBox="0 0 200 40">
              <motion.polyline
                points="0,35 40,28 80,30 120,15 160,18 200,8"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </svg>
          </div>
        </div>

        <div className="p-2 flex gap-2">
          <div className="flex-1 bg-blue-50 rounded-lg p-2 border border-blue-200">
            <Server className="w-3.5 h-3.5 text-blue-600 mb-0.5" />
            <div className="text-[10px] font-semibold text-blue-900">Frontend</div>
          </div>
          <div className="flex-1 bg-slate-50 rounded-lg p-2 border border-slate-200">
            <Database className="w-3.5 h-3.5 text-slate-600 mb-0.5" />
            <div className="text-[10px] font-semibold text-slate-900">Backend</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default WebDevelopmentIllustration;
