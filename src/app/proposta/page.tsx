'use client'
import { Metadata } from "next";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'


export default function PropostaForm() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    contacto: '',
    website: '',
    servicos: {
      branding: false,
      webdesign: false,
      marketingDigital: false,
      outros: false
    },
    outrosServicos: '',
    descricao: '',
    orcamento: '',
    objetivos: {
      clientesSeguidores: false,
      vendas: false,
      visibilidadeMarca: false,
      engajamento: false,
      fidelizacao: false,
      expansaoMercado: false,
      inovacaoProduto: false,
      eficienciaOperacional: false
    }
  })
  const [modalState, setModalState] = useState({ isOpen: false, message: '', isSuccess: true })

  const sections = [
    {
      title: 'Informação',
      fields: [
        { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Seu nome completo', required: true },
        { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nome da sua empresa', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'seu.email@empresa.com', required: true },
        { name: 'contacto', label: 'Contacto', type: 'text', placeholder: 'Seu número de telefone', required: true },
        { name: 'website', label: 'Website', type: 'text', placeholder: 'seusite.com', required: false }
      ]
    },
    {
      title: 'Serviços',
      fields: [
        { name: 'branding', label: 'Branding', type: 'checkbox' },
        { name: 'webdesign', label: 'Webdesign', type: 'checkbox' },
        { name: 'marketingDigital', label: 'Marketing Digital', type: 'checkbox' },
        { name: 'outros', label: 'Outros', type: 'checkbox' }
      ]
    },
    {
      title: 'Detalhes',
      fields: [
        { name: 'descricao', label: 'Descrição do que procura', type: 'textarea', placeholder: 'Descreva detalhadamente o que deseja' },
        { name: 'orcamento', label: 'Orçamento disponível ( €/mês )', type: 'text', placeholder: 'Seu orçamento estimado' }
      ]
    },
    {
      title: 'Objetivos',
      fields: [
        { name: 'clientesSeguidores', label: 'Aumentar Clientes/Seguidores', type: 'checkbox' },
        { name: 'vendas', label: 'Aumentar Vendas', type: 'checkbox' },
        { name: 'visibilidadeMarca', label: 'Melhorar Visibilidade da Marca', type: 'checkbox' },
        { name: 'engajamento', label: 'Aumentar Engajamento', type: 'checkbox' },
        { name: 'fidelizacao', label: 'Fidelização de Clientes', type: 'checkbox' },
        { name: 'expansaoMercado', label: 'Expansão de Mercado', type: 'checkbox' },
        { name: 'inovacaoProduto', label: 'Inovação de Produto/Serviço', type: 'checkbox' },
        { name: 'eficienciaOperacional', label: 'Melhorar Eficiência Operacional', type: 'checkbox' }
      ]
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (['branding', 'webdesign', 'marketingDigital', 'outros'].includes(name)) {
        setFormData(prev => ({
          ...prev,
          servicos: {
            ...prev.servicos,
            [name]: checked
          }
        }))
      } else {
        setFormData(prev => ({
          ...prev,
          objetivos: {
            ...prev.objetivos,
            [name]: checked
          }
        }))
      }
    } else if (name === 'outrosServicos') {
      setFormData(prev => ({ ...prev, [name]: value }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_wyqfgem',
        'template_51lip8h',
        {
          to_email: 'pixelcreatives.pt@gmail.com',
          ...formData,
          servicos: sections[1].fields
            .filter((field) => formData.servicos[field.name as keyof typeof formData.servicos])
            .map((field) => field.label)
            .join(', '),
          objetivos: sections[3].fields
            .filter((field) => formData.objetivos[field.name as keyof typeof formData.objetivos])
            .map((field) => field.label)
            .join(', '),
        },
        'd961jT83cJQP_WSih'
      )
      setModalState({
        isOpen: true,
        message: 'A seu pedido foi enviado com sucesso!' ,

        isSuccess: true
      })
      setFormData({
        nome: '',
        empresa: '',
        email: '',
        contacto: '',
        website: '',
        servicos: {
          branding: false,
          webdesign: false,
          marketingDigital: false,
          outros: false
        },
        outrosServicos: '',
        descricao: '',
        orcamento: '',
        objetivos: {
          clientesSeguidores: false,
          vendas: false,
          visibilidadeMarca: false,
          engajamento: false,
          fidelizacao: false,
          expansaoMercado: false,
          inovacaoProduto: false,
          eficienciaOperacional: false
        }        
      })
      
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setModalState({
        isOpen: true,
        message: 'Ocorreu um erro ao enviar a sua proposta. Por favor, tente novamente.',
        isSuccess: false
      })
    }
  }

  return (
    <div className=" min-h-screen bg-main flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-[100px] w-full  space-y-8  max-w-3xl bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md"
      >
        
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-6 lg:mb-10">
          Solicitar uma Proposta
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-4">{section.title}</h3>
              <div className={`grid ${section.title === 'Serviços' || section.title === 'Objetivos' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                {section.fields.map((field) => (
                  <div key={field.name} className={field.type === 'checkbox' ? 'flex items-center' : 'space-y-2'}>
                    {field.type === 'checkbox' ? (
                      <>
                        <input
                          type="checkbox"
                          id={field.name}
                          name={field.name}
                          checked={
                            ['branding', 'webdesign', 'marketingDigital', 'outros'].includes(field.name)
                              ? formData.servicos[field.name as keyof typeof formData.servicos]
                              : formData.objetivos[field.name as keyof typeof formData.objetivos]
                          }
                          onChange={handleInputChange}
                          className="m-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor={field.name} className="ml-2 block text-sm text-gray-900">
                          {field.label}
                        </label>
                        {field.name === 'outros' && (
                        formData.servicos.outros && (
                          <input
                            type="text"
                            name="outrosServicos"
                            value={formData.outrosServicos}
                            onChange={handleInputChange}
                            placeholder="Especifique o serviço"
                            className="ml-2 h-8 p-2  block w-full sm:text-sm bg-slate-100/20 border border-gray-300 rounded-md focus:ring-indigo-500 focus:outline-none"
                          />
                        )                        
                        )}
                      </>
                    ) : (
                      <>
                       <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                            {field.label}
                            {'required' in field && field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                            <textarea
                                id={field.name}
                                name={field.name}
                                value={formData[field.name as keyof typeof formData] as string}
                                onChange={handleInputChange}
                                placeholder={'placeholder' in field ? field.placeholder : ''}
                                rows={6}
                                className=" p-4 mt-1 block w-full sm:text-sm bg-slate-100/20 border-2 shadow-sm rounded-md focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 " />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    value={formData[field.name as keyof typeof formData] as string}
                                    onChange={handleInputChange}
                                    placeholder={'placeholder' in field ? field.placeholder : ''}                                    
                                    required={'required' in field ? field.required : false}
                                    className="h-10 p-4 mt-1 block w-full sm:text-sm bg-slate-100/20 border-2 shadow-sm rounded-md focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                                />
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sections.length * 0.1 }}
            className="flex justify-end"
          >
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enviar Proposta
            </button>
          </motion.div>
        </form>
      </motion.div>

      <AnimatePresence>
        {modalState.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-4"
            >
              <h3 className={`text-2xl font-bold mb-4 ${modalState.isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                {modalState.isSuccess ? 'Sucesso!' : 'Erro'}
              </h3>
              <p className="text-gray-700 mb-6">{modalState.message}</p>
              <button
                onClick={() => setModalState({ ...modalState, isOpen: false })}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}