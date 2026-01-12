"use client";

import { motion } from "framer-motion";

const fundAllocation = [
  { label: "People", percentage: 60, color: "bg-foreground", description: "Founders, senior engineer, head of sales, phased head of product" },
  { label: "Product & Growth", percentage: 30, color: "bg-foreground/70", description: "Contract development, design, infrastructure, marketing, partnerships" },
  { label: "Operations", percentage: 10, color: "bg-foreground/40", description: "Software, cloud, legal, accounting, travel" },
];

export function TheAsk() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - Label and headline */}
      <div className="flex-shrink-0 mb-12">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm uppercase tracking-wider mb-4"
        >
          The Ask
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-6"
        >
          $1M to prove repeatable growth.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-3xl"
        >
          12–18 months of runway to validate product-market fit, close first enterprise contracts,
          and build the foundation for a category-defining company.
        </motion.p>
      </div>

      {/* Fund allocation visualization */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-sm text-muted-foreground uppercase tracking-wider mb-6"
        >
          Use of funds
        </motion.p>

        {/* Stacked bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ transformOrigin: "left" }}
          className="flex h-16 rounded-lg overflow-hidden mb-8"
        >
          {fundAllocation.map((item, index) => (
            <div
              key={item.label}
              className={`${item.color} flex items-center justify-center`}
              style={{ width: `${item.percentage}%` }}
            >
              <span className="text-background font-semibold text-sm">
                {item.percentage}%
              </span>
            </div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="grid grid-cols-3 gap-6">
          {fundAllocation.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className={`w-4 h-4 rounded ${item.color} flex-shrink-0 mt-1`} />
              <div>
                <p className="text-lg font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom - Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 pt-8 border-t border-border"
      >
        <p className="text-lg text-foreground">
          <span className="font-semibold">Milestones:</span> Land first enterprise customers, prove a consistent growth funnel, achieve $1M ARR runway extension.
        </p>
      </motion.div>
    </div>
  );
}
