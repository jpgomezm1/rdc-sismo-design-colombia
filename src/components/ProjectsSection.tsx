
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Torre Empresarial Bogotá',
      location: 'Bogotá, Colombia',
      service: 'Ingeniería Sísmica',
      area: '25,000 m²',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Centro Comercial Panamá City',
      location: 'Ciudad de Panamá, Panamá',
      service: 'Geotecnia',
      area: '18,500 m²',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Hospital Universitario',
      location: 'Medellín, Colombia',
      service: 'Consultoría en Riesgos',
      area: '12,000 m²',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Puente Vehicular',
      location: 'Cali, Colombia',
      service: 'Ingeniería Sísmica',
      area: '450 m longitud',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Complejo Residencial',
      location: 'Barranquilla, Colombia',
      service: 'Geotecnia',
      area: '35,000 m²',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Edificio Corporativo',
      location: 'Ciudad de Panamá, Panamá',
      service: 'Ingeniería Sísmica',
      area: '22,000 m²',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-charcoal mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Una muestra de nuestros proyectos más emblemáticos en Colombia y Panamá
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm font-semibold">{project.service}</div>
                  <div className="text-sm">{project.area}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-charcoal mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {project.location}
                </p>
                <a 
                  href={`#proyecto-${project.id}`}
                  className="inline-flex items-center text-primary-red hover:text-primary-red/80 font-semibold transition-colors duration-300"
                >
                  Ver detalles
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#proyectos"
            className="inline-flex items-center bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Ver Todos los Proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
