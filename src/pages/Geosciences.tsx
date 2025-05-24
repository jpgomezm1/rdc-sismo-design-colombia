// src/pages/Geosciences.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mountain, Layers, GanttChart, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Geosciences = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-28 bg-gradient-to-br from-[#1F4E5F] to-[#0c2228] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-white/80 font-medium">Servicio Especializado</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
                <span className="text-[#961A1D]">Geociencias</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Analizamos las condiciones del suelo y subsuelo para fundamentar decisiones 
                estructurales críticas, optimizando la interacción suelo-estructura en cada proyecto.
              </p>
              
              <Button 
                className="bg-[#961A1D] hover:bg-[#961A1D]/90 text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Consultar estudio geotécnico
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-6">
                Servicios de <span className="text-[#1F4E5F]">Geociencias</span>
              </h2>
              <p className="text-lg text-gray-600">
                Nuestro equipo de geólogos e ingenieros geotécnicos provee análisis detallados 
                del terreno para fundamentar decisiones estructurales y mitigar riesgos naturales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mountain className="h-8 w-8 text-[#1F4E5F]" />,
                  title: "Caracterización Geotécnica",
                  description: "Investigación exhaustiva del suelo para determinar sus propiedades físicas y mecánicas relevantes para el diseño estructural."
                },
                {
                  icon: <Layers className="h-8 w-8 text-[#1F4E5F]" />,
                  title: "Microzonificación Sísmica",
                  description: "Identificación de zonas con comportamiento sísmico similar para optimizar el diseño estructural según el terreno."
                },
                {
                  icon: <GanttChart className="h-8 w-8 text-[#1F4E5F]" />,
                  title: "Estabilidad de Taludes",
                  description: "Análisis y diseño de soluciones para garantizar la seguridad en terrenos con pendientes pronunciadas y condiciones geológicas complejas."
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3336] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="#" className="inline-flex items-center text-[#1F4E5F] hover:underline font-medium">
                    Leer más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Study Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Caso de Éxito</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-10">
                Estudio de Microzonificación Sísmica: <span className="text-[#1F4E5F]">Ciudad de Panamá</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/cluvi/Web-Risk/geociencias.png" 
                    alt="Estudio Geotécnico" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <p className="text-gray-700 mb-6">
                    Realizamos un extenso estudio de microzonificación sísmica para la Ciudad de Panamá, 
                    evaluando las propiedades dinámicas del suelo y su respuesta ante eventos sísmicos 
                    en diferentes zonas de la ciudad.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#1F4E5F] mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Instalación de 24 estaciones de monitoreo en toda la ciudad</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#1F4E5F] mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Análisis de más de 500 perforaciones y ensayos de laboratorio</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#1F4E5F] mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Modelación 3D de la respuesta sísmica del suelo</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#1F4E5F] mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Generación de mapas de zonificación para el diseño sísmico</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 font-medium">
                    El estudio resultó en una normativa actualizada para el diseño sismorresistente, 
                    optimizando costos de construcción sin comprometer la seguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Approach Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-6">
                Nuestro Enfoque <span className="text-[#1F4E5F]">Técnico</span>
              </h2>
              <p className="text-lg text-gray-600">
                Combinamos metodologías tradicionales con tecnologías avanzadas para obtener 
                caracterizaciones precisas del terreno y análisis geotécnicos robustos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3336] mb-4">Técnicas de Exploración</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Perforaciones con recuperación de núcleos</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Ensayos de penetración estándar (SPT)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Ensayos de cono (CPT) y piezocono (CPTU)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Ensayos geofísicos (MASW, ReMi, Down-hole)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Monitoreo de vibraciones ambientales</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-[#2C3336] mb-4">Análisis y Modelación</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Caracterización de propiedades dinámicas del suelo</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Modelación de respuesta sísmica local 1D y 2D</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Análisis de estabilidad de taludes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Evaluación de licuefacción y sus efectos</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#1F4E5F] rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Diseño de cimentaciones especiales</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-[#1F4E5F] hover:bg-[#1F4E5F]/90 text-white">
                Solicitar una consulta técnica
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Geosciences;