'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Mozilla', icon: 'M13.5 1h-2v3h-4V1h-2v3h-2v4h-2v6h2v4h12v-4h2V8h-2V4h-2V1zm0 13h-8v-2h8v2zm0-4h-8V8h8v2z' },
  { name: 'Envato', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z' },
  { name: 'Behance', icon: 'M22 6h-6V4h-4v2H6v2h16V6zm-8 4v2h-4v-2h4zm-6 4v2h12v-2H8z' },
  { name: 'Dribbble', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
  { name: 'Codeninja', icon: 'M5 12l5 5 5-5m-5-5v10' },
  { name: 'Udemy', icon: 'M12 2L2 22h20L12 2z' },
  { name: 'Angular', icon: 'M12 2L2 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-10-4zm0 2.18l8 3.2v4.62c0 4.54-2.85 8.76-7 10-4.15-1.24-7-5.46-7-10V7.38l6-3.2z' },
  { name: 'Ghost', icon: 'M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const SkillsSection = () => {
  return (
    <section id="tools" className="bg-[#EAEAEA] dark:bg-gray-950 py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-neon-yellow font-bold uppercase tracking-wider mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">Trust & Tools</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-[#1A1A1A] shadow-sm dark:shadow-none rounded-2xl aspect-[4/3] flex flex-col items-center justify-center p-6 border border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/10 transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="text-xl md:text-2xl font-bold text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white flex items-center gap-2">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={skill.icon} />
                  </svg>
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
