import React from 'react';
import { FaGithub } from 'react-icons/fa';


import mikiImg from '../assets/miki-logo.png';
import cinemaImg from '../assets/cinema-logo.png';

const projectsData = [
  {
    id: 1,
    title: "CRUD de Animes",
    type: "Web App / Spring Boot",
    status: "Finalizado 2025",
    desc: "API RESTful robusta para gestión de catálogos multimedia. Implementa operaciones CRUD completas, validaciones de backend y consumo dinámico desde React.",
    tech: ["Java Spring Boot", "MySQL", "React"],
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/esfiallos/crud-lab_SpingBoot_React",
    deploy: "https://crud-lab-sping-boot-react.vercel.app/"
  },
  {
    id: 2,
    title: "Miki App (Flutter)",
    type: "Mobile App (Android/iOS)",
    status: "Finalizado 2025",
    desc: "Aplicación móvil nativa para escaneo y control de inventarios. Incluye base de datos local SQLite y generación de reportes PDF offline.",
    tech: ["Flutter", "Dart", "SQLite"],
    img: mikiImg,
    link: "https://github.com/esfiallos/proyecto-flutter-app_gestor"
  },
  {
    id: 3,
    title: "LumenSwift API",
    type: "Backend Service / AI",
    status: "Demo Disponible",
    desc: "Microservicio innovador que integra la Inteligencia Artificial de Google Gemini para análisis de datos y respuestas automatizadas vía chat.",
    tech: ["Express", "MongoDB", "AI Gemini"],
    // Imagen alusiva: Red Neuronal / IA
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/esfiallos/lumenSwift"
  },
  {
    id: 4,
    title: "Cinema Showtime",
    type: "Desktop Software",
    status: "Académico",
    desc: "Sistema de gestión integral para cines desarrollado bajo el patrón MVC. Control de boletería, carteleras y usuarios administrativos.",
    tech: ["Java Swing", "MySQL", "MVC"],
    // Usamos la variable importada arriba
    img: cinemaImg,
    link: "https://github.com/esfiallos/Cinema_Showtime_Proyect"
  },
{
    id: 5,
    title: "Legacy Wallet (IBM AS400)",
    type: "Web App / Full-Stack",
    status: "En Desarrollo",
    desc: "Aplicación que conecta un frontend en React con un backend en Java Spring Boot integrado a un sistema IBM AS400. Actualmente permite la lectura de datos reflejados en una interfaz de tarjetas.",
    tech: ["React", "Java Spring Boot", "IBM AS400"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/esfiallos/walletWithAS400",
    deploy: "https://wallet-with-as-400.vercel.app/"
  }
];

const ProjectCard = ({ project, lang }) => (
    <div className="bg-uth-surface border border-gray-800 rounded-lg overflow-hidden hover:border-uth-green transition-all duration-300 group relative shadow-lg flex flex-col h-full hover:shadow-neon-hover">    
    {/* Imagen con Overlay Técnico */}
    <div className="h-48 overflow-hidden relative border-b border-gray-800 bg-black">
    
      <img 
        src={project.img} 
        alt={project.title} 
        className={`w-full h-full ${project.id === 2 || project.id === 4 ? 'object-contain p-4' : 'object-cover'} opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`} 
      />
      
     
      {(project.id !== 2 && project.id !== 4) && (
         <div className="absolute inset-0 bg-gradient-to-t from-uth-surface via-transparent to-transparent"></div>
      )}
      
      {/* Badge de Plataforma */}
      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur text-white text-[10px] font-code px-2 py-1 rounded border border-gray-600 z-10">
        {project.type}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-nunito font-bold text-xl text-white group-hover:text-uth-green transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-1">
            <div className={`w-2 h-2 rounded-full ${project.status.includes('Finalizado') || project.status.includes('Producción') ? 'bg-uth-neon animate-pulse' : 'bg-yellow-500'}`}></div>
        </div>
      </div>

      <p className="font-nunito text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 
            bg-uth-blue/20 
            text-blue-200 text-xs 
            rounded 
            font-code border border-uth-blue/30 
            hover:bg-uth-green hover:text-uth-dark 
            hover:border-uth-green hover:font-bold 
            transition-all cursor-default select-none"
            >
              {project.status}
        </span>
      </div>
      
      {/* Tech Stack Tags*/}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, i) => (
          <span 
            key={i} 
            className="px-3 py-1 
            bg-uth-blue/20 
            text-blue-200 text-xs 
            rounded 
            font-code border border-uth-blue/30 
            hover:bg-uth-green hover:text-uth-dark 
            hover:border-uth-green hover:font-bold 
            transition-all cursor-default select-none"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Botónes*/}
      <div className="mt-auto flex flex-col gap-3">
          {/* Botón de despliegue  */}
          {project.deploy && (
            <a href={project.deploy} 
            target="_blank" 
            rel="noreferrer" 
            className="w-full 
            flex items-center 
            justify-center gap-2 
            bg-uth-green 
            text-uth-dark 
            hover:bg-white 
            hover:text-black 
            py-3 
            rounded 
            text-sm 
            font-bold 
            transition-all 
            shadow-neon">
              Live Preview
            </a>
          )}
          
          <a href={project.link} 
          target="_blank" 
          rel="noreferrer" 
          className="w-full flex items-center 
          justify-center gap-2 
          bg-gray-800/50 
          hover:bg-uth-green 
          hover:text-uth-dark 
          text-gray-300 py-3 
          rounded text-sm 
          font-bold 
          transition-all 
          border 
          border-gray-700 
          hover:border-uth-green 
          group-hover:shadow-neon">
            View Source Code
          </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-4 bg-uth-dark relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-uth-blue/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-end justify-between mb-12 border-b border-gray-800 pb-4">
            <div>
                <h2 className="font-nunito font-black text-3xl md:text-4xl text-white">Proyectos Destacados</h2>
                <p className="text-uth-green font-code text-sm mt-1">// SELECCIÓN DE TRABAJOS RECIENTES</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;