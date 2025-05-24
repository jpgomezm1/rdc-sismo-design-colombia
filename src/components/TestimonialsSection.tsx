import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Building2 } from 'lucide-react';

const TrustedCompaniesSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  
  // Empresas principales con sus logos (solo las 3 con logos reales)
  const companies = [
    {
      id: 1,
      name: 'Arconsa',
      logo: 'https://storage.googleapis.com/cluvi/Web-Risk/arconsa.png',
      description: 'Líder en construcción de infraestructura y proyectos inmobiliarios en Colombia.',
      projects: 24
    },
    {
      id: 2,
      name: 'Argos',
      logo: 'https://storage.googleapis.com/cluvi/Web-Risk/argos.png',
      description: 'Multinacional cementera y de concreto con presencia en toda Latinoamérica.',
      projects: 18
    },
    {
      id: 3,
      name: 'Sura',
      logo: 'https://storage.googleapis.com/cluvi/Web-Risk/sura.png',
      description: 'Líder en seguros y gestión de riesgos en América Latina.',
      projects: 31
    }
  ];
  
  // Detección de visibilidad para animaciones
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
  
  const companyVariants = {
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
      className="py-24 relative bg-white overflow-hidden"
    >
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={companyVariants} className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-8 bg-[#961A1D] mr-3"></div>
              <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Alianzas Estratégicas</span>
              <div className="h-px w-8 bg-[#961A1D] ml-3"></div>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={companyVariants}
            className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6"
          >
            Empresas que <span className="text-[#961A1D]">confían</span> en nosotros
          </motion.h2>
          
          <motion.p 
            variants={companyVariants}
            className="text-lg text-gray-600"
          >
            Nuestra trayectoria está respaldada por la confianza de empresas líderes
            que han elegido nuestra experiencia para sus proyectos más exigentes.
          </motion.p>
        </motion.div>
        
        {/* Contenedor de clientes */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                variants={companyVariants}
                custom={index}
                className="relative group"
                onMouseEnter={() => setHoveredCompany(company.id)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                <div 
                  className={`p-8 h-full bg-white border rounded-xl overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ${
                    hoveredCompany === company.id 
                      ? 'border-[#961A1D] shadow-xl transform -translate-y-2' 
                      : 'border-gray-200 shadow-sm'
                  }`}
                  style={{
                    boxShadow: hoveredCompany === company.id 
                      ? '0 10px 40px rgba(150, 26, 29, 0.08)' 
                      : '0 4px 6px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  {/* Elemento decorativo superior */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
                      hoveredCompany === company.id ? 'bg-[#961A1D]' : 'bg-transparent'
                    }`}
                  ></div>
                  
                  {/* Logo de la empresa con efecto de "respiración" */}
                  <div className="relative w-full h-48 flex items-center justify-center mb-6">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className={`max-h-full max-w-full object-contain transition-all duration-500 ${
                        hoveredCompany === company.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                  </div>
                  
                  {/* Información que aparece al hacer hover */}
                  <div 
                    className={`text-center transition-all duration-300 ${
                      hoveredCompany === company.id 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    <div className="mb-3 text-gray-600">{company.description}</div>
                    <div className="inline-flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-[#961A1D] mr-2" />
                      <span className="font-medium text-[#961A1D]">
                        {company.projects} proyectos completados
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* CTA simple */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-[#2C3336] hover:bg-[#961A1D] text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Únase a nuestros clientes satisfechos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;