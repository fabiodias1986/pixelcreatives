'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from 'framer-motion'


const images = [
  { src: '/assets/images/posts/1.png', height: 400, width: 400 },
  { src: '/assets/images/posts/2.png', height: 400, width: 400 },
  { src: '/assets/images/posts/3.png', height: 400, width: 400 },
  { src: '/assets/images/posts/4.png', height: 400, width: 400 },
  { src: '/assets/images/posts/5.png', height: 400, width: 400 },
  { src: '/assets/images/posts/6.png', height: 400, width: 400 },
  { src: '/assets/images/posts/7.png', height: 400, width: 400 },
  { src: '/assets/images/posts/8.png', height: 400, width: 400 },
  { src: '/assets/images/posts/9.png', height: 400, width: 400 },
  { src: '/assets/images/posts/10.png', height: 400, width: 400 },
]

// Duplicate and mix the image array to create a loop effect and variety
const duplicatedImages = [...images, ...images, ...images]

export default function Gallery() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const baseVelocity = -0.05 // Reduced speed
  const [direction, setDirection] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth / 3)
    }
  }, [])

  useAnimationFrame((t, delta) => {
    if (isHovered) return // Don't move if hovered

    let moveBy = baseVelocity * direction * delta

    if (x.get() + moveBy <= -width) {
      x.set(x.get() + width)
    } else if (x.get() + moveBy > 0) {
      x.set(x.get() - width)
    } else {
      x.set(x.get() + moveBy)
    }
  })

  const xTransform = useTransform(x, (value) => {
    return wrap(-width, 0, value)
  })

  return (
    <div className="py-16 lg:py-24 flex flex-col items-center justify-center overflow-hidden w-full ">
      <h1 className="p-6 text-5xl md:text-7xl  font-semibold text-white mb-6 text-center">Explore a criatividade</h1>
      <motion.div 
        ref={carousel}
        className="cursor-grab overflow-hidden w-full "
        whileTap={{ cursor: "grabbing" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: xTransform }}
          className="flex flex-col"
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 0) {
              setDirection(-1)
            } else {
              setDirection(1)
            }
          }}
        >
          {/* First row of images */}
          <div className="flex ">
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`row1-${index}`}
                className="min-w-[300px] h-[300px] lg:min-w-[400px] lg:h-[400px] relative mx-1 overflow-visible"
                whileHover={{ 
                  
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src={image.src} 
                  alt={`Post ${(index % images.length) + 1}`}
                  className="border-2 border-solid border-green2 w-full h-full object-cover rounded-lg shadow-lg"
                  whileHover={{
                    boxShadow: "0px 0px 8px rgb(255,255,255)"
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 rounded-lg"
                  whileHover={{ opacity: 0.75 }}
                >
                </motion.div>
              </motion.div>
            ))}
          </div>
          
     
        </motion.div>
      </motion.div>
    </div>
  )
}