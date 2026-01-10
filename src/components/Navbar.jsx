import React from 'react';
import { FaTerminal } from 'react-icons/fa'; // Icono más "Dev" que el gamepad

const Navbar = () => {
  const navItems = ['Inicio', 'Habilidades', 'Proyectos', 'Contacto'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-uth-dark/95 backdrop-blur-md border-b-2 border-uth-green/30 shadow-hud">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Personal */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 bg-uth-green/10 rounded border border-uth-green/50">
            <FaTerminal className="text-uth-green text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="font-press text-[10px] text-white tracking-widest">EMERSON</span>
            <span className="font-code text-[10px] text-uth-neon">DEV_SYSTEM_READY</span>
          </div>
        </div>

        {/* Menú Profesional */}
        <div className="hidden md:flex gap-10 font-nunito font-bold text-sm text-gray-300">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative py-2 hover:text-white transition-colors group"
            >
              {item}
              {/* Efecto de subrayado animado verde */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-uth-neon transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;