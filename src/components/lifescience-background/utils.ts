
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
}

export function getElementColors(baseOpacity: number): ElementColors {
  return {
    // DNA colors
    dnaBase: [
      `rgba(70, 130, 230, ${baseOpacity * 1.2})`,
      `rgba(50, 190, 130, ${baseOpacity * 1.2})`,
      `rgba(190, 70, 70, ${baseOpacity * 1.2})`,
      `rgba(230, 170, 50, ${baseOpacity * 1.2})`,
    ],
    dnaBackbone: `rgba(230, 230, 255, ${baseOpacity * 0.8})`,
    
    // Molecule colors
    moleculeAtoms: [
      `rgba(120, 170, 255, ${baseOpacity * 1.2})`,
      `rgba(100, 240, 150, ${baseOpacity * 1.2})`,
      `rgba(250, 130, 130, ${baseOpacity * 1.2})`,
      `rgba(250, 210, 90, ${baseOpacity * 1.2})`,
    ],
    moleculeBonds: `rgba(255, 255, 255, ${baseOpacity * 0.8})`,
    
    // Cell colors
    cellMembrane: `rgba(180, 200, 255, ${baseOpacity * 0.5})`,
    cellMembraneOuter: `rgba(180, 200, 255, ${baseOpacity * 0.7})`,
    cellNucleusInner: `rgba(120, 140, 220, ${baseOpacity * 0.9})`,
    cellNucleusOuter: `rgba(100, 120, 200, ${baseOpacity * 0.7})`,
    cellOrganelles: `rgba(180, 240, 200, ${baseOpacity * 0.8})`,
    
    // Neuron colors
    neuronSoma: `rgba(170, 170, 250, ${baseOpacity * 0.9})`,
    neuronSomaOuter: `rgba(150, 150, 230, ${baseOpacity * 0.6})`,
    neuronAxon: `rgba(220, 220, 255, ${baseOpacity * 0.7})`,
    neuronDendrite: `rgba(210, 210, 255, ${baseOpacity * 0.6})`,
    neuronPulse: `rgba(255, 255, 255, ${baseOpacity * 1.0})`,
    neuronTerminal: `rgba(210, 210, 255, ${baseOpacity * 0.7})`,
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
