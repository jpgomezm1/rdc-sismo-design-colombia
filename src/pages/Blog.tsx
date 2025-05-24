// src/pages/Blog.tsx
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Tag, Clock, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
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
      image: 'https://images.unsplash.com/photo-1581094283645-9123f341d3d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1572806030463-ee6d45312ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1499397228652-1244787638d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
        {/* Hero Section */}
        <section className="relative py-28 bg-gradient-to-br from-[#2C3336] to-[#1a1f20] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-white/80 font-medium">Conocimiento e Innovación</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
                Nuestro <span className="text-[#961A1D]">Blog</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Artículos técnicos, casos de estudio y las últimas tendencias en ingeniería 
                estructural, geociencias y computación aplicada.
              </p>
              
              {/* Buscador */}
              <div className="relative max-w-lg">
                <Input 
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 py-3 text-gray-900 rounded-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3336] mb-10">
                Artículos Destacados
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map(post => (
                  <div 
                    key={post.id}
                    className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="md:w-2/5 h-56 md:h-auto">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-3">
                          <span className="px-3 py-1 bg-[#961A1D]/10 text-[#961A1D] text-xs font-medium rounded-full">
                            {categories.find(cat => cat.id === post.category)?.label || post.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#2C3336] mb-3">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div>
                        <div className="flex items-center text-gray-500 text-sm mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{post.readTime} de lectura</span>
                        </div>
                        
                        <a 
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-[#961A1D] font-medium hover:text-[#961A1D]/80"
                        >
                          Leer artículo
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3336] mb-6 md:mb-0">
                Todos los Artículos
              </h2>
              
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
              {filteredPosts.map(post => (
                <div 
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {categories.find(cat => cat.id === post.category)?.label || post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#2C3336] mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <a 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-[#961A1D] font-medium hover:text-[#961A1D]/80"
                      >
                        Leer artículo
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Si no hay artículos que coincidan con el filtro */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-gray-600 mb-2">No se encontraron artículos</h3>
                <p className="text-gray-500 mb-6">Intenta con otra búsqueda o categoría</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveCategory('all')}
                  >
                    Ver todos los artículos
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchQuery('')}
                  >
                    Limpiar búsqueda
                  </Button>
                </div>
              </div>
            )}
            
            {/* Pagination/Load More */}
            {filteredPosts.length > 0 && (
              <div className="mt-16 text-center">
                <Button className="bg-[#2C3336] hover:bg-[#2C3336]/90 text-white px-8">
                  <span className="flex items-center">
                    Cargar más artículos
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-20 bg-[#2C3336] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Suscríbete a nuestro Newsletter
              </h2>
              <p className="text-white/70 mb-8">
                Recibe mensualmente artículos técnicos, casos de estudio y actualizaciones 
                sobre normativas en ingeniería estructural, geociencias y computación.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-[#961A1D]"
                />
                <Button className="bg-[#961A1D] hover:bg-[#961A1D]/90 text-white px-8">
                  Suscribirse
                </Button>
              </div>
              
              <p className="text-xs text-white/50 mt-4">
                Al suscribirte, aceptas nuestra política de privacidad. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;