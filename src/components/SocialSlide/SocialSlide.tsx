'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ["Branding","Estratégia","Criatividade", "Inovação", ]

export default function SocialSlide() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white min-h-40 flex flex-col items-center justify-center  w-full ">
    
      <div className="text-center h-full ">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-main"
          >
            {words[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}