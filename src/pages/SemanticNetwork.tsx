
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeScienceBackground from "../components/LifeScienceBackground";

const SemanticNetwork = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <LifeScienceBackground type="molecules" opacity={0.3} speed={0.2} density={0.5} direction="diagonal-1" />
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mapping the Longevity Network</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/80 mb-8">
            Lifespan isn't a single pathway but a vast, interwoven network of genes, proteins, metabolites, and lifestyle factors. Our Advanced Semantic Network layers multi-omics data, clinical trials, and real-world health metrics into a living knowledge graph—turning terabytes of longevity research into actionable insights.
          </p>
          
          <div className="my-10 bg-black/30 p-8 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Network Components</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Nodes</h3>
                <p>From sirtuins and NAD⁺ to mTOR and autophagy markers</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Edges</h3>
                <p>Mechanistic links, co-expression patterns, intervention outcomes</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">AI-Powered Queries</h3>
                <p>Pose complex "what-if" questions ("What combination of senolytics and dietary restriction best lifts cardiac health?") and get evidence-backed answers in seconds.</p>
              </div>
            </div>
          </div>
          
          <p className="my-6">
            This isn't static reference material—it's a self-optimizing brain that learns from every data point, accelerates hypothesis generation, and guides your personalized path to lifelong vitality.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">Applications of Our Semantic Network</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-3">Personalized Interventions</h3>
              <p>
                Map your unique biomarkers against our knowledge graph to identify tailored longevity interventions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-3">Drug Discovery</h3>
              <p>
                Identify novel therapeutic targets and drug repurposing opportunities for age-related diseases.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-3">Clinical Decision Support</h3>
              <p>
                Aid healthcare providers in optimizing patient outcomes through evidence-based interventions.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SemanticNetwork;
