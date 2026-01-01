"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/theme-context";
import { useState, useEffect } from "react";

// Modern Light Icon (Sun with rays)
const LightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" />
    <path d="M12 2v2M12 20v2M22 12h-2M4 12H2M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M6.34 6.34l-1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Modern Dark Icon (Crescent Moon with stars)
const DarkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
    />
    <circle cx="18" cy="6" r="1" fill="currentColor" opacity="0.8" />
    <circle cx="19" cy="9" r="0.5" fill="currentColor" opacity="0.6" />
  </svg>
);

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-gradient-to-r from-[#335c67] to-[#4a7c8a] p-1" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-[#335c67] to-[#4a7c8a] dark:from-[#6ba8b5] dark:to-[#5a9caa] p-1 transition-all duration-500 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-[#0f172a] shadow-md flex items-center justify-center overflow-hidden"
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: theme === "dark" ? 360 : 0,
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <DarkIcon className="w-4 h-4 text-[#6ba8b5]" />
        </motion.div>
        <motion.div
          animate={{
            rotate: theme === "dark" ? 0 : -360,
            scale: theme === "dark" ? 0 : 1,
            opacity: theme === "dark" ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <LightIcon className="w-4 h-4 text-[#335c67]" />
        </motion.div>
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#335c67]/20 to-[#4a7c8a]/20 dark:from-[#6ba8b5]/30 dark:to-[#5a9caa]/30"
        animate={{
          opacity: theme === "dark" ? [0.4, 0.7, 0.4] : [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}

