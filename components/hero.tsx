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
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#335c67]/10 via-transparent to-[#ddb892]/10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

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
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <motion.span
              className="block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mt-4 mb-2 cursor-default"
              whileHover={{
                scale: 1.05,
                x: 10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              MERN STACK
            </motion.span>
            <motion.span
              className="block text-[#335c67] cursor-default"
              whileHover={{
                scale: 1.05,
                x: 10,
                color: "#2a4a52",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#335c67] text-white rounded-xl font-semibold shadow-lg shadow-[#335c67]/30 hover:shadow-xl hover:shadow-[#335c67]/40 transition-all"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.div>
            </Link>
            <Link href="/cv">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ddb892] text-[#335c67] border-2 border-[#ddb892] rounded-xl font-semibold hover:bg-[#ddb892]/90 transition-all shadow-lg"
              >
                <FileText className="w-5 h-5" />
                Show CV
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
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 backdrop-blur-sm border-2 border-[#335c67]/20 rounded-2xl p-6 text-center shadow-lg"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-[#335c67]" />
                <div className="text-3xl font-bold mb-1 text-[#335c67]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
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
          className="bg-gradient-to-br from-[#335c67]/5 to-[#ddb892]/5 backdrop-blur-sm border-2 border-[#335c67]/20 rounded-3xl p-10 shadow-xl mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#335c67]">
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
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-5 py-2.5 bg-[#ddb892] text-[#335c67] rounded-xl text-sm font-semibold border-2 border-[#ddb892] shadow-sm hover:bg-[#ddb892]/90 transition-colors"
              >
                {skill}
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
                className="bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 backdrop-blur-sm border-2 border-[#335c67]/20 rounded-2xl p-6 shadow-lg overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#335c67] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#335c67] group-hover:text-[#335c67]/80 transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#335c67] hover:underline inline-flex items-center gap-1"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#335c67] text-white rounded-xl font-semibold shadow-lg shadow-[#335c67]/30 hover:shadow-xl hover:shadow-[#335c67]/40 transition-all"
              >
                View All Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
