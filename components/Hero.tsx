"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState(2000);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 px-6 md:px-12 bg-gray-950 transition-colors duration-300">
      {/* Main Hero Text */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-2 flex-wrap">
            {/* Yellow pill with scrolling text */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              className="px-6 py-2 md:py-4 bg-neon-yellow text-black rounded-full inline-block relative overflow-hidden flex items-center"
              style={{ minWidth: "150px", maxWidth: "250px", height: "0.9em" }}
            >
              <motion.div
                className="flex items-center absolute left-0"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  x: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                style={{ willChange: "transform", width: "200%" }}
              >
                {/* We need multiple spans to ensure continuous scrolling */}
                <div className="flex w-1/2 justify-around">
                  <span className="whitespace-nowrap font-bold flex items-center gap-2 md:gap-4 px-4 text-4xl md:text-5xl lg:text-7xl">
                    <span className="text-3xl md:text-4xl lg:text-6xl">✦</span> hello
                  </span>
                  <span className="whitespace-nowrap font-bold flex items-center gap-2 md:gap-4 px-4 text-4xl md:text-5xl lg:text-7xl">
                    <span className="text-3xl md:text-4xl lg:text-6xl">✦</span> hello
                  </span>
                </div>
                <div className="flex w-1/2 justify-around">
                  <span className="whitespace-nowrap font-bold flex items-center gap-2 md:gap-4 px-4 text-4xl md:text-5xl lg:text-7xl">
                    <span className="text-3xl md:text-4xl lg:text-6xl">✦</span> hello
                  </span>
                  <span className="whitespace-nowrap font-bold flex items-center gap-2 md:gap-4 px-4 text-4xl md:text-5xl lg:text-7xl">
                    <span className="text-3xl md:text-4xl lg:text-6xl">✦</span> hello
                  </span>
                </div>
              </motion.div>
            </motion.span>
            <span className="text-white whitespace-nowrap">I am rashesh</span>
          </div>
          <div className="text-white mt-2">motivala</div>
        </motion.h1>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12 z-10">
        <div className="border-t border-dashed border-white/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Scroll Indicator */}
            <ScrollIndicator />

            {/* Center - Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center md:text-left text-gray-300 text-lg max-w-md"
            >
              We are a creative digital agency specializing in innovative design
              and cutting-edge development.
            </motion.p>

            {/* Right - Social Links */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
