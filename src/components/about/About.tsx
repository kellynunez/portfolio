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
                S
              </span>
              oy Kelly Núñez, Design Engineer & Creative Lead con más de 10 años de trayectoria liderando la intersección entre diseño estratégico y desarrollo técnico. Mi enfoque combina la agilidad del prototipado moderno con una visión creativa sólida, permitiéndome transformar conceptos de marca en interfaces digitales de alto impacto. Mi trabajo se orienta a optimizar procesos de iteración y validación, asegurando que cada solución no solo sea estética, sino funcionalmente superior.
            </p>
          </Reveal>
          
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              En el ámbito técnico, me especializo en la arquitectura de sitios web nativos, priorizando el rendimiento, la escalabilidad y la mantenibilidad del código. Domino el desarrollo frontend mediante un stack moderno que incluye React, Next.js, Tailwind CSS y TypeScript, además de gestionar ecosistemas e-commerce complejos. Potencio mi flujo de trabajo integrando agentes de IA para el desarrollo y diseño, garantizando que cada componente desarrollado sea eficiente, modular y escalable.
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
                Mi rol principal es asegurar una coherencia absoluta entre el branding y la experiencia de usuario final. Diseño sistemas visuales construidos para evolucionar técnica y gráficamente, asegurando que la identidad de marca se traduzca con precisión al código. Estoy en búsqueda constante de desafíos donde mi visión estratégica y mi dominio técnico puedan impulsar productos innovadores; si buscas una colaboración que integre rigor técnico y sensibilidad creativa, ¡hablemos!.
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