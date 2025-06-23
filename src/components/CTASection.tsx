import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, CheckCircle, Award, ChevronRight, Shield } from 'lucide-react';

const CTASection = () => {
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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
      { threshold: 0.2 }
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

  return (
    <section 
      ref={sectionRef} 
      className="py-28 relative overflow-hidden"
    >
      {/* Fondo con gradiente y efectos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C3336] to-[#1a1f20]"></div>
        
        {/* Patrones y decoraciones */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Elementos gráficos decorativos */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#961A1D] via-[#961A1D]/50 to-transparent"></div>
        <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Contenido principal */}
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <div className="flex items-center">
                <div className="h-px w-8 bg-[#961A1D] mr-3"></div>
                <span className="text-sm uppercase tracking-wider text-white/70 font-medium">CONSULTORÍA ESPECIALIZADA</span>
              </div>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-montserrat font-bold text-white leading-tight mb-6"
            >
              Protege tu inversión con una
              <span className="text-[#961A1D] block mt-2">ingeniería que entiende tus retos</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/80 mb-8 leading-relaxed"
            >
              Evaluamos tu proyecto con visión técnica, herramientas propias y datos precisos para entregarte soluciones estructurales que reducen incertidumbre y aumentan la rentabilidad.
            </motion.p>
            
            {/* Beneficios destacados */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#961A1D]/20 flex items-center justify-center mr-3">
                    <span className="text-[#961A1D] text-sm">🔍</span>
                  </div>
                  <span className="text-white text-sm font-medium">Flujo de caja adaptado</span>
                </div>
                <p className="text-white/60 text-xs">Nos acomodamos al flujo de caja de los desarrolladores inmobiliarios</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#961A1D]/20 flex items-center justify-center mr-3">
                    <span className="text-[#961A1D] text-sm">🎯</span>
                  </div>
                  <span className="text-white text-sm font-medium">Desde pre-dimensionamiento</span>
                </div>
                <p className="text-white/60 text-xs">Nos incorporamos al equipo de arquitectura desde el pre-dimensionamiento</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#961A1D]/20 flex items-center justify-center mr-3">
                    <span className="text-[#961A1D] text-sm">🧠</span>
                  </div>
                  <span className="text-white text-sm font-medium">60+ proyectos en altura</span>
                </div>
                <p className="text-white/60 text-xs">Más de 60 proyectos en altura diseñados en Colombia y Panamá</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#961A1D]/20 flex items-center justify-center mr-3">
                    <span className="text-[#961A1D] text-sm">🛠</span>
                  </div>
                  <span className="text-white text-sm font-medium">Tecnología propia</span>
                </div>
                <p className="text-white/60 text-xs">Tecnología propia para evaluar escenarios estructurales y de refuerzo</p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4 mb-10">
              {[
                { icon: Clock, text: "Nos acomodamos al flujo de caja de los desarrolladores." },
                { icon: CheckCircle, text: "Nos incorporamos desde el pre-dimensionamiento." },
                { icon: Award, text: "Tecnología propia para evaluar múltiples escenarios." }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 p-1 rounded-full bg-[#961A1D]/20">
                    <item.icon className="h-4 w-4 text-[#961A1D]" />
                  </div>
                  <span className="ml-3 text-white/80">{item.text}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative overflow-hidden"
              >
                <Button 
                  size="lg"
                  className="relative z-10 bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center relative z-10">
                    Evalúa tu proyecto
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <div 
                  className="absolute inset-0 bg-black/20 transform origin-left transition-transform duration-500 ease-out"
                  style={{ 
                    transform: isHovered ? 'scaleX(1)' : 'scaleX(0)'
                  }}
                ></div>
              </div>
              
              <a 
                href="#brochure"
                className="flex items-center text-white hover:text-[#961A1D] transition-colors duration-300 group"
              >
                <span>Descargar Brochure</span>
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Columna derecha - Tarjeta informativa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="relative"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-[#961A1D]/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-[#961A1D]/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-[#961A1D]/10 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-[#961A1D]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  ¿Por qué elegir R&DC?
                </h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Experiencia + Tecnología Propia",
                    description: "Más de una década resolviendo proyectos complejos con herramientas como StructuBIM y ProDet, desarrolladas internamente."
                  },
                  {
                    title: "Enfoque Personalizado con Rigurosidad Técnica",
                    description: "Cada edificio tiene un contexto único: nuestro análisis se adapta a tus condiciones técnicas, comerciales y de ejecución."
                  },
                  {
                    title: "Cumplimiento Normativo y Diseño por Desempeño",
                    description: "Cumplimos al 100% la NSR-10 y adoptamos metodologías internacionales como LATBSDC para edificios de gran altura."
                  }
                ].map((item, index) => (
                  <div key={index} className="pb-6 border-b border-white/10 last:border-0 last:pb-0">
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white/10 rounded-lg p-4">
                <div className="flex items-center text-white mb-1">
                  <CheckCircle className="h-4 w-4 text-[#961A1D] mr-2" />
                  <span className="font-medium">Más de 70 proyectos exitosos</span>
                </div>
                <p className="text-white/70 text-sm">
                  En edificaciones de todos los tamaños y complejidades en Colombia y Panamá.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;