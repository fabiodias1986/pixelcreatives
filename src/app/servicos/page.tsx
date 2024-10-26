'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'


type ImageProps = {
    src: string;
    alt?: string;
    width: number;
    height: number;
    className: string;
  };

const services = [
  {
    id: "branding",
    title: "Branding",
    what: "O branding é o processo estratégico e criativo que visa construir e gerir a identidade e reputação de uma marca no mercado. É muito mais do que apenas criar um logótipo ou escolher cores corporativas; é a arte de moldar a perceção que o público tem sobre uma empresa, os seus produtos ou serviços.",
    elements:  [
      {
          elemento: "Identidade Visual",
          descricao: "Inclui logótipo, esquema de cores, tipografia e outros elementos visuais que tornam a marca reconhecível."
      },
      {
          elemento: "Posicionamento",
          descricao: "Define como a empresa se diferencia dos concorrentes e que lugar ocupa na mente dos consumidores."
      },
      {
          elemento: "Personalidade da Marca",
          descricao: "Estabelece o tom, voz e valores que a marca comunica em todas as suas interações."
      },
      {
          elemento: "Promessa da Marca",
          descricao: "Articula o que os clientes podem esperar da empresa em termos de qualidade, serviço e experiência."
      },
      {
          elemento: "Estratégia de Comunicação",
          descricao: "Determina como a marca se comunica com o seu público-alvo através de diversos canais."
      }
  ],

    process: [
  "Pesquisa de mercado e análise da concorrência",
  "Definição da missão, visão e valores da empresa",
  "Desenvolvimento da identidade visual (logótipo, cores, tipografia)",
  "Criação da personalidade e voz da marca",
  "Estabelecimento do posicionamento da marca",
  "Desenvolvimento da estratégia de comunicação",
  "Criação de uma narrativa de marca",
  "Definição dos elementos do sistema de marca",
  "Implementação consistente em todos os pontos de contacto",
  "Gestão da experiência do cliente",
  "Monitorização e avaliação contínua da perceção da marca",
  "Ajuste e evolução da estratégia de branding",
  "Alinhamento interno da cultura organizacional com os valores da marca",
  "Desenvolvimento de diretrizes de marca para uso consistente"
],
  
},
  {
    id: "webdesign",
    title: "Web Design",
    what:"O web design é um elemento crucial para o sucesso de qualquer presença online. Vai muito além da simples criação de websites, englobando o desenvolvimento de interfaces que cativam e retêm os utilizadores.",
    elements: [
      {
          elemento: "Identidade Visual",
          descricao: "Estabelece a primeira impressão online da marca, criando uma presença visual coerente e memorável que reflete a identidade da empresa."
      },
      {
          elemento: "Posicionamento",
          descricao: "Ajuda a diferenciar o site da concorrência, destacando os pontos fortes únicos da marca no ambiente digital."
      },
      {
          elemento: "Personalidade da Marca",
          descricao: "Transmite a essência e os valores da marca através de elementos visuais e interativos, criando uma conexão emocional com os utilizadores."
      },
      {
          elemento: "Promessa da Marca",
          descricao: "Comunica visualmente o que os utilizadores podem esperar da empresa em termos de qualidade, serviço e experiência online."
      },
      {
          elemento: "Estratégia de Comunicação",
          descricao: "Facilita a transmissão eficaz de mensagens-chave e informações importantes através de um layout intuitivo e elementos visuais persuasivos."
      },
      {
          elemento: "Experiência do Utilizador",
          descricao: "Melhora a usabilidade e navegação do site, proporcionando uma experiência agradável e eficiente para os visitantes."
      },
      {
          elemento: "Credibilidade",
          descricao: "Um design profissional aumenta a confiança dos utilizadores na marca e nos seus produtos ou serviços."
      },
      {
          elemento: "Otimização para Motores de Busca",
          descricao: "Contribui para uma melhor classificação nos resultados de pesquisa, aumentando a visibilidade online da marca."
      },
      {
          elemento: "Conversão",
          descricao: "Um design eficaz pode aumentar significativamente as taxas de conversão, seja para vendas, subscrições ou outros objetivos do site."
      },
      {
          elemento: "Adaptabilidade",
          descricao: "Garante que o site funcione bem em diferentes dispositivos e tamanhos de ecrã, proporcionando uma experiência consistente em todas as plataformas."
      }
  ],
    
      process:[
        "Recolha de informação e definição dos objetivos do site",
        "Análise do público-alvo e pesquisa da concorrência",
        "Planeamento da arquitetura de informação",
        "Criação de wireframes e protótipos",
        "Desenvolvimento do design visual (layout, cores, tipografia)",
        "Criação e organização do conteúdo",
        "Implementação do design responsivo",
        "Otimização para motores de busca (SEO on-page)",
        "Programação front-end (HTML, CSS, JavaScript)",
        "Implementação de funcionalidades interativas",
        "Integração com sistemas de gestão de conteúdos (CMS)",
        "Testes de usabilidade, compatibilidade e desempenho",
        "Otimização da velocidade de carregamento",
        "Lançamento do site",
        "Monitorização contínua e atualizações"
    ],

},
  {
    id: "marketing",
    title: "Marketing Digital",
    what:"O marketing digital é um conjunto de estratégias e técnicas que utilizam os meios digitais para promover produtos, serviços e marcas. É essencial para qualquer negócio que queira ter uma presença online eficaz e alcançar o seu público-alvo de forma direcionada.",
    elements:[
      {
          elemento: "Alcance Global",
          descricao: "Permite atingir um público vasto e diversificado, ultrapassando barreiras geográficas e expandindo o mercado."
      },
      {
          elemento: "Segmentação Precisa",
          descricao: "Oferece a capacidade de direcionar campanhas para públicos específicos com base em dados demográficos, interesses e comportamentos."
      },
      {
          elemento: "Custo-Eficiência",
          descricao: "Geralmente mais económico que os métodos tradicionais de marketing, oferecendo um melhor retorno sobre o investimento."
      },
      {
          elemento: "Mensurabilidade",
          descricao: "Permite acompanhar e analisar o desempenho das campanhas em tempo real, facilitando ajustes rápidos e informados."
      },
      {
          elemento: "Interatividade",
          descricao: "Promove uma comunicação bidirecional com os clientes, melhorando o engagement e a fidelização."
      },
      {
          elemento: "Personalização",
          descricao: "Possibilita a criação de mensagens e experiências de marketing personalizadas para diferentes segmentos de público."
      },
      {
          elemento: "Visibilidade da Marca",
          descricao: "Aumenta a presença e reconhecimento da marca no ambiente digital, fortalecendo a sua posição no mercado."
      },
      {
          elemento: "Geração de Leads",
          descricao: "Facilita a captação de potenciais clientes qualificados através de diversas estratégias digitais."
      }
  ],
  process: [
    "Definição de objetivos e metas de marketing",
    "Identificação e análise do público-alvo",
    "Pesquisa de mercado e análise da concorrência",
    "Desenvolvimento da estratégia de conteúdo",
    "Criação e otimização de website e landing pages",
    "Implementação de estratégias de SEO",
    "Planeamento e execução de campanhas de redes sociais",
    "Desenvolvimento de estratégias de email marketing",
    "Criação e gestão de campanhas de publicidade online",
    "Implementação de ferramentas de análise e monitorização",
    "Otimização de conversão (CRO)",
    "Gestão de reputação online",
    "Análise de resultados e ROI",
    "Ajuste contínuo e otimização de estratégias"
],
  
}
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("branding")

  return (
    <section className="w-full flex justify-center bg-white p-0 pb-16">
      <div className=" flex flex-col justify-center  w-full">
     <div className="relative  overflow-hidden h-96 p-0 w-full flex flex-col justify-center items-cente">
                  <Image 
                    className=" object-cover w-full h-full justify-center" 
                    src="/assets/images/headers/header.png"
                    alt="Marketing Digital"
                    width={1000}
                    height={500}
                  />
          <h1 className="drop-shadow text-white w-full h-full flex justify-center items-center bg-main/90 p-16 absolute font-semibold tracking-tighter text-5xl md:text-8xl text-center ">
          Serviços
        </h1>
      </div>
    
        <div className="w-full lg:max-w-5xl mx-auto md:mt-4">
        <ul className="p-4 grid w-full gap-2 md:gap-4 grid-cols-1  md:grid-cols-3 bg-slate-200 rounded-none md:rounded-[75px] justify-between">
          {services.map((service) => (
            <li 
              key={service.id} 
              className={`${activeTab === service.id ? 'bg-secundary' : 'bg-white'}  text-md cursor-pointer  rounded-[75px] p-3 text-center mb-2 md:mb-0 w-full`} 
              onClick={() => setActiveTab(service.id)}
            >
              {service.title}
            </li>
          ))}
        </ul>
      {services.map((service) => (
        <div key={service.id} className={`text-left mt-8 p-6 ${activeTab === service.id ? '' : 'hidden'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg text-justify">{service.what}</p>
              <h4 className="mt-16 text-3xl font-bold mb-3">Elementos-chave</h4>
              <ul>
                {service.elements.map((element) => (
                  <li key={element.elemento} className="text-xl font-bold mb-3">
                    <h3 className=" font-semibold">{element.elemento}:</h3>
                    <p className="text-lg font-normal">{element.descricao}</p>
                  </li>
                ))}
              </ul>
              <h4 className="text-3xl font-bold mt-16 mb-3">Processo </h4>
              <ul>
                {service.process.map((step, index) => (
                  <li key={index} className="text-lg mb-2 ">- {step}</li>
                ))}
              </ul>
      </motion.div>
    </AnimatePresence>
  </div>
))}
        </div>
      </div>
    </section>
  )
}