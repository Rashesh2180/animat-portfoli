'use client'

import React from 'react'
import { motion } from 'framer-motion'

const tools = [
  {
    name: 'Claude',
    description: 'Advanced AI assistance for complex logic, reasoning, and pair programming.',
    icon: '🧠'
  },
  {
    name: 'Cursor',
    description: 'AI-first code editor used for rapid development and on-the-fly refactoring.',
    icon: '⚡'
  },
  {
    name: 'Antigravity',
    description: 'Powerful agentic AI coding assistant utilized for comprehensive feature generation.',
    icon: '🚀'
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
}

export default function AiToolsSection() {
  return (
    <section id="tools" className="bg-gray-950 py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <span className="text-neon-yellow font-bold uppercase tracking-wider mb-4 block text-sm">Powered by modern tech</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Fast Development with AI
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Design and content is completely managed by myself, while leveraging state-of-the-art AI tools to ship robust, responsive, and animated user interfaces rapidly.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-[#111111] p-8 md:p-10 rounded-[2rem] border border-white/5 hover:border-neon-yellow/30 transition-colors duration-500 group flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-neon-yellow/10">
                {tool.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-yellow transition-colors duration-300">
                {tool.name}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
