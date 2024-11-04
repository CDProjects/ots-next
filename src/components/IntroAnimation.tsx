'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const IntroAnimation = ({ onAnimationComplete }: { onAnimationComplete?: () => void }) => {
  const [animationStage, setAnimationStage] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    
    // Longer animation durations for better visibility
    const timers = [
      setTimeout(() => setAnimationStage(1), 4000), // Initial logo fade in
      setTimeout(() => setAnimationStage(2), 8000), // Text reveal with light pan
      setTimeout(() => {
        setAnimationStage(3);
        onAnimationComplete?.();
      }, 12000)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Main Animation Container */}
      <div 
        className={`relative w-full h-full flex flex-col items-center justify-center
          ${animationStage >= 2 ? 'animate-fadeOut' : ''}`}
        style={{ backgroundColor: '#000000' }}
      >
        {/* Logo Container */}
        <div 
          className={`relative w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mb-8
            ${animationStage === 0 ? 'opacity-0 animate-fadeIn' : 'opacity-100'}`}
        >
          <Image
            src="/images/ots-logo-black.svg"
            alt="Old Town Shamrocks"
            width={300}
            height={300}
            priority
          />
        </div>

        {/* Text Container */}
        <div 
          className={`relative w-auto max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw]
            ${animationStage === 1 ? 'animate-slideUp opacity-0' : 'opacity-100'}`}
          style={{ backgroundColor: '#000000' }}
        >
          <div className="relative" style={{ aspectRatio: '600/356' }}>
            <Image
              src="/images/feel-the-green-text.svg"
              alt="Feel The Green"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />

            {/* Light pan effect */}
            <div 
              className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                ${animationStage === 1 ? 'animate-lightPanGradient' : 'opacity-0'}`}
              style={{
                mixBlendMode: 'overlay',
                opacity: animationStage === 1 ? 0.7 : 0
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content Fade In */}
      {animationStage >= 2 && (
        <div 
          className="absolute inset-0 animate-fadeIn"
          style={{ backgroundColor: '#000000' }}
        >
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