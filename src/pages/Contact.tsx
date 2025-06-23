// src/pages/Contact.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - con video o imagen dinámica */}
        <section className="relative h-[80vh] md:h-screen overflow-hidden bg-[#111111]">
          {/* Video/Imagen de fondo con overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 z-10"></div>
            <img 
              src="https://www.semana.com/resizer/v2/R2SYHPUKUFAP5FVF2BPF3BCARY.jpg?auth=78586db7ddc3d382f92436a1cbacc74335a37a8b9c238d69bdd3482822ac8186&smart=true&quality=75&width=1280&height=720" 
              alt="Contacto"
              className="absolute inset-0 w-full h-full object-cover scale-105"
              style={{
                filter: 'brightness(0.6) contrast(1.2)'
              }}
            />
            
            {/* Patrón de puntos sutiles */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay z-20" 
              style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}>
            </div>
          </div>

          {/* Grid decorativo */}
          <div className="absolute inset-0 z-10 grid grid-cols-6 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-full border-l border-white/5 relative">
                {i === 0 && (
                  <div className="absolute h-full w-px left-0 bg-gradient-to-b from-transparent via-[#961A1D]/50 to-transparent opacity-70"></div>
                )}
              </div>
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute top-0 left-0 right-0 h-px bg-white/5" 
                  style={{top: `${i * 12.5}%`}}></div>
            ))}
          </div>
          
          {/* Contenido principal del hero */}
          <div className="relative container mx-auto px-6 h-full z-30 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-px bg-[#961A1D] mb-6"
              />
              
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm uppercase tracking-widest text-white/80 font-medium block mb-4"
              >
                Hablemos
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight mb-6"
              >
                <span className="text-[#961A1D]">Contacta</span> <br className="hidden md:block" />
                con Nosotros
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-white/80 mb-8 max-w-2xl"
              >
                Estamos listos para responder a tus consultas y ayudarte a encontrar 
                la solución que mejor se adapte a las necesidades de tu proyecto.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Button 
                  className="bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <span className="relative z-10 flex items-center">
                    Agenda una consulta
                    <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                  </span>
                  <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Explorar</span>
            <div className="w-px h-12 bg-white/20">
              <motion.div 
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: 'easeInOut'
                }}
                className="w-full bg-gradient-to-b from-[#961A1D] to-transparent"
              />
            </div>
          </motion.div>
        </section>
        
        {/* Contact Information */}
        <section ref={sectionRef} className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-16 text-center">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                  <span className="px-4 text-sm uppercase tracking-wider text-gray-500 font-medium">Información de contacto</span>
                  <div className="h-px w-12 bg-[#961A1D]"></div>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6">
                  Nuestras <span className="text-[#961A1D]">oficinas</span>
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Contamos con presencia en Colombia y Panamá para atender 
                  tus necesidades de forma rápida y eficiente.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Colombia Office */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#961A1D]/10 rounded-full group-hover:bg-[#961A1D]/20 transition-colors duration-300">
                    <MapPin className="h-8 w-8 text-[#961A1D]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3336] mb-3">Colombia</h3>
                  <p className="text-gray-700 mb-6">
                    Carrera 11 #94-76, Oficina 503<br />
                    Medellín, Colombia
                  </p>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-[#961A1D]" />
                      <a href="tel:+573183351722" className="hover:text-[#961A1D] transition-colors duration-300">+57 (318) 335-1722</a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-[#961A1D]" />
                      <a href="mailto:colombia@rdc.com.co" className="hover:text-[#961A1D] transition-colors duration-300">colombia@rdc.com.co</a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-[#961A1D]" />
                      <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                
                {/* Panama Office */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#961A1D]/10 rounded-full group-hover:bg-[#961A1D]/20 transition-colors duration-300">
                    <MapPin className="h-8 w-8 text-[#961A1D]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3336] mb-3">Panamá</h3>
                  <p className="text-gray-700 mb-6">
                    Calle 50, Costa del Este<br />
                    Ciudad de Panamá, Panamá
                  </p>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-[#961A1D]" />
                      <a href="tel:+5072641234" className="hover:text-[#961A1D] transition-colors duration-300">+507 264-1234</a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-[#961A1D]" />
                      <a href="mailto:panama@rdc.com.pa" className="hover:text-[#961A1D] transition-colors duration-300">panama@rdc.com.pa</a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-[#961A1D]" />
                      <span>Lun - Vie: 8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
                
                {/* General Contact */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#961A1D]/10 rounded-full group-hover:bg-[#961A1D]/20 transition-colors duration-300">
                    <Mail className="h-8 w-8 text-[#961A1D]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C3336] mb-3">Consultas Generales</h3>
                  <p className="text-gray-700 mb-6">
                    Para consultas generales, información sobre servicios o solicitudes 
                    de propuestas, contáctanos a través de:
                  </p>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-3 text-[#961A1D]" />
                      <a href="mailto:info@rdc.com.co" className="hover:text-[#961A1D] transition-colors duration-300">info@rdc.com.co</a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-3 text-[#961A1D]" />
                      <a href="tel:+573183351722" className="hover:text-[#961A1D] transition-colors duration-300">+57 (318) 335-1722</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                    <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Escríbenos</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2C3336] mb-6">
                    Envíanos un <span className="text-[#961A1D]">mensaje</span>
                  </h2>
                  
                  <p className="text-gray-600 mb-8">
                    Completa el formulario y uno de nuestros especialistas se pondrá en 
                    contacto contigo en menos de 24 horas.
                  </p>
                  
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#961A1D]/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-[#961A1D]" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-[#2C3336]">Respuesta rápida</h3>
                        <p className="text-gray-600 text-sm">Te responderemos en menos de 24 horas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#961A1D]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-[#961A1D]" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-[#2C3336]">Presencia regional</h3>
                        <p className="text-gray-600 text-sm">Contamos con oficinas en Colombia y Panamá</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-96 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.65300232266!2d-75.64543400123525!3d6.244218860435361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1714018918488!5m2!1ses!2sco" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de oficinas"
                      className="filter grayscale contrast-125"
                    ></iframe>
                  </div>
                </div>
                
                <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-[#2C3336] mb-2 block font-medium">Nombre Completo *</Label>
                        <Input 
                          id="name" 
                          placeholder="Tu nombre" 
                          className="w-full border-gray-200 focus:border-[#961A1D] focus:ring-[#961A1D]/10 transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-[#2C3336] mb-2 block font-medium">Correo Electrónico *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="tu@email.com" 
                          className="w-full border-gray-200 focus:border-[#961A1D] focus:ring-[#961A1D]/10 transition-all duration-300"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-[#2C3336] mb-2 block font-medium">Teléfono</Label>
                        <Input 
                          id="phone" 
                          placeholder="+57 (XXX) XXX-XXXX" 
                          className="w-full border-gray-200 focus:border-[#961A1D] focus:ring-[#961A1D]/10 transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="company" className="text-[#2C3336] mb-2 block font-medium">Empresa</Label>
                        <Input 
                          id="company" 
                          placeholder="Nombre de tu empresa" 
                          className="w-full border-gray-200 focus:border-[#961A1D] focus:ring-[#961A1D]/10 transition-all duration-300"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="service" className="text-[#2C3336] mb-2 block font-medium">Servicio de Interés *</Label>
                      <Select required>
                        <SelectTrigger className="w-full border-gray-200 focus:border-[#961A1D] focus:ring-[#961A1D]/10 transition-all duration-300">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="estructural">Ingeniería Estructural</SelectItem>
                          <SelectItem value="geociencias">Geociencias</SelectItem>
                          <SelectItem value="computacion">Computación</SelectItem>
                          <SelectItem value="consultoria">Consultoría en Riesgos</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-[#2C3336] mb-2 block font-medium">Mensaje *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Describe brevemente tu proyecto o consulta" 
                        className="w-full min-h-[150px] border-gray-200 focus:border-[#961A1D] focus:ring-[#961A1D]/10 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="mt-1 mr-3"
                        required
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        He leído y acepto la <a href="#" className="text-[#961A1D] hover:underline">Política de Privacidad</a> y 
                        autorizo el tratamiento de mis datos personales.
                      </label>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-[#961A1D] hover:bg-[#961A1D] text-white px-8 py-6 text-base font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                        <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1">→</span>
                      </span>
                      <span className="absolute inset-0 w-0 bg-black/20 group-hover:w-full transition-all duration-300"></span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;