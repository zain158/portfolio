"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { personalInfo, experience, education, projects, skills } from "@/lib/data";
import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { CVPDFDocument } from "@/components/cv-pdf";

export default function CV() {
  const [isGenerating, setIsGenerating] = useState(false);


  const handleDownloadPDF = async () => {
    if (isGenerating) return;

    setIsGenerating(true);
    try {
      // Generate PDF using react-pdf
      const blob = await pdf(<CVPDFDocument />).toBlob();
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Zain_Ali_Malik_Blue_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(`Failed to generate PDF: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsGenerating(false);
    }
  };


  return (
    <main className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#335c67]/10 via-transparent to-[#ddb892]/10 dark:from-[#335c67]/20 dark:via-transparent dark:to-[#ddb892]/20 transition-colors duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] transition-opacity duration-500" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CV Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 print:shadow-none relative"
        >
          {/* Download PDF Button - Positioned in top-right corner */}
          <motion.button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            whileHover={{ scale: isGenerating ? 1 : 1.05, y: -2 }}
            whileTap={{ scale: isGenerating ? 1 : 0.98 }}
            className="absolute top-4 right-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#ddb892] dark:bg-[#6ba8b5] text-[#335c67] dark:text-[#1a1a1a] rounded-xl font-semibold shadow-lg shadow-[#ddb892]/30 dark:shadow-[#6ba8b5]/30 hover:shadow-xl hover:shadow-[#ddb892]/40 dark:hover:shadow-[#6ba8b5]/40 border-2 border-[#ddb892] dark:border-[#6ba8b5] hover:bg-[#ddb892]/90 dark:hover:bg-[#5a9caa] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed z-10 backdrop-blur-sm"
          >
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">{isGenerating ? "Generating..." : "Download PDF"}</span>
          </motion.button>
          {/* Header */}
          <div className="mb-8 pb-6 border-b-2 border-[#335c67]">
            <h1 className="text-4xl md:text-5xl font-bold text-[#335c67] dark:text-[#6ba8b5] mb-3 transition-colors duration-500">
              {personalInfo.name.toUpperCase()}
            </h1>
            <p className="text-lg text-gray-600 mb-5">{personalInfo.title}</p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
              <div>Email: {personalInfo.email}</div>
              <div>Phone: {personalInfo.phone}</div>
              <div>Location: {personalInfo.location}</div>
              <div>LinkedIn: {personalInfo.linkedin}</div>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#335c67] dark:text-[#ddb892] mb-3 uppercase tracking-wide transition-colors duration-500">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">{personalInfo.summary}</p>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#335c67] mb-4 uppercase tracking-wide">
              PROFESSIONAL EXPERIENCE
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="mb-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#335c67] dark:text-[#ddb892] transition-colors duration-500">
                    {exp.position} - {exp.company}
                  </h3>
                  <span className="text-sm text-gray-600">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-700 ml-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-sm">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#335c67] mb-4 uppercase tracking-wide">
              EDUCATION
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="mb-3">
                <h3 className="text-lg font-semibold text-[#335c67]">{edu.degree}</h3>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-sm text-gray-600">{edu.period}</p>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#335c67] mb-4 uppercase tracking-wide">
              PROJECTS
            </h2>
            <div className="space-y-3">
              {projects.map((project, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-[#335c67] dark:text-[#ddb892] transition-colors duration-500">{project.name}:</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {project.url}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#335c67] mb-4 uppercase tracking-wide">
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-gray-700 text-sm"
                >
                  {skill}{idx < skills.length - 1 ? ', ' : ''}
                </span>
              ))}
            </div>
          </section>

          {/* Internships */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-[#335c67] mb-4 uppercase tracking-wide">
              INTERNSHIPS
            </h2>
            <p className="text-gray-700">Not specified</p>
          </section>

          {/* Extra-curricular Activities */}
          <section>
            <h2 className="text-xl font-bold text-[#335c67] mb-4 uppercase tracking-wide">
              EXTRA-CURRICULAR ACTIVITIES
            </h2>
            <p className="text-gray-700">Not specified</p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}

