
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "R&DC superó nuestras expectativas con su expertise en ingeniería sísmica. Su equipo nos brindó soluciones innovadoras que garantizaron la seguridad de nuestro proyecto.",
      name: "María Elena Rodríguez",
      position: "Directora de Proyectos",
      company: "Constructora Andina S.A.",
      rating: 5
    },
    {
      id: 2,
      quote: "El estudio geotécnico realizado por R&DC fue fundamental para el éxito de nuestro desarrollo. Su profesionalismo y atención al detalle son excepcionales.",
      name: "Carlos Alberto Méndez",
      position: "Gerente General",
      company: "Inmobiliaria del Pacífico",
      rating: 5
    },
    {
      id: 3,
      quote: "Trabajar con R&DC ha sido una experiencia extraordinaria. Su conocimiento técnico y compromiso con la calidad los posiciona como líderes en el sector.",
      name: "Ana Patricia Vásquez",
      position: "Directora Técnica",
      company: "Ministerio de Obras Públicas",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-charcoal mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor reconocimiento
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-12 text-center">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-gold-accent fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-2xl lg:text-3xl text-charcoal font-light leading-relaxed mb-8 italic">
                "{currentTest.quote}"
              </blockquote>
              
              {/* Author Info */}
              <div className="border-t pt-8">
                <div className="text-xl font-montserrat font-semibold text-charcoal">
                  {currentTest.name}
                </div>
                <div className="text-text-secondary">
                  {currentTest.position}
                </div>
                <div className="text-primary-red font-semibold">
                  {currentTest.company}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-charcoal hover:bg-charcoal hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary-red' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-charcoal hover:bg-charcoal hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
