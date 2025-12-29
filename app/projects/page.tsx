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
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#335c67]/5 via-transparent to-[#ddb892]/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

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
            className="text-5xl md:text-6xl font-bold mb-4 text-[#335c67]"
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
              <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-[#335c67]/20 to-[#ddb892]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#335c67]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-xl bg-[#335c67] flex items-center justify-center"
                    >
                      <Code className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-muted-foreground hover:text-[#335c67] transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>

                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-2xl font-bold mb-3 group-hover:text-[#335c67] text-[#335c67] transition-colors"
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
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 bg-[#ddb892] text-[#335c67] rounded-lg text-xs font-semibold border border-[#ddb892]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#335c67] hover:underline group/link"
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
