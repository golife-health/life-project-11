import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BinaryBackground from "../components/BinaryBackground";
const Manifesto = () => {
  return <div className="min-h-screen bg-black text-white">
      <BinaryBackground />
      <Navbar />
      
      <div className="container mx-auto px-6 max-w-4xl pt-24">
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Manifesto</h1>
          <p className="text-lg text-white/80 mb-3">
            Our vision and philosophy for extending human lifespan.
          </p>
          <p className="text-md text-primary/90 italic mb-8">
            LIFE: Longevity Innovation For Extending-healthspan
          </p>
          
          <div className="space-y-8 w-full">
            <section className="glass-panel p-6 md:p-8">
              <div className="prose prose-lg prose-invert max-w-none text-center">
                <p className="mb-6 text-xl">
                  LIFE Project democratizes longevity by uniting ancient wisdom, modern science, and decentralized community power
                </p>
                
                <p className="mb-6 text-lg">
                  Through Data-to-Earn, users contribute health data and become co-creators of collective longevity intelligence
                </p>
                
                <p className="mb-6 text-lg">
                  The Life delivers trusted, science-backed answers — like Perplexity for longevity, but verified.
                </p>
                
                <p className="mb-6 text-lg">
                  DAO governance ensures research and platform decisions are made by the community.
                </p>
                
                <p className="mb-6 text-lg">
                  The $LIFE token incentivizes innovation, aligning community participation with real scientific progress.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default Manifesto;