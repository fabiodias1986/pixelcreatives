"use client"

import React from 'react'
import { FaChartLine, FaUsers, FaBullseye, FaGlobe } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface CardProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, icon: Icon, text }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div 
      ref={ref}
      className=" drop-shadow-xl w-full min-h-[25rem] [perspective:1000px] group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="border-2 border-solid  shadow-main bg-gradient-to-tl from-main to-main border-3  absolute inset-0 flex flex-col items-center justify-center p-6 rounded-lg shadow-md [backface-visibility:hidden]">
          <Icon className="text-8xl  mb-4 text-white" />
          <h1 className="text-xl text-white font-semibold text-center">{title}</h1>
        </div>
        <div className="border-solid border-2 border-main4/60 bg-white text-main absolute inset-0 flex items-center justify-center p-2 md:p-6 rounded-lg shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-center text-normal">{text}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface Vantagem {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const vantagens: Vantagem[] = [
    {
      title: 'Alcance Global',
      icon: FaGlobe,
      text: 'O marketing digital permite que você alcance uma audiência global, expandindo seu mercado potencial.',
    },
    {
      title: 'Segmentação Precisa',
      icon: FaBullseye,
      text: 'Direcione suas campanhas para públicos específicos, aumentando a eficácia e o retorno sobre o investimento.',
    },
    {
      title: 'Engajamento do Cliente',
      icon: FaUsers,
      text: 'Interaja diretamente com seus clientes, construindo relacionamentos mais fortes e duradouros.',
    },
    {
      title: 'Análise de Dados',
      icon: FaChartLine,
      text: 'Obtenha insights valiosos através de métricas detalhadas para otimizar suas estratégias de marketing.',
    },
  ]

  return (
    <motion.section 
      ref={ref}
      className="min-h-screen bg-white flex flex-col p-6 py-16 md:p-16 lg:py-24 items-center justify-center"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-left md:text-center  text-main mb-8 lg:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Marketing Digital
        </motion.h1>
      
 
        <div className="w-full h-full grid grid-cols-1 gap-6 lg:gap-x-6 md:grid-cols-2 lg:grid-cols-4">
          {vantagens.map((vantagem, index) => (
            <Card key={index} {...vantagem} />
          ))} 
        </div>
     
    </motion.section>
  )
}