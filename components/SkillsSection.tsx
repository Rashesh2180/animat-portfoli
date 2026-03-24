'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML5', icon: 'M1.366 0H22.63L19.46 22l-7.46 2-7.46-2L1.366 0zm19.263 1.932H3.37L5.86 19.98l6.14 1.765 6.14-1.765 2.49-18.048zm-4.73 14.15l-3.899 1.05-3.899-1.05-.28-3.14h2.24l.11 1.25 1.829.5 1.829-.5.18-2.02H7.21l-.54-6.3h9.61l-.16 1.85h-7.39l.21 2.39h7.17l-.42 5.97z' },
  { name: 'CSS3', icon: 'M1.5 0h21l-1.91 21.563L12 24l-8.564-2.438L1.5 0zm17 3H5.5l.5 6.5h10l-.5 5.5-3.5 1-3.5-1-.25-3H6l.5 6 5.5 1.5 5.5-1.5 1-12.5H6.5l-.25-2.5h11l-.25-2.5z' },
  { name: 'JavaScript', icon: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.81.39.045 1.2.315 1.726.69l.81-1.965c-.63-.48-1.545-.795-2.61-.84-2.07-.09-3.9 1.155-4.275 3.03-.435 2.145 1.635 3.255 3.165 3.885.81.33 1.545.69 1.62 1.335.06.495-.21 1.05-1.02 1.2-1.05.21-2.025-.39-2.58-.87l-.93 1.83c.96.885 2.4 1.38 3.795 1.38 2.22-.015 3.99-1.275 4.14-3.165-.015-.015-.03-.225-.03-.225zM11.97 19.32c-.525.465-1.29.66-2.07.66-1.125 0-2.31-.405-3.015-1.14l.735-1.74c.48.435 1.23.825 1.95.825.9 0 1.23-.315 1.23-.735V8.13h2.46v9.06c0 2.235-1.665 3.255-3.21 3.255-1.035 0-2.34-.33-3.21-1.14l.87-1.89c.645.54 1.395.87 2.19.87.585 0 1.035-.15 1.29-.405v-1.14c.03.015.03.03.03.03z' },
  { name: 'TypeScript', icon: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM13.2 11.235h4.632v1.545h-1.545v7.695h-1.53v-7.695h-1.557v-1.545zM7.288 12.37c1.397 0 2.215.353 2.91.802l-.74 1.258c-.52-.338-1.12-.592-1.996-.592-.93 0-1.425.466-1.425 1.05 0 .633.565.94 1.706 1.353 1.557.575 2.585 1.162 2.585 2.65 0 1.53-1.096 2.57-3.036 2.57-1.47 0-2.525-.494-3.26-.977l.79-1.298c.617.41 1.514.888 2.54.888 1.16 0 1.482-.606 1.482-1.076 0-.663-.44-1.023-1.85-1.544-1.455-.536-2.443-1.216-2.443-2.556 0-1.53 1.15-2.525 2.737-2.525z' },
  { name: 'React', icon: 'M11.955 2.115C4.7 2.115 1.5 6.885 1.5 12s3.2 9.885 10.455 9.885S22.5 17.115 22.5 12 19.21 2.115 11.955 2.115zM12 4.115c5.385 0 8.455 3.51 8.455 7.885 0 4.375-3.07 7.885-8.455 7.885S3.545 16.375 3.545 12c0-4.375 3.07-7.885 8.455-7.885zm0 2.76A4.125 4.125 0 1 0 12 15.125a4.125 4.125 0 0 0 0-8.25zm0 1.95a2.175 2.175 0 1 1 0 4.35 2.175 2.175 0 0 1 0-4.35z' },
  { name: 'Next.js', icon: 'M12 22.028c5.525 0 10.028-4.503 10.028-10.028 0-5.525-4.503-10.028-10.028-10.028C6.475 2 1.972 6.503 1.972 12c0 5.525 4.503 10.028 10.028 10.028zm-2.024-5.694l-3.328-5.74V15.75H5.405V8.16h1.564l4.8 7.352 1.528 2.378-1.554.444-1.745-1.026zm6.816-4.516L19 15.75h-1.393l-1.632-2.608-1.63 2.608H12.9l2.257-3.66-2.193-3.65h1.364L15.9 10.875l1.507-2.433h1.353l-2.17 3.475z' }
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
    <section id="skills" className="bg-[#EAEAEA] dark:bg-gray-950 py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-neon-yellow font-bold uppercase tracking-wider mb-2 block">My Technologies</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">Skills</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
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
