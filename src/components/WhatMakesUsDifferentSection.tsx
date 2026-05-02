import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const navigatorItems = [
  {
    id: 1,
    title: "Systems First",
    text: "We design the full system before execution.",
    shortText: "We design the full system before execution.",
  },
  {
    id: 2,
    title: "Product Thinking",
    text: "We operate like a product team, not a task-based agency.",
    shortText: "We operate like a product team, not a task-based agency.",
  },
  {
    id: 3,
    title: "Long-Term Partner",
    text: "We stay involved as your business grows.",
    shortText: "We stay involved as your business grows.",
  },
  {
    id: 4,
    title: "Depth Over Volume",
    text: "Fewer clients. Deeper involvement.",
    shortText: "Fewer clients. Deeper involvement.",
  },
  {
    id: 5,
    title: "Built for Decision-Makers",
    text: "Clear thinking and accountable decisions.",
    shortText: "Clear thinking and accountable decisions.",
  },
];

// Mobile Vertical Canvas Component
const MobileVerticalCanvas = ({ activeStep }: { activeStep: number }) => {
  return (
    <svg
      viewBox="0 0 300 450"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="mobileNodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(203, 98%, 47%)" />
          <stop offset="100%" stopColor="hsl(210, 100%, 55%)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Vertical Base Flow: Product → Growth → Revenue → Scale */}
      <g className="vertical-base-flow">
        {/* Connection Lines */}
        <motion.path
          d="M 150 60 L 150 130"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.path
          d="M 150 170 L 150 240"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.path
          d="M 150 280 L 150 350"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* Nodes */}
        {[
          { y: 40, label: "Product" },
          { y: 150, label: "Growth" },
          { y: 260, label: "Revenue" },
          { y: 370, label: "Scale" },
        ].map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
          >
            <circle
              cx="150"
              cy={node.y}
              r="20"
              fill="rgba(255,255,255,0.05)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
            />
            <text
              x="150"
              y={node.y + 4}
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="9"
              fontWeight="500"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </g>

      {/* Step 1: Systems First - Highlight full vertical system */}
      <AnimatePresence>
        {activeStep >= 0 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Enhanced vertical connections */}
            <motion.path
              d="M 150 60 L 150 370"
              stroke="url(#mobileNodeGradient)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: activeStep >= 0 ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
            {/* System wrapper */}
            <motion.rect
              x="120"
              y="20"
              width="60"
              height="380"
              rx="8"
              fill="none"
              stroke="hsl(203, 98%, 47%)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeStep === 0 ? 0.6 : 0.2 }}
              transition={{ duration: 0.6 }}
            />
          </motion.g>
        )}
      </AnimatePresence>

      {/* Step 2: Product Thinking - UX/Engineering elements */}
      <AnimatePresence>
        {activeStep >= 1 && (
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* UX element */}
            <motion.rect
              x="40"
              y="25"
              width="60"
              height="30"
              rx="4"
              fill="rgba(255,255,255,0.03)"
              stroke={activeStep === 1 ? "hsl(203, 98%, 47%)" : "rgba(255,255,255,0.15)"}
              strokeWidth={activeStep === 1 ? 1.5 : 1}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            />
            <text x="70" y="44" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">UX Design</text>
            
            {/* Engineering element */}
            <motion.rect
              x="200"
              y="25"
              width="60"
              height="30"
              rx="4"
              fill="rgba(255,255,255,0.03)"
              stroke={activeStep === 1 ? "hsl(203, 98%, 47%)" : "rgba(255,255,255,0.15)"}
              strokeWidth={activeStep === 1 ? 1.5 : 1}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            <text x="230" y="44" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Engineering</text>

            {/* Connecting lines */}
            <motion.path
              d="M 100 40 L 130 40"
              stroke={activeStep === 1 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)"}
              strokeWidth="1"
              strokeDasharray="2 2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            />
            <motion.path
              d="M 170 40 L 200 40"
              stroke={activeStep === 1 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)"}
              strokeWidth="1"
              strokeDasharray="2 2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            />
          </motion.g>
        )}
      </AnimatePresence>

      {/* Step 3: Long-Term Partner - Timeline phases */}
      <AnimatePresence>
        {activeStep >= 2 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Timeline phases on the right */}
            {["Build", "Launch", "Grow", "Scale"].map((phase, i) => (
              <motion.g
                key={phase}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <circle
                  cx="230"
                  cy={60 + i * 110}
                  r="5"
                  fill={activeStep === 2 ? "hsl(203, 98%, 47%)" : "hsl(203, 98%, 47%)"}
                  opacity={activeStep === 2 ? 1 : 0.5}
                />
                <text
                  x="250"
                  y={64 + i * 110}
                  fill={activeStep === 2 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)"}
                  fontSize="10"
                >
                  {phase}
                </text>
              </motion.g>
            ))}
            {/* Timeline connector */}
            <motion.path
              d="M 230 65 L 230 385"
              stroke={activeStep === 2 ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)"}
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.g>
        )}
      </AnimatePresence>

      {/* Step 4: Depth Over Volume - Focused path */}
      <AnimatePresence>
        {activeStep >= 3 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Focused curved path */}
            <motion.path
              d="M 150 40 Q 100 100, 150 150 Q 200 200, 150 260 Q 100 320, 150 370"
              stroke="hsl(203, 98%, 47%)"
              strokeWidth="3"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Focus indicator */}
            <motion.circle
              cx="150"
              cy="205"
              r="8"
              fill="hsl(203, 98%, 47%)"
              initial={{ scale: 0 }}
              animate={{ scale: activeStep === 3 ? [0, 1.3, 1] : 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </motion.g>
        )}
      </AnimatePresence>

      {/* Step 5: Built for Decision-Makers - Decision points */}
      <AnimatePresence>
        {activeStep >= 4 && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decision markers */}
            {[{ y: 95 }, { y: 205 }, { y: 315 }].map((pos, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + i * 0.15 }}
              >
                <polygon
                  points={`70,${pos.y - 10} 80,${pos.y} 70,${pos.y + 10} 60,${pos.y}`}
                  fill="hsl(203, 98%, 47%)"
                  opacity={activeStep === 4 ? 0.9 : 0.5}
                />
                <text
                  x="42"
                  y={pos.y + 4}
                  textAnchor="middle"
                  fill={activeStep === 4 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)"}
                  fontSize="7"
                >
                  D{i + 1}
                </text>
              </motion.g>
            ))}
            
            {/* Strategic label */}
            <motion.text
              x="150"
              y="430"
              textAnchor="middle"
              fill={activeStep === 4 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
              fontSize="9"
              fontWeight="500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Strategic Decision Points
            </motion.text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
};

