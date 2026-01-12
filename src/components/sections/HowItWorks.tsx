"use client";

import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <div className="flex flex-col h-full w-full px-4 md:px-12 lg:px-20 py-8 md:py-16">
      {/* Top left - Label */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider mb-4 md:mb-6"
      >
        How it works
      </motion.p>

      {/* Video - fills remaining space */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex items-center justify-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="max-w-full rounded-xl md:rounded-3xl shadow-2xl"
          style={{ maxHeight: 'calc(100vh - 150px)' }}
          src="https://stouse2icbprd.blob.core.windows.net/public/videos/NewAgentExperience.mp4"
        />
      </motion.div>
    </div>
  );
}
