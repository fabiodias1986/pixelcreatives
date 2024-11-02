'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function Promo({
  imageUrl = '/assets/images/promo.png',
  linkUrl = '/proposta',
  altText = 'Promo Pixel Creatives'
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="relative w-4/5 max-w-lg aspect-square">
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-1 hover:bg-gray-200 transition-colors z-10"
              aria-label="Close overlay"
            >
              <X size={24} />
            </button>
            <Link href={linkUrl}  rel="noopener noreferrer">
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt={altText}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}