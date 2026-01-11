"use client";

import { motion } from "framer-motion";

const integrations = [
  "Security tools",
  "Deployment pipelines",
  "Cloud providers",
  "Existing IaC",
];

export function Solution() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-12">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-8">
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
            An AI-native platform for enterprise-grade infrastructure code and design.
          </h2>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex gap-12">
        {/* Left side - What we are / aren't + integrations */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center"
        >
          {/* Positioning clarity */}
          <div className="mb-8">
            <p className="text-xl text-foreground mb-4">
              An agentic platform for infrastructure code and design that incorporates security by design and deploys through your existing pipelines.
            </p>
            <p className="text-xl text-foreground">
              Your existing investments, <span className="font-semibold">unified in a single pane of glass</span>.
            </p>
          </div>

          {/* Integration pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {integrations.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="px-4 py-2 rounded-full bg-card text-sm text-muted-foreground"
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* The shift left value */}
          <p className="text-lg text-muted-foreground">
            Quality moves left into code generation, so problems are solved at creation time, not caught downstream.
          </p>
        </motion.div>

        {/* Right side - Platform visual placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-2/5 flex items-center justify-center border border-dashed border-border rounded-lg"
        >
          <p className="text-muted-foreground text-sm">
            [Platform architecture diagram]
          </p>
        </motion.div>
      </div>

      {/* Bottom - Punchline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-2xl text-foreground font-semibold"
      >
        Compliant by default. Consistent across teams. Ready to ship.
      </motion.p>
    </div>
  );
}
