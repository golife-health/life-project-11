import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BinaryBackground from "../components/BinaryBackground";

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <BinaryBackground />
      <Navbar />
      
      {/* Top right logo removed */}
      
      <div className="container mx-auto px-6 max-w-4xl pt-24">
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Manifesto</h1>
          <p className="text-lg text-white/80 mb-8">
            Our vision and philosophy for extending human lifespan.
          </p>
          
          <div className="space-y-8 w-full">
            <section className="glass-panel p-6 md:p-8">
              <div className="prose prose-lg prose-invert max-w-none text-center">
                <p className="mb-4">
                  $LIFE token draws inspiration from ancient wisdom yet embodies modern scientific advancement. It transforms the paradigm of human longevity by creating economic incentives for breakthroughs in health extension and age reversal technologies.
                </p>
                
                <p className="mb-4">
                  Harness the power of advanced AI models and predictive algorithms that analyze biological pathways. $LIFE token leverages machine learning to accelerate discoveries and democratize access to cutting-edge longevity research.
                </p>
                
                <p className="mb-4">
                  Under the guiding principles of transparency and innovation, $LIFE token holders become pioneers in humanity's greatest quest: to extend healthspan, overcome biological limitations, and redefine what it means to live well.
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
