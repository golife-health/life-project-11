
import React, { useEffect, useRef } from 'react';

interface FlowingElement {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  type: 'dna' | 'molecule' | 'cell' | 'neuron';
  opacity: number;
  depth: number;
  hue: number;
}

interface FlowingLifeScienceElementsProps {
  count?: number;
  opacity?: number;
  speed?: number;
  blur?: number;
  className?: string;
}

const FlowingLifeScienceElements: React.FC<FlowingLifeScienceElementsProps> = ({
  count = 15,
  opacity = 0.25,
  speed = 0.5,
  blur = 3,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const elementsRef = useRef<FlowingElement[]>([]);
  const animationRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize elements
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing elements
    elementsRef.current = [];
    
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    
    // Create random elements
    for (let i = 0; i < count; i++) {
      const elementType = ['dna', 'molecule', 'cell', 'neuron'][Math.floor(Math.random() * 4)] as FlowingElement['type'];
      const elementSize = getRandomSize(elementType);
      const elementDepth = 0.3 + Math.random() * 0.7; // 0.3 to 1.0
      
      elementsRef.current.push({
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        size: elementSize,
        speed: (0.2 + Math.random() * 0.8) * speed, // Base speed adjusted by prop
        angle: Math.random() * Math.PI * 2,
        type: elementType,
        opacity: (0.3 + Math.random() * 0.7) * opacity, // Base opacity adjusted by prop
        depth: elementDepth,
        hue: Math.random() * 60 - 30 // Slight color variation (-30 to +30)
      });
    }
    
    // Start animation
    startAnimation();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [count, opacity, speed]);
  
  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Set canvas size with device pixel ratio for sharpness
      canvasRef.current.width = width * dpr;
      canvasRef.current.height = height * dpr;
      canvasRef.current.style.width = `${width}px`;
      canvasRef.current.style.height = `${height}px`;
      
      // Scale the context to account for the device pixel ratio
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const startAnimation = () => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    
    const animate = () => {
      ctx.clearRect(0, 0, containerWidth, containerHeight);
      
      // Sort elements by depth to create 3D effect
      const sortedElements = [...elementsRef.current].sort((a, b) => a.depth - b.depth);
      
      // Draw each element
      sortedElements.forEach(element => {
        // Update position
        element.x += Math.cos(element.angle) * element.speed;
        element.y += Math.sin(element.angle) * element.speed;
        
        // Wrap around edges
        if (element.x < -100) element.x = containerWidth + 100;
        if (element.x > containerWidth + 100) element.x = -100;
        if (element.y < -100) element.y = containerHeight + 100;
        if (element.y > containerHeight + 100) element.y = -100;
        
        // Draw element based on type
        ctx.globalAlpha = element.opacity;
        ctx.filter = `blur(${blur * (1 - element.depth * 0.5)}px)`;
        
        // Scale based on depth to create 3D effect
        const scaledSize = element.size * element.depth;
        
        // Apply grey/ash color palette instead of blue
        // Use a monochromatic grey palette with varying brightness based on depth
        const greyValue = 130 + Math.floor(element.depth * 70); // 130-200 range for light to mid grey
        ctx.fillStyle = `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${element.opacity})`;
        ctx.strokeStyle = `rgba(${greyValue + 20}, ${greyValue + 20}, ${greyValue + 20}, ${element.opacity * 1.2})`;
        
        switch (element.type) {
          case 'dna':
            drawDNA(ctx, element.x, element.y, scaledSize, element.depth);
            break;
          case 'molecule':
            drawMolecule(ctx, element.x, element.y, scaledSize, element.depth);
            break;
          case 'cell':
            drawCell(ctx, element.x, element.y, scaledSize, element.depth);
            break;
          case 'neuron':
            drawNeuron(ctx, element.x, element.y, scaledSize, element.depth);
            break;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
  };
  
  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
    >
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

// Helper functions for drawing the different element types
function getRandomSize(type: string): number {
  switch (type) {
    case 'dna': return 40 + Math.random() * 60;
    case 'molecule': return 20 + Math.random() * 40;
    case 'cell': return 30 + Math.random() * 50;
    case 'neuron': return 35 + Math.random() * 55;
    default: return 30;
  }
}

function drawDNA(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, depth: number) {
  const width = size * 0.5;
  const height = size;
  const rungs = 7;
  
  ctx.beginPath();
  
  // Draw helix strands
  for (let i = 0; i <= height; i += height/20) {
    const offsetX1 = Math.sin(i * 0.2) * width/2;
    const offsetX2 = -Math.sin(i * 0.2) * width/2;
    
    const pointSize = 2 * depth;
    
    // Left strand
    ctx.fillRect(x + offsetX1 - pointSize/2, y + i - pointSize/2, pointSize, pointSize);
    
    // Right strand
    ctx.fillRect(x + offsetX2 - pointSize/2, y + i - pointSize/2, pointSize, pointSize);
    
    // Draw rungs at intervals
    if (i % (height/rungs) < height/20) {
      ctx.beginPath();
      ctx.moveTo(x + offsetX1, y + i);
      ctx.lineTo(x + offsetX2, y + i);
      ctx.lineWidth = 1 * depth;
      ctx.stroke();
    }
  }
}

function drawMolecule(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, depth: number) {
  const atomCount = 3 + Math.floor(Math.random() * 4);
  const atoms: {x: number, y: number}[] = [];
  
  // Create atoms in a geometric pattern
  for (let i = 0; i < atomCount; i++) {
    const angle = (i / atomCount) * Math.PI * 2;
    atoms.push({
      x: x + Math.cos(angle) * size * 0.5,
      y: y + Math.sin(angle) * size * 0.5
    });
  }
  
  // Draw bonds between atoms
  ctx.beginPath();
  for (let i = 0; i < atomCount; i++) {
    for (let j = i + 1; j < atomCount; j++) {
      ctx.moveTo(atoms[i].x, atoms[i].y);
      ctx.lineTo(atoms[j].x, atoms[j].y);
    }
  }
  ctx.lineWidth = 1 * depth;
  ctx.stroke();
  
  // Draw atoms
  atoms.forEach(atom => {
    ctx.beginPath();
    ctx.arc(atom.x, atom.y, 4 * depth, 0, Math.PI * 2);
    ctx.fill();
    
    // Add grey glow effect
    const greyValue = 150 + Math.floor(depth * 60);
    const gradient = ctx.createRadialGradient(atom.x, atom.y, 1 * depth, atom.x, atom.y, 8 * depth);
    gradient.addColorStop(0, `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${0.5 * depth})`);
    gradient.addColorStop(1, 'rgba(180, 180, 180, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(atom.x, atom.y, 8 * depth, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawCell(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, depth: number) {
  // Cell membrane
  ctx.beginPath();
  ctx.arc(x, y, size/2, 0, Math.PI * 2);
  const greyValue = 150 + Math.floor(depth * 60);
  const gradient = ctx.createRadialGradient(
    x, y, size/4,
    x, y, size/2
  );
  gradient.addColorStop(0, `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${0.2 * depth})`);
  gradient.addColorStop(1, `rgba(${greyValue - 20}, ${greyValue - 20}, ${greyValue - 20}, ${0.4 * depth})`);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.lineWidth = 1 * depth;
  ctx.stroke();
  
  // Nucleus
  ctx.beginPath();
  ctx.arc(x, y, size/5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${greyValue - 30}, ${greyValue - 30}, ${greyValue - 30}, ${0.5 * depth})`;
  ctx.fill();
  
  // Organelles
  const organelleCount = 3 + Math.floor(Math.random() * 5);
  for (let i = 0; i < organelleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = (size/4) * Math.random();
    const organelleX = x + Math.cos(angle) * distance;
    const organelleY = y + Math.sin(angle) * distance;
    const organelleSize = 2 + Math.random() * 4;
    
    ctx.beginPath();
    ctx.arc(organelleX, organelleY, organelleSize * depth, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${greyValue + 10}, ${greyValue + 10}, ${greyValue + 10}, ${0.6 * depth})`;
    ctx.fill();
  }
}

function drawNeuron(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, depth: number) {
  // Cell body (soma)
  ctx.beginPath();
  ctx.arc(x, y, size/6, 0, Math.PI * 2);
  const greyValue = 160 + Math.floor(depth * 50);
  const gradient = ctx.createRadialGradient(
    x, y, size/12,
    x, y, size/6
  );
  gradient.addColorStop(0, `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${0.5 * depth})`);
  gradient.addColorStop(1, `rgba(${greyValue - 30}, ${greyValue - 30}, ${greyValue - 30}, ${0.3 * depth})`);
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Axon
  const axonLength = size * 0.7;
  const axonAngle = Math.random() * Math.PI * 2;
  const axonEndX = x + Math.cos(axonAngle) * axonLength;
  const axonEndY = y + Math.sin(axonAngle) * axonLength;
  
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(axonEndX, axonEndY);
  ctx.lineWidth = 1.5 * depth;
  ctx.stroke();
  
  // Dendrites
  const dendriteCount = 3 + Math.floor(Math.random() * 4);
  for (let i = 0; i < dendriteCount; i++) {
    const angle = axonAngle + Math.PI - 0.5 + Math.random();
    const length = size * (0.3 + Math.random() * 0.4);
    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.lineWidth = 1 * depth;
    ctx.stroke();
    
    // Dendrite branches
    const branchCount = Math.floor(Math.random() * 3);
    for (let j = 0; j < branchCount; j++) {
      const branchAngle = angle - 0.5 + Math.random();
      const branchLength = length * 0.4 * Math.random();
      const branchEndX = endX + Math.cos(branchAngle) * branchLength;
      const branchEndY = endY + Math.sin(branchAngle) * branchLength;
      
      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(branchEndX, branchEndY);
      ctx.lineWidth = 0.5 * depth;
      ctx.stroke();
    }
  }
  
  // Terminal buttons at axon end
  const terminalCount = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < terminalCount; i++) {
    const angle = axonAngle - 0.3 + Math.random() * 0.6;
    const length = size * 0.2 * Math.random();
    const terminalX = axonEndX + Math.cos(angle) * length;
    const terminalY = axonEndY + Math.sin(angle) * length;
    
    ctx.beginPath();
    ctx.moveTo(axonEndX, axonEndY);
    ctx.lineTo(terminalX, terminalY);
    ctx.lineWidth = 0.8 * depth;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(terminalX, terminalY, 2 * depth, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default FlowingLifeScienceElements;
