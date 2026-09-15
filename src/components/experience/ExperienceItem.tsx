import React, { useState } from 'react';
import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";

interface Props {
  title: string;
  position: string;
  time: string;
  mode: string;
  topic: string;
  location: string;
  description: string | string[]; // <--- Acepta string o arreglo de strings
  tech: string[];
  isLast?: boolean;
}

const getFlagEmoji = (location: string): string => {
  const locationLower = location.toLowerCase();
  
  if (locationLower.includes('usa / perú') || locationLower.includes('usa / peru')) {
    return '🇺🇸 🇵🇪';
  }
  if (locationLower.includes('perú') || locationLower.includes('peru') || locationLower.includes('lima')) {
    return '🇵🇪';
  }
  if (locationLower.includes('usa') || locationLower.includes('austin') || locationLower.includes('mountain view')) {
    return '🇺🇸';
  }
  if (locationLower.includes('global')) {
    return '🌍';
  }
  
  return '📍';
};

export const ExperienceItem = ({
  title,
  position,
  mode,
  topic,
  time,
  location,
  description,
  tech,
  isLast = false,
}: Props) => {
  const flagEmoji = getFlagEmoji(location);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  
  return (
    <div className="relative pl-8 mb-8 group">
      {!isLast && (
        <div className="absolute left-[7px] top-3 bottom-[-32px] w-[2px] bg-zinc-700" />
      )}

      <button
        onClick={() => setIsSelected(!isSelected)}
        aria-label={`Seleccionar ${title}`}
        className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 transition-all focus:outline-none ${
          isSelected 
            ? 'bg-[#38FF96] border-[#38FF96] scale-110 shadow-[0_0_10px_rgba(255,0,153,0.5)]' 
            : 'bg-zinc-900 border-zinc-500 hover:border-[#38FF96]'
        }`}
      />

      <div className="border-b pb-6 border-zinc-700">
        <div className="flex items-center justify-between mb-2">
          <Reveal>
            <div className="flex items-center">
              <span className="font-bold text-xl">{title}</span> 
              <span className="text-zinc-400 ml-2 text-xl">
                {flagEmoji}
              </span>
            </div>
          </Reveal>
          <Reveal>
            <span className="font-mono text-xs font-normal text-zinc-400">{time}</span>
          </Reveal>
        </div>

        <div className="block md:flex items-center justify-between">
          <Reveal>
            <span className="text-[#7C5CFF] font-bold tracking-wide block">{position}</span>
            <span className="text-zinc-400 text-xs tracking-wide">[{topic}]</span>
          </Reveal>
          <Reveal>
            <span className="text-[#38FF96] text-xs font-semibold">{mode}</span>
          </Reveal>
        </div>

        <div className="mt-2 mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-xs font-base text-[#1E90FF] transition-opacity hover:opacity-90"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Ocultar' : 'Leer detalles'}</span>
            {isExpanded ? (
              <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>

          {isExpanded && (
            <Reveal>
              <div className="mt-3 text-sm text-zinc-400 tracking-wide leading-relaxed">
                {Array.isArray(description) ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {description.map((bullet, i) => (
                      <li key={i} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{description}</p>
                )}
              </div>
            </Reveal>
          )}
        </div>

        <Reveal>
          <div className="flex flex-wrap gap-2 text-zinc-400 font-mono">
            {tech.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};