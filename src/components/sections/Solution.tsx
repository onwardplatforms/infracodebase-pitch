"use client";

import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const allTools = [
  { name: "AWS", src: "/images/awscloud.svg" },
  { name: "Azure", src: "/images/azurecloud.svg" },
  { name: "GCP", src: "/images/googlecloud.svg" },
  { name: "Terraform", src: "/images/terraform.svg" },
  { name: "OpenTofu", src: "/images/opentofu.svg" },
  { name: "Pulumi", src: "/images/pulumi.svg" },
  { name: "GitHub", src: "/images/github-dark.svg" },
  { name: "GitLab", src: "/images/gitlab.svg" },
  { name: "Atlassian", src: "/images/atlassian.svg" },
  { name: "Notion", src: "/images/notion.svg" },
  { name: "Azure DevOps", src: "/images/azuredevops.svg" },
];

function ToolCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const toolCount = allTools.length;
  const itemWidth = 76; // 36px image + 40px gap
  const doubledTools = [...allTools, ...allTools];

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIndex = -1;
    let closestDistance = Infinity;

    // Find the closest item to center
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    // Apply styles - only the closest one is highlighted
    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const isCenter = index === closestIndex;

      item.style.transform = isCenter ? "scale(1.5)" : "scale(1)";
      item.style.opacity = isCenter ? "1" : "0.4";
      item.style.filter = isCenter ? "grayscale(0%)" : "grayscale(100%)";
    });
  });

  return (
    <div>
      <p className="text-sm md:text-lg text-foreground font-medium mb-2 md:mb-4">
        Any cloud. Any language. Any tool.
      </p>
      <div ref={containerRef} className="relative overflow-hidden w-full">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling container */}
        <motion.div
          className="flex gap-10 items-center py-6"
          animate={{ x: [0, -itemWidth * toolCount] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {doubledTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="flex-shrink-0 transition-all duration-150"
              style={{
                opacity: 0.4,
                filter: "grayscale(100%)",
              }}
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={36}
                height={36}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function Solution() {
  return (
    <div className="flex flex-col lg:flex-row h-full w-full px-4 md:px-12 lg:px-20 py-8 md:py-16 gap-6 lg:gap-12 overflow-y-auto lg:overflow-hidden">
      {/* Left - Text content and carousel */}
      <div className="w-full lg:w-2/5 flex flex-col">
        {/* Label and Headline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-4"
        >
          The solution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight text-foreground mb-4 md:mb-8"
        >
          The agentic AI platform for enterprise infra design and code.
        </motion.h2>

        {/* Supporting content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-base md:text-xl text-muted-foreground mb-4 md:mb-8">
            Agents generate infrastructure designs and code grounded in your standards, tools, and way of working.
          </p>
          <div className="flex gap-2 md:gap-3 flex-wrap">
            {["Compliant by default", "Consistent across teams", "Ready to ship"].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-card text-foreground text-xs md:text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tool carousel at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-auto"
        >
          <ToolCarousel />
        </motion.div>
      </div>

      {/* Right - Architecture diagram (full height) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full lg:w-3/5 flex items-center justify-center"
      >
        <Image
          src="/images/infracodebase-arch.png"
          alt="Infracodebase Architecture"
          width={800}
          height={800}
          className="object-contain max-h-[300px] md:max-h-[500px] lg:max-h-full w-full"
        />
      </motion.div>
    </div>
  );
}
