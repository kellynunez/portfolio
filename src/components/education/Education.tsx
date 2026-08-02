import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronLeft,
  FiChevronDown,
  FiChevronRight,
  FiEye,
  FiEyeOff,
  FiAward,
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

interface EducationCardProps {
  title: string;
  institution: string;
  degree: string;
  period: string;
  time: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
  achievements?: string[];
  image?: string;
  onOpenModal: (img: string) => void;
}

export const Education = () => {
  const [position, setPosition] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dragState = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
  });

  const currentEducation = education[position];

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
        <SectionHeader title="Education" dir="l" />
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Ver educación anterior"
            title="Ver educación anterior"
            className="h-fit border border-zinc-700 bg-zinc-800 p-3 text-2xl text-zinc-300 transition-colors hover:bg-zinc-700"
            onClick={shiftLeft}
            disabled={position === 0}
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Ver siguiente educación"
            title="Ver siguiente educación"
            className="h-fit border border-zinc-700 bg-zinc-800 p-3 text-2xl text-zinc-300 transition-colors hover:bg-zinc-700"
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
          className={`overflow-x-auto scroll-smooth pl-4 pr-0 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
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
                />
              </div>
            ))}
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
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl cursor-default"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 p-6">
                <span className="text-sm font-medium text-zinc-400">Vista previa</span>
                <button
                  onClick={() => setSelectedImg(null)}
                  className="p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="flex justify-center bg-zinc-950 p-2">
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
  description,
  Icon,
  achievements,
  image,
  onOpenModal,
}: EducationCardProps) => {
  const hasCertificate = Boolean(image);
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0.95 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.25 }}
      className="relative flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden border border-zinc-700 bg-zinc-900 p-8 shadow-lg md:p-10"
    >
      <Icon className="absolute right-3 top-2 size-14 stroke-[0.5px] opacity-20" />

      <Reveal>
        <div>
          <h3 className="mb-4 text-2xl font-bold text-[#4B6E8E]">{title}</h3>
          <button
            onClick={() => hasCertificate && image ? onOpenModal(image) : null}
            disabled={!hasCertificate}
            className={`group mb-2 flex items-center text-sm transition-colors ${
              hasCertificate
                ? "cursor-pointer text-zinc-400 hover:text-[#4B6E8E]"
                : "cursor-not-allowed text-zinc-600"
            }`}
          >
            {hasCertificate ? (
              <>
                <FiEye className="mr-2 inline-block text-blue-600 transition-colors group-hover:text-[#4B6E8E]" />
                <span className="underline underline-offset-4 decoration-zinc-700 group-hover:decoration-[#4B6E8E]">
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

          <div className="mb-4 flex items-center gap-2 text-sm text-zinc-400">
            <FiCalendar className="text-[#FF0099]" />
            <span>{period}</span> ({time})
          </div>
          <p className="mb-4 leading-relaxed">{description}</p>

          {achievements && achievements.length > 0 && (
            <div>
              <button
                type="button"
                onClick={() => setShowAchievements((pv) => !pv)}
                className="mb-2 flex items-center gap-2 text-sm font-base text-[#4B6E8E] transition-opacity hover:opacity-90"
              >
                <span>{showAchievements ? "Ver menos" : "Ver logros"}</span>
                <FiChevronDown
                  className={`transition-transform duration-200 ${showAchievements ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {showAchievements && (
                <ul className="space-y-1">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FiAward className="mt-1 flex-shrink-0 text-[#4B6E8E]" />
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
    time: "70 horas",
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
    title: "Prototipado UI Avanzado en Figma",
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
        "Manejo del flujo de trabajo frontend completo, desde la construcción de sitios estáticos eficientes con Jekyll.js y la creación de interfaces interactivas con JavaScript y Tailwind CSS, hasta el despliegue continuo con Netlify y la colaboración con Git/GitHub.",
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
        "Aprendizaje del idioma inglés presencial priorizando el vocabulario y la pronunciación.",
    achievements: [
        "Buena pronunciación en el idioma",
        "Fluidez en la conversación"
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
    description:
        "Me especialicé en la creación y gestión integral de marcas, abarcando desde la estrategia de branding y el diseño de identidad visual hasta el storytelling y el marketing digital.",
    achievements: [
        "Experto/a en diseño de marca y estilo visual distintivo",
        "Quinto Superior"
    ]
  },
  {
    title: "Especialización en Diseño de Experiencia de Usuario",
    institution: "Instituto Toulouse Lautrec",
    degree: "Especialización",
    period: "2017",
    time: "76 horas",
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
    time: "2 años",
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
    time: "40 horas",
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