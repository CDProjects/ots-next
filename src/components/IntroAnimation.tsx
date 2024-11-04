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
      setTimeout(() => setAnimationStage(1), 2000),
      setTimeout(() => setAnimationStage(2), 4000),
      setTimeout(() => {
        setAnimationStage(3);
        onAnimationComplete?.();
      }, 5000)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Animation Container */}
      <div className={`relative w-full h-full flex items-center justify-center
        ${animationStage >= 2 ? 'animate-fadeOut' : ''}`}
      >
        {/* Image Container with Responsive Sizing */}
        <div className="relative w-full h-full sm:w-auto sm:h-auto flex items-center justify-center px-4 sm:px-0">
          <div className={`relative max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw]
            ${animationStage === 0 ? 'animate-lightPan' : ''}`}
          >
            {/* Aspect Ratio Container */}
            <div className="relative w-full" style={{ aspectRatio: '600/356' }}>
              <Image
                src="/images/feel-the-green.jpeg"
                alt="Feel The Green"
                fill
                priority
                sizes="(max-width: 640px) 90vw,
                       (max-width: 768px) 80vw,
                       (max-width: 1024px) 70vw,
                       (max-width: 1280px) 60vw,
                       50vw"
                className="object-contain"
                style={{ objectFit: 'contain' }}
              />
              
              {/* Light Pan Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                  opacity-50 pointer-events-none
                  ${animationStage === 0 ? 'animate-lightPanGradient' : 'opacity-0'}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Fade In */}
      {animationStage >= 2 && (
        <div className="absolute inset-0 animate-fadeIn">
          {/* Main content placeholder */}
          <div className="text-white p-4">
            Your main content will appear here
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroAnimation;