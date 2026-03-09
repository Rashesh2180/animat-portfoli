'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Lea Tomato',
    role: 'Senior designer in The Way',
    image: '👩', // using emoji as placeholder for image
    logo: 'envato',
    text: 'The Rayo team nailed it! They understood our vision and delivered a sleek, intuitive site that our clients love.',
    projectLink: '#'
  },
  {
    id: 2,
    name: 'Ashley Cherry',
    role: 'CEO in Eye Candy',
    image: '👩‍🦰',
    logo: 'dribbble',
    text: 'Their attention to detail and creative approach helped us stand out in a crowded market. Highly recommended!',
    projectLink: '#'
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Founder of TechStart',
    image: '👨',
    logo: 'behance',
    text: 'Working with this team was an absolute pleasure. They delivered beyond our expectations.',
    projectLink: '#'
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Next index for the partially visible right card
  const nextIndex = (currentIndex + 1) % testimonials.length

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2, // Stagger effect
        type: 'spring',
        stiffness: 100
      }
    })
  }

  return (
    <section id="testimonials" className="bg-[#F5F5F7] dark:bg-gray-950 py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8">
        
        {/* Left Side: Title & Info */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
              What our<br />clients say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-12 max-w-sm">
              We're more than just executors — we're your creative partners. Don't just take our word for it, see what clients have to say about working with us.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-4xl font-black text-black dark:text-white mb-2">Clutch</h3>
            <div className="flex items-center gap-2">
              <span className="text-black dark:text-white font-bold">4.9/5.0</span>
              <div className="flex text-red-500">
                ★ ★ ★ ★ ★
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Carousel */}
        <div className="w-full lg:w-2/3 relative">
          <div className="flex gap-6 overflow-hidden h-[450px]">
            
            {/* Active Card */}
            <motion.div 
              key={`active-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full md:w-[60%] lg:w-[60%] shrink-0 bg-white dark:bg-[#111111] shadow-sm dark:shadow-none border border-black/5 dark:border-transparent rounded-3xl p-8 flex flex-col justify-between transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-3xl">
                  {testimonials[currentIndex].image}
                </div>
                <div className="text-gray-500 font-bold flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  {testimonials[currentIndex].logo}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {testimonials[currentIndex].text}
                </p>
                <button className="border border-black/20 dark:border-gray-600 rounded-full px-6 py-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition flex items-center gap-2">
                  Project Page ↗
                </button>
              </div>

              <div className="mt-8">
                <h4 className="text-2xl font-bold text-black dark:text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>

            {/* Next Card (blurred/partial view) */}
            <motion.div 
              key={`next-${nextIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.3, x: 0 }} // Partially visible
              className="hidden md:flex w-[60%] shrink-0 bg-white dark:bg-[#111111] shadow-sm dark:shadow-none border border-black/5 dark:border-transparent rounded-3xl p-8 flex-col justify-between blur-[2px] pointer-events-none transition-colors duration-300"
            >
               <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-3xl">
                  {testimonials[nextIndex].image}
                </div>
              </div>
              <div className="mt-auto">
                <h4 className="text-2xl font-bold text-black dark:text-white">{testimonials[nextIndex].name}</h4>
              </div>
            </motion.div>

          </div>

          {/* Controls - Staggered Bottom to Top */}
          <div className="flex gap-4 mt-8">
            <motion.button
              custom={0}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-black/20 dark:border-gray-600 flex items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
              aria-label="Previous testimonial"
            >
              ←
            </motion.button>
            <motion.button
              custom={1}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-black/20 dark:border-gray-600 flex items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
              aria-label="Next testimonial"
            >
              →
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  )
}
