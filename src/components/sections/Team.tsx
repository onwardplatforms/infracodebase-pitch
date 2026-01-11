"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "Justin O'Connor",
    role: "Founder / CEO / CTO",
    description: "Nearly a decade in cloud across Azure, AWS, and GCP with some of the largest and most heavily regulated enterprises. Leads product and strategy.",
  },
  {
    name: "Tarak",
    role: "Co-Founder / CRO",
    description: "Built multiple startups. Previously led growth at Brainboard (Y Combinator). Deep network across the cloud ecosystem.",
  },
];

export function Team() {
  return (
    <div className="flex flex-col h-full w-full px-12 lg:px-20 py-12">
      {/* Top - Headline */}
      <div className="flex-shrink-0 mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Why us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            This company exists because we've lived the problem.
          </h2>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex-1 flex gap-16">
        {/* Left - Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col justify-center"
        >
          <p className="text-xl text-foreground mb-6">
            We've built and operated enterprise cloud platforms where speed, security, and scale collide daily. We've seen where shortcuts fail, where reviews become bottlenecks, and why most AI-driven approaches break under real constraints.
          </p>
          <p className="text-xl text-foreground mb-6">
            That experience shapes the product: practical, opinionated, and built for how enterprises actually operate.
          </p>
          <p className="text-xl text-foreground font-semibold">
            We're not guessing what this market needs. We're building the thing we wish existed.
          </p>
        </motion.div>

        {/* Right - Founders */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-2/5 flex flex-col justify-center space-y-8"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <p className="text-xl font-semibold text-foreground">{founder.name}</p>
              <p className="text-sm text-muted-foreground mb-2">{founder.role}</p>
              <p className="text-base text-muted-foreground">{founder.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
