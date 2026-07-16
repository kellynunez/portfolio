import { motion } from "framer-motion";

const WORDS = ["Branding", "🖌️", "UI/UX", "📐", "Frontend", "🌐"];

const RibbonWords = () => {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 -mt-8 mb-2 overflow-hidden py-2">
      <div className="flex translate-y-1/2 rotate-3 scale-110 overflow-hidden border-y-2 border-zinc-700 bg-zinc-100">
        <TranslateWrapper>
          <WordItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <WordItems />
        </TranslateWrapper>
      </div>

      <div className="flex -translate-y-1/2 -rotate-2 scale-110 overflow-hidden border-y-2 border-zinc-700 bg-zinc-100">
        <TranslateWrapper reverse>
          <WordItems />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <WordItems />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse = false,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ x: reverse ? "-100%" : "0%" }}
      animate={{ x: reverse ? "0%" : "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex shrink-0"
    >
      {children}
    </motion.div>
  );
};

const WordItems = () => (
  <div className="flex items-center">
    {Array.from({ length: 6 }).map((_, rowIndex) =>
      WORDS.map((word, wordIndex) => (
        <span
          key={`${rowIndex}-${wordIndex}-${word}`}
          className="px-5 py-5 text-lg font-extrabold tracking-wide text-black md:px-8 md:py-6"
        >
          {word}
        </span>
      ))
    )}
  </div>
);

export default RibbonWords;
