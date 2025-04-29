
import { useEffect, useRef, useState } from 'react';
import { setupCanvas, getElementColors, AnimationElement } from './utils';
import { createDNAElements } from './DNAElement';
import { createMoleculeElements } from './MoleculeElement';
import { createCellElements } from './CellElement';
import { createNeuronElements } from './NeuronElement';

interface LifeScienceBackgroundProps {
  type?: 'dna' | 'molecules' | 'cells' | 'neurons' | 'mixed';
  opacity?: number;
  speed?: number;
  density?: number;
  className?: string;
}

const LifeScienceBackground = ({
  type = 'molecules',
  opacity = 0.2,
  speed = 1,
  density = 1,
  className = ''
}: LifeScienceBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions with higher resolution for retina displays
    const setCanvasDimensions = () => {
      if (!setupCanvas(canvas, containerRef)) return;
      
      const container = containerRef.current;
      if (!container) return;
      
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      // Only update dimensions state if they've actually changed
      if (width !== dimensions.width || height !== dimensions.height) {
        setDimensions({ width, height });
      }
    };
    
    // Initial setup
    setCanvasDimensions();
    
    // Handle resize events
    const handleResize = () => {
      setCanvasDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions.width, dimensions.height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let elements: AnimationElement[] = [];
    
    // Only create elements if dimensions are valid
    if (dimensions.width > 0 && dimensions.height > 0) {
      // Get theme-adjusted colors
      const colors = getElementColors(opacity);
      
      switch(type) {
        case 'dna':
          elements = createDNAElements(dimensions.width, dimensions.height, Math.floor(8 * density), colors);
          break;
        case 'molecules':
          elements = createMoleculeElements(dimensions.width, dimensions.height, Math.floor(15 * density), colors);
          break;
        case 'cells':
          elements = createCellElements(dimensions.width, dimensions.height, Math.floor(10 * density), colors);
          break;
        case 'neurons':
          elements = createNeuronElements(dimensions.width, dimensions.height, Math.floor(6 * density), colors);
          break;
        case 'mixed':
          // Create a mix of all element types
          elements = [
            ...createDNAElements(dimensions.width, dimensions.height, Math.floor(3 * density), colors),
            ...createMoleculeElements(dimensions.width, dimensions.height, Math.floor(5 * density), colors),
            ...createCellElements(dimensions.width, dimensions.height, Math.floor(3 * density), colors),
            ...createNeuronElements(dimensions.width, dimensions.height, Math.floor(2 * density), colors)
          ];
          break;
        default:
          elements = createMoleculeElements(dimensions.width, dimensions.height, Math.floor(15 * density), colors);
      }
      
      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, dimensions.width, dimensions.height);
        
        elements.forEach(element => {
          element.update(speed);
          element.draw(ctx);
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animate();
    }
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [type, opacity, speed, density, dimensions.width, dimensions.height]);
  
  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
    >
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity }}
      />
    </div>
  );
};

export default LifeScienceBackground;
