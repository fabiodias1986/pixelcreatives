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
    const hasShownPromo = localStorage.getItem('hasShownPromo');

    if (!hasShownPromo) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('hasShownPromo', 'true'); // Marcar que a promoção foi exibida
      }, 5000);

      return () => clearTimeout(timer);
    }

    // Função para remover o item do localStorage ao sair do site
    const handleBeforeUnload = () => {
      localStorage.removeItem('hasShownPromo');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup ao desmontar o componente
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
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
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative w-4/5 max-w-lg aspect-square lg:mt-[90px]">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white text-black rounded-full p-1 cursor-pointer transition-colors z-[9999999999]"
              aria-label="Close overlay"
              
            >
              <X size={24} className='cursor-pointer'/>
            </button>
            <Link href={linkUrl} rel="noopener noreferrer">
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