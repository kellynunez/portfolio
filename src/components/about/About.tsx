import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { Reveal } from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";
import { Stats } from "./Stats";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Sobre mí" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 tracking-wide">
        <div className="space-y-4 pb-0 md:pb-12">
          <Reveal>
            <p className="leading-relaxed text-zinc-200 text-normal">
              <b className="text-white text-xl">Líder de diseño, UX/UI y Front-End</b> con más de 10 años de experiencia creando soluciones en productos digitales de principio a fin en entornos tecnológicos para EE. UU. (B2B) y LATAM. Lidero equipos creativos bajo metodologías ágiles impulsando la adopción de IA para maximizar la eficiencia en flujos de diseño y web.
            </p>
          </Reveal>
          
          <Reveal>
            <p className="leading-relaxed text-zinc-200 text-normal ">
              Ejecuto experiencias web de principio a fin, desde la UX/UI aplicando sistemas de diseño hasta el desarrollo de interfaces con stacks modernos y CMS. Organizo, planifico y desarrollo recursos gráficos corporativos. También diseño y realizo piezas gráficas creativas digitales e impresas.
            </p>
          </Reveal>
        </div>

        {/* Contenedor de las tarjetas arrastrables integrado en la columna 3 */}
        <div className="relative h-full min-h-[350px] w-full overflow-hidden flex items-center justify-center bg-zinc-900/40 rounded-xl">
          <Cards />
        </div>
      </div>
      <div className="relative mt-8 md:mt-0">
        <Stats />
      </div>
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/about/kelly-graduada.png"
        alt="Foto 1 de Kelly Núñez en su Graduación de Comunicación y Publicidad"

        rotate="6deg"
        top="10%"
        left="12%"
        className="w-28 md:w-36"
      />
      <Card
        containerRef={containerRef}
        src="/about/kelly-arequipa.png"
        alt="Foto 2 de Kelly Núñez en Arequipa, Perú"
        rotate="-8deg"
        top="25%"
        left="39%"
        className="w-28 md:w-36 mt-24 md:mt-0"
      />
      <Card
        containerRef={containerRef}
        src="/about/kelly-rafting.png"
        alt="Foto 3 de Kelly Núñez haciendo rafting en el río Chili, Arequipa, Perú"
        rotate="20deg"
        top="17%"
        left="55%"
        className="w-36 md:w-44 mt-10 md:mt-0"
      />
    </div>
  );
};

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card = ({ containerRef, src, alt, top, left, rotate, className }: CardProps) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      onTouchStart={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200 p-1 shadow-lg cursor-grab active:cursor-grabbing",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};