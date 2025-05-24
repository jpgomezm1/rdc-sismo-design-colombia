// src/pages/AboutUs.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2C3336] mb-8">
                Sobre <span className="text-[#961A1D]">R&DC</span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8">
                Risk & Design Consulting (R&DC) es una firma líder en ingeniería especializada con más de 25 años 
                de experiencia brindando soluciones innovadoras en ingeniería estructural, geociencias y 
                computación para proyectos en Colombia y Panamá.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                <div>
                  <h2 className="text-2xl font-semibold text-[#2C3336] mb-4">Nuestra Misión</h2>
                  <p className="text-gray-700">
                    Proteger vidas y patrimonio a través de soluciones de ingeniería de vanguardia, 
                    combinando excelencia técnica, innovación y un profundo compromiso con la seguridad 
                    y la sostenibilidad en cada proyecto que emprendemos.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-[#2C3336] mb-4">Nuestra Visión</h2>
                  <p className="text-gray-700">
                    Ser reconocidos como el referente en consultoría de ingeniería estructural 
                    y gestión de riesgos en Latinoamérica, liderando la integración de 
                    tecnologías avanzadas y metodologías innovadoras para crear infraestructuras 
                    más seguras y resilientes.
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-[#2C3336] mb-6">Nuestro Equipo</h2>
              <p className="text-lg text-gray-700 mb-8">
                Contamos con un equipo multidisciplinario de expertos con formación académica 
                avanzada y amplia experiencia práctica en sus respectivos campos. Nuestros 
                ingenieros y científicos combinan conocimiento técnico especializado con un 
                enfoque práctico para resolver los desafíos más complejos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {/* Equipo destacado */}
                {[
                  {
                    name: "Ing. Carlos Ramírez, PhD",
                    position: "Director General",
                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
                    bio: "Especialista en ingeniería sísmica con más de 30 años de experiencia."
                  },
                  {
                    name: "Dra. Alejandra Méndez",
                    position: "Directora de Geociencias",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
                    bio: "PhD en Geofísica con experiencia en microzonificación sísmica."
                  },
                  {
                    name: "Ing. Javier Torres, MSc",
                    position: "Director de Tecnología",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
                    bio: "Experto en modelación computacional y desarrollo de software técnico."
                  }
                ].map((member, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#2C3336] mb-1">{member.name}</h3>
                      <p className="text-[#961A1D] font-medium mb-3">{member.position}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;