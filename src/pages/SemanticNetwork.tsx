import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LifeScienceBackground from "../components/LifeScienceBackground";
const SemanticNetwork = () => {
  return <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <LifeScienceBackground type="molecules" opacity={0.3} speed={0.2} density={0.5} direction="diagonal-1" />
      </div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Advanced Semantic Network of Longevity</h1>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/80 mb-8">
            The Advanced Semantic Network is the core knowledge engine powering the Life— LIFE Project's trusted AI platform for longevity insights.
          </p>
          
          <p className="text-lg text-white/80 mb-8">
            Unlike generic AI models that often generate unverified or misleading information, LIFE's Semantic Network is built on scientifically validated research, connecting peer-reviewed studies, expert-reviewed data, and real-world wellness inputs (like diet, exercise, and lifestyle factors).
          </p>
          
          <div className="my-10 bg-black/30 p-8 border border-white/10 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Key Functions of the Semantic Network:</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Translate complex longevity science into accessible knowledge</h3>
                <p className="pl-4 border-l-2 border-blue-400/30">
                  Simplifies relationships between lifestyle habits, health metrics, and aging mechanisms into understandable insights for everyday users.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Deliver expert-verified, reliable answers</h3>
                <p className="pl-4 border-l-2 border-blue-400/30">
                  Powers the Life Prototype's responses by ensuring every answer is based on verified scientific literature, reviewed for accuracy and safety.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Continuously evolve with new research & community data</h3>
                <p className="pl-4 border-l-2 border-blue-400/30">
                  The network grows dynamically as new longevity studies and user-contributed wellness data are added, keeping knowledge up-to-date and relevant.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Enable transparent, explainable AI outputs</h3>
                <p className="pl-4 border-l-2 border-blue-400/30">
                  Maintains causal reasoning and traceability, ensuring users can understand how each answer is derived from validated sources.
                </p>
              </div>
            </div>
          </div>
          
          <p className="my-6 text-lg">
            By focusing on delivering science-backed longevity knowledge to the community, the Semantic Network shifts from a lab-centric research tool to a community-facing AI engine, aligned with LIFE Project's mission of democratizing healthspan extension.
          </p>
          
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
    </div>;
};
export default SemanticNetwork;