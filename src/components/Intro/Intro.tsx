'use client'
import { motion } from "framer-motion";

type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    image: ImageProps;
    children: React.ReactNode;
  };
  
  export type IntroProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Intro = (props: IntroProps) => {
    const { heading, children, image } = {
      ...IntroDefaults,
      ...props,
    } as Props;
    return (
      <section className=" min-h-screen flex flex-col  p-6 md:p-16 lg:my-16">
       
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start lg:gap-x-20">
            <div className="h-fit ">
              <motion.h1
              whileInView={{opacity:1, x:0}}
              initial={{ opacity: 0, x:-50 }}
              transition={{duration:0.4, once:true}}
              viewport={{ once: true }}
               className="pb-4 font-semibold text-white mb-12 text-6xl md:text-7xl drop-shadow-md">{heading}</motion.h1>
              <motion.div 
                initial={{ opacity: 0, y:50 }}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5}}
              className="mb-6 lg:mb-0 md:text-xl md:tracking-wide font-normal text-justify text-white">{children}</motion.div>
            </div>
            <div className="flex  justify-center ">
              <motion.img 
               initial={{ opacity: 0}}
               whileInView={{opacity:1}}
               transition={{duration:0.5}}
              src={image.src} className="border-2 border-solid border-secundary lg:mr-8 overflow-hidden rounded-xl lg:rounded-[75px] shadow-lg object-cover" alt={image.alt} />
            </div>
          </div>
        </div>
   
      </section>
    );
  };
  
  export const IntroDefaults: IntroProps = {
    heading: "O Caminho para o Sucesso!",
    children: (
      <div>
        <p className="mb-2 leading-2">
        No cenário digital atual, um bom webdesign e estratégias eficazes de marketing digital são fundamentais para o sucesso de qualquer negócio.  
        </p>
        <p>
        Juntas, estas abordagens potenciam a sua presença online, aumentam a visibilidade da sua marca e impulsionam as vendas. Invista no digital e transforme a sua visão em resultados!        </p>
      </div>
    ),
    image: {
      src: "/assets/images/intro2.png",
      alt: "Pixel Creatives Escritório",
    },
  };
  