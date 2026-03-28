import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, MessageCircle, PawPrint, Bone, Cat } from 'lucide-react';
import { services } from '../data';
import { WhatsAppDropdown } from '../components/WhatsAppDropdown';

export function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/#servicos');
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="w-full bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <a
            href="/#servicos"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-semibold transition-colors group text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            Voltar para Serviços
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
          
          {/* Floating Paw Prints and Pet Icons */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 md:top-20 left-4 md:left-10 text-white/20"
          >
            <PawPrint className="w-10 h-10 md:w-16 md:h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 md:bottom-40 left-1/4 text-white/20"
          >
            <Bone className="w-12 h-12 md:w-20 md:h-20" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-20 md:top-40 right-1/4 md:right-1/3 text-white/20"
          >
            <Cat className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-10 md:bottom-20 right-4 md:right-10 text-white/20"
          >
            <PawPrint className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl p-6 md:p-16 -mt-24 md:-mt-32 relative z-20"
          >
            <div className="max-w-none">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-12">
                {service.shortDesc}
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Como funciona o serviço?
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
                {service.fullDesc}
              </p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-green-100"
              >
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-6 md:h-8 bg-green-500 rounded-full"></span>
                  Diferenciais Agro Pet Noel
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    'Atendimento especializado e carinhoso',
                    'Ambiente seguro e higienizado',
                    'Profissionais qualificados',
                    'Produtos de alta qualidade'
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 md:gap-3 text-gray-700 font-medium text-sm md:text-base"
                    >
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-500 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                  Ficou com alguma dúvida ou quer agendar?
                </h3>
                <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                  Nossa equipe está pronta para atender você pelo WhatsApp. Escolha a loja mais próxima e fale com a gente!
                </p>
                <div className="flex justify-center">
                  <WhatsAppDropdown />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
