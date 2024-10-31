import { Metadata } from "next";
import { Phone, Mail, MapPin } from 'lucide-react'
import ContactForm from "@/components/ContactForm/ContactForm"
import Image from 'next/image'

export default function ContactsPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center ">
         <div className="relative  overflow-hidden h-96 p-0 w-full flex flex-col justify-center items-center">
                  <Image 
                    className=" object-cover w-full h-full justify-center" 
                    src="/assets/images/headers/header.png"
                    alt="Marketing Digital"
                    width={1000}
                    height={500}
                  />
          <h1 className="drop-shadow text-white w-full h-full flex justify-center items-center bg-main/90 p-16 absolute font-semibold tracking-tighter text-5xl md:text-8xl text-center ">
          Contactos
        </h1>
      </div>
      <div className="mt-6 p-6 w-full lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center ">
          {/* Contact Information Column */}
          <div className="h-full mb-6 flex flex-col items-center  justify-start">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Informações de Contacto</h2>
            </div>
            <div className="space-y-6 ">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-main" aria-hidden="true" />
                <span className="text-lg">+351 910 908 608</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                <a href="mailto:pixelcreatives.pt@gmail.com" className="text-lg hover:underline">pixelcreatives.pt@gmail.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1" aria-hidden="true" />
                <address className="text-lg not-italic">
                  Loulé, Portugal
                </address>
              </div>
            </div>
          </div>

         
          <div className="border-2 border-gray-200 h-full bg-gradient-to-r from-white bg-gray-100 p-6 shadow-md rounded-md ">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold">Envie-nos uma Mensagem</h2>
            </div>
            <div className=" h-auto rounded-lg flex items-center justify-center">
              < ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}