import React from 'react';
import { ARTICLES } from '../data/travelData';
import { Article } from '../types';

interface JournalSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  return (
    <section className="py-24 bg-[#FAF9F5]" id="journal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B3D2E]">
              The Island Journal
            </span>
            <h2 className="font-serif-hero text-3xl sm:text-5xl font-bold text-[#0B3D2E] mt-2">
              Stories & Travel Inspiration
            </h2>
            <p className="font-body text-base text-[#494551] mt-2 max-w-xl">
              Curated insider guides, packing wisdom, and narrative dispatches from the pearl of
              the Indian Ocean.
            </p>
          </div>
          <button
            onClick={() => onSelectArticle(ARTICLES[0])}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#4f378a] font-headline font-bold text-sm hover:underline cursor-pointer"
          >
            <span>Explore All Articles</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-white rounded-2xl overflow-hidden border border-[#cbc4d2]/30 hover:shadow-lg transition-all group flex flex-col cursor-pointer"
              id={`article-card-${article.id}`}
            >
              <div className="h-44 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#4f378a] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  {article.category}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#494551] font-medium">
                    {article.readTime} • {article.tagline}
                  </span>
                  <h3 className="font-headline font-bold text-sm text-[#1d1b20] mt-1 group-hover:text-[#4f378a] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#494551] mt-2 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <span className="text-xs text-[#4f378a] font-semibold mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
