
import { useEffect, useRef } from 'react';

const VitruvianBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create sketch elements
    class SketchLine {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      progress: number;
      targetProgress: number;
      speed: number;
      opacity: number;
      lineWidth: number;
      
      constructor(x1: number, y1: number, x2: number, y2: number, lineWidth = 0.5) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.progress = 0;
        this.targetProgress = Math.random();
        this.speed = 0.001 + Math.random() * 0.002;
        this.opacity = 0.4 + Math.random() * 0.2; // Increased base opacity
        this.lineWidth = lineWidth * 1.5; // Increased line width for better visibility
      }
      
      update() {
        if (this.progress < this.targetProgress) {
          this.progress += this.speed;
          if (this.progress > this.targetProgress) {
            this.progress = this.targetProgress;
          }
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        if (this.progress <= 0) return;
        
        const currentX2 = this.x1 + (this.x2 - this.x1) * this.progress;
        const currentY2 = this.y1 + (this.y2 - this.y1) * this.progress;
        
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(currentX2, currentY2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`; // Changed to white for maximum contrast
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
      }
      
      reset() {
        if (Math.random() < 0.01) {
          this.progress = 0;
          this.targetProgress = 0.3 + Math.random() * 0.7;
        }
      }
    }
    
    class Circle {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      lineWidth: number;
      
      constructor(x: number, y: number, radius: number, lineWidth = 0.5) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.opacity = 0.4 + Math.random() * 0.2; // Increased base opacity
        this.lineWidth = lineWidth * 1.5; // Increased line width
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`; // Changed to white for maximum contrast
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
      }
    }
    
    // Create sketch lines for vitruvian man inspired drawing
    const createSketchElements = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.8; // Increased size slightly
      const halfSize = size / 2;
      
      const lines: SketchLine[] = [];
      const circles: Circle[] = [];
      
      // Create circles - main circle and square
      circles.push(new Circle(centerX, centerY, halfSize * 0.9, 1.2)); // Outer circle with thicker line
      circles.push(new Circle(centerX, centerY, halfSize * 0.5, 1)); // Inner circle with thicker line
      
      // Create square
      const squareSize = halfSize * 1.6;
      lines.push(new SketchLine(centerX - squareSize/2, centerY - squareSize/2, centerX + squareSize/2, centerY - squareSize/2, 1.2));
      lines.push(new SketchLine(centerX + squareSize/2, centerY - squareSize/2, centerX + squareSize/2, centerY + squareSize/2, 1.2));
      lines.push(new SketchLine(centerX + squareSize/2, centerY + squareSize/2, centerX - squareSize/2, centerY + squareSize/2, 1.2));
      lines.push(new SketchLine(centerX - squareSize/2, centerY + squareSize/2, centerX - squareSize/2, centerY - squareSize/2, 1.2));
      
      // Add diagonal corner lines (like in Da Vinci's drawing)
      lines.push(new SketchLine(centerX - squareSize/2, centerY - squareSize/2, centerX + squareSize/2, centerY + squareSize/2, 0.8));
      lines.push(new SketchLine(centerX + squareSize/2, centerY - squareSize/2, centerX - squareSize/2, centerY + squareSize/2, 0.8));
      
      // Create anatomical sketch lines
      // Body centerline
      lines.push(new SketchLine(centerX, centerY - halfSize * 0.8, centerX, centerY + halfSize * 0.8, 1.2));
      
      // Head circle
      const headRadius = halfSize * 0.18;
      circles.push(new Circle(centerX, centerY - halfSize * 0.6, headRadius, 1.2));
      
      // Facial features - subtly indicated
      const faceY = centerY - halfSize * 0.6;
      lines.push(new SketchLine(centerX - headRadius/2, faceY - headRadius/4, centerX + headRadius/2, faceY - headRadius/4, 0.6)); // Eyebrow line
      lines.push(new SketchLine(centerX - headRadius/3, faceY, centerX + headRadius/3, faceY, 0.6)); // Nose
      lines.push(new SketchLine(centerX - headRadius/2, faceY + headRadius/3, centerX + headRadius/2, faceY + headRadius/3, 0.6)); // Mouth
      
      // Arms in T position (like Vitruvian man)
      const shoulderY = centerY - halfSize * 0.3;
      const armLength = halfSize * 0.7;
      
      // Left arm
      lines.push(new SketchLine(centerX - 5, shoulderY, centerX - armLength - 5, shoulderY, 1.2));
      
      // Right arm
      lines.push(new SketchLine(centerX + 5, shoulderY, centerX + armLength + 5, shoulderY, 1.2));
      
      // Add hands
      lines.push(new SketchLine(centerX - armLength - 5, shoulderY, centerX - armLength - 15, shoulderY - 10, 0.8)); // Left fingers
      lines.push(new SketchLine(centerX - armLength - 5, shoulderY, centerX - armLength - 15, shoulderY + 10, 0.8));
      
      lines.push(new SketchLine(centerX + armLength + 5, shoulderY, centerX + armLength + 15, shoulderY - 10, 0.8)); // Right fingers
      lines.push(new SketchLine(centerX + armLength + 5, shoulderY, centerX + armLength + 15, shoulderY + 10, 0.8));
      
      // Torso details
      lines.push(new SketchLine(centerX - halfSize * 0.2, shoulderY, centerX - halfSize * 0.3, centerY, 0.8)); // Left side
      lines.push(new SketchLine(centerX + halfSize * 0.2, shoulderY, centerX + halfSize * 0.3, centerY, 0.8)); // Right side
      
      // Hip line
      const hipY = centerY + halfSize * 0.1;
      lines.push(new SketchLine(centerX - halfSize * 0.3, hipY, centerX + halfSize * 0.3, hipY, 1.2));
      
      // Legs
      const legLength = halfSize * 0.7;
      
      // Left leg
      lines.push(new SketchLine(centerX - halfSize * 0.1, hipY, centerX - halfSize * 0.3, hipY + legLength, 1.2));
      
      // Right leg
      lines.push(new SketchLine(centerX + halfSize * 0.1, hipY, centerX + halfSize * 0.3, hipY + legLength, 1.2));
      
      // Feet
      lines.push(new SketchLine(centerX - halfSize * 0.3, hipY + legLength, centerX - halfSize * 0.4, hipY + legLength + 10, 0.8));
      lines.push(new SketchLine(centerX + halfSize * 0.3, hipY + legLength, centerX + halfSize * 0.4, hipY + legLength + 10, 0.8));
      
      // Extended position arms (Vitruvian man extended pose)
      // Diagonal arms
      const armAngle = Math.PI / 4; // 45 degrees
      const extArmX = Math.cos(armAngle) * armLength;
      const extArmY = Math.sin(armAngle) * armLength;
      
      lines.push(new SketchLine(centerX, shoulderY, centerX - extArmX, shoulderY - extArmY, 0.8)); // Upper left
      lines.push(new SketchLine(centerX, shoulderY, centerX + extArmX, shoulderY - extArmY, 0.8)); // Upper right
      
      // Extended legs (Vitruvian man spread legs)
      const legAngle = Math.PI / 6; // 30 degrees
      const extLegX = Math.sin(legAngle) * legLength;
      const extLegY = Math.cos(legAngle) * legLength;
      
      lines.push(new SketchLine(centerX, hipY, centerX - extLegX, hipY + extLegY, 0.8)); // Extended left leg
      lines.push(new SketchLine(centerX, hipY, centerX + extLegX, hipY + extLegY, 0.8)); // Extended right leg
      
      // Add some anatomical detail lines
      lines.push(new SketchLine(centerX, shoulderY, centerX, shoulderY - headRadius * 2, 0.8)); // Neck
      lines.push(new SketchLine(centerX - 10, centerY - halfSize * 0.1, centerX + 10, centerY - halfSize * 0.1, 0.8)); // Navel line
      
      // Add text-like lines to mimic Da Vinci's notes (just decorative)
      const noteStartX = centerX - halfSize * 0.9;
      const noteStartY = centerY - halfSize * 0.9;
      for (let i = 0; i < 8; i++) {
        lines.push(new SketchLine(noteStartX, noteStartY + i * 8, noteStartX + Math.random() * 120, noteStartY + i * 8, 0.6));
      }
      
      const noteStartX2 = centerX + halfSize * 0.5;
      const noteStartY2 = centerY + halfSize * 0.7;
      for (let i = 0; i < 6; i++) {
        lines.push(new SketchLine(noteStartX2, noteStartY2 + i * 8, noteStartX2 + Math.random() * 100, noteStartY2 + i * 8, 0.6));
      }
      
      return { lines, circles };
    };
    
    const { lines, circles } = createSketchElements();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Make sure background is completely transparent to show page content behind
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw circles
      circles.forEach(circle => {
        circle.draw(ctx);
      });
      
      // Update and draw lines
      lines.forEach(line => {
        line.update();
        line.draw(ctx);
        line.reset();
      });
      
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      setCanvasDimensions();
      const newElements = createSketchElements();
      lines.splice(0, lines.length, ...newElements.lines);
      circles.splice(0, circles.length, ...newElements.circles);
    });
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="vitruvian-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 1  // Full opacity
      }}
    />
  );
};

export default VitruvianBackground;
