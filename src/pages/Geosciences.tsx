// src/pages/Geosciences.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Mountain, Layers, GanttChart, ChevronRight, CheckCircle2, 
  MapPin, Globe, Database, BarChart3, Map, Wand2, 
  Ruler, FileSpreadsheet, AlertTriangle, LineChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Geosciences = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Datos de proyectos destacados
  const projects = [
    {
      title: "Microzonificación Sísmica: Ciudad de Panamá",
      location: "Ciudad de Panamá, Panamá",
      image: "https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/geo1.png",
      description: "Extenso estudio para evaluar la respuesta sísmica del suelo en diferentes zonas de la ciudad, proporcionando insumos para los códigos de construcción locales.",
      highlights: [
        "24 estaciones de monitoreo instaladas",
        "500+ perforaciones y ensayos de laboratorio",
        "Modelación 3D de respuesta sísmica",
        "Mapas de zonificación para diseño"
      ],
      result: "Normativa actualizada que optimizó costos de construcción sin comprometer la seguridad."
    },
    {
      title: "Estabilización de Taludes: Autopista Medellín-Bogotá",
      location: "Antioquia, Colombia",
      image: "https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/geo2.png",
      description: "Análisis y diseño de soluciones para estabilizar taludes en zonas críticas de esta importante vía, previniendo deslizamientos en áreas montañosas con fuertes lluvias.",
      highlights: [
        "15 km de taludes analizados",
        "Diseño de muros anclados y pantallas",
        "Sistemas de drenaje avanzados",
        "Monitoreo automatizado de movimientos"
      ],
      result: "Reducción del 85% en incidentes por deslizamientos en un período de 5 años."
    },
    {
      title: "Evaluación de Licuefacción: Terminal Portuaria",
      location: "Buenaventura, Colombia",
      image: "https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/geo3.png",
      description: "Estudio del potencial de licuefacción en suelos granulares saturados para el diseño de una nueva terminal portuaria, incluyendo recomendaciones para mitigar riesgos.",
      highlights: [
        "Ensayos CPT y SPT especializados",
        "Análisis de vibraciones in situ",
        "Modelación dinámica del comportamiento del suelo",
        "Diseño de mejoramiento del terreno"
      ],
      result: "Implementación de técnicas de vibrocompactación que redujeron el riesgo a niveles aceptables con ahorro de 30% en costos de cimentación."
    }
  ];

  // Servicios detallados
  const detailedServices = [
    {
      icon: Mountain,
      title: "Caracterización Geotécnica",
      color: "#1F4E5F",
      description: "Evaluamos los riesgos y contingencias presupuestales antes de comprar el lote mediante una evaluación preliminar de las propiedades físicas y mecánicas del suelo evitando sorpresas en cimentaciones, contenciones o movimientos de tierra.",
      features: [
        "Investigación exhaustiva del suelo para determinar sus propiedades físicas y mecánicas",
        "Análisis granulométrico y mineralógico",
        "Determinación de límites de Atterberg",
        "Pruebas de resistencia al corte",
        "Ensayos de consolidación y permeabilidad"
      ]
    },
    {
      icon: Layers,
      title: "Microzonificación Sísmica",
      color: "#1F4E5F", 
      description: "Dependiendo de la altura de su edificio, utilizamos modelos de propagación de onda considerando la topografía local y regional así como las propiedades mecánicas del suelo para definir el espectro de diseño particular del sitio.",
      features: [
        "Medición de vibraciones ambientales",
        "Análisis de respuesta sísmica local",
        "Modelación de amplificación sísmica",
        "Mapeo de zonas con comportamiento sísmico similar",
        "Espectros de diseño específicos del sitio"
      ]
    },
    {
      icon: GanttChart,
      title: "Estabilidad de Taludes",
      color: "#1F4E5F",
      description: "Nuestro énfasis en edificios sobre topografías agresivas nos ha permitido desarrollar capacidades para producir soluciones geotécnicas seguras y económicamente viables.",
      features: [
        "Análisis de equilibrio límite",
        "Modelación de elementos finitos",
        "Diseño de sistemas de contención",
        "Análisis de infiltración y drenaje",
        "Monitoreo de desplazamientos"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - con video o imagen dinámica */}
        <section className="relative h-[80vh] md:h-screen overflow-hidden bg-[#111111]">
          {/* Video/Imagen de fondo con overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 z-10"></div>
            <img 
              src="https://storage.googleapis.com/cluvi/Web-Risk/tierra.jpg" 
              alt="Geociencias"
              className="absolute inset-0 w-full h-full object-cover scale-105"
              style={{
                filter: 'brightness(0.6) contrast(1.2)'
              }}
            />
            
            {/* Patrón de puntos sutiles */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay z-20" 
              style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
            </div>
          </div>

          {/* Grid decorativo */}
          <div className="absolute inset-0 z-10 grid grid-cols-6 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-full border-l border-white/5 relative">
                {i === 0 && (
                  <div className="absolute h-full w-px left-0 bg-gradient-to-b from-transparent via-[#1F4E5F]/50 to-transparent opacity-70"></div>
                )}
              </div>
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute top-0 left-0 right-0 h-px bg-white/5" 
                  style={{top: `${i * 12.5}%`}}></div>
            ))}
          </div>
          
          {/* Contenido principal del hero */}
          <div className="relative container mx-auto px-6 h-full z-30 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px bg-[#961A1D] mb-6"
              />
              
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm uppercase tracking-widest text-white/80 font-medium block mb-4"
              >
                Servicio Especializado
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight mb-6"
              >
                Geociencias aplicadas para <span className="text-[#1F4E5F]">decisiones</span> <br className="hidden md:block" />
                estructurales inteligentes
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-white/80 mb-8 max-w-2xl"
              >
                Integramos la caracterización del suelo al diseño estructural para evitar
                sobrecostos y tomar decisiones seguras desde la etapa de factibilidad.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Button 
                  className="bg-[#1F4E5F] hover:bg-[#1F4E5F] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span className="relative z-10 flex items-center">
                    Consultar estudio geotécnico
                    <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Tarjetas de características flotantes */}
            <div className="absolute bottom-12 right-12 md:right-24 space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10"
              >
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#1F4E5F] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">60+</div>
                    <div className="text-white/70 text-xs">Proyectos acompañados</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10"
              >
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-[#1F4E5F] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">600K</div>
                    <div className="text-white/70 text-xs">m² caracterizados</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10"
              >
                <div className="flex items-center">
                  <Database className="h-5 w-5 text-[#1F4E5F] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">2</div>
                    <div className="text-white/70 text-xs">Países</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Explorar</span>
            <div className="w-px h-12 bg-white/20">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: 'easeInOut'
                }}
                className="w-full bg-gradient-to-b from-[#1F4E5F] to-transparent"
              />
            </div>
          </motion.div>
        </section>
        
        {/* Servicios Principales */}
        <section ref={sectionRef} className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-16 text-center">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                  <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Nuestros Servicios</span>
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                  Servicios de <span className="text-[#1F4E5F]">Geociencias</span>
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Nuestro equipo de geólogos e ingenieros geotécnicos provee análisis detallados 
                  del terreno para fundamentar decisiones estructurales y mitigar riesgos naturales.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {detailedServices.map((service, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="mb-6 w-16 h-16 rounded-full bg-[#1F4E5F]/10 flex items-center justify-center group-hover:bg-[#1F4E5F]/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-[#1F4E5F]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2C3336] mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-[#1F4E5F] mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <a 
                        href="#" 
                        className="inline-flex items-center text-[#1F4E5F] hover:text-[#1F4E5F]/80 font-medium group-hover:translate-x-1 transition-transform duration-300"
                      >
                        Leer más
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Nueva sección de indicadores */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-[#2C3336] mb-8">
                Nuestros <span className="text-[#1F4E5F]">indicadores</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#1F4E5F] mb-2">60+</div>
                  <div className="text-sm text-gray-600 mb-2">Proyectos</div>
                  <div className="text-xs text-gray-500">Acompañamiento en más de 60 proyectos</div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#1F4E5F] mb-2">600K</div>
                  <div className="text-sm text-gray-600 mb-2">m² caracterizados</div>
                  <div className="text-xs text-gray-500">de terreno caracterizado para decisiones confiables</div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-[#1F4E5F] mb-2">2</div>
                  <div className="text-sm text-gray-600 mb-2">Países</div>
                  <div className="text-xs text-gray-500">Soluciones en Colombia y Panamá</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Proyectos Destacados Carrusel */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Casos de Éxito</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-6">
                Proyectos <span className="text-[#1F4E5F]">destacados</span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl">
                Nuestra experiencia en proyectos geotécnicos complejos demuestra nuestra capacidad
                para abordar desafíos únicos con soluciones innovadoras y efectivas.
              </p>
            </div>
            
            {/* Navegación de proyectos */}
            <div className="flex mb-8 overflow-x-auto pb-4 hide-scrollbar">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  className={`flex-shrink-0 px-6 py-3 mx-2 rounded-full transition-all duration-300 ${
                    activeProject === idx 
                      ? 'bg-[#1F4E5F] text-white shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {project.title.split(':')[0]}
                </button>
              ))}
            </div>
            
            {/* Contenido del proyecto activo */}
            <div className="relative">
              {projects.map((project, idx) => (
                <div 
                  key={idx}
                  className={`transition-all duration-500 ${
                    activeProject === idx 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 absolute inset-0 pointer-events-none translate-y-8'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#1F4E5F] rounded-xl"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-xl shadow-xl"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-[#1F4E5F] text-white py-3 px-5 rounded-lg shadow-lg max-w-xs">
                        <div className="flex items-center mb-1">
                          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span className="text-sm truncate">{project.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-[#2C3336] mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {project.description}
                      </p>
                      
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
                        <h4 className="text-lg font-medium text-[#1F4E5F] mb-4">Aspectos destacados:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.highlights.map((highlight, highlightIdx) => (
                            <div key={highlightIdx} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-[#1F4E5F] mr-3 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-700">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg border-l-3 border-[#1F4E5F]">
                        <div className="flex items-start">
                          <div className="bg-[#1F4E5F]/10 p-2 rounded-md flex-shrink-0 mr-3">
                            <BarChart3 className="h-5 w-5 text-[#1F4E5F]" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#2C3336] mb-1">Resultado:</div>
                            <p className="text-gray-700">{project.result}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <Button className="bg-[#1F4E5F] hover:bg-[#1F4E5F]/80 text-white transition-colors duration-300">
                          Ver detalles del proyecto
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Controles del carrusel */}
              <div className="flex justify-center mt-8">
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProject(idx)}
                    className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                      activeProject === idx 
                        ? 'bg-[#1F4E5F] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ver proyecto ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Enfoque Técnico */}
        
        
        {/* Aplicaciones y Beneficios */}
        
        
        {/* CTA final */}
        <section className="py-20 bg-[#1F4E5F] text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
              <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
              
              <div className="relative bg-gradient-to-r from-[#1F4E5F]/50 to-[#0c2228]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/5 p-12 text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#961A1D] via-[#961A1D]/50 to-transparent"></div>
                
                <div className="w-20 h-20 rounded-full bg-[#961A1D]/10 flex items-center justify-center mx-auto mb-8">
                  <Globe className="h-10 w-10 text-[#961A1D]" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                  ¿Necesitas un estudio geotécnico para tu proyecto?
                </h2>
                
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Nuestro equipo de especialistas está listo para ayudarte a entender las 
                  condiciones del suelo y optimizar el diseño de tu proyecto.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    className="bg-white hover:bg-white text-[#1F4E5F] px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <span className="relative z-10 flex items-center">
                      Solicitar cotización
                      <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                    </span>
                    <span className="absolute inset-0 w-0 bg-gray-100 group-hover:w-full transition-all duration-300"></span>
                  </Button>
                  
                  <Button 
                    className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white transition-colors duration-300"
                  >
                    Ver portafolio completo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
 };
 
 export default Geosciences;