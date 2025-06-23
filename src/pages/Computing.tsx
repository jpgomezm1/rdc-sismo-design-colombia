// src/pages/Computing.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Cpu, Database, BarChart3, ChevronRight, CheckCircle2, 
  Lightbulb, Compass, Activity, FileText, 
  Construction, HardHat, Building2, ShieldCheck, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Computing = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeTab, setActiveTab] = useState('modeling');
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

  // Datos de los diferentes tipos de servicios
  const serviceTypes = {
    modeling: {
      title: "Modelado BIM",
      description: "Creación de gemelos digitales de edificaciones para optimizar el diseño, construcción y mantenimiento a lo largo del ciclo de vida del proyecto.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Modelos 3D inteligentes y paramétricos",
        "Detección de interferencias interdisciplinarias",
        "Simulación constructiva 4D",
        "Documentación técnica automatizada"
      ]
    },
    simulation: {
      title: "Simulación Avanzada",
      description: "Modelado de elementos finitos y análisis paramétrico para predecir comportamientos estructurales complejos ante diferentes escenarios y condiciones de carga.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Análisis no lineal y dinámico",
        "Evaluación de fatiga y durabilidad",
        "Optimización paramétrica",
        "Simulación de eventos extremos"
      ]
    },
    visualization: {
      title: "Visualización de Datos",
      description: "Transformación de información técnica compleja en visualizaciones intuitivas para facilitar la toma de decisiones estratégicas en tiempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Dashboards interactivos en tiempo real",
        "Generación de reportes automatizados",
        "Visualización 3D de resultados técnicos",
        "Integración con sistemas IoT"
      ]
    },
    development: {
      title: "Desarrollo Personalizado",
      description: "Creación de soluciones tecnológicas a medida para resolver problemas específicos de ingeniería y optimizar flujos de trabajo complejos.",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Scripts y automatizaciones a medida",
        "Integración entre plataformas técnicas",
        "Desarrollo de APIs personalizadas",
        "Herramientas de cálculo optimizadas"
      ]
    }
  };

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
              src="https://storage.googleapis.com/cluvi/Web-Risk/computacion.png" 
              alt="Computación Avanzada"
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
                  <div className="absolute h-full w-px left-0 bg-gradient-to-b from-transparent via-[#961A1D]/50 to-transparent opacity-70"></div>
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
                Computación aplicada e <span className="text-[#961A1D]">innovadora</span> <br className="hidden md:block" />
                para resolver nuevos problemas
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-white/80 mb-8 max-w-2xl"
              >
                Creamos y aplicamos tecnología propia para responder preguntas que las
                herramientas tradicionales no logran resolver.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Button 
                  className="bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span className="relative z-10 flex items-center">
                    Explorar soluciones digitales
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
                  <Cpu className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">100%</div>
                    <div className="text-white/70 text-xs">Proyectos con cantidades exactas</div>
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
                  <Database className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">50+</div>
                    <div className="text-white/70 text-xs">Alternativas de reforzamiento</div>
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
                  <BarChart3 className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">12+</div>
                    <div className="text-white/70 text-xs">Herramientas propias</div>
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
                className="w-full bg-gradient-to-b from-[#961A1D] to-transparent"
              />
            </div>
          </motion.div>
        </section>
        
        {/* Servicios principales */}
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
                  Soluciones <span className="text-[#961A1D]">digitales</span> <br />de alto rendimiento
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Nuestro equipo de ingenieros computacionales desarrolla y aplica tecnologías avanzadas
                  para potenciar la precisión, eficiencia y calidad de los proyectos de ingeniería.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Cpu,
                    title: "Modelado BIM Integrado",
                    description: "Conectamos nuestros diseños estructurales con datos de obra, reforzamiento, consumos e iteraciones para decisiones rápidas y seguras."
                  },
                  {
                    icon: Database,
                    title: "Simulación Avanzada y Parametrización",
                    description: "Implementamos modelos numéricos y herramientas propias para anticipar el comportamiento de sistemas complejos bajo múltiples escenarios."
                  },
                  {
                    icon: BarChart3,
                    title: "Visualización y Explotación de Datos",
                    description: "Convertimos resultados técnicos en visualizaciones simples y comparables, facilitando la toma de decisiones informadas para equipos de diseño y construcción."
                  }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="mb-6 w-16 h-16 rounded-full bg-[#961A1D]/10 flex items-center justify-center group-hover:bg-[#961A1D]/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-[#961A1D]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2C3336] mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <a href="#" className="inline-flex items-center text-[#961A1D] hover:text-[#961A1D]/80 font-medium group-hover:translate-x-1 transition-transform duration-300">
                      Leer más
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Nueva sección de diferenciador */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-[#2C3336] mb-6">
                Nuestro <span className="text-[#961A1D]">diferenciador</span> clave
              </h3>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
                <p className="text-lg text-gray-600 mb-6">
                  Nuestros desarrollos como <strong>ProDet</strong> y <strong>StructuBIM</strong> son fruto de años de inversión en
                  I+D. No solo usamos software: <strong>lo creamos</strong>, para ayudarte a tomar mejores
                  decisiones, más rápido y con más confianza.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#961A1D] mb-2">100%</div>
                    <div className="text-sm text-gray-600 mb-2">Proyectos estructurales</div>
                    <div className="text-xs text-gray-500">se entregan acompañados de cantidades exactas, elemento por elemento, figura por figura</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#961A1D] mb-2">50+</div>
                    <div className="text-sm text-gray-600 mb-2">Maneras diferentes</div>
                    <div className="text-xs text-gray-500">de reforzar el edificio para acomodarse a las necesidades de tu empresa</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#961A1D] mb-2">12+</div>
                    <div className="text-sm text-gray-600 mb-2">Herramientas propias</div>
                    <div className="text-xs text-gray-500">y especializadas desarrolladas por nuestro equipo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tipos de servicios - Con tabs */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-[#961A1D]"></div>
                <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Aplicaciones</span>
                <div className="h-px w-12 bg-[#961A1D]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                Servicios <span className="text-[#961A1D]">tecnológicos</span> especializados
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Nuestras soluciones computacionales abarcan diferentes áreas y necesidades,
                adaptándose a los requerimientos específicos de cada proyecto.
              </p>
              
              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {Object.entries(serviceTypes).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      activeTab === key 
                        ? 'bg-[#961A1D] text-white shadow-md' 
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {value.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contenido de tab activo */}
            <div className="max-w-6xl mx-auto">
              {Object.entries(serviceTypes).map(([key, value]) => (
                <div 
                  key={key} 
                  className={`transition-opacity duration-300 ${
                    activeTab === key ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#961A1D] rounded-xl"></div>
                      <img 
                        src={value.image} 
                        alt={value.title} 
                        className="w-full h-full object-cover rounded-xl shadow-xl"
                      />
                      <div className="absolute -bottom-4 -right-4 bg-[#961A1D] text-white py-3 px-5 rounded-lg shadow-lg">
                        <div className="font-bold text-lg">{value.title}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-[#2C3336] mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 mb-8">
                        {value.description}
                      </p>
                      
                      <div className="space-y-4">
                        {value.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-5 h-5 rounded-full bg-[#961A1D]/10 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-[#961A1D]"></div>
                              </div>
                            </div>
                            <p className="ml-4 text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <Button className="bg-[#2C3336] hover:bg-[#961A1D] text-white transition-colors duration-500">
                          Ver soluciones de {value.title.toLowerCase()}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Proceso de trabajo */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                  <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Metodología</span>
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                  Nuestro <span className="text-[#961A1D]">proceso</span> de trabajo
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Abordamos cada proyecto con un enfoque sistemático que garantiza 
                  soluciones tecnológicas óptimas, adaptadas a las necesidades específicas.
                </p>
              </div>
              
              {/* Proceso con timeline visual */}
              <div className="relative">
                {/* Línea central conectora */}
                <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#961A1D] via-[#961A1D] to-[#961A1D]/30 md:transform md:-translate-x-1/2"></div>
                
                {[
                  {
                    number: "01",
                    icon: Compass,
                    title: "Análisis de Requerimientos",
                    description: "Estudiamos a profundidad las necesidades tecnológicas del proyecto, identificando los objetivos, requisitos funcionales y restricciones técnicas.",
                    details: [
                      "Entrevistas con stakeholders clave",
                      "Evaluación de infraestructura existente",
                      "Definición de objetivos medibles",
                      "Análisis de flujos de trabajo actuales"
                    ]
                  },
                  {
                    number: "02",
                    icon: Lightbulb,
                    title: "Diseño de Solución",
                    description: "Desarrollamos una arquitectura tecnológica integral que responde a los requerimientos identificados, optimizando recursos y procesos.",
                    details: [
                      "Selección de plataformas y herramientas",
                      "Diseño de arquitectura de sistemas",
                      "Planificación de integración con sistemas existentes",
                      "Definición de protocolos de seguridad"
                    ]
                  },
                  {
                    number: "03",
                    icon: Activity,
                    title: "Implementación y Desarrollo",
                    description: "Ejecutamos el desarrollo o implementación de la solución tecnológica, siguiendo metodologías ágiles y mejores prácticas de la industria.",
                    details: [
                      "Configuración de entornos y plataformas",
                      "Desarrollo de software personalizado",
                      "Integración con sistemas existentes",
                      "Pruebas iterativas y validación"
                    ]
                  },
                  {
                    number: "04",
                    icon: FileText,
                    title: "Capacitación y Soporte",
                    description: "Proporcionamos entrenamiento al equipo del cliente y soporte técnico continuo para garantizar la adopción efectiva de la solución.",
                    details: [
                      "Sesiones de capacitación personalizadas",
                      "Documentación técnica completa",
                      "Soporte post-implementación",
                      "Monitoreo de rendimiento y optimización"
                    ]
                  }
                ].map((step, idx) => (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Indicador de paso con icono */}
                    <div className="absolute left-0 md:left-1/2 ml-0 md:-ml-8 w-16 h-16 rounded-full bg-white border-2 border-[#961A1D] flex items-center justify-center z-10 shadow-lg">
                      <step.icon className="h-8 w-8 text-[#961A1D]" />
                    </div>
                    
                    {/* Contenido del paso - alternando lados */}
                    <div className={`pl-24 md:pl-0 md:w-1/2 ${
                      idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                    }`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="inline-block px-3 py-1 rounded-full text-white text-sm font-bold mb-3" style={{ backgroundColor: '#961A1D' }}>
                         Paso {step.number}
                       </div>
                       
                       <h3 className="text-xl font-bold text-[#2C3336] mb-3">{step.title}</h3>
                       <p className="text-gray-600 mb-4">{step.description}</p>
                       
                       <div className="space-y-2">
                         {step.details.map((detail, detailIdx) => (
                           <div key={detailIdx} className="flex items-start">
                             <CheckCircle2 className="h-4 w-4 text-[#961A1D] mr-2 flex-shrink-0 mt-0.5" />
                             <p className="text-gray-700 text-sm">{detail}</p>
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
                   
                   {/* Espacio para el lado opuesto */}
                   <div className="hidden md:block md:w-1/2"></div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>
       
       {/* Tecnologías y herramientas */}
       <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
               <div className="inline-flex items-center justify-center mb-4">
                 <div className="h-px w-12 bg-[#961A1D]"></div>
                 <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Tecnología</span>
                 <div className="h-px w-12 bg-[#961A1D]"></div>
               </div>
               
               <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                 Tecnologías <span className="text-[#961A1D]">avanzadas</span>
               </h2>
               
               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                 Empleamos las herramientas tecnológicas más avanzadas del mercado para garantizar 
                 resultados precisos y confiables en nuestros proyectos computacionales.
               </p>
               </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
               {[
                 {
                   title: "Software de Modelado BIM",
                   description: "Utilizamos plataformas avanzadas para la creación de modelos digitales inteligentes con información completa del proyecto.",
                   tools: ["Autodesk Revit", "Tekla Structures", "BIM 360", "Navisworks", "ArchiCAD"]
                 },
                 {
                   title: "Simulación y Análisis",
                   description: "Aplicamos herramientas especializadas para simular el comportamiento de estructuras y sistemas bajo diferentes condiciones.",
                   tools: ["ANSYS", "ABAQUS", "SAP2000", "ETABS", "PLAXIS", "OpenSees"]
                 },
                 {
                   title: "Visualización de Datos",
                   description: "Transformamos datos complejos en visualizaciones interactivas que facilitan la toma de decisiones estratégicas.",
                   tools: ["Power BI", "Tableau", "D3.js", "Grafana", "Kibana"]
                 },
                 {
                   title: "Desarrollo a Medida",
                   description: "Creamos soluciones personalizadas utilizando diversas tecnologías de programación y frameworks modernos.",
                   tools: ["Python", "JavaScript", "React", "Node.js", "C#", "MATLAB"]
                 }
               ].map((category, idx) => (
                 <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                   <div className="h-2 bg-[#961A1D]"></div>
                   <div className="p-8">
                     <h3 className="text-xl font-bold text-[#2C3336] mb-3">{category.title}</h3>
                     <p className="text-gray-600 mb-6">{category.description}</p>
                     
                     <div className="flex flex-wrap gap-2">
                       {category.tools.map((tool, toolIdx) => (
                         <span key={toolIdx} className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                           {tool}
                         </span>
                       ))}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>
       
       {/* Ventajas */}
       <section className="py-24 bg-white">
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
               <div className="flex items-center mb-6">
                 <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                 <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Ventajas</span>
               </div>
               
               <h2 className="text-3xl md:text-4xl font-bold text-[#2C3336] mb-6">
                 Por qué elegir nuestras <span className="text-[#961A1D]">soluciones</span>
               </h2>
               
               <div className="space-y-6">
                 {[
                   {
                     title: "Experiencia en proyectos de alta complejidad técnica",
                     description: "Nuestro equipo ha implementado soluciones en proyectos con requerimientos tecnológicos sofisticados."
                   },
                   {
                     title: "Integración con sistemas y plataformas existentes",
                     description: "Desarrollamos soluciones que se conectan perfectamente con la infraestructura tecnológica actual."
                   },
                   {
                     title: "Optimización de flujos de trabajo y procesos",
                     description: "Automatizamos tareas repetitivas y optimizamos procesos para incrementar la productividad."
                   },
                   {
                     title: "Soluciones escalables y adaptables",
                     description: "Nuestras implementaciones evolucionan con las necesidades cambiantes de su organización."
                   },
                   {
                     title: "Soporte técnico continuo y capacitación",
                     description: "Ofrecemos acompañamiento permanente para garantizar el máximo aprovechamiento de las soluciones."
                   }
                 ].map((benefit, idx) => (
                   <div key={idx} className="flex items-start">
                     <div className="w-10 h-10 rounded-full bg-[#961A1D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                       <CheckCircle2 className="h-5 w-5 text-[#961A1D]" />
                     </div>
                     <div className="ml-4">
                       <h3 className="font-semibold text-[#2C3336] mb-1">{benefit.title}</h3>
                       <p className="text-gray-600 text-sm">{benefit.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
               
               <div className="mt-10">
                 <Button className="bg-[#2C3336] hover:bg-[#961A1D] text-white transition-colors duration-500">
                   Solicitar demostración tecnológica
                 </Button>
               </div>
             </div>
             
             <div className="relative">
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#961A1D]/5 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#961A1D]/5 rounded-full blur-3xl"></div>
               
               <div className="relative">
                 <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#961A1D] rounded-xl"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                   alt="Computación Avanzada" 
                   className="w-full h-full object-cover rounded-xl shadow-xl"
                 />
                 <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                   <div className="grid grid-cols-3 gap-4">
                     <div className="text-center">
                       <div className="text-[#961A1D] font-bold text-xl">15+</div>
                       <div className="text-xs text-gray-500">Años</div>
                     </div>
                     <div className="text-center">
                       <div className="text-[#961A1D] font-bold text-xl">25+</div>
                       <div className="text-xs text-gray-500">Expertos</div>
                     </div>
                     <div className="text-center">
                       <div className="text-[#961A1D] font-bold text-xl">100%</div>
                       <div className="text-xs text-gray-500">Innovación</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
       
       {/* Casos de éxito */}
       {/* <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto text-center mb-16">
             <div className="inline-flex items-center justify-center mb-4">
               <div className="h-px w-12 bg-[#961A1D]"></div>
               <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Casos de Éxito</span>
               <div className="h-px w-12 bg-[#961A1D]"></div>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
               Proyectos <span className="text-[#961A1D]">destacados</span>
             </h2>
             
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               Conoce algunos de nuestros proyectos más innovadores y los resultados
               obtenidos gracias a nuestras soluciones computacionales.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               {
                 title: "Modelo BIM para Hospital de Alta Complejidad",
                 location: "Medellín, Colombia",
                 image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                 description: "Desarrollo de un gemelo digital completo para un hospital de 50,000 m² que integra sistemas estructurales, MEP y equipamiento médico.",
                 result: "Reducción del 35% en conflictos durante construcción y ahorros estimados del 8% en costos totales."
               },
               {
                 title: "Análisis Paramétrico para Optimización Estructural",
                 location: "Bogotá, Colombia",
                 image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                 description: "Evaluación automatizada de más de 500 configuraciones estructurales para un rascacielos de 68 pisos en zona sísmica.",
                 result: "Optimización que permitió reducir el uso de concreto en 12% y acero en 8% sin comprometer la seguridad."
               },
               {
                 title: "Plataforma de Monitoreo Estructural en Tiempo Real",
                 location: "Ciudad de Panamá, Panamá",
                 image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                 description: "Sistema IoT con sensores y dashboard para monitoreo continuo de la respuesta estructural de un puente atirantado.",
                 result: "Detección temprana de comportamientos anómalos y planificación proactiva del mantenimiento."
               }
             ].map((project, idx) => (
               <div key={idx} className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                 <div className="relative h-56 overflow-hidden">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                     <div className="p-4 text-white">
                       <p className="text-sm">{project.location}</p>
                     </div>
                   </div>
                 </div>
                 <div className="p-6">
                   <h3 className="text-xl font-bold text-[#2C3336] mb-3">{project.title}</h3>
                   <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                   
                   <div className="bg-gray-50 p-4 rounded-lg border-l-2 border-[#961A1D]">
                     <p className="text-sm text-gray-700"><strong>Resultado:</strong> {project.result}</p>
                   </div>
                   
                   <div className="mt-6 text-right">
                     <a href="#" className="inline-flex items-center text-[#961A1D] hover:text-[#961A1D]/80 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                       Ver detalles
                       <ChevronRight className="ml-1 h-4 w-4" />
                     </a>
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="text-center mt-12">
             <Button className="bg-[#2C3336] hover:bg-[#2C3336]/80 text-white">
               Ver todos los proyectos
             </Button>
           </div>
         </div>
       </section> */}
       
       {/* CTA final */}
       <section className="py-20 bg-[#2C3336] text-white overflow-hidden">
         <div className="container mx-auto px-6">
           <div className="relative max-w-4xl mx-auto">
             <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
             <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
             
             <div className="relative bg-gradient-to-r from-[#2C3336]/50 to-[#1F2426]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/5 p-12 text-center">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#961A1D] via-[#961A1D]/50 to-transparent"></div>
               
               <div className="w-20 h-20 rounded-full bg-[#961A1D]/10 flex items-center justify-center mx-auto mb-8">
                 <Cpu className="h-10 w-10 text-[#961A1D]" />
               </div>
               
               <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                 ¿Listo para potenciar tu proyecto con tecnología avanzada?
               </h2>
               
               <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                 Contáctanos hoy mismo para una demostración gratuita donde evaluaremos tus necesidades
                 y te mostraremos cómo nuestras soluciones computacionales pueden transformar tu negocio.
               </p>
               
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Button 
                   className="bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                 >
                   <span className="relative z-10 flex items-center">
                     Agendar demostración gratuita
                     <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                   </span>
                   <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
                 </Button>
                 
                 <Button 
                   className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white transition-colors duration-300"
                 >
                   Explorar soluciones
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

export default Computing;