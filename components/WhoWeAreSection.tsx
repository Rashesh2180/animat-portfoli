'use client'

import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollRevealText from './ScrollRevealText'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
}

const skillsList = [
  "Strategic UX/UI Design",
  "Full-Stack Engineering",
  "Interactive Web Animations",
  "Modern Brand Identity"
]

const WhoWeAreSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50])

  return (
    <section id="about" ref={ref} className="relative min-h-screen bg-[#F5F5F7] dark:bg-gray-950 flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 md:py-32 transition-colors duration-300">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side - Title */}
          <motion.div
            style={{ opacity, y }}
            className="lg:col-span-4 flex items-start gap-4"
          >
            <span className="text-black dark:text-white text-2xl mt-2">*</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
              Who we are
            </h2>
          </motion.div>

          {/* Right Side - Description and Button */}
          <motion.div
            style={{ opacity, y }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Description Text */}
            <div className="space-y-4">
              <ScrollRevealText 
                text="We are a creative digital agency"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              />
              <ScrollRevealText 
                text="specializing in innovative design and cutting-edge development."
                className="text-2xl md:text-3xl lg:text-4xl leading-relaxed"
              />
            </div>

            {/* Animated Skills List */}
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="pt-8 space-y-4"
            >
              {skillsList.map((skill, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 backdrop-blur-sm flex items-center gap-6 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default group"
                >
                  <div className="w-12 h-12 rounded-full bg-neon-yellow/10 flex items-center justify-center text-neon-yellow group-hover:bg-neon-yellow group-hover:text-black transition-colors duration-300">
                    <span className="font-bold">0{index + 1}</span>
                  </div>
                  <span className="text-xl md:text-2xl font-semibold text-black dark:text-white">{skill}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Say Hello Button */}
            <motion.button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="px-8 py-4 rounded-full bg-transparent border border-black dark:border-white text-black dark:text-white flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300"
            >
              <span className="flex overflow-hidden h-6">
                {"Say Hello".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={false}
                    animate={{
                      y: isHovered ? [0, -15, 0] : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                    className="inline-block text-lg font-semibold"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
              <motion.svg
                animate={{ 
                  x: isHovered ? 3 : 0,
                  y: isHovered ? -3 : 0
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAreSection

