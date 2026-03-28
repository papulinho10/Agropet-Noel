import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import { locations } from '../data';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 border-t-4 border-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="https://i.postimg.cc/FKNzchdK/e7a70340-17c8-4545-a0e1-c67ae30bf0f1.png" alt="Agro Pet Noel Logo" className="h-12 md:h-16 object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cuidando do seu melhor amigo com amor, dedicação e os melhores produtos da região das Hortênsias.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/agropetnoel_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              <li><a href="/#sobre" className="hover:text-green-500 transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-4"></span>Sobre Nós</a></li>
              <li><a href="/#servicos" className="hover:text-green-500 transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-4"></span>Nossos Serviços</a></li>
              <li><a href="/#avaliacoes" className="hover:text-green-500 transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-4"></span>Avaliações</a></li>
              <li><a href="/#contato" className="hover:text-green-500 transition-colors flex items-center gap-2 group"><span className="w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-4"></span>Contato</a></li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Horário de Atendimento
            </h3>
            <ul className="space-y-6">
              <li className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                <strong className="text-green-400 block mb-2 font-black tracking-wide">GRAMADO</strong>
                <span className="block text-sm">Segunda a Sexta: 08:00 às 18:30</span>
                <span className="block text-sm">Sábado: 08:00 às 18:00</span>
              </li>
              <li className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                <strong className="text-green-400 block mb-2 font-black tracking-wide">CANELA</strong>
                <span className="block text-sm">Segunda a Sexta: 08:00 às 19:00</span>
                <span className="block text-sm">Sábado: 08:00 às 18:00</span>
              </li>
            </ul>
          </div>

          {/* Lojas */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full"></span>
              Nossas Lojas
            </h3>
            <ul className="space-y-4">
              {locations.map((loc) => (
                <li key={loc.id} className="group">
                  <div className="block hover:bg-gray-800 p-3 -mx-3 rounded-xl transition-colors">
                    <strong className="text-white block mb-1 group-hover:text-green-400 transition-colors">{loc.name}</strong>
                    <a href={loc.maps} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 flex items-start gap-2 mt-2 hover:text-blue-400 transition-colors">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" />
                      {loc.address}
                    </a>
                    <a href={loc.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 flex items-start gap-2 mt-2 hover:text-green-400 transition-colors">
                      <MessageCircle className="w-4 h-4 shrink-0 mt-0.5 text-green-500" />
                      WhatsApp
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Agro Pet Noel. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <span className="text-red-500">♥</span> para pets felizes
          </p>
        </div>
      </div>
    </footer>
  );
}
