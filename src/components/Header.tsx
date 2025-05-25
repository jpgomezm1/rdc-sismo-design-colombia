// src/components/Header.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showServicesMenu, setShowServicesMenu] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Añadir un manejador de clics global para cerrar el menú cuando se hace clic fuera
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setShowServicesMenu(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    // Efecto de carga para la animación inicial
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timer);
    };
  }, []);

  const services = [
    { name: 'Ingeniería Estructural', href: '/servicios/ingenieria-estructural' },
    { name: 'Geociencias', href: '/servicios/geociencias' },
    { name: 'Computación', href: '/servicios/computacion' }
  ];

  // Función para manejar clics en el botón de servicios
  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };

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
            <Link to="/">
              <img
                src="https://storage.googleapis.com/cluvi/Web-Risk/logo_RDC.png"
                alt="R&DC Logo"
                className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Nosotros
            </Link>

            {/* Services Dropdown - SOLUCIÓN MEJORADA */}
            <div
              ref={servicesRef}
              className="relative"
            >
              <button
                onClick={toggleServicesMenu}
                className={`flex items-center hover:text-[#961A1D] transition-colors duration-300 ${
                  isScrolled ? 'text-[#2C3336]' : 'text-white'
                } ${showServicesMenu ? 'text-[#961A1D]' : ''}`}
              >
                Servicios
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    showServicesMenu ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              {/* Dropdown Menu - Con visibilidad permanente mientras está abierto */}
              {showServicesMenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="h-1 bg-gradient-to-r from-[#961A1D] to-[#961A1D]/20 w-full"></div>
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-3 text-[#2C3336] hover:bg-gray-50 hover:text-[#961A1D] transition-colors duration-200 border-l-2 border-transparent hover:border-[#961A1D]"
                        onClick={() => setShowServicesMenu(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/proyectos"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Proyectos
            </Link>
            <Link
              to="/blog"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contacto"
              className={`hover:text-[#961A1D] transition-colors duration-300 ${
                isScrolled ? 'text-[#2C3336]' : 'text-white'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Right Side: Language & CTA */}
          <div className="flex items-center space-x-4">
            {/* CTA Button */}
            <Link to="/contacto">
              <Button
                className={`hidden md:flex bg-[#961A1D] hover:bg-[#961A1D]/90 text-white px-5 py-2 text-sm font-medium rounded-none transition-all duration-300 ${
                  isScrolled ? 'shadow-none' : 'shadow-lg shadow-[#961A1D]/20'
                }`}
              >
                Consulta Gratuita
              </Button>
            </Link>

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
                    <Link to="/">
                      <img
                        src="https://storage.googleapis.com/cluvi/Web-Risk/logo_RDC.png"
                        alt="R&DC Logo"
                        className="h-12"
                      />
                    </Link>
                  </div>

                  <div className="flex flex-col space-y-6">
                    <Link to="/" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Inicio
                    </Link>
                    <Link to="/nosotros" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Nosotros
                    </Link>

                    <div className="space-y-3">
                      <div className="text-lg text-[#2C3336] font-medium">Servicios</div>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block pl-4 text-[#64748B] hover:text-[#961A1D] transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>

                    <Link to="/proyectos" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Proyectos
                    </Link>
                    <Link to="/blog" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Blog
                    </Link>
                    <Link to="/contacto" className="text-lg text-[#2C3336] hover:text-[#961A1D] transition-colors">
                      Contacto
                    </Link>

                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-[#64748B]">Idioma</div>
                        <div className="flex items-center space-x-2">
                          <button className="px-2 py-1 bg-[#961A1D] text-white text-sm rounded">ES</button>
                          <button className="px-2 py-1 text-[#2C3336] text-sm">EN</button>
                        </div>
                      </div>

                      <Link to="/contacto">
                        <Button className="bg-[#961A1D] hover:bg-[#961A1D]/90 text-white w-full py-6 rounded-none">
                          Consulta Gratuita
                        </Button>
                      </Link>
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