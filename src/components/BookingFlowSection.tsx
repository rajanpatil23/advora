import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "main" | "secondary" | "diagnostic";
  step: number;
}

interface ConnectionData {
  from: string;
  to: string;
  type: "straight" | "branch-left" | "branch-right" | "merge-left" | "merge-right";
  step: number;
}

const BookingFlowSection = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastStepTime = useRef<number>(0);
  const isMobile = useIsMobile();
  
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Responsive dimensions
  const canvasWidth = isMobile ? 320 : 800;
  const canvasHeight = isMobile ? 840 : 860;
  const centerX = canvasWidth / 2;
  const nodeWidth = isMobile ? 160 : 200;
  const smallNodeWidth = isMobile ? 130 : 160;
  const branchOffset = isMobile ? 90 : 180;

  // Define all nodes with positions and step numbers
  const nodes: NodeData[] = useMemo(() => [
    // Step 0 - Start
    { id: "call-booked", label: "Call Booked", x: centerX, y: 50, type: "main", step: 0 },
    
    // Step 1 - Context
    { id: "context", label: "Understanding Your Context", x: centerX, y: 130, type: "main", step: 1 },
    
    // Step 2 - Diagnostic indicators
    { id: "diag-product", label: "Product", x: centerX - 105, y: 185, type: "diagnostic", step: 2 },
    { id: "diag-growth", label: "Growth", x: centerX - 35, y: 185, type: "diagnostic", step: 2 },
    { id: "diag-team", label: "Team", x: centerX + 35, y: 185, type: "diagnostic", step: 2 },
    { id: "diag-priorities", label: "Priorities", x: centerX + 105, y: 185, type: "diagnostic", step: 2 },
    
    // Step 3 - Primary Split
    { id: "product-tech", label: "Product / Technology", x: centerX - branchOffset, y: 260, type: "main", step: 3 },
    { id: "growth-scale", label: "Growth / Scale", x: centerX + branchOffset, y: 260, type: "main", step: 3 },
    
    // Step 4 - First sub-items
    { id: "website", label: "Website / App", x: centerX - branchOffset, y: 330, type: "secondary", step: 4 },
    { id: "digital", label: "Digital Presence", x: centerX + branchOffset, y: 330, type: "secondary", step: 4 },
    
    // Step 5
    { id: "custom", label: "Custom Software", x: centerX - branchOffset, y: 385, type: "secondary", step: 5 },
    { id: "acquisition", label: "User / Lead Acquisition", x: centerX + branchOffset, y: 385, type: "secondary", step: 5 },
    
    // Step 6
    { id: "uiux", label: "UI / UX & Product Experience", x: centerX - branchOffset, y: 440, type: "secondary", step: 6 },
    { id: "sales", label: "Sales & Revenue Systems", x: centerX + branchOffset, y: 440, type: "secondary", step: 6 },
    
    // Step 7
    { id: "brand", label: "Brand & Product Positioning", x: centerX - branchOffset, y: 495, type: "secondary", step: 7 },
    { id: "analytics", label: "Growth Strategy & Analytics", x: centerX + branchOffset, y: 495, type: "secondary", step: 7 },
    
    // Step 8 - Merge
    { id: "alignment", label: "System-Level Alignment", x: centerX, y: 605, type: "main", step: 8 },
    
    // Step 9 - Direction
    { id: "next-steps", label: "Clear Next Steps", x: centerX, y: 705, type: "main", step: 9 },
    
    // Step 10 - Final Split
    { id: "forward", label: "Move Forward Together", x: centerX - branchOffset + 20, y: 805, type: "main", step: 10 },
    { id: "independent", label: "Independent Next Steps", x: centerX + branchOffset - 20, y: 805, type: "main", step: 10 },
  ], [centerX, branchOffset]);

  // Define connections with step numbers
  const connections: ConnectionData[] = useMemo(() => [
    { from: "call-booked", to: "context", type: "straight", step: 1 },
    { from: "context", to: "product-tech", type: "branch-left", step: 3 },
    { from: "context", to: "growth-scale", type: "branch-right", step: 3 },
    { from: "product-tech", to: "website", type: "straight", step: 4 },
    { from: "website", to: "custom", type: "straight", step: 5 },
    { from: "custom", to: "uiux", type: "straight", step: 6 },
    { from: "uiux", to: "brand", type: "straight", step: 7 },
    { from: "growth-scale", to: "digital", type: "straight", step: 4 },
    { from: "digital", to: "acquisition", type: "straight", step: 5 },
    { from: "acquisition", to: "sales", type: "straight", step: 6 },
    { from: "sales", to: "analytics", type: "straight", step: 7 },
    { from: "brand", to: "alignment", type: "merge-left", step: 8 },
    { from: "analytics", to: "alignment", type: "merge-right", step: 8 },
    { from: "alignment", to: "next-steps", type: "straight", step: 9 },
    { from: "next-steps", to: "forward", type: "branch-left", step: 10 },
    { from: "next-steps", to: "independent", type: "branch-right", step: 10 },
  ], []);

  const totalSteps = 11;

  // Get node by ID
  const getNode = useCallback((id: string) => nodes.find(n => n.id === id), [nodes]);

  // Generate bezier path
  const generatePath = useCallback((conn: ConnectionData) => {
    const fromNode = getNode(conn.from);
    const toNode = getNode(conn.to);
    if (!fromNode || !toNode) return "";

    const startY = fromNode.y + 20;
    const endY = toNode.y - 20;
    const midY = (startY + endY) / 2;

    if (conn.type === "straight") {
      return `M ${fromNode.x} ${startY} C ${fromNode.x} ${midY}, ${toNode.x} ${midY}, ${toNode.x} ${endY}`;
    }
    
    if (conn.type === "branch-left" || conn.type === "branch-right") {
      const controlOffset = conn.type === "branch-left" ? -30 : 30;
      return `M ${fromNode.x} ${startY} C ${fromNode.x} ${midY}, ${toNode.x + controlOffset} ${midY}, ${toNode.x} ${endY}`;
    }
    
    if (conn.type === "merge-left" || conn.type === "merge-right") {
      const controlOffset = conn.type === "merge-left" ? 30 : -30;
      return `M ${fromNode.x} ${startY} C ${fromNode.x - controlOffset} ${midY}, ${toNode.x} ${midY}, ${toNode.x} ${endY}`;
    }

    return "";
  }, [getNode]);

  // Start animation when section is in view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setCurrentStep(0);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Animation loop using requestAnimationFrame for smooth performance
  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    const stepDuration = isMobile ? 1200 : 1000;
    const resetDelay = 2000;

    const animate = (timestamp: number) => {
      if (!lastStepTime.current) {
        lastStepTime.current = timestamp;
      }

      const elapsed = timestamp - lastStepTime.current;

      if (currentStep >= totalSteps) {
        // Wait for reset
        if (elapsed >= resetDelay) {
          setCurrentStep(-1);
          lastStepTime.current = timestamp;
          // Small delay before restarting
          setTimeout(() => setCurrentStep(0), 500);
        }
      } else if (elapsed >= stepDuration) {
        setCurrentStep(prev => prev + 1);
        lastStepTime.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasStarted, currentStep, isMobile, prefersReducedMotion]);

  // Node styles based on visibility and activity
  const getNodeStyles = (node: NodeData) => {
    const isVisible = currentStep >= node.step;
    const isActive = currentStep === node.step;
    const isFading = currentStep === -1;

    let opacity = 0;
    if (isFading) {
      opacity = 0;
    } else if (isVisible) {
      if (node.type === "diagnostic") {
        opacity = 0.4;
      } else if (isActive) {
        opacity = 1;
      } else {
        opacity = 0.7;
      }
    }

    return {
      opacity,
      transform: isVisible && !isFading ? "scale(1)" : "scale(0.85)",
    };
  };

  // Connection styles
  const getConnectionStyles = (conn: ConnectionData) => {
    const isVisible = currentStep >= conn.step;
    const isFading = currentStep === -1;

    return {
      strokeDashoffset: isVisible && !isFading ? 0 : 300,
      opacity: isFading ? 0 : (isVisible ? 1 : 0),
    };
  };

  return (
    <section
      ref={sectionRef}
      className="section-divider relative w-full overflow-hidden"
      style={{ backgroundColor: "hsl(0 0% 4%)" }}
    >
      {/* Premium dotted grid background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Subtle vignette overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(0 0% 4% / 0.4) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            <span className="block font-serif italic font-normal mb-1 text-white/90">
              What Happens After
            </span>
            <span className="block font-bold text-white">
              You Book Your <span className="text-primary">First Call</span>
            </span>
          </h2>
        </div>

        {/* Canvas container */}
        <div className="relative flex justify-center">
          <div 
            className="relative"
            style={{ 
              width: canvasWidth, 
              height: canvasHeight,
            }}
          >
            {/* SVG for connection lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
              preserveAspectRatio="xMidYMid meet"
            >
              {connections.map((conn, idx) => {
                const styles = getConnectionStyles(conn);
                const isActive = currentStep === conn.step;
                
                return (
                  <path
                    key={idx}
                    d={generatePath(conn)}
                    fill="none"
                    stroke={isActive ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
                    strokeWidth={1.5}
                    strokeDasharray="300"
                    style={{
                      strokeDashoffset: styles.strokeDashoffset,
                      opacity: styles.opacity,
                      transition: prefersReducedMotion 
                        ? "none" 
                        : "stroke-dashoffset 0.8s ease-out, opacity 0.6s ease-out",
                    }}
                  />
                );
              })}
            </svg>

            {/* Nodes - all rendered, visibility controlled by CSS */}
            {nodes.map(node => {
              const styles = getNodeStyles(node);
              const isFinalNode = node.id === "forward" || node.id === "independent";
              const width = node.type === "secondary" ? smallNodeWidth : node.type === "diagnostic" ? 60 : (isMobile && isFinalNode ? 140 : nodeWidth);
              const height = node.type === "diagnostic" ? 22 : node.type === "secondary" ? 34 : 42;
              const fontSize = node.type === "diagnostic" ? "text-[9px]" : node.type === "secondary" ? "text-[11px]" : (isMobile && isFinalNode ? "text-[11px]" : "text-sm");
              const isActive = currentStep === node.step;

              return (
                <div
                  key={node.id}
                  className="absolute flex items-center justify-center text-center pointer-events-none"
                  style={{
                    left: node.x - width / 2,
                    top: node.y - height / 2,
                    width,
                    height,
                    opacity: styles.opacity,
                    transform: styles.transform,
                    transition: prefersReducedMotion 
                      ? "none" 
                      : "opacity 0.5s ease-out, transform 0.5s ease-out",
                  }}
                >
                  <div
                    className={`
                      w-full h-full flex items-center justify-center px-2 sm:px-3 rounded-full
                      ${node.type === "diagnostic" 
                        ? "" 
                        : isActive 
                          ? "bg-white/10 border border-white/30" 
                          : "bg-white/[0.03] border border-white/10"
                      }
                    `}
                    style={{
                      transition: prefersReducedMotion ? "none" : "background-color 0.3s, border-color 0.3s",
                    }}
                  >
                    <span 
                      className={`
                        ${fontSize} font-medium tracking-wide leading-tight
                        ${node.type === "diagnostic" 
                          ? "text-white/50" 
                          : isActive 
                            ? "text-white" 
                            : "text-white/60"
                        }
                      `}
                    >
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFlowSection;
