"use client";

import { motion } from "framer-motion";

const metrics = [
  { metric: "~500", detail: "Users in 4 months" },
  { metric: "850+", detail: "Webinar registrants" },
  { metric: "25+", detail: "Ambassadors" },
  { metric: "Several", detail: "Channel partners" },
];

const highlights = [
  "Head of Enterprise Sales onboard",
  "Enterprise pipeline with Fortune 100 banks, Big 4 consultancies, and global SIs",
  "Pilot program launching to market",
];

export function Traction() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-16">
      {/* Top - Label and headline */}
      <div className="flex-shrink-0 mb-8">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm uppercase tracking-wider mb-4"
        >
          Traction
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground mb-4"
        >
          4 months in. Growing fast.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-muted-foreground max-w-3xl"
        >
          Building multiple growth levers: organic community, content, channel partners, and enterprise direct sales.
        </motion.p>
      </div>

      {/* Metrics grid */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-4 gap-6 w-full mb-8">
          {metrics.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-6 rounded-lg bg-card"
            >
              <p className="text-3xl font-semibold text-foreground mb-2">{item.metric}</p>
              <p className="text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlights list */}
        <div className="space-y-3">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
              <p className="text-lg text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom - Positioning */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="text-muted-foreground mt-8"
      >
        Uniquely positioned at the intersection of AI and cloud infrastructure.
      </motion.p>
    </div>
  );
}
