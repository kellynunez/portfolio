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
            <p className="leading-relaxed text-zinc-200 text-lg">
              <b className="text-zinc-100">Líder Creativa Técnica Digital Multidisciplinaria</b>
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-200 text-normal ">
              Frontend Developer & Product Designer (UI/UX / Brand). Conecto el desarrollo técnico con el diseño de productos digitales de inicio a fin. Con más de 10 años de trayectoria global, lidero equipos de desarrolladores y creativos bajo metodologías ágiles para crear sistemas  escalable en ecosistemas corporativos y e-commerce.
            </p>
          </Reveal>
          
          <Reveal>
            <p className="leading-relaxed text-zinc-200 text-normal ">
              Mi expertise técnico abarca el desarrollo de arquitecturas web modernas con React.js, Next.js, Vue.js, TypeScript, JavaScript y Jekyll. Implemento Design Systems mediante Tailwind y SCSS, integrando componentes accesibles y flujos avanzados en Figma (Tokens, Variables y Componentes) junto a la suite de Adobe (Ai, Ps, Pr). Domino Git/GitHub, la integración de APIs y optimizo flujos de desarrollo con agentes de IA como Cursor y Copilot, garantizando código limpio, escalable y optimizado para SEO y rendimiento web.
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