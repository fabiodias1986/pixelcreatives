"use client"

import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: TabProps[];
  buttons: ButtonProps[];
};

export type ServicesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Services = (props: ServicesProps) => {
  const { tagline, heading, description, tabs, buttons } = {
    ...ServicesDefaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        ease:  "easeInOut"

      }
    }
  };
  
  const childVariants = {
    hidden: {x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };
  return (
    <section className="flex flex-col p-0 bg-white">

    <div className="px-8 lg:px-24  mt-0 pb-24 pt-12 lg:pt-0  w-full flex-col-reverse text-main z-10">
        <div className="hidden mx-auto mb-12 w-full md:mb-18 md:w-auto lg:mb-20 place-items-center">
          <motion.h1 
           whileInView={{opacity:1, x:0}}
           initial={{ opacity: 0, x:-50 }}
           transition={{duration:0.4, once:true}}
          className="text-main mb-5  text-6xl font-semibold md:mb-6 md:text-7xl drop-shadow-sm ">{heading}</motion.h1>
          <motion.p 
           whileInView={{opacity:1, y:0}}
           initial={{ opacity: 0, y:50 }}
           transition={{duration:0.5, once:true}}
          className="md:text-md text-main">{description}</motion.p>
     
        </div>
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {tabs.map((tab, index) => {
                if (activeTab !== index) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 , once:true}}
                    exit={{ opacity: 0 }}
                    className=""
                  >
                    {tab.image && (
                      <img
                        src={tab.image.src}
                        alt={tab.image.alt}
                        className="max-h-[90vh] border-2 border-solid border-green2 lg:mr-8 overflow-hidden rounded-[60px] shadow-lg object-cover "
                      />
                    )}
                    
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <motion.div 
          whileInView="visible"
          variants={containerVariants}
          initial="hidden"
          className="grid grid-cols-1 items-center gap-x-4 "
          >
            {tabs.map((tab, index) => (
              <motion.div
              whileInView={{opacity:1}}
                key={index}
                variants={childVariants}
                onClick={() => setActiveTab(index)}
                className={clsx("cursor-pointer py-4 pl-6 md:pl-8", {
                  "border-l-2 border-green2": activeTab === index,
                  "border-l-2 border-transparent": activeTab !== index,
                })}
              >
                <h3 className="text-main mb-2 text-4xl font-semibold md:mb-4  md:leading-[1.3] ">
                  {tab.heading}
                </h3>
                <p className="text-main5">{tab.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
  </div>

    </section>
  );
};

export const ServicesDefaults: ServicesProps = {
  
  heading: "Serviços",
  description:
    "",
  tabs: [
    {
      heading: "Webdesign",
      description:
        "Criamos sites visualmente apelativos e funcionais que se adaptam a qualquer dispositivo, garantindo uma experiência de utilizador otimizada.",
      image: {
        src: "/assets/images/Design 1.png",
        alt: "Placeholder image 1",
      },
    },
    {
      heading: "Gestão de Redes Sociais",
      description:
        "Maximizamos a presença da sua marca nas redes sociais através de conteúdos relevantes e interação eficaz com o público.",
      image: {
        src: "/assets/images/Design 4.jpeg",
        alt: "Placeholder image 3",
      },
    },
    
    {
      heading: "Marketing de Conteúdo",
      description:
        "Criamos conteúdos de alta qualidade que informam e envolvem o seu público, otimizados para SEO e alinhados com a sua marca.",
      image: {
        src: "/assets/images/Design 3.jpeg",
        alt: "Placeholder image 3",
      },
    },

    {
      heading: "Gestão de Anúncios",
      description:
        "Desenvolvemos campanhas direcionadas em plataformas digitais, monitorando e ajustando para maximizar o seu retorno sobre investimento.",
      image: {
        src: "/assets/images/Design 2.jpeg",
        alt: "Placeholder image 3",
      },
    },
    

  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};
