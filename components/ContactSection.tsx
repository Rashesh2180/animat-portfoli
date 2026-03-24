'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#EAEAEA] dark:bg-gray-950 py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 border-t border-black/5 dark:border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-neon-yellow font-bold uppercase tracking-wider mb-4 block text-sm">Get in Touch</span>
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white mb-6">Contact Me</h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {/* Mobile */}
          <a href="tel:+8780927870" className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-black/5 dark:border-white/5 hover:border-neon-yellow/50 dark:hover:border-neon-yellow/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-neon-yellow/10 transition-transform duration-300">
              📱
            </div>
            <h3 className="text-black dark:text-white text-2xl font-bold mb-3">Mobile</h3>
            <p className="text-gray-500 dark:text-gray-400 group-hover:text-neon-yellow transition-colors duration-300">+91 8780927870</p>
          </a>

          {/* Email */}
          <a href="mailto:rasheshdarji2180@gmail.com" className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-black/5 dark:border-white/5 hover:border-neon-yellow/50 dark:hover:border-neon-yellow/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-neon-yellow/10 transition-transform duration-300">
              ✉️
            </div>
            <h3 className="text-black dark:text-white text-2xl font-bold mb-3">Email</h3>
            <p className="text-gray-500 dark:text-gray-400 group-hover:text-neon-yellow transition-colors duration-300">rasheshdarji2180@gmail.com</p>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/rashesh-motivala-44571716a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-black/5 dark:border-white/5 hover:border-neon-yellow/50 dark:hover:border-neon-yellow/50 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-neon-yellow/10 transition-transform duration-300">
              💼
            </div>
            <h3 className="text-black dark:text-white text-2xl font-bold mb-3">LinkedIn</h3>
            <p className="text-gray-500 dark:text-gray-400 group-hover:text-neon-yellow transition-colors duration-300">linkedin.com/in/yourprofile</p>
          </a>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-neon-yellow/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-neon-yellow/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  )
}
