"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Send, MessageCircle, Zap } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "@/lib/data";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "from-[#335c67]/20 to-[#335c67]/5",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "from-[#335c67]/20 to-[#ddb892]/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: personalInfo.linkedin,
    color: "from-[#335c67]/20 to-[#ddb892]/10",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

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
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-[#335c67] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#335c67]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
                  <Zap className="w-8 h-8 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500" />
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    
                    if (info.href) {
                      return (
                        <motion.a
                          key={index}
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.05, x: 10 }}
                          className="block"
                        >
                          <div className={`flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br ${info.color} border border-border hover:border-[#335c67]/50 transition-all group`}>
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className="w-12 h-12 rounded-xl bg-[#335c67]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#335c67]/20"
                            >
                              <Icon className="w-6 h-6 text-[#335c67]" />
                            </motion.div>
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                              <p className="text-foreground font-semibold group-hover:text-[#335c67] transition-colors">
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </motion.a>
                      );
                    }
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className={`flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br ${info.color} border border-border cursor-default`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#335c67]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#335c67]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="text-foreground font-semibold">{info.value}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#335c67]/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond to emails within 24 hours. For urgent matters, feel free to call me directly.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#335c67]/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500">
                <Send className="w-8 h-8 text-[#335c67] dark:text-[#6ba8b5] transition-colors duration-500" />
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-semibold mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={field.placeholder}
                      required
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#335c67] text-white rounded-xl font-semibold shadow-lg shadow-[#335c67]/30 hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
