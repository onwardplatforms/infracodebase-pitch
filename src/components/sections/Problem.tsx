"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [showPlus, setShowPlus] = useState(false);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      delay: 0.5,
      ease: [0.16, 0.1, 0.3, 1], // Custom ease: slow start, rapid acceleration
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      onComplete: () => setShowPlus(true),
    });
    return controls.stop;
  }, [count, target, duration]);

  return (
    <span className="inline-flex items-baseline">
      <motion.span layout="position" transition={{ duration: 0.3, ease: "easeOut" }}>
        {displayValue}
      </motion.span>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: showPlus ? 32 : 0,
          opacity: showPlus ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden inline-block"
      >
        +
      </motion.span>
    </span>
  );
}

const journeySteps = [
  { step: "Request", friction: "Goes into a queue behind dozens of other projects the team is already backed up on" },
  { step: "Plan", friction: "Manual architecture diagrams, scattered documentation, teams operating in silos" },
  { step: "Code", friction: "Manual operators, mix of cloud console and code, too slow to trust AI without the right systems" },
  { step: "Ship", friction: "CI catches what should've been caught at code time. Negative feedback loops pile up." },
  { step: "Rework", friction: "Back to the beginning" },
];

export function Problem() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - The Problem Statement */}
      <div className="flex-shrink-0 mb-12 flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl"
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

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-shrink-0 p-6 rounded-lg bg-card text-right"
        >
          <p className="text-5xl font-semibold text-foreground tabular-nums">
            <AnimatedCounter target={90} duration={2.5} /> days
          </p>
          <p className="text-sm text-muted-foreground mt-1">average enterprise infrastructure project</p>
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
            {["Opportunity identified", "Budget approved", "Team assembled"].map((item) => (
              <div key={item} className="p-4 rounded-lg bg-card flex items-center gap-3">
                <span className="text-2xl text-muted-foreground">✓</span>
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
            {/* The timeline line - positioned to connect dot centers */}
            <div className="absolute left-3 top-[2.75rem] bottom-[2.75rem] w-px -translate-x-1/2">
              <motion.div
                className="w-full h-full bg-muted-foreground/30"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ originY: 0 }}
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
