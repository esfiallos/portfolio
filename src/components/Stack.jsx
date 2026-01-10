import React from 'react';
import { FaJava, FaReact, FaCode, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiOracle, SiSpringboot, SiFlutter, SiMysql, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';

// Componente de tarjeta individual mejorado
const TechBadge = ({ icon, name, color }) => (
  <div className="flex flex-col items-center justify-center bg-uth-surface p-6 rounded-xl border border-gray-800 transition-all duration-300 group hover:-translate-y-2 hover:border-uth-neon hover:shadow-neon-hover cursor-default">
    
    {/* Círculo de fondo para contraste del icono */}
    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 group-hover:bg-white/10 transition-colors">
      <div className={`text-3xl ${color} drop-shadow-lg filter group-hover:brightness-125 transition-all`}>
        {icon}
      </div>
    </div>
    
    {/* Texto blanco puro para lectura perfecta */}
    <span className="font-nunito font-bold text-gray-200 group-hover:text-white tracking-wide">
      {name}
    </span>
  </div>
);

const Stack = () => {
  return (
    <section id="habilidades" className="py-24 px-4 bg-uth-dark relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-black text-3xl md:text-4xl text-white mb-2">
            Stack Tecnológico
          </h2>
          <div className="h-1 w-20 bg-uth-green mx-auto rounded-full"></div>
        </div>
        
        {/* Grid ajustado para mejor espacio */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {/* BACKEND */}
          <TechBadge icon={<FaJava />} name="Java" color="text-red-500" />
          <TechBadge icon={<SiSpringboot />} name="Spring Boot" color="text-green-500" />
          <TechBadge icon={<SiOracle />} name="Oracle DB" color="text-red-600" />
          <TechBadge icon={<SiMysql />} name="MySQL" color="text-blue-500" />
          
          {/* FRONTEND & MOBILE */}
          <TechBadge icon={<FaReact />} name="React" color="text-cyan-400" />
          <TechBadge icon={<SiFlutter />} name="Flutter" color="text-blue-400" />
          <TechBadge icon={<SiTailwindcss />} name="Tailwind" color="text-cyan-300" />
          <TechBadge icon={<SiTypescript />} name="TypeScript" color="text-blue-600" />
          
          {/* EXTRAS */}
          <TechBadge icon={<SiMongodb />} name="MongoDB" color="text-green-400" />
          <TechBadge icon={<FaGitAlt />} name="Git" color="text-orange-600" />
          <TechBadge icon={<FaDocker />} name="Docker" color="text-blue-500" />
          <TechBadge icon={<FaCode />} name="Clean Code" color="text-yellow-400" />
        </div>
      </div>
    </section>
  );
};

export default Stack;