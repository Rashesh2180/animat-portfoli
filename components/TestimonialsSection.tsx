'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const devProjects = [
  {
    id: 1,
    projectName: 'Taylor Morrison',
    role: 'Web Development',
    icon: '🏠',
    tech: 'React.js',
    description: 'This is very big level project of USA Property dealing. User can see area of plot in map and check price, sq meter. In this project have lots of data manage and integration.',
    projectLink: 'https://www.taylormorrison.com/'
  },
  {
    id: 2,
    projectName: 'Mayuri Sharma',
    role: 'Frontend Engineering and design',
    icon: '🧘‍♀️',
    tech: 'Next.js',
    description: 'I work with responsive design and role base access control. and also animation and design. In this project admin can add mediatation program and use can book schedule.',
    projectLink: "https://mayurisharma.nl/"
  },
  {
    id: 3,
    projectName: 'Pest Control Services',
    role: 'CMS Integration',
    icon: '🛡️',
    tech: 'Prismic CMS',
    description: 'Created a dynamic website for a pest control business utilizing Prismic CMS for effortless content management by the client.',
    projectLink: 'https://sspestcontrol.com.au/'
  },
  {
    id: 4,
    projectName: 'Myax',
    role: '',
    icon: '✨',
    tech: 'Tailwind CSS,Next js',
    description: 'Designed and developed, w3 wallent integrate.and user can generate any desig by add promt.',
    projectLink: 'https://www.myax.me/'
  },
  {
    id: 5,
    projectName: 'Enterprise CRM Platform',
    role: 'Front end development',
    icon: '📊',
    tech: 'Next.js',
    description: 'I work in this crm like Jira, team leadercan assign work to developer and after completed task so developer can submitted and after Team leader can done. and also team leader and manager can see perfomance of developer by chart.',
    projectLink: '#'
  }

]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % devProjects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + devProjects.length) % devProjects.length)
  }

  // Next index for the partially visible right card
  const nextIndex = (currentIndex + 1) % devProjects.length

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
    <section id="development" className="bg-[#F5F5F7] dark:bg-gray-950 py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8">

        {/* Left Side: Title & Info */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
              My<br />development<br />projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-12 max-w-sm">
              Explore a detailed selection of web applications and platforms I have built using modern technologies and rigorous development practices.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-4xl font-black text-black dark:text-white mb-2">Success</h3>
            <div className="flex items-center gap-2">
              <span className="text-black dark:text-white font-bold">100% Delivered</span>
              <div className="flex text-neon-yellow">
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
                  {devProjects[currentIndex].icon}
                </div>
                <div className="text-gray-500 font-bold flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  {devProjects[currentIndex].tech}
                </div>
              </div>

              <div className="flex-1">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {devProjects[currentIndex].description}
                </p>
                <a href={devProjects[currentIndex].projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex border border-black/20 dark:border-gray-600 rounded-full px-6 py-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition items-center gap-2">
                  Live Project ↗
                </a>
              </div>

              <div className="mt-8">
                <h4 className="text-2xl font-bold text-black dark:text-white">{devProjects[currentIndex].projectName}</h4>
                <p className="text-gray-500">{devProjects[currentIndex].role}</p>
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
                  {devProjects[nextIndex].icon}
                </div>
              </div>
              <div className="mt-auto">
                <h4 className="text-2xl font-bold text-black dark:text-white">{devProjects[nextIndex].projectName}</h4>
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
              aria-label="Previous project"
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
              aria-label="Next project"
            >
              →
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  )
}
