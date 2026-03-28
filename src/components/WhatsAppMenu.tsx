import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, MapPin } from 'lucide-react';
import { locations } from '../data';

export function WhatsAppMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-14 md:bottom-16 right-0 mb-4 w-64 md:w-72 bg-white rounded-2xl shadow-2xl border border-green-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <h3 className="font-bold text-base md:text-lg">Fale Conosco</h3>
              <p className="text-xs md:text-sm opacity-90">Escolha a loja mais próxima</p>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {locations.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 md:p-3 hover:bg-green-50 rounded-xl transition-colors group"
                >
                  <div className="bg-green-100 p-2 rounded-full text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-800">{loc.name}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {loc.address.split('-')[0]}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors relative"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        )}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />}
        </div>
      </motion.button>
    </div>
  );
}
