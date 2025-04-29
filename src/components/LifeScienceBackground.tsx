
import { useEffect, useRef, useState } from 'react';

interface LifeScienceBackgroundProps {
  type?: 'dna' | 'molecules' | 'cells' | 'neurons' | 'mixed';
  opacity?: number;
  speed?: number;
  density?: number;
  className?: string;
}

const LifeScienceBackground = ({
  type = 'molecules',
  opacity = 0.2,
  speed = 1,
  density = 1,
  className = ''
}: LifeScienceBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions with higher resolution for retina displays
    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      const devicePixelRatio = window.devicePixelRatio || 1;
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      
      setDimensions({ width, height });
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Create elements based on type
    let elements: any[] = [];
    
    switch(type) {
      case 'dna':
        elements = createDNAElements(dimensions.width, dimensions.height, Math.floor(8 * density));
        break;
      case 'molecules':
        elements = createMoleculeElements(dimensions.width, dimensions.height, Math.floor(15 * density));
        break;
      case 'cells':
        elements = createCellElements(dimensions.width, dimensions.height, Math.floor(10 * density));
        break;
      case 'neurons':
        elements = createNeuronElements(dimensions.width, dimensions.height, Math.floor(6 * density));
        break;
      case 'mixed':
        // Create a mix of all element types
        elements = [
          ...createDNAElements(dimensions.width, dimensions.height, Math.floor(3 * density)),
          ...createMoleculeElements(dimensions.width, dimensions.height, Math.floor(5 * density)),
          ...createCellElements(dimensions.width, dimensions.height, Math.floor(3 * density)),
          ...createNeuronElements(dimensions.width, dimensions.height, Math.floor(2 * density))
        ];
        break;
      default:
        elements = createMoleculeElements(dimensions.width, dimensions.height, Math.floor(15 * density));
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      elements.forEach(element => {
        element.update(speed);
        element.draw(ctx, opacity);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    if (dimensions.width > 0 && dimensions.height > 0) {
      animate();
    }
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, [type, opacity, speed, density, dimensions]);
  
  // DNA strand elements with multi-directional movement
  function createDNAElements(width: number, height: number, count: number) {
    const elements = [];
    
    for (let i = 0; i < count; i++) {
      const dnaStrand = {
        x: Math.random() * width,
        y: Math.random() * height,
        width: 40 + Math.random() * 80,
        height: 150 + Math.random() * 150,
        baseSpacing: 15,
        twistSpeed: 0.01 + Math.random() * 0.02,
        twistOffset: Math.random() * Math.PI * 2,
        // Multi-directional velocity
        velocityX: (Math.random() - 0.5) * 0.6,
        velocityY: (Math.random() - 0.5) * 0.3,
        
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
        
        draw(ctx: CanvasRenderingContext2D, opacity: number) {
          const baseColors = [
            `rgba(60, 120, 220, ${opacity * 0.9})`,  // Blue (adenine)
            `rgba(40, 180, 120, ${opacity * 0.9})`,  // Green (thymine)
            `rgba(180, 60, 60, ${opacity * 0.9})`,   // Red (guanine)
            `rgba(220, 160, 40, ${opacity * 0.9})`,  // Yellow (cytosine)
          ];
          
          // Draw the two backbone strands
          const backboneColor = `rgba(220, 220, 255, ${opacity * 0.6})`;
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
  
  // Molecule elements with multi-directional movement
  function createMoleculeElements(width: number, height: number, count: number) {
    const elements = [];
    
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
        
        draw(ctx: CanvasRenderingContext2D, opacity: number) {
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
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
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
          const colors = [
            `rgba(100, 150, 255, ${opacity * 0.9})`, // Blue
            `rgba(80, 220, 130, ${opacity * 0.9})`,  // Green
            `rgba(230, 120, 120, ${opacity * 0.9})`, // Red
            `rgba(240, 200, 80, ${opacity * 0.9})`,  // Yellow
          ];
          
          atomPositions.forEach((pos, idx) => {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = colors[idx % colors.length];
            ctx.fill();
            
            // Add glow effect
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(pos.x, pos.y, 3, pos.x, pos.y, 8);
            gradient.addColorStop(0, colors[idx % colors.length]);
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
  
  // Cell elements with multi-directional movement
  function createCellElements(width: number, height: number, count: number) {
    const elements = [];
    
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
        
        draw(ctx: CanvasRenderingContext2D, opacity: number) {
          // Draw cell membrane with pulsating effect
          const pulseAmount = Math.sin(this.pulsate) * 2;
          const currentRadius = this.radius + pulseAmount;
          
          // Cell membrane
          const membraneGradient = ctx.createRadialGradient(
            this.x, this.y, 0, 
            this.x, this.y, currentRadius
          );
          membraneGradient.addColorStop(0.8, `rgba(180, 200, 255, ${opacity * 0.1})`);
          membraneGradient.addColorStop(1, `rgba(180, 200, 255, ${opacity * 0.3})`);
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = membraneGradient;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          // Draw nucleus
          const nucleusGradient = ctx.createRadialGradient(
            this.x, this.y, 0, 
            this.x, this.y, this.nucleusRadius
          );
          nucleusGradient.addColorStop(0, `rgba(100, 120, 200, ${opacity * 0.7})`);
          nucleusGradient.addColorStop(1, `rgba(80, 100, 180, ${opacity * 0.5})`);
          
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
            ctx.fillStyle = `rgba(160, 220, 180, ${opacity * 0.6})`;
            ctx.fill();
          }
        },
      };
      
      elements.push(cell);
    }
    
    return elements;
  }
  
  // Neuron elements with multi-directional movement
  function createNeuronElements(width: number, height: number, count: number) {
    const elements = [];
    
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
        pulses: [],
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
        
        draw(ctx: CanvasRenderingContext2D, opacity: number) {
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
            ctx.strokeStyle = `rgba(200, 200, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
            
            // Dendrite terminals
            ctx.beginPath();
            ctx.arc(endX, endY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 200, 255, ${opacity * 0.5})`;
            ctx.fill();
          }
          
          // Draw axon
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(this.axonLength, 0);
          ctx.strokeStyle = `rgba(200, 200, 255, ${opacity * 0.5})`;
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
            ctx.strokeStyle = `rgba(200, 200, 255, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Terminal buttons
            ctx.beginPath();
            ctx.arc(endX, endY, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 200, 255, ${opacity * 0.5})`;
            ctx.fill();
          }
          
          // Draw soma (cell body)
          const gradient = ctx.createRadialGradient(
            0, 0, 0,
            0, 0, this.soma
          );
          gradient.addColorStop(0, `rgba(150, 150, 240, ${opacity * 0.7})`);
          gradient.addColorStop(1, `rgba(130, 130, 220, ${opacity * 0.3})`);
          
          ctx.beginPath();
          ctx.arc(0, 0, this.soma, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Draw pulses traveling along axon
          this.pulses.forEach(pulse => {
            const pulseX = pulse.position * this.axonLength;
            
            ctx.beginPath();
            ctx.arc(pulseX, 0, 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
            ctx.fill();
            
            // Pulse glow
            ctx.beginPath();
            ctx.arc(pulseX, 0, 7, 0, Math.PI * 2);
            const pulseGradient = ctx.createRadialGradient(pulseX, 0, 2, pulseX, 0, 7);
            pulseGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.6})`);
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
  
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity }}
      />
    </div>
  );
};

export default LifeScienceBackground;
