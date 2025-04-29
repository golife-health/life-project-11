
import React, { useState, useEffect } from 'react';

interface VitruvianImageProps {
  opacity?: number;
  className?: string;
}

const VitruvianImage: React.FC<VitruvianImageProps> = ({ 
  opacity = 0.3, 
  className = ""
}) => {
  const [currentOpacity, setCurrentOpacity] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Smooth animation effect after the image loads
  useEffect(() => {
    if (!isLoaded) return;
    
    // Start from low opacity
    setCurrentOpacity(0.1);
    
    // Animate to target opacity
    const animationDuration = 1500; // 1.5 seconds for the animation
    const startTime = performance.now();
    
    const animateOpacity = (timestamp: number) => {
      // Calculate progress (0 to 1)
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Ease-in-out function for smoother transition
      const easedProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      // Calculate current opacity (0.1 to final opacity)
      const newOpacity = 0.1 + (opacity - 0.1) * easedProgress;
      setCurrentOpacity(newOpacity);
      
      // Continue animation until complete
      if (progress < 1) {
        requestAnimationFrame(animateOpacity);
      }
    };
    
    requestAnimationFrame(animateOpacity);
  }, [isLoaded, opacity]);

  return (
    <div 
      className={`absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 ${className}`}
      style={{ opacity: currentOpacity }}
    >
      <img 
        src="/lovable-uploads/8f2b941e-e9a7-4410-944b-aaa84e8be2bd.png" 
        alt="Vitruvian Man" 
        className={`max-w-full max-h-full object-contain opacity-60 mix-blend-screen transition-opacity duration-500 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        decoding="async"
      />
    </div>
  );
};

export default VitruvianImage;
