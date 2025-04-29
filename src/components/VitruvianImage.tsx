
import React from 'react';

interface VitruvianImageProps {
  opacity?: number;
  className?: string;
}

const VitruvianImage: React.FC<VitruvianImageProps> = ({ 
  opacity = 0.4,
  className = ""
}) => {
  return (
    <div 
      className={`absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 ${className}`}
      style={{ opacity }}
    >
      <img 
        src="/lovable-uploads/fe291135-b74a-4263-9afa-932a129ceae7.png" 
        alt="Vitruvian Man" 
        className="max-w-full max-h-full object-contain opacity-25 mix-blend-screen"
      />
    </div>
  );
};

export default VitruvianImage;
