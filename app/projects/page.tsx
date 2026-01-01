"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#335c67]/5 via-transparent to-[#ddb892]/5 dark:from-[#335c67]/15 dark:via-transparent dark:to-[#ddb892]/15 transition-colors duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-500" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-[#335c67]/15 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#ddb892]/15 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-[#335c67] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Code className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of projects showcasing my expertise in MERN stack development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-card/60 to-card/40 dark:from-card/80 dark:to-card/60 backdrop-blur-md border-2 border-[#335c67]/20 dark:border-[#6ba8b5]/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl overflow-hidden group/card transition-colors duration-500">
                {/* Enhanced Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#335c67]/25 to-[#ddb892]/15 opacity-0 group-hover/card:opacity-100 transition-opacity"
                />

                {/* Enhanced Glow effects */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-[#335c67]/15 rounded-full blur-3xl opacity-0 group-hover/card:opacity-100 transition-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-[#ddb892]/15 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity"
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#335c67] to-[#4a7c8a] flex items-center justify-center shadow-lg group-hover/card:shadow-xl"
                    >
                      <Code className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted-foreground hover:text-[#335c67] dark:hover:text-[#ddb892] transition-colors duration-500"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>

                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-2xl font-bold mb-3 group-hover:text-[#335c67] dark:group-hover:text-[#e8c9a0] text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500"
                  >
                    {project.name}
                  </motion.h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * (index + 1) + techIndex * 0.05 }}
                        whileHover={{ scale: 1.15, y: -2, rotate: 1 }}
                        className="relative px-3 py-1.5 bg-gradient-to-r from-[#ddb892] to-[#c9a572] dark:from-[#6ba8b5] dark:to-[#5a9caa] text-[#335c67] dark:text-[#1a1a1a] rounded-lg text-xs font-semibold border border-[#ddb892] dark:border-[#6ba8b5] shadow-sm hover:shadow-md transition-all overflow-hidden group/tech"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#c9a572] to-[#ddb892] opacity-0 group-hover/tech:opacity-100 transition-opacity"
                        />
                        <span className="relative z-10">{tech}</span>
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#335c67] dark:text-[#e8c9a0] hover:underline group/link transition-colors duration-500"
                  >
                    View Project
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
