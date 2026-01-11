"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    audience: "Developers",
    benefit: "move faster because they don't fight reviews and rework.",
  },
  {
    audience: "Security teams",
    benefit: "are comfortable because nothing violates core standards.",
  },
  {
    audience: "Platform teams",
    benefit: "scale their impact without becoming a bottleneck.",
  },
];

export function Differentiation() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-12">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Why this is better
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            The difference isn't just speed. It's trust.
          </h2>
        </motion.div>
      </div>

      {/* Benefits */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="space-y-8 mb-12">
          {benefits.map((item, index) => (
            <motion.p
              key={item.audience}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-2xl text-foreground"
            >
              <span className="font-semibold">{item.audience}</span> {item.benefit}
            </motion.p>
          ))}
        </div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl md:text-3xl text-foreground font-semibold max-w-4xl"
        >
          Instead of AI being a risk that needs oversight, it becomes a force multiplier that enforces standards automatically.
        </motion.p>
      </div>
    </div>
  );
}
