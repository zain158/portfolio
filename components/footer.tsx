"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#335c67]/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#335c67]">
              Zain Ali Malik
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-Stack Developer specializing in MERN stack, Next.js, and Remix. Crafting high-performance, scalable web applications.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Experience", href: "/experience" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-[#335c67] transition-colors inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-[#335c67] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-[#335c67] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-[#335c67] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border text-center text-sm text-muted-foreground flex items-center justify-center gap-2"
        >
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#335c67]"
          >
            <Heart className="w-4 h-4 fill-current" />
          </motion.span>
        </motion.div>
      </div>
    </footer>
  );
}
