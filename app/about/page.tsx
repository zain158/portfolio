"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Zap, Target, Users, Rocket, Layers } from "lucide-react";
import { personalInfo, skills, education } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skillCategories = [
  { icon: Code, title: "Frontend", skills: ["React", "Next.js", "Remix", "TypeScript"], color: "from-[#335c67]/20 to-[#335c67]/5" },
  { icon: Database, title: "Backend", skills: ["Node.js", "Express.js", "MongoDB"], color: "from-[#335c67]/20 to-[#ddb892]/10" },
  { icon: Zap, title: "Performance", skills: ["SEO Optimization", "Dynamic UIs"], color: "from-[#ddb892]/20 to-[#335c67]/10" },
];

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#335c67]/5 via-transparent to-[#ddb892]/5 dark:from-[#335c67]/15 dark:via-transparent dark:to-[#ddb892]/15 transition-colors duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-[#335c67] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {personalInfo.title}
          </motion.p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Professional Summary</h2>
              </motion.div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {personalInfo.summary}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          >
            <Code className="w-10 h-10 text-primary" />
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group"
                >
                  <div className={`bg-gradient-to-br ${category.color} border border-border rounded-2xl p-8 shadow-lg h-full`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-[#335c67] flex items-center justify-center mb-6"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.skills.map((skill) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="text-muted-foreground flex items-center gap-3"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="w-2 h-2 bg-[#335c67] rounded-full"
                          />
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Layers className="w-8 h-8 text-primary" />
              All Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-xl text-sm font-semibold border border-primary/20 shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3 text-[#335c67]"
          >
            <Rocket className="w-10 h-10 text-[#335c67]" />
            Education
          </motion.h2>
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-10 shadow-xl mb-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
