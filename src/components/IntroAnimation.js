// pages/index.js
import IntroAnimation from '../components/IntroAnimation';

export default function Home() {
  const handleAnimationComplete = () => {
    // Handle what happens after animation completes
  };

  return (
    <main>
      <IntroAnimation onAnimationComplete={handleAnimationComplete} />
      {/* Rest of your content */}
    </main>
  );
}