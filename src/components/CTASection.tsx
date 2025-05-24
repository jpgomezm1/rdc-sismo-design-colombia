
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal to-charcoal/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            ¿Tienes un proyecto que requiere expertise en ingeniería sísmica?
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            Nuestro equipo de especialistas está listo para evaluar tu proyecto y brindarte soluciones personalizadas que garanticen la máxima seguridad y eficiencia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary-red hover:bg-primary-red/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Agenda una Consultoría Gratuita
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-charcoal px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Descargar Brochure
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gold-accent text-lg font-semibold mb-2">Respuesta en 24h</div>
              <div className="text-gray-300">Evaluación inicial rápida</div>
            </div>
            <div>
              <div className="text-gold-accent text-lg font-semibold mb-2">Sin compromiso</div>
              <div className="text-gray-300">Consultoría inicial gratuita</div>
            </div>
            <div>
              <div className="text-gold-accent text-lg font-semibold mb-2">Expertise garantizado</div>
              <div className="text-gray-300">25 años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
