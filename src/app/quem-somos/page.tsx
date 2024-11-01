import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Conheça a missão por trás da Pixel Creatives e nossa paixão por criar experiências digitais excepcionais.',
}

export default function AboutUs() {
  return (
    <div className="bg-background min-h-screen">
     <div className="relative  overflow-hidden h-96 p-0 w-full flex flex-col justify-center items-center">
                  <Image 
                    className=" object-cover w-full h-full justify-center" 
                    src="/assets/images/headers/header.png"
                    alt="Marketing Digital"
                    width={1000}
                    height={500}
                  />
          <h1 className="drop-shadow text-white w-full h-full flex justify-center items-center bg-main/90 p-16 absolute font-semibold tracking-tighter text-5xl md:text-8xl text-center ">
          Quem Somos
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center lg:px-16">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-16 lg:gap-x-16 ">
          <div className=" flex flex-col place-items-center justify-start w-full relative overflow-hidden">
          <Image
            src="/assets/images/about.jpeg"
            alt="Pixel Creatives Escritório"
            width={1000}
            height={1000}
            className=" object-cover rounded-lg shadow-md"
          />
          </div>
          <div className="flex flex-col py-8 lg:py-0 text-justify ">
            <p className=" text-main first-line:mb-6 ">
            A Pixel Creatives é uma agência inovadora de <strong>Branding</strong>, <strong>Webdesign</strong>  e <strong>Marketing Digital</strong> dedicada a transformar a presença online dos seus clientes através de soluções criativas e estratégicas. Com uma equipa de profissionais altamente qualificados, combinamos expertise técnica com visão artística para criar experiências digitais impactantes e eficazes.

            </p>
            <h2 className="text-2xl font-semibold tracking-tight my-4">A Nossa Essência</h2>
            <p className=" text-main mb-2">
              No núcleo da Pixel Creatives encontram-se três pilares fundamentais que orientam todas as nossas ações e decisões:
            </p>
            <ul className="list-none ">
              <li className=" mt-1 ">
                <strong>Estratégia:</strong> <p>Cada solução que propomos é meticulosamente planeada e executada, alinhando-se com os objetivos específicos e a visão a longo prazo de cada cliente.</p>
              </li>
              <li className="mt-1 "> 
                <strong>Criatividade:</strong> <p>Cultivamos um ambiente que fomenta a originalidade e o pensamento disruptivo, permitindo-nos desenvolver soluções únicas que captam a essência de cada marca.</p>
              </li>
              <li className="mt-1 "> 
                <strong>Inovação:</strong> <p>Mantemo-nos na vanguarda das tendências tecnológicas e de marketing, assegurando que os nossos clientes beneficiam das estratégias e ferramentas mais avançadas do mercado.</p>
              </li>
              
            </ul>
            
            
            <h2 className="text-2xl font-semibold tracking-tight my-4">A Nossa Missão</h2>
            <p className=" text-main ">
            Na Pixel Creatives, a nossa missão é transformar ideias em realidade digital. Trabalhamos em estreita colaboração com os nossos clientes para compreender as suas necessidades e aspirações, traduzindo-as em soluções digitais eficazes e impactantes.
            </p>
          </div>
        </div>
    </div>
  </div>
  

  )
}