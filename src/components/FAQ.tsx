import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quais são os horários de funcionamento?',
    answer: 'Em Gramado, funcionamos de segunda a sexta das 08:00 às 18:30 e sábados das 08:00 às 18:00. Em Canela, de segunda a sexta das 08:00 às 19:00 e sábados das 08:00 às 18:00.'
  },
  {
    question: 'Vocês realizam tele-entrega?',
    answer: 'Sim! Realizamos tele-entrega de rações, medicamentos e acessórios. Consulte a taxa e disponibilidade para o seu bairro através do nosso WhatsApp.'
  },
  {
    question: 'Como agendar um banho e tosa?',
    answer: 'O agendamento pode ser feito diretamente pelo nosso WhatsApp. Basta escolher a loja de sua preferência e enviar uma mensagem para nossa equipe.'
  },
  {
    question: 'Quais tipos de animais vocês atendem?',
    answer: 'Atendemos cães, gatos, aves, roedores e peixes, oferecendo produtos específicos para cada espécie.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-green-50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-green-500 font-bold tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            Dúvidas Frequentes
            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-gray-900">
            Perguntas Populares
          </h3>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-green-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
