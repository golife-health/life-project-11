
import React, { useState, useEffect } from 'react';

interface VitruvianImageProps {
  opacity?: number;
  className?: string;
}

const VitruvianImage: React.FC<VitruvianImageProps> = ({ 
  opacity = 0.3, 
  className = ""
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 ${className}`}
      style={{ opacity: isLoaded ? opacity : 0 }}
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
