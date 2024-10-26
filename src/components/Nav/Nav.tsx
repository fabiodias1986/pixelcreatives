'use client'
import { useEffect, useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaUsers, FaServicestack, FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa'; // Import all icons here
import Image from 'next/image'

const links = [
  { name: 'Início', href: '/', icon: <FaHome /> },
  { name: 'Quem Somos', href: '/quem-somos', icon: <FaUsers /> },
  { name: 'Serviços', href: '/servicos', icon: <FaServicestack /> },
  { name: 'Contactos', href: '/contactos', icon: <FaPhoneAlt /> },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const prevScrollPosition = useRef(0);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // Check if scrolling up or down
      if (position > prevScrollPosition.current) {
        setNavVisible(false); // Scrolling down
        setIsTransparent(false);
      } else {
        setNavVisible(true); // Scrolling up
        if (position === 0) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      }
      prevScrollPosition.current = position;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`bg-main z-[999999] p-4 h-[65px] lg:h-[85px] fixed top-0 left-0 w-full flex justify-between items-center`}
        style={{ 
          backgroundColor: navVisible ? (isTransparent ? 'transparent' : 'black') : 'transparent',
          opacity: navVisible ? 1 : 0,
          transition: 'background-color 0.3s ease, opacity 0.3s ease'
        }}
      >
        <div className="px-4 md:w-1/3 w-full">
        <Link href="/">
          <Image src="/assets/logos/logo-white.png" alt="Logo" className="h-fit w-auto object-cover object-center" width={300} height={100} />
        </Link>
        </div>

        <div className="px-4 md:w-1/3 w-full flex flex-row space-x-4 justify-end items-center">
          <Link href="/proposta">
            <motion.button 
              className="hidden lg:text lg:block px-4 py-2 bg-black text-white border-solid border-2 border-white rounded-xl hover:bg-secundary hover:text-main transition-colors duration-300"
            >            
              Solicitar Proposta
            </motion.button>
          </Link>
          <button 
            onClick={toggleMenu} 
            aria-expanded={isOpen} 
            className="relative z-[99999] flex flex-col justify-center items-end w-10 h-10 cursor-pointer"
          >
            <motion.span
              className="w-8 h-0.5 bg-white mb-2"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
            />
            <motion.span
              className="w-10 h-0.5 bg-white mb-2"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-8 h-0.5 bg-white"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col gap-6 bg-gradient-to-l from-main via-main2 to-main fixed z-50 top-0 left-0 w-screen h-screen items-center justify-center"
          >
            <div  className="flex flex-col gap-6 w-auto items-center justify-center ">

            <motion.ul className="space-y-6 w-fit h-auto">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  className="relative flex flex-row space-x-1"
                  whileHover="hover"
                  initial="initial"
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="gap-x-6 text-left font-semibold tracking-wide text-3xl lg:text-5xl text-white hover:text-secundary relative z-10 flex flex-row items-center"
                    onClick={toggleMenu}
                  >
                    <span >{link.icon}</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <Link href="/proposta" className="w-full ">
              <motion.button 
                className="lg:hidden mt-6 px-6 py-3 bg-black w-full md:text-xl text-white border-solid border-2 border-white rounded-xl hover:bg-secundary hover:text-main transition-colors duration-300"
              >            
                Solicitar Proposta
              </motion.button>
            </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;