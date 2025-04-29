
import { AnimationElement, ElementProps } from './utils';

export function createMoleculeElements(
  width: number, 
  height: number, 
  count: number, 
  colors: any
): AnimationElement[] {
  const elements: AnimationElement[] = [];
  
  for (let i = 0; i < count; i++) {
    const molecule = {
      x: Math.random() * width,
      y: Math.random() * height,
      size: 20 + Math.random() * 50,
      atoms: 3 + Math.floor(Math.random() * 4),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      // Multi-directional velocity
      velocityX: (Math.random() - 0.5) * 0.7,
      velocityY: (Math.random() - 0.5) * 0.7,
      
      update(speed: number) {
        this.x += this.velocityX * speed;
        this.y += this.velocityY * speed;
        this.rotation += this.rotationSpeed * speed;
        
        // Wrap around screen edges
        if (this.x > width + this.size) {
          this.x = -this.size;
        } else if (this.x < -this.size) {
          this.x = width + this.size;
        }
        
        if (this.y > height + this.size) {
          this.y = -this.size;
        } else if (this.y < -this.size) {
          this.y = height + this.size;
        }
      },
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Generate atom positions
        const atomPositions = [];
        for (let i = 0; i < this.atoms; i++) {
          const angle = (i / this.atoms) * Math.PI * 2;
          atomPositions.push({
            x: Math.cos(angle) * this.size / 2,
            y: Math.sin(angle) * this.size / 2,
          });
        }
        
        // Draw bonds between atoms
        ctx.strokeStyle = colors.moleculeBonds;
        ctx.lineWidth = 1;
        
        for (let i = 0; i < atomPositions.length; i++) {
          for (let j = i + 1; j < atomPositions.length; j++) {
            ctx.beginPath();
            ctx.moveTo(atomPositions[i].x, atomPositions[i].y);
            ctx.lineTo(atomPositions[j].x, atomPositions[j].y);
            ctx.stroke();
          }
        }
        
        // Draw atoms
        const atomColors = colors.moleculeAtoms;
        
        atomPositions.forEach((pos, idx) => {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2);
          ctx.fillStyle = atomColors[idx % atomColors.length];
          ctx.fill();
          
          // Add glow effect
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(pos.x, pos.y, 3, pos.x, pos.y, 8);
          gradient.addColorStop(0, atomColors[idx % atomColors.length]);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
        });
        
        ctx.restore();
      },
    };
    
    elements.push(molecule);
  }
  
  return elements;
}
