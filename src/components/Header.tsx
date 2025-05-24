
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Building, Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Ingeniería Sísmica', href: '#sismica' },
    { name: 'Geotecnia y Geociencias', href: '#geotecnia' },
    { name: 'Consultoría en Riesgos', href: '#riesgos' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-light shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Building className="h-8 w-8 text-primary-red" />
            <div className="text-2xl font-montserrat font-bold text-charcoal">
              R&DC
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-charcoal hover:text-primary-red transition-colors duration-300">
              Inicio
            </a>
            <a href="#nosotros" className="text-charcoal hover:text-primary-red transition-colors duration-300">
              Nosotros
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button className="flex items-center text-charcoal hover:text-primary-red transition-colors duration-300">
                Servicios
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {showServicesMenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-charcoal hover:text-primary-red hover:bg-light-gray transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#proyectos" className="text-charcoal hover:text-primary-red transition-colors duration-300">
              Proyectos
            </a>
            <a href="#blog" className="text-charcoal hover:text-primary-red transition-colors duration-300">
              Blog
            </a>
            <a href="#contacto" className="text-charcoal hover:text-primary-red transition-colors duration-300">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            className="hidden lg:inline-flex bg-primary-red hover:bg-primary-red/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
          >
            Consulta Gratuita
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Menu className="h-6 w-6 text-charcoal" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col space-y-6 mt-8">
                <a href="#inicio" className="text-xl text-charcoal hover:text-primary-red transition-colors">
                  Inicio
                </a>
                <a href="#nosotros" className="text-xl text-charcoal hover:text-primary-red transition-colors">
                  Nosotros
                </a>
                
                <div className="space-y-3">
                  <div className="text-xl text-charcoal font-semibold">Servicios</div>
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block pl-4 text-lg text-text-secondary hover:text-primary-red transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
                
                <a href="#proyectos" className="text-xl text-charcoal hover:text-primary-red transition-colors">
                  Proyectos
                </a>
                <a href="#blog" className="text-xl text-charcoal hover:text-primary-red transition-colors">
                  Blog
                </a>
                <a href="#contacto" className="text-xl text-charcoal hover:text-primary-red transition-colors">
                  Contacto
                </a>
                
                <Button className="bg-primary-red hover:bg-primary-red/90 text-white w-full mt-6">
                  Consulta Gratuita
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
