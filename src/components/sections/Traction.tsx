"use client";

import { motion } from "framer-motion";

const metrics = [
  { metric: "500+", detail: "Organic users, no marketing spend" },
  { metric: "10+", detail: "Enterprise conversations per week" },
  { metric: "Global", detail: "Brand from day one" },
];

const enterprises = ["Bank of America", "JPMorgan Chase", "Wells Fargo", "Volvo Cars", "Red Ventures"];
const consultancies = ["Deloitte", "Accenture", "Wipro", "Cognizant", "Slalom"];

const useCases = [
  "Legacy app modernization",
  "Cloud-to-cloud migration",
  "ClickOps to IaC conversion",
  "Greenfield infrastructure",
  "Cloud security",
];

export function Traction() {
  return (
    <div className="flex flex-col h-full w-full px-4 md:px-12 lg:px-20 py-8 md:py-12 overflow-y-auto md:overflow-hidden">
      {/* Top - Label and headline */}
      <div className="flex-shrink-0 mb-4 md:mb-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4"
        >
          Traction
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground mb-2 md:mb-4"
        >
          Early stage. Strong signals.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-xl text-muted-foreground max-w-4xl"
        >
          The product is resonating with large companies and the cloud engineering community. Enterprise sales motion and partner program underway with early positive signals. Punching above our weight.
        </motion.p>
      </div>

      {/* Metrics grid */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-3 gap-2 md:flex md:gap-4 w-full mb-4 md:mb-8">
          {metrics.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex-1 p-3 md:p-5 rounded-lg bg-card"
            >
              <p className="text-xl md:text-4xl font-semibold text-foreground mb-1 md:mb-2">{item.metric}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Logos section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Enterprises */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-3">Enterprise</p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {enterprises.map((name) => (
                <span key={name} className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-card text-xs md:text-sm text-foreground">
                  {name}
                </span>
              ))}
              <span className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-muted/50 text-xs md:text-sm text-muted-foreground">+</span>
            </div>
          </motion.div>

          {/* Consultancies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2 md:mb-3">Consulting</p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {consultancies.map((name) => (
                <span key={name} className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-card text-xs md:text-sm text-foreground">
                  {name}
                </span>
              ))}
              <span className="px-2 md:px-3 py-1 md:py-1.5 rounded bg-muted/50 text-xs md:text-sm text-muted-foreground">+</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom - Use cases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex-shrink-0 pt-4 md:pt-6 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0"
      >
        <div>
          <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-1 md:mb-2">Use cases resonating</p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {useCases.map((useCase) => (
              <span key={useCase} className="text-xs md:text-base text-foreground">{useCase}</span>
            ))}
          </div>
        </div>
        <p className="text-muted-foreground text-xs md:text-sm">
          850 registrants on launch webinar series
        </p>
      </motion.div>
    </div>
  );
}
