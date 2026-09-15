import React, { useState } from 'react';
import { TRAVELER_PERSONAS } from '../data/travelData';
import { TravelerPersona } from '../types';

interface TravelerPersonasProps {
  onSelectPersona: (persona: TravelerPersona) => void;
}

export const TravelerPersonas: React.FC<TravelerPersonasProps> = ({ onSelectPersona }) => {
  const [activePersona, setActivePersona] = useState<TravelerPersona | null>(TRAVELER_PERSONAS[0]);

  const handlePersonaClick = (persona: TravelerPersona) => {
    setActivePersona(persona);
    onSelectPersona(persona);
  };

  return (
    <section className="py-24 bg-[#f8f2fa]" id="traveler-personas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B3D2E]">
            Tailored Perspectives
          </span>
          <h2 className="font-serif-hero text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B3D2E] mt-2">
            What Kind of Traveler Are You?
          </h2>
          <p className="font-body text-base text-[#494551] mt-3">
            Select your persona to reveal curated routes crafted precisely for your passions.
          </p>
        </div>

        {/* 8 Persona Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {TRAVELER_PERSONAS.map((persona) => {
            const isSelected = activePersona?.id === persona.id;
            return (
              <div
                key={persona.id}
                onClick={() => handlePersonaClick(persona)}
                className={`p-4 rounded-2xl border text-center cursor-pointer transition-all hover:scale-105 hover:shadow-md flex flex-col items-center justify-center aspect-square ${
                  isSelected
                    ? 'bg-[#0B3D2E] text-white border-[#0B3D2E] shadow-md scale-105'
                    : 'bg-white hover:bg-[#e1d4fd]/40 border-[#cbc4d2]/30 text-[#1d1b20]'
                }`}
                id={`persona-card-${persona.id}`}
              >
                <span className="text-3xl mb-2">{persona.emoji}</span>
                <span
                  className={`font-headline font-bold text-xs ${
                    isSelected ? 'text-white' : 'text-[#1d1b20]'
                  }`}
                >
                  {persona.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Persona Spotlight Preview Banner */}
        {activePersona && (
          <div className="bg-white border border-[#cbc4d2]/30 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-4">
              <span className="text-4xl p-3 bg-[#e1d4fd]/40 rounded-2xl">{activePersona.emoji}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-headline font-bold text-lg text-[#0B3D2E]">
                    {activePersona.title}
                  </h4>
                  <span className="text-xs bg-[#ffdf93] text-[#241a00] font-semibold px-2 py-0.5 rounded-full">
                    Recommended Style
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#494551] mt-1 max-w-2xl">
                  {activePersona.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectPersona(activePersona)}
              className="bg-[#0B3D2E] hover:bg-[#082a1f] text-white text-xs font-semibold px-5 py-2.5 rounded-xl whitespace-nowrap flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <span>View Matching Tours</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
