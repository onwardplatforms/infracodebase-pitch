"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Encodes standards",
    description: "Security policies, architecture patterns, and conventions are defined once and versioned.",
  },
  {
    title: "Generates with constraints",
    description: "The AI generates infrastructure code only within those constraints, using approved building blocks.",
  },
  {
    title: "Produces auditable output",
    description: "Every generated artifact is explainable, consistent, and suitable for enterprise CI/CD and review workflows.",
  },
];

export function HowItWorks() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            At a high level, Infracodebase does three things.
          </h2>
        </motion.div>
      </div>

      {/* Three steps */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="flex-1"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-4xl font-semibold text-muted-foreground/30">{index + 1}</span>
                <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="text-lg text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-2xl md:text-3xl text-foreground font-semibold"
        >
          This shifts infrastructure generation from "generate then fix" to "generate it right the first time."
        </motion.p>
      </div>
    </div>
  );
}
