import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Award, LineChart, GraduationCap, Timer, BarChart3, ShieldCheck, Globe } from 'lucide-react';

const CredentialsSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    experts: 0,
    projectsCO: 0,
    projectsPA: 0,
  });
  
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('experience');

  // Valores finales para los contadores (actualizados según PDF)
  const targets = {
    years: 11,
    experts: 30,
    projectsCO: 60,
    projectsPA: 10,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          
          if (!hasAnimated) {
            setHasAnimated(true);
            
            // Animate counters
            Object.keys(targets).forEach((key) => {
              const target = targets[key];
              let current = 0;
              const increment = target / 40; 
              
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                
                setCounters(prev => ({
                  ...prev,
                  [key]: Math.floor(current)
                }));
              }, 30);
            });
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [hasAnimated]);

  // Datos para las pestañas (actualizados)
  const tabData = {
    experience: {
      title: "Experiencia Comprobada",
      description: "Más de una década de excelencia en ingeniería sísmica y estructural nos posicionan como líderes en la región.",
      metrics: [
        { 
          icon: Timer, 
          value: counters.years, 
          suffix: "+", 
          label: "Años de operaciones",
          color: "#961A1D"
        },
        { 
          icon: Users, 
          value: counters.experts, 
          suffix: "+", 
          label: "Profesionales expertos",
          color: "#2C3336"
        },
        { 
          icon: Building, 
          value: counters.projectsCO, 
          suffix: "+", 
          label: "Proyectos en Colombia",
          color: "#1F4E5F"
        },
        { 
          icon: Globe, 
          value: counters.projectsPA, 
          suffix: "+", 
          label: "Proyectos en Panamá",
          color: "#961A1D"
        }
      ]
    },
    expertise: {
      title: "Expertise Técnico",
      description: "Nuestro equipo multidisciplinario combina conocimiento académico con experiencia práctica para resolver los desafíos más complejos.",
      metrics: [
        { 
          icon: GraduationCap, 
          value: "12", 
          suffix: "", 
          label: "PhD en Ingeniería",
          color: "#1F4E5F"
        },
        { 
          icon: Award, 
          value: "15+", 
          suffix: "", 
          label: "Premios Recibidos",
          color: "#961A1D"
        },
        { 
          icon: BarChart3, 
          value: "85+", 
          suffix: "", 
          label: "Publicaciones Técnicas",
          color: "#2C3336"
        },
        { 
          icon: ShieldCheck, 
          value: "100%", 
          suffix: "", 
          label: "Cumplimiento Normativo",
          color: "#1F4E5F"
        }
      ]
    }
  };

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
    <section 
      ref={sectionRef} 
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #2C3336, #202628)"
      }}
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}
        ></div>
      </div>
      
      {/* Líneas decorativas animadas */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#961A1D] via-[#961A1D]/50 to-transparent"></div>
      
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5"></div>
      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-8 bg-[#961A1D] mr-3"></div>
              <span className="text-sm uppercase tracking-wider text-white/80 font-medium">Trayectoria & Reconocimiento</span>
              <div className="h-px w-8 bg-[#961A1D] ml-3"></div>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight mb-6"
          >
            Una <span className="text-[#961A1D]">historia</span> de excelencia <br className="hidden md:block" /> 
            en ingeniería
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-white/70"
          >
            Nuestros resultados hablan por sí mismos. Conoce las cifras que respaldan nuestra trayectoria.
          </motion.p>
        </motion.div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex border border-white/10 rounded-full overflow-hidden p-1 bg-white/5 backdrop-blur-sm">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-white text-[#2C3336]' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span className="font-medium">
                  {tab === 'experience' ? 'Experiencia' : 'Expertise'}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Contenido de pestañas */}
        <div className="relative">
          {Object.keys(tabData).map((tab) => (
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeTab === tab ? 1 : 0,
                y: activeTab === tab ? 0 : 20,
                display: activeTab === tab ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
                  {tabData[tab].title}
                </h3>
                <p className="text-white/70">
                  {tabData[tab].description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {tabData[tab].metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 group-hover:bg-white/10">
                      {/* Decoración de fondo */}
                      <div 
                        className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                        style={{ backgroundColor: metric.color }}
                      ></div>
                      
                      <div className="text-center relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                          <metric.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-2 flex items-center justify-center">
                          <div className="relative overflow-hidden h-14">
                            <span className="inline-block">
                              {typeof metric.value === 'string' ? metric.value : metric.value}
                              <span>{metric.suffix}</span>
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-white/70 font-medium h-12 flex items-center justify-center">
                          {metric.label}
                        </div>
                      </div>
                      
                      {/* Línea decorativa superior */}
                      <div 
                        className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-1000 ease-out"
                        style={{ backgroundColor: metric.color }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Timeline / Banner */}
        <div className="mt-24 py-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#961A1D]/20 to-transparent opacity-20"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-4">
                Nuestra Historia
              </h3>
              <p className="text-white/70 max-w-xl">
                Desde 2014, hemos evolucionado de un estudio de ingeniería local a una firma de consultoría internacional, manteniendo siempre la excelencia técnica y la innovación como pilares fundamentales.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <div className="h-16 w-px bg-gradient-to-b from-[#961A1D] to-white/30"></div>
                <div className="p-4 rounded-full bg-[#961A1D] text-white font-bold">
                  2014
                </div>
                <div className="mt-2 text-white/70 text-sm">Fundación</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="h-16 w-px bg-gradient-to-b from-[#1F4E5F] to-white/30"></div>
                <div className="p-4 rounded-full bg-[#1F4E5F] text-white font-bold">
                  2019
                </div>
                <div className="mt-2 text-white/70 text-sm">Expansión</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="h-16 w-px bg-gradient-to-b from-[#961A1D] to-white/30"></div>
                <div className="p-4 rounded-full bg-[#961A1D] text-white font-bold">
                  2023
                </div>
                <div className="mt-2 text-white/70 text-sm">Innovación</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;