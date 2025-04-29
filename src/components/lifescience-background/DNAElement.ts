
import { AnimationElement, ElementProps, getDirectionalVelocity } from './utils';

export function createDNAElements(
  width: number, 
  height: number, 
  count: number, 
  colors: any,
  direction: string = 'random'
): AnimationElement[] {
  const elements: AnimationElement[] = [];
  const velocity = getDirectionalVelocity(direction);
  
  for (let i = 0; i < count; i++) {
    const dnaStrand = {
      x: Math.random() * width,
      y: Math.random() * height,
      width: 40 + Math.random() * 80,
      height: 150 + Math.random() * 150,
      baseSpacing: 15,
      twistSpeed: 0.01 + Math.random() * 0.02,
      twistOffset: Math.random() * Math.PI * 2,
      // Use directional velocity
      velocityX: velocity.vx,
      velocityY: velocity.vy,
      
      update(speed: number) {
        this.x += this.velocityX * speed;
        this.y += this.velocityY * speed;
        this.twistOffset += this.twistSpeed * speed;
        
        // Wrap around screen edges
        if (this.x > width + this.width) {
          this.x = -this.width;
        } else if (this.x < -this.width) {
          this.x = width + this.width;
        }
        
        if (this.y > height + this.height) {
          this.y = -this.height;
        } else if (this.y < -this.height) {
          this.y = height + this.height;
        }
      },
      
      draw(ctx: CanvasRenderingContext2D) {
        const baseColors = colors.dnaBase;
        
        // Draw the two backbone strands
        const backboneColor = colors.dnaBackbone;
        const centerX = this.x;
        const bases = Math.floor(this.height / this.baseSpacing);
        
        for (let i = 0; i < bases; i++) {
          const y = this.y + i * this.baseSpacing;
          const twist = Math.sin(i * 0.4 + this.twistOffset);
          const leftX = centerX + twist * this.width * 0.5;
          const rightX = centerX - twist * this.width * 0.5;
          
          // Base pairs
          const colorIndex = i % 4;
          ctx.beginPath();
          ctx.moveTo(leftX, y);
          ctx.lineTo(rightX, y);
          ctx.strokeStyle = baseColors[colorIndex];
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Backbone nodes
          ctx.beginPath();
          ctx.arc(leftX, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = backboneColor;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(rightX, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = backboneColor;
          ctx.fill();
        }
      },
    };
    
    elements.push(dnaStrand);
  }
  
  return elements;
}
