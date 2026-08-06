import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import TypewriterText from "../util/TypewriterText";
import NeuFollowButton from "../buttons/NeuFollowButton";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="text-slate-100 overflow-hidden pt-32 pb-24 md:py-32 pb-6 md:pb-14 relative">
      <div className="relative z-10">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h2 className="pointer-events-auto mt-0 mb-8 sm:my-2 md:pb-5 text-3xl sm:text-4xl text-zinc-100">
              <span 
                className="font-semibold"
                style={{
                  background: 'linear-gradient(90deg, #7C5CFF, #7C5CFF, #38FF96)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradient-shift 3s ease-in-out infinite'
                }}
              >
                Hola, soy Kelly Núñez
              </span>
            </h2>
          </Reveal>

          <Reveal>
            <h1 className="md-0 md:-ml-1 text-5xl md:text-6xl lg:text-8xl font-black text-zinc-100 pb-5 md:pb-7">
              <TypewriterText
                text="Product "
                speed={150}
                delay={500}
                className="text-zinc-100 tracking-tight"
              />
              <span>
                <TypewriterText
                  text="Designer"
                  speed={150}
                  delay={1800}
                  className="text-zinc-100"
                />
              </span>
              <TypewriterText
                text=" & Front-End"
                speed={150}
                delay={2900}
                className="text-zinc-100"
              />
              <span className="ml-2 inline-block">🦄</span>
            </h1>
          </Reveal>
          
          <Reveal>
            <p className="font-mono leading-relaxed md:leading-relaxed max-w-3xl text-sm md:text-lg lg:text-xl text-zinc-400 font-medium tracking-wide">
              UX/UI ARCHITECTURE — DESIGN SYSTEMS — WEB PERFORMANCE
            </p>
          </Reveal>
{/*           <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-3xl md:text-lg lg:text-xl text-zinc-300 font-medium tracking-wide">
              Especialista en arquitecturas web modernas, sistemas de diseño UX/UI y rendimiento web. Integro la estrategia de marca, la comunicación y el diseño publicitario para construir productos digitales escalables, eficientes y creativos.
            </p>
          </Reveal> */}
              
          <Reveal>
            <div className="pointer-events-auto mt-10">
              <NeuFollowButton
                onClick={() => {
          const link = document.createElement("a");
          link.href = "/cv-kelly-nunez.pdf";
          link.download = "cv-kelly-nunez.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
                }}
              >     
                Descargar CV
              </NeuFollowButton>
            </div>
          </Reveal> 
        
        </div>
        <div className="block motion-reduce:hidden opacity-50">
          <DotGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
