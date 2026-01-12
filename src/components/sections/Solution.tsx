"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Encode",
    description: "Capture your standards, patterns, and constraints in a form AI can use.",
  },
  {
    title: "Generate",
    description: "Agents produce infrastructure that meets your requirements from the start.",
  },
  {
    title: "Validate",
    description: "Every output is checked against your rules before it leaves the platform.",
  },
  {
    title: "Ship",
    description: "Deploy through your existing pipelines. No new workflows to adopt.",
  },
];

export function Solution() {
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
            The solution
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Infracodebase teaches AI how{" "}
            <span className="italic">your</span> organization builds infrastructure.
          </h2>
        </motion.div>
      </div>

      {/* Middle - Subhead and capabilities */}
      <div className="flex-1 flex flex-col">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xl text-muted-foreground mb-10 max-w-4xl"
        >
          We built a platform that turns organizational knowledge into AI guardrails.
          Your security policies, architecture patterns, and compliance requirements
          become the rules AI follows at generation time.
        </motion.p>

        {/* Capability cards */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-lg bg-card"
            >
              <p className="text-2xl font-semibold text-foreground mb-3">{cap.title}</p>
              <p className="text-muted-foreground">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-12 mt-auto"
        >
          <div className="flex-1">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
              What changes
            </p>
            <p className="text-lg text-foreground">
              Problems are solved at creation time, not caught downstream.
              No more rework cycles. No more security reviews that block releases.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
              What stays the same
            </p>
            <p className="text-lg text-foreground">
              Your CI/CD pipelines. Your cloud providers. Your security tools.
              Infracodebase works with what you have.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom - Punchline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-10 text-2xl md:text-3xl text-foreground font-semibold"
      >
        Compliant by default. Consistent across teams. Ready to ship.
      </motion.p>
    </div>
  );
}
