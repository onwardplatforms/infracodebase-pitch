"use client";

import { motion } from "framer-motion";

const journeySteps = [
  { step: "Request", friction: "Align on whether to even do it" },
  { step: "Plan", friction: "Architecture diagrams, technical plans, reviews" },
  { step: "Build", friction: "Code doesn't match the desired architecture" },
  { step: "Deploy", friction: "CI catches what should've been caught upfront" },
  { step: "Rework", friction: "Back to the beginning" },
];

export function Problem() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - The Problem Statement (in your face) */}
      <div className="flex-shrink-0 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            The problem
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-4">
            Everyone wants speed.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-muted-foreground">
            Trust is the limiting factor.
          </h2>
        </motion.div>
      </div>

      {/* Bottom - Supporting Evidence */}
      <div className="flex-1 flex gap-8">
        {/* Left - Business context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-1/3 flex flex-col"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">
            The business is ready
          </p>

          <div className="space-y-3 flex-1">
            {["Budget approved", "Opportunity identified", "Team assembled"].map((item) => (
              <div key={item} className="p-4 rounded-lg bg-card">
                <span className="text-2xl md:text-3xl font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-2xl text-muted-foreground">
            Then they hit infrastructure.
          </p>
        </motion.div>

        {/* Right - Vertical Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 flex flex-col"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">
            What happens next
          </p>

          {/* Timeline with vertical line */}
          <div className="flex-1 relative">
            {/* The timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-muted-foreground/20">
              <motion.div
                className="w-full bg-muted-foreground/50"
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {journeySteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-card flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 rounded-lg bg-card">
                    <p className="text-lg font-semibold text-foreground mb-1">{item.step}</p>
                    <p className="text-sm text-muted-foreground">{item.friction}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          <p className="mt-8 text-2xl text-muted-foreground">
            Months pass. Costs grow. Trust erodes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
