import Reveal from "../util/Reveal";
import NeuFollowButton from "../buttons/NeuFollowButton";
import DotGrid from "./DotGrid";
import TypewriterText from "../util/TypewriterText";

const Hero = () => {
  return (
    <section className="text-slate-100 overflow-hidden py-24 md:py-32 pb-6 md:pb-4 relative">
      <div className="relative z-10">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-zinc-100 leading-tight pb-3">
              <TypewriterText
                text="Hola, soy Kelly"
                speed={150}
                delay={500}
                className="text-zinc-100"
              />
              <span className="ml-2 inline-block text-[#F5F000]">🦄</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 md:my-4 text-2xl md:text-3xl lg:text-4xl text-zinc-100">
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
                Design Engineer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-3xl text-base md:text-lg text-zinc-300 font-medium tracking-wide">
              Especialista en arquitectura de interfaces. Integración de identidad de marca, diseño publicitario y sistemas UI/UX en arquitecturas frontend escalables.
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
        <div className="block motion-reduce:hidden">
          <DotGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
