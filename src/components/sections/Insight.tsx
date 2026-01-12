"use client";

import { motion } from "framer-motion";

export function Insight() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-muted-foreground text-sm uppercase tracking-wider mb-8"
      >
        The insight
      </motion.p>

      <div className="flex-1 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground max-w-5xl text-center"
        >
          When agents can access your standards and tools,
          intent becomes shippable infrastructure.
        </motion.h2>
      </div>
    </div>
  );
}
