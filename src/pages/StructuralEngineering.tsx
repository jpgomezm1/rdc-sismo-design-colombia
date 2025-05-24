// src/pages/StructuralEngineering.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, ShieldCheck, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StructuralEngineering = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-28 bg-gradient-to-br from-[#2C3336] to-[#1a1f20] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-white/80 font-medium">Servicio Especializado</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
                Ingeniería <span className="text-[#961A1D]">Estructural</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Combinamos análisis avanzados con décadas de experiencia para ofrecer soluciones 
                estructurales optimizadas que garantizan seguridad y eficiencia en zonas de alta 
                actividad sísmica.
              </p>
              
              <Button 
                className="bg-[#961A1D] hover:bg-[#961A1D]/90 text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Consulta tu proyecto
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
                Servicios de <span className="text-[#961A1D]">Ingeniería Estructural</span>
              </h2>
              <p className="text-lg text-gray-600">
                Nuestro equipo de ingenieros estructurales brinda soluciones precisas y 
                confiables para los desafíos más complejos de construcción e infraestructura.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Building2 className="h-8 w-8 text-[#961A1D]" />,
                  title: "Diseño Sismorresistente",
                  description: "Desarrollamos edificaciones que responden de manera óptima ante eventos sísmicos, preservando vidas y minimizando daños estructurales."
                },
                {
                  icon: <ShieldCheck className="h-8 w-8 text-[#961A1D]" />,
                  title: "Análisis No-Lineal",
                  description: "Realizamos simulaciones avanzadas del comportamiento estructural bajo cargas extremas para validar el rendimiento esperado."
                },
                {
                  icon: <Award className="h-8 w-8 text-[#961A1D]" />,
                  title: "Reforzamiento Estructural",
                  description: "Evaluamos y diseñamos soluciones para la rehabilitación y actualización de estructuras existentes para cumplir con normativas actuales."
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3336] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="#" className="inline-flex items-center text-[#961A1D] hover:underline font-medium">
                    Leer más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-16">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Metodología</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-6">
                Nuestro Proceso de <span className="text-[#961A1D]">Trabajo</span>
              </h2>
              
              <p className="text-lg text-gray-600">
                Abordamos cada proyecto con un proceso riguroso y sistemático que garantiza 
                soluciones óptimas para las necesidades específicas de cada cliente.
              </p>
            </div>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Análisis de Requerimientos",
                  description: "Estudiamos a profundidad las necesidades del proyecto, normativas aplicables y condiciones del sitio para establecer los criterios de diseño adecuados."
                },
                {
                  number: "02",
                  title: "Modelación y Análisis",
                  description: "Utilizamos software especializado para crear modelos digitales detallados y realizar análisis estáticos y dinámicos que validan el comportamiento de la estructura."
                },
                {
                  number: "03",
                  title: "Diseño y Optimización",
                  description: "Desarrollamos soluciones estructurales que equilibran seguridad, funcionalidad y economía, optimizando materiales y procesos constructivos."
                },
                {
                  number: "04",
                  title: "Documentación y Acompañamiento",
                  description: "Entregamos documentación técnica completa y brindamos acompañamiento durante la fase de construcción para garantizar la correcta implementación del diseño."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#961A1D]/10 flex items-center justify-center text-[#961A1D] font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2C3336] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                  <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Ventajas</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-6">
                  Por qué elegir nuestros <span className="text-[#961A1D]">servicios</span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    "Equipo con experiencia en proyectos de alta complejidad",
                    "Uso de metodologías avanzadas de análisis y diseño",
                    "Compromiso con la seguridad y la calidad",
                    "Soluciones optimizadas que reducen costos sin comprometer la seguridad",
                    "Cumplimiento riguroso de normativas nacionales e internacionales"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-[#961A1D] mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Button className="bg-[#2C3336] hover:bg-[#2C3336]/90 text-white">
                    Solicitar consultoría gratuita
                  </Button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop" 
                  alt="Ingeniería Estructural" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StructuralEngineering;