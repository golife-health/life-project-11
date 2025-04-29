
import { useEffect, useRef } from 'react';

const DNAHelix = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size with higher resolution for sharper edges
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const parentElement = canvas.parentElement;
      
      if (parentElement) {
        const width = parentElement.clientWidth;
        const height = parentElement.clientHeight;
        
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(devicePixelRatio, devicePixelRatio);
      } else {
        // Fallback to default dimensions
        canvas.width = 300 * devicePixelRatio;
        canvas.height = 500 * devicePixelRatio;
        canvas.style.width = '300px';
        canvas.style.height = '500px';
        ctx.scale(devicePixelRatio, devicePixelRatio);
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // DNA helix parameters
    const getWidth = () => canvas.width / devicePixelRatio;
    const getHeight = () => canvas.height / devicePixelRatio;
    const devicePixelRatio = window.devicePixelRatio || 1;
    
    const centerX = getWidth() / 2;
    const amplitude = getWidth() / 4;
    const frequency = 0.02;
    const spaceY = 18; // Increased spacing between base pairs for better visibility
    
    let offset = 0;
    const speed = 0.003; // Reduced speed for smoother animation
    
    // Add scroll-based interaction
    const handleScroll = () => {
      scrollRef.current = window.scrollY * 0.001; // Scale down the effect
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const drawHelix = () => {
      const width = getWidth();
      const height = getHeight();

      ctx.clearRect(0, 0, width * devicePixelRatio, height * devicePixelRatio);
      
      // Apply scroll-based transformation
      const scrollOffset = scrollRef.current;
      const dynamicAmplitude = amplitude * (1 + scrollOffset * 0.1); // Expand amplitude slightly on scroll
      const dynamicFrequency = frequency * (1 - scrollOffset * 0.05); // Adjust frequency slightly on scroll
      
      // No background fill - removed as requested
      
      // Enhanced 3D effect with shadows
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
      
      // Draw two helical backbones with enhanced depth
      for (let strand = 0; strand < 2; strand++) {
        const strandOffset = strand * Math.PI;
        
        // Add depth effect with multiple layers
        // Shadow/glow layer
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        
        for (let y = 0; y < height; y += 2) {
          const x = centerX + dynamicAmplitude * Math.sin(dynamicFrequency * y + offset + strandOffset);
          
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        
        // Main strand layer
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        
        for (let y = 0; y < height; y += 2) {
          const x = centerX + dynamicAmplitude * Math.sin(dynamicFrequency * y + offset + strandOffset);
          
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        
        // Highlight layer for 3D effect
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
        
        for (let y = 0; y < height; y += 2) {
          const x = centerX + dynamicAmplitude * Math.sin(dynamicFrequency * y + offset + strandOffset);
          
          if (y === 0) {
            ctx.moveTo(x + 1, y);
          } else {
            ctx.lineTo(x + 1, y);
          }
        }
        ctx.stroke();
      }
      
      // Reset shadow for base pairs
      ctx.shadowBlur = 8;
      
      // Draw base pairs with enhanced visuals
      for (let y = spaceY; y < height; y += spaceY) {
        const x1 = centerX + dynamicAmplitude * Math.sin(dynamicFrequency * y + offset);
        const x2 = centerX + dynamicAmplitude * Math.sin(dynamicFrequency * y + offset + Math.PI);
        
        // Base pair connection line with depth
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgba(180, 180, 180, 0.3)';
        ctx.stroke();
        
        // Base pair nucleotides with enhanced 3D effect
        const drawNucleotide = (x: number, y: number, width: number, color: string, glowColor: string) => {
          // Shadow for depth
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = 10;
          
          // Main nucleotide
          ctx.beginPath();
          ctx.rect(x - width/2, y - 4, width, 8);
          ctx.fillStyle = color;
          ctx.fill();
          
          // Highlight for 3D effect
          ctx.beginPath();
          ctx.rect(x - width/2, y - 4, width, 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.fill();
        };
        
        // Alternate between blue and green for bases with smoother color transitions
        const basePosition = Math.floor(y / spaceY);
        const isBlue = basePosition % 2 === 0;
        
        // Create randomized but consistent lengths for each base pair
        const seed = basePosition * 137.5 + 0.1; // Use a simple hash function for consistency
        const pseudoRandom = seed - Math.floor(seed);
        const baseLength = 10 + pseudoRandom * 25;
        
        if (isBlue) {
          ctx.shadowColor = "rgba(0, 100, 255, 0.7)";
          drawNucleotide(x1 + (x2-x1)/4, y, baseLength, "rgba(0, 150, 255, 0.9)", "rgba(0, 100, 255, 0.7)");
        } else {
          ctx.shadowColor = "rgba(0, 255, 100, 0.7)";
          drawNucleotide(x1 + (x2-x1)/4, y, baseLength, "rgba(50, 255, 50, 0.9)", "rgba(0, 255, 100, 0.7)");
        }
        
        if (!isBlue) {
          ctx.shadowColor = "rgba(0, 100, 255, 0.7)";
          drawNucleotide(x2 - (x2-x1)/4, y, baseLength, "rgba(0, 150, 255, 0.9)", "rgba(0, 100, 255, 0.7)");
        } else {
          ctx.shadowColor = "rgba(0, 255, 100, 0.7)";
          drawNucleotide(x2 - (x2-x1)/4, y, baseLength, "rgba(50, 255, 50, 0.9)", "rgba(0, 255, 100, 0.7)");
        }
      }
      
      // Slowly rotate the helix
      offset += speed;
      requestAnimationFrame(drawHelix);
    };
    
    const animationId = requestAnimationFrame(drawHelix);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={`${className}`}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
};

export default DNAHelix;
