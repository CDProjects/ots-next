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
    <div className="fixed inset-0 z-50 bg-black">
      <div className={`relative h-full w-full flex items-center justify-center
        ${animationStage >= 2 ? 'animate-fadeOut' : ''}`}
      >
        <div className="relative overflow-hidden">
          <div className={`relative ${
            animationStage === 0 ? 'animate-lightPan' : ''
          }`}>
            {/* Container for maintaining aspect ratio */}
            <div className="relative">
              <Image
                src="/images/feel-the-green.jpeg"
                alt="Feel The Green"
                width={1920}  // We'll adjust these values based on your original image dimensions
                height={1080} // We'll adjust these values based on your original image dimensions
                quality={100} // Maximum quality
                priority
                className="object-contain"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
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