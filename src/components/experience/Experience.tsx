import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { useState } from "react";

export const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Mostrar solo los primeros 3 elementos inicialmente
  const displayedExperience = showAll ? experience : experience.slice(0, 3);
  
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {displayedExperience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
      
      {experience.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors duration-200 border border-zinc-700 hover:border-zinc-600"
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
    position: "Manager, Design & Web Development",
    time: "2021 - 2025",
    location: "Mountain View, CA",
    mode: "Remoto",
    description:
      "Lideré y rediseñé la identidad visual y el sistema de diseño digital, aplicando metodologías ágiles para asegurar entregas iterativas. Migré el sitio de WordPress a Jekyll y blog en Markdown, y luego reconstruí las más de 20 páginas en React.js a modo oscuro.",
    tech: ["React",  "NextJS", "Netlify", "TailwindCSS", "Markdown", "Figma", "GitHub", "Illustrator", "Midjourney", "Notion"],
  },
  {
    title: "BlazingSQL",
    position: "Lead, Design & Front-End",
    time: "2015 - 2021",
    location: "Austin, TX",
    mode: "Híbrido",
    description:
      "Desarrollé interfaces UI/UX y sitios web interactivos, trabajé en aplicaciones web con enfoque en usabilidad y rendimiento, lideré el rediseño de marca en múltiples canales y elaboré presentaciones corporativas consistentes desde el slide master.",
    tech: ["Vue", "Jekyll", "JavaScript", "Less", "Figma", "Illustrator", "Photoshop", "ClickUp"],
  },
  {
    title: "Simply Technology",
    position: "Diseñadora UI/UX Sr.",
    time: "2015",
    location: "Lima, Perú",
    mode: "Híbrido",
    description:
      "Desarrollé prototipos UI multiplataforma en Adobe XD, implementé un sitio web responsive con formulario de contacto automatizado y elaboré la identidad visual corporativa y manejo de redes sociales.",
    tech: ["HTML", "CSS", "JavaScript", "Adobe XD", "Illustrator", "Photoshop", "Microsoft Office"],
  },
  {
    title: "Outofthebox",
    position: "Diseñadora Gráfica Publicitaria",
    time: "2012-2014",
    location: "Lima, Perú",
    mode: "Presencial",
    description:
      "Encargada del diseño de banners retail a escala real, gráficos para redes y retoque fotográfico, participando además en la creación y edición de catálogos de belleza y moda para marcas como Ésika, Viale, Claudia Jimenez y Platanitos.",
    tech: ["Illustrator", "Photoshop", "InDesign", "Microsoft Office"],
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
      "Diseño prototipos interactivos y desarrollo sitios web responsivos con enfoque en UI/UX. También realicé diseño grafico e identidad visual, documentando todos los activos gráficos para su uso coherente en productos y comunicaciones.",
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
