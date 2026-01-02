"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function MovingBanner() {
  return (
    <div className="fixed top-20 left-0 w-full overflow-hidden py-4 z-40 pointer-events-none">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#335c67]/20 backdrop-blur-sm border border-[#335c67]/30 shadow-sm flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#335c67] animate-pulse" />
            <span className="text-sm font-medium text-[#335c67] whitespace-nowrap">
              Available for Opportunities
            </span>
          </motion.div>
        ))}
        {/* Duplicate set for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`duplicate-${i}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#335c67]/20 backdrop-blur-sm border border-[#335c67]/30 shadow-sm flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#335c67] animate-pulse" />
            <span className="text-sm font-medium text-[#335c67] whitespace-nowrap">
              Available for Opportunities
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

