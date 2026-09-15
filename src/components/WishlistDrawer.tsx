import React from 'react';
import { WishlistItem } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onRequestQuote: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll,
  onRequestQuote,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#cbc4d2]/30 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#cbc4d2]/30 flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-[#ba1a1a]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <h3 className="font-serif-hero text-xl font-bold text-[#0B3D2E]">Saved Wishlist</h3>
            <span className="bg-[#ba1a1a] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#ece6ee] flex items-center justify-center text-[#494551] cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* List of items */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-[#494551] space-y-3">
              <span className="material-symbols-outlined text-4xl text-[#cbc4d2]">
                favorite_border
              </span>
              <p className="text-sm font-medium">Your island wishlist is empty.</p>
              <p className="text-xs text-[#494551]/80 max-w-xs mx-auto">
                Click the heart icon on any destination or tour package to curate your dream Sri
                Lanka voyage.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-[#FAF9F5] rounded-2xl border border-[#cbc4d2]/30 group hover:border-[#0B3D2E]/40 transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#4f378a] tracking-wider block">
                    {item.type}
                  </span>
                  <h4 className="font-headline font-bold text-xs text-[#1d1b20] truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#494551] truncate">{item.subtitle}</p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-1.5 text-[#494551] hover:text-[#ba1a1a] transition-colors cursor-pointer"
                  title="Remove item"
                >
                  <span className="material-symbols-outlined text-base">delete</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#cbc4d2]/30 bg-[#FAF9F5] space-y-3">
            <button
              onClick={() => {
                onClose();
                onRequestQuote();
              }}
              className="w-full bg-[#0B3D2E] hover:bg-[#07291f] text-white py-3.5 rounded-full font-headline font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span>Request Quote for Saved Items</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
            <button
              onClick={onClearAll}
              className="w-full text-center text-xs text-[#494551] hover:text-[#ba1a1a] transition-colors cursor-pointer"
            >
              Clear All Wishlist Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
