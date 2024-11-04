// src/components/IntroAnimation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface IntroAnimationProps {
  onAnimationComplete?: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    
    const timers = [
      setTimeout(() => setAnimationStage(1), 2000), // Light pan complete
      setTimeout(() => setAnimationStage(2), 4000), // Fade to black
      setTimeout(() => {
        setAnimationStage(3);
        onAnimationComplete?.();
      }, 5000) // Show main content
    ];

    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className={`relative h-full w-full flex items-center justify-center
        ${animationStage >= 2 ? 'animate-fadeOut' : ''}`}
      >
        <div className="relative w-full max-w-2xl aspect-video overflow-hidden">
          <div className={`relative w-full h-full ${
            animationStage === 0 ? 'animate-lightPan' : ''
          }`}>
            <div className="relative w-full h-full">
              <Image
                src="/images/feel-the-green.png"
                alt="Feel The Green"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
            {/* Light pan overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
              ${animationStage === 0 ? 'animate-lightPanGradient' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>

      {animationStage >= 2 && (
        <div className="animate-fadeIn">
          {/* Main content placeholder - you can replace this with your actual content */}
          <div className="text-white p-4">
            Your main content will appear here
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroAnimation;