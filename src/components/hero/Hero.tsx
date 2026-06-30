import Reveal from "../util/Reveal";
import DotGrid from "./DotGrid";
import NeuFollowButton from "../buttons/NeuFollowButton";
import TypewriterText from "../util/TypewriterText";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-28 pb-10 md:pb-0 relative">
      <div className="relative z-10">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl leading-tight pb-3">
              <TypewriterText 
                text="Hola, soy Kelly" 
                speed={150} 
                delay={500}
                className="text-zinc-100"
              />
              {<span className="text-[#F5F000]">🦄</span>}
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-100 md:my-4 md:text-4xl">
              <span 
                className="font-semibold"
                style={{
                  background: 'linear-gradient(90deg, #00FF85, #00FF85, #FF0099)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradient-shift 3s ease-in-out infinite'
                }}
              >
                Lead Product Designer & Web Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-3xl text-sm md:text-lg text-zinc-300 font-medium tracking-wide">
              Enfocada en la intersección de Diseño de Producto, Sistemas Escalables y Desarrollo Frontend. Experiencia en consistencia de marca con viabilidad técnica en producción.
            </p>
          </Reveal>
          <Reveal>
            <div className="pointer-events-auto mt-10">
              <NeuFollowButton
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView();
                }}
              >
                Contáctame
              </NeuFollowButton>
            </div>
          </Reveal>
        </div>
        <div className="hidden md:block motion-reduce:hidden">
          <DotGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
