
import { useEffect, useRef } from 'react';

const NeuronBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions with higher resolution for retina displays
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
    
    // Neuron class
    class Neuron {
      x: number;
      y: number;
      size: number;
      connections: Neuron[];
      pulses: Pulse[];
      maxConnections: number;
      
      constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.connections = [];
        this.pulses = [];
        this.maxConnections = 3 + Math.floor(Math.random() * 3); // 3-5 connections
      }
      
      connectTo(neuron: Neuron) {
        if (this.connections.length < this.maxConnections && !this.connections.includes(neuron)) {
          this.connections.push(neuron);
          return true;
        }
        return false;
      }
      
      createPulse() {
        if (this.connections.length > 0 && Math.random() < 0.002) {
          const targetIndex = Math.floor(Math.random() * this.connections.length);
          const target = this.connections[targetIndex];
          this.pulses.push(new Pulse(this, target));
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        // Draw neuron cell body
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fill();
        
        // Draw connections (dendrites and axons)
        this.connections.forEach(neuron => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(neuron.x, neuron.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });
        
        // Update and draw pulses
        for (let i = this.pulses.length - 1; i >= 0; i--) {
          const pulse = this.pulses[i];
          pulse.update();
          pulse.draw(ctx);
          
          if (pulse.isDone()) {
            this.pulses.splice(i, 1);
            // When a pulse reaches its target, potentially create a new pulse from the target
            if (Math.random() < 0.3) {
              pulse.target.createPulse();
            }
          }
        }
      }
      
      update() {
        this.createPulse();
      }
    }
    
    // Pulse class (signals traveling between neurons)
    class Pulse {
      source: Neuron;
      target: Neuron;
      progress: number;
      speed: number;
      width: number;
      
      constructor(source: Neuron, target: Neuron) {
        this.source = source;
        this.target = target;
        this.progress = 0;
        this.speed = 0.01 + Math.random() * 0.01;
        this.width = 1.5;
      }
      
      update() {
        this.progress += this.speed;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        if (this.progress > 1) return;
        
        const x = this.source.x + (this.target.x - this.source.x) * this.progress;
        const y = this.source.y + (this.target.y - this.source.y) * this.progress;
        
        ctx.beginPath();
        ctx.arc(x, y, this.width, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }
      
      isDone() {
        return this.progress >= 1;
      }
    }
    
    // Create neurons
    const createNeurons = () => {
      const neurons: Neuron[] = [];
      const neuronCount = Math.min(40, Math.floor(window.innerWidth * window.innerHeight / 35000));
      
      for (let i = 0; i < neuronCount; i++) {
        const size = 2 + Math.random() * 4;
        const margin = 50;
        const x = margin + Math.random() * (window.innerWidth - margin * 2);
        const y = margin + Math.random() * (window.innerHeight - margin * 2);
        neurons.push(new Neuron(x, y, size));
      }
      
      // Create connections between neurons
      neurons.forEach(neuron => {
        // Sort other neurons by distance
        const others = [...neurons].filter(n => n !== neuron);
        others.sort((a, b) => {
          const distA = Math.hypot(neuron.x - a.x, neuron.y - a.y);
          const distB = Math.hypot(neuron.x - b.x, neuron.y - b.y);
          return distA - distB;
        });
        
        // Connect to closest neurons
        let connections = 0;
        for (const other of others) {
          const distance = Math.hypot(neuron.x - other.x, neuron.y - other.y);
          if (distance < 200 && connections < neuron.maxConnections) {
            if (neuron.connectTo(other)) {
              connections++;
            }
          }
          
          if (connections >= neuron.maxConnections) break;
        }
      });
      
      return neurons;
    };
    
    const neurons = createNeurons();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw neurons
      neurons.forEach(neuron => {
        neuron.update();
        neuron.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Handle window resize
    window.addEventListener('resize', () => {
      setCanvasDimensions();
    });
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="neuron-background"
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

export default NeuronBackground;
