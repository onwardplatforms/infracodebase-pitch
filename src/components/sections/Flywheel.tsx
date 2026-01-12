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
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-12">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Growth strategy
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Focused on durable growth.
          </h2>
        </motion.div>
      </div>

      {/* Flywheel visualization */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[600px] h-[500px]">
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
            className="absolute -top-20 left-1/2 -translate-x-1/2 text-center"
          >
            <Users className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-lg text-foreground">Win the</p>
            <p className="text-2xl font-semibold text-foreground">Practitioner</p>
          </motion.div>

          {/* Bottom right - Ecosystem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-8 -right-4 text-center"
          >
            <Network className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-lg text-foreground">Standardize the</p>
            <p className="text-2xl font-semibold text-foreground">Ecosystem</p>
          </motion.div>

          {/* Bottom left - Customer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 -left-4 text-center"
          >
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-lg text-foreground">Enable the</p>
            <p className="text-2xl font-semibold text-foreground">Customer</p>
          </motion.div>
        </div>

        {/* Right side - Detail cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="ml-12 space-y-4 w-80"
        >
          {flywheelSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              className="p-4 rounded-lg bg-card"
            >
              <p className="text-foreground font-semibold mb-1">
                {step.label} {step.emphasis}
              </p>
              <p className="text-sm text-muted-foreground">{step.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom - Why it compounds */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex-shrink-0 pt-6 border-t border-border"
      >
        <p className="text-lg text-foreground">
          Each turn of the flywheel makes the next turn easier. Practitioners drive adoption, adoption drives enterprise deals, enterprise standards attract more practitioners.
        </p>
      </motion.div>
    </div>
  );
}
