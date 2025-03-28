import React from 'react'
import Tooltip from '../../components/Tooltip'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="w-full min-h-screen flex flex-col align-middle justify-center gap-10 text-[#333333] dark:text-[#eef4f2b7] p-12 overflow-hidden"
      id="hero"
    >
      {/* Title Animation */}
      <motion.h1
        className="text-center text-xl sm:text-2xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Software Developer
      </motion.h1>

      {/* Name Animation */}
      <motion.h1
        className="text-center text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#6A988D] to-[#152822] text-transparent bg-clip-text font-stretch-semi-expanded max-w-full break-words"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        Mohit Rauniyar
      </motion.h1>

      {/* Tooltip Animation */}
      <div
        className="sm:absolute bottom-4 right-5 z-40 scale-90"
      >
        <Tooltip />
      </div>
    </div>
  )
}
// text-[#8CB9AC]