import Reveal from "../util/Reveal";
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
                Design Engineer: Branding, UI/UX & Frontend
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-3xl text-sm md:text-lg text-zinc-300 font-medium tracking-wide">
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
        <div
          aria-hidden="true"
          className="pointer-events-none hidden md:block absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-zinc-700/40 bg-[radial-gradient(circle_at_center,rgba(0,255,133,0.16),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(255,0,153,0.12),transparent_32%),radial-gradient(circle_at_30%_70%,rgba(30,144,255,0.12),transparent_30%)] blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
