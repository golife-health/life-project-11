
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeScienceBackground from "../components/LifeScienceBackground";

const EpigeneticClock = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <LifeScienceBackground type="dna" opacity={0.3} speed={0.2} density={0.5} direction="left-right" />
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Decoding Biological Time</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/80 mb-8">
            As we age, chemical marks accumulate on our DNA—telling a story about our lifetime of exposures, stressors, and metabolic shifts. That story is the epigenetic clock, a biomarker that reads out your "true" biological age vs. your calendar age. At Life Project, we're pushing beyond measurement to epigenetic engineering: targeted interventions (small molecules, CRISPR-based editors, lifestyle resets) that reprogram DNA methylation patterns and rewind the clock at its source. Imagine a future where you don't just track aging—you actively sculpt a younger epigenome, boosting tissue repair, resilience, and healthspan.
          </p>

          <div className="my-10 p-8 bg-blue-900/20 border border-blue-500/20 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-3 flex-shrink-0 mt-1"></span>
                <span>Real-time biological age assessment through non-invasive epigenetic sampling</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-3 flex-shrink-0 mt-1"></span>
                <span>Personalized interventions targeting specific methylation sites</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 h-6 rounded-full bg-blue-500 mr-3 flex-shrink-0 mt-1"></span>
                <span>Longitudinal tracking of biological age reversal</span>
              </li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">The Science Behind Epigenetic Clocks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            <div>
              <p>
                Every cell in your body contains the same DNA sequence—yet a skin cell differs dramatically from a neuron. This cellular identity comes from epigenetics: chemical modifications to DNA and its packaging that control which genes are active.
              </p>
              <p className="mt-4">
                As we age, our epigenetic landscape shifts in predictable patterns. DNA methylation—the addition of methyl groups to specific DNA sites—changes in ways so consistent that it forms a "clock" revealing your biological age.
              </p>
            </div>
            
            <div className="bg-black/30 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Clinical Applications</h3>
              <p className="mb-4">
                Our research leverages the latest advancements in epigenetic clock technology, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                <li>Horvath's multi-tissue clock</li>
                <li>GrimAge mortality predictor</li>
                <li>PhenoAge health status clock</li>
                <li>Life Project's proprietary intervention response clock</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EpigeneticClock;
