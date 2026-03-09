'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollRevealTextProps {
  text: string
  className?: string
}

export default function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.2"]
  })

  const words = text.split(" ")

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        
        // Use a function component to properly use hooks inside the map
        const WordComponent = () => {
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
          const color = useTransform(
            scrollYProgress,
            [start, end],
            ["#4B5563", "#FFFFFF"] // gray-600 to white
          )

          return (
            <motion.span
              style={{ opacity, color }}
              className="mr-2 mb-2 lg:mr-3 lg:mb-3"
            >
              {word}
            </motion.span>
          )
        }

        return <WordComponent key={i} />
      })}
    </p>
  )
}
