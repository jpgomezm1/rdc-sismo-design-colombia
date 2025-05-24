import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#2C3336] text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Logo & Company Info */}
          <div>
            <img 
              src="https://storage.googleapis.com/cluvi/Web-Risk/logo_RDC.png" 
              alt="R&DC Logo" 
              className="h-12 mb-6 object-contain"
            />
            
            <p className="text-white/70 mb-6 max-w-md leading-relaxed text-sm">
              Consultora líder en ingeniería sísmica, geotecnia y evaluación de riesgos 
              naturales en Colombia y Panamá. 25 años protegiendo vidas y patrimonio 
              con soluciones innovadoras.
            </p>
            
            <div className="flex gap-3 mb-6">
              <div className="flex items-center text-white/70 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#961A1D] mr-1.5"></div>
                <span>Ingeniería Estructural</span>
              </div>
              <div className="flex items-center text-white/70 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#961A1D] mr-1.5"></div>
                <span>Geociencias</span>
              </div>
              <div className="flex items-center text-white/70 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#961A1D] mr-1.5"></div>
                <span>Computación</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#961A1D] flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#961A1D] flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#961A1D] flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contacto</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#961A1D] mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <div className="font-medium text-sm">Colombia</div>
                  <div className="text-white/70 text-xs">Carrera 11 #94-76, Oficina 503</div>
                  <div className="text-white/70 text-xs">Medellin, Colombia</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#961A1D] mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <div className="font-medium text-sm">Panamá</div>
                  <div className="text-white/70 text-xs">Calle 50, Costa del Este</div>
                  <div className="text-white/70 text-xs">Ciudad de Panamá, Panamá</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#961A1D] flex-shrink-0" />
                <a href="tel:+5716123456" className="text-white/70 hover:text-white transition-colors ml-3 text-sm">
                  +57 (318) 335-1733
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#961A1D] flex-shrink-0" />
                <a href="mailto:info@rdc.com.co" className="text-white/70 hover:text-white transition-colors ml-3 text-sm">
                  info@rdc.com.co
                </a>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Suscríbase a nuestro boletín</h3>
            
            <p className="text-white/70 mb-4 text-sm">
              Reciba actualizaciones sobre los últimos avances en ingeniería sísmica 
              y novedades de nuestra empresa.
            </p>
            
            <form className="space-y-3">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="su@email.com" 
                  className="flex-grow bg-white/10 border border-white/20 rounded-l-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-[#961A1D] transition-colors text-sm"
                />
                <button 
                  type="submit" 
                  className="bg-[#961A1D] hover:bg-[#961A1D]/90 text-white px-4 py-2 rounded-r-md transition-colors flex items-center justify-center"
                >
                  →
                </button>
              </div>
              
              <div className="flex items-start space-x-2">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-xs text-white/60">
                  Acepto recibir comunicaciones sobre productos, servicios y eventos de R&DC.
                </label>
              </div>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-xs mb-4 md:mb-0">
            © {currentYear} R&DC - Risk and Design Consulting. Todos los derechos reservados.
          </div>
          
          <div className="flex space-x-4 text-xs">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;