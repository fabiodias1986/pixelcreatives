'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTAButton() {
  return (
    <Link href="/proposta">
    <motion.button
      className="relative px-6 py-3 bg-black text-white font-bold text-lg rounded-md overflow-hidden transition-colors duration-300 ease-in-out"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">Pedir Proposta</span>
      <motion.div
        className="absolute inset-0 bg-white opacity-20"
        initial={{ scale: 0, opacity: 0.2 }}
        whileHover={{ 
          scale: 1.5, 
          opacity: 0.4,
          transition: { duration: 0.3 }
        }}
      />
      <motion.div
        className="absolute -inset-1 bg-white opacity-20 blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 0.4, 
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
      />
    </motion.button>
    </Link>
  )
}