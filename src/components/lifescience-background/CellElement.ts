
import { AnimationElement, ElementProps } from './utils';

export function createCellElements(
  width: number, 
  height: number, 
  count: number, 
  colors: any
): AnimationElement[] {
  const elements: AnimationElement[] = [];
  
  for (let i = 0; i < count; i++) {
    const cell = {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 25 + Math.random() * 40,
      nucleusRadius: 10 + Math.random() * 8,
      // Multi-directional velocity
      velocityX: (Math.random() - 0.5) * 0.5,
      velocityY: (Math.random() - 0.5) * 0.5,
      organelles: Math.floor(3 + Math.random() * 6),
      pulsate: Math.random() * Math.PI * 2,
      pulsateSpeed: 0.02 + Math.random() * 0.02,
      
      update(speed: number) {
        this.x += this.velocityX * speed;
        this.y += this.velocityY * speed;
        this.pulsate += this.pulsateSpeed * speed;
        
        // Wrap around screen edges
        if (this.x > width + this.radius * 2) {
          this.x = -this.radius * 2;
        } else if (this.x < -this.radius * 2) {
          this.x = width + this.radius * 2;
        }
        
        if (this.y > height + this.radius * 2) {
          this.y = -this.radius * 2;
        } else if (this.y < -this.radius * 2) {
          this.y = height + this.radius * 2;
        }
      },
      
      draw(ctx: CanvasRenderingContext2D) {
        // Draw cell membrane with pulsating effect
        const pulseAmount = Math.sin(this.pulsate) * 2;
        const currentRadius = this.radius + pulseAmount;
        
        // Cell membrane
        const membraneGradient = ctx.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, currentRadius
        );
        membraneGradient.addColorStop(0.8, colors.cellMembrane);
        membraneGradient.addColorStop(1, colors.cellMembraneOuter);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = membraneGradient;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, 0.5)`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Draw nucleus
        const nucleusGradient = ctx.createRadialGradient(
          this.x, this.y, 0, 
          this.x, this.y, this.nucleusRadius
        );
        nucleusGradient.addColorStop(0, colors.cellNucleusInner);
        nucleusGradient.addColorStop(1, colors.cellNucleusOuter);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.nucleusRadius, 0, Math.PI * 2);
        ctx.fillStyle = nucleusGradient;
        ctx.fill();
        
        // Draw organelles
        for (let i = 0; i < this.organelles; i++) {
          const angle = (i / this.organelles) * Math.PI * 2;
          const distance = this.radius * 0.5;
          const x = this.x + Math.cos(angle) * distance;
          const y = this.y + Math.sin(angle) * distance;
          const organelleSize = 3 + Math.random() * 5;
          
          ctx.beginPath();
          ctx.arc(x, y, organelleSize, 0, Math.PI * 2);
          ctx.fillStyle = colors.cellOrganelles;
          ctx.fill();
        }
      },
    };
    
    elements.push(cell);
  }
  
  return elements;
}
