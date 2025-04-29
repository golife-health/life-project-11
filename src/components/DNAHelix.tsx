
import { useEffect, useRef } from 'react';

const DNAHelix = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = 300;
    canvas.height = 500;
    
    // DNA helix parameters
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const amplitude = width / 4;
    const frequency = 0.02;
    const spaceY = 10;
    const baseWidth = 40;
    
    let offset = 0;
    const speed = 0.01;
    
    const drawHelix = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw two helical backbones
      for (let strand = 0; strand < 2; strand++) {
        const strandOffset = strand * Math.PI;
        
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        
        for (let y = 0; y < height; y += 2) {
          const x = centerX + amplitude * Math.sin(frequency * y + offset + strandOffset);
          
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      // Draw base pairs
      for (let y = spaceY; y < height; y += spaceY) {
        const x1 = centerX + amplitude * Math.sin(frequency * y + offset);
        const x2 = centerX + amplitude * Math.sin(frequency * y + offset + Math.PI);
        
        // Base pair line
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.stroke();
        
        // Base pair dots (nucleotides)
        const drawNucleotide = (x: number, y: number, radius: number, color: string) => {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        };
        
        const baseType = Math.floor(Math.random() * 4); // Simulate A-T, G-C base pairs
        
        if (baseType === 0) {
          drawNucleotide(x1, y, 3, 'rgba(100, 200, 255, 0.6)');
          drawNucleotide(x2, y, 3, 'rgba(200, 100, 200, 0.6)');
        } else if (baseType === 1) {
          drawNucleotide(x1, y, 3, 'rgba(200, 100, 200, 0.6)');
          drawNucleotide(x2, y, 3, 'rgba(100, 200, 255, 0.6)');
        } else if (baseType === 2) {
          drawNucleotide(x1, y, 3, 'rgba(100, 255, 200, 0.6)');
          drawNucleotide(x2, y, 3, 'rgba(255, 200, 100, 0.6)');
        } else {
          drawNucleotide(x1, y, 3, 'rgba(255, 200, 100, 0.6)');
          drawNucleotide(x2, y, 3, 'rgba(100, 255, 200, 0.6)');
        }
      }
      
      // Slowly rotate the helix
      offset += speed;
      requestAnimationFrame(drawHelix);
    };
    
    const animationId = requestAnimationFrame(drawHelix);
    
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  return (
    <div className={`${className} rounded-2xl overflow-hidden`}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default DNAHelix;
