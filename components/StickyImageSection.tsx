'use client'

import React from 'react'
import { motion } from 'framer-motion'

const StickyImageSection = () => {
  return (
    <section className="relative">
      {/* Sticky Background Container */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        {/* Background Image - Fixed in position */}
        <div className="absolute inset-0 w-full h-full">
          {/* Placeholder image - Replace this with your actual image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Placeholder content - replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg">Your image will appear here</p>
                  <p className="text-sm mt-2 text-white/30">Replace the placeholder with your image</p>
                </div>
              </div>
            </div>
          </div>
          {/* To use an actual image, uncomment and replace src: */}
          {/* <img 
            src="/your-image.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Content Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Creative Design
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Experience innovative design and cutting-edge development. Our portfolio showcases 
                the best in digital creativity, combining aesthetic beauty with functional excellence.
              </p>
            </motion.div>

            {/* Content Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Innovation First
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We push boundaries and explore new possibilities in every project. Our approach 
                combines creativity with technology to deliver exceptional digital experiences.
              </p>
            </motion.div>

            {/* Content Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Future Forward
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Building tomorrow's digital landscape today. We create solutions that are not just 
                current, but ahead of the curve, setting new standards in design and development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickyImageSection

