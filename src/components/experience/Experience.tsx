import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";

export const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Mostrar solo los primeros 3 elementos inicialmente
  const displayedExperience = showAll ? experience : experience.slice(0, 3);
  
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experiencia" dir="l" />
      
      {displayedExperience.map((item, index) => (
        <ExperienceItem 
          key={item.title} 
          {...item} 
          isLast={index === displayedExperience.length - 1} 
        />
      ))}
      
      {experience.length > 3 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group text-sm tracking-wide px-4 py-3 text-zinc-400 font-normal"
          >
            <span className="border-b-0 border-b-transparent group-hover:border-b group-hover:border-b-white/50 pb-0.5">{showAll ? "Mostrar menos" : `Mostrar más`}</span>
            <FiArrowDown className={`inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </section>
  );
};

const experience = [
  {
    title: "Voltron Data",
    position: "Manager, Product Design & Front-End",
    topic: "Startup global de software e infraestructura de datos",
    time: "2021 - 2025",
    location: "Mountain View, CA",
    mode: "Remoto",
    description:
      "Rediseño y reconstrucción web con React, NodeJS y Tailwind, acelerando flujos con Cursor. Migración de la infraestructura de WordPress a Jekyll (Markdown) con Tailwind CSS. Lideré la creación de wireframes y prototipos UX/UI en Lucidchart y Figma (DevMode). Diseñé la identidad de marca de la startup tech y producción de piezas gráficas digital e impreso.",
    tech: ["React", "NextJS", "Netlify", "Markdown", "TailwindCSS", "Lottie", "GitHub", "Figma", "Cursor", "Illustrator", "Midjourney", "Notion"],
  },
  {
    title: "BlazingSQL",
    position: "Lead, Product Design & Front-End",
    time: "2015 - 2021",
    topic: "Startup de software y ciencia de datos",
    location: "USA / Perú",
    mode: "Híbrido",
    description:
      "Diseñé prototipos UX/UI en Figma y desarrollé websites y webapps interactivas desde cero. Implementé interfaces utilizando frameworks y librerías como Vue.js, Vuetify y Tailwind. Desarrollé el manual de marca y lideré el rediseño de la identidad corporativa. Diseñé presentaciones ejecutivas y realicé edición de video para diversos canales.",
    tech: ["Vue", "Jekyll", "NodeJS", "Netlify", "JavaScript", "Sass", "GitHub", "Figma", "Illustrator", "Photoshop", "Premiere", "ClickUp", "Airtable"],
  },
  {
    title: "Simply Technology",
    position: "Diseñadora UX/UI y Desarrolladora Web",
    time: "2015",
    topic: "Consultora tecnológica",
    location: "USA / Perú",
    mode: "Híbrido",
    description:
      "Desarrollé prototipos web y apps UX/UI responsive en Adobe XD, construí sitios web con HTML, CSS y JavaScript y elaboré la identidad visual corporativa y manejo de redes sociales.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Adobe XD", "Illustrator", "Photoshop", "Microsoft Office"],
  },
  {
    title: "Outofthebox",
    position: "Diseñadora Gráfica Publicitaria",
    time: "2012-2014",
    topic: "Agencia de publicidad",
    location: "Lima, Perú",
    mode: "Presencial",
    description:
      "Encargada del diseño de banners retail a escala real, gráficos para redes y retoque fotográfico, participando en la creación y edición de catálogos de belleza y moda para marcas como Ésika, Viale, Claudia Jimenez y Platanitos.",
    tech: ["Illustrator", "Photoshop", "Camera Raw", "InDesign", "Microsoft Office"],
  },
  {
    title: "Cargraft",
    position: "Diseñadora Gráfica Jr.",
    time: "2011",
    topic: "Imprenta digital",
    location: "Lima, Perú",
    mode: "Presencial",
    description:
      "Diseñé identidades visuales y materiales gráficos (logotipos, empaques, papelería, merchandising) en Corel Draw y Photoshop, incluyendo preparación para impresión y digital con ajuste de color y gestión de perfiles ICC.",
    tech: ["CorelDraw", "Photoshop", "Acrobat", "Microsoft Word"],
  },
  {
    title: "Freelance",
    position: "Diseñadora UI/UX y Gráfica + Desarrolladora Front-End",
    time: "2010 - Actualidad",
    topic: "Servicios profesionales",
    location: "Global",
    mode: "Remoto",
    description:
      "Diseño prototipos interactivos y desarrollo sitios web responsivos con enfoque en UX/UI. También diseñé piezas gráficas y con identidad visual corporativa, documentando todos los activos gráficos para su uso coherente en productos y comunicaciones.",
    tech: ["React", "Framer Motion", "GitHub", "Netlify", "Cursor", "Copilot", "TailwindCSS", "Figma", "Adobe Creative Cloud", "Powerpoint"],
  },
/*   {
    title: "My Little World",
    position: "Auxiliar de Inicial",
    time: "2013",
    location: "Lima, Perú",
    mode: "Presencial",
    description:
      "Realicé manualidades, decoraciones festivas, inventarios de útiles y revisión de tareas a los alumnos.",
    tech: ["Photoshop", "Microsoft Office"],
  }, */
];
