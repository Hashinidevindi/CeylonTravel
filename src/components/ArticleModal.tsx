import React from 'react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onPlanTrip: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onPlanTrip }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col border border-[#cbc4d2]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero */}
        <div className="relative h-60 shrink-0">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#4f378a] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                {article.category}
              </span>
              <span className="text-xs text-white/80">
                {article.readTime} • {article.tagline}
              </span>
            </div>
            <h2 className="font-serif-hero text-2xl font-bold leading-snug">{article.title}</h2>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          <p className="text-sm font-semibold text-[#0B3D2E] italic border-l-3 border-[#D9A441] pl-3 py-1">
            {article.summary}
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-[#494551] font-body leading-relaxed pt-2">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-[#cbc4d2]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#ffdf93] flex items-center justify-center font-bold text-xs text-[#241a00]">
                TC
              </div>
              <div className="text-xs">
                <strong className="block text-[#1d1b20]">Travel Ceylon Editorial</strong>
                <span className="text-[#494551] text-[10px]">Colombo & Hill Country Team</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#cbc4d2]/30 bg-[#f8f2fa] flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#494551] hover:text-[#1d1b20] px-4 py-2 cursor-pointer"
          >
            Back to Articles
          </button>
          <button
            onClick={() => {
              onClose();
              onPlanTrip();
            }}
            className="bg-[#0B3D2E] hover:bg-[#07291f] text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <span>Design a Tour Around This</span>
            <span className="material-symbols-outlined text-sm">east</span>
          </button>
        </div>
      </div>
    </div>
  );
};
