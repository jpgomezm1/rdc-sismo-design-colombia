import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, MapPin, Building2, Ruler, ArrowRight, Globe, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const sectionRef = useRef(null);
  const projectsContainerRef = useRef(null);
  
  // Determinación del ancho de la pantalla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detector de visibilidad para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
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
  }, []);

  // Estadísticas actualizadas
  const stats = [
    {
      icon: Building2,
      value: "60+",
      label: "Edificios diseñados",
      description: "Entre 10 y 40 pisos en Colombia y Panamá"
    },
    {
      icon: Clock,
      value: "11+",
      label: "Años de experiencia",
      description: "En diseño de edificios de concreto reforzado"
    },
    {
      icon: Users,
      value: "30+",
      label: "Profesionales expertos",
      description: "Equipo multidisciplinario especializado"
    },
    {
      icon: Globe,
      value: "2",
      label: "Países",
      description: "Presencia activa en Colombia y Panamá"
    }
  ];

  // Proyectos destacados actualizados
  const featuredProjects = [
    {
      id: 1,
      title: "Torre Empresarial Atrio",
      location: "Bogotá, Colombia",
      description: "Diseño estructural para edificio de 44 pisos con análisis de respuesta sísmica avanzado y optimización de materiales.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      floors: "44 pisos",
      area: "25,000 m²",
      year: "2022",
      service: "Ingeniería Estructural",
      highlight: "Estructura optimizada que redujo en 15% el uso de concreto y 10% el acero estructural"
    },
    {
      id: 2,
      title: "Torre Bicsa Financial Center",
      location: "Ciudad de Panamá, Panamá", 
      description: "Modelación estructural avanzada y análisis sísmico para rascacielos de 68 pisos en el centro financiero.",
      image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      floors: "68 pisos",
      area: "22,000 m²", 
      year: "2019",
      service: "Ingeniería Estructural",
      highlight: "Diseño por desempeño que permitió optimizar la respuesta estructural ante eventos sísmicos"
    },
    {
      id: 3,
      title: "Conjunto Residencial Alto Prado",
      location: "Barranquilla, Colombia",
      description: "Estudio de suelos y recomendaciones para cimentación de complejo residencial de 35 pisos en la costa caribe.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      floors: "35 pisos",
      area: "30,000 m²",
      year: "2021", 
      service: "Geociencias + Estructural",
      highlight: "Solución de cimentación que redujo costos en 20% considerando condiciones del suelo costero"
    }
  ];

  // Datos de proyectos mejorados con más información y mejores imágenes
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
  
  // Función para filtrar proyectos
  useEffect(() => {
    let filtered = projects;
    
    if (activeFilter !== 'all') {
      filtered = projects.filter(project => project.tags.includes(activeFilter));
    }
    
    setVisibleProjects(filtered);
    setCurrentPage(0); // Reset pagination cuando cambia el filtro
  }, [activeFilter]);
  
  // Categorías para filtrado
  const filterCategories = [
    { id: 'all', label: 'Todos' },
    { id: 'colombia', label: 'Colombia' },
    { id: 'panama', label: 'Panamá' },
    { id: 'edificios', label: 'Edificios' },
    { id: 'infraestructura', label: 'Infraestructura' }
  ];
  
  // Lógica de paginación
  const projectsPerPage = isMobile ? 1 : 3;
  const pageCount = Math.ceil(visibleProjects.length / projectsPerPage);
  
  const getPageProjects = () => {
    const start = currentPage * projectsPerPage;
    const end = start + projectsPerPage;
    return visibleProjects.slice(start, end);
  };
  
  const nextPage = () => {
    if (currentPage < pageCount - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };
  
  // Destacado grande (proyecto principal)
  const featuredProject = projects.find(p => p.featured) || projects[0];

  return (
    <section 
      ref={sectionRef} 
      className="py-32 relative overflow-hidden bg-gray-50"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div className="max-w-xl mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
              <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Portafolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-4">
              Proyectos <span className="text-[#961A1D]">destacados</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Más de 60 edificios diseñados entre 10 y 40 pisos en Colombia y Panamá,
              con tecnología propia que garantiza cantidades exactas y múltiples alternativas de reforzamiento.
            </p>
          </div>
          
          {/* Filtros en desktop */}
          <div className="hidden md:block">
            <div className="inline-flex bg-white shadow-md rounded-full p-1.5 border border-gray-100">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id 
                      ? 'bg-[#961A1D] text-white' 
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Filtros en mobile */}
        <div className="md:hidden mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 pb-2">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeFilter === category.id 
                    ? 'bg-[#961A1D] text-white shadow-md' 
                    : 'bg-white text-gray-500 hover:text-gray-800 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Proyecto Destacado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-xl">
            {/* Imagen */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
              <img 
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#961A1D] mr-2"></div>
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
                </div>
              </div>
              
              <a 
                href={`#proyecto-${featuredProject.id}`}
                className="group inline-flex items-center space-x-2 text-[#961A1D] hover:text-[#961A1D]/80 font-semibold w-fit"
              >
                <span>Ver proyecto completo</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Proyectos en carrusel */}
        <div className="relative" ref={projectsContainerRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {getPageProjects().map((project) => (
                <Card 
                  key={project.id}
                  className="group overflow-hidden bg-white border-0 shadow-lg rounded-xl transition-all duration-500 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-500 ${
                      hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      <div className="flex items-center justify-between text-white">
                        <div className="text-sm font-medium">{project.service}</div>
                        <div className="text-sm">{project.year}</div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
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
                    
                    <a 
                      href={`#proyecto-${project.id}`}
                      className="inline-flex items-center text-[#961A1D] hover:text-[#961A1D]/80 font-medium text-sm transition-colors duration-300"
                    >
                      Ver detalles
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Controles de paginación */}
          {pageCount > 1 && (
            <div className="flex items-center justify-between mt-12">
              <div className="text-gray-500 text-sm">
                Mostrando {currentPage + 1} de {pageCount}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`p-2 rounded-full border ${
                    currentPage === 0 
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                      : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <button
                  onClick={nextPage}
                  disabled={currentPage === pageCount - 1}
                  className={`p-2 rounded-full border ${
                    currentPage === pageCount - 1 
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                      : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <a 
            href="#portafolio-completo"
            className="inline-flex items-center bg-[#2C3336] hover:bg-[#2C3336]/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>Ver portafolio completo</span>
            <div className="ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/30">
              <ChevronRight className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;