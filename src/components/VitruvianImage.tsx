
import React from 'react';

interface VitruvianImageProps {
  opacity?: number;
  className?: string;
}

const VitruvianImage: React.FC<VitruvianImageProps> = ({ 
  opacity = 0.2, // Reduced default opacity from 0.25 to 0.2 for better balance
  className = ""
}) => {
  return (
    <div 
      className={`absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 ${className}`}
      style={{ opacity }}
    >
      <img 
        src="/lovable-uploads/8f2b941e-e9a7-4410-944b-aaa84e8be2bd.png" 
        alt="Vitruvian Man" 
        className="max-w-full max-h-full object-contain opacity-50 mix-blend-screen"
      />
    </div>
  );
};

export default VitruvianImage;
