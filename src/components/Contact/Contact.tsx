import type { ButtonProps } from "@relume_io/relume-ui";
import ContactForm from "@/components/ContactForm/ContactForm"
import Image from 'next/image';


export const Contact = () => {
  return (
    <section
      id="relume"
      className="w-full  lg:h-screen  grid grid-cols-1 items-center  lg:grid-cols-2 lg:pt-0"
    >
      <div className="md:block h-full w-full bg-transparent">
        <Image
          src="/assets/images/contact.jpeg"
          alt="contactos image"
          width={1000}
          height={1000}
          
          className="w-full h-full object-cover lg:min-h-screen "
        />
      </div>
      <div className="p-6 lg:p-16 bg-gradient-to-r from-white bg-gray-100 selection:w-full h-full flex flex-col justify-start items-start">
        <h3 className="text-left text-2xl  pb-4 w-full font-bold">Envie-nos uma mensagem!</h3>

        <ContactForm />
      </div>
    </section>
  );
};