
import { useEffect, useRef } from 'react';

interface ElementsBackgroundProps {
  opacity?: number;
}

const ElementsBackground = ({ opacity = 0.5 }: ElementsBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Elements for scientific background
    class Element {
      x: number;
      y: number;
      size: number;
      type: string;
      opacity: number;
      rotation: number;
      vx: number;
      vy: number;
      rotationSpeed: number;
      
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = 20 + Math.random() * 40;
        this.type = Math.random() > 0.5 ? 'molecule' : 'symbol';
        this.opacity = 0.05 + Math.random() * 0.1;
        this.rotation = Math.random() * Math.PI * 2;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        
        // Wrap around edges
        if (this.x < -this.size) this.x = window.innerWidth + this.size;
        if (this.x > window.innerWidth + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = window.innerHeight + this.size;
        if (this.y > window.innerHeight + this.size) this.y = -this.size;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        if (this.type === 'molecule') {
          this.drawMolecule(ctx);
        } else {
          this.drawSymbol(ctx);
        }
        
        ctx.restore();
      }
      
      drawMolecule(ctx: CanvasRenderingContext2D) {
        // Draw connecting lines
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        
        const atoms = 3 + Math.floor(Math.random() * 3);
        const centers: {x: number, y: number}[] = [];
        
        // Create atom positions
        for (let i = 0; i < atoms; i++) {
          const angle = (i / atoms) * Math.PI * 2;
          const distance = this.size / 2;
          centers.push({
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance
          });
        }
        
        // Draw connections
        for (let i = 0; i < centers.length; i++) {
          for (let j = i + 1; j < centers.length; j++) {
            ctx.beginPath();
            ctx.moveTo(centers[i].x, centers[i].y);
            ctx.lineTo(centers[j].x, centers[j].y);
            ctx.stroke();
          }
        }
        
        // Draw atoms
        for (const center of centers) {
          ctx.beginPath();
          ctx.arc(center.x, center.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 1.5})`;
          ctx.fill();
        }
      }
      
      drawSymbol(ctx: CanvasRenderingContext2D) {
        ctx.font = `${this.size/2}px monospace`;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Choose scientific symbols
        const symbols = ['Σ', 'Δ', 'Ω', 'π', '∞', '∫', '√', '±', '≈', '≠', '∝', '∇', '∑'];
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        ctx.fillText(symbol, 0, 0);
      }
    }
    
    // Create elements
    const elements: Element[] = [];
    const elementCount = Math.min(25, Math.floor(window.innerWidth * window.innerHeight / 40000));
    
    for (let i = 0; i < elementCount; i++) {
      elements.push(new Element());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw elements
      elements.forEach(element => {
        element.update();
        element.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="elements-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: opacity * 2 // Double the opacity to make it more visible
      }}
    />
  );
};

export default ElementsBackground;
