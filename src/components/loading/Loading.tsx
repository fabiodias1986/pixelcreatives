'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black/80 fixed top-0 left-0 z-[9999999999999999999]">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="w-24 h-24"
      >
        <Image
          src="/assets/images/loading.svg"
          alt="Loading spinner"
          width={500}
          height={500}
          className="rounded-full object-contain"
        />
      </motion.div>
    </div>
  )
}