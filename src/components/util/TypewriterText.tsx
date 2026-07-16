import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  preserveStyles?: boolean;
  onComplete?: () => void;
  showCursorAfterComplete?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 0,
  className = "",
  preserveStyles = false,
  onComplete,
  showCursorAfterComplete = false
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
        setIsStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setCurrentIndex(0);
      setIsStarted(true);
    }
  }, [delay]);

  useEffect(() => {
    if (isStarted && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (isStarted && currentIndex >= text.length && onComplete) {
      setIsComplete(true);
      onComplete();
    } else if (isStarted && currentIndex >= text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, isStarted, onComplete]);

  const shouldShowCursor = !isComplete || showCursorAfterComplete;

  if (preserveStyles) {
    return (
      <span className={className}>
        {displayText.split('').map((char, index) => (
          <span key={index} className={className}>
            {char}
          </span>
        ))}
        <span className="animate-pulse">|</span>
      </span>
    );
  }

  return (
    <span className={className}>
      {displayText}
      {shouldShowCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypewriterText;
