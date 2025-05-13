
import React from 'react';
import EpigeneticAgeCalculator from '../components/EpigeneticAgeCalculator';
import VitruvianImage from '../components/VitruvianImage';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EpigeneticClock = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <VitruvianImage opacity={0.1} />
      <div className="container mx-auto px-4 py-16 mt-10 relative z-10">
        <h1 className="text-4xl font-bold mb-2 text-center">Epigenetic Age Calculator</h1>
        <p className="text-lg mb-8 text-center text-muted-foreground">
          Calculate your biological age using DNA methylation patterns
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="calculator">Calculate Age</TabsTrigger>
              <TabsTrigger value="info">About Epigenetic Clocks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calculator">
              <EpigeneticAgeCalculator />
            </TabsContent>
            
            <TabsContent value="info">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>What is an Epigenetic Clock?</h2>
                <p>
                  Epigenetic clocks are mathematical models that use DNA methylation markers to predict biological age.
                  Unlike chronological age (how many years since birth), biological age reflects your body's physiological
                  state and can be influenced by genetics, lifestyle, and environmental factors.
                </p>
                
                <h3>The Horvath Clock</h3>
                <p>
                  Developed by Dr. Steve Horvath in 2013, this epigenetic clock analyzes methylation patterns
                  at 353 specific CpG sites across the genome. The Horvath clock is considered a "pan-tissue" clock,
                  meaning it works across different types of tissues and cell types.
                </p>
                
                <h3>Interpreting Your Results</h3>
                <p>
                  A biological age that is lower than your chronological age may suggest that you're aging more slowly
                  than average, while a higher biological age might indicate accelerated aging. However, interpretation
                  should be done by healthcare professionals considering your full health context.
                </p>
                
                <h3>How to Use This Calculator</h3>
                <p>
                  This calculator requires raw data from a DNA methylation array, typically from services that analyze
                  methylation patterns across the genome. You'll need beta values for specific CpG sites used in the
                  Horvath model. If you have your raw methylation data, extract the values for the 353 sites and paste
                  them as comma-separated values.
                </p>
                
                <div className="bg-muted p-4 rounded-md mt-6">
                  <h4>Important Notice</h4>
                  <p className="text-sm">
                    This tool is for educational purposes only and is not intended to diagnose, treat, cure, or prevent
                    any disease. Always consult healthcare professionals for interpretation of epigenetic age results
                    and their implications for your health.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EpigeneticClock;
