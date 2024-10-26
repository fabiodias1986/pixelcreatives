'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { HomeIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-main text-white">
      <motion.h1 
        className="text-9xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p 
        className="text-2xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Oops! Página não encontrada.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button asChild className="bg-white text-main hover:bg-gray-200 py-2 px-4">
          <Link href="/">
            <HomeIcon className="mr-2 h-4 w-4" /> Ir Para Página Inicial
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}