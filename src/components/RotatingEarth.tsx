
import { useEffect, useRef } from 'react';

const RotatingEarth = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 300;
    
    let rotation = 0;
    let requestId: number;
    
    // Draw grid lines
    const drawEarthGrid = (ctx: CanvasRenderingContext2D, radius: number, rotation: number) => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 0.5;
      
      // Draw longitude lines
      for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2;
        ctx.beginPath();
        for (let j = 0; j <= 100; j++) {
          const latitude = (j / 100) * Math.PI - Math.PI / 2;
          const x = radius * Math.cos(latitude) * Math.cos(angle + rotation);
          const y = radius * Math.sin(latitude);
          const z = radius * Math.cos(latitude) * Math.sin(angle + rotation);
          
          // Only draw points that would be visible (z > 0 means it's on the front side)
          if (z > -20) {
            const pointSize = (z + 20) / 40; // Fade based on depth
            const screenX = x;
            const screenY = y;
            
            if (j === 0) {
              ctx.moveTo(screenX, screenY);
            } else {
              ctx.lineTo(screenX, screenY);
            }
          }
        }
        ctx.stroke();
      }
      
      // Draw latitude lines
      for (let i = -4; i <= 4; i++) {
        const latitude = (i / 9) * Math.PI;
        ctx.beginPath();
        for (let j = 0; j <= 100; j++) {
          const angle = (j / 100) * Math.PI * 2;
          const x = radius * Math.cos(latitude) * Math.cos(angle + rotation);
          const y = radius * Math.sin(latitude);
          const z = radius * Math.cos(latitude) * Math.sin(angle + rotation);
          
          // Only draw points that would be visible
          if (z > -20) {
            const pointSize = (z + 20) / 40; // Fade based on depth
            const screenX = x;
            const screenY = y;
            
            if (j === 0) {
              ctx.moveTo(screenX, screenY);
            } else {
              ctx.lineTo(screenX, screenY);
            }
          }
        }
        ctx.stroke();
      }
    };
    
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Save context state
      ctx.save();
      
      // Move to center of canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);
      
      // Draw the wireframe earth
      drawEarthGrid(ctx, 120, rotation);
      
      // Restore context state
      ctx.restore();
      
      // Update rotation
      rotation += 0.005;
      
      // Request next frame
      requestId = requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);
  
  return (
    <div className="flex justify-center items-center my-4">
      <div className="relative w-[300px] h-[300px]">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full rounded-full"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

export default RotatingEarth;
