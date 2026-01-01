"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Code,
  Database,
  Zap,
  Sparkles,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { personalInfo, skills, projects } from "@/lib/data";

export function Hero() {
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
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
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

      {/* Floating Particles */}
      {Array.from({ length: particleCount }, (_, i) => {
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

      {/* Moving Banner - Button Style */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-20 max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
          >
            <motion.span
              className="block bg-gradient-to-r from-[#335c67] via-[#4a7c8a] to-[#335c67] dark:from-[#6ba8b5] dark:via-[#5a9caa] dark:to-[#6ba8b5] bg-clip-text text-transparent mt-4 mb-2 cursor-default relative transition-colors duration-500"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
              whileHover={{
                scale: 1.05,
                x: 10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              MERN STACK
            </motion.span>
            <motion.span
              className="block text-[#335c67] dark:text-[#6ba8b5] cursor-default relative transition-colors duration-500"
              whileHover={{
                scale: 1.05,
                x: 10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#ddb892] to-[#335c67] opacity-0 blur-xl"
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              DEVELOPER
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
            whileHover={{
              x: 8,
              scale: 1.01,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="text-xl md:text-2xl text-muted-foreground max-w-5xl mb-8 leading-relaxed cursor-default"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Buttons - Keep these as user likes them */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-start mb-12"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#335c67] to-[#4a7c8a] text-white rounded-xl font-semibold shadow-lg shadow-[#335c67]/40 hover:shadow-2xl hover:shadow-[#335c67]/50 transition-all overflow-hidden group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#4a7c8a] to-[#335c67] opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Get In Touch</span>
              </motion.div>
            </Link>
            <Link href="/cv">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#ddb892] to-[#c9a572] text-[#335c67] border-2 border-[#ddb892] rounded-xl font-semibold hover:border-[#c9a572] transition-all shadow-lg hover:shadow-xl overflow-hidden group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#c9a572] to-[#ddb892] opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div className="absolute inset-0 bg-[#335c67]/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <FileText className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Show CV</span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-6 justify-start text-sm"
          >
            {[
              {
                icon: Mail,
                href: `mailto:${personalInfo.email}`,
                text: personalInfo.email,
              },
              {
                icon: Phone,
                href: `tel:${personalInfo.phone}`,
                text: personalInfo.phone,
              },
              { icon: MapPin, href: null, text: personalInfo.location },
              { icon: Linkedin, href: personalInfo.linkedin, text: "LinkedIn" },
            ].map((item, idx) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  whileHover={{ scale: 1.1, x: 5 }}
                  className="flex items-center gap-2 text-muted-foreground hover:text-[#335c67] transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.text}</span>
                </motion.div>
              );

              return item.href ? (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {content}
                </a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
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
          ].map((stat, idx) => {
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

        {/* Core Skills Preview */}
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

        {/* Featured Projects Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#335c67]">
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
      </div>
    </main>
  );
}
