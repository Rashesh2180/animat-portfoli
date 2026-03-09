'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SayHelloButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const text = "Say Hello"

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-black text-white flex items-center justify-center gap-2 border border-white/10 hover:shadow-lg transition-all duration-300"
      aria-label="Say Hello"
    >
      {/* Text - visible on desktop, hidden on mobile/responsive */}
      <span className="hidden md:flex overflow-hidden h-6">
        {text.split('').map((char, index) => (
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
            className="inline-block text-sm md:text-base font-semibold"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
      
      {/* Icon - always visible (arrow) */}
      <motion.svg
        animate={{ 
          x: isHovered ? 3 : 0,
          y: isHovered ? -3 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-4 h-4 md:w-5 md:h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </motion.svg>
    </motion.button>
  )
}

export default SayHelloButton

