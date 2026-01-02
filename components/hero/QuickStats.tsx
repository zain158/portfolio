"use client";

import { motion } from "framer-motion";
import { Code, Database, Zap, MapPin } from "lucide-react";
import { projects, skills } from "@/lib/data";

const stats = [
  { label: "Years Experience", value: "3+", icon: Code },
  {
    label: "Projects Completed",
    value: projects.length.toString(),
    icon: Database,
  },
  {
    label: "Technologies",
    value: skills.length.toString(),
    icon: Zap,
  },
  { label: "Location", value: "Pakistan", icon: MapPin },
];

export function QuickStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
    >
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative bg-gradient-to-br from-[#335c67]/15 to-[#ddb892]/15 dark:from-[#335c67]/20 dark:to-[#ddb892]/20 backdrop-blur-md border-2 border-[#335c67]/30 dark:border-[#ddb892]/30 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl overflow-hidden group transition-colors duration-500"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#335c67]/20 to-[#ddb892]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div className="absolute top-0 right-0 w-24 h-24 bg-[#335c67]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Icon className="w-8 h-8 mx-auto mb-3 text-[#335c67] dark:text-[#6ba8b5] relative z-10 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-bold mb-1 text-[#335c67] dark:text-[#6ba8b5] relative z-10 transition-colors duration-500">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground font-medium relative z-10">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

