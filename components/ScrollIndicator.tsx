'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const ScrollIndicator = () => {
  const rotation = useMotionValue(0)
  const springRotation = useSpring(rotation, { stiffness: 50, damping: 20 })
  const lastScrollRef = useRef(0)
  const currentRotationRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollRef.current
      
      // Determine direction and update rotation
      if (scrollDelta > 0) {
        // Scrolling down - rotate clockwise (positive)
        currentRotationRef.current += scrollDelta * 0.1
      } else if (scrollDelta < 0) {
        // Scrolling up - rotate anticlockwise (negative)
        currentRotationRef.current += scrollDelta * 0.1
      }
      
      rotation.set(currentRotationRef.current)
      lastScrollRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [rotation])

  return (
    <div className="flex justify-center md:justify-start">
      <motion.div
        style={{ rotate: springRotation }}
        className="relative w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center"
      >
        {/* Text around circle using SVG */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 128 128" style={{ transform: 'rotate(-90deg)' }}>
            <defs>
              <path
                id="circle-path-indicator"
                d="M 64 64 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0"
              />
            </defs>
            <text
              className="text-xs fill-white font-bold"
              fontSize="10"
            >
              <textPath href="#circle-path-indicator" startOffset="0%">
                SCROLL FOR MORE • SCROLL FOR MORE • SCROLL FOR MORE •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center 3D element placeholder */}
        <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg transform rotate-45 shadow-lg">
          <div className="w-full h-full bg-gradient-to-tr from-transparent to-white/20 rounded-lg"></div>
        </div>
      </motion.div>
    </div>
  )
}

export default ScrollIndicator

