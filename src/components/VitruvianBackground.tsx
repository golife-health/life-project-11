
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
      
      constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.progress = 0;
        this.targetProgress = Math.random();
        this.speed = 0.001 + Math.random() * 0.002;
        this.opacity = 0.1 + Math.random() * 0.15;
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
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 0.5;
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
      
      constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.opacity = 0.05 + Math.random() * 0.1;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
    
    // Create sketch lines for vitruvian man inspired drawing
    const createSketchElements = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const size = Math.min(canvas.width, canvas.height) * 0.6;
      const halfSize = size / 2;
      
      const lines: SketchLine[] = [];
      const circles: Circle[] = [];
      
      // Create circles
      circles.push(new Circle(centerX, centerY, halfSize * 0.9));
      circles.push(new Circle(centerX, centerY, halfSize * 0.5));
      
      // Create square
      const squareSize = halfSize * 1.6;
      lines.push(new SketchLine(centerX - squareSize, centerY - squareSize, centerX + squareSize, centerY - squareSize));
      lines.push(new SketchLine(centerX + squareSize, centerY - squareSize, centerX + squareSize, centerY + squareSize));
      lines.push(new SketchLine(centerX + squareSize, centerY + squareSize, centerX - squareSize, centerY + squareSize));
      lines.push(new SketchLine(centerX - squareSize, centerY + squareSize, centerX - squareSize, centerY - squareSize));
      
      // Create anatomical sketch lines
      // Body centerline
      lines.push(new SketchLine(centerX, centerY - halfSize * 0.8, centerX, centerY + halfSize * 0.8));
      
      // Head circle
      const headRadius = halfSize * 0.2;
      circles.push(new Circle(centerX, centerY - halfSize * 0.6, headRadius));
      
      // Arms
      const shoulderY = centerY - halfSize * 0.3;
      const armLength = halfSize * 0.7;
      
      // Left arm
      lines.push(new SketchLine(centerX, shoulderY, centerX - armLength * 0.5, shoulderY - armLength * 0.1));
      lines.push(new SketchLine(centerX - armLength * 0.5, shoulderY - armLength * 0.1, centerX - armLength, shoulderY));
      
      // Right arm
      lines.push(new SketchLine(centerX, shoulderY, centerX + armLength * 0.5, shoulderY - armLength * 0.1));
      lines.push(new SketchLine(centerX + armLength * 0.5, shoulderY - armLength * 0.1, centerX + armLength, shoulderY));
      
      // Legs
      const hipY = centerY + halfSize * 0.1;
      const legLength = halfSize * 0.7;
      
      // Left leg
      lines.push(new SketchLine(centerX, hipY, centerX - legLength * 0.5, hipY + legLength * 0.8));
      lines.push(new SketchLine(centerX - legLength * 0.5, hipY + legLength * 0.8, centerX - legLength * 0.3, hipY + legLength));
      
      // Right leg
      lines.push(new SketchLine(centerX, hipY, centerX + legLength * 0.5, hipY + legLength * 0.8));
      lines.push(new SketchLine(centerX + legLength * 0.5, hipY + legLength * 0.8, centerX + legLength * 0.3, hipY + legLength));
      
      // Additional anatomical golden ratio lines
      lines.push(new SketchLine(centerX - squareSize, centerY, centerX + squareSize, centerY));
      lines.push(new SketchLine(centerX, centerY - squareSize, centerX, centerY + squareSize));
      
      // Create more lines for different positions of arms and legs (vitruvian man style)
      // Extended arms
      lines.push(new SketchLine(centerX, shoulderY, centerX - armLength, shoulderY - armLength * 0.5));
      lines.push(new SketchLine(centerX, shoulderY, centerX + armLength, shoulderY - armLength * 0.5));
      
      // Extended legs
      lines.push(new SketchLine(centerX, hipY, centerX - legLength * 0.7, hipY + legLength));
      lines.push(new SketchLine(centerX, hipY, centerX + legLength * 0.7, hipY + legLength));
      
      return { lines, circles };
    };
    
    const { lines, circles } = createSketchElements();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
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
        opacity: 0.6
      }}
    />
  );
};

export default VitruvianBackground;
