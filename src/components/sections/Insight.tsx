"use client";

import { motion } from "framer-motion";

const knowledgeTypes = [
  "Approved architectures",
  "Security rules",
  "Naming and tagging conventions",
  "Environment-specific constraints",
];

export function Insight() {
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
            The insight
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Infrastructure code isn't just syntax.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-muted-foreground">
            It's intent, standards, and constraints.
          </h2>
        </motion.div>
      </div>

      {/* Middle - Content */}
      <div className="flex-1 flex flex-col gap-8">
        {/* What enterprises know */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl text-muted-foreground mb-6">
            Enterprises already know how they want infrastructure built:
          </p>
          <div className="flex gap-4">
            {knowledgeTypes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="flex-1 p-5 rounded-lg bg-card"
              >
                <p className="text-lg font-medium text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The problem with that knowledge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-8"
        >
          <div className="flex-1 p-5 rounded-lg bg-card">
            <p className="text-lg text-foreground">
              That knowledge exists, but it's trapped in documentation, tribal knowledge, and platform teams.
            </p>
          </div>
          <div className="flex-1 p-5 rounded-lg bg-card">
            <p className="text-lg text-foreground">
              Siloed teams work in different tools. Context is everywhere. Getting it right means endless calls, threads, and guesswork.
            </p>
          </div>
        </motion.div>

        {/* The key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-auto p-8 rounded-lg bg-card"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            The key insight
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            If AI can be taught those rules upfront, it can generate infrastructure that is secure and shippable by default.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
