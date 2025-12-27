import React, { useState, useRef, useCallback } from 'react';
import Cylinder from './components/Cylinder';
import Stick from './components/Stick';
import ResultModal from './components/ResultModal';
import { Fortune, AnimationState } from './types';
import { getRandomFortune } from './constants';

const App: React.FC = () => {
  // State analogous to WeChat's Data
  const [state, setState] = useState<AnimationState>({
    isShaking: false,
    hasFallen: false,
    showModal: false,
  });
  const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);
  
  // Audio Refs for Sound Effects (Optional but recommended for full experience)
  // Note: Browsers block auto-play, so sounds trigger on user interaction.
  const shakeAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleShake = useCallback(() => {
    if (state.isShaking || state.hasFallen) return;

    // Trigger Shake Animation
    setState(prev => ({ ...prev, isShaking: true }));

    // Simulate Shake Duration (WeChat: wx.createAnimation)
    setTimeout(() => {
      // Pick a fortune
      const fortune = getRandomFortune();
      setCurrentFortune(fortune);

      // Stop shaking, drop stick
      setState(prev => ({ 
        ...prev, 
        isShaking: false, 
        hasFallen: true 
      }));
    }, 2000); // 2 seconds of shaking
  }, [state.isShaking, state.hasFallen]);

  const handleStickClick = () => {
    if (currentFortune) {
      setState(prev => ({ ...prev, showModal: true }));
    }
  };

  const reset = () => {
    setState({
      isShaking: false,
      hasFallen: false,
      showModal: false,
    });
    setCurrentFortune(null);
  };

  return (
    <div className="min-h-screen w-full bg-rice-paper text-ink-black flex flex-col items-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-8 border-t-8 border-vermilion opacity-20 m-4 rounded-tl-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-8 border-b-8 border-vermilion opacity-20 m-4 rounded-br-3xl pointer-events-none"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <span className="font-calligraphy text-[20rem] text-vermilion rotate-12">運</span>
      </div>

      {/* Header */}
      <header className="pt-12 pb-8 z-10 text-center">
        <h1 className="text-4xl font-calligraphy text-vermilion drop-shadow-sm mb-2">赛博求签</h1>
        <p className="text-stone-500 font-serif text-sm tracking-widest">心诚则灵 · 指尖问卜</p>
      </header>

      {/* Main Interactive Area */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-4 relative">
        
        {/* The Cylinder */}
        <div className="mb-12 z-20 transition-all duration-500 ease-in-out">
           <Cylinder isShaking={state.isShaking} onClick={handleShake} />
        </div>

        {/* The Falling Stick (Conditional Render with Animation) */}
        {state.hasFallen && (
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 z-30 animate-fall-stick">
            <Stick onClick={handleStickClick} className="animate-glow" />
            <div className="mt-4 text-center">
              <span className="inline-block bg-black/70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md animate-pulse">
                点击解签
              </span>
            </div>
          </div>
        )}

        {/* Instructions */}
        {!state.isShaking && !state.hasFallen && (
          <div className="absolute bottom-24 text-stone-400 font-serif animate-pulse">
             点击签筒 摇得好运
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="pb-6 text-stone-400 text-xs font-serif text-center w-full">
        <p>© 赛博玄学科技 | 仅供娱乐</p>
      </footer>

      {/* Result Modal */}
      <ResultModal 
        isOpen={state.showModal} 
        fortune={currentFortune} 
        onClose={reset} 
      />
      
      {/* CSS Utility for Vertical Text (Inline for self-containment) */}
      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
      `}</style>
    </div>
  );
};

export default App;