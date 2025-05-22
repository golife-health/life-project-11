
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BinaryBackground from "../components/BinaryBackground";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-black text-white">
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
            <section className="glass-panel p-6 md:p-8 mx-4 md:mx-12">
              <div className="prose prose-lg prose-invert max-w-none px-4 md:px-8">
                <p className="mb-6 text-xl font-semibold">
                  Longevity is not a privilege but a fundamental human right—one we are committed to democratizing across borders, backgrounds, and beliefs.
                </p>
                
                <p className="mb-6 text-lg">
                  We stand for translating complex science into simple wisdom, using AI not to replace human intelligence but to amplify it for all.
                </p>
                
                <p className="mb-6 text-lg">
                  We believe that living to 150 years should be a choice available to everyone, not just those with privileged access to knowledge.
                </p>
                
                <p className="mb-6 text-lg">
                  We reject the notion that geography, economics, or education should determine how long and how well you live.
                </p>
                
                <p className="mb-6 text-lg">
                  We are building a world where collective intelligence meets artificial intelligence to create a future where health span equals life span for every human on earth.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Manifesto;
