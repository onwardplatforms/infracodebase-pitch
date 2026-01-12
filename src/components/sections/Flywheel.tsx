"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Network } from "lucide-react";

const flywheelSteps = [
  {
    id: "practitioner",
    label: "Win the",
    emphasis: "Practitioner",
    icon: Users,
    detail: "Build tools IaC engineers love. Organic adoption through daily use.",
    position: "top",
  },
  {
    id: "ecosystem",
    label: "Standardize the",
    emphasis: "Ecosystem",
    icon: Network,
    detail: "Become the way enterprises govern AI-generated infrastructure.",
    position: "right",
  },
  {
    id: "customer",
    label: "Enable the",
    emphasis: "Customer",
    icon: CheckCircle,
    detail: "Convert practitioners into enterprise contracts with proven ROI.",
    position: "left",
  },
];

export function Flywheel() {
  return (
    <div className="flex flex-col h-full w-full px-4 md:px-12 lg:px-20 py-8 md:py-12 overflow-y-auto md:overflow-hidden">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-4 md:mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4">
            Growth strategy
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground">
            Focused on durable growth.
          </h2>
        </motion.div>
      </div>

      {/* Flywheel visualization */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">
        <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] h-[250px] md:h-[350px] lg:h-[500px]">
          {/* Outer circle - the flywheel arrow */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 600 500"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  className="fill-foreground"
                />
              </marker>
              {/* Gradient for the glow effect */}
              <linearGradient id="flowGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Circle with arrow */}
            <path
              d="M 300 60 A 190 190 0 1 1 270 63"
              fill="none"
              className="stroke-foreground"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
          </motion.svg>

          {/* Inner dashed circle - centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 w-48 h-48 -mt-24 -ml-24 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center"
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Core Flywheel</p>
          </motion.div>

          {/* Top - Practitioner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -top-8 md:-top-16 lg:-top-20 left-1/2 -translate-x-1/2 text-center"
          >
            <Users className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mx-auto mb-1 md:mb-2 text-muted-foreground" />
            <p className="text-sm md:text-base lg:text-lg text-foreground">Win the</p>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-foreground">Practitioner</p>
          </motion.div>

          {/* Bottom right - Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-4 md:bottom-6 lg:bottom-8 right-0 md:-right-2 lg:-right-4 text-center"
          >
            <Network className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mx-auto mb-1 md:mb-2 text-muted-foreground" />
            <p className="text-sm md:text-base lg:text-lg text-foreground">Standardize the</p>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-foreground">Ecosystem</p>
          </motion.div>

          {/* Bottom left - Customer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-0 md:-left-2 lg:-left-4 text-center"
          >
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 mx-auto mb-1 md:mb-2 text-muted-foreground" />
            <p className="text-sm md:text-base lg:text-lg text-foreground">Enable the</p>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-foreground">Customer</p>
          </motion.div>
        </div>

        {/* Right side - Detail cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="lg:ml-12 space-y-2 md:space-y-4 w-full lg:w-80"
        >
          {flywheelSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              className="p-3 md:p-4 rounded-lg bg-card"
            >
              <p className="text-foreground font-semibold mb-1 text-sm md:text-base">
                {step.label} {step.emphasis}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">{step.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom - Why it compounds */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex-shrink-0 pt-4 md:pt-6 border-t border-border mt-4 md:mt-0"
      >
        <p className="text-sm md:text-lg text-foreground">
          Each turn of the flywheel makes the next turn easier. Practitioners drive adoption, adoption drives enterprise deals, enterprise standards attract more practitioners.
        </p>
      </motion.div>
    </div>
  );
}
