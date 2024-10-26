"use client"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const services = [
  {
    title: "Branding",
    description: "Criamos identidades visuais únicas e memoráveis para sua marca.",
  },
  {
    title: "Webdesign",
    description: "Desenvolvemos sites responsivos e intuitivos que convertem visitantes em clientes.",
  },
  {
    title: "Marketing Digital",
    description: "Estratégias personalizadas para aumentar sua presença online e gerar leads qualificados.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function ServicesCards() {
  return (
    <section className="min-h-screen lg:mt-16">
      <div className="container mx-auto p-6 flex flex-col justify-center items-center ">
        <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 lg:mb-16">Nossos Serviços</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true })

            return (
              <motion.div
                key={service.title}
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg border-2 border-solid border-secundary shadow-secundary shadow-sm overflow-hidden transition-shadow duration-300 ease-in-out "
              >
                <div className="flex flex-col justify-center items-center min-h-[200px] lg:min-h-[300px] p-6 ">
                  <div className="text-center flex flex-col justify-center items-start">
                    <h3 className="mb-2 w-full text-3xl md:text-3xl lg:text-4xl font-semibold text-main">{service.title}</h3>
                    <p className="w-full text-gray-800">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="relative inline-block mt-6 lg:mt-16">
          <Link href="/servicos">
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", duration: 0.5, stiffness: 80 }}
              whileTap={{ scale: 0.95 }}
              className="md:text-xl md:tracking-wide px-10 py-3 font-semibold bg-white text-black rounded-xl border-solid border-2 border-white hover:bg-main hover:text-white transition-colors duration-300"
            >
              Saber Mais
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fillOpacity="1" d="M0,256L80,229.3C160,203,320,149,480,144C640,139,800,181,960,170.7C1120,160,1280,96,1360,64L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
    </section>
  )
}
