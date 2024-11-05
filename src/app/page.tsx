// src/app/page.tsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/layout/HeroSection';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Dynamically import IntroAnimation to avoid hydration issues
const IntroAnimation = dynamic(() => import('@/components/IntroAnimation'), {
  ssr: false,
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroAnimation onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}