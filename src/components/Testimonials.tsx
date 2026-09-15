import React from 'react';
import { TESTIMONIALS } from '../data/travelData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-[#cbc4d2]/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B3D2E]">
            Guest Chronicles
          </span>
          <h2 className="font-serif-hero text-3xl sm:text-5xl font-bold text-[#0B3D2E] mt-2">
            Loved by Travelers Around the World
          </h2>
          <p className="font-body text-base text-[#494551] mt-3">
            Read what global guests say about our seamless luxury coordination and private
            chauffeured tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF9F5] p-8 rounded-3xl border border-[#cbc4d2]/30 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D9A441] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body text-sm text-[#1d1b20] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#cbc4d2]/20">
                <div className="w-10 h-10 rounded-full bg-[#e1d4fd] flex items-center justify-center font-bold text-[#4f378a] text-sm">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-headline font-bold text-xs text-[#1d1b20]">{item.name}</h4>
                  <p className="text-[10px] text-[#494551] flex items-center gap-1.5 mt-0.5">
                    <span>{item.country}</span> <span>{item.flag}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
