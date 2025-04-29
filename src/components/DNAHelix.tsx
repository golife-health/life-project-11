
import { useEffect, useRef } from 'react';

interface DNAHelixProps {
  className?: string;
  startAtPhase?: number;
  endAtPhase?: number;
}

const DNAHelix = ({ 
  className = '', 
  startAtPhase = 1, 
  endAtPhase = 4 
}: DNAHelixProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const animationRef = useRef<number>(0);
  const progressRef = useRef(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size with higher resolution for sharper edges
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      const containerHeight = canvas.parentElement?.clientHeight || 500;
      
      canvas.width = 300 * devicePixelRatio;
      canvas.height = containerHeight * devicePixelRatio;
      canvas.style.width = '300px';
      canvas.style.height = '100%';
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // DNA helix parameters
    const width = 300;
    const centerX = width / 2;
    const amplitude = width / 4;
    const frequency = 0.02;
    const spaceY = 18; // Spacing between base pairs
    
    let offset = 0;
    const speed = 0.005; // Animation speed
    
    // Calculate the start and end positions for the helix
    const calculatePhasePosition = (phase: number): number => {
      // Phases are positioned at approximately 24%, 48%, 72%, and 96% of the roadmap section
      const phasePercentage = (phase - 1) / 4;
      return phasePercentage * canvas.height;
    };
    
    const startPosition = calculatePhasePosition(startAtPhase);
    const endPosition = calculatePhasePosition(endAtPhase);
    
    // Track scroll position and calculate progress through roadmap
    const handleScroll = () => {
      // Get the roadmap section
      const roadmapSection = document.querySelector('section:has(.roadmap-phases)') || 
                            document.querySelector('section:nth-of-type(3)');
      
      if (roadmapSection) {
        const rect = roadmapSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate how far we've scrolled through the roadmap section
        // From -1 (section is below viewport) to 1 (section is above viewport)
        let progress = 0;
        
        if (rect.top > viewportHeight) {
          // Section is below viewport
          progress = -1;
        } else if (rect.bottom < 0) {
          // Section is above viewport
          progress = 1;
        } else {
          // Section is partially visible
          // Map position from [bottom of viewport -> top of viewport] to [-1 -> 1]
          progress = 1 - (rect.top + rect.height) / (viewportHeight + rect.height);
        }
        
        // Scale to 0-1 range and apply smoothing
        progressRef.current = Math.max(0, Math.min(1, (progress + 1) / 2));
        scrollRef.current = window.scrollY * 0.001;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    const drawHelix = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const progress = progressRef.current;
      const scrollOffset = scrollRef.current;
      
      // Dynamic parameters based on scroll position
      const dynamicAmplitude = amplitude * (1 + scrollOffset * 0.1);
      const dynamicFrequency = frequency * (1 - scrollOffset * 0.05);
      
      // Calculate visible height based on progress
      const visibleHeight = canvas.height * Math.min(1, progress * 2); // Double the progress rate
      
      // Note: Removed the background gradient that was here
      
      // Enhanced 3D effect with shadows
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
      
      // Draw two helical backbones with enhanced depth, respecting the visible height
      for (let strand = 0; strand < 2; strand++) {
        const strandOffset = strand * Math.PI;
        
        // Draw shadow/glow layer
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        
        for (let y = 0; y < visibleHeight; y += 2) {
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
        
        for (let y = 0; y < visibleHeight; y += 2) {
          const x = centerX + dynamicAmplitude * Math.sin(dynamicFrequency * y + offset + strandOffset);
          
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        
        // Highlight layer for enhanced 3D effect
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
        
        for (let y = 0; y < visibleHeight; y += 2) {
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
      
      // Draw base pairs with enhanced visuals, respecting the visible height
      for (let y = spaceY; y < visibleHeight; y += spaceY) {
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
        
        // Use the base pair position to determine its phase
        const phasePosition = y / canvas.height;
        const phaseIntensity = Math.min(1, phasePosition * 4); // Scale up intensity for early phases
        
        // Create randomized but consistent lengths for each base pair
        const basePosition = Math.floor(y / spaceY);
        const seed = basePosition * 137.5 + 0.1; // Use a simple hash for consistency
        const pseudoRandom = seed - Math.floor(seed);
        const baseLength = 10 + pseudoRandom * 25;
        
        // Alternate between blue and green colors with phase-dependent intensity
        const isBlue = basePosition % 2 === 0;
        
        // Phase-dependent colors - start soft and become more vibrant through phases
        const blueIntensity = 150 + phaseIntensity * 50;
        const greenIntensity = 50 + phaseIntensity * 150;
        
        if (isBlue) {
          ctx.shadowColor = "rgba(0, 100, 255, 0.7)";
          drawNucleotide(x1 + (x2-x1)/4, y, baseLength, `rgba(0, ${blueIntensity}, 255, 0.9)`, "rgba(0, 100, 255, 0.7)");
        } else {
          ctx.shadowColor = "rgba(0, 255, 100, 0.7)";
          drawNucleotide(x1 + (x2-x1)/4, y, baseLength, `rgba(50, 255, ${greenIntensity}, 0.9)`, "rgba(0, 255, 100, 0.7)");
        }
        
        if (!isBlue) {
          ctx.shadowColor = "rgba(0, 100, 255, 0.7)";
          drawNucleotide(x2 - (x2-x1)/4, y, baseLength, `rgba(0, ${blueIntensity}, 255, 0.9)`, "rgba(0, 100, 255, 0.7)");
        } else {
          ctx.shadowColor = "rgba(0, 255, 100, 0.7)";
          drawNucleotide(x2 - (x2-x1)/4, y, baseLength, `rgba(50, 255, ${greenIntensity}, 0.9)`, "rgba(0, 255, 100, 0.7)");
        }
      }
      
      // Slowly rotate the helix
      offset += speed;
      animationRef.current = requestAnimationFrame(drawHelix);
    };
    
    animationRef.current = requestAnimationFrame(drawHelix);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startAtPhase, endAtPhase]);
  
  return (
    <div className={`${className} relative h-full`}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default DNAHelix;
