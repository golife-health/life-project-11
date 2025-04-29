
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
    const spaceY = 15; // Increased spacing between base pairs
    
    let offset = 0;
    const speed = 0.01;
    
    const drawHelix = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Add a subtle glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(255, 255, 255, 0.7)";
      
      // Draw two helical backbones (white with glow)
      for (let strand = 0; strand < 2; strand++) {
        const strandOffset = strand * Math.PI;
        
        ctx.beginPath();
        ctx.lineWidth = 3; // Thicker line for backbone
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'; // Bright white for backbone
        
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
      
      // Reset shadow for base pairs
      ctx.shadowBlur = 8;
      
      // Draw base pairs (alternating blue and green)
      for (let y = spaceY; y < height; y += spaceY) {
        const x1 = centerX + amplitude * Math.sin(frequency * y + offset);
        const x2 = centerX + amplitude * Math.sin(frequency * y + offset + Math.PI);
        
        // Base pair connection line
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(180, 180, 180, 0.3)';
        ctx.stroke();
        
        // Base pair nucleotides with neon glow
        const drawNucleotide = (x: number, y: number, width: number, color: string) => {
          ctx.shadowColor = color;
          ctx.beginPath();
          ctx.rect(x - width/2, y - 4, width, 8);
          ctx.fillStyle = color;
          ctx.fill();
        };
        
        // Alternate between blue and green for bases
        const isBlue = Math.floor(y / spaceY) % 2 === 0;
        const baseLength = 10 + Math.random() * 30; // Random length for varied appearance
        
        if (isBlue) {
          ctx.shadowColor = "rgba(0, 100, 255, 0.8)";
          drawNucleotide(x1 + (x2-x1)/4, y, baseLength, "rgba(0, 150, 255, 0.9)"); // Blue
        } else {
          ctx.shadowColor = "rgba(0, 255, 100, 0.8)";
          drawNucleotide(x1 + (x2-x1)/4, y, baseLength, "rgba(50, 255, 50, 0.9)"); // Green
        }
        
        if (!isBlue) {
          ctx.shadowColor = "rgba(0, 100, 255, 0.8)";
          drawNucleotide(x2 - (x2-x1)/4, y, baseLength, "rgba(0, 150, 255, 0.9)"); // Blue
        } else {
          ctx.shadowColor = "rgba(0, 255, 100, 0.8)";
          drawNucleotide(x2 - (x2-x1)/4, y, baseLength, "rgba(50, 255, 50, 0.9)"); // Green
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
    <div className={`${className} rounded-2xl overflow-hidden bg-black/30`}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default DNAHelix;
