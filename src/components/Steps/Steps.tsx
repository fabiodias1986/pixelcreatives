"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";


type Timeline = {
  date: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  timelines: Timeline[];
};

export type StepsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Steps = (props: StepsProps) => {
  const { tagline, heading, description, buttons, timelines } = {
    ...props,
    ...StepsDefaults,
  } as Props;

  return (
    <section id="steps" className="justify-center lg:mb-16">
       
      <div className="-mt-2 flex flex-col justify-center items-center">
      <div className='bg-white w-full'>
        <svg className="-mb-1"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,256L80,229.3C160,203,320,149,480,144C640,139,800,181,960,170.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      <div className="container p-6 lg:px-12 lg:pb-24 lg:pt-12 items-center justify-center">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <motion.div 
            whileInView={{opacity:1, y:0}}
            initial={{ opacity: 0, y:50 }}
            transition={{duration:0.5}}
          className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4 mb-4 text-center md:text-left">
            <p className="mb-3 font-semibold md:mb-4 text-gray-500">{tagline}</p>
            <h1 className=" drop-shadow-2xl text-white mb-5 text-5xl font-semibold md:mb-6 md:text-5xl lg:text-7xl">{heading}</h1>
            <p className=" text-gray-100 md:text-md">{description}</p>
          </motion.div>

          <div className=" absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-green2 to-transparent" />
            <div className=" sticky top-0 h-[50vh] w-[3px] bg-slate-100" />
            <div className="h-full w-[3px] bg-neutral-lighter" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
          </div>

          <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
            {timelines.map((timeline, index) => (
              <Timeline key={index} timeline={timeline} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

const Timeline = ({ timeline }: { timeline: Timeline }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  const backgroundColor = useTransform(scrollYProgress, [0.99, 1], ["#0000", "#00ffbf"]);

  return (
    <div className="relative ">
      <div className="absolute flex h-full w-8 justify-center items-start md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
        <motion.div
          ref={ref}
          className="z-20  mt-9 size-4 rounded-full shadow-[0_0_0_8px_#ffff] md:mt-10"
          style={{
           
            backgroundColor,
          }}
        />
      </div>
      <motion.div 
      className="  text-white ml-12 flex flex-col border border-secundary rounded-lg p-6 md:ml-0 md:px-8 md:py-12"
      >
        <h2 className="text-white mb-3 text-6xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-8xl">
          {timeline.date}
        </h2>
        <h3 className="text-secundary drop-shadow-lg mb-3 text-2xl font-semibold md:mb-4 md:text-2xl">{timeline.heading}</h3>
        <p className="text-white">{timeline.description}</p>
        
      </motion.div>
    </div>
    
  );
};

export const StepsDefaults: StepsProps = {
  tagline: "Pixel Creatives",
  heading: "Etapas da Estratégia Digital",
  description:
    "Descubra o Caminho para o Sucesso Online: Planejamento, Execução e Análise para Alcançar Resultados Sustentáveis.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],

  timelines: [
    {
      date: "01",
      heading: "Consultoria Inicial",
      description:
        "A sua jornada para o sucesso online começa com uma análise profunda e personalizada",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "02",
      heading: "Estratégia Personalizada",
      description:
        "Elaboramos um plano sob medida que maximiza as suas potencialidades e converte desafios em oportunidades de crescimento.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "03",
      heading: "Design e Desenvolvimento",
      description:
        "Transformamos ideias em soluções digitais impressionantes e funcionais.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "04",
      heading: "Análise e Relatórios",
      description:
        "Acompanhe o seu sucesso com relatórios detalhados e insights práticos que impulsionam decisões estratégicas.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};

