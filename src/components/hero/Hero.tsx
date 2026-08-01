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
            <h1 className="pointer-events-auto text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-zinc-100 leading-tight pb-3">
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
            <h2 className="pointer-events-auto my-1 sm:my-2 md:pb-5 text-3xl sm:text-3xl md:text-4xl xl:text-5xl text-zinc-100">
              <span 
                className="font-semibold"
                style={{
                  background: 'linear-gradient(90deg, #4B6E8E, #4B6E8E, #FF0099)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradient-shift 3s ease-in-out infinite'
                }}
              >
                Design Engineer & Creative Lead
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-3xl text-base md:text-lg lg:text-xl text-zinc-200 font-normal tracking-wide">
              Especialista Front-End y de sistemas de diseño UI/UX. 
              Integración de identidad de marca, comunicación y diseño publicitario.
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
        <div className="block motion-reduce:hidden opacity-50">
          <DotGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
