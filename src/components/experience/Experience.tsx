import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { useState } from "react";

export const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Mostrar solo los primeros 3 elementos inicialmente
  const displayedExperience = showAll ? experience : experience.slice(0, 3);
  
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experiencia" dir="l" />
      {displayedExperience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
      
      {experience.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors duration-200 border border-zinc-700 hover:border-zinc-600"
          >
            {showAll ? "Mostrar menos" : `Mostrar ${experience.length - 3} más`}
          </button>
        </div>
      )}
    </section>
  );
};

const experience = [
  {
    title: "Voltron Data",
    position: "Manager, Design & Front-End",
    time: "2021 - 2025",
    location: "Mountain View, CA",
    mode: "Remoto",
    description:
      "Rediseño y reconstrucción web con React, NodeJS y Tailwind, acelerando flujos con Cursor. Migración de la infraestructura de WordPress a Jekyll (Markdown) con Tailwind CSS. Lideré la creación de wireframes y prototipos UX/UI en Lucidchart y Figma (DevMode). Diseñé la identidad de marca de la startup tech y producción de piezas gráficas digital e impreso.",
    tech: ["React",  "NextJS", "Netlify", "TailwindCSS", "Markdown",  "GitHub", "Figma", "Cursor", "Illustrator", "Midjourney", "Notion"],
  },
  {
    title: "BlazingSQL",
    position: "Lead, Design & Front-End",
    time: "2015 - 2021",
    location: "Austin, TX",
    mode: "Híbrido",
    description:
      "Diseñé prototipos UX/UI en Figma y desarrollé websites y webapps interactivas desde cero. Implementé interfaces utilizando frameworks y librerías como Vue.js, Vuetify y Tailwind. Desarrollé el manual de marca y lideré el rediseño de la identidad corporativa. Diseñé presentaciones ejecutivas y realicé edición de video para diversos canales.",
    tech: ["Vue", "Jekyll", "NodeJS", "JavaScript", "Sass", "GitHub", "Figma", "Illustrator", "Photoshop", "ClickUp"],
  },
  {
    title: "Simply Technology",
    position: "Diseñadora UX/UI y Desarrolladora Web",
    time: "2015",
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
    location: "Lima, Perú",
    mode: "Presencial",
    description:
      "Diseñé identidades visuales y materiales gráficos (logotipos, empaques, papelería, merchandising) en Corel Draw y Photoshop, incluyendo preparación para impresión y digital con ajuste de color y gestión de perfiles ICC.",
    tech: ["CorelDraw", "Photoshop", "Acrobat", "Microsoft Word"],
  },
  {
    title: "Freelance",
    position: "Diseñadora y Desarrolladora Web",
    time: "2010 - Actualidad",
    location: "Global",
    mode: "Remoto",
    description:
      "Diseño prototipos interactivos y desarrollo sitios web responsivos con enfoque en UX/UI. También realicé diseño grafico e identidad visual, documentando todos los activos gráficos para su uso coherente en productos y comunicaciones.",
    tech: ["React", "Framer Motion", "GitHub", "Cursor", "Figma", "Adobe CC", "Powerpoint"],
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
