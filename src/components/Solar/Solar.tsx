"use client"

import { motion } from "framer-motion"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6'

const SocialIconWithOrbit = ({ Icon, size, orbitRadius, speed, reverseOrbit }:{Icon: React.ElementType, size:number, orbitRadius:number, speed:number, reverseOrbit?: boolean}) => {
  return (
    <motion.div
      className="absolute mt-0 rounded-full border border-[#00ffbf] mix-blend-overlay"
      style={{
        width: orbitRadius * 2,
        height: orbitRadius * 2,
        left: '80%',
        top: '30%',
        x: `-50%`,
        y: `-50%`,
        boxShadow: "0px 0px 30px #00ffbf",
      }}
      animate={{
        rotate: reverseOrbit ? -360 : 360
      }}
      transition={{
        duration: 100 / speed,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <motion.div
        className="absolute rounded-full bg-[#00ffbf] flex items-center justify-center"
        style={{
          width: size * 2,
          height: size * 2,
          left: '100%',
          top: '50%',
          x: `-50%`,
          y: `50%`,
          boxShadow: `0 0 ${size / 2}px #00ffbf`,
        }}
      >
        <Icon size={size * 1.2} color="#000000" />
      </motion.div>
    </motion.div>
  )
}

export default function Solar() {
  return (
    <div className="absolute z-20 inset-0 h-auto overflow-hidden bottom-0">
      <div className="relative w-full h-auto" style={{ height: '100vh' }}> {/* Set a height for the parent */}
        <motion.div
          className="absolute rounded-full z-25"
          style={{
            width: 60,
            height: 60,
            background: "radial-gradient(circle, #00ffbf 20%, #00ffbd 50%)",
            boxShadow: "0 0 40px #00ffbf",
            left: '80%',
            top: '30%',
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <SocialIconWithOrbit Icon={FaFacebook} size={16} orbitRadius={100} speed={2} />
        <SocialIconWithOrbit Icon={FaXTwitter} size={14} orbitRadius={150} speed={2.5} reverseOrbit={true} />
        <SocialIconWithOrbit Icon={FaInstagram} size={16} orbitRadius={250} speed={1} />
        <SocialIconWithOrbit Icon={FaLinkedin} size={15} orbitRadius={320} speed={3} reverseOrbit={true} />
        <SocialIconWithOrbit Icon={FaGoogle} size={18} orbitRadius={400} speed={4} />
      </div>
    </div>
  )
}