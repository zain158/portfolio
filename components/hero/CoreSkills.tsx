"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export function CoreSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 dark:from-[#335c67]/20 dark:to-[#ddb892]/20 backdrop-blur-md border-2 border-[#335c67]/30 dark:border-[#ddb892]/30 rounded-3xl p-10 shadow-2xl mb-20 overflow-hidden transition-colors duration-500"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#335c67]/5 to-[#ddb892]/5 opacity-50"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <h2 className="text-3xl font-bold mb-8 text-center text-[#335c67] dark:text-[#6ba8b5] relative z-10 transition-colors duration-500">
        Core Technologies
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {skills.slice(0, 12).map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, type: "spring" }}
            whileHover={{ scale: 1.15, y: -3, rotate: 2 }}
            className="relative px-5 py-2.5 bg-gradient-to-r from-[#ddb892] to-[#c9a572] dark:from-[#6ba8b5] dark:to-[#5a9caa] text-[#335c67] dark:text-[#1a1a1a] rounded-xl text-sm font-semibold border-2 border-[#ddb892] dark:border-[#6ba8b5] shadow-md hover:shadow-lg transition-all overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#c9a572] to-[#ddb892] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">{skill}</span>
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

