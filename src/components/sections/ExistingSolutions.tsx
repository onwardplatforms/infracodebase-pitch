"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    name: "Raw code generation",
    description: "Prompt an LLM, get Terraform, hope it passes review.",
    problem: "Works for demos. Breaks down in enterprise environments where security, consistency, and accountability matter.",
  },
  {
    name: "Bolt-on guardrails",
    description: "Policy engines, scanners, and linters catch problems after code is generated.",
    problem: "Reduces risk, but reintroduces friction. AI produces output, humans clean it up.",
  },
  {
    name: "Developer AI tools",
    description: "Cursor, Copilot, Claude Code. Great for individual coding tasks.",
    problem: "Biased toward execution. No organizational context. Infrastructure requires security, networking, and cloud expertise that code alone can't capture.",
  },
];

export function ExistingSolutions() {
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
            Why existing solutions fall short
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Enterprises are trying everything. None of it is working.
          </h2>
        </motion.div>
      </div>

      {/* Middle - Three approaches */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex gap-6">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex-1 p-6 rounded-lg bg-card flex flex-col"
            >
              <p className="text-xl font-semibold text-foreground mb-3">{approach.name}</p>
              <p className="text-lg text-muted-foreground mb-4">{approach.description}</p>
              <p className="text-lg text-foreground mt-auto">{approach.problem}</p>
            </motion.div>
          ))}
        </div>

        {/* Stat + Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-auto flex items-end justify-between gap-8"
        >
          <div>
            <p className="text-5xl font-semibold text-foreground">72%</p>
            <p className="text-lg text-muted-foreground">of CIOs are breaking even or losing money on AI investments</p>
            <p className="text-sm text-muted-foreground/60 mt-1">Gartner 2025</p>
          </div>
          <div className="text-right max-w-2xl">
            <p className="text-2xl md:text-3xl text-foreground font-semibold">
              What's missing is an agentic foundation layer.
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Rules, guardrails, security standards, workflows, tool integrations - codified so AI understands how your organization builds infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
