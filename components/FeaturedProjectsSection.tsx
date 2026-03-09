'use client'

import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Mobile app design',
    subtext: 'for a cross-platform solution',
    tags: ['UI/UX', 'Design', 'Android'],
    bgColor: 'bg-gradient-to-br from-gray-200 to-gray-400', // Placeholder for image bg
    imagePlaceholder: '📱 👨‍🚀'
  },
  {
    id: 2,
    title: 'Food delivery platform',
    subtext: 'revolutionizing ordering',
    tags: ['Web App', 'Development', 'React'],
    bgColor: 'bg-[#98D22C]', // Placeholder for burger bg
    imagePlaceholder: '🍔'
  },
  {
    id: 3,
    title: 'Fintech dashboard',
    subtext: 'for modern banking',
    tags: ['Dashboard', 'UX/UI', 'Finance'],
    bgColor: 'bg-gray-800',
    imagePlaceholder: '💳'
  }
]

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="relative bg-[#F5F5F7] dark:bg-gray-950 py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative items-start">
        
        {/* Left Side: Sticky Content */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start flex flex-col gap-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
            Featured<br />projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-sm">
            Explore a selection of projects blending creativity with practical design
          </p>
          <div>
            <button className="border border-black dark:border-white rounded-full px-8 py-3 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 mt-4 flex items-center gap-2">
              All Works ↗
            </button>
          </div>
        </div>

        {/* Right Side: Scrolling Cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-16 md:gap-24">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-6 group cursor-pointer">
              {/* Image Container */}
              <div className={`w-full aspect-video rounded-[2rem] ${project.bgColor} overflow-hidden flex items-center justify-center relative transition-transform duration-500 group-hover:scale-[0.98]`}>
                <span className="text-8xl mix-blend-overlay opacity-50">{project.imagePlaceholder}</span>
                
                {/* Floating Tags inside image top left */}
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Title Text */}
              <div>
                <h3 className="text-3xl md:text-4xl text-gray-500 dark:text-gray-400 font-medium">
                  <span className="text-black dark:text-white font-bold">{project.title}</span> {project.subtext}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
