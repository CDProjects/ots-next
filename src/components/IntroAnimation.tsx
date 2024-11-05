// src/components/IntroAnimation.tsx
'use client';

import { useEffect, useState } from 'react';
import { SparklesCore, TextGenerateEffect, BackgroundBeams } from "aceternity-ui";
import { motion } from 'framer-motion';
import Image from 'next/image';

interface IntroAnimationProps {
  onAnimationComplete?: () => void;
}

const IntroAnimation = ({ onAnimationComplete }: IntroAnimationProps) => {
  const [animationStage, setAnimationStage] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    
    const timers = [
      setTimeout(() => setAnimationStage(1), 3000),
      setTimeout(() => setAnimationStage(2), 6000),
      setTimeout(() => {
        setAnimationStage(3);
        onAnimationComplete?.();
      }, 9000)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  if (!mounted) return null;

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#2ECC71"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: animationStage >= 0 ? 1 : 0,
            scale: animationStage >= 0 ? 1 : 0.5,
          }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
          className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        >
          <Image
            src="/images/ots-logo-black.svg"
            alt="Old Town Shamrocks"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {animationStage >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <TextGenerateEffect 
              words="FEEL THE GREEN"
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2ECC71]"
            />
          </motion.div>
        )}
      </div>

      <BackgroundBeams
        className="absolute inset-0"
        beamColor="#2ECC71"
      />

      {animationStage >= 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        />
      )}
    </div>
  );
};

export default IntroAnimation;