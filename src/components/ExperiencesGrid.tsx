import React, { useState } from 'react';
import { EXPERIENCES } from '../data/travelData';
import { Experience } from '../types';

interface ExperiencesGridProps {
  onSelectExperience: (exp: Experience) => void;
}

export const ExperiencesGrid: React.FC<ExperiencesGridProps> = ({ onSelectExperience }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Safari', 'Highlands', 'Ocean', 'Heritage', 'Marine', 'Gastronomy', 'Wellness'];

  const filteredExperiences =
    selectedCategory === 'All'
      ? EXPERIENCES
      : EXPERIENCES.filter((e) => e.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="py-24 bg-[#f8f2fa] relative" id="experiences">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4f378a]">
            Unrivaled Island Moments
          </span>
          <h2 className="font-serif-hero text-3xl sm:text-5xl font-bold text-[#0B3D2E] mt-2">
            Experience Sri Lanka Your Way
          </h2>
          <p className="font-body text-base text-[#494551] mt-3">
            Immerse yourself in authentic island adventures tailored to your desires and travel style.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-headline font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0B3D2E] text-white shadow-xs'
                  : 'bg-white hover:bg-[#e1d4fd] text-[#494551] hover:text-[#4f378a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 8 Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onSelectExperience(exp)}
              className="bg-white rounded-2xl overflow-hidden border border-[#cbc4d2]/30 hover:shadow-lg transition-all group flex flex-col cursor-pointer"
              id={`experience-card-${exp.id}`}
            >
              <div className="h-44 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${exp.image}')` }}
                />
                <span
                  className="absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  style={{ backgroundColor: exp.badgeBg }}
                >
                  {exp.category}
                </span>
                <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded">
                  {exp.duration}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline font-bold text-base text-[#1d1b20] group-hover:text-[#4f378a] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#494551] mt-2 leading-relaxed">{exp.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#cbc4d2]/20 flex items-center justify-between text-xs text-[#4f378a] font-semibold">
                  <span>{exp.tagline}</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
