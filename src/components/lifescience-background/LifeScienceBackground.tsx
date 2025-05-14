
import { useState, useEffect, useRef } from 'react';
import { createDNAElements } from './DNAElement';
import { createMoleculeElements } from './MoleculeElement';
import { createNeuronElements } from './NeuronElement';
import { createCellElements } from './CellElement';
import { getElementColors } from './utils';

interface LifeScienceBackgroundProps {
  type?: 'dna' | 'molecules' | 'neurons' | 'cells' | 'mixed';
  opacity?: number;
  speed?: number;
  density?: number;
  direction?: 'left-right' | 'right-left' | 'top-bottom' | 'bottom-top' | 'diagonal-1' | 'diagonal-2';
}

const LifeScienceBackground = ({
  type = 'dna',
  opacity = 0.5,
  speed = 1,
  density = 1,
  direction = 'left-right',
}: LifeScienceBackgroundProps) => {
  const [elements, setElements] = useState<JSX.Element[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Setup canvas and animation
    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;
    if (!containerRef.current) return;
    
    containerRef.current.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      if (!containerRef.current || !canvas) return;
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create elements based on type
    const colors = getElementColors(opacity);
    const width = canvas.width;
    const height = canvas.height;
    const count = Math.floor(density * 10);
    
    let animationElements: any[] = [];
    
    // Mixed type will use a variety of elements
    if (type === 'mixed') {
      // Add a mix of different element types
      animationElements = [
        ...createDNAElements(width, height, Math.floor(count/4), colors, direction),
        ...createMoleculeElements(width, height, Math.floor(count/4), colors, direction),
        ...createNeuronElements(width, height, Math.floor(count/4), colors, direction),
        ...createCellElements(width, height, Math.floor(count/4), colors, direction)
      ];
    } else {
      // Create specified element type
      switch (type) {
        case 'dna':
          animationElements = createDNAElements(width, height, count, colors, direction);
          break;
        case 'molecules':
          animationElements = createMoleculeElements(width, height, count, colors, direction);
          break;
        case 'neurons':
          animationElements = createNeuronElements(width, height, count, colors, direction);
          break;
        case 'cells':
          animationElements = createCellElements(width, height, count, colors, direction);
          break;
      }
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      animationElements.forEach(element => {
        element.update(speed);
        element.draw(ctx);
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (containerRef.current && canvas) {
        containerRef.current.removeChild(canvas);
      }
    };
  }, [type, opacity, speed, density, direction]);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity: 1 }} // We control opacity through the element colors
    />
  );
};

export default LifeScienceBackground;
