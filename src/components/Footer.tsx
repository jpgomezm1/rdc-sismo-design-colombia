
import React from 'react';
import { Building, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="h-8 w-8 text-primary-red" />
              <div className="text-2xl font-montserrat font-bold">R&DC</div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Consultora líder en ingeniería sísmica, geotecnia y evaluación de riesgos naturales en Colombia y Panamá. 
              25 años protegiendo vidas y patrimonio con soluciones innovadoras.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="text-gray-300 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-red mt-1" />
                <div>
                  <div className="font-semibold">Colombia</div>
                  <div className="text-gray-300 text-sm">Carrera 11 #94-76, Bogotá</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-red mt-1" />
                <div>
                  <div className="font-semibold">Panamá</div>
                  <div className="text-gray-300 text-sm">Calle 50, Costa del Este</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-red" />
                <a href="mailto:info@rdc.com.co" className="text-gray-300 hover:text-white transition-colors">
                  info@rdc.com.co
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-red" />
                <a href="tel:+5716123456" className="text-gray-300 hover:text-white transition-colors">
                  +57 (1) 612-3456
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 R&DC - Risk and Design Consulting. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
