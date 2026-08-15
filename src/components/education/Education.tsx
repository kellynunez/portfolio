import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronLeft,
  FiChevronDown,
  FiChevronRight,
  FiEye,
  FiEyeOff,
  FiAward,
  FiChevronUp,
  FiCalendar,
} from "react-icons/fi";
import {
  GraduationCap,
  HandHelping,
  SquareTerminal,
  Languages,
  BookHeart,
  Computer,
  LayoutTemplate,
  PanelsTopLeft,
  GlobeLock,
  SquaresIntersect,
} from "lucide-react";
import type { ComponentType } from "react";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { image } from "framer-motion/client";

interface EducationCardProps {
  title: string;
  institution: string;
  degree: string;
  period: string;
  time: string;
  description?: string;
  Icon: ComponentType<{ className?: string }>;
  achievements?: string[];
  image?: string;
  onOpenModal: (img: string) => void;
  showAllAchievements: boolean;
  onToggleAchievements: () => void;
}

export const Education = () => {
  const [position, setPosition] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false); // Estado global
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dragState = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });

  useEffect(() => {
    cardRefs.current[position]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }, [position]);

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

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement | null;

    if (target?.closest("button,a,input,textarea,select,label")) {
      return;
    }

    if (!carouselRef.current) {
      return;
    }

    dragState.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: carouselRef.current.scrollLeft,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active || dragState.current.pointerId !== event.pointerId || !carouselRef.current) {
      return;
    }

    const deltaX = event.clientX - dragState.current.startX;
    carouselRef.current.scrollLeft = dragState.current.startScrollLeft - deltaX;
  };

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active || dragState.current.pointerId !== event.pointerId) {
      return;
    }

    const threshold = 60;
    const deltaX = event.clientX - dragState.current.startX;

    if (deltaX > threshold) {
      shiftLeft();
    } else if (deltaX < -threshold) {
      shiftRight();
    }

    dragState.current.active = false;
    dragState.current.pointerId = -1;
    setIsDragging(false);
  };

  return (
    <section className="section-wrapper" id="education">
      <div className="flex justify-between gap-4">
        <SectionHeader title="Educación" dir="l" />
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Ver educación anterior"
            title="Ver educación anterior"
            className="h-fit bg-zinc-800 p-2 text-xl text-zinc-300 transition-colors hover:bg-zinc-800"
            onClick={shiftLeft}
            disabled={position === 0}
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Ver siguiente educación"
            title="Ver siguiente educación"
            className="h-fit bg-zinc-800 p-2 text-xl text-zinc-300 transition-colors hover:bg-zinc-800"
            onClick={shiftRight}
            disabled={position === education.length - 1}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
        <div
          ref={carouselRef}
          className={`overflow-x-auto scroll-smooth px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } select-none touch-pan-y md:px-8 lg:px-12`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={() => {
            dragState.current.active = false;
            dragState.current.pointerId = -1;
            setIsDragging(false);
          }}
        >
          <div className="flex gap-4 md:gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.title}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className="basis-[88vw] shrink-0 md:basis-[42vw] lg:basis-[30vw]"
              >
                <EducationCard
                  {...edu}
                  onOpenModal={(img) => setSelectedImg(img)}
                  showAllAchievements={showAllAchievements}
                  onToggleAchievements={() => setShowAllAchievements((prev) => !prev)}
                />
              </div>
            ))}
            <div aria-hidden="true" className="shrink-0 w-4 md:w-8 lg:w-12" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={() => setSelectedImg(null)}
  className="fixed inset-0 z-[2147483647] isolate flex items-center justify-center bg-black/40 p-3 md:p-4 backdrop-blur-md cursor-exit"
