
import React from 'react';
import EpigeneticAgeCalculator from '../components/EpigeneticAgeCalculator';
import VitruvianImage from '../components/VitruvianImage';

const EpigeneticClock = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <VitruvianImage opacity={0.1} />
      <div className="container mx-auto px-4 py-16 mt-10 relative z-10">
        <h1 className="text-4xl font-bold mb-2 text-center">Epigenetic Age Calculator</h1>
        <p className="text-lg mb-8 text-center text-muted-foreground">
          Calculate your epigenetic age using the Horvath 2013 clock model
        </p>
        
        <div className="max-w-3xl mx-auto">
          <EpigeneticAgeCalculator />
        </div>
      </div>
    </div>
  );
};

export default EpigeneticClock;
