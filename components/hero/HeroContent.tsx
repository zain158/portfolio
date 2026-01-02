"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export function HeroContent() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-20">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left flex-1 max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative mt-8 md:mt-12"
        >
          <span className="block bg-gradient-to-r from-[#335c67] via-[#4a7c8a] to-[#335c67] dark:from-[#6ba8b5] dark:via-[#5a9caa] dark:to-[#6ba8b5] bg-clip-text text-transparent mt-4 mb-2 transition-colors duration-500">
            MERN STACK
          </span>
          <span className="block text-[#335c67] dark:text-[#6ba8b5] cursor-default relative transition-colors duration-500">
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#ddb892] to-[#335c67] opacity-0 blur-xl pointer-events-none"
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
          </span>
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

        {/* Buttons */}
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
            {
              icon: Linkedin,
              href: personalInfo.linkedin,
              text: "LinkedIn",
            },
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

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="flex-shrink-0 w-full lg:w-auto mt-8 md:mt-12"
      >
        <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] mx-auto lg:mx-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#335c67]/20 dark:border-[#6ba8b5]/30">
            <Image
              src="/bannerpic/WhatsApp Image 2025-06-23 at 12.17.50 AM.jpeg"
              alt="Zain Ali Malik - MERN Stack Developer"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#335c67]/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

