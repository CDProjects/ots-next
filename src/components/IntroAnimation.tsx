import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the props interface
interface IntroAnimationProps {
  onAnimationComplete?: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Sequence the animations
    const timer1 = setTimeout(() => setAnimationStage(1), 2000); // After light pan
    const timer2 = setTimeout(() => setAnimationStage(2), 4000); // After fade to black
    const timer3 = setTimeout(() => {
      setAnimationStage(3);
      onAnimationComplete?.();
    }, 5000); // Begin showing main content

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div
        className={`relative h-full w-full flex items-center justify-center
          ${animationStage >= 2 ? 'animate-fadeOut' : ''}`}
      >
        {/* Light pan effect container */}
        <div className="relative w-full max-w-2xl aspect-video overflow-hidden">
          {/* The image container */}
          <div className={`relative w-full h-full ${
            animationStage === 0 ? 'animate-lightPan' : ''
          }`}>
            <div className="relative w-full h-full">
              <Image
                src="/images/feel-the-green.png"
                alt="Feel The Green"
                layout="fill"
                objectFit="contain"
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
      {/* Main content fade in */}
      {animationStage >= 2 && (
        <div className="animate-fadeIn">
          {/* Your main content will go here */}
        </div>
      )}
    </div>
  );
};

export default IntroAnimation;