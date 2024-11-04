// src/app/page.tsx
'use client';

import IntroAnimation from '@/components/IntroAnimation';

export default function Home() {
  const handleAnimationComplete = () => {
    // You can add logic here for what happens after the animation
    console.log('Animation completed');
  };

  return <IntroAnimation onAnimationComplete={handleAnimationComplete} />;
}