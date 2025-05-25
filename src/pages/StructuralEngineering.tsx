// src/pages/StructuralEngineering.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Building2, ShieldCheck, Award, ChevronRight, CheckCircle2, 
  Activity, Ruler, Compass, Lightbulb, BarChart3, HardHat, 
  Clock, Users, Construction, FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const StructuralEngineering = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeTab, setActiveTab] = useState('residential');
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

  // Datos de los diferentes tipos de proyectos
  const projectTypes = {
    residential: {
      title: "Residencial",
      description: "Diseños estructurales para viviendas unifamiliares, multifamiliares y complejos residenciales que combinan seguridad, funcionalidad y eficiencia económica.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Análisis sísmico avanzado",
        "Optimización de sistemas estructurales",
        "Diseño de cimentaciones especiales",
        "Soluciones para terrenos complejos"
      ]
    },
    commercial: {
      title: "Comercial",
      description: "Soluciones estructurales para centros comerciales, oficinas y espacios corporativos que maximizan áreas útiles sin comprometer la seguridad ni la estética.",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Diseño de grandes luces y espacios abiertos",
        "Estructuras para fachadas complejas",
        "Integración con sistemas MEP",
        "Análisis de vibraciones para confort"
      ]
    },
    industrial: {
      title: "Industrial",
      description: "Proyectos estructurales para instalaciones industriales, considerando cargas especiales, equipos pesados y condiciones operativas específicas.",
      image: "https://images.unsplash.com/photo-1626168820580-e8a4a5d73fcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Diseño para cargas dinámicas de equipos",
        "Estructuras para puentes grúa",
        "Análisis de fatiga y vibración",
        "Cimentaciones para maquinaria pesada"
      ]
    },
    infrastructure: {
      title: "Infraestructura",
      description: "Diseño estructural para puentes, túneles y obras de infraestructura vial que responden a demandas de tráfico, condiciones sísmicas y ambientales.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Análisis dinámico para cargas de tráfico",
        "Diseño para eventos sísmicos extremos",
        "Soluciones para cruces de ríos y cañones",
        "Evaluación de ciclo de vida y mantenimiento"
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
              src="https://storage.googleapis.com/cluvi/Web-Risk/estructural.jpg" 
              alt="Ingeniería Estructural"
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
                Ingeniería <span className="text-[#961A1D]">Estructural</span> <br className="hidden md:block" />
                de precisión
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-white/80 mb-8 max-w-2xl"
              >
                Combinamos análisis avanzados con décadas de experiencia para ofrecer soluciones 
                estructurales optimizadas que garantizan seguridad y eficiencia en zonas de alta 
                actividad sísmica.
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
                    Consulta tu proyecto
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
                  <Building2 className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">500+</div>
                    <div className="text-white/70 text-xs">Proyectos completados</div>
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
                  <ShieldCheck className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">100%</div>
                    <div className="text-white/70 text-xs">Cumplimiento normativo</div>
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
                  <Award className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">25+</div>
                    <div className="text-white/70 text-xs">Años de experiencia</div>
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
                  Soluciones <span className="text-[#961A1D]">estructurales</span> <br />de alto rendimiento
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Nuestro equipo de ingenieros estructurales brinda soluciones precisas y 
                  confiables para los desafíos más complejos de construcción e infraestructura.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Building2,
                    title: "Diseño Sismorresistente",
                    description: "Desarrollamos edificaciones que responden de manera óptima ante eventos sísmicos, preservando vidas y minimizando daños estructurales."
                  },
                  {
                    icon: Activity,
                    title: "Análisis No-Lineal",
                    description: "Realizamos simulaciones avanzadas del comportamiento estructural bajo cargas extremas para validar el rendimiento esperado."
                  },
                  {
                    icon: Construction,
                    title: "Reforzamiento Estructural",
                    description: "Evaluamos y diseñamos soluciones para la rehabilitación y actualización de estructuras existentes para cumplir con normativas actuales."
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
        
        {/* Tipos de proyectos - Con tabs */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-[#961A1D]"></div>
                <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Aplicaciones</span>
                <div className="h-px w-12 bg-[#961A1D]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                Experiencia en <span className="text-[#961A1D]">múltiples</span> sectores
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                Nuestra experiencia abarca una amplia gama de proyectos estructurales,
                adaptándonos a las necesidades específicas de cada sector.
              </p>
              
              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {Object.entries(projectTypes).map(([key, value]) => (
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
              {Object.entries(projectTypes).map(([key, value]) => (
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
                        Soluciones para el sector {value.title.toLowerCase()}
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
                          Ver proyectos {value.title.toLowerCase()}
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
                  Abordamos cada proyecto con un proceso riguroso y sistemático que garantiza 
                  soluciones óptimas para las necesidades específicas de cada cliente.
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
                    description: "Estudiamos a profundidad las necesidades del proyecto, normativas aplicables y condiciones del sitio para establecer los criterios de diseño adecuados.",
                    details: [
                      "Evaluación de condiciones del sitio",
                      "Análisis de normativas aplicables",
                      "Definición de criterios sísmicos",
                      "Establecimiento de objetivos de desempeño"
                    ]
                  },
                  {
                    number: "02",
                    icon: BarChart3,
                    title: "Modelación y Análisis",
                    description: "Utilizamos software especializado para crear modelos digitales detallados y realizar análisis estáticos y dinámicos que validan el comportamiento de la estructura.",
                    details: [
                      "Modelación 3D de la estructura",
                      "Análisis de cargas estáticas y dinámicas",
                      "Simulaciones sísmicas",
                      "Verificación de deformaciones y derivas"
                    ]
                  },
                  {
                    number: "03",
                    icon: Lightbulb,
                    title: "Diseño y Optimización",
                    description: "Desarrollamos soluciones estructurales que equilibran seguridad, funcionalidad y economía, optimizando materiales y procesos constructivos.",
                    details: [
                      "Dimensionamiento de elementos estructurales",
                      "Optimización de consumo de materiales",
                      "Diseño de conexiones y detalles",
                      "Coordinación con otras disciplinas"
                    ]
                  },
                  {
                    number: "04",
                    icon: FileText,
                    title: "Documentación y Acompañamiento",
                    description: "Entregamos documentación técnica completa y brindamos acompañamiento durante la fase de construcción para garantizar la correcta implementación del diseño.",
                    details: [
                      "Elaboración de planos estructurales",
                      "Memorias de cálculo detalladas",
                      "Especificaciones técnicas",
                      "Asesoría durante la construcción"
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
                  resultados precisos y confiables en nuestros proyectos estructurales.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  {
                    title: "Software de Análisis Estructural",
                    description: "Utilizamos programas avanzados para el modelamiento y análisis de estructuras bajo diferentes condiciones de carga.",
                    tools: ["SAP2000", "ETABS", "SAFE", "ADAPT", "MIDAS"]
                  },
                  {
                    title: "Análisis No Lineal",
                    description: "Simulamos el comportamiento real de las estructuras bajo cargas extremas para optimizar el diseño.",
                    tools: ["Perform 3D", "ABAQUS", "ANSYS", "OpenSees"]
                  },
                  {
                    title: "Tecnología BIM",
                    description: "Integramos modelos estructurales en entornos BIM para mejorar la coordinación interdisciplinaria.",
                    tools: ["Revit Structure", "Tekla Structures", "BIM 360", "Navisworks"]
                  },
                  {
                    title: "Desarrollo Propio",
                    description: "Creamos herramientas personalizadas para resolver problemas específicos de nuestros proyectos.",
                    tools: ["Python", "MATLAB", "Excel Avanzado", "APIs personalizadas"]
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
                  Por qué elegir nuestros <span className="text-[#961A1D]">servicios</span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Equipo con experiencia en proyectos de alta complejidad",
                      description: "Nuestros ingenieros han desarrollado proyectos desafiantes en condiciones sísmicas complejas."
                    },
                    {
                      title: "Uso de metodologías avanzadas de análisis y diseño",
                      description: "Implementamos las técnicas más recientes en ingeniería estructural para optimizar cada solución."
                    },
                    {
                      title: "Compromiso con la seguridad y la calidad",
                      description: "Priorizamos la seguridad humana en cada decisión de diseño que tomamos."
                    },
                    {
                      title: "Soluciones optimizadas económicamente",
                      description: "Buscamos el equilibrio perfecto entre seguridad, funcionalidad y costos."
                    },
                    {
                      title: "Cumplimiento riguroso de normativas",
                      description: "Garantizamos que todos nuestros diseños cumplen con los códigos nacionales e internacionales."
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
                    Solicitar consultoría gratuita
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#961A1D]/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#961A1D]/5 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#961A1D] rounded-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop" 
                    alt="Ingeniería Estructural" 
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-[#961A1D] font-bold text-xl">25+</div>
                        <div className="text-xs text-gray-500">Años</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#961A1D] font-bold text-xl">30+</div>
                        <div className="text-xs text-gray-500">Expertos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#961A1D] font-bold text-xl">100%</div>
                        <div className="text-xs text-gray-500">Calidad</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Casos de éxito / Testimonios */}
        <section className="py-24 bg-gray-50">
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
                Conoce algunos de nuestros proyectos más emblemáticos y los resultados
                obtenidos gracias a nuestras soluciones estructurales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Torre Empresarial Centrika",
                  location: "Medellín, Colombia",
                  image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  description: "Diseño estructural para este edificio de 35 pisos con condiciones sísmicas desafiantes.",
                  result: "Estructura optimizada que redujo en 15% el uso de concreto y en 10% el acero estructural."
                },
                {
                  title: "Puente Vial El Dorado",
                  location: "Bogotá, Colombia",
                  image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  description: "Análisis y diseño estructural para este puente urbano de 380 metros de longitud.",
                  result: "Solución que permitió reducir el tiempo de construcción en 4 meses y los costos en 12%."
                },
                {
                  title: "Centro Comercial Multiplaza",
                  location: "Ciudad de Panamá, Panamá",
                  image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  description: "Diseño estructural para la ampliación de este importante centro comercial.",
                  result: "Estructura que permitió grandes luces y espacios abiertos maximizando el área comercial."
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
        </section>
        
        {/* CTA final */}
        <section className="py-20 bg-[#2C3336] text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
              <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
              
              <div className="relative bg-gradient-to-r from-[#2C3336]/50 to-[#1F2426]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/5 p-12 text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#961A1D] via-[#961A1D]/50 to-transparent"></div>
                
                <div className="w-20 h-20 rounded-full bg-[#961A1D]/10 flex items-center justify-center mx-auto mb-8">
                  <HardHat className="h-10 w-10 text-[#961A1D]" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                  ¿Listo para llevar tu proyecto al siguiente nivel?
                </h2>
                
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Contáctanos hoy mismo para una consultoría gratuita donde evaluaremos tu proyecto
                  y te ofreceremos las mejores soluciones estructurales adaptadas a tus necesidades.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    className="bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <span className="relative z-10 flex items-center">
                      Agendar consultoría gratuita
                      <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                    </span>
                    <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
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

export default StructuralEngineering;