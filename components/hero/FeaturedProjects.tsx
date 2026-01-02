"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative bg-gradient-to-br from-[#335c67]/15 to-[#ddb892]/15 dark:from-[#335c67]/20 dark:to-[#ddb892]/20 backdrop-blur-md border-2 border-[#335c67]/30 dark:border-[#ddb892]/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl overflow-hidden group transition-colors duration-500"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-[#335c67]/20 to-[#ddb892]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div className="absolute top-0 right-0 w-32 h-32 bg-[#335c67]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#335c67] to-[#4a7c8a] flex items-center justify-center mb-4 group-hover:shadow-lg shadow-md relative z-10"
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2 text-[#335c67] dark:text-[#6ba8b5] group-hover:text-[#335c67]/80 dark:group-hover:text-[#e8c9a0] transition-colors relative z-10">
              {project.name}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm line-clamp-2 relative z-10">
              {project.description}
            </p>
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="text-sm font-semibold text-[#335c67] dark:text-[#e8c9a0] hover:underline inline-flex items-center gap-1 relative z-10 group/link transition-colors duration-500"
            >
              View Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 bg-gradient-to-r from-[#335c67] to-[#4a7c8a] text-white rounded-xl font-semibold shadow-lg shadow-[#335c67]/40 hover:shadow-2xl hover:shadow-[#335c67]/50 transition-all overflow-hidden group"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#4a7c8a] to-[#335c67] opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">View All Projects</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

