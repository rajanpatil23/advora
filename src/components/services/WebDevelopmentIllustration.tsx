import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  TrendingUp,
  Activity,
  Zap,
  Server,
  BarChart3,
  CheckCircle2,
  Database,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  delay?: number;
  position: { x: string | number; y: string | number };
}

function MetricCard({ title, value, subtitle, icon, delay = 0, position }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay },
        scale: { delay },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className="absolute bg-white rounded-xl shadow-lg p-3 border border-slate-200"
      style={{ left: position.x, top: position.y }}
    >
      <div className="flex items-start gap-2">
        {icon && <div className="p-1.5 bg-blue-50 rounded-lg">{icon}</div>}
        <div>
          <div className="text-[10px] text-slate-500 font-medium mb-0.5">{title}</div>
          <div className="text-sm font-bold text-slate-900">{value}</div>
          {subtitle && <div className="text-[10px] text-slate-400">{subtitle}</div>}
        </div>
      </div>
    </motion.div>
  );
}

interface FloatingBadgeProps {
  icon: React.ReactNode;
  position: { x: string | number; y: string | number };
  delay?: number;
}

function FloatingBadge({ icon, position, delay = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        opacity: { delay },
        scale: { delay },
        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 },
      }}
      className="absolute bg-white rounded-full shadow-md p-2.5 border border-slate-200"
      style={{ left: position.x, top: position.y }}
    >
      {icon}
    </motion.div>
  );
}

export function WebDevelopmentIllustration() {
  return (
    <div className="relative w-full aspect-[5/4] max-w-lg mx-auto">
      {/* Floating circular badges */}
      <FloatingBadge icon={<Globe className="w-4 h-4 text-blue-500" />} position={{ x: "8%", y: "30%" }} delay={0.1} />
      <FloatingBadge icon={<Database className="w-4 h-4 text-indigo-500" />} position={{ x: "4%", y: "55%" }} delay={0.25} />
      <FloatingBadge icon={<Zap className="w-4 h-4 text-amber-500" />} position={{ x: "52%", y: "14%" }} delay={0.15} />
      <FloatingBadge icon={<Activity className="w-4 h-4 text-purple-500" />} position={{ x: "18%", y: "68%" }} delay={0.4} />

      {/* Browser window - positioned bottom-right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 bottom-0 w-[60%] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 bg-white rounded-md px-2 py-0.5 text-[10px] text-slate-400 border border-slate-200">
            https://your-app.com
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600">
          <div className="text-white">
            <motion.h2
              className="text-base font-bold mb-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Frontend Interface
            </motion.h2>
            <motion.p
              className="text-blue-100 text-[11px]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Scalable web architecture
            </motion.p>
          </div>

          <motion.div
            className="mt-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <svg className="w-full h-12" viewBox="0 0 200 40">
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
          </motion.div>
        </div>

        <div className="p-3 flex gap-2">
          <motion.div
            className="flex-1 bg-blue-50 rounded-lg p-2 border border-blue-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Server className="w-4 h-4 text-blue-600 mb-0.5" />
            <div className="text-[10px] font-semibold text-blue-900">Frontend</div>
          </motion.div>
          <motion.div
            className="flex-1 bg-slate-50 rounded-lg p-2 border border-slate-200"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Database className="w-4 h-4 text-slate-600 mb-0.5" />
            <div className="text-[10px] font-semibold text-slate-900">Backend</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Metric Cards - arranged top-left around browser */}
      <MetricCard
        title="Performance"
        value="98/100"
        icon={<BarChart3 className="w-3.5 h-3.5 text-blue-600" />}
        position={{ x: "18%", y: "18%" }}
        delay={0.3}
      />
      <MetricCard
        title="Cloud"
        value="Active"
        icon={<CheckCircle2 className="w-3.5 h-3.5 text-green-600" />}
        position={{ x: "58%", y: "22%" }}
        delay={0.5}
      />
      <MetricCard
        title="Web Vitals"
        value="Good"
        icon={<Activity className="w-3.5 h-3.5 text-green-600" />}
        position={{ x: "22%", y: "55%" }}
        delay={0.6}
      />
    </div>
  );
}

export default WebDevelopmentIllustration;
