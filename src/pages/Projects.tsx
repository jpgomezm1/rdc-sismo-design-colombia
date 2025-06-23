// src/pages/Projects.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  MapPin, Building2, Calendar, Ruler, Globe, ChevronRight, 
  ArrowRight, Filter, Search, Check, PlusCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
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
  
  // Categorías para filtrado
  const filterCategories = [
    { id: 'all', label: 'Todos' },
    { id: 'colombia', label: 'Colombia' },
    { id: 'panama', label: 'Panamá' },
    { id: 'edificios', label: 'Edificios' },
    { id: 'infraestructura', label: 'Infraestructura' },
    { id: 'industrial', label: 'Industrial' }
  ];
  
  // Datos de proyectos actualizados
  const projects = [
    {
      id: 1,
      title: 'Proyecto Generation',
      location: 'Ciudad de Panamá, Panamá',
      description: 'Análisis de respuesta sísmica y diseño estructural para este edificio emblemático de 44 pisos en el centro de Bogotá.',
      service: 'Ingeniería Estructural',
      area: '25,000 m²',
      year: '2022',
      featured: true,
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Images-Projects/generation_panama_check.png',
      client: 'Grupo Empresarial Andino',
      tags: ['edificios', 'colombia']
    },
    {
      id: 2,
      title: 'Proyecto Corotú',
      location: 'Ciudad de Panamá, Panamá',
      description: 'Estudio geotécnico y análisis de suelos para la ampliación de este importante centro comercial en Panamá.',
      service: 'Geociencias',
      area: '18,500 m²',
      year: '2021',
      featured: true,
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Images-Projects/corotu_panama_check.png',
      client: 'Grupo Roble',
      tags: ['comercial', 'panama']
    },
    {
      id: 3,
      title: 'Proyecto Bioma',
      location: 'Ciudad de Panamá, Panamá',
      description: 'Consultoría en riesgos y análisis de vulnerabilidad sísmica para esta institución de salud crítica.',
      service: 'Consultoría en Riesgos',
      area: '12,000 m²',
      year: '2023',
      featured: false,
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Images-Projects/bioma_panama_check.png',
      client: 'Secretaría de Salud',
      tags: ['salud', 'colombia']
    },
    {
      id: 4,
      title: 'Proyecto Uptown',
      location: 'Ciudad de Panamá, Panamá',
      description: 'Diseño estructural y análisis sísmico para este importante puente urbano que conecta dos sectores vitales de la ciudad.',
      service: 'Ingeniería Estructural',
      area: '450 m longitud',
      year: '2020',
      featured: true,
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Images-Projects/uptown_panama_check.png',
      client: 'Secretaría de Infraestructura',
      tags: ['infraestructura', 'colombia']
    },
    {
      id: 5,
      title: 'Belo Horizonte',
      location: 'Medellín, Colombia',
      description: 'Estudio de suelos y recomendaciones para cimentación de este moderno complejo residencial de lujo en la costa caribe.',
      service: 'Geociencias',
      area: '35,000 m²',
      year: '2021',
      featured: false,
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Images-Projects/belo_horizonte_col_ready.png',
      client: 'Constructora del Norte',
      tags: ['residencial', 'colombia']
    },
    {
      id: 6,
      title: 'Kosmos',
      location: 'Medellín, Colombia',
      description: 'Modelación estructural avanzada y análisis sísmico para este rascacielos de 68 pisos en el centro financiero.',
      service: 'Ingeniería Estructural',
      area: '22,000 m²',
      year: '2019',
      featured: true,
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Images-Projects/kosmos_colombia_check.png',
      client: 'BICSA Corp',
      tags: ['edificios', 'panama']
    },
    {
      id: 7,
      title: 'Madero de los Bosques',
      location: 'Medellín, Colombia',
      description: 'Evaluación de la respuesta dinámica y reforzamiento estructural para la renovación del estadio principal de la ciudad.',
      service: 'Ingeniería Estructural',
      area: '40,000 m²',
      year: '2023',
      featured: false,
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Images-Projects/madero_colombia_check.png',
      client: 'Alcaldía de Barranquilla',
      tags: ['deportivo', 'colombia']
    },
    {
      id: 8,
      title: 'Villa Cielo',
      location: 'Medellín, Colombia',
      description: 'Modelación computacional y simulación sísmica para esta moderna planta industrial con equipos sensibles.',
      service: 'Computación',
      area: '15,000 m²',
      year: '2022',
      featured: false,
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Images-Projects/villa_cielo_colombia_check.png',
      client: 'Grupo Industrial Del Istmo',
      tags: ['industrial', 'panama']
    }
  ];
  
  // Filtrar proyectos según categoría seleccionada
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  // Proyecto destacado (el primero con featured=true)
  const featuredProject = projects.find(p => p.featured) || projects[0];

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
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Proyectos de Ingeniería"
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
                Portafolio
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight mb-6"
              >
                Nuestros <span className="text-[#961A1D]">Proyectos</span> <br className="hidden md:block" />
                Destacados
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-white/80 mb-8 max-w-2xl"
              >
                Explore nuestra trayectoria de más de 11 años diseñando edificios de concreto reforzado
                entre 10 y 40 pisos en Colombia y Panamá, con tecnología propia que garantiza resultados precisos.
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
                    Explorar proyectos
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
                    <div className="text-white font-bold text-2xl">60+</div>
                    <div className="text-white/70 text-xs">Edificios completados</div>
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
                  <Globe className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">2</div>
                    <div className="text-white/70 text-xs">Países</div>
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
                  <Calendar className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">11+</div>
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
        
        {/* Filters Section */}
        <section ref={sectionRef} className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-16 text-center">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                  <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Portafolio</span>
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                  Proyectos <span className="text-[#961A1D]">destacados</span>
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Una selección de nuestros proyectos más representativos que demuestran
                  nuestro compromiso con la excelencia y la innovación.
                </p>
              </motion.div>
              
              {/* Buscador y filtros */}
              <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div className="relative w-full md:w-1/3">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-[#961A1D]/20 focus:border-[#961A1D] transition-all duration-300"
                    placeholder="Buscar proyectos..."
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {filterCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeFilter === category.id 
                          ? 'bg-[#961A1D] text-white shadow-md' 
                          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Proyecto Destacado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-6xl mx-auto mb-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                {/* Imagen */}
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                  <img 
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#961A1D] animate-pulse mr-2"></div>
                      <span className="text-sm font-medium">Proyecto Destacado</span>
                    </div>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{featuredProject.location}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredProject.year}</span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-montserrat font-bold text-[#2C3336] mb-4">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Servicio</div>
                        <div className="flex items-center text-[#2C3336] font-medium">
                          <Building2 className="h-4 w-4 text-[#961A1D] mr-2" />
                          {featuredProject.service}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Área</div>
                        <div className="flex items-center text-[#2C3336] font-medium">
                          <Ruler className="h-4 w-4 text-[#961A1D] mr-2" />
                          {featuredProject.area}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Cliente</div>
                        <div className="flex items-center text-[#2C3336] font-medium">
                          <Globe className="h-4 w-4 text-[#961A1D] mr-2" />
                          {featuredProject.client}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Año</div>
                        <div className="flex items-center text-[#2C3336] font-medium">
                          <Calendar className="h-4 w-4 text-[#961A1D] mr-2" />
                          {featuredProject.year}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="group bg-[#2C3336] hover:bg-[#961A1D] text-white transition-colors duration-500 w-fit"
                  >
                    <span className="flex items-center">
                      Ver proyecto completo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Proyectos Grid */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  >
                    <Card 
                      className="overflow-hidden bg-white border-0 shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">{project.service}</div>
                            <div className="text-sm">{project.year}</div>
                          </div>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{project.location}</span>
                        </div>
                        
                        <h3 className="text-xl font-montserrat font-semibold text-[#2C3336] mb-3 line-clamp-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto mb-4">
                          {project.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx} 
                              className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-auto">
                          <button
                            className="inline-flex items-center text-[#961A1D] hover:text-[#961A1D]/80 font-medium text-sm group transition-colors duration-300"
                          >
                            Ver detalles
                            <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                         </button>
                       </div>
                     </CardContent>
                   </Card>
                 </motion.div>
               ))}
             </div>
             
             {/* Si no hay proyectos que coincidan con el filtro */}
             {filteredProjects.length === 0 && (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5 }}
                 className="text-center py-20 bg-gray-50 rounded-xl border border-gray-100"
               >
                 <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                 <Filter className="h-8 w-8 text-gray-400" />
                 </div>
                 <h3 className="text-xl font-medium text-gray-600 mb-4">No se encontraron proyectos para esta categoría</h3>
                 <p className="text-gray-500 mb-6 max-w-md mx-auto">Intenta seleccionar otra categoría o restablecer los filtros</p>
                 <Button 
                   variant="outline" 
                   onClick={() => setActiveFilter('all')}
                   className="mt-2 bg-white hover:bg-[#961A1D] hover:text-white transition-colors duration-300"
                 >
                   <Check className="h-4 w-4 mr-2" />
                   Ver todos los proyectos
                 </Button>
               </motion.div>
             )}
             
             {/* Pagination/Load More */}
             {filteredProjects.length > 0 && (
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.8 }}
                 className="mt-16 text-center"
               >
                 <Button className="bg-[#2C3336] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-colors duration-500 group">
                   <span className="flex items-center">
                     <PlusCircle className="h-5 w-5 mr-2" />
                     Cargar más proyectos
                     <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                   </span>
                 </Button>
               </motion.div>
             )}
           </div>
         </div>
       </section>
       
       {/* Statistics Section */}
       <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
           <div className="max-w-6xl mx-auto">
             <div className="relative">
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#961A1D]/5 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#961A1D]/5 rounded-full blur-3xl"></div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                   { 
                     value: "60+", 
                     label: "Edificios Completados",
                     description: "Entre 10 y 40 pisos en los últimos 11 años"
                   },
                   { 
                     value: "600K", 
                     label: "m² Caracterizados",
                     description: "De terreno para decisiones confiables"
                   },
                   { 
                     value: "11+", 
                     label: "Años de Experiencia",
                     description: "En diseño de edificios de concreto reforzado"
                   },
                   { 
                     value: "2", 
                     label: "Países",
                     description: "Con presencia activa en Colombia y Panamá"
                   }
                 ].map((stat, idx) => (
                   <motion.div 
                     key={idx} 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                     className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                   >
                     <div className="text-4xl md:text-5xl font-montserrat font-bold text-[#961A1D] mb-2">{stat.value}</div>
                     <div className="text-[#2C3336] font-medium mb-2">{stat.label}</div>
                     <div className="text-gray-500 text-sm">{stat.description}</div>
                   </motion.div>
                 ))}
               </div>
             </div>
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
                 <Building2 className="h-10 w-10 text-[#961A1D]" />
               </div>
               
               <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                 ¿Listo para llevar tu proyecto al siguiente nivel?
               </h2>
               
               <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                 Contáctanos hoy mismo para una consultoría gratuita donde evaluaremos tu proyecto
                 y te ofreceremos las mejores soluciones adaptadas a tus necesidades específicas.
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

export default Projects;