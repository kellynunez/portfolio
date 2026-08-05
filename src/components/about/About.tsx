import { useState } from "react";
import { Reveal } from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";
import { Stats } from "./Stats";
import { Stats2 } from "./Stats2";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="Sobre mí" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 tracking-wide">
        <div className="space-y-4 pb-4 sm:pb-5 md:pb-8 col-span-2">
          <Reveal>
            <p className="leading-relaxed text-zinc-200 text-normal">
              <b className="text-white text-xl">Product Designer & Front-End Senior</b> con +10 años de experiencia en entornos tecnológicos para EE. UU. y LATAM. 
              Conecto la estrategia de marca, el diseño UX/UI y el desarrollo Front-End para construir productos digitales. 
              Lideré equipos creativos y DesignOps bajo metodologías ágiles y adopción de IA en flujos para ecosistemas corporativos y e-commerce.
            </p>
          </Reveal>
          
          <Reveal>
            <p className="leading-relaxed text-zinc-200 text-normal ">
              Mi expertise técnico abarca el desarrollo de arquitecturas web modernas con React.js, Next.js, TypeScript y Tailwind CSS, así como la configuración e integración de CMS avanzados. 
              Domino Git/GitHub, APIs y flujos mediante herramientas y agentes de IA (Cursor, Copilot), garantizando diseño/código limpio, con rendimiento y alineado a los objetivos de producto. 
              Asimismo, sistemas de diseño escalables y prototipado avanzado en Figma, integrando flujos centrados en el usuario, accesibilidad y creativas piezas gráficas publicitarias en entorno B2B.
            </p>
          </Reveal>

        </div>
        <Stats />
      </div>
      <div className="relative">
        <Stats2 />
      </div>
    </section>
  );
};