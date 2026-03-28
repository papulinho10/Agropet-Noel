import { motion } from 'motion/react';
import { Bone, Cat, Dog, Heart, PawPrint, Scissors, Stethoscope, Syringe } from 'lucide-react';

export function Marquee() {
  const items = [
    { icon: <Scissors className="w-6 h-6" />, text: "Banho e Tosa" },
    { icon: <Bone className="w-6 h-6" />, text: "Rações Premium" },
    { icon: <Stethoscope className="w-6 h-6" />, text: "Clínica Veterinária" },
    { icon: <Cat className="w-6 h-6" />, text: "Acessórios" },
    { icon: <Syringe className="w-6 h-6" />, text: "Vacinas" },
    { icon: <Heart className="w-6 h-6" />, text: "Muito Amor" },
    { icon: <Dog className="w-6 h-6" />, text: "Brinquedos" },
    { icon: <PawPrint className="w-6 h-6" />, text: "Farmácia Pet" },
  ];

  // Duplicate items to ensure seamless scrolling
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative flex overflow-x-hidden bg-green-600 text-white py-6 shadow-inner">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.1, color: "#a7f3d0" }}
            className="flex items-center gap-4 text-xl font-bold uppercase tracking-wider cursor-default transition-colors"
          >
            <span className="text-green-300">{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-green-400 mx-4">•</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
