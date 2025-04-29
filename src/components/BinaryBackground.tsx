
import { useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw scientific elements inspired by DNA and molecules
    const drawScientificElements = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw molecular grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      
      // Draw vertical lines
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw molecular nodes at grid intersections
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (Math.random() < 0.3) { // Only draw some nodes
            const size = 1 + Math.random() * 2;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`;
            ctx.fill();
          }
        }
      }
    };

    drawScientificElements();
    window.addEventListener('resize', drawScientificElements);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', drawScientificElements);
    };
  }, []);

  return <canvas ref={canvasRef} className="scientific-background" />;
};

export default BinaryBackground;
