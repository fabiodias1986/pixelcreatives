'use client'
import type { ButtonProps } from "@relume_io/relume-ui";
import {motion} from "framer-motion"
import Solar from "../Solar/Solar";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  heading1: string;
  heading2: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Hero = (props: HeaderProps) => {
  const { heading,heading1, heading2, description, buttons, image } = {
    ...HeaderDefaults,
    ...props,
  } as Props;
  return (
    <section className=" flex flex-col items-start justify-center min-h-screen w-full">
      <div className="flex items-center justify-center h-screen"> 
        <motion.div className=" h-auto lg:col-span-3 z-[8] flex flex-col justify-center items-start  col-span-1 md:col-span-2 p-6 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.3, stiffness: 60 }}
          className="h-full relative text-left text-white mb-2 md:mb-6 tracking-tight leading-tight  text-5xl md:text-6xl lg:text-7xl font-semibold lg:font-bold lg:tracking-wide drop-shadow-lg lg:leading-tight"
        >
          <h1>{heading}</h1>
         
          <h1 className=" text-transparent bg-clip-text  bg-gradient-to-tr from-secundary to-secundary py-2">{heading1}</h1>
         
          <h1>{heading2}</h1>

        </motion.div>
      <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", duration: 0.5, stiffness: 80 }}
          className=" text-slate-100 text-left font-light md:text-lg md:tracking-wide w-full md:span-col-1 z-[9] mb-6"
        >
          {description}
        </motion.p>
        <div className="flex space-x-4">
        <Link href="/proposta">
            <motion.button 
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, type: "spring", duration: 0.5, stiffness: 80 }}
              className="px-4 py-2 bg-black text-white border-solid border-2 border-white rounded-xl hover:bg-secundary hover:text-main transition-colors duration-300"
            >            
              Solicitar Proposta
            </motion.button>
          </Link>
          <Link href="/servicos">
            <motion.button 
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, type: "spring", duration: 0.5, stiffness: 80 }}
              className="hidden md:block px-4 py-2 bg-black text-white border-solid border-2 border-white rounded-xl hover:bg-secundary hover:text-main transition-colors duration-300"
            >            
              Ver Serviços
            </motion.button>
          </Link>
        </div>
      </motion.div>
     
      <motion.div className="z-[7] h-auto ">    
     <Solar />
    </motion.div>
      </div>

  </section>
  
  );
};

export const HeaderDefaults: HeaderProps = {
  heading: "Soluções de ",
  heading1:"Marketing Digital ",
  heading2: "e WebDesign!",
  description:
    "Transforme cliques em clientes com estratégias digitais eficazes.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "/assets/images/hero.svg",
    alt: "Digital Marketing",
  },
};
