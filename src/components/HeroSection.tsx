import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    // Detectar posición de scroll para efectos parallax
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Simular carga progresiva de la página
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#111111]">
      {/* Grid decorativo */}
      <div className="absolute inset-0 z-10 grid grid-cols-6 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-full border-l border-white/5 relative">
            {i === 0 && (
              <div className="absolute h-full w-px left-0 bg-gradient-to-b from-transparent via-[#961A1D]/50 to-transparent" 
                   style={{opacity: Math.max(0, 0.7 - scrollPosition/1000)}}></div>
            )}
          </div>
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute top-0 left-0 right-0 h-px bg-white/5" 
               style={{top: `${i * 12.5}%`}}></div>
        ))}
      </div>
      
      {/* Video de fondo con mejor calidad */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className="object-cover w-full h-full scale-105"
          style={{
            transform: `scale(1.05) translate3d(0, ${scrollPosition * 0.05}px, 0)`,
            filter: 'brightness(0.7) contrast(1.1)'
          }}
        >
          <source src="https://storage.googleapis.com/cluvi/Web-Risk/Hero-RDC.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay gradiente premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 z-10"></div>
        
        {/* Patrón de puntos sutiles */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay z-20 bg-pattern-dots"></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative container mx-auto px-6 h-full z-30 flex flex-col justify-center">
        <div className="max-w-2xl ml-0 lg:ml-12 xl:ml-24 mt-12">
          {/* Línea animada superior */}
          <div 
            className={`w-16 h-px bg-[#961A1D] mb-6 transition-all duration-1000 delay-300 ${
              isLoaded ? 'w-24 opacity-100' : 'w-0 opacity-0'
            }`}
          ></div>
          
          {/* Subtítulo */}
          <div className={`overflow-hidden transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <p className="text-sm text-white/80 uppercase tracking-widest transform transition-transform duration-1000 delay-200"
               style={{transform: isLoaded ? 'translateY(0)' : 'translateY(100%)'}}>
              Risk & Design Consulting
            </p>
          </div>
          
          {/* Título principal con animación por palabra */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mt-4">
            <div className="overflow-hidden">
              <span 
                className="block transform transition-transform duration-1000 delay-300"
                style={{transform: isLoaded ? 'translateY(0)' : 'translateY(100%)'}}
              >
                Ingeniería estructural que
              </span>
            </div>
            <div className="overflow-hidden">
              <span 
                className="block transform transition-transform duration-1000 delay-400"
                style={{transform: isLoaded ? 'translateY(0)' : 'translateY(100%)'}}
              >
                protege <span className="text-[#961A1D]">vidas y rentabilidad</span>
              </span>
            </div>
          </h1>
          
          {/* Descripción con animación */}
          <div 
            className={`max-w-md mt-8 overflow-hidden transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p 
              className="text-base text-white/70 leading-relaxed transform transition-transform duration-1000 delay-600"
              style={{transform: isLoaded ? 'translateY(0)' : 'translateY(50%)'}}
            >
              Tranquilidad estructural y financiera para tu proyecto.  Ingeniería estructural y geotécnica de vanguardia basada en innovación, con herramientas propias que reducen incertidumbre, optimizan costos y aceleran decisiones. 
            </p>
          </div>
          
          {/* Botones con animación - CORREGIDOS */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              className="group bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-sm font-medium rounded-none transition-all duration-300 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center group-hover:translate-x-1 transition-transform">
                Evalúa tu proyecto
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </span>
              <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
            </Button>
            
            {/* Botón secundario CORREGIDO con texto visible */}
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white bg-black/20 hover:bg-white/10 px-8 py-6 text-sm font-medium rounded-none transition-all duration-300"
            >
              Explora nuestro portafolio
            </Button>
          </div>
        </div>
        
        {/* Indicadores de países */}
        <div 
          className={`absolute bottom-32 right-12 xl:right-24 transition-all duration-1000 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center text-white/80 space-x-12">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#961A1D] rounded-full mr-3"></div>
              <span className="text-sm tracking-wider">Colombia</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-[#961A1D] rounded-full mr-3"></div>
              <span className="text-sm tracking-wider">Panamá</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de desplazamiento con animación */}
      <div 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{opacity: Math.max(0, 0.7 - scrollPosition/300)}}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-xs tracking-widest uppercase mb-2">Descubrir</span>
          <div className="relative h-12 w-px bg-white/20">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-[#961A1D] to-transparent animate-pulse-down"></div>
          </div>
        </div>
      </div>
      
      {/* Líneas laterales decorativas */}
      <div className="absolute top-0 bottom-0 left-12 xl:left-24 w-px bg-white/10 z-20 hidden lg:block">
        <div 
          className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-transparent via-[#961A1D]/40 to-transparent opacity-70"
          style={{opacity: Math.max(0, 0.7 - scrollPosition/800)}}
        ></div>
      </div>
    </section>
  );
};

// Añadir esto al CSS global
const globalStyles = `
  @keyframes pulse-down {
    0%, 100% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 100%);
      opacity: 0;
    }
  }
  
  .animate-pulse-down {
    animation: pulse-down 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  
  .bg-pattern-dots {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 30px 30px;
  }
`;

export default HeroSection;