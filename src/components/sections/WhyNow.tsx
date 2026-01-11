"use client";

import { motion } from "framer-motion";

export function WhyNow() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - Section Header */}
      <div className="flex-shrink-0 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Why now
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            [Headline TBD]
          </h2>
        </motion.div>
      </div>

      {/* Content area */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-2xl text-muted-foreground">
            [Content to be developed]
          </p>
        </motion.div>
      </div>
    </div>
  );
}
