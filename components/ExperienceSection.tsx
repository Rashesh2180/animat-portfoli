'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const experiences = [
  {
    id: 1,
    role: "Frontend developer",
    company: "OliX Lab",
    date: "2025 — Present",
    description: ""
  },
  {
    id: 2,
    role: "Frontend developer",
    company: "Sacesta Technology",
    date: "2024-2025",
    description: "I work with web design and developement with reusable components and best practices of code with react js and next js."
  },
  {
    id: 3,
    role: "Web Designer",
    company: "Sacesta Technology",
    date: "2023 — 2024",
    description: "I started my journey as a web designer, i work with responsive design with common class practice,pixel perfect design and animation and i also workwith 3d design."
  }
]

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Grow the custom timeline line based on scroll
  const lineScaleY = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  return (
    <section id="experience" ref={containerRef} className="bg-[#EAEAEA] dark:bg-gray-950 py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-20 text-center"
        >
          My Experience
        </motion.h2>

        <div className="relative w-full">
          {/* Animated Timeline Line */}
          <motion.div
            style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
            className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-yellow via-neon-lime to-transparent"
          />

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-[16px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-2 border-neon-yellow z-10 group-hover:bg-neon-yellow transition-colors duration-300" />

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12" />

                  {/* Content Card */}
                  <div className={`w-full pl-16 md:pl-0 md:w-5/12 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-white dark:bg-[#111111] shadow-sm dark:shadow-none border border-black/5 dark:border-white/5 rounded-3xl p-8 hover:border-black/20 dark:hover:border-white/20 transition-colors duration-500 relative overflow-hidden">
                      {/* Subtle hover glow effect */}
                      <div className="absolute inset-0 bg-neon-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <span className="inline-block px-4 py-1 rounded-full bg-black/5 dark:bg-white/5 text-neon-yellow text-sm font-semibold mb-4">
                          {exp.date}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <h4 className="text-xl text-gray-500 dark:text-gray-400 mb-6">
                          {exp.company}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-500 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
