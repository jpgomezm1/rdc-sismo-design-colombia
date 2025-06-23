// src/pages/Blog.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Calendar, User, Tag, Clock, ChevronRight, Search,
  ArrowRight, BookOpen, PlusCircle, Mail, Filter, Check, Globe, Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
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
  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'estructural', label: 'Ingeniería Estructural' },
    { id: 'geociencias', label: 'Geociencias' },
    { id: 'computacion', label: 'Computación' },
    { id: 'normativa', label: 'Normativa' },
    { id: 'innovacion', label: 'Innovación' }
  ];
  
  // Datos de artículos del blog
  const blogPosts = [
    {
      id: 1,
      title: 'Impacto de la Inteligencia Artificial en la Ingeniería Estructural',
      excerpt: 'Cómo las nuevas tecnologías de IA están transformando los procesos de diseño y análisis estructural para edificios de gran altura.',
      date: '15 Mayo, 2025',
      author: 'Ing. Carlos Ramírez',
      category: 'innovacion',
      readTime: '8 min',
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/blog1.png',
      featured: true
    },
    {
      id: 2,
      title: 'Microzonificación Sísmica: Casos de Éxito en Colombia',
      excerpt: 'Análisis de los proyectos de microzonificación sísmica en las principales ciudades colombianas y su impacto en la seguridad estructural.',
      date: '28 Abril, 2025',
      author: 'Dra. Alejandra Méndez',
      category: 'geociencias',
      readTime: '12 min',
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/blog2.png',
      featured: false
    },
    {
      id: 3,
      title: 'Actualizaciones a la NSR-10: Lo que Todo Ingeniero Debe Saber',
      excerpt: 'Resumen de las modificaciones recientes a la Norma Sismo Resistente colombiana y sus implicaciones para los proyectos en curso.',
      date: '10 Abril, 2025',
      author: 'Ing. Javier Torres',
      category: 'normativa',
      readTime: '10 min',
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/blog3.png',
      featured: false
    },
    {
      id: 4,
      title: 'BIM y Gemelos Digitales: Revolucionando la Gestión de Infraestructura',
      excerpt: 'Cómo la metodología BIM está evolucionando hacia los gemelos digitales para optimizar el ciclo de vida de edificaciones e infraestructura.',
      date: '2 Abril, 2025',
      author: 'Ing. María Sánchez',
      category: 'computacion',
      readTime: '7 min',
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/blog4.png',
      featured: false
    },
    {
      id: 5,
      title: 'Análisis No Lineal: Cuándo y Por Qué Implementarlo',
      excerpt: 'Guía práctica sobre los casos en que el análisis no lineal aporta valor significativo y cómo implementarlo correctamente.',
      date: '20 Marzo, 2025',
      author: 'Ing. Roberto Pérez',
      category: 'estructural',
      readTime: '15 min',
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/blog5.png',
      featured: true
    },
    {
      id: 6,
      title: 'Riesgos Geológicos en el Desarrollo Urbano de Medellín',
      excerpt: 'Evaluación de los principales riesgos geológicos que afectan el desarrollo urbano en laderas de Medellín y estrategias de mitigación.',
      date: '5 Marzo, 2025',
      author: 'Dra. Alejandra Méndez',
      category: 'geociencias',
      readTime: '9 min',
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/blog6.png',
      featured: false
    },
    {
      id: 7,
      title: 'Tendencias en Reforzamiento Estructural para Edificios Históricos',
      excerpt: 'Nuevas técnicas y materiales para reforzar estructuras históricas manteniendo su valor patrimonial e integridad arquitectónica.',
      date: '18 Febrero, 2025',
      author: 'Ing. Carlos Ramírez',
      category: 'estructural',
      readTime: '11 min',
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/blog7.png',
      featured: false
    },
    {
      id: 8,
      title: 'Automatización de Cálculos Estructurales con Python',
      excerpt: 'Tutorial sobre cómo implementar scripts de Python para automatizar cálculos estructurales repetitivos y optimizar flujos de trabajo.',
      date: '29 Enero, 2025',
      author: 'Ing. Javier Torres',
      category: 'computacion',
      readTime: '14 min',
      image: 'https://storage.googleapis.com/cluvi/Web-Risk/Blog-Images/blog8.png',
      featured: false
    }
  ];
  
  // Filtrar artículos por categoría y búsqueda
  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'all' || post.category === activeCategory)
    .filter(post => 
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
  // Artículos destacados
  const featuredPosts = blogPosts.filter(post => post.featured);

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
              src="https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Blog de Ingeniería"
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
                Conocimiento e Innovación
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight mb-6"
              >
                Nuestro <span className="text-[#961A1D]">Blog</span> <br className="hidden md:block" />
                Técnico
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-white/80 mb-8 max-w-2xl"
              >
                Artículos técnicos, casos de estudio y las últimas tendencias en ingeniería 
                estructural, geociencias y computación aplicada.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative max-w-lg"
              >
                <Input 
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 py-6 text-gray-900 rounded-md shadow-lg border-0 focus:ring-2 focus:ring-[#961A1D]"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#961A1D] hover:bg-[#961A1D]/80 text-white px-4 py-2 rounded-md"
                  onClick={() => setSearchQuery(searchQuery)}
                >
                  Buscar
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
                  <BookOpen className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">{blogPosts.length}+</div>
                    <div className="text-white/70 text-xs">Artículos técnicos</div>
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
                  <Tag className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">{categories.length - 1}</div>
                    <div className="text-white/70 text-xs">Categorías</div>
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
                  <User className="h-5 w-5 text-[#961A1D] mr-3" />
                  <div>
                    <div className="text-white font-bold text-2xl">5+</div>
                    <div className="text-white/70 text-xs">Expertos autores</div>
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
        
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
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
                    <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Artículos recomendados</span>
                    <div className="h-px w-12 bg-[#961A1D]"></div>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                    Artículos <span className="text-[#961A1D]">destacados</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Nuestras publicaciones más relevantes y recientes sobre tendencias, innovaciones
                    y estudios de caso en el campo de la ingeniería.
                  </p>
                </motion.div>
              
                <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredPosts.map(post => (
                    <div 
                      key={post.id}
                      className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="md:w-2/5 h-56 md:h-auto relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-[#961A1D] text-white text-xs font-medium rounded-full">
                          Destacado
                        </div>
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center mb-4">
                            <span className="px-3 py-1 bg-[#961A1D]/10 text-[#961A1D] text-xs font-medium rounded-full">
                              {categories.find(cat => cat.id === post.category)?.label || post.category}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-[#2C3336] mb-4 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-6 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                        
                        <div>
                          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6 gap-y-2">
                            <div className="flex items-center mr-4">
                              <User className="h-4 w-4 mr-2 text-[#961A1D]" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center mr-4">
                              <Calendar className="h-4 w-4 mr-2 text-[#961A1D]" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-[#961A1D]" />
                              <span>{post.readTime} de lectura</span>
                            </div>
                          </div>
                          
                          <Button 
                            className="group bg-[#2C3336] hover:bg-[#961A1D] text-white transition-colors duration-500 w-fit"
                          >
                            <span className="flex items-center">
                              Leer artículo
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}
        
        {/* Blog Posts */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
                <div className="mb-8 md:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                    <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Publicaciones</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2C3336] mb-2">
                    Todos los Artículos
                  </h2>
                  <p className="text-gray-600">
                    Encuentra artículos sobre diversos temas de ingeniería
                  </p>
                </div>
                
                {/* Categorías */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category.id 
                          ? 'bg-[#961A1D] text-white shadow-md' 
                          : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Grid de artículos */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + (idx * 0.05) }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                        <span className="text-white text-sm font-medium">{post.readTime} de lectura</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {categories.find(cat => cat.id === post.category)?.label || post.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#2C3336] mb-3 line-clamp-2 flex-grow-0">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center text-gray-500 text-sm">
                          <User className="h-4 w-4 mr-1 text-[#961A1D]" />
                          <span>{post.author}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1 text-[#961A1D]" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <button
                          className="inline-flex items-center text-[#961A1D] font-medium hover:text-[#961A1D]/80 group transition-colors duration-300"
                        >
                          Leer artículo
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Si no hay artículos que coincidan con el filtro */}
              {filteredPosts.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-lg"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <Filter className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-600 mb-4">No se encontraron artículos</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">Intenta con otra búsqueda o categoría</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setActiveCategory('all')}
                      className="bg-white hover:bg-[#961A1D] hover:text-white transition-colors duration-300"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Ver todos los artículos
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchQuery('')}
                      className="bg-white hover:bg-[#961A1D] hover:text-white transition-colors duration-300"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Limpiar búsqueda
                    </Button>
                  </div>
                </motion.div>
              )}
              
              {/* Pagination/Load More */}
              {filteredPosts.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-16 text-center"
                >
                  <Button className="bg-[#2C3336] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-colors duration-500 group">
                    <span className="flex items-center">
                      <PlusCircle className="h-5 w-5 mr-2" />
                      Cargar más artículos
                      <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                    </span>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-24 bg-[#2C3336] text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
              <div className="absolute -right-20 bottom-1/3 w-40 h-40 rounded-full bg-[#961A1D]/10 blur-3xl"></div>
              
              <div className="relative bg-gradient-to-r from-[#2C3336]/50 to-[#1F2426]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-white/5 p-12 text-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#961A1D] via-[#961A1D]/50 to-transparent"></div>
                
                <div className="w-20 h-20 rounded-full bg-[#961A1D]/10 flex items-center justify-center mx-auto mb-8">
                  <Mail className="h-10 w-10 text-[#961A1D]" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
                  Suscríbete a nuestro Newsletter
                </h2>
                
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Recibe mensualmente artículos técnicos, casos de estudio y actualizaciones 
                  sobre normativas en ingeniería estructural, geociencias y computación.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <Input 
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[#961A1D] py-6"
                  />
                  <Button 
                    className="bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <span className="relative z-10 flex items-center">
                      Suscribirse
                      <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                    </span>
                    <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
                  </Button>
                </div>
                
                <p className="text-xs text-white/50 mt-6">
                  Al suscribirte, aceptas nuestra política de privacidad. Puedes darte de baja en cualquier momento.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        
      </main>
      <Footer />
    </div>
  );
};

export default Blog;