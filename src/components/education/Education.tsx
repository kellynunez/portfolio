import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiPenTool,
  FiAward,
  FiCalendar,
  FiGlobe,
  FiGitPullRequest,
} from "react-icons/fi";
import { GraduationCap, HandHelping, SquareTerminal, Languages, BookHeart, Computer, LayoutTemplate, PanelsTopLeft, GlobeLock, SquaresIntersect } from 'lucide-react';
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
            className="h-fit bg-zinc-800 hover:bg-zinc-700 p-3 text-2xl text-zinc-300 transition-colors rounded-lg"
            onClick={shiftLeft}
            disabled={position === 0}
          >
            <FiChevronLeft />
          </button>
          <button
            className="h-fit bg-zinc-800 hover:bg-zinc-700 p-3 text-2xl text-zinc-300 transition-colors rounded-lg"
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
      <Icon className="absolute right-3 top-2 opacity-20 size-14 stroke-[0.5px]" />
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
    title: "Diseño y Desarrollo Web",
    institution: "ISIL Educación Ejecutiva",
    degree: "Diplomado",
    period: "2026",
    time: "4 meses",
    Icon: GlobeLock,
    description:
        "Formación que abarca desde la arquitectura Frontend y lógica Backend (Python/JS), hasta la gestión E-commerce (Shopify/WordPress) y Ciberseguridad.",
    achievements: [
        "Optimización del flujo de implementación Frontend",
        "Fortalecimiento de la integridad digital (Ethical Hacking)",
        "Gestión de plataformas E-commerce"
    ]
  },
  {
    title: "Prototipado UI Avanzado en Figma: Interactividad y Animación",
    institution: "Facultad de Arte y Diseño (PUCP)",
    degree: "Taller",
    period: "2025",
    time: "21 horas",
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
    degree: "Bachiller. Licenciatura en progreso.",
    period: "2021 - 2025",
    time: "5 años",
    Icon: GraduationCap,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Tercio Superior"
    ]
  },
  {
    title: "Human Centered Design",
    institution: "Pontificia Universidad Católica del Perú (PUCP)",
    degree: "Especialización",
    period: "2022",
    time: "108 horas",
    Icon: HandHelping,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Tercio Superior"
    ]
  },
  {
    title: "Desarrollo Frontend",
    institution: "Codecademy",
    degree: "Certificados",
    period: "2021",
    time: "80 horas",
    Icon: SquareTerminal,
    description:
        "Aprendizaje autodidacta en JavaScript, Tailwind CSS, Jekyll.js, Netlify, Git and Github.",
    achievements: [
        "Lorem ipsum...",
        "Lorem ipsum..."
    ]
  },
  {
    title: "Inglés Comunicacional",
    institution: "Instituto Privateacher",
    degree: "Especialización",
    period: "2019 - 2020",
    time: "100 horas",
    Icon: Languages,
    description:
        "Aprendizaje presencial 1:1 de vocabulario y pronunciación.",
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
    Icon: BookHeart,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Quinto Superior"
    ]
  },
  {
    title: "Desarrollo de Aplicaciones Web",
    institution: "Udemy",
    degree: "Certificación",
    period: "2018",
    time: "40 horas",
    Icon: FiGitPullRequest,
    description:
        "Aprendizaje autodidacta en Bootstrap, Materialize, Node.js y Vue.js.",
    achievements: [
        "Lorem ipsum...",
        "Lorem ipsum..."
    ]
  },
  {
    title: "Especialización en Diseño UI/UX",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2017",
    time: "100 horas",
    Icon: PanelsTopLeft,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Quinto Superior"
    ]
  },
  {
    title: "Computación e Informática",
    institution: "Instituto Cibertec",
    degree: "Diplomado",
    period: "2016 - 2017",
    time: "18 meses",
    Icon: Computer,
    description:
        "Lorem ipsum...",
    achievements: [
        "Lorem ipsum...",
        "Tercio Superior"
    ]
  },
  {
    title: "Diseño Web Responsive",
    institution: "Codecademy",
    degree: "Certificados",
    period: "2016",
    time: "50 horas",
    Icon: LayoutTemplate,
    description:
        "Aprendizaje autodidacta en HTML, CSS Intermedio, Media Queries y Javascript.",
    achievements: [
        "Buen manejo de html, css, javascript, bootstrap, etc.",
        "Personalización de estilos en las interfaces de usuario"
    ]
  },
  {
    title: "Inglés Básico, Medio y Avanzado",
    institution: "Británico",
    degree: "Certificación",
    period: "2015 - 2016",
    time: "1 año 7 meses",
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
    Icon: GraduationCap,
    description:
      "Formación especializada en diseño gráfico, identidad visual y comunicación visual. Aprendizaje de herramientas de software de diseño gráfico y dibujo técnico.",
    achievements: [
      "Proyectos destacados en identidad corporativa y liderazgo en proyectos",
      "Mención Honorífica - Quinto Superior"
    ]
  },
];