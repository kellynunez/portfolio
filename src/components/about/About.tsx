import { useState } from "react";
import { Reveal } from "../util/Reveal";
import { SectionHeader } from "../util/SectionHeader";
import { Stats } from "./Stats";
import { Stats2 } from "./Stats2";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

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
              oy Kelly Núñez, una profesional tech-creativa con más de 10 años de trayectoria liderando la intersección entre diseño y tecnología. Mi carrera se ha caracterizado por una constante búsqueda de la excelencia académica y el liderazgo de equipos para crear productos digitales con identidad propia. Implemento metodologías de vanguardia como el prototipado generativo con IA, lo que me permite explorar conceptos de marca e interfaces con una agilidad superior, optimizando los tiempos de iteración y validando soluciones de alto impacto con mayor precisión.
            </p>
          </Reveal>
          
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Mi enfoque técnico se centra en la construcción de sitios web nativos desde cero, garantizando un control total sobre el rendimiento y la escalabilidad. Domino el desarrollo frontend moderno con React, Next.js y Tailwind CSS, además de gestionar ecosistemas CMS y e-commerce de alto rendimiento. Utilizo TypeScript y entornos colaborativos en GitHub para asegurar que cada línea de código sea robusta, mantenible y esté alineada con los estándares de una arquitectura de software profesional y la implementación de sistemas de diseño escalables.
            </p>
          </Reveal>

          {/* Botón de Leer más */}
          {!showMore && (
            <button 
              onClick={() => setShowMore(true)}
              className="text-[#00FF85] font-medium hover:underline transition-all flex items-center gap-2"
            >
              Leer más ↓
            </button>
          )}

          {/* Tercer párrafo condicional */}
          {showMore && (
          <Reveal>
            {/* Envolvemos en un Fragment para que Reveal reciba un solo hijo */}
            <>
              <p className="leading-relaxed text-zinc-300">
                Como Principal Product Designer, mi labor es asegurar la coherencia absoluta entre el branding y la experiencia de usuario. Diseño sistemas visuales escalables que no solo cumplen objetivos estéticos, sino que están construidos para evolucionar técnicamente. Estoy buscando nuevos desafíos donde mi visión estratégica y mi dominio del código puedan impulsar productos digitales innovadores. Si buscas una colaboración donde la ejecución técnica y la sensibilidad creativa se encuentren, ¡hablemos!
              </p>
              <button 
                onClick={() => setShowMore(false)}
                className="text-zinc-500 text-sm hover:text-zinc-300 mt-4 transition-colors"
              >
                Ver menos ↑
              </button>
            </>
          </Reveal>
        )}
        </div>
        <Stats />
      </div>
      <div className="relative">
        <Stats2 />
      </div>
    </section>
  );
};