// src/pages/Computing.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cpu, Database, BarChart3, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Computing = () => {
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
                <span className="text-[#961A1D]">Computación</span> Avanzada
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Desarrollamos y aplicamos soluciones computacionales avanzadas que potencian la precisión 
                del diseño, mejoran la colaboración y optimizan el ciclo de vida de los proyectos.
              </p>
              
              <Button 
                className="bg-[#961A1D] hover:bg-[#961A1D]/90 text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Explorar soluciones digitales
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
                Servicios de <span className="text-[#2C3336]">Computación</span>
              </h2>
              <p className="text-lg text-gray-600">
                Potenciamos la ingeniería con tecnologías digitales avanzadas para optimizar 
                procesos, mejorar la precisión y facilitar la toma de decisiones.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="h-8 w-8 text-[#2C3336]" />,
                  title: "Modelado BIM",
                  description: "Creación de gemelos digitales de edificaciones para optimizar el diseño, construcción y mantenimiento a lo largo del ciclo de vida."
                },
                {
                  icon: <Database className="h-8 w-8 text-[#2C3336]" />,
                  title: "Simulación Avanzada",
                  description: "Modelado de elementos finitos y análisis paramétrico para predecir comportamientos estructurales complejos ante diferentes escenarios."
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-[#2C3336]" />,
                  title: "Visualización de Datos",
                  description: "Transformación de información técnica compleja en visualizaciones intuitivas para facilitar la toma de decisiones estratégicas."
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3336] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="#" className="inline-flex items-center text-[#2C3336] hover:underline font-medium">
                    Leer más
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technology Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Tecnologías</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-10">
                Plataformas y <span className="text-[#2C3336]">Software Especializado</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 mb-6">
                    Utilizamos las herramientas tecnológicas más avanzadas para desarrollar 
                    soluciones computacionales que responden a las necesidades específicas 
                    de cada proyecto de ingeniería.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-[#2C3336] mb-3">Modelado BIM</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Autodesk Revit</li>
                        <li>• Navisworks</li>
                        <li>• Tekla Structures</li>
                        <li>• BIM 360</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-[#2C3336] mb-3">Análisis Estructural</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• SAP2000</li>
                        <li>• ETABS</li>
                        <li>• ANSYS</li>
                        <li>• ABAQUS</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-[#2C3336] mb-3">Geotecnia</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• PLAXIS</li>
                        <li>• GeoStudio</li>
                        <li>• Rocscience Suite</li>
                        <li>• ArcGIS</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="text-lg font-semibold text-[#2C3336] mb-3">Desarrollo Propio</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Python / R</li>
                        <li>• MATLAB</li>
                        <li>• APIs personalizadas</li>
                        <li>• Dashboards interactivos</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/cluvi/Web-Risk/computacion.png" 
                    alt="Modelado BIM" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Use Cases Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-6">
                Casos de <span className="text-[#961A1D]">Aplicación</span>
              </h2>
              <p className="text-lg text-gray-600">
                Nuestras soluciones computacionales han sido implementadas exitosamente 
                en proyectos de diversa índole y complejidad.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Modelo BIM para Hospital de Alta Complejidad",
                  description: "Desarrollo de un gemelo digital completo para un hospital de 50,000 m² que integra sistemas estructurales, MEP y equipamiento médico.",
                  result: "Reducción del 35% en conflictos durante construcción y ahorros estimados del 8% en costos totales."
                },
                {
                  title: "Análisis Paramétrico para Optimización Estructural",
                  description: "Evaluación automatizada de más de 500 configuraciones estructurales para un rascacielos de 68 pisos en zona sísmica.",
                  result: "Optimización que permitió reducir el uso de concreto en 12% y acero en 8% sin comprometer la seguridad."
                },
                {
                  title: "Plataforma de Monitoreo Estructural en Tiempo Real",
                  description: "Sistema IoT con sensores y dashboard para monitoreo continuo de la respuesta estructural de un puente atirantado.",
                  result: "Detección temprana de comportamientos anómalos y planificación proactiva del mantenimiento."
                },
                {
                  title: "Simulación de Escenarios de Riesgo Sísmico",
                  description: "Modelación computacional de la respuesta urbana ante diferentes escenarios sísmicos para una ciudad de 1.5 millones de habitantes.",
                  result: "Identificación de zonas críticas y desarrollo de planes de contingencia priorizados."
                },
                {
                  title: "Automatización de Diseño de Cimentaciones",
                  description: "Desarrollo de herramienta personalizada para diseño y validación automatizada de cimentaciones profundas.",
                  result: "Reducción del 75% en tiempo de diseño y documentación técnica mejorada."
                },
                {
                  title: "Visualización 4D para Gestión de Construcción",
                  description: "Integración de modelado BIM con cronograma de obra para simulación constructiva de centro comercial de 80,000 m².",
                  result: "Optimización de secuencia constructiva y reducción de 45 días en el cronograma total."
                }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-[#2C3336] mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-[#2C3336] font-medium">Resultado:</p>
                    <p className="text-gray-700">{useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-[#2C3336] hover:bg-[#2C3336]/90 text-white">
                Solicitar demostración tecnológica
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Computing;