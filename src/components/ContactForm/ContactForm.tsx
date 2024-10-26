'use client'

import { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from  "@/components/ui/textarea"
import CtaButton from "@/components/CTAButton/CtaButton"
import emailjs from '@emailjs/browser'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
    const [modalOpen, setModalOpen] = useState(false)
    const [modalMessage, setModalMessage] = useState('')

  return (
    <div className="fixed z-[900000000] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white text-left p-16 relative text-xl rounded-md lg:w-2/4 w-auto mx-6">
        {children}
        <button onClick={onClose} className="absolute right-3 bottom-3 mt-8 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // EmailJS configuration
    const serviceID = 'service_kwvlr6r';
    const templateID = 'template_vchmuk6';
    const userID = 'nGJFH2StxoAzw-1aJ';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        setModalMessage('Mensagem enviada com sucesso! ')
        setModalOpen(true)
        // Reset form after successful submission
        setFormData({ name: '', email: '', company: '', message: '' });
      })
      .catch((err) => {
        setModalMessage('Erro ao enviar mensagem. Tente novamente mais tarde.')
        setModalOpen(true)
      });
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  return (
    <div className="w-full ">
      <form onSubmit={handleSubmit} className=" text-black space-y-6 bg-transparent rounded pt-6 pb-8 mb-4 w-full h-full">     
        <div>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 h-10 bg-white"
            placeholder="João Santos"
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 h-10 bg-white"
            placeholder="pixelcreatives@example.com"
          />
        </div>
        
        <div>
          <Label htmlFor="company">Empresa</Label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 h-10 bg-white"
            placeholder="Pixel Creatives"
          />
        </div>
        
        <div>
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 bg-white "
            placeholder="Como podemos ajudar?"
            rows={6}
          />
        </div>
        
        <button className="transition duration-300 hover:bg-white hover:text-main shadow-md rounded-xl py-3 px-5 bg-main text-white outline">
          Enviar Mensagem
        </button>
      </form>

      <Modal isOpen={modalOpen} onClose={handleModalClose}>
        <p>{modalMessage}</p>
      </Modal>
    
    </div>
  )
}