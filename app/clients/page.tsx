"use client";

import { motion } from "framer-motion";
import { Star, Quote, Briefcase, DollarSign, Calendar, CheckCircle, Users } from "lucide-react";
import { clientReviews, projectBudgets, totalProjectsStats } from "@/lib/data";

export default function Clients() {
  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#335c67]/10 via-transparent to-[#ddb892]/10 dark:from-[#335c67]/20 dark:via-transparent dark:to-[#ddb892]/20 transition-colors duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#335c67] dark:text-[#6ba8b5] mb-4 transition-colors duration-500">
            Client Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me and the projects we've built together
          </p>
        </motion.div>

        {/* Total Projects Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 dark:from-[#6ba8b5]/20 dark:to-[#e8c9a0]/20 backdrop-blur-sm border-2 border-[#335c67]/20 dark:border-[#6ba8b5]/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-colors duration-500"
          >
            <Briefcase className="w-8 h-8 mx-auto mb-3 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500" />
            <div className="text-3xl font-bold mb-1 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
              {totalProjectsStats.totalProjects}
            </div>
            <div className="text-sm text-muted-foreground font-medium">Total Projects</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 dark:from-[#6ba8b5]/20 dark:to-[#e8c9a0]/20 backdrop-blur-sm border-2 border-[#335c67]/20 dark:border-[#6ba8b5]/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-colors duration-500"
          >
            <DollarSign className="w-8 h-8 mx-auto mb-3 text-[#335c67] dark:text-[#818cf8] transition-colors duration-500" />
            <div className="text-3xl font-bold mb-1 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
              {totalProjectsStats.totalBudget}
            </div>
            <div className="text-sm text-muted-foreground font-medium">Total Budget</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 dark:from-[#6ba8b5]/20 dark:to-[#e8c9a0]/20 backdrop-blur-sm border-2 border-[#335c67]/20 dark:border-[#6ba8b5]/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-colors duration-500"
          >
            <DollarSign className="w-8 h-8 mx-auto mb-3 text-[#335c67] dark:text-[#818cf8] transition-colors duration-500" />
            <div className="text-3xl font-bold mb-1 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
              {totalProjectsStats.averageBudget}
            </div>
            <div className="text-sm text-muted-foreground font-medium">Average Budget</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 dark:from-[#6ba8b5]/20 dark:to-[#e8c9a0]/20 backdrop-blur-sm border-2 border-[#335c67]/20 dark:border-[#6ba8b5]/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-colors duration-500"
          >
            <CheckCircle className="w-8 h-8 mx-auto mb-3 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500" />
            <div className="text-3xl font-bold mb-1 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
              {totalProjectsStats.completionRate}
            </div>
            <div className="text-sm text-muted-foreground font-medium">Completion Rate</div>
          </motion.div>
        </motion.div>

        {/* Project Budgets Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
            Project Budgets & Details
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projectBudgets.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[#335c67]/10 to-[#ddb892]/10 dark:from-[#6ba8b5]/20 dark:to-[#e8c9a0]/20 backdrop-blur-sm border-2 border-[#335c67]/20 dark:border-[#6ba8b5]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">{project.projectName}</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-700 rounded-full text-xs font-semibold">
                    {project.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500" />
                    <span className="font-semibold text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">Budget:</span>
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500" />
                    <span className="font-semibold text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">Duration:</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500" />
                    <span className="font-semibold text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">Client:</span>
                    <span className="text-sm">{project.client}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
            What My Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {clientReviews.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-[#335c67]/10 dark:border-[#6ba8b5]/30 relative overflow-hidden transition-colors duration-500"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 dark:opacity-20">
                  <Quote className="w-16 h-16 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#ddb892] text-[#ddb892]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  "{review.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 border-t border-[#335c67]/10 dark:border-[#6ba8b5]/30 pt-4 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-full bg-[#335c67] dark:bg-[#6ba8b5] flex items-center justify-center text-white dark:text-[#1a1a1a] font-bold text-lg transition-colors duration-500">
                    {review.clientAvatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">{review.clientName}</h4>
                    <p className="text-sm text-muted-foreground">
                      {review.clientRole} at {review.clientCompany}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Project: {review.projectName} • {review.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

