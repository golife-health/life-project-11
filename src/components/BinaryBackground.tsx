
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

    const binaryDigits = ['0', '1'];
    const columns = Math.floor(canvas.width / 20);
    const fontSize = 12;
    
    ctx.font = `${fontSize}px SF Mono, monospace`;
    
    const positions = Array(columns).fill(0);

    const draw = () => {
      // Use a more subtle fill for elegance
      ctx.fillStyle = 'rgba(248, 248, 248, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // More elegant text color with slight opacity
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      
      for (let i = 0; i < positions.length; i++) {
        const text = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
        const x = i * 20;
        const y = positions[i] * 20;
        
        if (y > 0) {
          ctx.fillText(text, x, y);
        }
        
        positions[i] += 1;
        
        // Adjusted probability for more natural spacing
        if (positions[i] * 20 > canvas.height && Math.random() > 0.985) {
          positions[i] = 0;
        }
      }
    };

    // Slower animation for a more subtle effect
    const interval = setInterval(draw, 150);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="binary-container" />;
};

export default BinaryBackground;
