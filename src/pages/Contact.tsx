// src/pages/Contact.tsx
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-28 bg-gradient-to-br from-[#2C3336] to-[#1a1f20] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
               style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center mb-6">
                <div className="h-px w-12 bg-[#961A1D] mr-4"></div>
                <span className="text-sm uppercase tracking-wider text-white/80 font-medium">Hablemos</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
                <span className="text-[#961A1D]">Contacta</span> con Nosotros
              </h1>
              
              <p className="text-xl text-white/80 mb-8">
                Estamos listos para responder a tus consultas y ayudarte a encontrar 
                la solución que mejor se adapte a las necesidades de tu proyecto.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Colombia Office */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#961A1D]/10 rounded-full">
                  <MapPin className="h-8 w-8 text-[#961A1D]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3336] mb-3">Colombia</h3>
                <p className="text-gray-700 mb-6">
                  Carrera 11 #94-76, Oficina 503<br />
                  Medellín, Colombia
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#961A1D]" />
                    <a href="tel:+573183351733" className="hover:text-[#961A1D]">+57 (318) 335-1733</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#961A1D]" />
                    <a href="mailto:colombia@rdc.com.co" className="hover:text-[#961A1D]">colombia@rdc.com.co</a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-[#961A1D]" />
                    <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
              
              {/* Panama Office */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#1F4E5F]/10 rounded-full">
                  <MapPin className="h-8 w-8 text-[#1F4E5F]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3336] mb-3">Panamá</h3>
                <p className="text-gray-700 mb-6">
                  Calle 50, Costa del Este<br />
                  Ciudad de Panamá, Panamá
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#1F4E5F]" />
                    <a href="tel:+5072641234" className="hover:text-[#1F4E5F]">+507 264-1234</a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#1F4E5F]" />
                    <a href="mailto:panama@rdc.com.pa" className="hover:text-[#1F4E5F]">panama@rdc.com.pa</a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-[#1F4E5F]" />
                    <span>Lun - Vie: 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
              
              {/* General Contact */}
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="mb-6 flex items-center justify-center w-16 h-16 bg-[#2C3336]/10 rounded-full">
                  <Mail className="h-8 w-8 text-[#2C3336]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3336] mb-3">Consultas Generales</h3>
                <p className="text-gray-700 mb-6">
                  Para consultas generales, información sobre servicios o solicitudes 
                  de propuestas, contáctanos a través de:
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 text-[#2C3336]" />
                    <a href="mailto:info@rdc.com.co" className="hover:text-[#2C3336]">info@rdc.com.co</a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-[#2C3336]" />
                    <a href="tel:+573183351733" className="hover:text-[#2C3336]">+57 (318) 335-1733</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#2C3336] mb-4">
                  Envíanos un Mensaje
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y uno de nuestros especialistas se pondrá en 
                  contacto contigo en menos de 24 horas.
                </p>
              </div>
              
              <form className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="name" className="text-[#2C3336] mb-2 block">Nombre Completo *</Label>
                    <Input 
                      id="name" 
                      placeholder="Tu nombre" 
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-[#2C3336] mb-2 block">Correo Electrónico *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="tu@email.com" 
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-[#2C3336] mb-2 block">Teléfono</Label>
                    <Input 
                      id="phone" 
                      placeholder="+57 (XXX) XXX-XXXX" 
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-[#2C3336] mb-2 block">Empresa</Label>
                    <Input 
                      id="company" 
                      placeholder="Nombre de tu empresa" 
                      className="w-full"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="service" className="text-[#2C3336] mb-2 block">Servicio de Interés *</Label>
                    <Select required>
                      <SelectTrigger className="w-full">
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
                  
                  <div className="md:col-span-2">
                    <Label htmlFor="message" className="text-[#2C3336] mb-2 block">Mensaje *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe brevemente tu proyecto o consulta" 
                      className="w-full min-h-[150px]"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 mr-3"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    He leído y acepto la <a href="#" className="text-[#961A1D] hover:underline">Política de Privacidad</a> y 
                    autorizo el tratamiento de mis datos personales para recibir respuesta a mi solicitud.
                  </label>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#961A1D] hover:bg-[#961A1D]/90 text-white py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#2C3336] mb-4">
                  Preguntas Frecuentes
                </h2>
                <p className="text-gray-600">
                  Respuestas a las consultas más comunes sobre nuestros servicios
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "¿Cuál es el tiempo promedio de respuesta para una consultoría?",
                    answer: "Nos comprometemos a dar una respuesta inicial en un plazo máximo de 24 horas hábiles. Dependiendo de la complejidad del proyecto, la propuesta técnica y económica detallada puede tomar entre 3 a 5 días hábiles."
                  },
                  {
                    question: "¿Trabajan en proyectos fuera de Colombia y Panamá?",
                    answer: "Sí, aunque nuestras oficinas principales están en Colombia y Panamá, tenemos experiencia en proyectos internacionales en varios países de Latinoamérica. Contáctanos para evaluar tu proyecto específico y determinar la viabilidad de nuestra participación."
                  },
                  {
                    question: "¿Ofrecen servicios de consultoría para proyectos pequeños o solo trabajan en grandes obras?",
                    answer: "Trabajamos con proyectos de todos los tamaños. Desde pequeñas edificaciones residenciales hasta grandes infraestructuras. Adaptamos nuestros servicios a las necesidades específicas de cada cliente y proyecto, manteniendo siempre el mismo nivel de calidad y rigor técnico."
                  },
                  {
                    question: "¿Qué información debo tener lista para solicitar una cotización?",
                    answer: "Para una cotización preliminar, es útil contar con: ubicación del proyecto, tipo de estructura o servicio requerido, dimensiones aproximadas, planos preliminares (si están disponibles), y cualquier requisito especial o restricción del proyecto. No obstante, podemos ayudarte incluso si solo tienes una idea general."
                  },
                  {
                    question: "¿Cómo se manejan los acuerdos de confidencialidad para proyectos sensibles?",
                    answer: "Respetamos la confidencialidad de todos nuestros proyectos. Para proyectos con requerimientos especiales de confidencialidad, firmamos acuerdos específicos (NDA) adaptados a las necesidades del cliente antes de iniciar cualquier trabajo o intercambio de información sensible."
                  }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-[#2C3336] mb-3 flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#961A1D] mr-3 flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 ml-8">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <p className="text-gray-600 mb-4">
                  ¿No encuentras respuesta a tu pregunta?
                </p>
                <Button className="bg-[#2C3336] hover:bg-[#2C3336]/90 text-white">
                  Contáctanos directamente
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.65300232266!2d-75.64543400123525!3d6.244218860435361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1714018918488!5m2!1ses!2sco" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de oficinas"
            className="filter grayscale"
          ></iframe>
          
          <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-[#2C3336] mb-2">
              R&DC Medellín
            </h3>
            <p className="text-gray-600 text-sm">
              Carrera 11 #94-76, Oficina 503<br />
              Medellín, Colombia
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;