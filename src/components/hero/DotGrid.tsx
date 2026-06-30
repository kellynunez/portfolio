import { useEffect, useRef } from "react";
import anime from "animejs";

const GRID_WIDTH = 12;
const GRID_HEIGHT = 8;

const DotGrid = () => {
  const animationRef = useRef<any>(null);
  const wavePositionRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActiveRef = useRef(true);

  const animateWave = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }

    // Crear una ola que se propaga desde la posición actual
    animationRef.current = anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 300 },
        { value: 1, easing: "easeInOutQuad", duration: 300 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 300 },
        { value: 0, easing: "easeInOutQuad", duration: 300 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 300 },
        { value: 0.5, easing: "easeInOutQuad", duration: 300 },
      ],
      delay: anime.stagger(50, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: wavePositionRef.current,
      }),
      complete: () => {
        if (!isActiveRef.current) return;
        // Mover la posición de la ola al siguiente punto
        wavePositionRef.current = (wavePositionRef.current + 1) % (GRID_WIDTH * GRID_HEIGHT);
        // Programar la siguiente ola
        timeoutRef.current = setTimeout(animateWave, 200);
      },
    });
  };

  useEffect(() => {
    isActiveRef.current = true;
    // Iniciar la ola continua
    animateWave();

    return () => {
      isActiveRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  const handleDotClick = (e: any) => {
    // Pausar la ola actual
    if (animationRef.current) {
      animationRef.current.pause();
    }

    // Animar desde el punto clickeado
    const clickedIndex = parseInt(e.target.dataset.index);
    wavePositionRef.current = clickedIndex;

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: clickedIndex,
      }),
      complete: () => {
        if (!isActiveRef.current) return;
        // Reanudar la ola continua después de la interacción
        timeoutRef.current = setTimeout(() => {
          if (!isActiveRef.current) return;
          wavePositionRef.current = (clickedIndex + 1) % (GRID_WIDTH * GRID_HEIGHT);
          animateWave();
        }, 1000);
      },
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-[#1E90FF]/30"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-400 opacity-50 group-hover:from-[#FF0099] group-hover:to-[#FF0099]"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="absolute right-0 top-[50%] z-0 grid max-w-[75%] -translate-y-[50%]"
    >
      {dots}
    </div>
  );
};

export default DotGrid;
