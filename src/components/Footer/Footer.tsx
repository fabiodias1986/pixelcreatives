import React from 'react';
import { FaHome, FaUsers, FaServicestack,FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa'; // Import all icons here
import Image from 'next/image'

const menuItems = [
  { name: 'Início', href: '/', icon: <FaHome /> },
  { name: 'Quem Somos', href: '/quem-somos', icon: <FaUsers /> },
  { name: 'Serviços', href: '/servicos', icon: <FaServicestack /> },
  { name: 'Contactos', href: '/contactos', icon: <FaPhoneAlt /> },
];

const socialMediaLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61568119252052', icon: <FaFacebook /> },
  { name: 'Instagram', href: 'https://www.instagram.com/pixelcreatives.pt', icon: <FaInstagram /> },
  { name: 'Linkedin', href: 'https://www.linkedin.com/company/pixel-creativespt/', icon: <FaLinkedin /> },
  { name: 'Tiktok', href: 'https://www.tiktok.com/@pixelcreatives.pt', icon: <FaTiktok /> },
];

const Footer = () => {
  return (
    <div className="relative font-light grid grid-cols-1 lg:grid-cols-3 justify-center place-items-center pt-8 bg-main text-white">
      <div className=" flex-col text-normal h-full w-fit justify-center lg:justify-start items-center p-8">
        <div className=" mt-2 flex items-center justify-center lg:justify-start ">
        <Image src="/assets/logos/logo-white.png" alt="Logo" width={300} height={100} className=" h-fit w-auto object-contain" />
        </div>
        <p className="mt-4 flex items-center justify-center lg:justify-start">
          <FaEnvelope className="mr-2" />
          <a href="mailto:pixelcreatives.pt@gmail.com" className="hover:text-secundary transition-colors duration-200">
            pixelcreatives.pt@gmail.com
          </a>
        </p>
        <p className="mt-2 flex items-center justify-center lg:justify-start ">
          <FaPhoneAlt className="mr-2" />
          <a href="tel:+351910908608" className="hover:text-secundary transition-colors duration-200">
            +351 910 908 608
          </a>
        </p> 
        <p className="mt-2 flex items-center justify-center lg:justify-start">
          <FaMapMarkerAlt className="mr-2" /> 
          Loulé, Portugal
        </p> 
      </div>
      <div className="grid-cols-1 text-normal h-full place-items-center p-8">
        <h3 className="w-full mb-4 text-xl font-semibold text-left">Menu</h3>
        <ul className="grid gap-y-2 text-left text-normal w-fit">
          {menuItems.map(({ name, href, icon }) => (
            <li key={name} className="flex items-center">
              <a href={href} className="flex items-center hover:text-secundary transition-colors duration-200 cursor-pointer">
                <span className="mr-2">{icon}</span>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" flex-col text-normal font-light place-items-center p-8">
        <h3 className="w-full mb-4 text-xl font-semibold text-left">Siga-nos</h3>
        <ul className="text-normal grid gap-y-2 w-fit place-items-start">
          {socialMediaLinks.map(({ name, href, icon }) => (
            <li key={name} className="flex items-center">
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-secundary transition-colors duration-200 cursor-pointer"
              >
                <span className="mr-2">{icon}</span>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;