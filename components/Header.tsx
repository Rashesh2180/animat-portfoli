"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import SayHelloButton from "./SayHelloButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">
              Rashesh.Motivala
            </span>
          </div>
        </motion.div>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">


          {/* Say Hello Button and Menu Toggle - Side by side */}
          <div className="flex items-center gap-2 md:gap-4">
            <SayHelloButton />

            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="w-6 h-0.5 bg-white block"></span>
                <span className="w-6 h-0.5 bg-white block"></span>
              </div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
