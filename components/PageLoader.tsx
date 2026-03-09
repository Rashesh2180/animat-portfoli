'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden'
    
    // Simulate loading progress
    const duration = 2500 // 2.5 seconds total load time
    const intervalTime = 25 // update every 25ms
    const steps = duration / intervalTime
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100)
      
      // Add a little randomness for more natural feel, but ensure it reaches 100
      if (newProgress < 100) {
        setProgress(prev => {
          const next = prev + Math.floor(Math.random() * 3)
          return next > 99 ? 99 : Math.max(prev, next)
        })
      } else {
        setProgress(100)
        clearInterval(timer)
        setTimeout(() => {
          setLoadingComplete(true)
          document.body.style.overflow = '' // Restore scrolling
        }, 300) // Small delay at 100% before fading out
      }
    }, intervalTime)

    return () => {
      clearInterval(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-950 text-white"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-black tabular-nums tracking-tighter"
            >
              {progress}%
            </motion.div>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-1 bg-neon-yellow mt-8 rounded-full"
              style={{ maxWidth: '200px' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
