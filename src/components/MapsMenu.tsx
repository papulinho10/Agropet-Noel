import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, X } from 'lucide-react';
import { locations } from '../data';

export function MapsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block w-full sm:w-auto">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-blue-500/50 hover:bg-blue-700 transition-all w-full"
      >
        <MapPin className="w-5 h-5" />
        Endereço
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-14 md:top-16 left-0 mt-2 w-[calc(100vw-2rem)] sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-40"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 md:p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-base md:text-lg">Nossas Lojas</h3>
                <p className="text-xs md:text-sm opacity-90">Escolha a unidade</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded-full transition-colors">
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {locations.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2 md:p-3 hover:bg-blue-50 rounded-xl transition-colors group"
                >
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Navigation className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-gray-800">{loc.name}</p>
                    <p className="text-xs text-gray-500 line-clamp-1">{loc.address}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
