
import { useEffect, useRef } from 'react';

const RotatingEarth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Earth image
    const earthImage = new Image();
    earthImage.src = '/earth-texture.jpg';
    
    // Set canvas dimensions
    canvas.width = 120;
    canvas.height = 120;
    
    let rotation = 0;
    let requestId: number;
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Save context state
      ctx.save();
      
      // Move to center of canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);
      
      // Draw circle clip
      ctx.beginPath();
      ctx.arc(0, 0, canvas.width / 2, 0, Math.PI * 2);
      ctx.clip();
      
      // Draw earth with rotation
      if (earthImage.complete) {
        ctx.rotate(rotation);
        ctx.drawImage(
          earthImage,
          -canvas.width, 
          -canvas.height, 
          canvas.width * 2, 
          canvas.height * 2
        );
      }
      
      // Restore context state
      ctx.restore();
      
      // Update rotation
      rotation += 0.005;
      
      // Request next frame
      requestId = requestAnimationFrame(draw);
    };
    
    // Start animation when image is loaded
    earthImage.onload = () => {
      draw();
    };
    
    // Cleanup
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);
  
  return (
    <div className="flex justify-center items-center my-4">
      <div className="relative w-[120px] h-[120px]">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full rounded-full shadow-lg"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default RotatingEarth;
