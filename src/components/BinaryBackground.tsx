
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
    const columns = Math.floor(canvas.width / 15);
    const fontSize = 14;
    
    ctx.font = `${fontSize}px SF Mono, monospace`;
    
    const positions = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#000';
      
      for (let i = 0; i < positions.length; i++) {
        const text = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
        const x = i * 15;
        const y = positions[i] * 20;
        
        if (y > 0) {
          ctx.fillText(text, x, y);
        }
        
        positions[i] += 1;
        
        if (positions[i] * 20 > canvas.height && Math.random() > 0.98) {
          positions[i] = 0;
        }
      }
    };

    const interval = setInterval(draw, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="binary-container" />;
};

export default BinaryBackground;
