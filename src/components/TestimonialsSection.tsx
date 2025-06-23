import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Building2, Star, Quote } from 'lucide-react';

const TrustedCompaniesSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  // Testimonios actualizados
  const testimonials = [
    {
      id: 1,
      name: "Arq. Carolina Mendoza",
      position: "Directora de Desarrollo",
      company: "Grupo Inmobiliario Andino",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: "R&DC revolucionó nuestro proceso de desarrollo. Con sus herramientas ProDet y StructuBIM obtuvimos cantidades exactas desde la prefactibilidad, lo que nos permitió tomar decisiones financieras más precisas y reducir incertidumbre en un 40%.",
      project: "Torre Empresarial Centrika - 35 pisos",
      rating: 5
    },
    {
      id: 2,
      name: "Ing. Roberto Salazar",
      position: "Gerente de Construcción", 
      company: "Constructora del Pacífico",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: "La capacidad de R&DC de generar hasta 50 alternativas de reforzamiento nos dio flexibilidad total para adaptar el proyecto a nuestro flujo de caja y disponibilidad de materiales. Su acompañamiento en obra con StructuBIM fue fundamental.",
      project: "Conjunto Residencial Vista Mar - 28 pisos",
      rating: 5
    },
    {
      id: 3,
      name: "Ing. María Elena Vargas",
      position: "Directora Técnica",
      company: "Desarrollos Urbanos Panama",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80", 
      testimonial: "Su enfoque de integrar geociencias desde el Capítulo Zero nos evitó sorpresas costosas. La caracterización del suelo antes de comprar el lote nos ahorró aproximadamente 15% del presupuesto de cimentación.",
      project: "Torre Financiera Oceanía - 42 pisos",
      rating: 5
    },
    {
      id: 4,
      name: "Arq. Fernando Ruiz",
      position: "Gerente de Proyectos",
      company: "Inmobiliaria Costa Verde", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      testimonial: "Lo que más valoramos es que R&DC no solo diseña estructuras, sino que entiende el negocio inmobiliario. Sus análisis con datos precisos y respaldo normativo nos dan confianza total en cada decisión de diseño.",
      project: "Complejo Mixto Bahía - 31 pisos",
      rating: 5
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
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
        {/* Testimonials Section */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div variants={companyVariants} className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-8 bg-[#961A1D] mr-3"></div>
              <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Testimonios</span>
              <div className="h-px w-8 bg-[#961A1D] ml-3"></div>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={companyVariants}
            className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6"
          >
            Lo que dicen nuestros <span className="text-[#961A1D]">clientes</span>
          </motion.h2>
          
          <motion.p 
            variants={companyVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Desarrolladores inmobiliarios confían en nuestra tecnología propia y proceso de 7 pasos
            para tomar mejores decisiones estructurales con datos precisos y múltiples alternativas.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`${index === currentTestimonial ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative">
                  <Quote className="h-12 w-12 text-[#961A1D] mb-6 opacity-20" />
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                    "{testimonial.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="font-semibold text-[#2C3336]">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.position}</div>
                        <div className="text-sm text-[#961A1D] font-medium">{testimonial.company}</div>
                        <div className="text-xs text-gray-500 mt-1">{testimonial.project}</div>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-[#961A1D]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={companyVariants} className="text-center">
            <div className="text-3xl font-bold text-[#961A1D] mb-2">100%</div>
            <div className="text-sm text-gray-600">Proyectos con cantidades exactas</div>
          </motion.div>
          <motion.div variants={companyVariants} className="text-center">
            <div className="text-3xl font-bold text-[#961A1D] mb-2">50+</div>
            <div className="text-sm text-gray-600">Alternativas de reforzamiento</div>
          </motion.div>
          <motion.div variants={companyVariants} className="text-center">
            <div className="text-3xl font-bold text-[#961A1D] mb-2">40%</div>
            <div className="text-sm text-gray-600">Reducción de incertidumbre</div>
          </motion.div>
          <motion.div variants={companyVariants} className="text-center">
            <div className="text-3xl font-bold text-[#961A1D] mb-2">15%</div>
            <div className="text-sm text-gray-600">Ahorro promedio en costos</div>
          </motion.div>
        </motion.div>
        
        {/* Trusted Companies Section */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16 mt-24"
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