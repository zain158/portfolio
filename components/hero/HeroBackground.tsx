"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  // Only render particles on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate particle positions using index-based calculations (deterministic)
  const particleCount = 15;
  const getParticleData = (index: number) => {
    const angle = (index / particleCount) * Math.PI * 2;
    const radius = 30 + (index % 5) * 10;
    return {
      left: 50 + radius * Math.cos(angle),
      top: 50 + radius * Math.sin(angle),
      xOffset: (index % 7) * 3 - 9,
      duration: 3 + (index % 3) * 0.5,
      delay: (index % 4) * 0.5,
    };
  };

  return (
    <>
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#335c67]/10 via-transparent to-[#ddb892]/10 dark:from-[#335c67]/20 dark:via-transparent dark:to-[#ddb892]/20 transition-colors duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-500" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-[#335c67]/20 dark:bg-[#335c67]/30 rounded-full blur-3xl transition-colors duration-500"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#ddb892]/20 dark:bg-[#ddb892]/30 rounded-full blur-3xl transition-colors duration-500"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#335c67]/15 dark:bg-[#ddb892]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 transition-colors duration-500"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Particles - Only render after mount to prevent hydration errors */}
      {mounted &&
        Array.from({ length: particleCount }, (_, i) => {
          const particle = getParticleData(i);
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#335c67]/30 dark:bg-[#ddb892]/40 rounded-full transition-colors duration-500"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, particle.xOffset, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
    </>
  );
}

