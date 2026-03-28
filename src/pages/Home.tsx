import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ShieldCheck, Clock, CheckCircle2, MapPin, Instagram, MessageCircle, PawPrint, Bone, Cat } from 'lucide-react';
import { services, reviews, locations } from '../data';
import { MapsMenu } from '../components/MapsMenu';
import { WhatsAppDropdown } from '../components/WhatsAppDropdown';
import { FAQ } from '../components/FAQ';
import { Marquee } from '../components/Marquee';

export function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // If we've reached the end, scroll back to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll to the next image
          carouselRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const width = carouselRef.current.clientWidth;
      setActiveBanner(Math.round(scrollLeft / width));
    }
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <main className="pt-20 overflow-hidden">
      {/* Mobile Banner */}
      <div className="block md:hidden w-full bg-green-50 relative">
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="w-full flex-shrink-0 snap-center">
            <img 
              src="https://i.postimg.cc/qRG8nmvJ/4.png" 
              alt="Banner Agro Pet Noel 1" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full flex-shrink-0 snap-center">
            <img 
              src="https://i.postimg.cc/MKHyMm2p/5.png" 
              alt="Banner Agro Pet Noel 2" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollTo({ left: index * carouselRef.current.clientWidth, behavior: 'smooth' });
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${activeBanner === index ? 'w-6 bg-green-500' : 'w-2 bg-gray-300/80'}`}
              aria-label={`Ir para o banner ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center bg-green-50 overflow-hidden py-12 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-green-50/90 to-transparent z-0" />
          
        {/* Floating Paw Prints and Pet Icons */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 md:top-20 left-4 md:left-10 text-green-200/40"
          >
            <PawPrint className="w-10 h-10 md:w-16 md:h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 md:bottom-40 left-1/4 text-green-200/40"
          >
            <Bone className="w-12 h-12 md:w-20 md:h-20" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-32 md:top-40 right-1/4 md:right-1/3 text-green-200/40"
          >
            <Cat className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-10 md:bottom-20 right-4 md:right-10 text-green-200/40"
          >
            <PawPrint className="w-8 h-8 md:w-12 md:h-12" />
          </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-600 font-semibold text-xs md:text-sm"
              >
                <Heart className="w-4 h-4" />
                <span>O melhor para o seu pet na Serra Gaúcha</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Amor, Cuidado e <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Alegria</span> para seu Pet
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A Agro Pet Noel é a sua parceira de confiança em Gramado e Canela. Oferecemos tudo o que seu melhor amigo precisa, com o carinho que ele merece.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#servicos"
                  className="bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-green-600 transition-colors shadow-xl shadow-green-500/30 flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  Nossos Serviços
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contato"
                  className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-50 transition-colors shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center w-full sm:w-auto"
                >
                  Fale Conosco
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-emerald-500 rounded-[3rem] rotate-6 opacity-20 blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000"
                alt="Cachorros brincando"
                className="relative z-10 rounded-[3rem] shadow-2xl border-8 border-white object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-3xl shadow-2xl border border-white/50 z-20 flex items-center gap-3 md:gap-4"
              >
                <div className="bg-green-500 p-3 md:p-4 rounded-2xl text-white shadow-lg shadow-green-500/30">
                  <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <p className="font-black text-xl md:text-2xl text-gray-900">4 Lojas</p>
                  <p className="text-gray-600 font-medium text-sm md:text-base">Em Gramado e Canela</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Sobre Nós - Bento Grid */}
      <section id="sobre" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h2 className="text-green-500 font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
                  <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                  Sobre a Agro Pet Noel
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  Tradição e Carinho na Serra Gaúcha
                </h3>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                A Agro Pet Noel nasceu da paixão por animais e do desejo de oferecer um atendimento diferenciado e completo para os pets da região das Hortênsias. Com 4 unidades estrategicamente localizadas em Gramado e Canela, estamos sempre perto de você.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-green-50 p-5 md:p-6 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-all"
                >
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-green-500 mb-3 md:mb-4" />
                  <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-1 md:mb-2">+10 Anos</h4>
                  <p className="text-gray-600 text-xs md:text-sm">De experiência e amor aos pets</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="bg-emerald-50 p-5 md:p-6 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-all"
                >
                  <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-emerald-500 mb-3 md:mb-4" />
                  <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-1 md:mb-2">4 Lojas</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Em Gramado e Canela</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 h-[400px] sm:h-[500px] md:h-[600px]"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-1 row-span-2 overflow-hidden rounded-3xl shadow-xl relative group"
              >
                <div className="absolute inset-0 bg-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=600"
                  alt="Gato"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-1 row-span-1 overflow-hidden rounded-3xl shadow-xl relative group"
              >
                <div className="absolute inset-0 bg-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600"
                  alt="Cachorro no banho"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-1 row-span-1 bg-green-600 rounded-3xl p-4 md:p-8 text-white flex flex-col justify-center relative overflow-hidden group shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <PawPrint className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4 text-green-200 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <h4 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">Equipe Especializada</h4>
                  <p className="text-green-100 text-xs md:text-sm">Profissionais apaixonados pelo que fazem.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
          <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-green-500 font-bold tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Nossos Serviços
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Tudo o que seu pet precisa em um só lugar
            </h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/20 border-2 border-transparent hover:border-green-100 transition-all duration-300 group flex flex-col relative"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl text-white">
                      <PawPrint className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4 group-hover:text-green-600 transition-colors">{service.title}</h4>
                  <p className="text-gray-600 mb-6 md:mb-8 flex-1 text-sm md:text-base">{service.shortDesc}</p>
                  <Link
                    to={`/servicos/${service.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-600 w-full py-3 md:py-4 rounded-xl font-bold hover:bg-green-500 hover:text-white transition-colors group/btn"
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contato & Lojas */}
      <section id="contato" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000"
            alt="Background"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h2 className="text-green-500 font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
                  <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                  Contato
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                  Venha nos visitar ou fale com a gente
                </h3>
              </div>
              
              <p className="text-lg md:text-xl text-gray-400">
                Estamos sempre prontos para atender você e seu pet com o maior carinho. Escolha a forma mais conveniente de falar conosco.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.instagram.com/agropetnoel_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-[#e6683c]/50 transition-all w-full sm:w-auto"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  Instagram
                </motion.a>
                <WhatsAppDropdown />
                <MapsMenu />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-bold text-green-400 mb-6 border-b border-gray-800 pb-4">Horário de Funcionamento</h4>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } },
                  hidden: {}
                }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {locations.map((loc, index) => (
                  <motion.div 
                    key={loc.id} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="bg-gray-800/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-colors group"
                  >
                    <h4 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-green-400 transition-colors">{loc.name}</h4>
                    <div className="space-y-3 md:space-y-4">
                      <p className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" />
                        {loc.address}
                      </p>
                      <p className="flex items-start gap-2 md:gap-3 text-gray-400 text-xs md:text-sm">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-green-500 shrink-0 mt-0.5" />
                        {loc.hours}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-green-500 font-bold tracking-wider uppercase mb-2 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Depoimentos
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              O que dizem nossos clientes
            </h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {}
            }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/80 shadow-xl shadow-gray-200/30 relative hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="flex gap-1 text-yellow-500 mb-4 md:mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg italic mb-6 md:mb-8 relative z-10">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-lg md:text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{review.name}</h4>
                  </div>
                </div>
                <div className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-200 opacity-50">
                  <svg width="48" height="48" className="md:w-[64px] md:h-[64px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.182C16.411 14.182 15.048 14.182 14.017 14.182C12.986 14.182 12.161 13.357 12.161 12.326C12.161 11.295 12.986 10.47 14.017 10.47C15.048 10.47 16.411 10.47 16.411 10.47C18.473 10.47 20.125 12.122 20.125 14.184C20.125 16.246 18.473 17.898 16.411 17.898C15.38 17.898 14.017 17.898 14.017 17.898V21H14.017ZM6.017 21L8.411 14.182C8.411 14.182 7.048 14.182 6.017 14.182C4.986 14.182 4.161 13.357 4.161 12.326C4.161 11.295 4.986 10.47 6.017 10.47C7.048 10.47 8.411 10.47 8.411 10.47C10.473 10.47 12.125 12.122 12.125 14.184C12.125 16.246 10.473 17.898 8.411 17.898C7.38 17.898 6.017 17.898 6.017 17.898V21H6.017Z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
