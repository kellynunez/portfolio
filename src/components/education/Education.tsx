import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronDown,
  FiChevronRight,
  FiEye,
  FiEyeOff,
  FiAward,
  FiCalendar,
  FiGlobe,
  FiGitPullRequest,
} from "react-icons/fi";
import { GraduationCap, HandHelping, SquareTerminal, Languages, BookHeart, Computer, LayoutTemplate, PanelsTopLeft, GlobeLock, SquaresIntersect } from 'lucide-react';
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";

interface EducationCardProps {
  position: number;
  index: number;
  title: string;
  institution: string;
  degree: string;
  period: string;
  time: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  achievements?: string[];
  image?: string; // Propiedad añadida
  onOpenModal: (img: string) => void; // Ajustada para recibir la imagen
}

export const Education = () => {
  const [position, setPosition] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < education.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="section-wrapper" id="education">
      <div className="flex justify-between gap-4">
        <SectionHeader title="Education" dir="l" />
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Ver educación anterior"
            title="Ver educación anterior"
            className="h-fit bg-zinc-800 hover:bg-zinc-700 p-3 text-2xl text-zinc-300 transition-colors border border-zinc-700"
            onClick={shiftLeft}
            disabled={position === 0}
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Ver siguiente educación"
            title="Ver siguiente educación"
            className="h-fit bg-zinc-800 hover:bg-zinc-700 p-3 text-2xl text-zinc-300 transition-colors border border-zinc-700"
            onClick={shiftRight}
            disabled={position === education.length - 1}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden">
        {education.map((edu, index) => (
          <EducationCard 
            {...edu} 
            key={index} 
            position={position} 
            index={index} 
            onOpenModal={(img) => setSelectedImg(img)}
          />
        ))}
      </div>
      {/* Modal Creativo */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl cursor-default"
            >
              <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50">
                <span className="text-zinc-400 text-sm font-medium">Vista previa</span>
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-2 flex justify-center bg-zinc-950">
                <img 
                  src={selectedImg} 
                  alt="Certificado" 
                  className="max-h-[75vh] w-auto object-contain shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const EducationCard = ({ 
  position, 
  index, 
  title, 
  institution, 
  degree, 
  period, 
  time, 
  description, 
  Icon, 
  achievements, 
  image, 
  onOpenModal 
}: EducationCardProps) => { // Usamos la interface aquí
  
  const translateAmt = position >= index ? index * 100 : index * 100 - 100 * (index - position);

  const hasCertificate = Boolean(image);
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[300px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-zinc-800 text-white" : "bg-zinc-900 text-zinc-300 border border-zinc-700"
      }`}
    >
    
      <Icon className="absolute right-3 top-2 opacity-20 size-14 stroke-[0.5px]" />
    
      <Reveal>
        <div>
          <h3 className="mb-4 text-2xl font-bold text-[#00FF85]">{title}</h3>
          <p className="mb-4 text-lg font-semibold">{institution}</p>

          <button 
            onClick={() => hasCertificate && image ? onOpenModal(image) : null}
            disabled={!hasCertificate}
            className={`group mb-2 text-sm flex items-center transition-colors ${
              hasCertificate 
                ? "text-zinc-400 hover:text-[#00FF85] cursor-pointer" 
                : "text-zinc-600 cursor-not-allowed"
            }`}
          >          
            {hasCertificate ? (
              <>
                <FiEye className="text-blue-600 group-hover:text-[#00FF85] inline-block mr-2 transition-colors" />
                <span className="underline underline-offset-4 decoration-zinc-700 group-hover:decoration-[#00FF85]">
                  Ver {degree}
                </span>
              </>
            ) : (
              <>
                <FiEyeOff className="inline-block mr-2 text-zinc-600" />
                <span>{degree}</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 mb-4 text-sm text-zinc-400">
            <FiCalendar className="text-[#FF0099]" />
            <span>{period}</span> ({time})
          </div>
          <p className="mb-4 leading-relaxed">{description}</p>

          {achievements && achievements.length > 0 && (
            <div>
              <button
                type="button"
                onClick={() => setShowAchievements((pv) => !pv)}
                className="mb-2 flex items-center gap-2 text-sm font-base text-[#00FF85] hover:opacity-90 transition-opacity"
              >
                <span>{showAchievements ? "Ver menos" : "Ver logros"}</span>
                <FiChevronDown
                  className={`transition-transform duration-200 ${showAchievements ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {showAchievements && (
                <ul className="space-y-1">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm flex items-start gap-2">
                      <FiAward className="text-[#00FF85] mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </Reveal>
    </motion.div>
  );
};

const education = [
  {
    title: "Frontend & Backend",
    institution: "ISIL Educación Ejecutiva",
    degree: "Certificado en espera",
    period: "2026",
    time: "4 meses",
    Icon: GlobeLock,
    description:
        "Formación que abarca desde la arquitectura Frontend y lógica Backend (Python/JS), hasta la integración de ecosistemas E-commerce y protocolos de ciberseguridad.",
    achievements: [
        "Fortalecimiento de la integridad digital (Ethical Hacking)",
        "Gestión de plataformas E-commerce: Woocommerce y Shopify",
        "Proyecto frontend y backend integrados con bases de datos y APIs",
    ]
  },
  {
    title: "Prototipado UI Avanzado en Figma: Interactividad y Animación",
    institution: "Facultad de Arte y Diseño (PUCP)",
    degree: "Certificado",
    period: "2025",
    time: "21 horas",
    image: "/certs/pucp-prototipado.webp",
    Icon: SquaresIntersect,
    description:
        "Creación de prototipos con interactividad avanzada. Uso de variables, condicionales y componentes para diseñar flujos complejos y sistemas visuales inteligentes listos para desarrollo.",
    achievements: [
        "Arquitectura de Prototipos Inteligentes",
        "Sistematización y Escalabilidad Visual de alta complejidad"
    ]
  },
  {
    title: "Comunicación y Publicidad",
    institution: "Universidad San Ignasio de Loyola (USIL)",
    degree: "Licenciatura en trámite Sunedu",
    period: "2021 - 2025",
    time: "5 años",
    image: "/certs/usil-bachiller-comunicacion-publicidad.webp",
    Icon: GraduationCap,
    description:
        "Conocimientos técnicos en teorías de la comunicación, marketing, publicidad, investigación de mercados y gestión de marcas, desarrollando habilidades en redacción, diseño, y estrategias de comunicación digital y tradicional.",
    achievements: [
        "Tercio Superior según ranking académico de la universidad",
        "Mencion Honorífica en tesis de licenciatura = 19"
    ]
  },
  {
    title: "Human Centered Design",
    institution: "Pontificia Universidad Católica del Perú (PUCP)",
    degree: "Especialización",
    period: "2022",
    time: "108 horas",
    image: "/certs/pucp-human-centered-design.webp",
    Icon: HandHelping,
    description:
        "Materialización de prototipos interactivos de alta fidelidad en Figma (con implementación de componentes, flujos funcionales y organización de design systems",
    achievements: [
        "Prototipos navegables, incluyendo lógica condicional para botones y simulación de flujos de usuario complejos, optimizando la gestión de componentes y *assets* para la eficiencia del workflow",
        "Tercio Superior"
    ]
  },
  {
    title: "Desarrollo Frontend",
    institution: "Codecademy",
    degree: "Autodidacta",
    period: "2022",
    time: "80 horas",
    Icon: SquareTerminal,
    description:
        "Experto/a en el flujo de trabajo frontend completo, desde la construcción de sitios estáticos eficientes con Jekyll.js y la creación de interfaces interactivas con JavaScript y Tailwind CSS, hasta el despliegue continuo con Netlify y la colaboración con Git/GitHub.",
    achievements: [
        "Construcción y Despliegue de Sitios Web Estáticos Optimizado",
        "Desarrollo de Interfaces Interactivas y Gestión Colaborativa"
    ]
  },
  {
    title: "Inglés Comunicacional",
    institution: "Instituto Privateacher",
    degree: "Certificado",
    period: "2020 - 2022",
    time: "100 horas",
    image: "/certs/privateacher-ingles.webp",
    Icon: Languages,
    description:
        "Aprendizaje del idioma inglés de manera presencial priorizando el vocabulario y la pronunciación.",
    achievements: [
        "Buena pronunciación en el idioma",
        "Fluidez en la conversación"
    ]
  },
  {
    title: "Branding y Gestión de Marca",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2019 - 2020",
    time: "100 horas",
    image: "/certs/toulouse-branding.webp",
    Icon: BookHeart,
    description:
        "Me especialicé en la creación y gestión integral de marcas, abarcando desde la estrategia de branding y el diseño de identidad visual hasta el storytelling y el marketing digital.",
    achievements: [
        "Experto/a en diseño de marca y estilo visual distintivo",
        "Quinto Superior"
    ]
  },
  {
    title: "Desarrollo de Aplicaciones Web",
    institution: "Udemy",
    degree: "Autodidacta",
    period: "2018",
    time: "40 horas",
    Icon: FiGitPullRequest,
    description:
        "Adquirí experiencia práctica con frameworks front-end como Bootstrap, Materialize y Vue.js, y conocimientos esenciales en Node.js para el desarrollo back-end.",
    achievements: [
        "Personalización de estilos en las interfaces de usuario",
        "Experiencia web práctica"
    ]
  },
  {
    title: "Especialización en Diseño de Experiencia de Usuario",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2017",
    time: "100 horas",
    image: "/certs/toulouse-experiencia-usuario.webp",
    Icon: PanelsTopLeft,
    description:
        "Aprendí a traducir ideas en experiencias digitales intuitivas y atractivas, desde la investigación y conceptualización hasta el prototipado y la validación con usuarios reales.",
    achievements: [
        "Construir soluciones web y móviles en prototipos interactivos",
        "Quinto Superior"
    ]
  },
  {
    title: "Computación e Informática",
    institution: "Instituto Cibertec",
    degree: "4 ciclos",
    period: "2016 - 2017",
    time: "18 meses",
    Icon: Computer,
    description:
        "Dominio en programación (Java, algoritmia y estructuras de datos), desarrollo web (HTML5, CSS3, JavaScript), bases de datos (SQL Server) y modelado de procesos de negocio (BPMN).",
    achievements: [
        "Desarrollo web robusto e interactivo",
        "Tercio Superior"
    ]
  },
  {
    title: "Diseño Web Responsive",
    institution: "Codecademy",
    degree: "Certificado",
    period: "2016",
    time: "50 horas",
    image: "/certs/codecademy-html-css.webp",
    Icon: LayoutTemplate,
    description:
        "Aprendizaje autodidacta en HTML, CSS Intermedio, Media Queries y Javascript.",
    achievements: [
        "Buen manejo de html, css, javascript, bootstrap, etc.",
        "Personalización de estilos en las interfaces de usuario"
    ]
  },
  {
    title: "Inglés Básico, Intermedio y Avanzado",
    institution: "Británico",
    degree: "Superintensivo",
    period: "2014 - 2016",
    time: "2 años",
    Icon: FiGlobe,
    description:
      "Formación especializada en inglés básico, intermedio y avanzado. Aprendizaje de gramática, vocabulario y pronunciación.",
    achievements: [
      "Buena pronunciación y fluidez en el idioma",
      "Buen manejo de la gramática y vocabulario"
    ]
  },
  {
    title: "Diseño Gráfico Publicitario",
    institution: "Instituto Leo Design",
    degree: "Licenciatura Técnica",
    period: "2011 - 2014",
    time: "3 años",
    image: "/certs/leodesign-titulo-publicidad.webp",
    Icon: GraduationCap,
    description:
      "Formación especializada en diseño gráfico, identidad visual y comunicación visual. Aprendizaje de herramientas de software de diseño gráfico y dibujo técnico.",
    achievements: [
      "Proyectos destacados en identidad corporativa y liderazgo en proyectos",
      "Mención Honorífica - Quinto Superior"
    ]
  },
];