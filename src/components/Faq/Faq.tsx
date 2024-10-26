import {
    Button,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@relume_io/relume-ui";
  
  import type { ButtonProps } from "@relume_io/relume-ui";
  
  type QuestionsProps = {
    title: string;
    answer: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    footerHeading: string;
    footerDescription: string;
    button: ButtonProps;
    questions: QuestionsProps[];
  };
  
  export type FaqProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Faq = (props: FaqProps) => {
    const { heading, description, questions, footerHeading, footerDescription, button } = {
      ...FaqDefaults,
      ...props,
    } as Props;
    return (
      <section className="bg-main px-[5%] py-16 md:py-24 lg:py-28 flex justify-center items-center">
        <div className="  container lg:max-w-[60%] flex flex-col justify-center items-center ">
          <div className=" mb-12 text-center md:mb-18 lg:mb-20 ">
            <h2 className="text-white mb-5 text-5xl font-semibold md:mb-6 md:text-7xl ">{heading}</h2>
            <p className="md:text-md text-white">{description}</p>
          </div>
          <Accordion type="multiple" className=" w-auto ">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="  transition mb-3 md:mb-0">
                <AccordionTrigger className=" text-white text-lg lg:text-lg lg:tracking-wide mr-5  md:py-5 font-normal pl-8  transition-all duration-100 text-left">{question.title}</AccordionTrigger>
                <AccordionContent className=" p-4 md:pb-6 pl-8 text-gray-200 font-light ">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
         
         
        </div>
      </section>
    );
  };
  
  export const FaqDefaults: FaqProps = {
    heading: "Perguntas Frequentes",
    description:"",
    questions: [
      {
        title: "Quanto tempo demora a criar um website?",
        answer:
          "O tempo para criar um website varia conforme a complexidade do projeto. Um site simples pode levar alguns dias, enquanto um site mais complexo pode demorar meses. Em média, um site de médio porte leva entre 4 a 12 semanas para ser concluído.",
      },
      {
        title: "Que serviços de marketing digital oferecem?",
        answer:
          "Oferecemos gestão de redes sociais, otimização para motores de busca (SEO), marketing de conteúdo, campanhas de publicidade digital e webdesign responsivo.",
      },
     
      {
        title: "Quais são as redes sociais mais importantes para o meu negócio?",
        answer:
          "As redes sociais mais relevantes dependem do seu público-alvo e tipo de negócio. Geralmente, Facebook, Instagram, LinkedIn e Twitter são plataformas populares para muitas empresas.",
      },
      {
        title: "O que é um website responsivo e por que é importante?",
        answer:
          "Um website responsivo adapta-se automaticamente a diferentes tamanhos de ecrã, garantindo uma experiência de utilizador otimizada em todos os dispositivos, o que é crucial para o SEO e a satisfação do cliente.",
      },
      {
        title: "Como medem o sucesso das campanhas de marketing digital?",
        answer:
          "Utilizamos várias métricas, como taxa de conversão, retorno sobre investimento (ROI), tráfego do site, engagement nas redes sociais e rankings nos motores de busca.",
      },
      {
        title: "Qual é a diferença entre SEO e SEM?",
        answer:
          "SEO (Search Engine Optimization) refere-se a técnicas orgânicas para melhorar o ranking nos motores de busca, enquanto SEM (Search Engine Marketing) inclui estratégias pagas, como anúncios PPC.",
      },

      {
        title: "Com que frequência devo atualizar o conteúdo do meu site?",
        answer:
          "Recomenda-se atualizar o conteúdo regularmente, idealmente semanalmente ou quinzenalmente, para manter o site relevante para os motores de busca e os visitantes.",
      },
      {
        title: "Que tipos de relatórios fornecem aos clientes?",
        answer:
          "Fornecemos relatórios detalhados sobre o desempenho do site, análise de tráfego, rankings de palavras-chave, engagement nas redes sociais e ROI das campanhas publicitárias.",
      },
      {
        title: "Quanto custa, em média, uma campanha de marketing digital?",
        answer:
          "O custo varia conforme os objetivos, a escala e a duração da campanha. Oferecemos soluções personalizadas para se adequarem ao orçamento e às necessidades específicas de cada cliente.",
      },
    ],
    footerHeading: "Ainda tem questões?",
    footerDescription: "",
    button: {
      title: "Deixe a sua mensagem",
      variant: "secondary",
    },
  };
  