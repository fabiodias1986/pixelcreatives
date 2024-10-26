import React from 'react';
import CtaButton from "@/components/CTAButton/CtaButton";

type Props = {
  heading: string;
  description: string;
  description2: string;
};

export type CtaProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta = (props: CtaProps) => {
  const { heading, description, description2 } = {
    ...CtaDefaults,
    ...props,
  } as Props;

  return (
    <section className="px-6 py-16  lg:py-28 w-full bg-slate-100">
      <div className="w-full text-center">
        <h1 className="drop-shadow-lg text-4xl md:text-7xl font-bold text-main mb-6">{heading}</h1>
        <p className="md:text-md text-main font-semibold">{description2}</p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8 text-main">
          <CtaButton />
        </div>
      </div>
    </section>
  );
};

export const CtaDefaults: CtaProps = {
  heading: "Inicie Sua Jornada",
  description: "Clique no botão abaixo e inicie sua transformação digital! ",
  description2: "Não perca tempo! Clique no botão abaixo e dê o primeiro passo.",
};