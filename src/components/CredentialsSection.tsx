
import React, { useState, useEffect, useRef } from 'react';

const CredentialsSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    countries: 0,
    satisfaction: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targets = {
    years: 25,
    projects: 500,
    countries: 2,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counters
          Object.keys(targets).forEach((key) => {
            const target = targets[key as keyof typeof targets];
            let current = 0;
            const increment = target / 60; // 60 frames for smooth animation
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              
              setCounters(prev => ({
                ...prev,
                [key]: Math.floor(current)
              }));
            }, 33); // ~30fps
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const credentials = [
    { label: 'Años de Experiencia', value: counters.years, suffix: '+' },
    { label: 'Proyectos Completados', value: counters.projects, suffix: '+' },
    { label: 'Países', value: counters.countries, suffix: '' },
    { label: 'Satisfacción del Cliente', value: counters.satisfaction, suffix: '%' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            Nuestra Trayectoria
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Números que respaldan nuestra experiencia y compromiso con la excelencia
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div 
              key={index}
              className="text-center animate-counter"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl lg:text-6xl font-montserrat font-bold text-gold-accent mb-4">
                {credential.value}{credential.suffix}
              </div>
              <div className="text-lg font-semibold text-gray-300">
                {credential.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
