
import { MutableRefObject } from 'react';

export interface ElementColors {
  dnaBase: string[];
  dnaBackbone: string;
  moleculeAtoms: string[];
  moleculeBonds: string;
  cellMembrane: string;
  cellMembraneOuter: string;
  cellNucleusInner: string;
  cellNucleusOuter: string;
  cellOrganelles: string;
  neuronSoma: string;
  neuronSomaOuter: string;
  neuronAxon: string;
  neuronDendrite: string;
  neuronPulse: string;
  neuronTerminal: string;
}

export interface ElementProps {
  width: number;
  height: number;
  count: number;
  colors: ElementColors;
  direction?: 'left-right' | 'right-left' | 'top-bottom' | 'bottom-top' | 'diagonal-1' | 'diagonal-2' | 'random';
}

export function getElementColors(baseOpacity: number): ElementColors {
  // All colors set to grey with the specified opacity
  const greyBase = `rgba(200, 200, 200, ${baseOpacity})`;
  const greyLight = `rgba(220, 220, 220, ${baseOpacity})`;
  const greyMedium = `rgba(180, 180, 180, ${baseOpacity})`;
  const greyDark = `rgba(160, 160, 160, ${baseOpacity})`;
  
  return {
    // DNA colors - all grey
    dnaBase: [
      greyBase,
      greyBase,
      greyBase,
      greyBase,
    ],
    dnaBackbone: greyLight,
    
    // Molecule colors - all grey
    moleculeAtoms: [
      greyMedium,
      greyMedium,
      greyMedium,
      greyMedium,
    ],
    moleculeBonds: greyLight,
    
    // Cell colors - all grey
    cellMembrane: greyLight,
    cellMembraneOuter: greyMedium,
    cellNucleusInner: greyDark,
    cellNucleusOuter: greyMedium,
    cellOrganelles: greyBase,
    
    // Neuron colors - all grey
    neuronSoma: greyMedium,
    neuronSomaOuter: greyLight,
    neuronAxon: greyLight,
    neuronDendrite: greyLight,
    neuronPulse: greyLight,
    neuronTerminal: greyLight,
  };
}

export interface AnimationElement {
  update(speed: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

export function setupCanvas(
  canvas: HTMLCanvasElement | null, 
  containerRef: MutableRefObject<HTMLDivElement | null>
): boolean {
  if (!canvas || !containerRef.current) return false;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return false;
  
  const container = containerRef.current;
  const devicePixelRatio = window.devicePixelRatio || 1;
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  
  return true;
}

// Helper function to get velocity based on direction
export function getDirectionalVelocity(direction: string): { vx: number, vy: number } {
  const baseSpeed = 0.5;
  
  switch(direction) {
    case 'left-right':
      return { vx: baseSpeed, vy: 0 };
    case 'right-left':
      return { vx: -baseSpeed, vy: 0 };
    case 'top-bottom':
      return { vx: 0, vy: baseSpeed };
    case 'bottom-top':
      return { vx: 0, vy: -baseSpeed };
    case 'diagonal-1':
      return { vx: baseSpeed * 0.7, vy: baseSpeed * 0.7 };
    case 'diagonal-2':
      return { vx: baseSpeed * 0.7, vy: -baseSpeed * 0.7 };
    case 'random':
    default:
      return {
        vx: (Math.random() - 0.5) * baseSpeed,
        vy: (Math.random() - 0.5) * baseSpeed
      };
  }
}
