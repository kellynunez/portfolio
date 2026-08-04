import React, { useState } from 'react';
import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";

interface Props {
  title: string;
  position: string;
  time: string;
  mode: string;
  location: string;
  description: string;
  tech: string[];
}

// Función para obtener el emoji de la bandera basado en la ubicación
const getFlagEmoji = (location: string): string => {
  const locationLower = location.toLowerCase();
  
  // 1. Evaluar primero la combinación de ambos países
  if (locationLower.includes('usa / perú') || locationLower.includes('usa / peru')) {
    return '🇺🇸 🇵🇪';
  }
  
  // 2. Luego evaluar los países de forma individual
  if (locationLower.includes('perú') || locationLower.includes('peru') || locationLower.includes('lima')) {
    return '🇵🇪';
  }
  if (locationLower.includes('usa') || locationLower.includes('austin') || locationLower.includes('mountain view')) {
    return '🇺🇸';
  }
  
  // 3. Caso por defecto / global
  if (locationLower.includes('global')) {
    return '🌍';
  }
  
  return '📍';
};

export const ExperienceItem = ({
  title,
  position,
  mode,
  time,
  location,
  description,
  tech,
}: Props) => {
  const flagEmoji = getFlagEmoji(location);
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="mb-6 border-b pb-6 border-zinc-700">
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
          <span>{time}</span>
        </Reveal>
      </div>

      <div className="flex items-center justify-between mb-2">
        <Reveal>
          <span className="text-[#4B6E8E] font-bold tracking-wide">{position}</span>
        </Reveal>
        <Reveal>
          <span className="text-[#FF0099]">{mode}</span>
        </Reveal>
      </div>

      {/* Botón interactivo para desplegar / ocultar la descripción */}
      <div className="mb-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors focus:outline-none"
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
            <p className="mt-3 text-zinc-300 tracking-wide leading-relaxed">{description}</p>
          </Reveal>
        )}
      </div>

      <Reveal>
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </Reveal>
    </div>
  );
};