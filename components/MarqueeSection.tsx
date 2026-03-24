'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Use Spring for smooth scroll velocity tracking
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Combine automatic infinite scrolling with scroll position
  // 1. Animate from 0 to -50% infinitely
  // 2. Add an extra offset based on user scrolling
  return (
    <section 
      ref={containerRef} 
      className="bg-gray-950 py-12 md:py-24 overflow-hidden flex items-center border-y border-white/5 relative z-10 w-full"
    >
      <div className="flex w-[200vw] relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex min-w-[200vw] items-center whitespace-nowrap"
        >
          {/* Scroll boost layer */}
          <motion.div 
            style={{ x: useTransform(smoothScroll, [0, 1], ["0%", "-20%"]) }}
            className="flex min-w-full items-center justify-around"
          >
            {/* First Block */}
            <div className="flex items-center">
              <span className="text-5xl md:text-7xl lg:text-9xl font-black text-white/20 px-8 flex items-center gap-8">
                <span className="text-4xl md:text-6xl lg:text-8xl">✦</span> Web Development 
                <span className="text-4xl md:text-6xl lg:text-8xl">✦</span> Web Design
              </span>
            </div>
            {/* Second Block (Duplicate) */}
            <div className="flex items-center">
               <span className="text-5xl md:text-7xl lg:text-9xl font-black text-white/20 px-8 flex items-center gap-8">
                <span className="text-4xl md:text-6xl lg:text-8xl">✦</span> Web Development 
                <span className="text-4xl md:text-6xl lg:text-8xl">✦</span> Web Design
              </span>
            </div>
            {/* Third Block (Duplicate for safety) */}
             <div className="flex items-center">
               <span className="text-5xl md:text-7xl lg:text-9xl font-black text-white/20 px-8 flex items-center gap-8">
                <span className="text-4xl md:text-6xl lg:text-8xl">✦</span> Web Development 
                <span className="text-4xl md:text-6xl lg:text-8xl">✦</span> Web Design
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MarqueeSection
