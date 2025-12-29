"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { experience } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export default function Experience() {
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
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-[#335c67] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-[#335c67]"
          >
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            My professional journey and achievements
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative mb-16"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#335c67] to-transparent"
                />
              )}

              <div className="flex gap-8">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  className="flex-shrink-0 relative"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#335c67] flex items-center justify-center border-4 border-background shadow-xl">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-[#335c67]/20 blur-xl -z-10"
                  />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex-1 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl relative overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#335c67]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <motion.h3
                          whileHover={{ x: 5 }}
                          className="text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                        >
                          {exp.position}
                        </motion.h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-semibold text-foreground">
                            {exp.company}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.2 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0 px-4 py-2 bg-[#335c67]/10 rounded-lg border border-[#335c67]/20"
                      >
                        <Calendar className="w-4 h-4 text-[#335c67]" />
                        <span>{exp.period}</span>
                      </motion.div>
                    </div>

                    <ul className="space-y-4">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-4 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            className="w-6 h-6 rounded-full bg-[#335c67]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#335c67]/30 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#335c67]" />
                          </motion.div>
                          <span className="text-muted-foreground leading-relaxed flex-1">
                            {responsibility}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 border border-[#335c67]/20 rounded-2xl p-10 shadow-xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#335c67]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <Rocket className="w-12 h-12 text-[#335c67]" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                I am always open to discussing new opportunities and interesting
                projects.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#335c67] text-white rounded-xl font-semibold shadow-lg shadow-[#335c67]/30 hover:shadow-xl transition-all"
              >
                Get In Touch
                <TrendingUp className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
