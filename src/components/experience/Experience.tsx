import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { Reveal } from "../util/Reveal";

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
          <Reveal>
            <button
              onClick={() => setShowAll(!showAll)}
              className="group text-sm tracking-wide px-4 py-3 text-zinc-400 font-normal"
            >
              <span className="border-b-0 border-b-transparent group-hover:border-b group-hover:border-b-white/50 pb-0.5">{showAll ? "Mostrar menos" : `Mostrar más`}</span>
              <FiArrowDown className={`inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </Reveal>
        </div>
      )}
    </section>
  );
};

const experience = [
  {
    title: "Voltron Data",
    position: "Manager, Product Design & Frontend",
    topic: "Startup global de software e infraestructura de datos",
    time: "2021 - 2025",
    location: "Mountain View, CA",
    mode: "Remoto",
    description: [
      "Lideré el diseño UI/UX y la implementación frontend (React/TypeScript) para activos B2B como The Composable Codex, integrando herramientas de IA (Cursor, Copilot) para acelerar el ciclo de desarrollo e impulsando la captación de leads en un 22%.",
      "Orquesté la migración del sitio web de WordPress a Jekyll (estructura completa y 40+ artículos), reduciendo los tiempos de carga en un 46% y generando un ahorro operativo de $5K mensuales al internalizar el desarrollo y mantenimiento que gestionaba una agencia externa (Highseas).",
      "Lideré el ciclo de producto implementando un sistema de diseño integral en Figma, lo que aseguró la consistencia visual y aceleró los tiempos de desarrollo (handoff) en un 30%.",
      "Dirigí el rediseño del frontend bajo estándares WCAG, garantizando la accesibilidad global y mejorando las métricas de retención en la plataforma.",
      "Lideré el área de diseño y la estrategia de marca, supervisando la ejecución de activos digitales."
    ],
    tech: ["React", "NextJS", "Netlify", "Markdown", "TailwindCSS", "Lottie", "GitHub", "Figma", "Cursor", "Illustrator", "Midjourney", "Notion"],
  },
  {
    title: "BlazingSQL",
    position: "Lead, Product Design & Web Development",
    topic: "Startup de software y ciencia de datos",
    time: "2016 - 2021",
    location: "USA / Perú",
    mode: "Híbrido",
    description: [
      "Arquitecté aplicaciones web interactivas desde cero con Vue.js y TypeScript, entregando plataformas hasta 3x más rápidas y escalables mediante despliegues automatizados en Netlify.",
      "Dirigí la estrategia UX/UI para herramientas de ciencia de datos, reduciendo la fricción en flujos complejos y aumentando la adopción del producto en un 25%.",
      "Unifiqué la identidad corporativa creando un sistema de diseño escalable, disminuyendo las inconsistencias visuales y ahorrando horas de iteración entre diseño y código.",
      "Gestioné el área creativa y la dirección de arte, fortaleciendo el posicionamiento de marca en canales digitales. Diseñé banners, gráficos digitales e impresas para eventos internacionales."
    ],
    tech: ["Vue", "Jekyll", "NodeJS", "Netlify", "JavaScript", "Sass", "GitHub", "Figma", "Illustrator", "Photoshop", "Premiere", "ClickUp", "Airtable"],
  },
  {
    title: "Simply Technology",
    position: "Diseñadora Senior, UX/UI y Web",
    topic: "Consultora tecnológica",
    time: "2015",
    location: "USA / Perú",
    mode: "Híbrido",
    description: [
      "Desarrollé el sitio web corporativo responsivo desde cero (HTML/CSS y JS), optimizando el diseño responsive y fortaleciendo la presencia digital B2B de la consultora.",
      "Lideré el diseño de interfaces (UI/UX) mediante wireframes y prototipos en Adobe XD, acelerando la validación de requerimientos y reduciendo los tiempos en el ciclo de desarrollo.",
      "Diseñé la identidad visual corporativa y el ecosistema de activos de marketing, consolidando una imagen de marca cohesiva que potenció el posicionamiento en canales digitales."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Adobe XD", "Illustrator", "Photoshop", "Microsoft Office"],
  },
  {
    title: "Freelance",
    position: "Diseño UI/UX y Desarrollo Web",
    topic: "Houzen Inmobiliaria, Spacedat, Overall Livetrade, Socios en Salud (Miwawa)",
    time: "2016 - 2026",
    location: "Global",
    mode: "Remoto",
    description: [
      "Lideré la estrategia UX/UI para plataformas B2B/B2C en sectores de tecnología, inmobiliario y salud (Miwawa), desde la investigación con usuarios y wireframing hasta prototipos interactivos en Figma.",
      "Arquitecté UI Kits y sistemas de diseño escalables garantizando la consistencia visual omnicanal y optimizando la entrega técnica en la documentación.",
      "Diseñé e implementé interfaces web responsivas y accesibles en React, TypeScript y Tailwind CSS, convirtiendo flujos complejos en experiencias de usuario intuitivas y de alto rendimiento."
    ],
    tech: ["React", "Framer Motion", "GitHub", "Netlify", "Cursor", "Copilot", "TailwindCSS", "Figma", "Adobe Creative Cloud", "Powerpoint"],
  },
  {
    title: "Outofthebox.pe",
    position: "Diseñadora Publicitaria",
    topic: "Agencia Publicitaria",
    time: "2012 - 2014",
    location: "Lima, Perú",
    mode: "Presencial",
    description: [
      "Diseñé banners y recursos gráficos para campañas digitales e impresas con retoque fotográfico.",
      "Organicé, diseñé y edité catálogos para marcas como Ésika, Viale, Claudia Jimenez, Platanitos."
    ],
    tech: ["Illustrator", "Photoshop", "Camera Raw", "InDesign", "Microsoft Office"],
  },
];