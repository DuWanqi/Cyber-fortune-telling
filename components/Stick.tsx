import React from 'react';

interface StickProps {
  onClick?: () => void;
  className?: string;
}

const Stick: React.FC<StickProps> = ({ onClick, className = '' }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative w-8 h-48 cursor-pointer transition-transform hover:scale-105 active:scale-95 ${className}`}
      role="button"
      aria-label="点击查看签文"
    >
      {/* Stick Body */}
      <div className="absolute inset-0 bg-yellow-100 border-2 border-amber-700 rounded-sm shadow-md flex flex-col items-center justify-between py-2 overflow-hidden">
         {/* Wood Texture Effect (Simple CSS) */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
         
         {/* Top Red Mark */}
         <div className="w-full h-4 bg-vermilion opacity-80"></div>
         
         {/* Text Placeholder */}
         <div className="flex-1 flex items-center justify-center py-2">
            <span className="font-calligraphy text-ink-black writing-vertical text-lg font-bold">
              上上签
            </span>
         </div>

         {/* Bottom Pattern */}
         <div className="w-4 h-4 rounded-full border border-vermilion"></div>
      </div>
    </div>
  );
};

export default Stick;