>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden cursor-default"
            >
              <div className="p-6">
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-0 md:top-4 left-1/2 -translate-x-1/2 pb-5 text-zinc-400 transition-colors hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
              <div className="flex justify-center p-2">
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
  title,
  institution,
  degree,
  period,
  time,
  Icon,
  achievements = [],
  image,
  onOpenModal,
  showAllAchievements,
  onToggleAchievements,
}: EducationCardProps) => {
  const hasCertificate = Boolean(image);
  const hasAchievements = Boolean(achievements && achievements.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0.95 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      className="relative flex h-full min-h-[250px] w-full flex-col justify-between overflow-hidden border border-zinc-700 bg-zinc-900 p-8 shadow-lg md:p-10 ml-7 md:ml-16"
    >
      <Icon className="absolute right-2 top-2 md:right-3 md:top-3 size-8 md:size-10 stroke-[0.5px] opacity-20" />

      <Reveal>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>{period}</span> ({time})
          </div>
          <h3 className="text-xl font-bold text-zinc-100">{title}</h3>
          <h4 className="text-normal tracking-wide leading-tight font-semibold text-[#7C5CFF] mt-1 mb-2">{institution}</h4>

          <button
            onClick={() => hasCertificate && image ? onOpenModal(image) : null}
            disabled={!hasCertificate}
            className={`group flex items-center text-sm font-normal transition-colors my-0 ${
              hasCertificate
                ? "cursor-pointer text-zinc-400 text-left hover:text-[#38FF96]"
                : "cursor-not-allowed text-zinc-600"
            }`}
          >
            {hasCertificate ? (
              <>
                <FiEye className="mr-2 inline-block text-[#38FF96] transition-colors group-hover:text-[#38FF96]" />
                <span className="text-zinc-400 group-hover:text-zinc-400 border-b border-b-transparent group-hover:border-b-[0.5px] group-hover:border-b-zinc-400 text-[#38FF96]">
                  Ver {degree}
                </span>
              </>
            ) : (
              <>
                <FiEyeOff className="mr-2 inline-block text-zinc-600" />
                <span>{degree}</span>
              </>
            )}
          </button>

          {hasAchievements && (
            <div className="mt-1">
              <button
                type="button"
                onClick={onToggleAchievements}
                className="group flex items-center text-sm font-normal transition-colors cursor-pointer text-left text-zinc-400 hover:text-[#38FF96]"
              >
                {showAllAchievements ? (
                  <>
                    <FiChevronUp className="mr-2 inline-block text-zinc-600 group-hover:text-[#38FF96]" />
                    <span className="text-zinc-400 group-hover:text-zinc-400 border-b border-b-transparent group-hover:border-b-[0.5px] group-hover:border-b-zinc-400 text-[#38FF96]">
                      Ocultar
                    </span>
                  </>
                ) : (
                  <>
                    <FiChevronDown className="mr-2 inline-block text-[#38FF96] transition-colors group-hover:text-[#38FF96]" />
                    <span className="text-zinc-400 group-hover:text-zinc-400 border-b border-transparent group-hover:border-b-[0.5px] group-hover:border-b-zinc-400 text-[#38FF96]">
                      Leer logros
                    </span>
                  </>
                )}
              </button>

              {showAllAchievements && (
                <ul className="space-y-1 mt-3">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400 tracking-wide">
                      <FiAward className="mt-1 flex-shrink-0 text-[#1E90FF]" />
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
    title: "Diseño y Desarrollo Web",
    institution: "Instituto San Ignacio de Loyola (ISIL) - Educación Ejecutiva",
    degree: "Certificado",
    period: "2026",
    time: "96 horas",
    image: "/certs/certificado-isil-diseno-web.webp",
    Icon: GlobeLock,
    achievements: [
        "Seguridad y Ethical Hacking.",
        "Arquitectura Frontend y lógica Backend (Python/JS).",
        "Integración de APIs y bases de datos.",
        "Gestión E-commerce con Wordpress (WooCommerce) y Shopify.",
    ]
  },
  {
    title: "Prototipado UI en Figma (Avanzado)",
    institution: "Pontificia Universidad Católica del Perú (PUCP)",
    degree: "Certificado",
    period: "2025",
    time: "21 horas",
    image: "/certs/pucp-prototipado.webp",
    Icon: SquaresIntersect,
    achievements: [
        "Interactividad avanzada con variables y condicionales.",
        "Diseño de flujos complejos y sistemas visuales.",
        "Escalabilidad y arquitectura de prototipos inteligentes."
    ]
  },
  {
    title: "Comunicación y Publicidad",
    institution: "Universidad San Ignacio de Loyola (USIL)",
    degree: "Licenciatura en trámite Sunedu",
    period: "2021 - 2025",
    time: "5 años",
    image: "/certs/usil-bachiller-comunicacion-publicidad.webp",
    Icon: GraduationCap,
    achievements: [
        "Estrategia en comunicación, marketing y branding.",
        "Tesis en sistemas de diseño (Mención Honorífica: 19).",
        "Pertenencia al Tercio Superior."
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
    achievements: [
        "Prototipos de alta fidelidad orientados al usuario.",
        "Implementación de flujos funcionales y design systems.",
        "Pertenencia al Tercio Superior."
    ]
  },
  {
    title: "Desarrollo Frontend",
    institution: "Codecademy",
    degree: "Autodidacta",
    period: "2022",
    time: "80 horas",
    Icon: SquareTerminal,
    achievements: [
        "Interfaces interactivas con React y Tailwind CSS.",
        "Control de versiones con Git y GitHub.",
        "Despliegue continuo en Netlify."
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
    achievements: [
        "Expresión oral y vocabulario profesional.",
        "Fluidez en entornos de comunicación bilingüe.",
        "Buena pronunciación y naturalidad conversacional."
    ]
  },
  {
    title: "Branding y Gestión de Marca",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2020",
    time: "80 horas",
    image: "/certs/toulouse-branding.webp",
    Icon: BookHeart,
    achievements: [
        "Creación y gestión integral de identidad corporativa.",
        "Estrategias de branding, storytelling y marketing digital.",
        "Pertenencia al Quinto Superior."
    ]
  },
  {
    title: "Diseño de Experiencia de Usuario",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2017",
    time: "76 horas",
    image: "/certs/toulouse-experiencia-usuario.webp",
    Icon: PanelsTopLeft,
    achievements: [
        "Investigación, prototipado y validación de experiencias digitales.",
        "Diseño de soluciones intuitivas para web y móvil.",
        "Pertenencia al Quinto Superior."
    ]
  },
  {
    title: "Computación e Informática",
    institution: "Instituto Cibertec",
    degree: "4 ciclos",
    period: "2016 - 2017",
    time: "2 años",
    Icon: Computer,
    achievements: [
        "Programación orientada a objetos (Java) y estructuras de datos.",
        "Desarrollo web y gestión de bases de datos SQL Server.",
        "Pertenencia al Tercio Superior."
    ]
  },
  {
    title: "Desarrollo Web",
    institution: "Codecademy",
    degree: "Certificado",
    period: "2016",
    time: "40 horas",
    image: "/certs/codecademy-html-css.webp",
    Icon: LayoutTemplate,
    achievements: [
        "Fundamentos de HTML, CSS y JavaScript.",
        "Maquetación adaptativa mediante Media Queries.",
        "Personalización de estilos visuales."
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
    achievements: [
      "Identidad visual y comunicación gráfica publicitaria.",
      "Dominio de software de diseño y dibujo técnico.",
      "Mención Honorífica y Quinto Superior."
    ]
  },
];