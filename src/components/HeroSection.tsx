
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9a1c02e&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-montserrat font-bold mb-6 text-shadow">
            Ingeniería Sísmica de Excelencia para Colombia y Panamá
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 font-light leading-relaxed text-shadow">
            25 años protegiendo vidas y patrimonio con diseño estructural innovador
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-primary-red hover:bg-primary-red/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Evalúa tu Proyecto
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Ver Portafolio
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
