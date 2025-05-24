import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showServicesMenu, setShowServicesMenu] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Efecto de carga para la animación inicial
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const services = [
    { name: 'Ingeniería Sísmica', href: '#sismica' },
    { name: 'Geotecnia y Geociencias', href: '#geotecnia' },
    { name: 'Consultoría en Riesgos', href: '#riesgos' },
    { name: 'Modelación BIM', href: '#bim' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg'
          : 'py-5 bg-transparent'
      } ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://storage.googleapis.com/cluvi/Web-Risk/logo_RDC.png"
              alt="R&DC Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
            />

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#inicio"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Nosotros
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesMenu(true)}
              onMouseLeave={() => setShowServicesMenu(false)}
            >
              <button
                className={`flex items-center hover:text-[#961A1D] transition-colors duration-300 ${
                  isScrolled ? 'text-[#2C3336]' : 'text-white'
                }`}
              >
                Servicios
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    showServicesMenu ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {showServicesMenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md shadow-xl rounded-md border border-gray-100 py-1 overflow-hidden">
                  <div className="h-0.5 bg-gradient-to-r from-[#961A1D] to-[#961A1D]/20 w-full"></div>
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-[#2C3336] hover:text-[#961A1D] hover:bg-gray-50 transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#proyectos"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Proyectos
            </a>
            <a
              href="#blog"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Blog
            </a>
          </nav>

          {/* Right Side: Language & CTA */}
          <div className="flex items-center space-x-4">

            {/* CTA Button */}
            <Button
              className={`hidden md:flex bg-[#961A1D] hover:bg-[#961A1D]/90 text-white px-5 py-2 text-sm font-medium rounded-none transition-all duration-300 ${
                isScrolled ? 'shadow-none' : 'shadow-lg shadow-[#961A1D]/20'
              }`}
            >
              Consulta Gratuita
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger className="lg:hidden flex items-center">
                <div
                  className={`p-2 rounded-full ${
                    isScrolled ? 'bg-gray-100' : 'bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  <Menu
                    className={`h-5 w-5 ${
                      isScrolled ? 'text-[#2C3336]' : 'text-white'
                    }`}
                  />
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white p-0 overflow-hidden">
                <div className="h-1 bg-[#961A1D] w-full"></div>
                <div className="p-6">
                  <div className="flex justify-center mb-8">
                    <img
                      src="https://storage.googleapis.com/cluvi/Web-Risk/logo_RDC.png"
                      alt="R&DC Logo"
                      className="h-12"
                    />
                  </div>

                  <div className="flex flex-col space-y-6">
                    <a href="#inicio" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Inicio
                    </a>
                    <a href="#nosotros" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Nosotros
                    </a>

                    <div className="space-y-3">
                      <div className="text-lg text-[#2C3336] font-medium">Servicios</div>
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          className="block pl-4 text-[#64748B] hover:text-[#961A1D] transition-colors"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>

                    <a href="#proyectos" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Proyectos
                    </a>
                    <a href="#blog" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Blog
                    </a>

                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-[#64748B]">Idioma</div>
                        <div className="flex items-center space-x-2">
                          <button className="px-2 py-1 bg-[#961A1D] text-white text-sm rounded">ES</button>
                          <button className="px-2 py-1 text-[#2C3336] text-sm">EN</button>
                        </div>
                      </div>

                      <Button className="bg-[#961A1D] hover:bg-[#961A1D]/90 text-white w-full py-6 rounded-none">
                        Consulta Gratuita
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
