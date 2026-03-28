import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/#servicos' },
    { name: 'Sobre', path: '/#sobre' },
    { name: 'Contato', path: '/#contato' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        // If not on home page, let the router handle it
        return;
      }
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-0' : 'bg-white/50 backdrop-blur-sm border-b border-green-100/50 py-1 md:py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="https://i.postimg.cc/FKNzchdK/e7a70340-17c8-4545-a0e1-c67ae30bf0f1.png" alt="Agro Pet Noel Logo" className="h-12 md:h-16 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="relative text-gray-600 hover:text-green-500 font-medium transition-colors group/link"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover/link:w-full"></span>
                </Link>
              ))}
            </div>
            <a
              href="https://www.instagram.com/agropetnoel_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-[#e6683c] font-semibold transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>Siga-nos</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://www.instagram.com/agropetnoel_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#e6683c] p-2 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-500 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-green-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="text-gray-800 hover:text-green-500 font-semibold text-lg py-2 border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/agropetnoel_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#e6683c] px-5 py-3 font-semibold mt-4 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
