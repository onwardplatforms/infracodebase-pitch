"use client";

import { motion } from "framer-motion";

const approaches = [
  {
    name: "Raw code generation",
    description: "Prompt an LLM, get Terraform, hope it passes review.",
    problem: "Works for demos and side projects. Breaks down immediately in enterprise environments where security, consistency, and accountability matter.",
  },
  {
    name: "Bolt-on guardrails",
    description: "Policy engines, scanners, and linters catch problems after code is generated.",
    problem: "Reduces risk, but reintroduces friction and manual rework. AI produces output, humans clean it up.",
  },
  {
    name: "Fragmented tooling",
    description: "Cloud providers embed AI into individual tools, each with partial context.",
    problem: "Teams are left stitching together governance and standards themselves.",
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
          className="max-w-4xl"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
            Why existing solutions fall short
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Most attempts to apply AI to infrastructure fall into three categories.
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

        {/* Punchline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-auto"
        >
          <p className="text-2xl md:text-3xl text-foreground font-semibold max-w-4xl">
            What's missing is a way to make AI understand how an organization builds infrastructure before it writes a single line of code.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
