import { useEffect, useRef } from "react";
import anime from "animejs";

const GRID_WIDTH = 14;
const GRID_HEIGHT = 10;

const DotGrid = () => {
  const animationRef = useRef<any>(null);
  const wavePositionRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActiveRef = useRef(true);

  const animateWave = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }

    animationRef.current = anime({
      targets: ".dot-point",
      scale: [
        { value: 1.45, easing: "easeOutSine", duration: 420 },
        { value: 1, easing: "easeInOutQuad", duration: 420 },
      ],
      translateY: [
        { value: -18, easing: "easeOutSine", duration: 420 },
        { value: 0, easing: "easeInOutQuad", duration: 420 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 420 },
        { value: 0.55, easing: "easeInOutQuad", duration: 420 },
      ],
      delay: anime.stagger(42, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: wavePositionRef.current,
      }),
      complete: () => {
        if (!isActiveRef.current) return;
        wavePositionRef.current = (wavePositionRef.current + 1) % (GRID_WIDTH * GRID_HEIGHT);
        timeoutRef.current = setTimeout(animateWave, 260);
      },
    });
  };

  useEffect(() => {
    isActiveRef.current = true;
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
    if (animationRef.current) {
      animationRef.current.pause();
    }

    const clickedIndex = parseInt(e.target.dataset.index);
    wavePositionRef.current = clickedIndex;

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.45, easing: "easeOutSine", duration: 340 },
        { value: 1, easing: "easeInOutQuad", duration: 620 },
      ],
      translateY: [
        { value: -18, easing: "easeOutSine", duration: 340 },
        { value: 0, easing: "easeInOutQuad", duration: 620 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 340 },
        { value: 0.55, easing: "easeInOutQuad", duration: 620 },
      ],
      delay: anime.stagger(90, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: clickedIndex,
      }),
      complete: () => {
        if (!isActiveRef.current) return;
        timeoutRef.current = setTimeout(() => {
          if (!isActiveRef.current) return;
          wavePositionRef.current = (clickedIndex + 1) % (GRID_WIDTH * GRID_HEIGHT);
          animateWave();
        }, 1100);
      },
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-3.5 transition-colors hover:bg-[#1E90FF]/30"
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
      className="absolute right-0 -bottom-24 z-0 grid max-w-[80%] scale-75 origin-bottom-right sm:-bottom-16 sm:max-w-[104%] sm:scale-90 md:-bottom-20 md:max-w-[96%] md:scale-100"
    >
      {dots}
    </div>
  );
};

export default DotGrid;
