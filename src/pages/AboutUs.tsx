// src/pages/AboutUs.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Award, Clock, Target, Users, Lightbulb, Shield, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const [isInView, setIsInView] = useState(false);
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

  const timelineData = [
    {
      year: '2013',
      title: 'Fundación de R&DC',
      description: 'Nacemos en Medellín como una firma de consultoría fundada por investigadores en ingeniería sísmica y profesionales del diseño en concreto reforzado generando capacidades únicas en estructuras y geotecnia.',
      highlight: 'Primeros proyectos con enfoque en diseño estructural avanzado para el sector residencial.'
    },
    {
      year: '2015',
      title: 'Consolidación del enfoque en innovación',
      description: 'Decidimos destinar parte de nuestros recursos a inversión sostenida en I+D, desarrollando soluciones propias para resolver necesidades que el mercado no atendía.',
      highlight: 'Inicio del desarrollo de ProDet como herramienta interna.'
    },
    {
      year: '2017',
      title: 'Expansión internacional',
      description: 'Iniciamos nuestro partnership con la empresa Oscar Ramirez y Asociados-Ingenieros Consultores en Ciudad de Panamá y comenzamos a ejecutar proyectos de gran altura.',
      highlight: 'Hospital del Niño: Primer proyecto con diseño por desempeño en Panamá.'
    },
    {
      year: '2023',
      title: 'Tecnología Propia en el mercado',
      description: 'Abrimos la distribución comercial de ProDet compartiendo con la comunidad de ingenieros estructurales algunas de nuestras herramientas tecnologicas.',
      highlight: 'Nace StructuBIM como plataforma web para reforzamiento inteligente.'
    },
    {
      year: '2024',
      title: 'Más de 70 proyectos entregados',
      description: 'Diseñamos edificios de hasta 70 pisos bajo metodologías avanzadas como las sugeridas en el LATBSDC, manteniendo siempre la promesa de brindar tranquilidad estructural y financiera.',
      highlight: 'Con el proyecto Bioma iniciamos el diseño del edificio con mayor esbeltez hasta el momento en ciudad de Panamá.'
    }
  ];

  const valuesData = [
    {
        icon: CheckCircle,
        text: "Excelencia técnica basada en evidencia"
    },
    {
        icon: Lightbulb,
        text: "Innovación aplicada al contexto real del cliente"
    },
    {
        icon: Shield,
        text: "Compromiso con la seguridad y la integridad estructural"
    },
    {
        icon: Leaf,
        text: "Responsabilidad ambiental y eficiencia constructiva"
    },
    {
        icon: Users,
        text: "Colaboración activa entre diseño, construcción y tecnología"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-screen overflow-hidden bg-[#111111]">
          {/* Video/Imagen de fondo con overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Ingeniería de precisión"
              className="absolute inset-0 w-full h-full object-cover scale-105"
              style={{
                filter: 'brightness(0.7) contrast(1.1)'
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
                Nuestra Historia
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight mb-6"
              >
                Una historia de <span className="text-[#961A1D]">excelencia</span>, <br className="hidden md:block" />
                innovación e impacto
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-white/80 mb-8 max-w-2xl"
              >
                R&DC surge de la unión entre el mundo académico y el sector productivo, con una misión clara: resolver los retos estructurales más exigentes.
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
                    Conocer más sobre nosotros
                    <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Indicadores estadísticos flotantes */}
            <div className="absolute bottom-12 right-12 md:right-24 space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10"
              >
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">11+</div>
                    <div className="text-white/70 text-xs">Años de operaciones</div>
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
                  <Users className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">30+</div>
                    <div className="text-white/70 text-xs">Profesionales expertos</div>
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
                  <CheckCircle className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">70+</div>
                    <div className="text-white/70 text-xs">Proyectos entregados</div>
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
        
        {/* Nuestra Historia y Trayectoria */}
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
                  <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Nuestra Historia</span>
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                  Una trayectoria de <span className="text-[#961A1D]">compromiso</span> y excelencia
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                   R&DC surge de la unión entre el mundo académico y el sector productivo, con una misión clara: resolver los retos estructurales más exigentes del mercado mediante ciencia, experiencia y tecnología propia.
                </p>
              </motion.div>
              
              {/* Timeline */}
              <motion.div variants={itemVariants} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
                
                {timelineData.map((milestone, idx) => (
                  <div key={idx} className={`flex items-start mb-16 last:mb-0 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <div className={`inline-block px-4 py-1 rounded-full mb-2 font-bold text-white`} style={{ backgroundColor: '#961A1D' }}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#2C3336] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 mb-3">{milestone.description}</p>
                      <div className="bg-gray-50 p-3 rounded-lg border-l-2 border-[#961A1D]">
                        <p className="text-sm text-gray-700"><strong>Hito:</strong> {milestone.highlight}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-[#961A1D] border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Misión, Visión y Valores */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-[#961A1D]"></div>
                <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Nuestra Esencia</span>
                <div className="h-px w-12 bg-[#961A1D]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                Ciencia, Innovación y Compromiso con la <span className="text-[#961A1D]">Seguridad</span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Los principios que guían nuestro trabajo y definen el ADN de R&DC: resolver con excelencia los retos estructurales más exigentes, desde la tecnología, el análisis profundo y la ingeniería de precisión.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-2 bg-[#961A1D]"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#961A1D]/10 flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-[#961A1D]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2C3336] mb-4">Misión</h3>
                  
                  <p className="text-gray-600 mb-6">
                    Proteger vidas, patrimonio e inversión mediante soluciones estructurales y geotécnicas de alto nivel técnico, desarrolladas a partir de investigación, tecnología propia y una comprensión profunda de cada proyecto.
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#961A1D] mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">Preservar la vida y la rentabilidad mediante ingeniería basada en innovación.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-2 bg-[#1F4E5F]"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#1F4E5F]/10 flex items-center justify-center mb-6">
                    <Lightbulb className="h-8 w-8 text-[#1F4E5F]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2C3336] mb-4">Visión</h3>
                  
                  <p className="text-gray-600 mb-6">
                    Ser reconocidos como la firma que lidera la transformación de la consultoría estructural en Colombia y Panamá, gracias al uso de tecnologías propias, pensamiento científico y una profunda comprensión de los desafíos del sector inmobiliario.
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#1F4E5F] mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm">Impulsar una nueva era de ingeniería estructural: precisa, ágil y alineada con el negocio.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-2 bg-[#2C3336]"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#2C3336]/10 flex items-center justify-center mb-6">
                    <Award className="h-8 w-8 text-[#2C3336]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2C3336] mb-4">Valores</h3>
                  
                  <div className="text-gray-600 mb-6 space-y-3">
                    {valuesData.map((value, idx) => (
                      <div key={idx} className="flex items-start">
                        <value.icon className="h-5 w-5 text-[#2C3336] mr-3 flex-shrink-0 mt-0.5" />
                        <p>{value.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Equipo Directivo */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-[#961A1D]"></div>
                <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Liderazgo</span>
                <div className="h-px w-12 bg-[#961A1D]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                Nuestro <span className="text-[#961A1D]">equipo</span> directivo
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Profesionales de excelencia con amplia trayectoria en sus respectivos 
                campos, comprometidos con la visión y misión de nuestra empresa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
              {[
                {
                  name: "Ing. Carlos Ramírez, PhD",
                  position: "Director General",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
                  bio: "Especialista en ingeniería sísmica con más de 30 años de experiencia en proyectos de alta complejidad en América Latina.",
                  education: "PhD en Ingeniería Estructural, Stanford University",
                  achievements: "Autor de más de 40 publicaciones científicas en revistas indexadas"
                },
                {
                  name: "Dra. Alejandra Méndez",
                  position: "Directora de Geociencias",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
                  bio: "Experta en caracterización geotécnica y microzonificación sísmica con amplia experiencia en proyectos de infraestructura crítica.",
                  education: "PhD en Geofísica, Universidad de los Andes",
                  achievements: "Lideró el proyecto de microzonificación sísmica de Ciudad de Panamá"
                },
                {
                  name: "Ing. Javier Torres, MSc",
                  position: "Director de Tecnología",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
                  bio: "Pionero en la integración de tecnologías digitales avanzadas en los procesos de ingeniería estructural y geotécnica.",
                  education: "MSc en Ingeniería Computacional, MIT",
                  achievements: "Desarrollador principal de la plataforma de análisis estructural R&DC Suite"
                }
              ].map((member, idx) => (
                <div key={idx} className="group">
                  <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-sm mb-3">{member.bio}</p>
                      <div className="pt-3 border-t border-white/20 text-xs">
                        <p className="mb-1"><strong>Formación:</strong> {member.education}</p>
                        <p><strong>Logros:</strong> {member.achievements}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#2C3336] mb-1">{member.name}</h3>
                    <p className="text-[#961A1D] font-medium mb-2">{member.position}</p>
                    
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#961A1D] hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#961A1D] hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#961A1D] hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Cifras y Logros */}
        <section className="py-24 bg-[#2C3336] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-[#961A1D]"></div>
                <span className="px-4 text-sm uppercase tracking-wider text-white/80 font-medium">Impacto</span>
                <div className="h-px w-12 bg-[#961A1D]"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold leading-tight mb-6">
                Nuestro <span className="text-[#961A1D]">legado</span> en cifras
              </h2>
              
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Un vistazo a los resultados tangibles de nuestro compromiso con la excelencia
                y la innovación a lo largo de más de dos décadas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  value: "25+",
                  label: "Años de experiencia",
                  description: "Trayectoria continua de excelencia en ingeniería"
                },
                {
                  icon: CheckCircle,
                  value: "70+",
                  label: "Proyectos completados",
                  description: "Soluciones implementadas con éxito"
                },
                {
                  icon: Users,
                  value: "50+",
                  label: "Expertos en plantilla",
                  description: "Equipo multidisciplinario altamente calificado"
                },
                {
                  icon: Shield,
                  value: "100%",
                  label: "Cumplimiento normativo",
                  description: "Compromiso absoluto con los estándares técnicos"
                }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-lg bg-[#961A1D]/20 flex items-center justify-center mb-6">
                    <stat.icon className="h-7 w-7 text-[#961A1D]" />
                  </div>
                  
                  <div className="font-montserrat font-bold text-5xl mb-2 text-white">
                    {stat.value}
                  </div>
                  
                  <div className="text-xl font-medium text-white/90 mb-3">
                    {stat.label}
                  </div>
                  
                  <p className="text-white/70">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Principios - Sección Visual */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                  <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Principios</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-8">
                  Comprometidos con la <span className="text-[#961A1D]">excelencia</span>
                </h2>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: Shield,
                      title: "Seguridad ante todo",
                      description: "Priorizamos la protección de vidas humanas en cada decisión técnica que tomamos."
                    },
                    {
                      icon: Lightbulb,
                      title: "Innovación continua",
                      description: "Constantemente buscamos nuevas metodologías y tecnologías para mejorar nuestros servicios."
                    },
                    {
                      icon: Leaf,
                      title: "Sostenibilidad",
                      description: "Diseñamos soluciones que minimizan el impacto ambiental y promueven la sostenibilidad."
                    }
                  ].map((principle, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mr-6">
                        <div className="w-12 h-12 rounded-full bg-[#961A1D]/10 flex items-center justify-center">
                          <principle.icon className="h-6 w-6 text-[#961A1D]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#2C3336] mb-2">{principle.title}</h3>
                        <p className="text-gray-600">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Button 
                    className="bg-[#2C3336] hover:bg-[#961A1D] text-white transition-colors duration-500"
                  >
                    Conoce nuestra metodología
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#961A1D]/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#961A1D]/5 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#961A1D] rounded-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Ingeniería de precisión" 
                    className="w-full h-full object-cover rounded-xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-[#961A1D] text-white py-4 px-6 rounded-lg shadow-lg">
                    <div className="font-bold text-xl mb-1">25+ años</div>
                    <div className="text-sm text-white/80">de excelencia en ingeniería</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#2C3336] to-[#1F2426] rounded-2xl overflow-hidden shadow-xl">
              <div className="relative p-12 text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#961A1D] via-[#961A1D]/50 to-transparent"></div>
                <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
                <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
                
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                  ¿Listo para trabajar con el mejor equipo?
                </h2>
                
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Contáctanos para conocer cómo podemos ayudarte con soluciones 
                  de ingeniería precisas y confiables para tu próximo proyecto.
                </p>
                
                <Button 
                  className="bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span className="relative z-10 flex items-center">
                    Agenda una consulta gratuita
                    <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
                </Button>
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