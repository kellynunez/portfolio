import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";
import { Stats2 } from "./Stats2";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4 pb-4 sm:pb-5 md:pb-8 col-span-2">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-[#00FF85] text-black py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! Soy Kelly Núñez, profesional tech-creativa enfocada en crear experiencias digitales con identidad, usabilidad y tecnología. 
              Cuento con una sólida trayectoria dirigiendo equipos de diseño y desarrollo en entornos de software, implementando metodologías ágiles con herramientas de productividad.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            Estoy especializada en la creación de interfaces escalables y modernas mediante Tailwind CSS y Sass. 
            Cuento con experiencia en React, Next.js y Vue, utilizando TypeScript y GitHub para garantizar código robusto, mantenible y colaborativo. 
            Desarrollo aplicaciones web interactivas de alto rendimiento que combinan estética, funcionalidad y SEO.            
 
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
            Además, diseño activos gráficos publicitarios y sistemas visuales alineados con el branding, asegurando coherencia entre identidad de marca y experiencia digital.
            Estoy buscando nuevas oportunidades donde pueda combinar mi amor por el diseño con mi amor por el código. 
            Si conoces un proyecto atractivo donde pueda aportar, ¡hablemos!
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-[#1E90FF]">
                <span>Mis redes</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
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
