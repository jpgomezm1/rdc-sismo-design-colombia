import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Mountain, Cpu, ChevronRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Ingeniería Estructural',
    subtitle: 'Precisión técnica para decisiones inteligentes',
    description:
      'Combinamos simulación avanzada, experiencia en métodos prescriptivos y diseño por desempeño a través de tecnología propia para entregar soluciones estructurales adaptadas a las condiciones sísmicas y presupuestales de cada proyecto.',
    features: [
      {
        title: 'Diseño Sismorresistente',
        description:
          'Diseñamos estructuras en concreto reforzado no solamente seguras si no que además alineadas con las metas financieras de su proyecto.',
      },
      {
        title: 'Predimensionamiento con cantidades exactas',
        description:
          'Desde la etapa de prefactibilidad nos integramos con el equipo desarrollador para evaluar alternativas estructurales con datos precisos de consumo de material.',
      },
      {
        title: 'Ingeniería de Valor',
        description:
          'Generamos alternativas estructurales para proyectos existentes buscando mejores respuestas e impactos positivos para el proyecto.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop',
    stats: [
      { value: '11+', label: 'Años en el mercado' },
      { value: '60+', label: 'Edificios diseñados' },
      { value: '2', label: 'Países' },
    ],
    color: '#961A1D',
    bgGradient: 'from-[#961A1D]/5 to-[#961A1D]/0',
  },
  {
    icon: Mountain,
    title: 'Geociencias',
    subtitle: 'Decisiones estructurales inteligentes',
    description:
      'Integramos la caracterización del suelo al diseño estructural para evitar sobrecostos y tomar decisiones seguras desde la etapa de factibilidad.',
    features: [
      {
        title: 'Caracterización Geotécnica',
        description:
          'Evaluamos riesgos y contingencias presupuestales antes de comprar el lote, evitando sorpresas en cimentaciones y movimientos de tierra.',
      },
      {
        title: 'Caracterización sísmica local',
        description:
          'Utilizamos modelos de propagación de onda considerando la topografía para definir el espectro de diseño particular del sitio.',
      },
      {
        title: 'Estabilidad de Taludes',
        description:
          'En topografías agresivas, desarrollamos capacidades para producir soluciones geotécnicas seguras y económicamente viables.',
      },
    ],
    image:
      'https://storage.googleapis.com/cluvi/Web-Risk/geociencias.png',
    stats: [
      { value: '60+', label: 'Proyectos apoyados' },
      { value: '600K+', label: 'm² caracterizados' },
      { value: '100%', label: 'Decisiones seguras' },
    ],
    color: '#1F4E5F',
    bgGradient: 'from-[#1F4E5F]/5 to-[#1F4E5F]/0',
  },
  {
    icon: Cpu,
    title: 'Computación',
    subtitle: 'Transformando datos en decisiones de ingeniería',
    description:
      'Creamos y aplicamos tecnologia propia para responder preguntas que las herramientas tradicionales no logran resolver.',
    features: [
      {
        title: 'Modelado BIM Integrado',
        description:
          'Conectamos nuestros diseños estructurales con datos de obra, reforzamiento y consumos para decisiones rápidas y seguras.',
      },
      {
        title: 'Simulación Avanzada y Parametrización',
        description:
          'Implementamos modelos numéricos y herramientas propias para anticipar el comportamiento de sistemas complejos bajo múltiples escenarios.',
      },
      {
        title: 'Visualización y Explotación de Datos',
        description:
          'Convertimos resultados técnicos en visualizaciones simples y comparables, facilitando la toma de decisiones informadas.',
      },
    ],
    image:
      'https://storage.googleapis.com/cluvi/Web-Risk/computacion.png',
    stats: [
      { value: '100%', label: 'Proyectos con BIM' },
      { value: '50+', label: 'Opciones de refuerzo' },
      { value: '12+', label: 'Herramientas propias' },
    ],
    color: '#2C3336',
    bgGradient: 'from-[#2C3336]/5 to-[#2C3336]/0',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersección para animar la sección al entrar en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Rotación automática de pestañas
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredFeature === null) {
        setActiveService((prev) => (prev + 1) % services.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [hoveredFeature]);

  // Icono del servicio activo
  const ActiveIcon = services[activeService].icon;

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-white"
      style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f0f0f0\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}
    >
      {/* Fondos decorativos */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#961A1D]/5 rounded-full blur-3xl opacity-60 -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-[#1F4E5F]/5 rounded-full blur-3xl opacity-60 -z-10 animate-pulse-slow" />

      <div className="container mx-auto px-6">
        {/* Título y subtítulo */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-8 bg-[#961A1D] mr-3" />
              <span className="text-sm uppercase tracking-wider text-[#961A1D] font-medium">
                Servicios Especializados
              </span>
              <div className="h-px w-8 bg-[#961A1D] ml-3" />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-[#2C3336] leading-tight mb-6"
          >
            Expertise ingenieril para <br className="hidden md:block" />
            <span className="text-[#961A1D]">infraestructura segura</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Más de una década ayudando a desarrolladores a tomar mejores decisiones desde el diseño, con precisión técnica y respaldo normativo en Colombia y Panamá.
          </motion.p>
        </motion.div>

        {/* Pestañas de servicios */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 p-1.5 rounded-full">
            {services.map((svc, idx) => {
              const TabIcon = svc.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setHoveredFeature(null)}
                  className={`relative px-6 py-3 rounded-full transition-all duration-500 ${
                    activeService === idx
                      ? 'text-white shadow-lg'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  style={{ backgroundColor: activeService === idx ? svc.color : 'transparent' }}
                >
                  <div className="flex items-center">
                    <TabIcon className="h-5 w-5 mr-2" />
                    <span className="font-medium">{svc.title}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contenido activo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Imagen + stats */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${services[activeService].bgGradient} transform scale-105 -z-10`}
                />
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-black/10 z-10" />
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110"
                  />
                  <div
                    className="absolute left-0 bottom-0 h-1.5 z-20"
                    style={{
                      backgroundColor: services[activeService].color,
                      width: '30%',
                    }}
                  />
                  <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center">
                    <ActiveIcon
                      className="h-4 w-4 mr-2"
                      style={{ color: services[activeService].color }}
                    />
                    <span className="text-sm font-medium text-[#2C3336]">
                      {services[activeService].title}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {services[activeService].stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-lg shadow-sm text-center"
                      style={{
                        borderTop: `2px solid ${services[activeService].color}`,
                      }}
                    >
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ color: services[activeService].color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Descripción + features */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-montserrat font-bold text-[#2C3336] mb-3">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-gray-500 mb-6">
                    {services[activeService].subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {services[activeService].description}
                  </p>
                </div>

                <div className="space-y-6 mb-10">
                  {services[activeService].features.map((feat, i) => (
                    <div
                      key={i}
                      className={`p-6 rounded-xl transition-all duration-300 ${
                        hoveredFeature === i ? 'bg-white shadow-lg' : 'bg-gray-50 hover:bg-white hover:shadow-md'
                      }`}
                      onMouseEnter={() => setHoveredFeature(i)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle2
                            className="h-5 w-5 transition-colors duration-300"
                            style={{
                              color:
                                hoveredFeature === i
                                  ? services[activeService].color
                                  : '#94A3B8',
                            }}
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-[#2C3336] mb-2">
                            {feat.title}
                          </h4>
                          <p className="text-gray-600">{feat.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-start">
                  <a
                    href={`#${services[activeService].title
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                    className="group flex items-center space-x-2 px-6 py-3 bg-white border-2 rounded-full transition-all duration-300 hover:border-[#961A1D] hover:bg-[#961A1D] hover:text-white"
                    style={{ borderColor: services[activeService].color }}
                  >
                    <span className="font-medium">Explorar este servicio</span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;