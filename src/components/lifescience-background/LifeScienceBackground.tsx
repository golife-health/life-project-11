
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
  direction?: 'left-right' | 'right-left' | 'top-bottom' | 'bottom-top' | 'diagonal-1' | 'diagonal-2' | 'random';
  className?: string;
}

const LifeScienceBackground = ({
  type = 'molecules',
  opacity = 0.2,
  speed = 1,
  density = 1,
  direction = 'random',
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
      
      // Reduce the number of elements to 4-5 as requested
      const elementCount = 4; // Fixed small number as requested
      
      switch(type) {
        case 'dna':
          elements = createDNAElements(dimensions.width, dimensions.height, elementCount, colors, direction);
          break;
        case 'molecules':
          elements = createMoleculeElements(dimensions.width, dimensions.height, elementCount, colors, direction);
          break;
        case 'cells':
          elements = createCellElements(dimensions.width, dimensions.height, elementCount, colors, direction);
          break;
        case 'neurons':
          elements = createNeuronElements(dimensions.width, dimensions.height, elementCount, colors, direction);
          break;
        case 'mixed':
          // Create a mix of all element types, but with fewer of each
          elements = [
            ...createDNAElements(dimensions.width, dimensions.height, 1, colors, 'left-right'),
            ...createMoleculeElements(dimensions.width, dimensions.height, 1, colors, 'right-left'),
            ...createCellElements(dimensions.width, dimensions.height, 1, colors, 'top-bottom'),
            ...createNeuronElements(dimensions.width, dimensions.height, 1, colors, 'bottom-top')
          ];
          break;
        default:
          elements = createMoleculeElements(dimensions.width, dimensions.height, elementCount, colors, direction);
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
  }, [type, opacity, speed, density, direction, dimensions.width, dimensions.height]);
  
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
