import { motion } from "framer-motion";

const locations = [
  { id: "us", label: "United States", x: 22, y: 38, isHQ: false, labelPos: "top" as const },
  { id: "uk", label: "United Kingdom", x: 47, y: 28, isHQ: false, labelPos: "top" as const },
  { id: "dubai", label: "Dubai", x: 60, y: 42, isHQ: false, labelPos: "top" as const },
  { id: "pune", label: "Pune, India", x: 68, y: 46, isHQ: true, labelPos: "right" as const },
  { id: "australia", label: "Australia", x: 82, y: 72, isHQ: false, labelPos: "top" as const },
];

const connections: [string, string][] = [
  ["us", "uk"],
  ["uk", "dubai"],
  ["dubai", "pune"],
  ["pune", "australia"],
  ["us", "pune"],
];

function generateDots(
  xMin: number, xMax: number,
  yMin: number, yMax: number,
  density: number
): { x: number; y: number }[] {
  const dots: { x: number; y: number }[] = [];
  const step = 1.2;
  let seed = xMin * 100 + yMin;
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let x = xMin; x <= xMax; x += step) {
    for (let y = yMin; y <= yMax; y += step) {
      if (seededRandom() < density) {
        dots.push({
          x: x + (seededRandom() - 0.5) * 0.8,
          y: y + (seededRandom() - 0.5) * 0.8,
        });
      }
    }
  }
  return dots;
}

function DottedWorldMap() {
  const continents = [
    ...generateDots(10, 30, 18, 32, 0.4),
    ...generateDots(12, 18, 30, 48, 0.55),
    ...generateDots(24, 34, 55, 82, 0.45),
    ...generateDots(16, 24, 45, 55, 0.4),
    ...generateDots(44, 56, 22, 42, 0.6),
    ...generateDots(45, 49, 24, 34, 0.7),
    ...generateDots(48, 54, 16, 28, 0.4),
    ...generateDots(44, 58, 40, 75, 0.45),
    ...generateDots(56, 65, 35, 48, 0.45),
    ...generateDots(62, 72, 35, 55, 0.55),
    ...generateDots(55, 82, 20, 55, 0.4),
    ...generateDots(56, 85, 15, 30, 0.3),
    ...generateDots(72, 82, 45, 60, 0.35),
    ...generateDots(80, 85, 28, 42, 0.45),
    ...generateDots(75, 87, 65, 80, 0.5),
    ...generateDots(34, 42, 12, 24, 0.25),
  ];

  return (
    <>
      {continents.map((dot, i) => (
        <circle
          key={i}
          cx={`${dot.x}%`}
          cy={`${dot.y}%`}
          r="0.35"
          fill="hsl(var(--muted-foreground) / 0.25)"
        />
      ))}
    </>
  );
}

function ConnectionLine({ from, to, index }: {
  from: (typeof locations)[0];
  to: (typeof locations)[0];
  index: number;
}) {
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 6 - (index % 3) * 2;
  const pathD = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <g>
      <path
        d={pathD}
        fill="none"
        stroke="hsl(210, 90%, 60%)"
        strokeWidth="0.2"
        opacity="0.3"
        strokeDasharray="0.8 0.6"
      />
      <circle r="1" fill="hsl(210, 90%, 60%)" opacity="0.7">
        <animateMotion
          dur={`${4 + index * 0.8}s`}
          repeatCount="indefinite"
          begin={`${index * 0.6}s`}
        >
          <mpath href={`#conn-path-${index}`} />
        </animateMotion>
      </circle>
      <path id={`conn-path-${index}`} d={pathD} fill="none" stroke="none" />
    </g>
  );
}

function LocationPin({ loc }: { loc: (typeof locations)[0] }) {
  const labelX = loc.labelPos === "right" ? loc.x + 3 : loc.x;
  const labelY = loc.labelPos === "right" ? loc.y : loc.y - 3.5;
  const anchor = loc.labelPos === "right" ? "start" : "middle";

  return (
    <g>
      {/* Subtle pulse */}
      <circle
        cx={`${loc.x}%`}
        cy={`${loc.y}%`}
        r="1.5"
        fill="none"
        stroke={loc.isHQ ? "hsl(var(--primary))" : "hsl(210, 90%, 60%)"}
        strokeWidth="0.3"
        opacity="0.4"
      >
        <animate attributeName="r" values="1;3;1" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Pin dot */}
      <circle
        cx={`${loc.x}%`}
        cy={`${loc.y}%`}
        r="1.2"
        fill={loc.isHQ ? "hsl(var(--primary))" : "hsl(210, 90%, 60%)"}
      />

      {/* Label */}
      {loc.isHQ ? (
        <g>
          <rect
            x={`${labelX - 0.5}%`}
            y={`${labelY - 2.2}%`}
            width="12%"
            height="4%"
            rx="1.5"
            fill="hsl(var(--primary))"
          />
          <text
            x={`${labelX + 5.5}%`}
            y={`${labelY + 0.2}%`}
            textAnchor="middle"
            fill="white"
            fontSize="2"
            fontWeight="700"
            className="select-none"
          >
            ★ {loc.label}
          </text>
        </g>
      ) : (
        <g>
          <rect
            x={`${labelX - (anchor === "middle" ? 5 : 0)}%`}
            y={`${labelY - 2}%`}
            width="10%"
            height="3.5%"
            rx="1.2"
            fill="hsl(var(--background))"
            stroke="hsl(var(--border))"
            strokeWidth="0.2"
          />
          <text
            x={`${labelX - (anchor === "middle" ? 0 : -5)}%`}
            y={`${labelY + 0}%`}
            textAnchor="middle"
            fill="hsl(var(--foreground))"
            fontSize="1.8"
            fontWeight="600"
            className="select-none"
          >
            {loc.label}
          </text>
        </g>
      )}
    </g>
  );
}

export default function WorldMapSection() {
  const getLocation = (id: string) => locations.find((l) => l.id === id)!;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4">
            <span className="block font-serif italic font-normal">Connect</span>
            <span className="block font-bold text-primary">Worldwide</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Our community spans across continents, connecting professionals from every corner of the globe.
          </p>
        </div>

        {/* Map container — light, clean */}
        <motion.div
          className="rounded-2xl sm:rounded-3xl bg-muted/30 border border-border/50 p-4 sm:p-8 md:p-10 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full aspect-[2/1]">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
            >
              <DottedWorldMap />

              {connections.map(([fromId, toId], i) => (
                <ConnectionLine
                  key={`${fromId}-${toId}`}
                  from={getLocation(fromId)}
                  to={getLocation(toId)}
                  index={i}
                />
              ))}

              {locations.map((loc) => (
                <LocationPin key={loc.id} loc={loc} />
              ))}
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