// Desktop Horizontal Canvas Component
const DesktopHorizontalCanvas = ({ 
  showSystemDiagram, 
  showProductLayer, 
  showTimeline, 
  showFocusedPath, 
  showDecisionPoints,
  activeStep
}: { 
  showSystemDiagram: boolean;
  showProductLayer: boolean;
  showTimeline: boolean;
  showFocusedPath: boolean;
  showDecisionPoints: boolean;
  activeStep: number;
}) => {
  return (
    <svg
      viewBox="20 50 560 300"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ filter: "drop-shadow(0 0 40px rgba(0,150,255,0.1))" }}
    >
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(203, 98%, 47%)" />
          <stop offset="100%" stopColor="hsl(210, 100%, 55%)" />
        </linearGradient>
      </defs>

      {/* Base Flow: Product → Growth → Revenue → Scale */}
      <g className="base-flow">
        {/* Connection Lines */}
        <motion.path
          d="M 100 200 L 220 200"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M 270 200 L 390 200"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.path
          d="M 440 200 L 560 200"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />

        {/* Nodes */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <circle cx="80" cy="200" r="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="80" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="500">Product</text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <circle cx="245" cy="200" r="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="245" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="500">Growth</text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <circle cx="415" cy="200" r="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="415" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="500">Revenue</text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <circle cx="540" cy="200" r="24" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="540" y="205" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="10" fontWeight="500">Scale</text>
        </motion.g>
      </g>

      {/* Layer 1: Systems First */}
      <AnimatePresence>
        {showSystemDiagram && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.path
              d="M 100 200 L 220 200"
              stroke="url(#nodeGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.path
              d="M 270 200 L 390 200"
              stroke="url(#nodeGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.path
              d="M 440 200 L 560 200"
              stroke="url(#nodeGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.rect
              x="50"
              y="160"
              width="520"
              height="80"
              rx="8"
              fill="none"
              stroke="hsl(203, 98%, 47%)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1 }}
            />
            
            {/* Step 1 Label - only show when this step is active */}
            {activeStep === 0 && (
              <motion.text
                x="300"
                y="80"
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="11"
                fontWeight="500"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                End-to-End System Architecture
              </motion.text>
            )}
          </motion.g>
        )}
      </AnimatePresence>

      {/* Layer 2: Product Thinking */}
      <AnimatePresence>
        {showProductLayer && (
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.rect
              x="40"
              y="110"
              width="80"
              height="40"
              rx="4"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.15)"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            />
            <text x="80" y="135" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">UX Design</text>
            
            <motion.rect
              x="40"
              y="250"
              width="80"
              height="40"
              rx="4"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.15)"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            />
            <text x="80" y="275" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Engineering</text>

            {/* Dotted line from Product to UX Design */}
            <motion.path
              d="M 80 175 L 80 150"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              strokeDasharray="2 2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            {/* Dotted line from Product to Engineering */}
            <motion.path
              d="M 80 225 L 80 250"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              strokeDasharray="2 2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            
            {/* Step 2 Label - only show when this step is active */}
            {activeStep === 1 && (
              <motion.text
                x="300"
                y="80"
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="11"
                fontWeight="500"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                Integrated Product Teams
              </motion.text>
            )}
          </motion.g>
        )}
      </AnimatePresence>

      {/* Layer 3: Long-Term Partner */}
      <AnimatePresence>
        {showTimeline && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.rect
              x="50"
              y="310"
              width="500"
              height="4"
              rx="2"
              fill="rgba(255,255,255,0.1)"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ originX: 0 }}
              transition={{ duration: 1 }}
            />
            
            {["Build", "Launch", "Grow", "Scale"].map((phase, i) => (
              <motion.g
                key={phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <circle
                  cx={100 + i * 140}
                  cy="312"
                  r="6"
                  fill="hsl(203, 98%, 47%)"
                />
                <text
                  x={100 + i * 140}
                  y="340"
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="10"
                >
                  {phase}
                </text>
              </motion.g>
            ))}
            
            {/* Step 3 Label - only show when this step is active */}
            {activeStep === 2 && (
              <motion.text
                x="300"
                y="80"
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="11"
                fontWeight="500"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                Continuous Partnership Lifecycle
              </motion.text>
            )}
          </motion.g>
        )}
      </AnimatePresence>

      {/* Layer 4: Depth Over Volume */}
      <AnimatePresence>
        {showFocusedPath && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.path
              d="M 80 200 C 160 200, 200 150, 300 150 C 400 150, 450 200, 540 200"
              stroke="hsl(203, 98%, 47%)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />
            
            <motion.circle
              cx="300"
              cy="150"
              r="8"
              fill="hsl(203, 98%, 47%)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            
            {/* Step 4 Label - only show when this step is active */}
            {activeStep === 3 && (
              <motion.text
                x="300"
                y="80"
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="11"
                fontWeight="500"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                Focused Client Engagement
              </motion.text>
            )}
          </motion.g>
        )}
      </AnimatePresence>

      {/* Layer 5: Built for Decision-Makers */}
      <AnimatePresence>
        {showDecisionPoints && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[{ x: 160, y: 180 }, { x: 330, y: 180 }, { x: 480, y: 180 }].map((pos, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.2 }}
              >
                <polygon
                  points={`${pos.x},${pos.y - 12} ${pos.x + 10},${pos.y} ${pos.x},${pos.y + 12} ${pos.x - 10},${pos.y}`}
                  fill="hsl(203, 98%, 47%)"
                  opacity="0.8"
                />
                <text
                  x={pos.x}
                  y={pos.y - 20}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="8"
                >
                  Decision {i + 1}
                </text>
              </motion.g>
            ))}
            
            {/* Step 5 Label - only show when this step is active */}
            {activeStep === 4 && (
              <motion.text
                x="300"
                y="80"
                textAnchor="middle"
                fill="rgba(255,255,255,0.4)"
                fontSize="11"
                fontWeight="500"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3 }}
              >
                Strategic Decision Points
              </motion.text>
            )}
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
};

const WhatMakesUsDifferentSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [visitedIndices, setVisitedIndices] = useState<Set<number>>(new Set([0]));
  const [mobileStep, setMobileStep] = useState(0);
  const [isAutoRunning, setIsAutoRunning] = useState(false); // Start paused until section is in view
  const [hasStarted, setHasStarted] = useState(false); // Track if animation has ever started
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoRunTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  // Start auto-run when section comes into view for the first time
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setIsAutoRunning(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasStarted]);

  // Auto-run logic for both mobile and desktop
  useEffect(() => {
    if (!isAutoRunning) return;

    const interval = isMobile ? 2000 : 3000; // 2s for mobile, 3s for desktop

    autoRunTimerRef.current = setInterval(() => {
      if (isMobile) {
        setMobileStep((prev) => {
          const next = (prev + 1) % 5;
          // Reset visited indices when looping back to start
          if (next === 0) {
            setVisitedIndices(new Set([0]));
          }
          return next;
        });
      } else {
        setActiveIndex((prev) => {
          const next = ((prev ?? 0) + 1) % 5;
          // Reset visited indices when looping back to start
          if (next === 0) {
            setVisitedIndices(new Set([0]));
          } else {
            setVisitedIndices((visited) => new Set([...visited, next]));
          }
          return next;
        });
      }
    }, interval);

    return () => {
      if (autoRunTimerRef.current) {
        clearInterval(autoRunTimerRef.current);
      }
    };
  }, [isMobile, isAutoRunning]);

  // Sync mobile step with activeIndex for navigator display
  useEffect(() => {
    if (isMobile && isAutoRunning) {
      setActiveIndex(mobileStep);
      setVisitedIndices((prev) => new Set([...prev, mobileStep]));
    }
  }, [mobileStep, isMobile, isAutoRunning]);

  const handleMobileInteraction = useCallback((index: number) => {
    // Stop auto-run
    setIsAutoRunning(false);
    if (autoRunTimerRef.current) {
      clearInterval(autoRunTimerRef.current);
    }
    
    // Set the tapped step
    setMobileStep(index);
    setActiveIndex(index);
    setVisitedIndices((prev) => new Set([...prev, index]));

    // Clear any existing resume timer
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    // Resume auto-run after 4.5 seconds of inactivity
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoRunning(true);
    }, 4500);
  }, []);

  const handleDesktopItemClick = useCallback((index: number) => {
    // Stop auto-run
    setIsAutoRunning(false);
    if (autoRunTimerRef.current) {
      clearInterval(autoRunTimerRef.current);
    }

    setActiveIndex(index);
    setVisitedIndices((prev) => new Set([...prev, index]));

    // Clear any existing resume timer
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    // Resume auto-run after 4 seconds of inactivity
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoRunning(true);
    }, 4000);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (autoRunTimerRef.current) clearInterval(autoRunTimerRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Desktop canvas layers visibility
  const showSystemDiagram = visitedIndices.has(0) || activeIndex === 0;
  const showProductLayer = visitedIndices.has(1) || activeIndex === 1;
  const showTimeline = visitedIndices.has(2) || activeIndex === 2;
  const showFocusedPath = visitedIndices.has(3) || activeIndex === 3;
  const showDecisionPoints = visitedIndices.has(4) || activeIndex === 4;

  return (
    <section ref={sectionRef} className="section-divider relative bg-[hsl(0_0%_6%)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/50 mb-3 sm:mb-4">
            Why Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-[1.1]">
            <span className="font-serif italic text-white/90">
              Not built like an agency.
            </span>
            <br />
            <span className="font-sans font-bold text-white">
              Built to scale{" "}
              <span className="text-primary">real businesses.</span>
            </span>
          </h2>
          {/* Mobile supporting text */}
          <p className="lg:hidden text-sm sm:text-base text-white/40 mt-4 max-w-md leading-relaxed">
            We design systems that evolve as your business grows.
          </p>
        </div>

        {/* Mobile Vertical Navigator with Left Indicator */}
        <div className="lg:hidden mb-5">
          <ul className="space-y-0">
            {navigatorItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMobileInteraction(index)}
                  className="w-full text-left py-1.5 pl-3 relative transition-all duration-300 ease-out touch-manipulation"
                  aria-pressed={mobileStep === index}
                >
                  {/* Left indicator bar */}
                  <motion.div
                    className="absolute left-0 top-0.5 bottom-0.5 w-[2px] rounded-full"
                    initial={false}
                    animate={{
                      backgroundColor: mobileStep === index 
                        ? "hsl(203, 98%, 47%)" 
                        : visitedIndices.has(index) 
                        ? "rgba(255,255,255,0.2)" 
                        : "rgba(255,255,255,0.08)",
                      scaleY: mobileStep === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <span
                    className={`block text-sm font-medium transition-colors duration-300 ${
                      mobileStep === index
                        ? "text-white"
                        : visitedIndices.has(index)
                        ? "text-white/50"
                        : "text-white/35"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Two-column layout for desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Left Navigator - Desktop only */}
          <nav className="hidden lg:flex lg:w-[30%] flex-shrink-0 min-h-[500px]">
            <ul className="flex flex-col justify-between w-full h-full">
              {navigatorItems.map((item, index) => (
                <li key={item.id} className="flex-1 flex">
                  <button
                    onClick={() => handleDesktopItemClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleDesktopItemClick(index);
                      }
                    }}
                    className="w-full text-left pl-5 relative transition-all duration-300 ease-out group flex flex-col justify-center"
                    aria-pressed={activeIndex === index}
                  >
                    {/* Left indicator bar */}
                    <motion.div
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                      initial={false}
                      animate={{
                        backgroundColor: activeIndex === index 
                          ? "hsl(203, 98%, 47%)" 
                          : visitedIndices.has(index) 
                          ? "rgba(255,255,255,0.2)" 
                          : "rgba(255,255,255,0.08)",
                        scaleY: activeIndex === index ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                    <span
                      className={`block text-lg font-medium transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-white"
                          : visitedIndices.has(index)
                          ? "text-white/50"
                          : "text-white/35 group-hover:text-white/50"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`block text-sm mt-1.5 transition-colors duration-300 leading-relaxed ${
                        activeIndex === index
                          ? "text-white/60"
                          : "text-white/30"
                      }`}
                    >
                      {item.text}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Canvas */}
          <div 
            className="lg:w-[70%] min-h-[380px] sm:min-h-[400px] lg:min-h-[500px] relative rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(255,255,255,0.03), transparent), 
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '100% 100%, 30px 30px, 30px 30px',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center p-4"
            >
              {isMobile ? (
                <MobileVerticalCanvas activeStep={mobileStep} />
              ) : (
                <DesktopHorizontalCanvas
                  showSystemDiagram={showSystemDiagram}
                  showProductLayer={showProductLayer}
                  showTimeline={showTimeline}
                  showFocusedPath={showFocusedPath}
                  showDecisionPoints={showDecisionPoints}
                  activeStep={activeIndex}
                />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferentSection;
