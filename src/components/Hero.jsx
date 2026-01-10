import React from 'react';
import { FaGithub, FaFileDownload, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/perfil.png'; // Asegúrate que la foto esté aquí

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-uth-dark">
      {/* Efectos de fondo */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-uth-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-uth-green/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Badge de Grado Académico */}
          <div className="inline-flex items-center gap-2 bg-uth-surface border border-uth-green/50 px-4 py-2 rounded-full mb-6 shadow-neon">
            <span className="w-2 h-2 bg-uth-neon rounded-full animate-pulse"></span>
            <span className="font-code text-xs text-uth-neon tracking-wider uppercase font-bold">
              Grado: Tecnólogo Universitario
            </span>
          </div>

          <h1 className="font-nunito font-black text-5xl lg:text-7xl text-white mb-2 leading-tight">
            Emerson <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-uth-neon to-uth-green">
              Barrientos
            </span>
          </h1>

          <h2 className="font-press text-xs md:text-sm text-gray-400 mb-6 uppercase tracking-widest">
            Desarrollo de Aplicaciones Computacionales
          </h2>
          
          <p className="font-nunito text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Especialista el diseño de aplicaciones y programas computacionales, desarrollo web, movil y backend 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Botón de Descarga de CV */}
            <a 
              href="/cv.pdf" 
              download="CV_Emerson_Barrientos.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-uth-green text-uth-dark font-bold rounded hover:bg-white hover:shadow-neon transition-all transform hover:-translate-y-1"
            >
              <FaFileDownload /> DESCARGAR HOJA DE VIDA
            </a>
            
            <a href="https://github.com/esfiallos" target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-600 text-white font-bold rounded hover:border-uth-green hover:text-uth-green transition-colors">
              <FaGithub /> GITHUB
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA: FOTO */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          {/* Marco Decorativo Tecnológico */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Círculo rotatorio decorativo */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-uth-green/30 animate-[spin_10s_linear_infinite]"></div>
            
            {/* La Foto con máscara circular y borde */}
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-uth-blue shadow-2xl bg-uth-surface">
              <img 
                src={profileImg} 
                alt="Emerson Barrientos Graduación" 
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" 
              />
            </div>

            {/* Etiqueta flotante */}
            <div className="absolute bottom-4 right-0 bg-uth-dark/90 backdrop-blur border border-uth-green px-4 py-2 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
              <a href="https://credenciales.uth.hn/1f9e5b33-af66-414a-bced-10724e171134#acc.rqUebY47"> <p className="font-code text-xs text-uth-neon">TÍTULO VERIFICADO VER AQUI</p> </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;