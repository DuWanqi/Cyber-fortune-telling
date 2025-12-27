import React from 'react';
import { Fortune } from '../types';

interface ResultModalProps {
  fortune: Fortune | null;
  onClose: () => void;
  isOpen: boolean;
}

const ResultModal: React.FC<ResultModalProps> = ({ fortune, onClose, isOpen }) => {
  if (!isOpen || !fortune) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-sm bg-rice-paper rounded-lg shadow-2xl border-4 border-vermilion overflow-hidden animate-[scale-in_0.3s_ease-out]">
        
        {/* Header Decoration */}
        <div className="bg-vermilion p-4 text-center relative">
           <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold-leaf m-2"></div>
           <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gold-leaf m-2"></div>
           
           <h2 className="text-3xl font-calligraphy text-gold-leaf drop-shadow-md">
             {fortune.grade}
           </h2>
        </div>

        {/* Scroll Body */}
        <div className="p-6 flex flex-col items-center gap-6 relative">
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/chinese-cloud.png')]"></div>

           {/* Sign Name */}
           <div className="text-2xl font-serif font-bold text-vermilion border-b-2 border-vermilion pb-2 px-4">
             {fortune.signName}
           </div>

           {/* Poem (Vertical Layout for tradition) */}
           <div className="flex flex-row-reverse gap-4 justify-center bg-white/50 p-4 rounded shadow-inner border border-stone-200">
             {fortune.poem.map((line, idx) => (
               <div key={idx} className="writing-vertical text-lg font-calligraphy text-ink-black tracking-widest min-h-[14rem]">
                 {line}
               </div>
             ))}
           </div>

           {/* Auspicious Words */}
           <div className="text-center">
             <div className="text-xs text-stone-500 mb-1 uppercase tracking-widest">解曰</div>
             <p className="font-serif text-stone-800 leading-relaxed text-sm">
               {fortune.auspiciousWords}
             </p>
           </div>
        </div>

        {/* Footer / Action */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 text-center">
          <button 
            onClick={onClose}
            className="bg-vermilion text-rice-paper font-bold py-2 px-8 rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-all active:scale-95 font-serif"
          >
            收入囊中
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;