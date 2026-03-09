'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const MenuItem = ({ item, index, onClose }: { item: string; index: number; onClose: () => void }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={`#${item.toLowerCase()}`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ 
        delay: index * 0.1 + 0.2,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClose}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white hover:text-neon-yellow transition-colors duration-300 cursor-pointer relative overflow-hidden"
      style={{ minHeight: '1.2em' }}
    >
      <span className="flex items-center relative">
        <span className="mr-4 text-2xl md:text-3xl">+</span>
        <span className="relative inline-block overflow-hidden">
          {/* Default layer - moves up on hover */}
          <motion.span
            className="inline-block"
            animate={{
              y: isHovered ? -40 : 0,
              opacity: isHovered ? 0 : 1
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {item.split('').map((char, charIndex) => (
              <motion.span
                key={`default-${charIndex}`}
                animate={{
                  y: isHovered ? -40 : 0,
                  opacity: isHovered ? 0 : 1
                }}
                transition={{
                  duration: 0.4,
                  delay: charIndex * 0.04,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
          {/* Hover layer - slides up from bottom */}
          <motion.span
            className="absolute left-0 top-0 inline-block"
            animate={{
              y: isHovered ? 0 : 40,
              opacity: isHovered ? 1 : 0
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{ pointerEvents: 'none' }}
          >
            {item.split('').map((char, charIndex) => (
              <motion.span
                key={`hover-${charIndex}`}
                initial={{ y: 40, opacity: 0 }}
                animate={{
                  y: isHovered ? 0 : 40,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{
                  duration: 0.4,
                  delay: charIndex * 0.04,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="inline-block"
                style={{ willChange: 'transform' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
        </span>
      </span>
    </motion.a>
  )
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const menuItems = ['Home', 'About', 'Skills', 'Tools', 'Projects', 'Experience']

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          />

          {/* White Content Block - Like in image */}
          <motion.div
            initial={{ 
              scale: 0.9,
              opacity: 0,
              y: 50
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
              y: 0
            }}
            exit={{ 
              scale: 0.9,
              opacity: 0,
              y: 50,
              transition: { 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              mass: 0.8
            }}
            className="fixed inset-4 md:inset-8 lg:inset-12 bg-[#111111] rounded-3xl z-50 flex flex-col px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16 shadow-2xl transition-colors duration-300"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Menu Items */}
            <nav className="flex flex-col gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12">
              {menuItems.map((item, index) => (
                <MenuItem 
                  key={item}
                  item={item}
                  index={index}
                  onClose={onClose}
                />
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Menu

