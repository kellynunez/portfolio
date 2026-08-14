import React from "react";
import { Reveal } from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Sobre mí" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center tracking-wide">
        <div className="space-y-4 pb-0 md:pb-12">
          <Reveal>
            <p className="leading-relaxed text-zinc-200 text-normal">
              <b className="text-white text-xl">Líder de diseño, UX/UI y Front-End</b> con más de 10 años de experiencia creando soluciones en productos digitales de principio a fin en entornos tecnológicos para EE. UU. y LATAM. Lidero equipos creativos bajo metodologías ágiles impulsando la adopción de IA para maximizar la eficiencia en flujos de diseño y web.
            </p>
          </Reveal>
          
          <Reveal>
            <p className="leading-relaxed text-zinc-200 text-normal ">
              Ejecuto experiencias web de principio a fin, desde la UX/UI aplicando sistemas de diseño hasta el desarrollo de interfaces con stacks modernos y/o CMS. Organizo, planifico y desarrollo recursos gráficos corporativos. También diseño y realizo piezas gráficas creativas digitales e impresas.
            </p>
          </Reveal>
        </div>

        {/* Contenedor estático para las fotografías */}
        <div className="relative h-[320px] md:h-[380px] w-full overflow-hidden flex items-center justify-center bg-zinc-900/40 rounded-xl">
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
  return (
    <div className="absolute inset-0">
      <img
        src="/about/kelly-graduada.webp"
        alt="Foto 1 de Kelly Núñez en su Graduación de Comunicación y Publicidad"
        style={{
          top: "18%",
          left: "12%",
          transform: "rotate(6deg)",
        }}
        className="absolute bg-neutral-200 p-1 shadow-lg w-28 md:w-36 md:-mt-[50px] lg:mt-0 pointer-events-none transition-all duration-700 ease-out hover:scale-105"
      />
      <img
        src="/about/kelly-arequipa.webp"
        alt="Foto 2 de Kelly Núñez en Arequipa, Perú"
        style={{
          top: "30%",
          left: "38%",
          transform: "rotate(-8deg)",
        }}
        className="absolute bg-neutral-200 p-1 shadow-lg w-28 md:w-36 pointer-events-none transition-all duration-700 ease-out hover:scale-105"
      />
      <img
        src="/about/kelly-rafting.webp"
        alt="Foto 3 de Kelly Núñez haciendo rafting en el río Chili, Arequipa, Perú"
        style={{
          top: "15%",
          left: "54%",
          transform: "rotate(20deg)",
        }}
        className="absolute bg-neutral-200 p-1 shadow-lg w-36 md:w-44 pointer-events-none transition-all duration-700 ease-out hover:scale-105"
      />
    </div>
  );
};