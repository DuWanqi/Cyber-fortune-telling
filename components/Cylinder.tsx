import React from 'react';

interface CylinderProps {
  isShaking: boolean;
  onClick: () => void;
}

const Cylinder: React.FC<CylinderProps> = ({ isShaking, onClick }) => {
  return (
    <div 
      className={`relative w-48 h-64 mx-auto cursor-pointer transition-all ${isShaking ? 'animate-shake-cylinder' : 'hover:-translate-y-1'}`}
      onClick={onClick}
      role="button"
      aria-label="点击摇签"
    >
      {/* 1. LAYER: BACK RIM (The dark hole/inner wall) - Z-INDEX 0 */}
      <div className="absolute top-[32px] left-0 w-full h-12 bg-red-950 rounded-[50%] border-4 border-red-900 shadow-inner z-0"></div>

      {/* 2. LAYER: STICKS (Inside the hole) - Z-INDEX 10 */}
      {/* Positioned to emerge from the hole. pointer-events-none ensures clicks pass to the container if needed. */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-40 z-10 flex justify-center items-end gap-1 overflow-hidden pointer-events-none">
         {Array.from({ length: 12 }).map((_, i) => (
           <div 
             key={i} 
             className="w-2 bg-yellow-200 border border-amber-800 rounded-t-sm shadow-sm origin-bottom"
             style={{ 
               height: `${60 + Math.random() * 40}%`, 
               transform: `rotate(${(i - 6) * 5}deg) translateY(${isShaking ? Math.random() * 10 : 0}px)`,
               transition: 'transform 0.1s'
             }}
           ></div>
         ))}
      </div>

      {/* 3. LAYER: FRONT BODY (Masks the bottom of sticks) - Z-INDEX 20 */}
      {/* Starts at the equator of the top oval (56px) */}
      <div className="absolute top-[56px] bottom-0 w-full z-20 pointer-events-none">
         <div className="w-full h-full bg-gradient-to-r from-red-900 via-vermilion to-red-900 rounded-b-3xl border-x-2 border-b-2 border-red-950 relative overflow-hidden">
             
            {/* Decorations on Body */}
            <div className="absolute top-4 w-full h-2 bg-gold-leaf opacity-80 shadow-sm"></div>
            
            {/* Center Character */}
            <div className="absolute top-8 left-0 right-0 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-gold-leaf rounded-full flex items-center justify-center bg-red-800 shadow-inner z-10">
                  <span className="font-calligraphy text-5xl text-gold-leaf select-none drop-shadow-md">
                    吉
                  </span>
                </div>
            </div>

            <div className="absolute bottom-8 w-full h-4 bg-gold-leaf opacity-80 shadow-sm flex items-center justify-center gap-4">
                <div className="w-2 h-2 rounded-full bg-red-900"></div>
                <div className="w-2 h-2 rounded-full bg-red-900"></div>
                <div className="w-2 h-2 rounded-full bg-red-900"></div>
            </div>

            {/* Texture */}
            <div className="absolute inset-0 mix-blend-multiply opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
         </div>
      </div>

      {/* 4. LAYER: FRONT RIM LIP (Completes the top curve over the sticks) - Z-INDEX 20 */}
      {/* Matches the body gradient. clipped to show only bottom half (the front lip) */}
      <div 
        className="absolute top-[32px] left-0 w-full h-12 rounded-[50%] bg-gradient-to-r from-red-900 via-vermilion to-red-900 z-20 pointer-events-none"
        style={{ clipPath: 'inset(50% 0 0 0)' }}
      >
          {/* Rim Border Simulation */}
          <div className="absolute inset-0 rounded-[50%] border-b-4 border-red-950 opacity-50"></div>
          {/* Highlight */}
          <div className="absolute bottom-0 w-full h-1 bg-white/20 blur-[1px]"></div>
      </div>
      
      {/* Tassel (Liu Su) - Z-INDEX 30 */}
      <div className="absolute right-0 bottom-16 w-8 h-32 flex flex-col items-center origin-top animate-pulse z-30">
        <div className="w-1 h-8 bg-red-900 shadow-sm"></div>
        <div className="w-4 h-4 rounded-full bg-gold-leaf border border-red-900 shadow-sm"></div>
        <div className="w-6 h-20 bg-red-600 rounded-b-lg flex justify-around overflow-hidden shadow-md mt-1">
            <div className="w-0.5 h-full bg-red-800"></div>
            <div className="w-0.5 h-full bg-red-800"></div>
            <div className="w-0.5 h-full bg-red-800"></div>
        </div>
      </div>

    </div>
  );
};

export default Cylinder;