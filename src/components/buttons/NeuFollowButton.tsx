import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

interface NeuFollowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NeuFollowButton: React.FC<NeuFollowButtonProps> = ({ 
  children, 
  onClick,
  className = ""
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [text, setText] = useState(children as string);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;

    const xPct = offsetX / width;
    const yPct = 1 - offsetY / height;

    const newY = 8 + yPct * 8;
    const newX = 10 + xPct * 10;

    x.set(newX);
    y.set(-newY);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  const scramble = () => {
    const targetText = children as string;
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setText(children as string);
  };

  return (
    <div className={`h-20 w-92 max-w-92 bg-black ${className}`}>
      <motion.button
        ref={ref}
        style={{
          transform,
          animation: 'gradient-x 3s ease infinite'
        }}
        onMouseMove={handleMove}
        onMouseLeave={() => {
          handleReset();
          stopScramble();
        }}
        onMouseEnter={scramble}
        onMouseDown={handleReset}
        onClick={onClick}
        className="group flex min-h-[50px] h-full w-full items-center justify-between text-black 
         text-xl font-semibold 
         transition-all duration-300 bg-gradient-to-r from-[#FF0099] via-[#00FF85] to-[#FF0099] bg-[length:200%_100%] animate-gradient-x"
      >
        <div className="px-6 h-[80px] w-[165px] flex items-center bg-white font-jetbrains-mono">
          <Copy>{text}</Copy>
        </div>
        <div className="px-7 group-hover:pl-7 group-hover:pr-9 border-l border-black group-hover:bg-[#00FF85] border-r-0 group-hover:text-[#FFFFFF] h-[80px] flex items-center">
          <Arrow />
        </div>
        
      </motion.button>
    </div>
  );
};

const Copy: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
};

const Arrow = () => (
  <div className="pointer-events-none flex h-6 w-6 overflow-hidden text-2xl">
    <FiArrowDown className="shrink-0 -translate-x-full text-black transition-transform duration-300 group-hover:translate-x-0" />
    <FiArrowRight className="shrink-0 -translate-x-full text-black transition-transform duration-300 group-hover:translate-x-0" />
  </div>
);

export default NeuFollowButton; 