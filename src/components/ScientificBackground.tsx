
import { useEffect, useRef } from 'react';

const ScientificBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions and DPI
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
    
    // Scientific elements
    class Molecule {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      connections: number[];
      opacity: number;
      
      constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
        this.connections = [];
        this.opacity = 0.1 + Math.random() * 0.2;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges with damping
        if (this.x <= this.radius || this.x >= window.innerWidth - this.radius) {
          this.vx *= -0.8;
          this.x = Math.max(this.radius, Math.min(window.innerWidth - this.radius, this.x));
        }
        
        if (this.y <= this.radius || this.y >= window.innerHeight - this.radius) {
          this.vy *= -0.8;
          this.y = Math.max(this.radius, Math.min(window.innerHeight - this.radius, this.y));
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.4})`;
        ctx.fill();
      }
    }
    
    // Create molecules
    const molecules: Molecule[] = [];
    const moleculeCount = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 20000));
    
    for (let i = 0; i < moleculeCount; i++) {
      const radius = 1 + Math.random() * 2;
      const x = radius + Math.random() * (window.innerWidth - radius * 2);
      const y = radius + Math.random() * (window.innerHeight - radius * 2);
      molecules.push(new Molecule(x, y, radius));
    }
    
    // Create connections between nearby molecules
    for (let i = 0; i < molecules.length; i++) {
      for (let j = i + 1; j < molecules.length; j++) {
        const dx = molecules[i].x - molecules[j].x;
        const dy = molecules[i].y - molecules[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          molecules[i].connections.push(j);
        }
      }
    }
    
    const drawConnections = () => {
      for (let i = 0; i < molecules.length; i++) {
        const molecule = molecules[i];
        
        for (const connectionIndex of molecule.connections) {
          const connectedMolecule = molecules[connectionIndex];
          const dx = molecule.x - connectedMolecule.x;
          const dy = molecule.y - connectedMolecule.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = 0.15 * (1 - distance / 150);
            ctx.beginPath();
            ctx.moveTo(molecule.x, molecule.y);
            ctx.lineTo(connectedMolecule.x, connectedMolecule.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw molecules
      molecules.forEach(molecule => {
        molecule.update();
        molecule.draw(ctx);
      });
      
      // Draw connections
      drawConnections();
      
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
      className="scientific-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default ScientificBackground;
