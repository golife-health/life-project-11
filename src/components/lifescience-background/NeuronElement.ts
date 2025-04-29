
import { AnimationElement, ElementProps } from './utils';

export function createNeuronElements(
  width: number, 
  height: number, 
  count: number, 
  colors: any
): AnimationElement[] {
  const elements: AnimationElement[] = [];
  
  for (let i = 0; i < count; i++) {
    const neuron = {
      x: Math.random() * width,
      y: Math.random() * height,
      soma: 15 + Math.random() * 20, // Cell body size
      dendrites: 4 + Math.floor(Math.random() * 4),
      axonLength: 80 + Math.random() * 120,
      // Multi-directional velocity
      velocityX: (Math.random() - 0.5) * 0.4,
      velocityY: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      pulses: [] as { position: number, speed: number }[],
      pulseInterval: 50 + Math.random() * 100,
      counter: 0,
      
      update(speed: number) {
        this.x += this.velocityX * speed;
        this.y += this.velocityY * speed;
        this.rotation += this.rotationSpeed * speed;
        
        // Wrap around screen edges
        if (this.x > width + this.axonLength) {
          this.x = -this.axonLength;
        } else if (this.x < -this.axonLength) {
          this.x = width + this.axonLength;
        }
        
        if (this.y > height + this.axonLength) {
          this.y = -this.axonLength;
        } else if (this.y < -this.axonLength) {
          this.y = height + this.axonLength;
        }
        
        // Generate new pulse
        this.counter += speed;
        if (this.counter >= this.pulseInterval) {
          this.counter = 0;
          this.pulses.push({
            position: 0,
            speed: 0.01 + Math.random() * 0.01
          });
        }
        
        // Update pulses
        for (let i = this.pulses.length - 1; i >= 0; i--) {
          this.pulses[i].position += this.pulses[i].speed * speed;
          
          if (this.pulses[i].position >= 1) {
            this.pulses.splice(i, 1);
          }
        }
      },
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Draw dendrites
        for (let i = 0; i < this.dendrites; i++) {
          const angle = Math.PI + (i / this.dendrites) * Math.PI - Math.PI / 2;
          const length = this.soma * (1 + Math.random() * 1.5);
          const endX = Math.cos(angle) * length;
          const endY = Math.sin(angle) * length;
          
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = colors.neuronDendrite;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
          // Dendrite terminals
          ctx.beginPath();
          ctx.arc(endX, endY, 2, 0, Math.PI * 2);
          ctx.fillStyle = colors.neuronTerminal;
          ctx.fill();
        }
        
        // Draw axon
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(this.axonLength, 0);
        ctx.strokeStyle = colors.neuronAxon;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw axon terminals
        const terminals = 3 + Math.floor(Math.random() * 3);
        for (let i = 0; i < terminals; i++) {
          const angle = (i / terminals) * Math.PI - Math.PI / 2;
          const length = this.soma * (0.8 + Math.random() * 1);
          const startX = this.axonLength;
          const endX = startX + Math.cos(angle) * length;
          const endY = Math.sin(angle) * length;
          
          ctx.beginPath();
          ctx.moveTo(startX, 0);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = colors.neuronDendrite;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Terminal buttons
          ctx.beginPath();
          ctx.arc(endX, endY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = colors.neuronTerminal;
          ctx.fill();
        }
        
        // Draw soma (cell body)
        const gradient = ctx.createRadialGradient(
          0, 0, 0,
          0, 0, this.soma
        );
        gradient.addColorStop(0, colors.neuronSoma);
        gradient.addColorStop(1, colors.neuronSomaOuter);
        
        ctx.beginPath();
        ctx.arc(0, 0, this.soma, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw pulses traveling along axon
        this.pulses.forEach(pulse => {
          const pulseX = pulse.position * this.axonLength;
          
          ctx.beginPath();
          ctx.arc(pulseX, 0, 4, 0, Math.PI * 2);
          ctx.fillStyle = colors.neuronPulse;
          ctx.fill();
          
          // Pulse glow
          ctx.beginPath();
          ctx.arc(pulseX, 0, 7, 0, Math.PI * 2);
          const pulseGradient = ctx.createRadialGradient(pulseX, 0, 2, pulseX, 0, 7);
          pulseGradient.addColorStop(0, colors.neuronPulse);
          pulseGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
          ctx.fillStyle = pulseGradient;
          ctx.fill();
        });
        
        ctx.restore();
      },
    };
    
    elements.push(neuron);
  }
  
  return elements;
}
