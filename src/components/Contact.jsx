import React, { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // Estado para guardar lo que escribe el usuario
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    mensaje: ''
  });

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para enviar a WhatsApp
  const sendToWhatsApp = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    const phoneNumber = "50488601209"; // Tu número
    const text = `Hola Emerson, soy ${formData.nombre} de ${formData.empresa || 'una empresa interesada'}. ${formData.mensaje}`;
    
    // Crear la URL de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Abrir en nueva pestaña
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-uth-surface border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Info Lateral */}
        <div>
          <h2 className="font-nunito font-black text-4xl text-white mb-6">
            Hablemos de Negocios
          </h2>
          <p className="font-nunito text-gray-400 text-lg mb-8">
            ¿Tienes una vacante o un proyecto? Envíame un mensaje directo a mi WhatsApp profesional o descarga mi CV completo.
          </p>

          <div className="flex gap-4">
             {/* Botón de CV redundante pero útil aquí también */}
             <a href="/cv.pdf" download className="px-6 py-3 bg-gray-800 border border-gray-700 rounded hover:border-uth-green text-white transition-all flex items-center gap-2">
                <FaLinkedin /> LinkedIn
             </a>
             <a href="https://github.com/esfiallos" target="_blank" className="px-6 py-3 bg-gray-800 border border-gray-700 rounded hover:border-uth-green text-white transition-all flex items-center gap-2">
                <FaGithub /> GitHub
             </a>
          </div>
        </div>

        {/* Formulario WhatsApp */}
        <div className="bg-uth-dark p-8 rounded-2xl border border-gray-800 shadow-2xl relative z-10">
          <form onSubmit={sendToWhatsApp} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Nombre</label>
                <input 
                  type="text" 
                  name="nombre"
                  required
                  onChange={handleChange}
                  className="w-full bg-uth-surface border border-gray-700 text-white rounded p-3 focus:outline-none focus:border-uth-green focus:ring-1 focus:ring-uth-green font-nunito"
                  placeholder="Tu Nombre"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Empresa</label>
                <input 
                  type="text" 
                  name="empresa"
                  onChange={handleChange}
                  className="w-full bg-uth-surface border border-gray-700 text-white rounded p-3 focus:outline-none focus:border-uth-green font-nunito"
                  placeholder="Nombre Empresa"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase">Mensaje</label>
              <textarea 
                name="mensaje"
                required
                onChange={handleChange}
                rows="4"
                className="w-full bg-uth-surface border border-gray-700 text-white rounded p-3 focus:outline-none focus:border-uth-green resize-none font-nunito"
                placeholder="Me interesa tu perfil para..."
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 rounded hover:bg-green-500 hover:shadow-neon transition-all flex items-center justify-center gap-2 text-lg">
              <FaWhatsapp className="text-2xl" /> ENVIAR A WHATSAPP
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">
              *Esto abrirá un chat directo conmigo al +504 8860-1209
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;