
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Layers, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: 'Ingeniería Sísmica',
      description: 'Diseño sismorresistente y evaluación de vulnerabilidad estructural',
      link: '#sismica'
    },
    {
      icon: Layers,
      title: 'Geotecnia y Geociencias',
      description: 'Estudios de suelos y análisis geotécnico para cimentaciones',
      link: '#geotecnia'
    },
    {
      icon: Shield,
      title: 'Consultoría en Riesgos',
      description: 'Evaluación integral de riesgos naturales y planes de mitigación',
      link: '#riesgos'
    }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-charcoal mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Soluciones integrales de ingeniería para proyectos que requieren la máxima seguridad y confiabilidad
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-red/10 rounded-full mb-6 group-hover:bg-primary-red group-hover:text-white transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary-red group-hover:text-white" />
                </div>
                
                <h3 className="text-2xl font-montserrat font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <a 
                  href={service.link}
                  className="inline-flex items-center text-primary-red hover:text-primary-red/80 font-semibold transition-colors duration-300"
                >
                  Conoce más
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
