// src/pages/Projects.tsx
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Building2, Calendar, Ruler, Globe, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Categorías para filtrado
  const filterCategories = [
    { id: 'all', label: 'Todos' },
    { id: 'colombia', label: 'Colombia' },
    { id: 'panama', label: 'Panamá' },
    { id: 'edificios', label: 'Edificios' },
    { id: 'infraestructura', label: 'Infraestructura' },
    { id: 'industrial', label: 'Industrial' }
  ];
  
  // Datos de proyectos
  const projects = [
    {
      id: 1,
      title: 'Torre Empresarial Atrio',
      location: 'Bogotá, Colombia',
      description: 'Análisis de respuesta sísmica y diseño estructural para este edificio emblemático de 44 pisos en el centro de Bogotá.',
      service: 'Ingeniería Estructural',
      area: '25,000 m²',
      year: '2022',
      featured: true,
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      client: 'Grupo Empresarial Andino',
      tags: ['edificios', 'colombia']
    },
    {
      id: 2,
      title: 'Centro Comercial Multiplaza',
      location: 'Ciudad de Panamá, Panamá',
      description: 'Estudio geotécnico y análisis de suelos para la ampliación de este importante centro comercial en Panamá.',
      service: 'Geociencias',
      area: '18,500 m²',
      year: '2021',
      featured: true,
      image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      client: 'Grupo Roble',
      tags: ['comercial', 'panama']
    },
    {
      id: 3,
      title: 'Hospital Pablo Tobón Uribe',
      location: 'Medellín, Colombia',
      description: 'Consultoría en riesgos y análisis de vulnerabilidad sísmica para esta institución de salud crítica.',
      service: 'Consultoría en Riesgos',
      area: '12,000 m²',
      year: '2023',
      featured: false,
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      client: 'Secretaría de Salud',
      tags: ['salud', 'colombia']
    },
    {
      id: 4,
      title: 'Puente Vial La Flora',
      location: 'Cali, Colombia',
      description: 'Diseño estructural y análisis sísmico para este importante puente urbano que conecta dos sectores vitales de la ciudad.',
      service: 'Ingeniería Estructural',
      area: '450 m longitud',
      year: '2020',
      featured: true,
      image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      client: 'Secretaría de Infraestructura',
      tags: ['infraestructura', 'colombia']
    },
    {
      id: 5,
      title: 'Conjunto Alto Prado',
      location: 'Barranquilla, Colombia',
      description: 'Estudio de suelos y recomendaciones para cimentación de este moderno complejo residencial de lujo en la costa caribe.',
      service: 'Geociencias',
      area: '35,000 m²',
      year: '2021',
      featured: false,
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      client: 'Constructora del Norte',
      tags: ['residencial', 'colombia']
    },
    {
      id: 6,
      title: 'Torre Bicsa Financial Center',
      location: 'Ciudad de Panamá, Panamá',
      description: 'Modelación estructural avanzada y análisis sísmico para este rascacielos de 68 pisos en el centro financiero.',
      service: 'Ingeniería Estructural',
      area: '22,000 m²',
      year: '2019',
      featured: true,
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      client: 'BICSA Corp',
      tags: ['edificios', 'panama']
    },
    {
      id: 7,
      title: 'Estadio Metropolitano',
      location: 'Barranquilla, Colombia',
      description: 'Evaluación de la respuesta dinámica y reforzamiento estructural para la renovación del estadio principal de la ciudad.',
      service: 'Ingeniería Estructural',
      area: '40,000 m²',
      year: '2023',
      featured: false,
      image: 'https://images.unsplash.com/photo-1538671486197-d9274eb52c33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      client: 'Alcaldía de Barranquilla',
      tags: ['deportivo', 'colombia']
    },
    {
      id: 8,
      title: 'Planta Industrial Aruba',
      location: 'Colón, Panamá',
      description: 'Modelación computacional y simulación sísmica para esta moderna planta industrial con equipos sensibles.',
      service: 'Computación',
      area: '15,000 m²',
      year: '2022',
      featured: false,
      image: 'https://images.unsplash.com/photo-1622633401885-2070cd7ab969?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
        {/* Hero Section */}
        <section className="relative py-28 bg-gradient-to-br from-[#2C3336] to-[#1a1f20] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-white/80 font-medium">Portafolio</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
                Nuestros <span className="text-[#961A1D]">Proyectos</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Explore nuestra trayectoria de más de 25 años en proyectos de ingeniería 
                estructural, geociencias y computación en Colombia y Panamá.
              </p>
            </div>
          </div>
        </section>
        
        {/* Filters Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C3336]">
                  Proyectos Destacados
                </h2>
                <p className="text-gray-600">
                  Una selección de nuestros proyectos más representativos
                </p>
              </div>
              
              {/* Filtros */}
              <div className="flex flex-wrap gap-3">
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
            </div>
            
            {/* Proyecto Destacado */}
            <div className="mb-16">
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
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Año</div>
                        <div className="flex items-center text-[#2C3336] font-medium">
                          <Calendar className="h-4 w-4 text-[#961A1D] mr-2" />
                          {featuredProject.year}
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
            </div>
            
            {/* Proyectos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <Card 
                  key={project.id}
                  className="overflow-hidden bg-white border-0 shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between">
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
            </div>
            
            {/* Si no hay proyectos que coincidan con el filtro */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600 mb-4">No se encontraron proyectos para esta categoría</h3>
                <Button 
                  variant="outline" 
                  onClick={() => setActiveFilter('all')}
                  className="mt-2"
                >
                  Ver todos los proyectos
                </Button>
              </div>
            )}
            
            {/* Pagination/Load More */}
            {filteredProjects.length > 0 && (
              <div className="mt-16 text-center">
                <Button className="bg-[#2C3336] hover:bg-[#2C3336]/90 text-white px-8">
                  <span className="flex items-center">
                    Cargar más proyectos
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Proyectos Completados" },
                { value: "2.5M", label: "m² Diseñados" },
                { value: "25+", label: "Años de Experiencia" },
                { value: "2", label: "Países" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#961A1D] mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;