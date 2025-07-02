import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPenTool,
  FiMessageSquare,
  FiAward,
  FiCalendar,
  FiVolume2,
  FiMinimize2,
  FiCode,
  FiGlobe,
  FiTag,
  FiGitPullRequest,
  FiTable,
  FiHardDrive,
  FiGrid
} from "react-icons/fi";
import { SectionHeader } from "../util/SectionHeader";

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
}

export const Education = () => {
  const [position, setPosition] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const goToPosition = (newPosition: number) => {
    setPosition(newPosition);
  };

  return (
    <section className="section-wrapper" id="education">
      <div className="mb-8 flex justify-between gap-4">
        <SectionHeader title="Education" dir="l" />
        <div className="flex gap-2">
          <button
            className="h-fit bg-zinc-800 hover:bg-zinc-700 p-4 text-2xl text-zinc-300 transition-colors rounded-lg"
            onClick={shiftLeft}
            disabled={position === 0}
          >
            <FiChevronLeft />
          </button>
          <button
            className="h-fit bg-zinc-800 hover:bg-zinc-700 p-4 text-2xl text-zinc-300 transition-colors rounded-lg"
            onClick={shiftRight}
            disabled={position === education.length - 1}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="flex gap-4 overflow-hidden">
        {education.map((edu, index) => (
          <EducationCard {...edu} key={index} position={position} index={index} />
        ))}
      </div>
      
      {/* Numeración de navegación */}
      <div className="flex justify-center gap-2 mt-8 relative">
        {education.map((edu, index) => (
          <div
            key={index}
            onClick={() => goToPosition(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 text-sm font-medium relative ${
              position === index
                ? "bg-[#00FF85] text-black"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            {index + 1}
            
            {/* Tooltip personalizado */}
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full center-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-black text-white text-xs rounded-lg shadow-lg whitespace-nowrap z-20 min-w-max flex items-center justify-center"
                style={{ pointerEvents: 'none' }}
              >
                {edu.title}
                <div className="absolute bottom-full center1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-zinc-900"></div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const EducationCard = ({ position, index, title, institution, degree, period, time, description, Icon, achievements }: EducationCardProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[300px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 rounded-lg ${
        index % 2 ? "bg-zinc-800 text-white" : "bg-zinc-900 text-zinc-300 border border-zinc-700"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      <div>
        <h3 className="mb-4 text-2xl font-bold text-[#00FF85]">{title}</h3>
        <p className="mb-2 text-lg font-semibold">{institution}</p>
        <p className="mb-2 text-sm text-zinc-400">{degree}</p>
        <div className="flex items-center gap-2 mb-4 text-sm text-zinc-400">
          <FiCalendar className="text-[#FF0099]" />
          <span>{period}</span> ({time})
        </div>
        <p className="mb-4 leading-relaxed">{description}</p>
        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="mb-2 font-normal text-[#FF0099]">Logros destacados:</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <FiAward className="text-[#00FF85] mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const education = [
  {
    title: "Comunicación y Publicidad",
    institution: "Universidad San Ignasio de Loyola (USIL)",
    degree: "Bachiller",
    period: "2021 - 2024",
    time: "4 Años",
    Icon: FiVolume2,
    description:
        "Adquirí conocimientos técnicos en teoría de la comunicación, marketing, publicidad, investigación de mercados y gestión de marcas, desarrollando habilidades en redacción, diseño, y estrategias de comunicación digital y tradicional.",
    achievements: [
        "Desarrollé liderazgo de equipo y capacidad de decisión en proyectos del área.",
        "Tercio Superior"
    ]
  },
  {
    title: "Human Centered Design",
    institution: "Pontificia Universidad Católica del Perú (PUCP)",
    degree: "Especialización",
    period: "2022",
    time: "108 Horas",
    Icon: FiMinimize2,
    description:
        "Materialización de prototipos interactivos de alta fidelidad en Figma (con implementación de componentes, flujos funcionales y organización de *design systems",
    achievements: [
        "Prototipos navegables, incluyendo lógica condicional para botones y simulación de flujos de usuario complejos, optimizando la gestión de componentes y *assets* para la eficiencia del *workflow",
        "Tercio Superior"
    ]
  },
  {
    title: "Desarrollo Frontend",
    institution: "Codecademy",
    degree: "Certificación",
    period: "2021",
    time: "80 Horas",
    Icon: FiCode,
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
    degree: "Especialización",
    period: "2019 - 2020",
    time: "100 Horas",
    Icon: FiMessageSquare,
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
    time: "100 Horas",
    Icon: FiTag,
    description:
        "Me especialicé en la creación y gestión integral de marcas, abarcando desde la estrategia de branding y el diseño de identidad visual hasta el storytelling y el marketing digital.",
    achievements: [
        "Experto/a en Diseño de Marca y Estilo Visual Distintivo",
        "Quinto Superior"
    ]
  },
  {
    title: "Desarrollo de Aplicaciones Web",
    institution: "Udemy",
    degree: "Certificación",
    period: "2018",
    time: "40 Horas",
    Icon: FiGitPullRequest,
    description:
        "Adquirí experiencia práctica con frameworks front-end como Bootstrap, Materialize y Vue.js, y conocimientos esenciales en Node.js para el desarrollo back-end.",
    achievements: [
        "Personalización de estilos en las interfaces de usuario",
        "Experiencia práctica"
    ]
  },
  {
    title: "Especialización en Diseño UI/UX",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2017",
    time: "100 Horas",
    Icon: FiTable,
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
    degree: "Diplomado",
    period: "2016 - 2017",
    time: "18 Meses",
    Icon: FiHardDrive,
    description:
        "Dominio en programación (Java, algoritmia y estructuras de datos), desarrollo web (HTML5, CSS3, JavaScript), bases de datos (SQL Server) y modelado de procesos de negocio (BPMN).",
    achievements: [
        "Desarrollo Frontend Robusto e Interactivo",
        "Tercio Superior"
    ]
  },
  {
    title: "Diseño Web Responsive",
    institution: "Codecademy",
    degree: "Certificación",
    period: "2016",
    time: "50 Horas",
    Icon: FiGrid,
    description:
        "Aprendizaje autodidacta en HTML, CSS Intermedio, Media Queries y Javascript.",
    achievements: [
        "Sitios web responsivos y adaptables a diferentes dispositivos",
        "Personalización de estilos en las interfaces de usuario"
    ]
  },
  {
    title: "Inglés Básico, Medio y Avanzado",
    institution: "Británico",
    degree: "Certificación",
    period: "2015 - 2016",
    time: "1 Año 7 Meses",
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
    degree: "Titulado de Carrera Técnica",
    period: "2011 - 2014",
    time: "3 Años",
    Icon: FiPenTool,
    description:
      "Formación especializada en diseño gráfico, identidad visual y comunicación visual. Aprendizaje de herramientas de software de diseño gráfico y dibujo técnico.",
    achievements: [
      "Proyectos destacados en identidad corporativa y liderazgo en proyectos",
      "Mención Honorífica - Quinto Superior"
    ]
  },
];