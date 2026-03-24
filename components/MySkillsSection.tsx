'use client'

import React from 'react'
import { motion } from 'framer-motion'

const mySkills = [
  {
    id: 1,
    title: "Web Design",
    description: "I have skill with design html,css,tailwind,material ui,framer moion.",
    icon: "🎨"
  },
  {
    id: 2,
    title: "Frontend Engineering",
    description: "Building responsive, highly-animated web applications utilizing React, Next.js, and Framer Motion.",
    icon: "💻"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
}

export default function MySkillsSection() {
  return (
    <section id="skills" className="bg-gray-950 py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-neon-yellow font-bold uppercase tracking-wider mb-4 block text-sm">What I Do</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            My Skills
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        >
          {mySkills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              className="bg-[#111111] p-10 md:p-12 rounded-[2rem] border border-white/5 hover:border-neon-yellow/30 transition-colors duration-500 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-neon-yellow/10">
                {skill.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-neon-yellow transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
