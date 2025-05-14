import { useState, useEffect } from 'react';
import { DNAElement, MoleculeElement, NeuronElement, CellElement } from './utils';

interface LifeScienceBackgroundProps {
  type?: 'dna' | 'molecules' | 'neurons' | 'cells';
  opacity?: number;
  speed?: number;
  density?: number;
  direction?: 'left-right' | 'right-left' | 'top-bottom' | 'bottom-top' | 'diagonal-1' | 'diagonal-2';
}

const LifeScienceBackground = ({
  type = 'dna',
  opacity = 0.5,
  speed = 1,
  density = 1,
  direction = 'left-right',
}: LifeScienceBackgroundProps) => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const createElement = () => {
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      const randomSize = Math.random() * 3 + 1; // Size between 1 and 4
      const animationDuration = (Math.random() * 5 + 5) / speed; // Duration between 5 and 10 seconds

      let element;

      switch (type) {
        case 'dna':
          element = <DNAElement key={Math.random()} x={randomX} y={randomY} size={randomSize} duration={animationDuration} direction={direction} />;
          break;
        case 'molecules':
          element = <MoleculeElement key={Math.random()} x={randomX} y={randomY} size={randomSize} duration={animationDuration} direction={direction} />;
          break;
        case 'neurons':
          element = <NeuronElement key={Math.random()} x={randomX} y={randomY} size={randomSize} duration={animationDuration} direction={direction} />;
          break;
        case 'cells':
          element = <CellElement key={Math.random()} x={randomX} y={randomY} size={randomSize} duration={animationDuration} direction={direction} />;
          break;
        default:
          element = <DNAElement key={Math.random()} x={randomX} y={randomY} size={randomSize} duration={animationDuration} direction={direction} />;
      }

      return element;
    };

    const newElements = Array.from({ length: Math.floor(density * 25) }, () => createElement());
    setElements(newElements);

    return () => {
      // Cleanup if needed
    };
  }, [type, speed, density, direction]);

  return (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity }}
    >
      {elements.map((element, index) => element)}
    </div>
  );
};

export default LifeScienceBackground;
