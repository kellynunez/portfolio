import { useState } from "react";
import { Reveal } from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";
import { Stats } from "./Stats";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Sobre mí" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 gap-8 lg:gap-16 tracking-wide">
        <div className="space-y-4 pb-4 sm:pb-5 md:pb-8 col-span-2">
          
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
        
      </div>
      <div className="relative">
        <Stats />
      </div>
    </section>
  );
};