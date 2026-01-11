"use client";

import { motion } from "framer-motion";

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
            Infracodebase is an AI-native platform for enterprise-grade, secure-by-design cloud infrastructure.
          </h2>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex gap-12">
        {/* Left side - Platform architecture image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex items-center justify-center border border-dashed border-border rounded-lg"
        >
          <p className="text-muted-foreground text-sm">
            [Platform architecture diagram]
          </p>
        </motion.div>

        {/* Right side - Key points */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-1/3 flex flex-col justify-center"
        >
          <p className="text-xl text-foreground mb-6">
            Encode your organization's infrastructure standards once. Apply them every time.
          </p>
          <p className="text-xl text-foreground mb-6">
            The platform assembles code using approved patterns and constraints that reflect how your organization actually builds.
          </p>
          <p className="text-lg text-muted-foreground">
            Compliant by default. Consistent across teams. Ready to ship.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
